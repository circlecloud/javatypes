declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                /**
                 * Thrown when invocation of a command fails, wrapping the exception that
                 * is thrown.
                 */
                // @ts-ignore
                class InvocationCommandException extends org.spongepowered.api.command.CommandException {
                    /**
                     * Constructs a new exception with the given message and the given cause.
                     * @param message The detail message
                     * @param cause The cause
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
