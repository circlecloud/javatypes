declare namespace java {
    namespace time {
        namespace format {
            /**
             * An exception thrown when an error occurs during parsing.
             * <p>
             * This exception includes the text being parsed and the error index.
             * @implSpec This class is intended for use in a single thread.
             * @since 1.8
             */
            // @ts-ignore
            class DateTimeParseException extends java.time.DateTimeException {
                /**
                 * Constructs a new exception with the specified message.
                 * @param message  the message to use for this exception, may be null
                 * @param parsedData  the parsed text, should not be null
                 * @param errorIndex  the index in the parsed string that was invalid, should be a valid index
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, parsedData: java.lang.CharSequence, errorIndex: number /*int*/)
                /**
                 * Constructs a new exception with the specified message and cause.
                 * @param message  the message to use for this exception, may be null
                 * @param parsedData  the parsed text, should not be null
                 * @param errorIndex  the index in the parsed string that was invalid, should be a valid index
                 * @param cause  the cause exception, may be null
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, parsedData: java.lang.CharSequence, errorIndex: number /*int*/, cause: java.lang.Throwable | Error)
                /**
                 * Returns the string that was being parsed.
                 * @return the string that was being parsed, should not be null.
                 */
                // @ts-ignore
                getParsedString(): string
                /**
                 * Returns the index where the error was found.
                 * @return the index in the parsed string that was invalid, should be a valid index
                 */
                // @ts-ignore
                getErrorIndex(): number /*int*/
            }
        }
    }
}
