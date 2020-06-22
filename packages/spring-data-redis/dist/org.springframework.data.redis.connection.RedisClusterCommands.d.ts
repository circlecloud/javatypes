declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Interface for the {@literal cluster} commands supported by Redis. A {@link RedisClusterNode} can be obtained from
                     * {@link #clusterGetNodes()} or it can be constructed using either {@link RedisClusterNode#getHost() host} and
                     * {@link RedisClusterNode#getPort()} or the {@link RedisClusterNode#getId() node Id}.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    interface RedisClusterCommands {
                        /**
                         * Retrieve cluster node information such as {@literal id}, {@literal host}, {@literal port} and {@literal slots}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/cluster-nodes">Redis Documentation: CLUSTER NODES</a>
                         */
                        // @ts-ignore
                        clusterGetNodes(): java.lang.Iterable<org.springframework.data.redis.connection.RedisClusterNode>
                        /**
                         * Retrieve information about connected slaves for given master node.
                         * @param master must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/cluster-slaves">Redis Documentation: CLUSTER SLAVES</a>
                         */
                        // @ts-ignore
                        clusterGetSlaves(master: org.springframework.data.redis.connection.RedisClusterNode): Array<org.springframework.data.redis.connection.RedisClusterNode>
                        /**
                         * Retrieve information about masters and their connected slaves.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/cluster-slaves">Redis Documentation: CLUSTER SLAVES</a>
                         */
                        // @ts-ignore
                        clusterGetMasterSlaveMap(): java.util.Map<org.springframework.data.redis.connection.RedisClusterNode, java.util.Collection<org.springframework.data.redis.connection.RedisClusterNode> | Array<org.springframework.data.redis.connection.RedisClusterNode>>
                        /**
                         * Find the slot for a given {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/cluster-keyslot">Redis Documentation: CLUSTER KEYSLOT</a>
                         */
                        // @ts-ignore
                        clusterGetSlotForKey(key: number /*byte*/[]): number
                        /**
                         * Find the {@link RedisClusterNode} serving given {@literal slot}.
                         * @param slot
                         * @return 
                         */
                        // @ts-ignore
                        clusterGetNodeForSlot(slot: number /*int*/): org.springframework.data.redis.connection.RedisClusterNode
                        /**
                         * Find the {@link RedisClusterNode} serving given {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        clusterGetNodeForKey(key: number /*byte*/[]): org.springframework.data.redis.connection.RedisClusterNode
                        /**
                         * Get cluster information.
                         * @return 
                         * @see <a href="https://redis.io/commands/cluster-info">Redis Documentation: CLUSTER INFO</a>
                         */
                        // @ts-ignore
                        clusterGetClusterInfo(): org.springframework.data.redis.connection.ClusterInfo
                        /**
                         * Assign slots to given {@link RedisClusterNode}.
                         * @param node must not be {#literal null}.
                         * @param slots
                         * @see <a href="https://redis.io/commands/cluster-addslots">Redis Documentation: CLUSTER ADDSLOTS</a>
                         */
                        // @ts-ignore
                        clusterAddSlots(node: org.springframework.data.redis.connection.RedisClusterNode, ...slots: number /*int*/[]): void
                        /**
                         * Assign {@link SlotRange#getSlotsArray()} to given {@link RedisClusterNode}.
                         * @param node must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/cluster-addslots">Redis Documentation: CLUSTER ADDSLOTS</a>
                         */
                        // @ts-ignore
                        clusterAddSlots(node: org.springframework.data.redis.connection.RedisClusterNode, range: org.springframework.data.redis.connection.RedisClusterNode.SlotRange): void
                        /**
                         * Count the number of keys assigned to one {@literal slot}.
                         * @param slot
                         * @return 
                         * @see <a href="https://redis.io/commands/cluster-countkeysinslot">Redis Documentation: CLUSTER COUNTKEYSINSLOT</a>
                         */
                        // @ts-ignore
                        clusterCountKeysInSlot(slot: number /*int*/): number
                        /**
                         * Remove slots from {@link RedisClusterNode}.
                         * @param node must not be {#literal null}.
                         * @param slots
                         * @see <a href="https://redis.io/commands/cluster-delslots">Redis Documentation: CLUSTER DELSLOTS</a>
                         */
                        // @ts-ignore
                        clusterDeleteSlots(node: org.springframework.data.redis.connection.RedisClusterNode, ...slots: number /*int*/[]): void
                        /**
                         * Removes {@link SlotRange#getSlotsArray()} from given {@link RedisClusterNode}.
                         * @param node must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/cluster-delslots">Redis Documentation: CLUSTER DELSLOTS</a>
                         */
                        // @ts-ignore
                        clusterDeleteSlotsInRange(node: org.springframework.data.redis.connection.RedisClusterNode, range: org.springframework.data.redis.connection.RedisClusterNode.SlotRange): void
                        /**
                         * Remove given {@literal node} from cluster.
                         * @param node must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/cluster-forget">Redis Documentation: CLUSTER FORGET</a>
                         */
                        // @ts-ignore
                        clusterForget(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * Add given {@literal node} to cluster.
                         * @param node must contain {#link RedisClusterNode#getHost() host} and {@link RedisClusterNode#getPort()} and must
                         *           not be {@literal null}.
                         * @see <a href="https://redis.io/commands/cluster-meet">Redis Documentation: CLUSTER MEET</a>
                         */
                        // @ts-ignore
                        clusterMeet(node: org.springframework.data.redis.connection.RedisClusterNode): void
                        /**
                         * @param node must not be {#literal null}.
                         * @param slot
                         * @param mode must not be{#literal null}.
                         * @see <a href="https://redis.io/commands/cluster-setslot">Redis Documentation: CLUSTER SETSLOT</a>
                         */
                        // @ts-ignore
                        clusterSetSlot(node: org.springframework.data.redis.connection.RedisClusterNode, slot: number /*int*/, mode: org.springframework.data.redis.connection.RedisClusterCommands.AddSlots): void
                        /**
                         * Get {@literal keys} served by slot.
                         * @param slot
                         * @param count must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/cluster-getkeysinslot">Redis Documentation: CLUSTER GETKEYSINSLOT</a>
                         */
                        // @ts-ignore
                        clusterGetKeysInSlot(slot: number /*int*/, count: java.lang.Integer | number): Array<number /*byte*/[]>
                        /**
                         * Assign a {@literal slave} to given {@literal master}.
                         * @param master must not be {#literal null}.
                         * @param replica must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/cluster-replicate">Redis Documentation: CLUSTER REPLICATE</a>
                         */
                        // @ts-ignore
                        clusterReplicate(master: org.springframework.data.redis.connection.RedisClusterNode, replica: org.springframework.data.redis.connection.RedisClusterNode): void
                    }
                }
            }
        }
    }
}
