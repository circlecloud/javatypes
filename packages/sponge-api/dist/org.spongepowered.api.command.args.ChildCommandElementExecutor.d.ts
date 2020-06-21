declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    // @ts-ignore
                    class ChildCommandElementExecutor extends org.spongepowered.api.command.args.CommandElement implements org.spongepowered.api.command.spec.CommandExecutor {
                        /**
                         * Create a new combined argument element and executor to handle the
                         * parsing and execution of child commands.
                         * @param fallbackExecutor The executor to execute if the child command
                         *      has been marked optional (Generally when this is wrapped in a
                         *      {#link GenericArguments#optional(CommandElement)}
                         * @deprecated Use the other constructor instead. Note: this entire system
                         *      will be replaced in API 8.
                         */
                        // @ts-ignore
                        constructor(fallbackExecutor: org.spongepowered.api.command.spec.CommandExecutor)
                        /**
                         * Create a new combined argument element and executor to handle the
                         * parsing and execution of child commands.
                         * @param fallbackExecutor The executor to execute if the child command
                         *      has been marked optional (Generally when this is wrapped in a
                         *      {#link GenericArguments#optional(CommandElement)}
                         * @param fallbackElements The alternate {#link CommandElement}s that should
                         *      be parsed if a child element fails to be parsed
                         * @param fallbackOnFail If true, then if a child command cannot parse the
                         *      elements, the exception is discarded and the parent command attempts
                         *      to parse the elements. If false, a child command will not pass
                         *      control back to the parent, displaying its own exception message
                         */
                        // @ts-ignore
                        constructor(fallbackExecutor: org.spongepowered.api.command.spec.CommandExecutor, fallbackElements: org.spongepowered.api.command.args.CommandElement, fallbackOnFail: boolean)
                        /**
                         * Register a child command for a given set of aliases.
                         * @param callable The command to register
                         * @param aliases The aliases to register it as
                         * @return The child command's mapping, if present
                         */
                        // @ts-ignore
                        public register(callable: org.spongepowered.api.command.CommandCallable, aliases: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                        /**
                         * Register a child command for a given set of aliases.
                         * @param callable The command to register
                         * @param aliases The aliases to register it as
                         * @return The child command's mapping, if present
                         */
                        // @ts-ignore
                        public register(callable: org.spongepowered.api.command.CommandCallable, ...aliases: java.lang.String[] | string[]): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                        // @ts-ignore
                        public complete(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): Array<java.lang.String | string>
                        // @ts-ignore
                        public parse(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): void
                        // @ts-ignore
                        parseValue(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs): any
                        // @ts-ignore
                        public execute(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandContext): org.spongepowered.api.command.CommandResult
                        // @ts-ignore
                        public getUsage(src: org.spongepowered.api.command.CommandSource): org.spongepowered.api.text.Text
                    }
                }
            }
        }
    }
}
