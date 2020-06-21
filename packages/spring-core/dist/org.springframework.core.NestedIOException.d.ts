declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Subclass of {@link IOException} that properly handles a root cause,
             * exposing the root cause just like NestedChecked/RuntimeException does.
             * <p>Proper root cause handling has not been added to standard IOException before
             * Java 6, which is why we need to do it ourselves for Java 5 compatibility purposes.
             * <p>The similarity between this class and the NestedChecked/RuntimeException
             * class is unavoidable, as this class needs to derive from IOException.
             * @author Juergen Hoeller
             * @since 2.0
             * @see #getMessage
             * @see #printStackTrace
             * @see org.springframework.core.NestedCheckedException
             * @see org.springframework.core.NestedRuntimeException
             */
            // @ts-ignore
            class NestedIOException extends java.io.IOException {
                /**
                 * Construct a {@code NestedIOException} with the specified detail message.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
                /**
                 * Construct a {@code NestedIOException} with the specified detail message
                 * and nested exception.
                 * @param msg the detail message
                 * @param cause the nested exception
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * Return the detail message, including the message from the nested exception
                 * if there is one.
                 */
                // @ts-ignore
                getMessage(): string
            }
        }
    }
}
