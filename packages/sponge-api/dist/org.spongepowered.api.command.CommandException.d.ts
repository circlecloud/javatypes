declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                /**
                 * Thrown when an executed command raises an error or when execution of
                 * the command failed.
                 */
                // @ts-ignore
                class CommandException extends org.spongepowered.api.util.TextMessageException {
                    /**
                     * Constructs a new {@link CommandException} with the given message.
                     * @param message The detail message
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text)
                    /**
                     * Constructs a new {@link CommandException} with the given message and
                     * the given cause.
                     * @param message The detail message
                     * @param cause The cause
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text, cause: Error)
                    /**
                     * Constructs a new {@link CommandException} with the given message.
                     * @param message The detail message
                     * @param includeUsage Whether to include usage in the exception
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text, includeUsage: boolean)
                    /**
                     * Constructs a new {@link CommandException} with the given message and
                     * the given cause.
                     * @param message The detail message
                     * @param cause The cause
                     * @param includeUsage Whether to include the usage in the exception
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text, cause: Error, includeUsage: boolean)
                    /**
                     * Gets whether the exception should include usage in
                     * the presentation of the exception/stack-trace.
                     * @return Whether to include usage in the exception
                     */
                    // @ts-ignore
                    shouldIncludeUsage(): boolean
                }
            }
        }
    }
}
