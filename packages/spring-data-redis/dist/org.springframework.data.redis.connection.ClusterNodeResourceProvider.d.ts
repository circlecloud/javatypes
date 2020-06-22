declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * {@link ClusterNodeResourceProvider} provides access to low level client api to directly execute operations against a
                     * Redis instance.
                     * @author Christoph Strobl
                     * @since 1.7
                     */
                    // @ts-ignore
                    interface ClusterNodeResourceProvider {
                        /**
                         * Get the client resource for the given node.
                         * @param node must not be {#literal null}.
                         * @return never {#literal null}.
                         * @throws org.springframework.dao.DataAccessResourceFailureException if node is not known to the cluster.
                         */
                        // @ts-ignore
                        getResourceForSpecificNode<S>(node: org.springframework.data.redis.connection.RedisClusterNode): S
                        /**
                         * Return the resource object for the given node. This can mean free up resources or return elements back to a pool.
                         * @param node must not be {#literal null}.
                         * @param resource must not be {#literal null}.
                         */
                        // @ts-ignore
                        returnResourceForSpecificNode(node: org.springframework.data.redis.connection.RedisClusterNode, resource: java.lang.Object | any): void
                    }
                }
            }
        }
    }
}
