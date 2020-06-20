declare namespace java {
    namespace lang {
        /**
         * {@code RuntimeException} is the superclass of those
         * exceptions that can be thrown during the normal operation of the
         * Java Virtual Machine.
         * <p>{@code RuntimeException} and its subclasses are <em>unchecked
         * exceptions</em>.  Unchecked exceptions do <em>not</em> need to be
         * declared in a method or constructor's {@code throws} clause if they
         * can be thrown by the execution of the method or constructor and
         * propagate outside the method or constructor boundary.
         * @author Frank Yellin
         * @jls 11.2 Compile-Time Checking of Exceptions
         * @since JDK1.0
         */
        // @ts-ignore
        class RuntimeException extends java.lang.Exception {
            /**
             * Constructs a new runtime exception with {@code null} as its
             * detail message.  The cause is not initialized, and may subsequently be
             * initialized by a call to {@link #initCause}.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new runtime exception with the specified detail message.
             * The cause is not initialized, and may subsequently be initialized by a
             * call to {@link #initCause}.
             * @param message   the detail message. The detail message is saved for
             *           later retrieval by the {#link #getMessage()} method.
             */
            // @ts-ignore
            constructor(message: string)
            /**
             * Constructs a new runtime exception with the specified detail message and
             * cause.  <p>Note that the detail message associated with
             * {@code cause} is <i>not</i> automatically incorporated in
             * this runtime exception's detail message.
             * @param message the detail message (which is saved for later retrieval
             *          by the {#link #getMessage()} method).
             * @param cause the cause (which is saved for later retrieval by the
             *          {#link #getCause()} method).  (A <tt>null</tt> value is
             *          permitted, and indicates that the cause is nonexistent or
             *          unknown.)
             * @since 1.4
             */
            // @ts-ignore
            constructor(message: string, cause: Error)
            /**
             * Constructs a new runtime exception with the specified cause and a
             * detail message of <tt>(cause==null ? null : cause.toString())</tt>
             * (which typically contains the class and detail message of
             * <tt>cause</tt>).  This constructor is useful for runtime exceptions
             * that are little more than wrappers for other throwables.
             * @param cause the cause (which is saved for later retrieval by the
             *          {#link #getCause()} method).  (A <tt>null</tt> value is
             *          permitted, and indicates that the cause is nonexistent or
             *          unknown.)
             * @since 1.4
             */
            // @ts-ignore
            constructor(cause: Error)
            /**
             * Constructs a new runtime exception with the specified detail
             * message, cause, suppression enabled or disabled, and writable
             * stack trace enabled or disabled.
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
