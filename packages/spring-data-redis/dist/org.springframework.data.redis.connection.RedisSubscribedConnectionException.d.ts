declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Exception thrown when issuing commands on a connection that is subscribed and waiting for events.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @see org.springframework.data.redis.connection.RedisPubSubCommands
                     */
                    // @ts-ignore
                    class RedisSubscribedConnectionException extends InvalidDataAccessApiUsageException {
                        /**
                         * Constructs a new <code>RedisSubscribedConnectionException</code> instance.
                         * @param msg
                         * @param cause
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                        /**
                         * Constructs a new <code>RedisSubscribedConnectionException</code> instance.
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
