declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    /**
                     * An exception that occurs when a {@link DataBuilder} or
                     * {@link DataFormat} is unable to handle an operation, which can include:
                     * {@link DataBuilder#build(DataView)}, {@link DataFormat#readFrom(InputStream)},
                     * etc.
                     */
                    // @ts-ignore
                    class InvalidDataException extends java.lang.UnsupportedOperationException {
                        /**
                         * Constructs a new {@link InvalidDataException}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructs a new {@link InvalidDataException} with a message.
                         * @param message The message to display with the exception
                         */
                        // @ts-ignore
                        constructor(message: java.lang.String | string)
                        /**
                         * Constructs a new {@link InvalidDataException} with the specified message and
                         * cause.
                         * @param message The exception message
                         * @param cause The cause of this exception
                         */
                        // @ts-ignore
                        constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                        /**
                         * Constructs a new {@link InvalidDataException} with the specified cause and a
                         * null message.
                         * @param cause The cause of this exception
                         */
                        // @ts-ignore
                        constructor(cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}
