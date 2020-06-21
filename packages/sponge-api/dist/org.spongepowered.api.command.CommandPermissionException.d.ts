declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                /**
                 * This exception is thrown when a subject does not have permission to execute
                 * a command.
                 */
                // @ts-ignore
                class CommandPermissionException extends org.spongepowered.api.command.CommandException {
                    /**
                     * Create an exception with the default message.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a permissions exception with a custom message.
                     * @param message The message
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text)
                    /**
                     * Create a permissions exception with a custom message and cause.
                     * @param message the message
                     * @param cause the cause
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
