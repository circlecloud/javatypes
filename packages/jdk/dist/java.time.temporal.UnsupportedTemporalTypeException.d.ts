declare namespace java {
    namespace time {
        namespace temporal {
            /**
             * UnsupportedTemporalTypeException indicates that a ChronoField or ChronoUnit is
             * not supported for a Temporal class.
             * @implSpec This class is intended for use in a single thread.
             * @since 1.8
             */
            // @ts-ignore
            class UnsupportedTemporalTypeException extends java.time.DateTimeException {
                /**
                 * Constructs a new UnsupportedTemporalTypeException with the specified message.
                 * @param message  the message to use for this exception, may be null
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Constructs a new UnsupportedTemporalTypeException with the specified message and cause.
                 * @param message  the message to use for this exception, may be null
                 * @param cause  the cause of the exception, may be null
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}
