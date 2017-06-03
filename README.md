<html><div align="center"><center><img src="/Display/Images/ChestFest.gif" style="w3-image" id="img" alt="Chest"></center></div></html>


##About
Our service specificly provides each individual a unique program that exemplifies professional accuracy of debunking website of the users concern. We arrange a slick UI that impresses our customers.
- Object-oriented
- Performant
- Predictable abstractions

## About
discord.js is a powerful [node.js](https://nodejs.org) module that allows you to interact with the
[Discord API](https://discordapp.com/developers/docs/intro) very easily.

- Object-oriented
- Predictable abstractions
- Performant
- 100% coverage of the Discord API

## Installation
**Node.js 8.0.0 or newer is required.**  
Ignore any warnings about unmet peer dependencies, as they're all optional.

Without voice support: `npm install discord.js --save`  
With voice support ([node-opus](https://www.npmjs.com/package/node-opus)): `npm install discord.js node-opus --save`  
With voice support ([opusscript](https://www.npmjs.com/package/opusscript)): `npm install discord.js opusscript --save`

### Audio engines
The preferred audio engine is node-opus, as it performs significantly better than opusscript. When both are available, discord.js will automatically choose node-opus.
Using opusscript is only recommended for development environments where node-opus is tough to get working.
For production bots, using node-opus should be considered a necessity, especially if they're going to be running on multiple servers.

### Optional packages
- [bufferutil](https://www.npmjs.com/package/bufferutil) to greatly speed up the WebSocket when *not* using uws (`npm install bufferutil --save`)
- [erlpack](https://github.com/hammerandchisel/erlpack) for significantly faster WebSocket data (de)serialisation (`npm install hammerandchisel/erlpack --save`)
- One of the following packages can be installed for faster voice packet encryption and decryption:
    - [sodium](https://www.npmjs.com/package/sodium) (`npm install sodium --save`)
    - [libsodium.js](https://www.npmjs.com/package/libsodium-wrappers) (`npm install libsodium-wrappers --save`)
- [uws](https://www.npmjs.com/package/uws) for a much faster WebSocket connection (`npm install uws --save`)

## Example usage
```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('your token');
```

## Links
* [Website](https://discord.js.org/) ([source](https://github.com/hydrabolt/discord.js-site))
* [Documentation](https://discord.js.org/#/docs)
* [Discord.js server](https://discord.gg/bRCvFy9)
* [Discord API server](https://discord.gg/rV4BwdK)
* [GitHub](https://github.com/hydrabolt/discord.js)
* [NPM](https://www.npmjs.com/package/discord.js)
* [Related libraries](https://discordapi.com/unofficial/libs.html) (see also [discord-rpc](https://www.npmjs.com/package/discord-rpc))

## Contributing
Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation](https://discord.js.org/#/docs).  
See [the contribution guide](https://github.com/hydrabolt/discord.js/blob/master/.github/CONTRIBUTING.md) if you'd like to submit a PR.

## Help
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [Discord.js Server](https://discord.gg/bRCvFy9).


##License
Copyright © 2017 ChestFest (http://chestfest.github.io)

