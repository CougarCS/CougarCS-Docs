---
title: Imports
sidebar_position: 1
---

    ```ts
    // these are the common imports that are necessary for implementation of each command

    import { Command } from "../../interfaces/Command";
    import { createEmbed } from "../../utils/embeded";
    import { commandLog, sendError } from "../../utils/logs";
   
    // specific imports catered to each command will follow the same pattern:

    import { export1 } from "module-name";
    import { export2, export3 } from "module-name";
    ```
   
#### exportN
    Name of the exports to be imported. 
    
#### module-name
    The module to import from. This is often a relative or absolute URL to the `.ts` file containing the module. 
