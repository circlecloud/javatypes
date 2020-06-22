declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Central abstraction for reactive Redis data access implementing {@link ReactiveRedisOperations}.
                     * <p/>
                     * Performs automatic serialization/deserialization between the given objects and the underlying binary data in the
                     * Redis store.
                     * <p/>
                     * Note that while the template is generified, it is up to the serializers/deserializers to properly convert the given
                     * Objects to and from binary data.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     * @param <K> the Redis key type against which the template works (usually a String)
                     * @param <V> the Redis value type against which the template works
                     */
                    // @ts-ignore
                    class ReactiveRedisTemplate<K, V> extends java.lang.Object implements org.springframework.data.redis.core.ReactiveRedisOperations<K, V> {
                        /**
                         * Creates new {@link ReactiveRedisTemplate} using given {@link ReactiveRedisConnectionFactory} and
                         * {@link RedisSerializationContext}.
                         * @param connectionFactory must not be {#literal null}.
                         * @param serializationContext must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.data.redis.connection.ReactiveRedisConnectionFactory, serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K, V>)
                        /**
                         * Creates new {@link ReactiveRedisTemplate} using given {@link ReactiveRedisConnectionFactory} and
                         * {@link RedisSerializationContext}.
                         * @param connectionFactory must not be {#literal null}.
                         * @param serializationContext must not be {#literal null}.
                         * @param exposeConnection flag indicating to expose the connection used.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.data.redis.connection.ReactiveRedisConnectionFactory, serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K, V>, exposeConnection: boolean)
                        /**
                         * Returns the connectionFactory.
                         * @return Returns the connectionFactory
                         */
                        // @ts-ignore
                        public getConnectionFactory(): org.springframework.data.redis.connection.ReactiveRedisConnectionFactory
                        // @ts-ignore
                        public execute<T>(action: org.springframework.data.redis.core.ReactiveRedisCallback<T>): object
                        /**
                         * Executes the given action object within a connection that can be exposed or not. Additionally, the connection can
                         * be pipelined. Note the results of the pipeline are discarded (making it suitable for write-only scenarios).
                         * @param <T> return type
                         * @param action callback object to execute
                         * @param exposeConnection whether to enforce exposure of the native Redis Connection to callback code
                         * @return object returned by the action
                         */
                        // @ts-ignore
                        public execute<T>(action: org.springframework.data.redis.core.ReactiveRedisCallback<T>, exposeConnection: boolean): object
                        /**
                         * Create a reusable Flux for a {@link ReactiveRedisCallback}. Callback is executed within a connection context. The
                         * connection is released outside the callback.
                         * @param callback must not be {#literal null}
                         * @return a {#link Flux} wrapping the {@link ReactiveRedisCallback}.
                         */
                        // @ts-ignore
                        public createFlux<T>(callback: org.springframework.data.redis.core.ReactiveRedisCallback<T>): object
                        /**
                         * Create a reusable Mono for a {@link ReactiveRedisCallback}. Callback is executed within a connection context. The
                         * connection is released outside the callback.
                         * @param callback must not be {#literal null}
                         * @return a {#link Mono} wrapping the {@link ReactiveRedisCallback}.
                         */
                        // @ts-ignore
                        public createMono<T>(callback: org.springframework.data.redis.core.ReactiveRedisCallback<T>): object
                        // @ts-ignore
                        public convertAndSend(destination: java.lang.String | string, message: V): object
                        // @ts-ignore
                        public listenTo(...topics: org.springframework.data.redis.listener.Topic[]): object
                        // @ts-ignore
                        public hasKey(key: K): object
                        // @ts-ignore
                        public type(key: K): object
                        // @ts-ignore
                        public keys(pattern: K): object
                        // @ts-ignore
                        public scan(options: org.springframework.data.redis.core.ScanOptions): object
                        // @ts-ignore
                        public randomKey(): object
                        // @ts-ignore
                        public rename(oldKey: K, newKey: K): object
                        // @ts-ignore
                        public renameIfAbsent(oldKey: K, newKey: K): object
                        // @ts-ignore
                        public delete(...keys: K[]): object
                        // @ts-ignore
                        public delete(keys: object): object
                        // @ts-ignore
                        public unlink(...keys: K[]): object
                        // @ts-ignore
                        public unlink(keys: object): object
                        // @ts-ignore
                        public expire(key: K, timeout: java.time.Duration): object
                        // @ts-ignore
                        public expireAt(key: K, expireAt: java.time.Instant): object
                        // @ts-ignore
                        public persist(key: K): object
                        // @ts-ignore
                        public getExpire(key: K): object
                        // @ts-ignore
                        public move(key: K, dbIndex: number /*int*/): object
                        // @ts-ignore
                        public execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, args: java.util.List<any> | Array<any>): object
                        // @ts-ignore
                        public execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, args: java.util.List<any> | Array<any>, argsWriter: org.springframework.data.redis.serializer.RedisElementWriter<any>, resultReader: org.springframework.data.redis.serializer.RedisElementReader<T>): object
                        /**
                         * Processes the connection (before any settings are executed on it). Default implementation returns the connection as
                         * is.
                         * @param connection must not be {#literal null}.
                         * @param existingConnection
                         */
                        // @ts-ignore
                        preProcessConnection(connection: org.springframework.data.redis.connection.ReactiveRedisConnection, existingConnection: boolean): org.springframework.data.redis.connection.ReactiveRedisConnection
                        /**
                         * Processes the result before returning the {@link Publisher}. Default implementation returns the result as is.
                         * @param result must not be {#literal null}.
                         * @param connection must not be {#literal null}.
                         * @param existingConnection
                         * @return 
                         */
                        // @ts-ignore
                        postProcessResult<T>(result: object, connection: org.springframework.data.redis.connection.ReactiveRedisConnection, existingConnection: boolean): object
                        // @ts-ignore
                        createRedisConnectionProxy(reactiveRedisConnection: org.springframework.data.redis.connection.ReactiveRedisConnection): org.springframework.data.redis.connection.ReactiveRedisConnection
                        // @ts-ignore
                        public opsForGeo(): org.springframework.data.redis.core.ReactiveGeoOperations<K, V>
                        // @ts-ignore
                        public opsForGeo<K1, V1>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K1, V1>): org.springframework.data.redis.core.ReactiveGeoOperations<K1, V1>
                        // @ts-ignore
                        public opsForHash<HK, HV>(): org.springframework.data.redis.core.ReactiveHashOperations<K, HK, HV>
                        // @ts-ignore
                        public opsForHash<K1, HK, HV>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K1, any>): org.springframework.data.redis.core.ReactiveHashOperations<K1, HK, HV>
                        // @ts-ignore
                        public opsForHyperLogLog(): org.springframework.data.redis.core.ReactiveHyperLogLogOperations<K, V>
                        // @ts-ignore
                        public opsForHyperLogLog<K1, V1>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K1, V1>): org.springframework.data.redis.core.ReactiveHyperLogLogOperations<K1, V1>
                        // @ts-ignore
                        public opsForList(): org.springframework.data.redis.core.ReactiveListOperations<K, V>
                        // @ts-ignore
                        public opsForList<K1, V1>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K1, V1>): org.springframework.data.redis.core.ReactiveListOperations<K1, V1>
                        // @ts-ignore
                        public opsForSet(): org.springframework.data.redis.core.ReactiveSetOperations<K, V>
                        // @ts-ignore
                        public opsForSet<K1, V1>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K1, V1>): org.springframework.data.redis.core.ReactiveSetOperations<K1, V1>
                        // @ts-ignore
                        public opsForValue(): org.springframework.data.redis.core.ReactiveValueOperations<K, V>
                        // @ts-ignore
                        public opsForValue<K1, V1>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K1, V1>): org.springframework.data.redis.core.ReactiveValueOperations<K1, V1>
                        // @ts-ignore
                        public opsForZSet(): org.springframework.data.redis.core.ReactiveZSetOperations<K, V>
                        // @ts-ignore
                        public opsForZSet<K1, V1>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K1, V1>): org.springframework.data.redis.core.ReactiveZSetOperations<K1, V1>
                        // @ts-ignore
                        public getSerializationContext(): org.springframework.data.redis.serializer.RedisSerializationContext<K, V>
                    }
                }
            }
        }
    }
}
