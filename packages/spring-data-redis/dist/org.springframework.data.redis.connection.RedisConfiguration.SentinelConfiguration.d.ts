declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisConfiguration {
                        /**
                         * Configuration interface suitable for Redis Sentinel environments.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface SentinelConfiguration extends org.springframework.data.redis.connection.RedisConfiguration.WithDatabaseIndex, org.springframework.data.redis.connection.RedisConfiguration.WithPassword {
                            /**
                             * Set the name of the master node.
                             * @param name must not be {#literal null}.
                             */
                            // @ts-ignore
                            setMaster(name: java.lang.String | string): void
                            /**
                             * Set the master node.
                             * @param master must not be {#literal null}.
                             */
                            // @ts-ignore
                            setMaster(master: org.springframework.data.redis.connection.NamedNode): void
                            /**
                             * Get the {@literal Sentinel} master node.
                             * @return get the master node or {#literal null} if not set.
                             */
                            // @ts-ignore
                            getMaster(): org.springframework.data.redis.connection.NamedNode
                            /**
                             * Returns an {@link Collections#unmodifiableSet(Set)} of {@literal Sentinels}.
                             * @return {#link Set} of sentinels. Never {@literal null}.
                             */
                            // @ts-ignore
                            getSentinels(): Array<org.springframework.data.redis.connection.RedisNode>
                        }
                    }
                }
            }
        }
    }
}
