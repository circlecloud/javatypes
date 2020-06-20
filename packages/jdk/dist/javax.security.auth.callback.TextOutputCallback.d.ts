declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
                /**
                 * <p> Underlying security services instantiate and pass a
                 * {@code TextOutputCallback} to the {@code handle}
                 * method of a {@code CallbackHandler} to display information messages,
                 * warning messages and error messages.
                 * @see javax.security.auth.callback.CallbackHandler
                 */
                // @ts-ignore
                class TextOutputCallback extends java.lang.Object implements javax.security.auth.callback.Callback, java.io.Serializable {
                    /**
                     * Construct a TextOutputCallback with a message type and message
                     * to be displayed.
                     * <p>
                     * @param messageType the message type ({#code INFORMATION},
                     *                   {@code WARNING} or {@code ERROR}). <p>
                     * @param message the message to be displayed. <p>
                     * @exception IllegalArgumentException if {#code messageType}
                     *                   is not either {@code INFORMATION},
                     *                   {@code WARNING} or {@code ERROR},
                     *                   if {@code message} is null,
                     *                   or if {@code message} has a length of 0.
                     */
                    // @ts-ignore
                    constructor(messageType: number /*int*/, message: string)
                    /**
                     * Information message.
                     */
                    // @ts-ignore
                    readonly INFORMATION: number /*int*/
                    /**
                     * Warning message.
                     */
                    // @ts-ignore
                    readonly WARNING: number /*int*/
                    /**
                     * Error message.
                     */
                    // @ts-ignore
                    readonly ERROR: number /*int*/
                    /**
                     * Get the message type.
                     * <p>
                     * @return the message type ({#code INFORMATION},
                     *                   {@code WARNING} or {@code ERROR}).
                     */
                    // @ts-ignore
                    getMessageType(): int
                    /**
                     * Get the message to be displayed.
                     * <p>
                     * @return the message to be displayed.
                     */
                    // @ts-ignore
                    getMessage(): java.lang.String
                }
            }
        }
    }
}
