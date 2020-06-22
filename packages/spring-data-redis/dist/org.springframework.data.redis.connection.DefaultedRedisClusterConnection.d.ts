declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface DefaultedRedisClusterConnection extends org.springframework.data.redis.connection.RedisClusterConnection, org.springframework.data.redis.connection.DefaultedRedisConnection {
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        bgReWriteAof(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        bgSave(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        lastSave(node: org.springframework.data.redis.connection.RedisClusterNode): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        save(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        dbSize(node: org.springframework.data.redis.connection.RedisClusterNode): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        flushDb(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        flushAll(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        info(node: org.springframework.data.redis.connection.RedisClusterNode): java.util.Properties
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        info(node: org.springframework.data.redis.connection.RedisClusterNode, section: java.lang.String | string): java.util.Properties
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        shutdown(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        getConfig(node: org.springframework.data.redis.connection.RedisClusterNode, pattern: java.lang.String | string): java.util.Properties
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        setConfig(node: org.springframework.data.redis.connection.RedisClusterNode, param: java.lang.String | string, value: java.lang.String | string): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        resetConfigStats(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        time(node: org.springframework.data.redis.connection.RedisClusterNode): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        getClientList(node: org.springframework.data.redis.connection.RedisClusterNode): Array<org.springframework.data.redis.core.types.RedisClientInfo>
                        // @ts-ignore
                        execute<T>(command: java.lang.String | string, key: number /*byte*/[], args: java.util.Collection<number /*byte*/[]> | Array<number /*byte*/[]>): T
                    }
                }
            }
        }
    }
}
