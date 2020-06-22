declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * {@link RedisClusterConnection} allows sending commands to dedicated nodes within the cluster. A
                     * {@link RedisClusterNode} can be obtained from {@link #clusterGetNodes()} or it can be constructed using either
                     * {@link RedisClusterNode#getHost() host} and {@link RedisClusterNode#getPort()} or the {@link RedisClusterNode#getId()
                     * node Id}.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    interface RedisClusterConnection extends org.springframework.data.redis.connection.RedisConnection, org.springframework.data.redis.connection.RedisClusterCommands, org.springframework.data.redis.connection.RedisClusterServerCommands {
                        /**
                         * @param node must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see RedisConnectionCommands#ping()
                         */
                        // @ts-ignore
                        ping(node: org.springframework.data.redis.connection.RedisClusterNode): string
                        /**
                         * @param node must not be {#literal null}.
                         * @param pattern must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see RedisKeyCommands#keys(byte[])
                         */
                        // @ts-ignore
                        keys(node: org.springframework.data.redis.connection.RedisClusterNode, pattern: number /*byte*/[]): Array<number /*byte*/[]>
                        /**
                         * Use a {@link Cursor} to iterate over keys.
                         * @param node must not be {#literal null}.
                         * @param options must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/scan">Redis Documentation: SCAN</a>
                         */
                        // @ts-ignore
                        scan(node: org.springframework.data.redis.connection.RedisClusterNode, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<number /*byte*/[]>
                        /**
                         * @param node must not be {#literal null}.
                         * @return {#literal null} when no keys stored at node or when used in pipeline / transaction.
                         * @see RedisKeyCommands#randomKey()
                         */
                        // @ts-ignore
                        randomKey(node: org.springframework.data.redis.connection.RedisClusterNode): number /*byte*/[]
                        /**
                         * Execute the given command for the {@code key} provided potentially appending args. <br />
                         * This method, other than {@link #execute(String, byte[]...)}, dispatches the command to the {@code key} serving
                         * master node.
                         * <pre>
                         * <code>
                         * // SET foo bar EX 10 NX
                         * execute("SET", "foo".getBytes(), asBinaryList("bar", "EX", 10, "NX"))
                         * </code>
                         * </pre>
                         * @param command must not be {#literal null}.
                         * @param key must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return command result as delivered by the underlying Redis driver. Can be {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        execute<T>(command: java.lang.String | string, key: number /*byte*/[], args: java.util.Collection<number /*byte*/[]> | Array<number /*byte*/[]>): T
                        /**
                         * Get {@link RedisClusterServerCommands}.
                         * @return never {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        serverCommands(): org.springframework.data.redis.connection.RedisClusterServerCommands
                    }
                }
            }
        }
    }
}
