declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Generic callback interface for code that operates on a low-level {@link ReactiveRedisConnection}. Allows to execute
                     * any number of operations on a single {@link ReactiveRedisConnection}, using any type and number of commands.
                     * <p>
                     * This is particularly useful for delegating to existing data access code that expects a
                     * {@link ReactiveRedisConnection} to work on. For newly written code, it is strongly recommended to use
                     * {@link ReactiveRedisOperations}'s more specific operations.
                     * @param <T>
                     * @author Mark Paluch
                     * @since 2.0
                     * @see ReactiveRedisOperations#execute(ReactiveRedisCallback)
                     */
                    // @ts-ignore
                    interface ReactiveRedisCallback<T> {
                        /**
                         * Gets called by {@link ReactiveRedisTemplate#execute(ReactiveRedisCallback)} with an active Redis connection. Does
                         * not need to care about activating or closing the {@link ReactiveRedisConnection}.
                         * <p>
                         * Allows for returning a result object created within the callback, i.e. a domain object or a collection of domain
                         * objects.
                         * @param connection active Redis connection.
                         * @return a result object publisher
                         * @throws DataAccessException in case of custom exceptions
                         */
                        // @ts-ignore
                        doInRedis(connection: org.springframework.data.redis.connection.ReactiveRedisConnection): object
                    }
                }
            }
        }
    }
}
