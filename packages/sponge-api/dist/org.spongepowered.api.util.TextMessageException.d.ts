declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * A subclass of Exception that contains a rich message that is an instance of
                 * {@link Text} rather than a String. This allows formatted and localized
                 * exception messages.
                 */
                // @ts-ignore
                class TextMessageException extends java.lang.Exception {
                    /**
                     * Constructs a new {@link TextMessageException}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a new {@link TextMessageException} with the given message.
                     * @param message The detail message
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text)
                    /**
                     * Constructs a new {@link TextMessageException} with the given message and
                     * cause.
                     * @param message The detail message
                     * @param throwable The cause
                     */
                    // @ts-ignore
                    constructor(message: org.spongepowered.api.text.Text, throwable: java.lang.Throwable | Error)
                    /**
                     * Constructs a new {@link TextMessageException} with the given cause.
                     * @param throwable The cause
                     */
                    // @ts-ignore
                    constructor(throwable: java.lang.Throwable | Error)
                    // @ts-ignore
                    getMessage(): string
                    /**
                     * Returns the text message for this exception, or null if nothing is
                     * present.
                     * @return The text for this message
                     */
                    // @ts-ignore
                    getText(): org.spongepowered.api.text.Text
                    // @ts-ignore
                    getLocalizedMessage(): string
                }
            }
        }
    }
}
