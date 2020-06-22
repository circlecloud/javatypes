declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        /**
                         * {@link RedisClusterConnection} implementation on top of {@link JedisCluster}.<br/>
                         * Uses the native {@link JedisCluster} api where possible and falls back to direct node communication using
                         * {@link Jedis} where needed.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @author Ninad Divadkar
                         * @author Tao Chen
                         * @author Chen Guanqun
                         * @since 1.7
                         */
                        // @ts-ignore
                        class JedisClusterConnection extends java.lang.Object implements org.springframework.data.redis.connection.DefaultedRedisClusterConnection {
                            /**
                             * Create new {@link JedisClusterConnection} utilizing native connections via {@link JedisCluster}.
                             * @param cluster must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(cluster: JedisCluster)
                            /**
                             * Create new {@link JedisClusterConnection} utilizing native connections via {@link JedisCluster} running commands
                             * across the cluster via given {@link ClusterCommandExecutor}.
                             * @param cluster must not be {#literal null}.
                             * @param executor must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(cluster: JedisCluster, executor: org.springframework.data.redis.connection.ClusterCommandExecutor)
                            // @ts-ignore
                            public execute(command: java.lang.String | string, ...args: number /*byte*/[][]): any
                            // @ts-ignore
                            public execute<T>(command: java.lang.String | string, key: number /*byte*/[], args: java.util.Collection<number /*byte*/[]> | Array<number /*byte*/[]>): T
                            /**
                             * Execute the given command for each key in {@code keys} provided appending all {@code args} on each invocation.
                             * <br />
                             * This method, other than {@link #execute(String, byte[]...)}, dispatches the command to the {@code key} serving
                             * master node and appends the {@code key} as first command argument to the {@code command}. {@code keys} are not
                             * required to share the same slot for single-key commands. Multi-key commands carrying their keys in {@code args}
                             * still require to share the same slot as the {@code key}.
                             * <pre>
                             * <code>
                             * // SET foo bar EX 10 NX
                             * execute("SET", "foo".getBytes(), asBinaryList("bar", "EX", 10, "NX"))
                             * </code>
                             * </pre>
                             * @param command must not be {#literal null}.
                             * @param keys must not be {#literal null}.
                             * @param args must not be {#literal null}.
                             * @return command result as delivered by the underlying Redis driver. Can be {#literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public execute<T>(command: java.lang.String | string, keys: java.util.Collection<number /*byte*/[]> | Array<number /*byte*/[]>, args: java.util.Collection<number /*byte*/[]> | Array<number /*byte*/[]>): Array<T>
                            // @ts-ignore
                            public geoCommands(): org.springframework.data.redis.connection.RedisGeoCommands
                            // @ts-ignore
                            public hashCommands(): org.springframework.data.redis.connection.RedisHashCommands
                            // @ts-ignore
                            public hyperLogLogCommands(): org.springframework.data.redis.connection.RedisHyperLogLogCommands
                            // @ts-ignore
                            public keyCommands(): org.springframework.data.redis.connection.RedisKeyCommands
                            // @ts-ignore
                            public stringCommands(): org.springframework.data.redis.connection.RedisStringCommands
                            // @ts-ignore
                            public listCommands(): org.springframework.data.redis.connection.RedisListCommands
                            // @ts-ignore
                            public setCommands(): org.springframework.data.redis.connection.RedisSetCommands
                            // @ts-ignore
                            public zSetCommands(): org.springframework.data.redis.connection.RedisZSetCommands
                            // @ts-ignore
                            public serverCommands(): org.springframework.data.redis.connection.RedisClusterServerCommands
                            // @ts-ignore
                            public scriptingCommands(): org.springframework.data.redis.connection.RedisScriptingCommands
                            // @ts-ignore
                            public keys(node: org.springframework.data.redis.connection.RedisClusterNode, pattern: number /*byte*/[]): Array<number /*byte*/[]>
                            // @ts-ignore
                            public scan(node: org.springframework.data.redis.connection.RedisClusterNode, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<number /*byte*/[]>
                            // @ts-ignore
                            public randomKey(node: org.springframework.data.redis.connection.RedisClusterNode): number /*byte*/[]
                            // @ts-ignore
                            public multi(): void
                            // @ts-ignore
                            public exec(): Array<java.lang.Object | any>
                            // @ts-ignore
                            public discard(): void
                            // @ts-ignore
                            public watch(...keys: number /*byte*/[][]): void
                            // @ts-ignore
                            public unwatch(): void
                            // @ts-ignore
                            public isSubscribed(): boolean
                            // @ts-ignore
                            public getSubscription(): org.springframework.data.redis.connection.Subscription
                            // @ts-ignore
                            public publish(channel: number /*byte*/[], message: number /*byte*/[]): number
                            // @ts-ignore
                            public subscribe(listener: org.springframework.data.redis.connection.MessageListener, ...channels: number /*byte*/[][]): void
                            // @ts-ignore
                            public pSubscribe(listener: org.springframework.data.redis.connection.MessageListener, ...patterns: number /*byte*/[][]): void
                            // @ts-ignore
                            public select(dbIndex: number /*int*/): void
                            // @ts-ignore
                            public echo(message: number /*byte*/[]): number /*byte*/[]
                            // @ts-ignore
                            public ping(): string
                            // @ts-ignore
                            public ping(node: org.springframework.data.redis.connection.RedisClusterNode): string
                            // @ts-ignore
                            public clusterSetSlot(node: org.springframework.data.redis.connection.RedisClusterNode, slot: number /*int*/, mode: org.springframework.data.redis.connection.RedisClusterCommands.AddSlots): void
                            // @ts-ignore
                            public clusterGetKeysInSlot(slot: number /*int*/, count: java.lang.Integer | number): Array<number /*byte*/[]>
                            // @ts-ignore
                            public clusterAddSlots(node: org.springframework.data.redis.connection.RedisClusterNode, ...slots: number /*int*/[]): void
                            // @ts-ignore
                            public clusterAddSlots(node: org.springframework.data.redis.connection.RedisClusterNode, range: org.springframework.data.redis.connection.RedisClusterNode.SlotRange): void
                            // @ts-ignore
                            public clusterCountKeysInSlot(slot: number /*int*/): number
                            // @ts-ignore
                            public clusterDeleteSlots(node: org.springframework.data.redis.connection.RedisClusterNode, ...slots: number /*int*/[]): void
                            // @ts-ignore
                            public clusterDeleteSlotsInRange(node: org.springframework.data.redis.connection.RedisClusterNode, range: org.springframework.data.redis.connection.RedisClusterNode.SlotRange): void
                            // @ts-ignore
                            public clusterForget(node: org.springframework.data.redis.connection.RedisClusterNode): void
                            // @ts-ignore
                            public clusterMeet(node: org.springframework.data.redis.connection.RedisClusterNode): void
                            // @ts-ignore
                            public clusterReplicate(master: org.springframework.data.redis.connection.RedisClusterNode, replica: org.springframework.data.redis.connection.RedisClusterNode): void
                            // @ts-ignore
                            public clusterGetSlotForKey(key: number /*byte*/[]): number
                            // @ts-ignore
                            public clusterGetNodeForSlot(slot: number /*int*/): org.springframework.data.redis.connection.RedisClusterNode
                            // @ts-ignore
                            public clusterGetNodes(): Array<org.springframework.data.redis.connection.RedisClusterNode>
                            // @ts-ignore
                            public clusterGetSlaves(master: org.springframework.data.redis.connection.RedisClusterNode): Array<org.springframework.data.redis.connection.RedisClusterNode>
                            // @ts-ignore
                            public clusterGetMasterSlaveMap(): java.util.Map<org.springframework.data.redis.connection.RedisClusterNode, java.util.Collection<org.springframework.data.redis.connection.RedisClusterNode> | Array<org.springframework.data.redis.connection.RedisClusterNode>>
                            // @ts-ignore
                            public clusterGetNodeForKey(key: number /*byte*/[]): org.springframework.data.redis.connection.RedisClusterNode
                            // @ts-ignore
                            public clusterGetClusterInfo(): org.springframework.data.redis.connection.ClusterInfo
                            // @ts-ignore
                            convertJedisAccessException(ex: java.lang.Exception): DataAccessException
                            // @ts-ignore
                            public close(): void
                            // @ts-ignore
                            public isClosed(): boolean
                            // @ts-ignore
                            public getNativeConnection(): JedisCluster
                            // @ts-ignore
                            public isQueueing(): boolean
                            // @ts-ignore
                            public isPipelined(): boolean
                            // @ts-ignore
                            public openPipeline(): void
                            // @ts-ignore
                            public closePipeline(): Array<java.lang.Object | any>
                            // @ts-ignore
                            public getSentinelConnection(): org.springframework.data.redis.connection.RedisSentinelConnection
                            // @ts-ignore
                            getCluster(): JedisCluster
                            // @ts-ignore
                            getClusterCommandExecutor(): org.springframework.data.redis.connection.ClusterCommandExecutor
                            // @ts-ignore
                            getTopologyProvider(): org.springframework.data.redis.connection.jedis.JedisClusterConnection.JedisClusterTopologyProvider
                        }
                    }
                }
            }
        }
    }
}
