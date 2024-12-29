---
title: Creating a Command
sidebar_position: 3
---



    ```ts
    // here's a snippet from create-profile.ts of how to set up all utility commands

    // create a Command object
    export const createProfile: Command = {
        // where you create metadata for the command
        data: new SlashCommandBuilder() 
        // at a minimum, you must set the name and description
        .setName("create-profile")
        .setDescription("Create a CougarCS profile!")
    // you can add type string, number, user, role, channel, etc. as options
    .addNumberOption((option) =>
            // then set values and restrictions for each option
            option
                .setName("psid")
                .setDescription(
                 "Your UH issued PSID number (7 digit id). This does not change!"
                )       
                .setRequired(true)
                .setMaxValue(9999999)
                .setMinValue(1000000)
    )
    .addStringOption((option) =>
      option
        .setName("email")
        .setDescription("Your preferred email!")
        .setRequired(true)
    )
    }
    ```
    More on Discord.js slash commands:  https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files
