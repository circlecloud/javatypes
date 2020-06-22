declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface RedisClusterServerCommands extends org.springframework.data.redis.connection.RedisServerCommands {
                        /**
                         * @param node must not be {#literal null}.
                         * @see RedisServerCommands#bgReWriteAof()
                         */
                        // @ts-ignore
                        bgReWriteAof(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @param node must not be {#literal null}.
                         * @see RedisServerCommands#bgSave()
                         */
                        // @ts-ignore
                        bgSave(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @param node must not be {#literal null}.
                         * @return 
                         * @see RedisServerCommands#lastSave()
                         */
                        // @ts-ignore
                        lastSave(node: org.springframework.data.redis.connection.RedisClusterNode): number
                        /**
                         * @param node must not be {#literal null}.
                         * @see RedisServerCommands#save()
                         */
                        // @ts-ignore
                        save(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @param node must not be {#literal null}.
                         * @return 
                         * @see RedisServerCommands#dbSize()
                         */
                        // @ts-ignore
                        dbSize(node: org.springframework.data.redis.connection.RedisClusterNode): number
                        /**
                         * @param node must not be {#literal null}.
                         * @see RedisServerCommands#flushDb()
                         */
                        // @ts-ignore
                        flushDb(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @param node must not be {#literal null}.
                         * @see RedisServerCommands#flushAll()
                         */
                        // @ts-ignore
                        flushAll(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @param node must not be {#literal null}.
                         * @return 
                         * @see RedisServerCommands#info()
                         */
                        // @ts-ignore
                        info(node: org.springframework.data.redis.connection.RedisClusterNode): java.util.Properties
                        /**
                         * @param node must not be {#literal null}.
                         * @param section
                         * @return 
                         * @see RedisServerCommands#info(String)
                         */
                        // @ts-ignore
                        info(node: org.springframework.data.redis.connection.RedisClusterNode, section: java.lang.String | string): java.util.Properties
                        /**
                         * @param node must not be {#literal null}.
                         * @see RedisServerCommands#shutdown()
                         */
                        // @ts-ignore
                        shutdown(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @param node must not be {#literal null}.
                         * @param pattern
                         * @return 
                         * @see RedisServerCommands#getConfig(String)
                         */
                        // @ts-ignore
                        getConfig(node: org.springframework.data.redis.connection.RedisClusterNode, pattern: java.lang.String | string): java.util.Properties
                        /**
                         * @param node must not be {#literal null}.
                         * @param param
                         * @param value
                         * @see RedisServerCommands#setConfig(String, String)
                         */
                        // @ts-ignore
                        setConfig(node: org.springframework.data.redis.connection.RedisClusterNode, param: java.lang.String | string, value: java.lang.String | string): void
                        /**
                         * @param node must not be {#literal null}.
                         * @see RedisServerCommands#resetConfigStats()
                         */
                        // @ts-ignore
                        resetConfigStats(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @param node must not be {#literal null}.
                         * @return 
                         * @see RedisServerCommands#time()
                         */
                        // @ts-ignore
                        time(node: org.springframework.data.redis.connection.RedisClusterNode): number
                        /**
                         * @param node must not be {#literal null}.
                         * @return 
                         * @see RedisServerCommands#getClientList()
                         */
                        // @ts-ignore
                        getClientList(node: org.springframework.data.redis.connection.RedisClusterNode): Array<org.springframework.data.redis.core.types.RedisClientInfo>
                    }
                }
            }
        }
    }
}
