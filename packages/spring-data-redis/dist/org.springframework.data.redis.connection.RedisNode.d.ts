declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author Mark Paluch
                     * @since 1.4
                     */
                    // @ts-ignore
                    class RedisNode extends java.lang.Object implements org.springframework.data.redis.connection.NamedNode {
                        /**
                         * Creates a new {@link RedisNode} with the given {@code host}, {@code port}.
                         * @param host must not be {#literal null}
                         * @param port
                         */
                        // @ts-ignore
                        constructor(host: java.lang.String | string, port: number /*int*/)
                        // @ts-ignore
                        constructor()
                        /**
                         * @return can be {#literal null}.
                         */
                        // @ts-ignore
                        public getHost(): string
                        /**
                         * @return can be {#literal null}.
                         */
                        // @ts-ignore
                        public getPort(): number
                        // @ts-ignore
                        public asString(): string
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        /**
                         * @return can be {#literal null}.
                         * @since 1.7
                         */
                        // @ts-ignore
                        public getMasterId(): string
                        /**
                         * @return can be {#literal null}.
                         * @since 1.7
                         */
                        // @ts-ignore
                        public getId(): string
                        /**
                         * @param id
                         * @since 1.7
                         */
                        // @ts-ignore
                        public setId(id: java.lang.String | string): void
                        /**
                         * @return can be {#literal null}.
                         * @since 1.7
                         */
                        // @ts-ignore
                        public getType(): org.springframework.data.redis.connection.RedisNode.NodeType
                        /**
                         * @return 
                         * @since 1.7
                         */
                        // @ts-ignore
                        public isMaster(): boolean
                        /**
                         * @return 
                         * @since 1.7
                         */
                        // @ts-ignore
                        public isSlave(): boolean
                        /**
                         * @return 
                         * @since 2.1
                         */
                        // @ts-ignore
                        public isReplica(): boolean
                        /**
                         * Get {@link RedisNodeBuilder} for creating new {@link RedisNode}.
                         * @return never {#literal null}.
                         * @since 1.7
                         */
                        // @ts-ignore
                        public static newRedisNode(): org.springframework.data.redis.connection.RedisNode.RedisNodeBuilder
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public equals(obj: java.lang.Object | any): boolean
                    }
                }
            }
        }
    }
}
