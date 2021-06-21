import { CommandModule } from "yargs";
import { GlobalArgv } from "../options";

export const CompletionFishCommand: CommandModule<{}, GlobalArgv> = {
  command: "completion-fish",
  describe: "Generate completion script for Fish",
  handler: () => {
    console.log(`
###-begin-yaclt-completions-###
#
# yargs command completion script
#
# Installation: yaclt completion-fish >> ~/.config/fish/config.fish
complete --no-files --command yaclt --arguments "(yaclt --get-yargs-completions (commandline -cp))"
`);
  },
};
