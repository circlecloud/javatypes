declare namespace java {
    namespace io {
        /**
         * Signals that an I/O exception of some sort has occurred. This
         * class is the general class of exceptions produced by failed or
         * interrupted I/O operations.
         * @author unascribed
         * @see java.io.InputStream
         * @see java.io.OutputStream
         * @since JDK1.0
         */
        // @ts-ignore
        class IOException extends java.lang.Exception {
            /**
             * Constructs an {@code IOException} with {@code null}
             * as its error detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an {@code IOException} with the specified detail message.
             * @param message
             *         The detail message (which is saved for later retrieval
             *         by the {#link #getMessage()} method)
             */
            // @ts-ignore
            constructor(message: java.lang.String | string)
            /**
             * Constructs an {@code IOException} with the specified detail message
             * and cause.
             * <p> Note that the detail message associated with {@code cause} is
             * <i>not</i> automatically incorporated into this exception's detail
             * message.
             * @param message
             *         The detail message (which is saved for later retrieval
             *         by the {#link #getMessage()} method)
             * @param cause
             *         The cause (which is saved for later retrieval by the
             *         {#link #getCause()} method).  (A null value is permitted,
             *         and indicates that the cause is nonexistent or unknown.)
             * @since 1.6
             */
            // @ts-ignore
            constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
            /**
             * Constructs an {@code IOException} with the specified cause and a
             * detail message of {@code (cause==null ? null : cause.toString())}
             * (which typically contains the class and detail message of {@code cause}).
             * This constructor is useful for IO exceptions that are little more
             * than wrappers for other throwables.
             * @param cause
             *         The cause (which is saved for later retrieval by the
             *         {#link #getCause()} method).  (A null value is permitted,
             *         and indicates that the cause is nonexistent or unknown.)
             * @since 1.6
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable | Error)
        }
    }
}
