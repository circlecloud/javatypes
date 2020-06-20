declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    // @ts-ignore
                    class CommandFlags extends org.spongepowered.api.command.args.CommandElement {
                        // @ts-ignore
                        constructor(childElement: org.spongepowered.api.command.args.CommandElement, usageFlags: java.util.Map<java.util.List<java.lang.String>, org.spongepowered.api.command.args.CommandElement>, shortFlags: java.util.Map<java.lang.String, org.spongepowered.api.command.args.CommandElement>, longFlags: java.util.Map<java.lang.String, org.spongepowered.api.command.args.CommandElement>, unknownShortFlagBehavior: org.spongepowered.api.command.args.CommandFlags.UnknownFlagBehavior, unknownLongFlagBehavior: org.spongepowered.api.command.args.CommandFlags.UnknownFlagBehavior, anchorFlags: boolean)
                        // @ts-ignore
                        parse(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): void
                        // @ts-ignore
                        getUsage(src: org.spongepowered.api.command.CommandSource): org.spongepowered.api.text.Text
                        // @ts-ignore
                        parseValue(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs): java.lang.Object
                        // @ts-ignore
                        complete(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): java.util.List<java.lang.String>
                    }
                }
            }
        }
    }
}
