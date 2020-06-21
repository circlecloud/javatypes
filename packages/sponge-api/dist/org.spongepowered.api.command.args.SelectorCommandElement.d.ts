declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    /**
                     * Abstract command element that matches values based on a {@link Selector}.
                     */
                    // @ts-ignore
                    abstract class SelectorCommandElement extends org.spongepowered.api.command.args.PatternMatchingCommandElement {
                        // @ts-ignore
                        constructor(key: org.spongepowered.api.text.Text)
                        // @ts-ignore
                        parseValue(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs): any
                        // @ts-ignore
                        public complete(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): Array<java.lang.String | string>
                    }
                }
            }
        }
    }
}
