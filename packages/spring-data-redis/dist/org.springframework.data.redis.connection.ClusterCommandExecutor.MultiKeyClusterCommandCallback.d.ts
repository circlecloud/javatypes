declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ClusterCommandExecutor {
                        /**
                         * Callback interface for Redis 'low level' code using the cluster client to execute multi key commands.
                         * @author Christoph Strobl
                         * @param <T> native driver connection
                         * @param <S>
                         */
                        // @ts-ignore
                        interface MultiKeyClusterCommandCallback<T, S> {
                            // @ts-ignore
                            doInCluster(client: T, key: number /*byte*/[]): S
                        }
                    }
                }
            }
        }
    }
}
