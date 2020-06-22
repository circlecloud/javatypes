declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        /**
                         * {@code RedisConnection} implementation on top of <a href="https://github.com/xetorthio/jedis">Jedis</a> library.
                         * @author Costin Leau
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Jungtaek Lim
                         * @author Konstantin Shchepanovskyi
                         * @author David Liu
                         * @author Milan Agatonovic
                         * @author Mark Paluch
                         * @author Ninad Divadkar
                         */
                        // @ts-ignore
                        class JedisConnection extends org.springframework.data.redis.connection.AbstractRedisConnection {
                            /**
                             * Constructs a new <code>JedisConnection</code> instance.
                             * @param jedis Jedis entity
                             */
                            // @ts-ignore
                            constructor(jedis: Jedis)
                            /**
                             * Constructs a new <code>JedisConnection</code> instance backed by a jedis pool.
                             * @param jedis
                             * @param pool can be null, if no pool is used
                             * @param dbIndex
                             */
                            // @ts-ignore
                            constructor(jedis: Jedis, pool: org.springframework.data.redis.connection.Pool<Jedis>, dbIndex: number /*int*/)
                            /**
                             * Constructs a new <code>JedisConnection</code> instance backed by a jedis pool.
                             * @param jedis
                             * @param pool can be null, if no pool is used
                             * @param dbIndex
                             * @param clientName the client name, can be {#literal null}.
                             * @since 1.8
                             */
                            // @ts-ignore
                            constructor(jedis: Jedis, pool: org.springframework.data.redis.connection.Pool<Jedis>, dbIndex: number /*int*/, clientName: java.lang.String | string)
                            // @ts-ignore
                            convertJedisAccessException(ex: java.lang.Exception): DataAccessException
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
                            public hashCommands(): org.springframework.data.redis.connection.RedisHashCommands
                            // @ts-ignore
                            public geoCommands(): org.springframework.data.redis.connection.RedisGeoCommands
                            // @ts-ignore
                            public scriptingCommands(): org.springframework.data.redis.connection.RedisScriptingCommands
                            // @ts-ignore
                            public serverCommands(): org.springframework.data.redis.connection.RedisServerCommands
                            // @ts-ignore
                            public hyperLogLogCommands(): org.springframework.data.redis.connection.RedisHyperLogLogCommands
                            // @ts-ignore
                            public execute(command: java.lang.String | string, ...args: number /*byte*/[][]): any
                            // @ts-ignore
                            public close(): void
                            // @ts-ignore
                            public getNativeConnection(): Jedis
                            // @ts-ignore
                            public isClosed(): boolean
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
                            public getPipeline(): Pipeline
                            // @ts-ignore
                            public getRequiredPipeline(): Pipeline
                            // @ts-ignore
                            public getTransaction(): Transaction
                            // @ts-ignore
                            public getRequiredTransaction(): Transaction
                            // @ts-ignore
                            public getJedis(): Jedis
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
                             * Specifies if pipelined results should be converted to the expected data type. If false, results of
                             * {@link #closePipeline()} and {@link #exec()} will be of the type returned by the Jedis driver
                             * @param convertPipelineAndTxResults Whether or not to convert pipeline and tx results
                             */
                            // @ts-ignore
                            public setConvertPipelineAndTxResults(convertPipelineAndTxResults: boolean): void
                            // @ts-ignore
                            isActive(node: org.springframework.data.redis.connection.RedisNode): boolean
                            // @ts-ignore
                            getSentinelConnection(sentinel: org.springframework.data.redis.connection.RedisNode): org.springframework.data.redis.connection.jedis.JedisSentinelConnection
                            // @ts-ignore
                            getJedis(node: org.springframework.data.redis.connection.RedisNode): Jedis
                        }
                    }
                }
            }
        }
    }
}
