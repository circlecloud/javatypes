declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Interface that specified a basic set of Redis operations, implemented by {@link ReactiveRedisTemplate}. Not often
                     * used but a useful option for extensibility and testability (as it can be easily mocked or stubbed).
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveRedisOperations<K, V> {
                        /**
                         * Executes the given action within a Redis connection. Application exceptions thrown by the action object get
                         * propagated to the caller (can only be unchecked) whenever possible. Redis exceptions are transformed into
                         * appropriate DAO ones. Allows for returning a result object, that is a domain object or a collection of domain
                         * objects. Performs automatic serialization/deserialization for the given objects to and from binary data suitable
                         * for the Redis storage. Note: Callback code is not supposed to handle transactions itself! Use an appropriate
                         * transaction manager. Generally, callback code must not touch any Connection lifecycle methods, like close, to let
                         * the template do its work.
                         * @param <T> return type
                         * @param action callback object that specifies the Redis action
                         * @return a result object returned by the action or {#link Flux#empty()}.
                         */
                        // @ts-ignore
                        execute<T>(action: org.springframework.data.redis.core.ReactiveRedisCallback<T>): object
                        /**
                         * Publishes the given message to the given channel.
                         * @param destination the channel to publish to, must not be {#literal null} nor empty.
                         * @param message message to publish. Must not be {#literal null}.
                         * @return the number of clients that received the message
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/publish">Redis Documentation: PUBLISH</a>
                         */
                        // @ts-ignore
                        convertAndSend(destination: java.lang.String | string, message: V): object
                        /**
                         * Subscribe to the given Redis {@code channels} and emit {@link Message messages} received for those.
                         * @param channels must not be {#literal null}.
                         * @return a hot sequence of {#link Message messages}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        listenToChannel(...channels: java.lang.String[] | string[]): object
                        /**
                         * Subscribe to the Redis channels matching the given {@code pattern} and emit {@link Message messages} received for
                         * those.
                         * @param patterns must not be {#literal null}.
                         * @return a hot sequence of {#link Message messages}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        listenToPattern(...patterns: java.lang.String[] | string[]): object
                        /**
                         * Subscribe to the Redis channels for the given {@link Topic topics} and emit {@link Message messages} received for
                         * those.
                         * @param topics must not be {#literal null}.
                         * @return a hot sequence of {#link Message messages}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        listenTo(...topics: org.springframework.data.redis.listener.Topic[]): object
                        /**
                         * Determine if given {@code key} exists.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/exists">Redis Documentation: EXISTS</a>
                         */
                        // @ts-ignore
                        hasKey(key: K): object
                        /**
                         * Determine the type stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/type">Redis Documentation: TYPE</a>
                         */
                        // @ts-ignore
                        type(key: K): object
                        /**
                         * Find all keys matching the given {@code pattern}. <br />
                         * <strong>IMPORTANT:</strong> It is recommended to use {@link #scan()} to iterate over the keyspace as
                         * {@link #keys(Object)} is a
                         * non-interruptible and expensive Redis operation.
                         * @param pattern must not be {#literal null}.
                         * @return the {#link Flux} emitting matching keys one by one.
                         * @throws IllegalArgumentException in case the pattern is {#literal null}.
                         * @see <a href="https://redis.io/commands/keys">Redis Documentation: KEYS</a>
                         */
                        // @ts-ignore
                        keys(pattern: K): object
                        /**
                         * Use a {@link Flux} to iterate over keys. The resulting {@link Flux} acts as a cursor and issues {@code SCAN}
                         * commands itself as long as the subscriber signals demand.
                         * @return the {#link Flux} emitting the {@literal keys} one by one or an {@link Flux#empty() empty flux} if none
                         *          exist.
                         * @see <a href="https://redis.io/commands/scan">Redis Documentation: SCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        scan(): object
                        /**
                         * Use a {@link Flux} to iterate over keys. The resulting {@link Flux} acts as a cursor and issues {@code SCAN}
                         * commands itself as long as the subscriber signals demand.
                         * @param options must not be {#literal null}. Use {@link ScanOptions#NONE} instead.
                         * @return the {#link Flux} emitting the {@literal keys} one by one or an {@link Flux#empty() empty flux} if none
                         *          exist.
                         * @throws IllegalArgumentException when the given {#code options} is {@literal null}.
                         * @see <a href="https://redis.io/commands/scan">Redis Documentation: SCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        scan(options: org.springframework.data.redis.core.ScanOptions): object
                        /**
                         * Return a random key from the keyspace.
                         * @return 
                         * @see <a href="https://redis.io/commands/randomkey">Redis Documentation: RANDOMKEY</a>
                         */
                        // @ts-ignore
                        randomKey(): object
                        /**
                         * Rename key {@code oldKey} to {@code newKey}.
                         * @param oldKey must not be {#literal null}.
                         * @param newKey must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/rename">Redis Documentation: RENAME</a>
                         */
                        // @ts-ignore
                        rename(oldKey: K, newKey: K): object
                        /**
                         * Rename key {@code oleName} to {@code newKey} only if {@code newKey} does not exist.
                         * @param oldKey must not be {#literal null}.
                         * @param newKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/renamenx">Redis Documentation: RENAMENX</a>
                         */
                        // @ts-ignore
                        renameIfAbsent(oldKey: K, newKey: K): object
                        /**
                         * Delete given {@code key}.
                         * @param key must not be {#literal null}.
                         * @return The number of keys that were removed.
                         * @see <a href="https://redis.io/commands/del">Redis Documentation: DEL</a>
                         */
                        // @ts-ignore
                        delete(...key: K[]): object
                        /**
                         * Delete given {@code keys}. This command buffers keys received from {@link Publisher} into chunks of 128 keys to
                         * delete to reduce the number of issued {@code DEL} commands.
                         * @param keys must not be {#literal null}.
                         * @return The number of keys that were removed.
                         * @see <a href="https://redis.io/commands/del">Redis Documentation: DEL</a>
                         */
                        // @ts-ignore
                        delete(keys: object): object
                        /**
                         * Unlink the {@code key} from the keyspace. Unlike with {@link #delete(Object[])} the actual memory reclaiming here
                         * happens asynchronously.
                         * @param key must not be {#literal null}.
                         * @return The number of keys that were removed. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/unlink">Redis Documentation: UNLINK</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        unlink(...key: K[]): object
                        /**
                         * Unlink the {@code keys} from the keyspace. Unlike with {@link #delete(Publisher)} the actual memory reclaiming here
                         * happens asynchronously. This command buffers keys received from {@link Publisher} into chunks of 128 keys to delete
                         * to reduce the number of issued {@code UNLINK} commands.
                         * @param keys must not be {#literal null}.
                         * @return The number of keys that were removed. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/unlink">Redis Documentation: UNLINK</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        unlink(keys: object): object
                        /**
                         * Set time to live for given {@code key}.
                         * @param key must not be {#literal null}.
                         * @param timeout must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        expire(key: K, timeout: java.time.Duration): object
                        /**
                         * Set the expiration for given {@code key} as a {@literal expireAt} timestamp.
                         * @param key must not be {#literal null}.
                         * @param expireAt must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        expireAt(key: K, expireAt: java.time.Instant): object
                        /**
                         * Remove the expiration from given {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/persist">Redis Documentation: PERSIST</a>
                         */
                        // @ts-ignore
                        persist(key: K): object
                        /**
                         * Move given {@code key} to database with {@code index}.
                         * @param key must not be {#literal null}.
                         * @param dbIndex
                         * @return 
                         * @see <a href="https://redis.io/commands/move">Redis Documentation: MOVE</a>
                         */
                        // @ts-ignore
                        move(key: K, dbIndex: number /*int*/): object
                        /**
                         * Get the time to live for {@code key}.
                         * @param key must not be {#literal null}.
                         * @return the {#link Duration} of the associated key. {@link Duration#ZERO} if no timeout associated or empty
                         *          {@link Mono} if the key does not exist.
                         * @see <a href="https://redis.io/commands/pttl">Redis Documentation: PTTL</a>
                         */
                        // @ts-ignore
                        getExpire(key: K): object
                        /**
                         * Executes the given {@link RedisScript}.
                         * @param script must not be {#literal null}.
                         * @return result value of the script {#link Flux#empty()} if {@link RedisScript#getResultType()} is {@literal null},
                         *          likely indicating a throw-away status reply (i.e. "OK").
                         */
                        // @ts-ignore
                        execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>): object
                        /**
                         * Executes the given {@link RedisScript}.
                         * @param script must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return result value of the script {#link Flux#empty()} if {@link RedisScript#getResultType()} is {@literal null},
                         *          likely indicating a throw-away status reply (i.e. "OK").
                         */
                        // @ts-ignore
                        execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>): object
                        /**
                         * Executes the given {@link RedisScript}
                         * @param script The script to execute. Must not be {#literal null}.
                         * @param keys keys that need to be passed to the script. Must not be {#literal null}.
                         * @param args args that need to be passed to the script. Must not be {#literal null}.
                         * @return result value of the script {#link Flux#empty()} if {@link RedisScript#getResultType()} is {@literal null},
                         *          likely indicating a throw-away status reply (i.e. "OK").
                         */
                        // @ts-ignore
                        execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, args: java.util.List<any> | Array<any>): object
                        /**
                         * Executes the given {@link RedisScript}, using the provided {@link RedisSerializer}s to serialize the script
                         * arguments and result.
                         * @param script The script to execute
                         * @param argsWriter The {#link RedisElementWriter} to use for serializing args
                         * @param resultReader The {#link RedisElementReader} to use for serializing the script return value
                         * @param keys keys that need to be passed to the script.
                         * @param args args that need to be passed to the script.
                         * @return result value of the script {#link Flux#empty()} if {@link RedisScript#getResultType()} is {@literal null},
                         *          likely indicating a throw-away status reply (i.e. "OK").
                         */
                        // @ts-ignore
                        execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, args: java.util.List<any> | Array<any>, argsWriter: org.springframework.data.redis.serializer.RedisElementWriter<any>, resultReader: org.springframework.data.redis.serializer.RedisElementReader<T>): object
                        /**
                         * Returns geospatial specific operations interface.
                         * @return geospatial specific operations.
                         */
                        // @ts-ignore
                        opsForGeo(): org.springframework.data.redis.core.ReactiveGeoOperations<K, V>
                        /**
                         * Returns geospatial specific operations interface.
                         * @param serializationContext serializers to be used with the returned operations, must not be {#literal null}.
                         * @return geospatial specific operations.
                         */
                        // @ts-ignore
                        opsForGeo<K, V>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K, V>): org.springframework.data.redis.core.ReactiveGeoOperations<K, V>
                        /**
                         * Returns the operations performed on hash values.
                         * @param <HK> hash key (or field) type.
                         * @param <HV> hash value type.
                         * @return hash operations.
                         */
                        // @ts-ignore
                        opsForHash<HK, HV>(): org.springframework.data.redis.core.ReactiveHashOperations<K, HK, HV>
                        /**
                         * Returns the operations performed on hash values given a {@link RedisSerializationContext}.
                         * @param serializationContext serializers to be used with the returned operations, must not be {#literal null}.
                         * @param <HK> hash key (or field) type.
                         * @param <HV> hash value type.
                         * @return hash operations.
                         */
                        // @ts-ignore
                        opsForHash<K, HK, HV>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K, any>): org.springframework.data.redis.core.ReactiveHashOperations<K, HK, HV>
                        /**
                         * Returns the operations performed on multisets using HyperLogLog.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        opsForHyperLogLog(): org.springframework.data.redis.core.ReactiveHyperLogLogOperations<K, V>
                        /**
                         * Returns the operations performed on multisets using HyperLogLog given a {@link RedisSerializationContext}.
                         * @param serializationContext serializers to be used with the returned operations, must not be {#literal null}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        opsForHyperLogLog<K, V>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K, V>): org.springframework.data.redis.core.ReactiveHyperLogLogOperations<K, V>
                        /**
                         * Returns the operations performed on list values.
                         * @return list operations.
                         */
                        // @ts-ignore
                        opsForList(): org.springframework.data.redis.core.ReactiveListOperations<K, V>
                        /**
                         * Returns the operations performed on list values given a {@link RedisSerializationContext}.
                         * @param serializationContext serializers to be used with the returned operations, must not be {#literal null}.
                         * @return list operations.
                         */
                        // @ts-ignore
                        opsForList<K, V>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K, V>): org.springframework.data.redis.core.ReactiveListOperations<K, V>
                        /**
                         * Returns the operations performed on set values.
                         * @return set operations.
                         */
                        // @ts-ignore
                        opsForSet(): org.springframework.data.redis.core.ReactiveSetOperations<K, V>
                        /**
                         * Returns the operations performed on set values given a {@link RedisSerializationContext}.
                         * @param serializationContext serializers to be used with the returned operations, must not be {#literal null}.
                         * @return set operations.
                         */
                        // @ts-ignore
                        opsForSet<K, V>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K, V>): org.springframework.data.redis.core.ReactiveSetOperations<K, V>
                        /**
                         * Returns the operations performed on simple values (or Strings in Redis terminology).
                         * @return value operations
                         */
                        // @ts-ignore
                        opsForValue(): org.springframework.data.redis.core.ReactiveValueOperations<K, V>
                        /**
                         * Returns the operations performed on simple values (or Strings in Redis terminology) given a
                         * {@link RedisSerializationContext}.
                         * @param serializationContext serializers to be used with the returned operations, must not be {#literal null}.
                         * @return value operations.
                         */
                        // @ts-ignore
                        opsForValue<K, V>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K, V>): org.springframework.data.redis.core.ReactiveValueOperations<K, V>
                        /**
                         * Returns the operations performed on zset values (also known as sorted sets).
                         * @return zset operations.
                         */
                        // @ts-ignore
                        opsForZSet(): org.springframework.data.redis.core.ReactiveZSetOperations<K, V>
                        /**
                         * Returns the operations performed on zset values (also known as sorted sets) given a
                         * {@link RedisSerializationContext}.
                         * @param serializationContext serializers to be used with the returned operations, must not be {#literal null}.
                         * @return zset operations.
                         */
                        // @ts-ignore
                        opsForZSet<K, V>(serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K, V>): org.springframework.data.redis.core.ReactiveZSetOperations<K, V>
                        /**
                         * @return the {#link RedisSerializationContext}.
                         */
                        // @ts-ignore
                        getSerializationContext(): org.springframework.data.redis.serializer.RedisSerializationContext<K, V>
                    }
                }
            }
        }
    }
}
