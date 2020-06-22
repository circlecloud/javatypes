declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisConfiguration {
                        /**
                         * Configuration interface suitable for Redis master/slave environments with fixed hosts. <br/>
                         * Redis is undergoing a nomenclature change where the term replica is used synonymously to slave.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface StaticMasterReplicaConfiguration extends org.springframework.data.redis.connection.RedisConfiguration.WithDatabaseIndex, org.springframework.data.redis.connection.RedisConfiguration.WithPassword {
                            /**
                             * @return unmodifiable {#link List} of {@link RedisStandaloneConfiguration nodes}.
                             */
                            // @ts-ignore
                            getNodes(): Array<org.springframework.data.redis.connection.RedisStandaloneConfiguration>
                        }
                    }
                }
            }
        }
    }
}
