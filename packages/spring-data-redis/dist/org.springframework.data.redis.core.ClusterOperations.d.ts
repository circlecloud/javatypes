declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis operations for cluster specific operations. A {@link RedisClusterNode} can be obtained from
                     * {@link RedisClusterCommands#clusterGetNodes() a connection} or it can be
                     * constructed using either {@link RedisClusterNode#getHost() host} and {@link RedisClusterNode#getPort()} or the
                     * {@link RedisClusterNode#getId() node Id}.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    interface ClusterOperations<K, V> {
                        /**
                         * Get all keys located at given node.
                         * @param node must not be {#literal null}.
                         * @param pattern
                         * @return never {#literal null}.
                         * @see RedisConnection#keys(byte[])
                         */
                        // @ts-ignore
                        keys(node: org.springframework.data.redis.connection.RedisClusterNode, pattern: K): Array<K>
                        /**
                         * Ping the given node;
                         * @param node must not be {#literal null}.
                         * @return 
                         * @see RedisConnection#ping()
                         */
                        // @ts-ignore
                        ping(node: org.springframework.data.redis.connection.RedisClusterNode): string
                        /**
                         * Get a random key from the range served by the given node.
                         * @param node must not be {#literal null}.
                         * @return 
                         * @see RedisConnection#randomKey()
                         */
                        // @ts-ignore
                        randomKey(node: org.springframework.data.redis.connection.RedisClusterNode): K
                        /**
                         * Add slots to given node;
                         * @param node must not be {#literal null}.
                         * @param slots must not be {#literal null}.
                         */
                        // @ts-ignore
                        addSlots(node: org.springframework.data.redis.connection.RedisClusterNode, ...slots: number /*int*/[]): void
                        /**
                         * Add slots in {@link SlotRange} to given node.
                         * @param node must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         */
                        // @ts-ignore
                        addSlots(node: org.springframework.data.redis.connection.RedisClusterNode, range: org.springframework.data.redis.connection.RedisClusterNode.SlotRange): void
                        /**
                         * Start an {@literal Append Only File} rewrite process on given node.
                         * @param node must not be {#literal null}.
                         * @see RedisConnection#bgReWriteAof()
                         */
                        // @ts-ignore
                        bgReWriteAof(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * Start background saving of db on given node.
                         * @param node must not be {#literal null}.
                         * @see RedisConnection#bgSave()
                         */
                        // @ts-ignore
                        bgSave(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * Add the node to cluster.
                         * @param node must not be {#literal null}.
                         */
                        // @ts-ignore
                        meet(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * Remove the node from the cluster.
                         * @param node must not be {#literal null}.
                         */
                        // @ts-ignore
                        forget(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * Flush db on node.
                         * @param node must not be {#literal null}.
                         * @see RedisConnection#flushDb()
                         */
                        // @ts-ignore
                        flushDb(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @param node must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        getSlaves(node: org.springframework.data.redis.connection.RedisClusterNode): Array<org.springframework.data.redis.connection.RedisClusterNode>
                        /**
                         * Synchronous save current db snapshot on server.
                         * @param node must not be {#literal null}.
                         * @see RedisConnection#save()
                         */
                        // @ts-ignore
                        save(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * Shutdown given node.
                         * @param node must not be {#literal null}.
                         * @see RedisConnection#shutdown()
                         */
                        // @ts-ignore
                        shutdown(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * Move slot assignment from one source to target node and copy keys associated with the slot.
                         * @param source must not be {#literal null}.
                         * @param slot
                         * @param target must not be {#literal null}.
                         */
                        // @ts-ignore
                        reshard(source: org.springframework.data.redis.connection.RedisClusterNode, slot: number /*int*/, target: org.springframework.data.redis.connection.RedisClusterNode): void
                    }
                }
            }
        }
    }
}
