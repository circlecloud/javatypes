declare namespace java {
    namespace security {
        /**
         * The {@code GeneralSecurityException} class is a generic
         * security exception class that provides type safety for all the
         * security-related exception classes that extend from it.
         * @author Jan Luehe
         */
        // @ts-ignore
        class GeneralSecurityException extends java.lang.Exception {
            /**
             * Constructs a GeneralSecurityException with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a GeneralSecurityException with the specified detail
             * message.
             * A detail message is a String that describes this particular
             * exception.
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: string)
            /**
             * Creates a {@code GeneralSecurityException} with the specified
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
             * Creates a {@code GeneralSecurityException} with the specified cause
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
