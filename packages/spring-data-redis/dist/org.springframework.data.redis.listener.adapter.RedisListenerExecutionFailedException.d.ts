declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace listener {
                    namespace adapter {
                        /**
                         * Exception thrown when the execution of a listener method failed.
                         * @author Costin Leau
                         * @see MessageListenerAdapter
                         */
                        // @ts-ignore
                        class RedisListenerExecutionFailedException extends InvalidDataAccessApiUsageException {
                            /**
                             * Constructs a new <code>RedisListenerExecutionFailedException</code> instance.
                             * @param msg
                             * @param cause
                             */
                            // @ts-ignore
                            constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                            /**
                             * Constructs a new <code>RedisListenerExecutionFailedException</code> instance.
                             * @param msg
                             */
                            // @ts-ignore
                            constructor(msg: java.lang.String | string)
                        }
                    }
                }
            }
        }
    }
}
