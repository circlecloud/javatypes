declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        namespace LettuceClusterConnection {
                            /**
                             * Lettuce specific implementation of {@link ClusterCommandCallback}.
                             * @author Christoph Strobl
                             * @param <T>
                             * @since 1.7
                             */
                            // @ts-ignore
                            interface LettuceClusterCommandCallback<T> extends org.springframework.data.redis.connection.ClusterCommandExecutor.ClusterCommandCallback<object, T> {
                            }
                        }
                    }
                }
            }
        }
    }
}
