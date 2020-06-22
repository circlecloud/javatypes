declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        namespace JedisClusterConnection {
                            /**
                             * {@link Jedis} specific {@link ClusterCommandCallback}.
                             * @author Christoph Strobl
                             * @param <T>
                             * @since 1.7
                             */
                            // @ts-ignore
                            interface JedisClusterCommandCallback<T> extends org.springframework.data.redis.connection.ClusterCommandExecutor.ClusterCommandCallback<Jedis, T> {
                            }
                        }
                    }
                }
            }
        }
    }
}
