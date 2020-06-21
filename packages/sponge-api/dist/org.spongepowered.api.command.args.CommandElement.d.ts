declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    /**
                     * Represents a command argument element.
                     */
                    // @ts-ignore
                    abstract class CommandElement extends java.lang.Object {
                        // @ts-ignore
                        constructor(key: org.spongepowered.api.text.Text)
                        /**
                         * Return the key to be used for this object.
                         * @return the user-facing representation of the key
                         */
                        // @ts-ignore
                        public getKey(): org.spongepowered.api.text.Text
                        /**
                         * Return the plain key, to be used when looking up this command element in
                         * a {@link CommandContext}. If the key is a {@link TranslatableText}, this
                         * is the translation's id. Otherwise, this is the result of
                         * {@link Text#toPlain()}.
                         * @return the raw key
                         */
                        // @ts-ignore
                        public getUntranslatedKey(): string
                        /**
                         * Attempt to extract a value for this element from the given arguments and
                         * put it in the given context. This method normally delegates to
                         * {@link #parseValue(CommandSource, CommandArgs)} for getting the values.
                         * This method is expected to have no side-effects for the source, meaning
                         * that executing it will not change the state of the {@link CommandSource}
                         * in any way.
                         * @param source The source to parse for
                         * @param args The args to extract from
                         * @param context The context to supply to
                         * @throws ArgumentParseException if unable to extract a value
                         */
                        // @ts-ignore
                        public parse(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): void
                        /**
                         * Attempt to extract a value for this element from the given arguments.
                         * This method is expected to have no side-effects for the source, meaning
                         * that executing it will not change the state of the {@link CommandSource}
                         * in any way.
                         * @param source The source to parse for
                         * @param args the arguments
                         * @return The extracted value
                         * @throws ArgumentParseException if unable to extract a value
                         */
                        // @ts-ignore
                        abstract parseValue(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs): any
                        /**
                         * Fetch completions for command arguments.
                         * @param src The source requesting tab completions
                         * @param args The arguments currently provided
                         * @param context The context to store state in
                         * @return Any relevant completions
                         */
                        // @ts-ignore
                        public abstract complete(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): Array<java.lang.String | string>
                        /**
                         * Return a usage message for this specific argument.
                         * @param src The source requesting usage
                         * @return The formatted usage
                         */
                        // @ts-ignore
                        public getUsage(src: org.spongepowered.api.command.CommandSource): org.spongepowered.api.text.Text
                    }
                }
            }
        }
    }
}
