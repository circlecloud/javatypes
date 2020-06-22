declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ClusterCommandExecutor {
                        /**
                         * Callback interface for Redis 'low level' code using the cluster client directly. To be used with
                         * {@link ClusterCommandExecutor} execution methods.
                         * @author Christoph Strobl
                         * @param <T> native driver connection
                         * @param <S>
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface ClusterCommandCallback<T, S> {
                            // @ts-ignore
                            doInCluster(client: T): S
                        }
                    }
                }
            }
        }
    }
}
