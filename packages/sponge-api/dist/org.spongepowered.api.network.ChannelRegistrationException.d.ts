declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                /**
                 * An exception that is thrown when a channel registration fails.
                 * <p>Examples may include: Attempting to register an already registered
                 * channel.</p>
                 */
                // @ts-ignore
                class ChannelRegistrationException extends java.lang.RuntimeException {
                    /**
                     * Constructs a new {@link ChannelRegistrationException}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a new {@link ChannelRegistrationException} with a message.
                     * @param message The message to include in the stacktrace
                     */
                    // @ts-ignore
                    constructor(message: string)
                    /**
                     * Constructs a new {@link ChannelRegistrationException} with the specified message and
                     * cause.
                     * @param message The exception message
                     * @param cause The cause of this exception
                     */
                    // @ts-ignore
                    constructor(message: string, cause: Error)
                    /**
                     * Constructs a new {@link ChannelRegistrationException} with the specified cause and a
                     * null message.
                     * @param cause The cause of this exception
                     */
                    // @ts-ignore
                    constructor(cause: Error)
                }
            }
        }
    }
}
