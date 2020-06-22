declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Exception thrown when subscribing to an expired/dead {@link Subscription}.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    class RedisInvalidSubscriptionException extends InvalidDataAccessResourceUsageException {
                        /**
                         * Constructs a new <code>RedisInvalidSubscriptionException</code> instance.
                         * @param msg
                         * @param cause
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                        /**
                         * Constructs a new <code>RedisInvalidSubscriptionException</code> instance.
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
