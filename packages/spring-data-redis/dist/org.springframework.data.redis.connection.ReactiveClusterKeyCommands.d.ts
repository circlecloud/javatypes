declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveClusterKeyCommands extends org.springframework.data.redis.connection.ReactiveKeyCommands {
                        /**
                         * Retrieve all {@literal keys} for a given {@literal pattern} from {@link RedisNode}.
                         * @param node must not be {#literal null}.
                         * @param pattern must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        keys(node: org.springframework.data.redis.connection.RedisClusterNode, pattern: java.nio.ByteBuffer): object
                        /**
                         * Retrieve a random {@literal key} from {@link RedisNode}.
                         * @param node must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        randomKey(node: org.springframework.data.redis.connection.RedisClusterNode): object
                    }
                }
            }
        }
    }
}
