# ukibot

![ukibot](https://cdn.discordapp.com/app-icons/617520090535165952/8b1bf0423b68620f30e1a536187909a0.png?size=128 "ukibot logo")

Simple bot for Uki's Hangout, a project to play around with the discord.io library.

## Installation

Clone the repository in to a local folder, install dependencies. You will need both [Git](https://git-scm.com/downloads) and [Node](https://nodejs.org/en/) installed.

```bash
git clone https://github.com/josh-tf/ukibot.git
npm install
npm run dev
```

## Usage

The commands below can be run from any channel, channel limitation and permissions will be implemented soon.

All commands are prefixed with `>` by default, this can be defined in `config.json`

### User Commands

```python
help # view help information
play (youtube url) # play a song
skip # skip current song
stop # stop the music
nowplaying # view current song name

```

### Admin Commands

```python
ban # ban a user
kick # kick a discord member
purge # delete last message
userinfo # view information on a user

```

## Folder Structure

Commands are stored in a subfolder, the main entrypoint is `index.js`

```python
./commands/ # individual functions
```

## Contributing

Pull requests are welcome ❤️

## License

[MIT](https://choosealicense.com/licenses/mit/)
