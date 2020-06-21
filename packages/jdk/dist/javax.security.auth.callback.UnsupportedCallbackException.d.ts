declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
                /**
                 * Signals that a {@code CallbackHandler} does not
                 * recognize a particular {@code Callback}.
                 */
                // @ts-ignore
                class UnsupportedCallbackException extends java.lang.Exception {
                    /**
                     * Constructs a {@code UnsupportedCallbackException}
                     * with no detail message.
                     * <p>
                     * @param callback the unrecognized {#code Callback}.
                     */
                    // @ts-ignore
                    constructor(callback: javax.security.auth.callback.Callback)
                    /**
                     * Constructs a UnsupportedCallbackException with the specified detail
                     * message.  A detail message is a String that describes this particular
                     * exception.
                     * <p>
                     * @param callback the unrecognized {#code Callback}. <p>
                     * @param msg the detail message.
                     */
                    // @ts-ignore
                    constructor(callback: javax.security.auth.callback.Callback, msg: java.lang.String | string)
                    /**
                     * Get the unrecognized {@code Callback}.
                     * <p>
                     * @return the unrecognized {#code Callback}.
                     */
                    // @ts-ignore
                    getCallback(): javax.security.auth.callback.Callback
                }
            }
        }
    }
}
