declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * {@link ClusterTopologyProvider} manages the current cluster topology and makes sure to refresh cluster information.
                     * @author Christoph Strobl
                     * @since 1.7
                     */
                    // @ts-ignore
                    interface ClusterTopologyProvider {
                        /**
                         * Get the current known {@link ClusterTopology}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        getTopology(): org.springframework.data.redis.connection.ClusterTopology
                    }
                }
            }
        }
    }
}
