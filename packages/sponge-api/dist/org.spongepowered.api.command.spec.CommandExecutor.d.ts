declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace spec {
                    /**
                     * Interface containing the method directing how a certain command will
                     * be executed.
                     */
                    // @ts-ignore
                    interface CommandExecutor {
                        /**
                         * Callback for the execution of a command.
                         * @param src The commander who is executing this command
                         * @param args The parsed command arguments for this command
                         * @return the result of executing this command
                         * @throws CommandException If a user-facing error occurs while
                         *      executing this command
                         */
                        // @ts-ignore
                        execute(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandContext): org.spongepowered.api.command.CommandResult
                    }
                }
            }
        }
    }
}
