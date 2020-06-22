declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ClusterCommandExecutor {
                        /**
                         * {@link NodeResult} encapsulates the actual value returned by a {@link ClusterCommandCallback} on a given
                         * {@link RedisClusterNode}.
                         * @author Christoph Strobl
                         * @param <T>
                         * @since 1.7
                         */
                        // @ts-ignore
                        class NodeResult<T> extends java.lang.Object {
                            /**
                             * Create new {@link NodeResult}.
                             * @param node must not be {#literal null}.
                             * @param value can be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(node: org.springframework.data.redis.connection.RedisClusterNode, value: T)
                            /**
                             * Create new {@link NodeResult}.
                             * @param node must not be {#literal null}.
                             * @param value can be {#literal null}.
                             * @param key must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(node: org.springframework.data.redis.connection.RedisClusterNode, value: T, key: number /*byte*/[])
                            /**
                             * Get the actual value of the command execution.
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): T
                            /**
                             * Get the {@link RedisClusterNode} the command was executed on.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getNode(): org.springframework.data.redis.connection.RedisClusterNode
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getKey(): number /*byte*/[]
                            /**
                             * Apply the {@link Function mapper function} to the value and return the mapped value.
                             * @param mapper must not be {#literal null}.
                             * @param <U> type of the mapped value.
                             * @return the mapped value.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public mapValue<U>(mapper: java.util.function$.Function<any, any>): U
                        }
                    }
                }
            }
        }
    }
}
