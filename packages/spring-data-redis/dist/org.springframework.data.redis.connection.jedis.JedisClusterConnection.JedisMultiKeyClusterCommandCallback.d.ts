declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        namespace JedisClusterConnection {
                            /**
                             * {@link Jedis} specific {@link MultiKeyClusterCommandCallback}.
                             * @author Christoph Strobl
                             * @param <T>
                             * @since 1.7
                             */
                            // @ts-ignore
                            interface JedisMultiKeyClusterCommandCallback<T> extends org.springframework.data.redis.connection.ClusterCommandExecutor.MultiKeyClusterCommandCallback<Jedis, T> {
                            }
                        }
                    }
                }
            }
        }
    }
}
