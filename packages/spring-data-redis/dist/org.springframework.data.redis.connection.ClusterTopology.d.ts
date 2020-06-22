declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * {@link ClusterTopology} holds snapshot like information about {@link RedisClusterNode}s.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class ClusterTopology extends java.lang.Object {
                        /**
                         * Creates new instance of {@link ClusterTopology}.
                         * @param nodes can be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(nodes: java.util.Set<org.springframework.data.redis.connection.RedisClusterNode> | Array<org.springframework.data.redis.connection.RedisClusterNode>)
                        /**
                         * Get all {@link RedisClusterNode}s.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getNodes(): Array<org.springframework.data.redis.connection.RedisClusterNode>
                        /**
                         * Get all nodes (master and slave) in cluster where {@code link-state} is {@literal connected} and {@code flags} does
                         * not contain {@literal fail} or {@literal fail?}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getActiveNodes(): Array<org.springframework.data.redis.connection.RedisClusterNode>
                        /**
                         * Get all master nodes in cluster where {@code link-state} is {@literal connected} and {@code flags} does not contain
                         * {@literal fail} or {@literal fail?}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getActiveMasterNodes(): Array<org.springframework.data.redis.connection.RedisClusterNode>
                        /**
                         * Get all master nodes in cluster.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getMasterNodes(): Array<org.springframework.data.redis.connection.RedisClusterNode>
                        /**
                         * Get the {@link RedisClusterNode}s (master and slave) serving s specific slot.
                         * @param slot
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getSlotServingNodes(slot: number /*int*/): Array<org.springframework.data.redis.connection.RedisClusterNode>
                        /**
                         * Get the {@link RedisClusterNode} that is the current master serving the given key.
                         * @param key must not be {#literal null}.
                         * @return never {#literal null}.
                         * @throws ClusterStateFailureException
                         */
                        // @ts-ignore
                        public getKeyServingMasterNode(key: number /*byte*/[]): org.springframework.data.redis.connection.RedisClusterNode
                        /**
                         * Get the {@link RedisClusterNode} matching given {@literal host} and {@literal port}.
                         * @param host must not be {#literal null}.
                         * @param port
                         * @return never {#literal null}.
                         * @throws ClusterStateFailureException
                         */
                        // @ts-ignore
                        public lookup(host: java.lang.String | string, port: number /*int*/): org.springframework.data.redis.connection.RedisClusterNode
                        /**
                         * Get the {@link RedisClusterNode} matching given {@literal nodeId}.
                         * @param nodeId must not be {#literal null}.
                         * @return never {#literal null}.
                         * @throws ClusterStateFailureException
                         */
                        // @ts-ignore
                        public lookup(nodeId: java.lang.String | string): org.springframework.data.redis.connection.RedisClusterNode
                        /**
                         * Get the {@link RedisClusterNode} matching matching either {@link RedisClusterNode#getHost() host} and
                         * {@link RedisClusterNode#getPort() port} or {@link RedisClusterNode#getId() nodeId}
                         * @param node must not be {#literal null}
                         * @return never {#literal null}.
                         * @throws ClusterStateFailureException
                         */
                        // @ts-ignore
                        public lookup(node: org.springframework.data.redis.connection.RedisClusterNode): org.springframework.data.redis.connection.RedisClusterNode
                        /**
                         * @param key must not be {#literal null}.
                         * @return {#literal null}.
                         */
                        // @ts-ignore
                        public getKeyServingNodes(key: number /*byte*/[]): Array<org.springframework.data.redis.connection.RedisClusterNode>
                    }
                }
            }
        }
    }
}
