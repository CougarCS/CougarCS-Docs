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
    <br/>
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
