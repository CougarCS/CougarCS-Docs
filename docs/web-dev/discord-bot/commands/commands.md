---
title: Role Specific Commands
sidebar_position: 1
---

All Discord commands available on CougarCS Bot.



<details>
  <summary>User Commands</summary>
  <div>
    <div>This is the detailed content to explain pattern of each file</div>
    <br/>
    <h3>Imports</h3>
    <br/>
    ```ts
    // these are the common imports that are necessary for implementation of each command

    import { Command } from "../../interfaces/Command";
    import { createEmbed } from "../../utils/embeded";
    import { commandLog, sendError } from "../../utils/logs";
   
    // specific imports catered to each command will follow the same pattern:

    import { export1 } from "module-name";
    import { export2, export3 } from "module-name";
    ```
    <br/>
    <h4>exportN</h4>
    Name of the exports to be imported. 
    <br/>
    <h4>module-name</h4>
    The module to import from. This is often a relative or absolute URL to the `.ts` file containing the module. 
    <br/>
    <h3>Exports</h3>
    The `export` declaration is used to export values from a JavaScript module. Exported values can then be imported into other programs with the `import` declaration. 
    
    ```ts
    // each new command starts with an export declaration
    export const newCommand: Command = {
        // command content
    }

    // you later import the command in "../util/_Commandlists.ts" file following the same naming conventions
    import { newCommand } from "../commands/[role]-commands/new-command";

    // and underneath the list of imports, you must add to the CommandList as well
    export const CommandList: Command[] = [
        .
        .
        .
        newCommand
    ];
    
    // this helps package all the working commands together to be imported into other programs
    ```
    <br/>
    <h3>Creating a Command </h3>

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
    })
    ```
    More on Discord.js slash commands:  https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files
   <br/>
   <h3>Execution of Command</h3>
    
    ```ts
      // source code: CougarCS-Bot/src/commands/admin-commands/create-contact.ts

      // defines code that will be executed once command is ran
      run: async (interaction) => {
        // tells Discord API to wait for the bot to process the command before sending a response
        await interaction.deferReply({ ephemeral: true }); // ephemeral set to true means the response will not be visible to everyone in the channel
        const { user } = interaction;

        const uh_id = interaction.options.get("psid", true).value as number;
        const email = interaction.options.get("email", true).value as string;

        // create an object that pertains to the command's function:
        // in this case, ContactInsert is made to insert information about the Discord user
        const create: ContactInsert = {
            // each of these arguments acts as options the user can select to fill in information on the Discord bot
            uh_id, 
            email,
            discord_snowflake: user.id,
            // retrieves the value of the option and casts it as a type:
            // in this case, we are retrieving the value of "first-name" and casting it as type string
            first_name: interaction.options.get("first-name", true).value as string,
            last_name: interaction.options.get("last-name", true)?.value as
            | string
            | undefined,
            phone_number: interaction.options.get("phone", true)?.value as
            | number
            | undefined,
            shirt_size_id: interaction.options.get("shirt-size", true)?.value as
            | string
            | undefined,
        };
      }
    ```
    
   <br/>
    
        *  [/balance](user-commands/balance)
        *  [/claim](user-commands/claim)
        *  [/create-profile](user-commands/create-profile)
        *  [/leaderboard](user-commands/leaderboard)
        *  [/report](user-commands/report)
        *  [/update-profile](user-commands/update-profile)
  </div>
</details>


<details>
  <summary>Member Commands</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
        * link to cmd
  </div>
</details>



<details>
  <summary>Tutor Commands</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
        * link to cmd
  </div>
</details>



<details>
  <summary>Officer Commands</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
        * link to cmd
  </div>
</details>


<details>
  <summary>Admin Commands</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
        * link to cmd
  </div>
</details>
