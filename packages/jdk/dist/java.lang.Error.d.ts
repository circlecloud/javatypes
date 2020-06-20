declare namespace java {
    namespace lang {
        /**
         * An {@code Error} is a subclass of {@code Throwable}
         * that indicates serious problems that a reasonable application
         * should not try to catch. Most such errors are abnormal conditions.
         * The {@code ThreadDeath} error, though a "normal" condition,
         * is also a subclass of {@code Error} because most applications
         * should not try to catch it.
         * <p>
         * A method is not required to declare in its {@code throws}
         * clause any subclasses of {@code Error} that might be thrown
         * during the execution of the method but not caught, since these
         * errors are abnormal conditions that should never occur.
         * That is, {@code Error} and its subclasses are regarded as unchecked
         * exceptions for the purposes of compile-time checking of exceptions.
         * @author Frank Yellin
         * @see java.lang.ThreadDeath
         * @jls 11.2 Compile-Time Checking of Exceptions
         * @since JDK1.0
         */
        // @ts-ignore
        class Error extends java.lang.Throwable {
            /**
             * Constructs a new error with {@code null} as its detail message.
             * The cause is not initialized, and may subsequently be initialized by a
             * call to {@link #initCause}.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new error with the specified detail message.  The
             * cause is not initialized, and may subsequently be initialized by
             * a call to {@link #initCause}.
             * @param message   the detail message. The detail message is saved for
             *           later retrieval by the {#link #getMessage()} method.
             */
            // @ts-ignore
            constructor(message: string)
            /**
             * Constructs a new error with the specified detail message and
             * cause.  <p>Note that the detail message associated with
             * {@code cause} is <i>not</i> automatically incorporated in
             * this error's detail message.
             * @param message the detail message (which is saved for later retrieval
             *          by the {#link #getMessage()} method).
             * @param cause the cause (which is saved for later retrieval by the
             *          {#link #getCause()} method).  (A {@code null} value is
             *          permitted, and indicates that the cause is nonexistent or
             *          unknown.)
             * @since 1.4
             */
            // @ts-ignore
            constructor(message: string, cause: Error)
            /**
             * Constructs a new error with the specified cause and a detail
             * message of {@code (cause==null ? null : cause.toString())} (which
             * typically contains the class and detail message of {@code cause}).
             * This constructor is useful for errors that are little more than
             * wrappers for other throwables.
             * @param cause the cause (which is saved for later retrieval by the
             *          {#link #getCause()} method).  (A {@code null} value is
             *          permitted, and indicates that the cause is nonexistent or
             *          unknown.)
             * @since 1.4
             */
            // @ts-ignore
            constructor(cause: Error)
            /**
             * Constructs a new error with the specified detail message,
             * cause, suppression enabled or disabled, and writable stack
             * trace enabled or disabled.
             * @param message the detail message.
             * @param cause the cause.  (A {#code null} value is permitted,
             *  and indicates that the cause is nonexistent or unknown.)
             * @param enableSuppression whether or not suppression is enabled
             *                           or disabled
             * @param writableStackTrace whether or not the stack trace should
             *                            be writable
             * @since 1.7
             */
            // @ts-ignore
            constructor(message: string, cause: Error, enableSuppression: boolean, writableStackTrace: boolean)
        }
    }
}
