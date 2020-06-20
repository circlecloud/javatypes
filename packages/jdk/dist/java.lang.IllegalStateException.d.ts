declare namespace java {
    namespace lang {
        /**
         * Signals that a method has been invoked at an illegal or
         * inappropriate time.  In other words, the Java environment or
         * Java application is not in an appropriate state for the requested
         * operation.
         * @author Jonni Kanerva
         * @since JDK1.1
         */
        // @ts-ignore
        class IllegalStateException extends java.lang.RuntimeException {
            /**
             * Constructs an IllegalStateException with no detail message.
             * A detail message is a String that describes this particular exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an IllegalStateException with the specified detail
             * message.  A detail message is a String that describes this particular
             * exception.
             * @param s the String that contains a detailed message
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Constructs a new exception with the specified detail message and
             * cause.
             * <p>Note that the detail message associated with <code>cause</code> is
             * <i>not</i> automatically incorporated in this exception's detail
             * message.
             * @param message the detail message (which is saved for later retrieval
             *          by the {#link Throwable#getMessage()} method).
             * @param cause the cause (which is saved for later retrieval by the
             *          {#link Throwable#getCause()} method).  (A <tt>null</tt> value
             *          is permitted, and indicates that the cause is nonexistent or
             *          unknown.)
             * @since 1.5
             */
            // @ts-ignore
            constructor(message: string, cause: Error)
            /**
             * Constructs a new exception with the specified cause and a detail
             * message of <tt>(cause==null ? null : cause.toString())</tt> (which
             * typically contains the class and detail message of <tt>cause</tt>).
             * This constructor is useful for exceptions that are little more than
             * wrappers for other throwables (for example, {@link
             * java.security.PrivilegedActionException}).
             * @param cause the cause (which is saved for later retrieval by the
             *          {#link Throwable#getCause()} method).  (A <tt>null</tt> value is
             *          permitted, and indicates that the cause is nonexistent or
             *          unknown.)
             * @since 1.5
             */
            // @ts-ignore
            constructor(cause: Error)
        }
    }
}
