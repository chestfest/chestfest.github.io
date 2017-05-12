import random
import string

from google.appengine.ext import ndb

from flask import Flask
from flask import render_template
from flask import abort
from flask import redirect
from flask import request

app = Flask(__name__)

APP_ROOT = 'url-shortener-thinkallabout.c9users.io'

class ShortURL(ndb.Model):
    url = ndb.StringProperty()
    creation_time = ndb.DateTimeProperty(auto_now_add=True)

def generate_random_string(size=6, chars=string.ascii_lowercase + string.digits):
    """Generate a random string."""
    return ''.join(random.choice(chars) for _ in range(size))

@app.route('/')
def root():
    """Render the home page."""
    return render_template('index.html')
    
@app.route('/', methods=['POST'])
def create_short_url():
    """Create a new short URL."""
    url = request.form['url']
    
    # Generate a random string for the short URL and save to Cloud Datastore.
    short_url = generate_random_string()
    ShortURL(id=short_url, url=url).put()
    
    short_url = APP_ROOT + '/' + short_url
    return render_template('url_created.html', url=url, short_url=short_url)

@app.route('/<string:short_url>')
def redirect_short_url(short_url):
    """Redirect to a website from a short URL."""
    url_entity = ShortURL.get_by_id(short_url)
    if not url_entity:
        abort(404)
    return redirect(url_entity.url)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
