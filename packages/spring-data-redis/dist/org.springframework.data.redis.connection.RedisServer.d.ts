declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author Franjo Zilic
                     * @since 1.4
                     */
                    // @ts-ignore
                    class RedisServer extends org.springframework.data.redis.connection.RedisNode {
                        /**
                         * Creates a new {@link RedisServer} with the given {@code host}, {@code port}.
                         * @param host must not be {#literal null}
                         * @param port
                         */
                        // @ts-ignore
                        constructor(host: java.lang.String | string, port: number /*int*/)
                        /**
                         * Creates a new {@link RedisServer} with the given {@code host}, {@code port} and {@code properties}.
                         * @param host must not be {#literal null}
                         * @param port
                         * @param properties may be {#literal null}
                         */
                        // @ts-ignore
                        constructor(host: java.lang.String | string, port: number /*int*/, properties: java.util.Properties)
                        /**
                         * Creates a new {@link RedisServer} from the given properties.
                         * @param properties
                         * @return 
                         */
                        // @ts-ignore
                        public static newServerFrom(properties: java.util.Properties): org.springframework.data.redis.connection.RedisServer
                        // @ts-ignore
                        public setQuorum(quorum: java.lang.Long | number): void
                        // @ts-ignore
                        public getRunId(): string
                        // @ts-ignore
                        public getFlags(): string
                        // @ts-ignore
                        public isMaster(): boolean
                        // @ts-ignore
                        public getPendingCommands(): number
                        // @ts-ignore
                        public getLastPingSent(): number
                        // @ts-ignore
                        public getLastOkPingReply(): number
                        // @ts-ignore
                        public getDownAfterMilliseconds(): number
                        // @ts-ignore
                        public getInfoRefresh(): number
                        // @ts-ignore
                        public getRoleReported(): string
                        // @ts-ignore
                        public roleReportedTime(): number
                        // @ts-ignore
                        public getConfigEpoch(): number
                        // @ts-ignore
                        public getNumberSlaves(): number
                        /**
                         * Get the number of connected replicas.
                         * @return 
                         * @since 2.1
                         */
                        // @ts-ignore
                        public getNumberReplicas(): number
                        // @ts-ignore
                        public getNumberOtherSentinels(): number
                        // @ts-ignore
                        public getQuorum(): number
                        // @ts-ignore
                        public getFailoverTimeout(): number
                        // @ts-ignore
                        public getParallelSyncs(): number
                        /**
                         * @param info must not be null
                         * @return {#literal null} if no entry found for requested {@link INFO}.
                         */
                        // @ts-ignore
                        public get(info: org.springframework.data.redis.connection.RedisServer.INFO): string
                        /**
                         * @param key must not be {#literal null} or {@literal empty}.
                         * @return {#literal null} if no entry found for requested {@code key}.
                         */
                        // @ts-ignore
                        public get(key: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
