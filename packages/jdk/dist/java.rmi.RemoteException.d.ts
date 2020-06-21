declare namespace java {
    namespace rmi {
        /**
         * A <code>RemoteException</code> is the common superclass for a number of
         * communication-related exceptions that may occur during the execution of a
         * remote method call.  Each method of a remote interface, an interface that
         * extends <code>java.rmi.Remote</code>, must list
         * <code>RemoteException</code> in its throws clause.
         * <p>As of release 1.4, this exception has been retrofitted to conform to
         * the general purpose exception-chaining mechanism.  The "wrapped remote
         * exception" that may be provided at construction time and accessed via
         * the public {@link #detail} field is now known as the <i>cause</i>, and
         * may be accessed via the {@link Throwable#getCause()} method, as well as
         * the aforementioned "legacy field."
         * <p>Invoking the method {@link Throwable#initCause(Throwable)} on an
         * instance of <code>RemoteException</code> always throws {@link
         * IllegalStateException}.
         * @author Ann Wollrath
         * @since JDK1.1
         */
        // @ts-ignore
        class RemoteException extends java.io.IOException {
            /**
             * Constructs a <code>RemoteException</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>RemoteException</code> with the specified
             * detail message.
             * @param s the detail message
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Constructs a <code>RemoteException</code> with the specified detail
             * message and cause.  This constructor sets the {@link #detail}
             * field to the specified <code>Throwable</code>.
             * @param s the detail message
             * @param cause the cause
             */
            // @ts-ignore
            constructor(s: java.lang.String | string, cause: java.lang.Throwable | Error)
            /**
             * The cause of the remote exception.
             * <p>This field predates the general-purpose exception chaining facility.
             * The {@link Throwable#getCause()} method is now the preferred means of
             * obtaining this information.
             * @serial 
             */
            // @ts-ignore
            detail: java.lang.Throwable | Error
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
