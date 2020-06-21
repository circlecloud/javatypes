declare namespace java {
    namespace rmi {
        namespace activation {
            /**
             * This exception is thrown by the RMI runtime when activation
             * fails during a remote call to an activatable object.
             * @author Ann Wollrath
             * @since 1.2
             */
            // @ts-ignore
            class ActivateFailedException extends java.rmi.RemoteException {
                /**
                 * Constructs an <code>ActivateFailedException</code> with the specified
                 * detail message.
                 * @param s the detail message
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string)
                /**
                 * Constructs an <code>ActivateFailedException</code> with the specified
                 * detail message and nested exception.
                 * @param s the detail message
                 * @param ex the nested exception
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string, ex: java.lang.Exception)
            }
        }
    }
}
