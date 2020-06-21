declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace spec {
                    namespace CommandSpec {
                        /**
                         * Builder for command specs.
                         */
                        // @ts-ignore
                        class Builder extends java.lang.Object {
                            /**
                             * Sets the permission that will be checked before using this command.
                             * @param permission The permission to check
                             * @return this
                             */
                            // @ts-ignore
                            public permission(permission: java.lang.String | string): org.spongepowered.api.command.spec.CommandSpec.Builder
                            /**
                             * Sets the callback that will handle this command's execution.
                             * @param executor The executor that will be called with this command's
                             *      parsed arguments
                             * @return this
                             */
                            // @ts-ignore
                            public executor(executor: org.spongepowered.api.command.spec.CommandExecutor): org.spongepowered.api.command.spec.CommandSpec.Builder
                            /**
                             * Adds more child arguments for this command.
                             * If an executor or arguments are set, they are used as fallbacks.
                             * @param children The children to use
                             * @return this
                             */
                            // @ts-ignore
                            public children(children: java.util.Map<java.util.List<java.lang.String | string> | Array<java.lang.String | string>, any>): org.spongepowered.api.command.spec.CommandSpec.Builder
                            /**
                             * Add a single child command to this command.
                             * @param child The child to add
                             * @param aliases Aliases to make the child available under. First
                             *      one is primary and is the only one guaranteed to be listed in
                             *      usage outputs.
                             * @return this
                             */
                            // @ts-ignore
                            public child(child: org.spongepowered.api.command.CommandCallable, ...aliases: java.lang.String[] | string[]): org.spongepowered.api.command.spec.CommandSpec.Builder
                            /**
                             * Add a single child command to this command.
                             * @param child The child to add.
                             * @param aliases Aliases to make the child available under. First
                             *      one is primary and is the only one guaranteed to be listed in
                             *      usage outputs.
                             * @return this
                             */
                            // @ts-ignore
                            public child(child: org.spongepowered.api.command.CommandCallable, aliases: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>): org.spongepowered.api.command.spec.CommandSpec.Builder
                            /**
                             * A short, one-line description of this command's purpose.
                             * @param description The description to set
                             * @return this
                             */
                            // @ts-ignore
                            public description(description: org.spongepowered.api.text.Text): org.spongepowered.api.command.spec.CommandSpec.Builder
                            /**
                             * Sets an extended description to use in longer help listings for this
                             * command. Will be appended to the short description and the command's
                             * usage.
                             * @param extendedDescription The description to set
                             * @return this
                             */
                            // @ts-ignore
                            public extendedDescription(extendedDescription: org.spongepowered.api.text.Text): org.spongepowered.api.command.spec.CommandSpec.Builder
                            /**
                             * If a child command is selected but fails to parse arguments passed to
                             * it, the following determines the behavior.
                             * <ul>
                             * <li>If this is set to <strong>false</strong>, this command (the
                             * parent) will not attempt to parse the command, and will send back
                             * the error from the child.</li>
                             * <li>If this is set to <strong>true</strong>, the error from the
                             * child will simply be discarded, and the parent command will
                             * execute.</li>
                             * </ul>
                             * <p>The default for this is <strong>true</strong>, which emulates the
                             * behavior from previous API revisions.</p>
                             * @param childCommandFallback Whether to fallback on argument parse
                             *       failure
                             * @return this
                             */
                            // @ts-ignore
                            public childArgumentParseExceptionFallback(childCommandFallback: boolean): org.spongepowered.api.command.spec.CommandSpec.Builder
                            /**
                             * Sets the argument specification for this command. Generally, for a
                             * multi-argument command the {@link GenericArguments#seq(CommandElement...)}
                             * method is used to parse a sequence of args.
                             * @see GenericArguments
                             * @param args The arguments object to use
                             * @return this
                             */
                            // @ts-ignore
                            public arguments(args: org.spongepowered.api.command.args.CommandElement): org.spongepowered.api.command.spec.CommandSpec.Builder
                            /**
                             * Sets the argument specification for this command. This method accepts
                             * a sequence of arguments. This is equivalent to calling {@code
                             * arguments(seq(args))}.
                             * @see GenericArguments
                             * @param args The arguments object to use
                             * @return this
                             */
                            // @ts-ignore
                            public arguments(...args: org.spongepowered.api.command.args.CommandElement[]): org.spongepowered.api.command.spec.CommandSpec.Builder
                            /**
                             * Sets the input tokenizer to be used to convert input from a string
                             * into a list of argument tokens.
                             * @see InputTokenizer for common input parser implementations
                             * @param parser The parser to use
                             * @return this
                             */
                            // @ts-ignore
                            public inputTokenizer(parser: org.spongepowered.api.command.args.parsing.InputTokenizer): org.spongepowered.api.command.spec.CommandSpec.Builder
                            /**
                             * Create a new {@link CommandSpec} based on the data provided in this
                             * builder.
                             * @return the new spec
                             */
                            // @ts-ignore
                            public build(): org.spongepowered.api.command.spec.CommandSpec
                        }
                    }
                }
            }
        }
    }
}
