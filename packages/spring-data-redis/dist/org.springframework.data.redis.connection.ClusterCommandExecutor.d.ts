declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * {@link ClusterCommandExecutor} takes care of running commands across the known cluster nodes. By providing an
                     * {@link AsyncTaskExecutor} the execution behavior can be influenced.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class ClusterCommandExecutor extends java.lang.Object {
                        /**
                         * Create a new instance of {@link ClusterCommandExecutor}.
                         * @param topologyProvider must not be {#literal null}.
                         * @param resourceProvider must not be {#literal null}.
                         * @param exceptionTranslation must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(topologyProvider: org.springframework.data.redis.connection.ClusterTopologyProvider, resourceProvider: org.springframework.data.redis.connection.ClusterNodeResourceProvider, exceptionTranslation: org.springframework.data.redis.ExceptionTranslationStrategy)
                        /**
                         * @param topologyProvider must not be {#literal null}.
                         * @param resourceProvider must not be {#literal null}.
                         * @param exceptionTranslation must not be {#literal null}.
                         * @param executor can be {#literal null}. Defaulted to {@link ThreadPoolTaskExecutor}.
                         */
                        // @ts-ignore
                        constructor(topologyProvider: org.springframework.data.redis.connection.ClusterTopologyProvider, resourceProvider: org.springframework.data.redis.connection.ClusterNodeResourceProvider, exceptionTranslation: org.springframework.data.redis.ExceptionTranslationStrategy, executor: AsyncTaskExecutor)
                        /**
                         * Run {@link ClusterCommandCallback} on a random node.
                         * @param cmd must not be {#literal null}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public executeCommandOnArbitraryNode<T>(cmd: org.springframework.data.redis.connection.ClusterCommandExecutor.ClusterCommandCallback<any, T>): org.springframework.data.redis.connection.ClusterCommandExecutor.NodeResult<T>
                        /**
                         * Run {@link ClusterCommandCallback} on given {@link RedisClusterNode}.
                         * @param cmd must not be {#literal null}.
                         * @param node must not be {#literal null}.
                         * @throws IllegalArgumentException in case no resource can be acquired for given node.
                         * @return 
                         */
                        // @ts-ignore
                        public executeCommandOnSingleNode<S, T>(cmd: org.springframework.data.redis.connection.ClusterCommandExecutor.ClusterCommandCallback<S, T>, node: org.springframework.data.redis.connection.RedisClusterNode): org.springframework.data.redis.connection.ClusterCommandExecutor.NodeResult<T>
                        /**
                         * Run {@link ClusterCommandCallback} on all reachable master nodes.
                         * @param cmd must not be {#literal null}.
                         * @return never {#literal null}.
                         * @throws ClusterCommandExecutionFailureException
                         */
                        // @ts-ignore
                        public executeCommandOnAllNodes<S, T>(cmd: org.springframework.data.redis.connection.ClusterCommandExecutor.ClusterCommandCallback<S, T>): org.springframework.data.redis.connection.ClusterCommandExecutor.MultiNodeResult<T>
                        /**
                         * @param callback must not be {#literal null}.
                         * @param nodes must not be {#literal null}.
                         * @return never {#literal null}.
                         * @throws ClusterCommandExecutionFailureException
                         * @throws IllegalArgumentException in case the node could not be resolved to a topology-known node
                         */
                        // @ts-ignore
                        public executeCommandAsyncOnNodes<S, T>(callback: org.springframework.data.redis.connection.ClusterCommandExecutor.ClusterCommandCallback<S, T>, nodes: java.lang.Iterable<org.springframework.data.redis.connection.RedisClusterNode>): org.springframework.data.redis.connection.ClusterCommandExecutor.MultiNodeResult<T>
                        /**
                         * Run {@link MultiKeyClusterCommandCallback} with on a curated set of nodes serving one or more keys.
                         * @param cmd must not be {#literal null}.
                         * @return never {#literal null}.
                         * @throws ClusterCommandExecutionFailureException
                         */
                        // @ts-ignore
                        public executeMultiKeyCommand<S, T>(cmd: org.springframework.data.redis.connection.ClusterCommandExecutor.MultiKeyClusterCommandCallback<S, T>, keys: java.lang.Iterable<number /*byte*/[]>): org.springframework.data.redis.connection.ClusterCommandExecutor.MultiNodeResult<T>
                        /**
                         * Set the maximum number of redirects to follow on {@code MOVED} or {@code ASK}.
                         * @param maxRedirects set to zero to suspend redirects.
                         */
                        // @ts-ignore
                        public setMaxRedirects(maxRedirects: number /*int*/): void
                        // @ts-ignore
                        public destroy(): void
                    }
                }
            }
        }
    }
}
