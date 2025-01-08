---
title: Imports
sidebar_position: 1
---
These are the common imports that are necessary for implementation of each command:

    ```ts
    import { Command } from "../../interfaces/Command";
    import { createEmbed } from "../../utils/embeded";
    import { commandLog, sendError } from "../../utils/logs";
    ```

Specific imports catered to each command will follow the same pattern:

    ```ts
    import { export1 } from "module-name";
    import { export2, export3 } from "module-name";
    ```
   
### Command
##### path: src/interfaces/Command.ts
    The Command function builds the command interaction.

### createEmbed
##### path: src/utils/embeded.ts
    The createEmbed object function the embeds you will use in your custom command to create a visual reply on Discord.

### commandLog
##### path: src/utils/logs.ts
    The commandLog function builds the command.

### sendError
##### path: src/utils/logs.ts
    The sendError function builds the error response.

#### exportN
    Name of the exports to be imported. 
    
#### module-name
    The module to import from. This is often a relative or absolute URL to the `.ts` file containing the module. 

