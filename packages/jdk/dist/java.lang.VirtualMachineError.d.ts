declare namespace java {
    namespace lang {
        /**
         * Thrown to indicate that the Java Virtual Machine is broken or has
         * run out of resources necessary for it to continue operating.
         * @author Frank Yellin
         * @since JDK1.0
         */
        // @ts-ignore
        class VirtualMachineError extends java.lang.Error {
            /**
             * Constructs a <code>VirtualMachineError</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>VirtualMachineError</code> with the specified
             * detail message.
             * @param message   the detail message.
             */
            // @ts-ignore
            constructor(message: string)
            /**
             * Constructs a {@code VirtualMachineError} with the specified
             * detail message and cause.  <p>Note that the detail message
             * associated with {@code cause} is <i>not</i> automatically
             * incorporated in this error's detail message.
             * @param message the detail message (which is saved for later retrieval
             *          by the {#link #getMessage()} method).
             * @param cause the cause (which is saved for later retrieval by the
             *          {#link #getCause()} method).  (A {@code null} value is
             *          permitted, and indicates that the cause is nonexistent or
             *          unknown.)
             * @since 1.8
             */
            // @ts-ignore
            constructor(message: string, cause: Error)
            /**
             * Constructs an a {@code VirtualMachineError} with the specified
             * cause and a detail message of {@code (cause==null ? null :
             * cause.toString())} (which typically contains the class and
             * detail message of {@code cause}).
             * @param cause the cause (which is saved for later retrieval by the
             *          {#link #getCause()} method).  (A {@code null} value is
             *          permitted, and indicates that the cause is nonexistent or
             *          unknown.)
             * @since 1.8
             */
            // @ts-ignore
            constructor(cause: Error)
        }
    }
}
