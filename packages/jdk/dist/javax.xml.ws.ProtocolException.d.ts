declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * The <code>ProtocolException</code> class is a
             * base class for exceptions related to a specific protocol binding. Subclasses
             * are used to communicate protocol level fault information to clients and may
             * be used on the server to control the protocol specific fault representation.
             * @since JAX-WS 2.0
             */
            // @ts-ignore
            class ProtocolException extends javax.xml.ws.WebServiceException {
                /**
                 * Constructs a new protocol exception with <code>null</code> as its detail message. The
                 * cause is not initialized, and may subsequently be initialized by a call
                 * to <code>Throwable.initCause(java.lang.Throwable)</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new protocol exception with the specified detail message.
                 * The cause is not initialized, and may subsequently be initialized by a
                 * call to <code>Throwable.initCause(java.lang.Throwable)</code>.
                 * @param message the detail message. The detail message is saved for later
                 *    retrieval by the Throwable.getMessage() method.
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Constructs a new runtime exception with the specified detail message and
                 * cause.
                 * Note that the detail message associated with  cause is not automatically
                 * incorporated in  this runtime exception's detail message.
                 * @param message the detail message (which is saved for later retrieval  by
                 *    the Throwable.getMessage() method).
                 * @param cause the cause (which is saved for later retrieval by the
                 *  <code>Throwable.getCause()</code> method). (A <code>null</code> value is  permitted, and indicates
                 *  that the cause is nonexistent or  unknown.)
                 */
                // @ts-ignore
                constructor(message: string, cause: Error)
                /**
                 * Constructs a new runtime exception with the specified cause and a  detail
                 * message of <code>(cause==null ? null : cause.toString())</code>  (which typically
                 * contains the class and detail message of  cause). This constructor is
                 * useful for runtime exceptions  that are little more than wrappers for
                 * other throwables.
                 * @param cause the cause (which is saved for later retrieval by the
                 *  <code>Throwable.getCause()</code> method). (A <code>null</code> value is  permitted, and indicates
                 *  that the cause is nonexistent or  unknown.)
                 */
                // @ts-ignore
                constructor(cause: Error)
            }
        }
    }
}
