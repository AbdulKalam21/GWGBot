# Contributing to the project:

First of all, we are happy to see you and are looking forward to your contributions to the GWGbot</br>
I am `Kittycat#5642` and I will (along with a few other) be looking at all your PRs :)

## Prerequisites:

The project has been written in Typescript and discord.js hence some prior knowledge is required</br>
You must also be familier with WOKcommands command handler if you are looking forward to add new commands</br>
The database used for the thanks system is mongodb hence you must be familier with that too</br>

## Project structure:

The project root folder has the `index.ts` which serves as the entry point for the Bot.</br>
All commands are included in the `commands` folder.</br>
All economy/thanks related commands are contained under thr `commands/leaderboard`.  </br>
The `commands/leaderboard/schema` folder contains the schemas("blueprint") in which the data will be stored in the database.</br>

## Conventions:

- All commands must be marked testOnly(refer to `ping.ts`)
- Follow the `ping.ts` as the template for writing new commands
- For commands requiring API interactions follow `cat.ts` as the template
- Each command should be contained in their own files
- New command files should be named as `<command_name>.ts` preferably
- Each new command should contain a docstring at the start documenting the purpose of the command
- All files must be appropiately commented to help future contributors
