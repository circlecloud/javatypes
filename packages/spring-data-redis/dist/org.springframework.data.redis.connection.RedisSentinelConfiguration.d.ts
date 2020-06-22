declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Configuration class used for setting up {@link RedisConnection} via {@link RedisConnectionFactory} using connecting
                     * to <a href="https://redis.io/topics/sentinel">Redis Sentinel(s)</a>. Useful when setting up a high availability Redis
                     * environment.
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author Mark Paluch
                     * @since 1.4
                     */
                    // @ts-ignore
                    class RedisSentinelConfiguration extends java.lang.Object implements org.springframework.data.redis.connection.RedisConfiguration, org.springframework.data.redis.connection.RedisConfiguration.SentinelConfiguration {
                        /**
                         * Creates new {@link RedisSentinelConfiguration}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates {@link RedisSentinelConfiguration} for given hostPort combinations.
                         * <pre>
                         * sentinelHostAndPorts[0] = 127.0.0.1:23679 sentinelHostAndPorts[1] = 127.0.0.1:23680 ...
                         * <pre>
                         * @param sentinelHostAndPorts must not be {#literal null}.
                         * @since 1.5
                         */
                        // @ts-ignore
                        constructor(master: java.lang.String | string, sentinelHostAndPorts: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>)
                        /**
                         * Creates {@link RedisSentinelConfiguration} looking up values in given {@link PropertySource}.
                         * <pre>
                         * <code>
                         * spring.redis.sentinel.master=myMaster
                         * spring.redis.sentinel.nodes=127.0.0.1:23679,127.0.0.1:23680,127.0.0.1:23681
                         * </code>
                         * </pre>
                         * @param propertySource must not be {#literal null}.
                         * @since 1.5
                         */
                        // @ts-ignore
                        constructor(propertySource: object)
                        /**
                         * Set {@literal Sentinels} to connect to.
                         * @param sentinels must not be {#literal null}.
                         */
                        // @ts-ignore
                        public setSentinels(sentinels: java.lang.Iterable<org.springframework.data.redis.connection.RedisNode>): void
                        // @ts-ignore
                        public getSentinels(): Array<org.springframework.data.redis.connection.RedisNode>
                        /**
                         * Add sentinel.
                         * @param sentinel must not be {#literal null}.
                         */
                        // @ts-ignore
                        public addSentinel(sentinel: org.springframework.data.redis.connection.RedisNode): void
                        // @ts-ignore
                        public setMaster(master: org.springframework.data.redis.connection.NamedNode): void
                        // @ts-ignore
                        public getMaster(): org.springframework.data.redis.connection.NamedNode
                        /**
                         * @see #setMaster(String)
                         * @param master The master node name.
                         * @return this.
                         */
                        // @ts-ignore
                        public master(master: java.lang.String | string): org.springframework.data.redis.connection.RedisSentinelConfiguration
                        /**
                         * @see #setMaster(NamedNode)
                         * @param master the master node
                         * @return this.
                         */
                        // @ts-ignore
                        public master(master: org.springframework.data.redis.connection.NamedNode): org.springframework.data.redis.connection.RedisSentinelConfiguration
                        /**
                         * @see #addSentinel(RedisNode)
                         * @param sentinel the node to add as sentinel.
                         * @return this.
                         */
                        // @ts-ignore
                        public sentinel(sentinel: org.springframework.data.redis.connection.RedisNode): org.springframework.data.redis.connection.RedisSentinelConfiguration
                        /**
                         * @see #sentinel(RedisNode)
                         * @param host redis sentinel node host name or ip.
                         * @param port redis sentinel port.
                         * @return this.
                         */
                        // @ts-ignore
                        public sentinel(host: java.lang.String | string, port: java.lang.Integer | number): org.springframework.data.redis.connection.RedisSentinelConfiguration
                        // @ts-ignore
                        public getDatabase(): number /*int*/
                        // @ts-ignore
                        public setDatabase(index: number /*int*/): void
                        // @ts-ignore
                        public getPassword(): org.springframework.data.redis.connection.RedisPassword
                        // @ts-ignore
                        public setPassword(password: org.springframework.data.redis.connection.RedisPassword): void
                    }
                }
            }
        }
    }
}
