declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace command {
                    /**
                     * Fired when a command is sent.
                     */
                    // @ts-ignore
                    interface SendCommandEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the command as a string, without any sort of command prefix.
                         * <p>For example, if the message was {@code /example bob 3 -f}, then
                         * the command would be {@code example}.</p>
                         * @return The command
                         */
                        // @ts-ignore
                        getCommand(): java.lang.String
                        /**
                         * Sets the command as a string, without any sort of command prefix.
                         * <p>For example, if the message was {@code /example bob 3 -f}, then
                         * the command would be {@code example}.</p>
                         * @param command The command
                         */
                        // @ts-ignore
                        setCommand(command: string): void
                        /**
                         * Gets the arguments as a string.
                         * <p>For example, if the message was {@code /example bob 3 -f}, then
                         * the arguments would be {@code bob 3 -f}.</p>
                         * @return The arguments
                         */
                        // @ts-ignore
                        getArguments(): java.lang.String
                        /**
                         * Sets the arguments as a string.
                         * <p>For example, if the message was {@code /example bob 3 -f}, then
                         * the arguments would be {@code bob 3 -f}.</p>
                         * @param arguments The arguments
                         */
                        // @ts-ignore
                        setArguments(arguments: string): void
                        /**
                         * The result of the command.
                         * @return The result of the command
                         */
                        // @ts-ignore
                        getResult(): org.spongepowered.api.command.CommandResult
                        /**
                         * Sets the result of the command.
                         * @param result The result of the command
                         */
                        // @ts-ignore
                        setResult(result: org.spongepowered.api.command.CommandResult): void
                    }
                }
            }
        }
    }
}
