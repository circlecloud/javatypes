declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class LettuceClusterConnection extends org.springframework.data.redis.connection.lettuce.LettuceConnection implements org.springframework.data.redis.connection.DefaultedRedisClusterConnection {
                            /**
                             * Creates new {@link LettuceClusterConnection} using {@link RedisClusterClient} with default
                             * {@link RedisURI#DEFAULT_TIMEOUT_DURATION timeout} and a fresh {@link ClusterCommandExecutor} that gets destroyed on
                             * close.
                             * @param clusterClient must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(clusterClient: RedisClusterClient)
                            /**
                             * Creates new {@link LettuceClusterConnection} with default {@link RedisURI#DEFAULT_TIMEOUT_DURATION timeout} using
                             * {@link RedisClusterClient} running commands across the cluster via given {@link ClusterCommandExecutor}.
                             * @param clusterClient must not be {#literal null}.
                             * @param executor must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(clusterClient: RedisClusterClient, executor: org.springframework.data.redis.connection.ClusterCommandExecutor)
                            /**
                             * Creates new {@link LettuceClusterConnection} with given command {@code timeout} using {@link RedisClusterClient}
                             * running commands across the cluster via given {@link ClusterCommandExecutor}.
                             * @param clusterClient must not be {#literal null}.
                             * @param timeout must not be {#literal null}.
                             * @param executor must not be {#literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            constructor(clusterClient: RedisClusterClient, executor: org.springframework.data.redis.connection.ClusterCommandExecutor, timeout: java.time.Duration)
                            // @ts-ignore
                            public geoCommands(): org.springframework.data.redis.connection.RedisGeoCommands
                            // @ts-ignore
                            public hashCommands(): org.springframework.data.redis.connection.RedisHashCommands
                            // @ts-ignore
                            public hyperLogLogCommands(): org.springframework.data.redis.connection.RedisHyperLogLogCommands
                            // @ts-ignore
                            public keyCommands(): org.springframework.data.redis.connection.RedisKeyCommands
                            // @ts-ignore
                            public listCommands(): org.springframework.data.redis.connection.RedisListCommands
                            // @ts-ignore
                            public stringCommands(): org.springframework.data.redis.connection.RedisStringCommands
                            // @ts-ignore
                            public setCommands(): org.springframework.data.redis.connection.RedisSetCommands
                            // @ts-ignore
                            public zSetCommands(): org.springframework.data.redis.connection.RedisZSetCommands
                            // @ts-ignore
                            public serverCommands(): org.springframework.data.redis.connection.RedisClusterServerCommands
                            // @ts-ignore
                            public clusterGetSlaves(master: org.springframework.data.redis.connection.RedisClusterNode): Array<org.springframework.data.redis.connection.RedisClusterNode>
                            // @ts-ignore
                            public clusterGetSlotForKey(key: number /*byte*/[]): number
                            // @ts-ignore
                            public clusterGetNodeForSlot(slot: number /*int*/): org.springframework.data.redis.connection.RedisClusterNode
                            // @ts-ignore
                            public clusterGetNodeForKey(key: number /*byte*/[]): org.springframework.data.redis.connection.RedisClusterNode
                            // @ts-ignore
                            public clusterGetClusterInfo(): org.springframework.data.redis.connection.ClusterInfo
                            // @ts-ignore
                            public clusterAddSlots(node: org.springframework.data.redis.connection.RedisClusterNode, ...slots: number /*int*/[]): void
                            // @ts-ignore
                            public clusterAddSlots(node: org.springframework.data.redis.connection.RedisClusterNode, range: org.springframework.data.redis.connection.RedisClusterNode.SlotRange): void
                            // @ts-ignore
                            public clusterDeleteSlots(node: org.springframework.data.redis.connection.RedisClusterNode, ...slots: number /*int*/[]): void
                            // @ts-ignore
                            public clusterDeleteSlotsInRange(node: org.springframework.data.redis.connection.RedisClusterNode, range: org.springframework.data.redis.connection.RedisClusterNode.SlotRange): void
                            // @ts-ignore
                            public clusterForget(node: org.springframework.data.redis.connection.RedisClusterNode): void
                            // @ts-ignore
                            public clusterMeet(node: org.springframework.data.redis.connection.RedisClusterNode): void
                            // @ts-ignore
                            public clusterSetSlot(node: org.springframework.data.redis.connection.RedisClusterNode, slot: number /*int*/, mode: org.springframework.data.redis.connection.RedisClusterCommands.AddSlots): void
                            // @ts-ignore
                            public clusterGetKeysInSlot(slot: number /*int*/, count: java.lang.Integer | number): Array<number /*byte*/[]>
                            // @ts-ignore
                            public clusterCountKeysInSlot(slot: number /*int*/): number
                            // @ts-ignore
                            public clusterReplicate(master: org.springframework.data.redis.connection.RedisClusterNode, replica: org.springframework.data.redis.connection.RedisClusterNode): void
                            // @ts-ignore
                            public ping(): string
                            // @ts-ignore
                            public ping(node: org.springframework.data.redis.connection.RedisClusterNode): string
                            // @ts-ignore
                            public keys(node: org.springframework.data.redis.connection.RedisClusterNode, pattern: number /*byte*/[]): Array<number /*byte*/[]>
                            // @ts-ignore
                            public scan(node: org.springframework.data.redis.connection.RedisClusterNode, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<number /*byte*/[]>
                            // @ts-ignore
                            public randomKey(node: org.springframework.data.redis.connection.RedisClusterNode): number /*byte*/[]
                            // @ts-ignore
                            public select(dbIndex: number /*int*/): void
                            // @ts-ignore
                            public clusterGetNodes(): Array<org.springframework.data.redis.connection.RedisClusterNode>
                            // @ts-ignore
                            public watch(...keys: number /*byte*/[][]): void
                            // @ts-ignore
                            public unwatch(): void
                            // @ts-ignore
                            public multi(): void
                            // @ts-ignore
                            public clusterGetMasterSlaveMap(): java.util.Map<org.springframework.data.redis.connection.RedisClusterNode, java.util.Collection<org.springframework.data.redis.connection.RedisClusterNode> | Array<org.springframework.data.redis.connection.RedisClusterNode>>
                            // @ts-ignore
                            public getClusterCommandExecutor(): org.springframework.data.redis.connection.ClusterCommandExecutor
                            // @ts-ignore
                            public close(): void
                        }
                    }
                }
            }
        }
    }
}
