declare namespace java {
    namespace lang {
        /**
         * Thrown by the security manager to indicate a security violation.
         * @author unascribed
         * @see java.lang.SecurityManager
         * @since JDK1.0
         */
        // @ts-ignore
        class SecurityException extends java.lang.RuntimeException {
            /**
             * Constructs a <code>SecurityException</code> with no detail  message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>SecurityException</code> with the specified
             * detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Creates a <code>SecurityException</code> with the specified
             * detail message and cause.
             * @param message the detail message (which is saved for later retrieval
             *         by the {#link #getMessage()} method).
             * @param cause the cause (which is saved for later retrieval by the
             *         {#link #getCause()} method).  (A <tt>null</tt> value is permitted,
             *         and indicates that the cause is nonexistent or unknown.)
             * @since 1.5
             */
            // @ts-ignore
            constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
            /**
             * Creates a <code>SecurityException</code> with the specified cause
             * and a detail message of <tt>(cause==null ? null : cause.toString())</tt>
             * (which typically contains the class and detail message of
             * <tt>cause</tt>).
             * @param cause the cause (which is saved for later retrieval by the
             *         {#link #getCause()} method).  (A <tt>null</tt> value is permitted,
             *         and indicates that the cause is nonexistent or unknown.)
             * @since 1.5
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable | Error)
        }
    }
}
