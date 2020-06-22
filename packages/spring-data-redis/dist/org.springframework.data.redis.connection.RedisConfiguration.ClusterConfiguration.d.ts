declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisConfiguration {
                        /**
                         * Configuration interface suitable for Redis cluster environments.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface ClusterConfiguration extends org.springframework.data.redis.connection.RedisConfiguration.WithPassword {
                            /**
                             * Returns an {@link Collections#unmodifiableSet(Set)} of {@literal cluster nodes}.
                             * @return {#link Set} of nodes. Never {@literal null}.
                             */
                            // @ts-ignore
                            getClusterNodes(): Array<org.springframework.data.redis.connection.RedisNode>
                            /**
                             * @return max number of redirects to follow or {#literal null} if not set.
                             */
                            // @ts-ignore
                            getMaxRedirects(): number
                        }
                    }
                }
            }
        }
    }
}
