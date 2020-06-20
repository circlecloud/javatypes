declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                /**
                 * This exception is thrown when a sender tries to execute a command that does
                 * not exist.
                 */
                // @ts-ignore
                class CommandNotFoundException extends org.spongepowered.api.command.CommandException {
                    /**
                     * Create an exception with the default message.
                     * @param command The command that was queried for
                     */
                    // @ts-ignore
                    constructor(command: string)
                    /**
                     * Create an exception with a custom message.
                     * @param message The message
                     * @param command The command that was queried for
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text, command: string)
                    /**
                     * Returns the command that was queried for.
                     * @return The command
                     */
                    // @ts-ignore
                    getCommand(): java.lang.String
                }
            }
        }
    }
}
