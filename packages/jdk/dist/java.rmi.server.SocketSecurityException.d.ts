declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * An obsolete subclass of {@link ExportException}.
             * @author Ann Wollrath
             * @since JDK1.1
             * @deprecated This class is obsolete. Use {#link ExportException} instead.
             */
            // @ts-ignore
            class SocketSecurityException extends java.rmi.server.ExportException {
                /**
                 * Constructs an <code>SocketSecurityException</code> with the specified
                 * detail message.
                 * @param s the detail message.
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string)
                /**
                 * Constructs an <code>SocketSecurityException</code> with the specified
                 * detail message and nested exception.
                 * @param s the detail message.
                 * @param ex the nested exception
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string, ex: java.lang.Exception)
            }
        }
    }
}
