declare namespace java {
    namespace lang {
        /**
         * Thrown to indicate that the requested operation is not supported.<p>
         * This class is a member of the
         * <a href="{@docRoot}/../technotes/guides/collections/index.html">
         * Java Collections Framework</a>.
         * @author Josh Bloch
         * @since 1.2
         */
        // @ts-ignore
        class UnsupportedOperationException extends java.lang.RuntimeException {
            /**
             * Constructs an UnsupportedOperationException with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an UnsupportedOperationException with the specified
             * detail message.
             * @param message the detail message
             */
            // @ts-ignore
            constructor(message: java.lang.String | string)
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
            constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
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
            constructor(cause: java.lang.Throwable | Error)
        }
    }
}
