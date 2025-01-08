---
title: Execution of Command
sidebar_position: 4
---

 Here's an example on how to define code that will be executed once the command is ran:

  ```ts
  // source code: CougarCS-Bot/src/commands/admin-commands/create-contact.ts

    run: async (interaction) => {

      // tells Discord API to wait for the bot to process the command before sending a response
      await interaction.deferReply({ ephemeral: true }); // ephemeral set to true means the response will only be visible to you
      const { user } = interaction;
      const uh_id = interaction.options.get("psid", true).value as number;
      const email = interaction.options.get("email", true).value as string;

      // create a function that pertains to the command's usage:
      // in this case, ContactInsert is made to insert information about the Discord user
      const create: ContactInsert = {

          // each of these arguments acts as options the user can select to fill in information on the Discord bot
          uh_id, 
          email,
          discord_snowflake: user.id,
          
          // whenever possible, retrieve the value of the option and cast it as its corresponding type:
          first_name: interaction.options.get("first-name", true).value as string, // in this case, we are retrieving the value of "first-name" and casting it as type string
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

