declare namespace java {
    namespace security {
        /**
         * This is the generic Message Digest exception.
         * @author Benjamin Renaud
         */
        // @ts-ignore
        class DigestException extends java.security.GeneralSecurityException {
            /**
             * Constructs a DigestException with no detail message.  (A
             * detail message is a String that describes this particular
             * exception.)
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a DigestException with the specified detail
             * message.  (A detail message is a String that describes this
             * particular exception.)
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: string)
            /**
             * Creates a {@code DigestException} with the specified
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
             * Creates a {@code DigestException} with the specified cause
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
