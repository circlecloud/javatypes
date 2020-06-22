declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Callback interface for Redis 'low level' code. To be used with {@link RedisTemplate} execution methods, often as
                     * anonymous classes within a method implementation. Usually, used for chaining several operations together (
                     * {@code get/set/trim etc...}.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    interface RedisCallback<T> {
                        /**
                         * Gets called by {@link RedisTemplate} with an active Redis connection. Does not need to care about activating or
                         * closing the connection or handling exceptions.
                         * @param connection active Redis connection
                         * @return a result object or {#code null} if none
                         * @throws DataAccessException
                         */
                        // @ts-ignore
                        doInRedis(connection: org.springframework.data.redis.connection.RedisConnection): T
                    }
                }
            }
        }
    }
}
