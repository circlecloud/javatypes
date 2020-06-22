declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * {@code RedisConnection} implementation on top of <a href="https://github.com/mp911de/lettuce">Lettuce</a> Redis
                         * client.
                         * @author Costin Leau
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author David Liu
                         * @author Mark Paluch
                         * @author Ninad Divadkar
                         */
                        // @ts-ignore
                        class LettuceConnection extends org.springframework.data.redis.connection.AbstractRedisConnection {
                            /**
                             * Instantiates a new lettuce connection.
                             * @param timeout The connection timeout (in milliseconds)
                             * @param client The {#link RedisClient} to use when instantiating a native connection
                             */
                            // @ts-ignore
                            constructor(timeout: number /*long*/, client: RedisClient)
                            /**
                             * Instantiates a new lettuce connection.
                             * @param timeout The connection timeout (in milliseconds) * #param client The {@link RedisClient} to use when
                             *           instantiating a pub/sub connection
                             * @param pool The connection pool to use for all other native connections
                             * @deprecated since 2.0, use pooling via {#link LettucePoolingClientConfiguration}.
                             */
                            // @ts-ignore
                            constructor(timeout: number /*long*/, client: RedisClient, pool: org.springframework.data.redis.connection.lettuce.LettucePool)
                            /**
                             * Instantiates a new lettuce connection.
                             * @param sharedConnection A native connection that is shared with other {#link LettuceConnection}s. Will not be used
                             *           for transactions or blocking operations
                             * @param timeout The connection timeout (in milliseconds)
                             * @param client The {#link RedisClient} to use when making pub/sub, blocking, and tx connections
                             */
                            // @ts-ignore
                            constructor(sharedConnection: object, timeout: number /*long*/, client: RedisClient)
                            /**
                             * Instantiates a new lettuce connection.
                             * @param sharedConnection A native connection that is shared with other {#link LettuceConnection}s. Should not be
                             *           used for transactions or blocking operations
                             * @param timeout The connection timeout (in milliseconds)
                             * @param client The {#link RedisClient} to use when making pub/sub connections
                             * @param pool The connection pool to use for blocking and tx operations
                             * @deprecated since 2.0, use
                             *              {#link #LettuceConnection(StatefulRedisConnection, LettuceConnectionProvider, long, int)}
                             */
                            // @ts-ignore
                            constructor(sharedConnection: object, timeout: number /*long*/, client: RedisClient, pool: org.springframework.data.redis.connection.lettuce.LettucePool)
                            /**
                             * @param sharedConnection A native connection that is shared with other {#link LettuceConnection}s. Should not be
                             *           used for transactions or blocking operations.
                             * @param timeout The connection timeout (in milliseconds)
                             * @param client The {#link RedisClient} to use when making pub/sub connections.
                             * @param pool The connection pool to use for blocking and tx operations.
                             * @param defaultDbIndex The db index to use along with {#link RedisClient} when establishing a dedicated connection.
                             * @since 1.7
                             * @deprecated since 2.0, use
                             *              {#link #LettuceConnection(StatefulRedisConnection, LettuceConnectionProvider, long, int)}
                             */
                            // @ts-ignore
                            constructor(sharedConnection: object, timeout: number /*long*/, client: AbstractRedisClient, pool: org.springframework.data.redis.connection.lettuce.LettucePool, defaultDbIndex: number /*int*/)
                            /**
                             * @param sharedConnection A native connection that is shared with other {#link LettuceConnection}s. Should not be
                             *           used for transactions or blocking operations.
                             * @param connectionProvider connection provider to obtain and release native connections.
                             * @param timeout The connection timeout (in milliseconds)
                             * @param defaultDbIndex The db index to use along with {#link RedisClient} when establishing a dedicated connection.
                             * @since 2.0
                             */
                            // @ts-ignore
                            constructor(sharedConnection: object, connectionProvider: org.springframework.data.redis.connection.lettuce.LettuceConnectionProvider, timeout: number /*long*/, defaultDbIndex: number /*int*/)
                            // @ts-ignore
                            convertLettuceAccessException(ex: java.lang.Exception): DataAccessException
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
                            public setCommands(): org.springframework.data.redis.connection.RedisSetCommands
                            // @ts-ignore
                            public scriptingCommands(): org.springframework.data.redis.connection.RedisScriptingCommands
                            // @ts-ignore
                            public stringCommands(): org.springframework.data.redis.connection.RedisStringCommands
                            // @ts-ignore
                            public serverCommands(): org.springframework.data.redis.connection.RedisServerCommands
                            // @ts-ignore
                            public zSetCommands(): org.springframework.data.redis.connection.RedisZSetCommands
                            // @ts-ignore
                            public execute(command: java.lang.String | string, ...args: number /*byte*/[][]): any
                            /**
                             * 'Native' or 'raw' execution of the given command along-side the given arguments.
                             * @see RedisConnection#execute(String, byte[]...)
                             * @param command Command to execute
                             * @param commandOutputTypeHint Type of Output to use, may be (may be {#literal null}).
                             * @param args Possible command arguments (may be {#literal null})
                             * @return execution result.
                             */
                            // @ts-ignore
                            public execute(command: java.lang.String | string, commandOutputTypeHint: CommandOutput, ...args: number /*byte*/[][]): any
                            // @ts-ignore
                            public close(): void
                            // @ts-ignore
                            public isClosed(): boolean
                            // @ts-ignore
                            public getNativeConnection(): object
                            // @ts-ignore
                            public isQueueing(): boolean
                            // @ts-ignore
                            public isPipelined(): boolean
                            // @ts-ignore
                            public openPipeline(): void
                            // @ts-ignore
                            public closePipeline(): Array<java.lang.Object | any>
                            // @ts-ignore
                            public echo(message: number /*byte*/[]): number /*byte*/[]
                            // @ts-ignore
                            public ping(): string
                            // @ts-ignore
                            public discard(): void
                            // @ts-ignore
                            public exec(): Array<java.lang.Object | any>
                            // @ts-ignore
                            public multi(): void
                            // @ts-ignore
                            public select(dbIndex: number /*int*/): void
                            // @ts-ignore
                            public unwatch(): void
                            // @ts-ignore
                            public watch(...keys: number /*byte*/[][]): void
                            // @ts-ignore
                            public publish(channel: number /*byte*/[], message: number /*byte*/[]): number
                            // @ts-ignore
                            public getSubscription(): org.springframework.data.redis.connection.Subscription
                            // @ts-ignore
                            public isSubscribed(): boolean
                            // @ts-ignore
                            public pSubscribe(listener: org.springframework.data.redis.connection.MessageListener, ...patterns: number /*byte*/[][]): void
                            // @ts-ignore
                            public subscribe(listener: org.springframework.data.redis.connection.MessageListener, ...channels: number /*byte*/[][]): void
                            /**
                             * Specifies if pipelined and transaction results should be converted to the expected data type. If false, results of
                             * {@link #closePipeline()} and {@link #exec()} will be of the type returned by the Lettuce driver
                             * @param convertPipelineAndTxResults Whether or not to convert pipeline and tx results
                             */
                            // @ts-ignore
                            public setConvertPipelineAndTxResults(convertPipelineAndTxResults: boolean): void
                            /**
                             * {@link #close()} the current connection and open a new pub/sub connection to the Redis server.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            switchToPubSub(): object
                            // @ts-ignore
                            getConnection(): object
                            // @ts-ignore
                            getAsyncDedicatedConnection(): object
                            // @ts-ignore
                            doGetAsyncDedicatedConnection(): object
                            // @ts-ignore
                            isActive(node: org.springframework.data.redis.connection.RedisNode): boolean
                            // @ts-ignore
                            getSentinelConnection(sentinel: org.springframework.data.redis.connection.RedisNode): org.springframework.data.redis.connection.RedisSentinelConnection
                        }
                    }
                }
            }
        }
    }
}
