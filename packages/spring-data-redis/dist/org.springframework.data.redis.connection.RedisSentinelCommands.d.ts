declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis Sentinel-specific commands.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.4
                     * @see <a href="https://redis.io/topics/sentinel">Redis Sentinel Documentation</a>
                     */
                    // @ts-ignore
                    interface RedisSentinelCommands {
                        /**
                         * Force a failover as if the {@literal master} was not reachable.
                         * @param master must not be {#literal null}.
                         */
                        // @ts-ignore
                        failover(master: org.springframework.data.redis.connection.NamedNode): void
                        /**
                         * Get a {@link Collection} of monitored masters and their state.
                         * @return Collection of {#link RedisServer}s. Never {@literal null}.
                         */
                        // @ts-ignore
                        masters(): Array<org.springframework.data.redis.connection.RedisServer>
                        /**
                         * Show list of slaves for given {@literal master}.
                         * @param master must not be {#literal null}.
                         * @return Collection of {#link RedisServer}s. Never {@literal null}.
                         */
                        // @ts-ignore
                        slaves(master: org.springframework.data.redis.connection.NamedNode): Array<org.springframework.data.redis.connection.RedisServer>
                        /**
                         * Removes given {@literal master}. The server will no longer be monitored and will no longer be returned by
                         * {@link #masters()}.
                         * @param master must not be {#literal null}.
                         */
                        // @ts-ignore
                        remove(master: org.springframework.data.redis.connection.NamedNode): void
                        /**
                         * Tell sentinel to start monitoring a new {@literal master} with the specified {@link RedisServer#getName()},
                         * {@link RedisServer#getHost()}, {@link RedisServer#getPort()}, and {@link RedisServer#getQuorum()}.
                         * @param master must not be {#literal null}.
                         */
                        // @ts-ignore
                        monitor(master: org.springframework.data.redis.connection.RedisServer): void
                    }
                }
            }
        }
    }
}
