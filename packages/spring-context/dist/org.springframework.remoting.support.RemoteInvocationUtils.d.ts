declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * General utilities for handling remote invocations.
                 * <p>Mainly intended for use within the remoting framework.
                 * @author Juergen Hoeller
                 * @since 2.0
                 */
                // @ts-ignore
                abstract class RemoteInvocationUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Fill the current client-side stack trace into the given exception.
                     * <p>The given exception is typically thrown on the server and serialized
                     * as-is, with the client wanting it to contain the client-side portion
                     * of the stack trace as well. What we can do here is to update the
                     * {@code StackTraceElement} array with the current client-side stack
                     * trace, provided that we run on JDK 1.4+.
                     * @param ex the exception to update
                     * @see Throwable#getStackTrace()
                     * @see Throwable#setStackTrace(StackTraceElement[])
                     */
                    // @ts-ignore
                    public static fillInClientStackTraceIfPossible(ex: java.lang.Throwable | Error): void
                }
            }
        }
    }
}
