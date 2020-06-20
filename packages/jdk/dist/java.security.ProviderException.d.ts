declare namespace java {
    namespace security {
        /**
         * A runtime exception for Provider exceptions (such as
         * misconfiguration errors or unrecoverable internal errors),
         * which may be subclassed by Providers to
         * throw specialized, provider-specific runtime errors.
         * @author Benjamin Renaud
         */
        // @ts-ignore
        class ProviderException extends java.lang.RuntimeException {
            /**
             * Constructs a ProviderException with no detail message. A
             * detail message is a String that describes this particular
             * exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a ProviderException with the specified detail
             * message. A detail message is a String that describes this
             * particular exception.
             * @param s the detail message.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Creates a {@code ProviderException} with the specified
             * detail message and cause.
             * @param message the detail message (which is saved for later retrieval
             *         by the {#link #getMessage()} method).
             * @param cause the cause (which is saved for later retrieval by the
             *         {#link #getCause()} method).  (A {@code null} value is permitted,
             *         and indicates that the cause is nonexistent or unknown.)
             * @since 1.5
             */
            // @ts-ignore
            constructor(message: string, cause: Error)
            /**
             * Creates a {@code ProviderException} with the specified cause
             * and a detail message of {@code (cause==null ? null : cause.toString())}
             * (which typically contains the class and detail message of
             * {@code cause}).
             * @param cause the cause (which is saved for later retrieval by the
             *         {#link #getCause()} method).  (A {@code null} value is permitted,
             *         and indicates that the cause is nonexistent or unknown.)
             * @since 1.5
             */
            // @ts-ignore
            constructor(cause: Error)
        }
    }
}
