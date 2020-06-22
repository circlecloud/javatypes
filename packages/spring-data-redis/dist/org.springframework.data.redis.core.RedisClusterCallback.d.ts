declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Callback interface for low level operations executed against a clustered Redis environment.
                     * @author Christoph Strobl
                     * @since 1.7
                     * @param <T>
                     */
                    // @ts-ignore
                    interface RedisClusterCallback<T> {
                        /**
                         * Gets called by {@link RedisClusterTemplate} with an active Redis connection. Does not need to care about activating
                         * or closing the connection or handling exceptions.
                         * @param connection never {#literal null}.
                         * @return 
                         * @throws DataAccessException
                         */
                        // @ts-ignore
                        doInRedis(connection: org.springframework.data.redis.connection.RedisClusterConnection): T
                    }
                }
            }
        }
    }
}
