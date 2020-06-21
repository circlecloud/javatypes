declare namespace javax {
    namespace security {
        namespace auth {
            /**
             * Signals that a {@code destroy} operation failed.
             * <p> This exception is thrown by credentials implementing
             * the {@code Destroyable} interface when the {@code destroy}
             * method fails.
             */
            // @ts-ignore
            class DestroyFailedException extends java.lang.Exception {
                /**
                 * Constructs a DestroyFailedException with no detail message. A detail
                 * message is a String that describes this particular exception.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a DestroyFailedException with the specified detail
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
