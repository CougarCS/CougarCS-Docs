---
title: Exports
sidebar_position: 2
---

    The `export` declaration is used to export values from a JavaScript module. Exported values can then be imported into other programs with the `import` declaration. 

    ```ts
    // each new command starts with an export declaration
    export const newCommand: Command = {
        // command content
    }
    ```

    You later import the command in `"../util/_Commandlists.ts"` file following the same naming conventions:

    ```ts
    import { newCommand } from "../commands/[role]-commands/new-command";

    // and underneath the list of imports, you must add to the CommandList as well
    export const CommandList: Command[] = [
        .
        .
        .
        newCommand
    ];
    ```
    This helps package all the working commands together to be imported into other programs.
