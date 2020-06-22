declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Callback executing all operations against a surrogate 'session' (basically against the same underlying Redis
                     * connection). Allows 'transactions' to take place through the use of multi/discard/exec/watch/unwatch commands.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    interface SessionCallback<T> {
                        /**
                         * Executes all the given operations inside the same session.
                         * @param operations Redis operations
                         * @return return value
                         */
                        // @ts-ignore
                        execute<K, V>(operations: org.springframework.data.redis.core.RedisOperations<K, V>): T
                    }
                }
            }
        }
    }
}
