declare namespace javax {
    namespace security {
        namespace auth {
            /**
             * Signals that a {@code refresh} operation failed.
             * <p> This exception is thrown by credentials implementing
             * the {@code Refreshable} interface when the {@code refresh}
             * method fails.
             */
            // @ts-ignore
            class RefreshFailedException extends java.lang.Exception {
                /**
                 * Constructs a RefreshFailedException with no detail message. A detail
                 * message is a String that describes this particular exception.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a RefreshFailedException with the specified detail
                 * message.  A detail message is a String that describes this particular
                 * exception.
                 * <p>
                 * @param msg the detail message.
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
            }
        }
    }
}
