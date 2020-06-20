declare namespace java {
    namespace lang {
        /**
         * Thrown to indicate that an {@code invokedynamic} instruction has
         * failed to find its bootstrap method,
         * or the bootstrap method has failed to provide a
         * {@linkplain java.lang.invoke.CallSite call site} with a {@linkplain java.lang.invoke.CallSite#getTarget target}
         * of the correct {@linkplain java.lang.invoke.MethodHandle#type method type}.
         * @author John Rose, JSR 292 EG
         * @since 1.7
         */
        // @ts-ignore
        class BootstrapMethodError extends java.lang.LinkageError {
            /**
             * Constructs a {@code BootstrapMethodError} with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a {@code BootstrapMethodError} with the specified
             * detail message.
             * @param s the detail message.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Constructs a {@code BootstrapMethodError} with the specified
             * detail message and cause.
             * @param s the detail message.
             * @param cause the cause, may be {#code null}.
             */
            // @ts-ignore
            constructor(s: string, cause: Error)
            /**
             * Constructs a {@code BootstrapMethodError} with the specified
             * cause.
             * @param cause the cause, may be {#code null}.
             */
            // @ts-ignore
            constructor(cause: Error)
        }
    }
}
