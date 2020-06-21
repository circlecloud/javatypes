declare namespace java {
    namespace time {
        /**
         * Exception used to indicate a problem while calculating a date-time.
         * <p>
         * This exception is used to indicate problems with creating, querying
         * and manipulating date-time objects.
         * @implSpec This class is intended for use in a single thread.
         * @since 1.8
         */
        // @ts-ignore
        class DateTimeException extends java.lang.RuntimeException {
            /**
             * Constructs a new date-time exception with the specified message.
             * @param message  the message to use for this exception, may be null
             */
            // @ts-ignore
            constructor(message: java.lang.String | string)
            /**
             * Constructs a new date-time exception with the specified message and cause.
             * @param message  the message to use for this exception, may be null
             * @param cause  the cause of the exception, may be null
             */
            // @ts-ignore
            constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
        }
    }
}
