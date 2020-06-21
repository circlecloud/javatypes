declare namespace java {
    namespace security {
        /**
         * This is the exception for invalid or inappropriate algorithm parameters.
         * @author Jan Luehe
         * @see AlgorithmParameters
         * @see java.security.spec.AlgorithmParameterSpec
         * @since 1.2
         */
        // @ts-ignore
        class InvalidAlgorithmParameterException extends java.security.GeneralSecurityException {
            /**
             * Constructs an InvalidAlgorithmParameterException with no detail
             * message.
             * A detail message is a String that describes this particular
             * exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an InvalidAlgorithmParameterException with the specified
             * detail message.
             * A detail message is a String that describes this
             * particular exception.
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: java.lang.String | string)
            /**
             * Creates a {@code InvalidAlgorithmParameterException} with the
             * specified detail message and cause.
             * @param message the detail message (which is saved for later retrieval
             *         by the {#link #getMessage()} method).
             * @param cause the cause (which is saved for later retrieval by the
             *         {#link #getCause()} method).  (A {@code null} value is permitted,
             *         and indicates that the cause is nonexistent or unknown.)
             * @since 1.5
             */
            // @ts-ignore
            constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
            /**
             * Creates a {@code InvalidAlgorithmParameterException} with the
             * specified cause and a detail message of
             * {@code (cause==null ? null : cause.toString())}
             * (which typically contains the class and detail message of
             * {@code cause}).
             * @param cause the cause (which is saved for later retrieval by the
             *         {#link #getCause()} method).  (A {@code null} value is permitted,
             *         and indicates that the cause is nonexistent or unknown.)
             * @since 1.5
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable | Error)
        }
    }
}
