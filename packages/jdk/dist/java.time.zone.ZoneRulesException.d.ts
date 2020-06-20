declare namespace java {
    namespace time {
        namespace zone {
            /**
             * Thrown to indicate a problem with time-zone configuration.
             * <p>
             * This exception is used to indicate a problems with the configured
             * time-zone rules.
             * @implSpec This class is intended for use in a single thread.
             * @since 1.8
             */
            // @ts-ignore
            class ZoneRulesException extends java.time.DateTimeException {
                /**
                 * Constructs a new date-time exception with the specified message.
                 * @param message  the message to use for this exception, may be null
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Constructs a new date-time exception with the specified message and cause.
                 * @param message  the message to use for this exception, may be null
                 * @param cause  the cause of the exception, may be null
                 */
                // @ts-ignore
                constructor(message: string, cause: Error)
            }
        }
    }
}
