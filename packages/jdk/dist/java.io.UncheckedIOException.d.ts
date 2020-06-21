declare namespace java {
    namespace io {
        /**
         * Wraps an {@link IOException} with an unchecked exception.
         * @since 1.8
         */
        // @ts-ignore
        class UncheckedIOException extends java.lang.RuntimeException {
            /**
             * Constructs an instance of this class.
             * @param message
             *           the detail message, can be null
             * @param cause
             *           the {#code IOException}
             * @throws NullPointerException
             *           if the cause is {#code null}
             */
            // @ts-ignore
            constructor(message: java.lang.String | string, cause: java.io.IOException)
            /**
             * Constructs an instance of this class.
             * @param cause
             *           the {#code IOException}
             * @throws NullPointerException
             *           if the cause is {#code null}
             */
            // @ts-ignore
            constructor(cause: java.io.IOException)
            /**
             * Returns the cause of this exception.
             * @return the {#code IOException} which is the cause of this exception.
             */
            // @ts-ignore
            getCause(): java.io.IOException
        }
    }
}
