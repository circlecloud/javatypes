declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Representation of a Redis server within the cluster.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class RedisClusterNode extends org.springframework.data.redis.connection.RedisNode {
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates new {@link RedisClusterNode} with empty {@link SlotRange}.
                         * @param host must not be {#literal null}.
                         * @param port
                         */
                        // @ts-ignore
                        constructor(host: java.lang.String | string, port: number /*int*/)
                        /**
                         * Creates new {@link RedisClusterNode} with an id and empty {@link SlotRange}.
                         * @param id must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(id: java.lang.String | string)
                        /**
                         * Creates new {@link RedisClusterNode} with given {@link SlotRange}.
                         * @param host must not be {#literal null}.
                         * @param port
                         * @param slotRange must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(host: java.lang.String | string, port: number /*int*/, slotRange: org.springframework.data.redis.connection.RedisClusterNode.SlotRange)
                        /**
                         * Creates new {@link RedisClusterNode} with given {@link SlotRange}.
                         * @param slotRange must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(slotRange: org.springframework.data.redis.connection.RedisClusterNode.SlotRange)
                        /**
                         * Get the served {@link SlotRange}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getSlotRange(): org.springframework.data.redis.connection.RedisClusterNode.SlotRange
                        /**
                         * @param slot
                         * @return true if slot is covered.
                         */
                        // @ts-ignore
                        public servesSlot(slot: number /*int*/): boolean
                        /**
                         * @return can be {#literal null}
                         */
                        // @ts-ignore
                        public getLinkState(): org.springframework.data.redis.connection.RedisClusterNode.LinkState
                        /**
                         * @return true if node is connected to cluster.
                         */
                        // @ts-ignore
                        public isConnected(): boolean
                        /**
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getFlags(): Array<org.springframework.data.redis.connection.RedisClusterNode.Flag>
                        /**
                         * @return true if node is marked as failing.
                         */
                        // @ts-ignore
                        public isMarkedAsFail(): boolean
                        // @ts-ignore
                        public toString(): string
                        /**
                         * Get {@link RedisClusterNodeBuilder} for creating new {@link RedisClusterNode}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public static newRedisClusterNode(): org.springframework.data.redis.connection.RedisClusterNode.RedisClusterNodeBuilder
                    }
                }
            }
        }
    }
}
