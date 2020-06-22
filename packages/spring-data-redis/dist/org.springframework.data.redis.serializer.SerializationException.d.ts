declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * Generic exception indicating a serialization/deserialization error.
                     * @author Costin Leau
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class SerializationException extends NestedRuntimeException {
                        /**
                         * Constructs a new {@link SerializationException} instance.
                         * @param msg
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string)
                        /**
                         * Constructs a new {@link SerializationException} instance.
                         * @param msg the detail message.
                         * @param cause the nested exception.
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}
