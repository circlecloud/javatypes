declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * A <code>ServerCloneException</code> is thrown if a remote exception occurs
             * during the cloning of a <code>UnicastRemoteObject</code>.
             * <p>As of release 1.4, this exception has been retrofitted to conform to
             * the general purpose exception-chaining mechanism.  The "nested exception"
             * that may be provided at construction time and accessed via the public
             * {@link #detail} field is now known as the <i>cause</i>, and may be
             * accessed via the {@link Throwable#getCause()} method, as well as
             * the aforementioned "legacy field."
             * <p>Invoking the method {@link Throwable#initCause(Throwable)} on an
             * instance of <code>ServerCloneException</code> always throws {@link
             * IllegalStateException}.
             * @author Ann Wollrath
             * @since JDK1.1
             * @see java.rmi.server.UnicastRemoteObject#clone()
             */
            // @ts-ignore
            class ServerCloneException extends java.lang.CloneNotSupportedException {
                /**
                 * Constructs a <code>ServerCloneException</code> with the specified
                 * detail message.
                 * @param s the detail message.
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string)
                /**
                 * Constructs a <code>ServerCloneException</code> with the specified
                 * detail message and cause.
                 * @param s the detail message.
                 * @param cause the cause
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string, cause: java.lang.Exception)
                /**
                 * The cause of the exception.
                 * <p>This field predates the general-purpose exception chaining facility.
                 * The {@link Throwable#getCause()} method is now the preferred means of
                 * obtaining this information.
                 * @serial 
                 */
                // @ts-ignore
                detail: java.lang.Exception
                /**
                 * Returns the detail message, including the message from the cause, if
                 * any, of this exception.
                 * @return the detail message
                 */
                // @ts-ignore
                getMessage(): string
                /**
                 * Returns the cause of this exception.  This method returns the value
                 * of the {@link #detail} field.
                 * @return the cause, which may be <tt>null</tt>.
                 * @since 1.4
                 */
                // @ts-ignore
                getCause(): Error
            }
        }
    }
}
