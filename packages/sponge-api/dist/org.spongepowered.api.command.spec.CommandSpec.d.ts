declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace spec {
                    /**
                     * Specification for how command arguments should be parsed.
                     */
                    // @ts-ignore
                    class CommandSpec extends java.lang.Object implements org.spongepowered.api.command.CommandCallable {
                        /**
                         * Return a new builder for a CommandSpec.
                         * @return a new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.command.spec.CommandSpec.Builder
                        /**
                         * Check the relevant permission for this command with the provided source,
                         * throwing an exception if the source does not have permission to use
                         * the command.
                         * @param source The source to check
                         * @throws CommandException if the source does not have permission
                         */
                        // @ts-ignore
                        checkPermission(source: org.spongepowered.api.command.CommandSource): void
                        /**
                         * Process this command with existing arguments and context objects.
                         * @param source The source to populate the context with
                         * @param args The arguments to process with
                         * @param context The context to put data in
                         * @throws ArgumentParseException if an invalid argument is provided
                         */
                        // @ts-ignore
                        populateContext(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): void
                        /**
                         * Return tab completion results using the existing parsed arguments and
                         * context. Primarily useful when including a subcommand in an existing
                         * specification.
                         * @param source The source to parse arguments for
                         * @param args The arguments object
                         * @param context The context object
                         * @return possible completions, or an empty list if none
                         */
                        // @ts-ignore
                        complete(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): java.util.List<java.lang.String>
                        /**
                         * Gets the active executor for this command. Generally not a good idea to
                         * call this directly, unless you are handling arg parsing specially
                         * @return The active executor for this command
                         */
                        // @ts-ignore
                        getExecutor(): org.spongepowered.api.command.spec.CommandExecutor
                        /**
                         * Gets the active input tokenizer used for this command.
                         * @return This command's input tokenizer
                         */
                        // @ts-ignore
                        getInputTokenizer(): org.spongepowered.api.command.args.parsing.InputTokenizer
                        // @ts-ignore
                        process(source: org.spongepowered.api.command.CommandSource, arguments: string): org.spongepowered.api.command.CommandResult
                        // @ts-ignore
                        getSuggestions(source: org.spongepowered.api.command.CommandSource, arguments: string, targetPos: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): java.util.List<java.lang.String>
                        // @ts-ignore
                        testPermission(source: org.spongepowered.api.command.CommandSource): boolean
                        /**
                         * Gets a short, one-line description used with this command if any is
                         * present.
                         * @return the short description.
                         */
                        // @ts-ignore
                        getShortDescription(source: org.spongepowered.api.command.CommandSource): java.util.Optional<org.spongepowered.api.text.Text>
                        /**
                         * Gets the extended description used with this command if any is present.
                         * @param source The source to get the description for
                         * @return the extended description.
                         */
                        // @ts-ignore
                        getExtendedDescription(source: org.spongepowered.api.command.CommandSource): java.util.Optional<org.spongepowered.api.text.Text>
                        /**
                         * Gets the usage for this command appropriate for the provided command
                         * source.
                         * @param source The source
                         * @return the usage for the source
                         */
                        // @ts-ignore
                        getUsage(source: org.spongepowered.api.command.CommandSource): org.spongepowered.api.text.Text
                        /**
                         * Return a longer description for this command. This description is
                         * composed of at least all present of the short description, the usage
                         * statement, and the extended description
                         * @param source The source to get the extended description for
                         * @return the extended description
                         */
                        // @ts-ignore
                        getHelp(source: org.spongepowered.api.command.CommandSource): java.util.Optional<org.spongepowered.api.text.Text>
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
