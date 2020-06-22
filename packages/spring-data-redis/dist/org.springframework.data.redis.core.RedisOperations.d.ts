declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Interface that specified a basic set of Redis operations, implemented by {@link RedisTemplate}. Not often used but a
                     * useful option for extensibility and testability (as it can be easily mocked or stubbed).
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Ninad Divadkar
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisOperations<K, V> {
                        /**
                         * Executes the given action within a Redis connection. Application exceptions thrown by the action object get
                         * propagated to the caller (can only be unchecked) whenever possible. Redis exceptions are transformed into
                         * appropriate DAO ones. Allows for returning a result object, that is a domain object or a collection of domain
                         * objects. Performs automatic serialization/deserialization for the given objects to and from binary data suitable
                         * for the Redis storage. Note: Callback code is not supposed to handle transactions itself! Use an appropriate
                         * transaction manager. Generally, callback code must not touch any Connection lifecycle methods, like close, to let
                         * the template do its work.
                         * @param <T> return type
                         * @param action callback object that specifies the Redis action. Must not be {#literal null}.
                         * @return a result object returned by the action or <tt>null</tt>
                         */
                        // @ts-ignore
                        execute<T>(action: org.springframework.data.redis.core.RedisCallback<T>): T
                        /**
                         * Executes a Redis session. Allows multiple operations to be executed in the same session enabling 'transactional'
                         * capabilities through {@link #multi()} and {@link #watch(Collection)} operations.
                         * @param <T> return type
                         * @param session session callback. Must not be {#literal null}.
                         * @return result object returned by the action or <tt>null</tt>
                         */
                        // @ts-ignore
                        execute<T>(session: org.springframework.data.redis.core.SessionCallback<T>): T
                        /**
                         * Executes the given action object on a pipelined connection, returning the results. Note that the callback
                         * <b>cannot</b> return a non-null value as it gets overwritten by the pipeline. This method will use the default
                         * serializers to deserialize results
                         * @param action callback object to execute
                         * @return list of objects returned by the pipeline
                         */
                        // @ts-ignore
                        executePipelined(action: org.springframework.data.redis.core.RedisCallback<any>): Array<java.lang.Object | any>
                        /**
                         * Executes the given action object on a pipelined connection, returning the results using a dedicated serializer.
                         * Note that the callback <b>cannot</b> return a non-null value as it gets overwritten by the pipeline.
                         * @param action callback object to execute
                         * @param resultSerializer The Serializer to use for individual values or Collections of values. If any returned
                         *           values are hashes, this serializer will be used to deserialize both the key and value
                         * @return list of objects returned by the pipeline
                         */
                        // @ts-ignore
                        executePipelined(action: org.springframework.data.redis.core.RedisCallback<any>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>): Array<java.lang.Object | any>
                        /**
                         * Executes the given Redis session on a pipelined connection. Allows transactions to be pipelined. Note that the
                         * callback <b>cannot</b> return a non-null value as it gets overwritten by the pipeline.
                         * @param session Session callback
                         * @return list of objects returned by the pipeline
                         */
                        // @ts-ignore
                        executePipelined(session: org.springframework.data.redis.core.SessionCallback<any>): Array<java.lang.Object | any>
                        /**
                         * Executes the given Redis session on a pipelined connection, returning the results using a dedicated serializer.
                         * Allows transactions to be pipelined. Note that the callback <b>cannot</b> return a non-null value as it gets
                         * overwritten by the pipeline.
                         * @param session Session callback
                         * @param resultSerializer
                         * @return list of objects returned by the pipeline
                         */
                        // @ts-ignore
                        executePipelined(session: org.springframework.data.redis.core.SessionCallback<any>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>): Array<java.lang.Object | any>
                        /**
                         * Executes the given {@link RedisScript}
                         * @param script The script to execute
                         * @param keys Any keys that need to be passed to the script
                         * @param args Any args that need to be passed to the script
                         * @return The return value of the script or null if {#link RedisScript#getResultType()} is null, likely indicating a
                         *          throw-away status reply (i.e. "OK")
                         */
                        // @ts-ignore
                        execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, ...args: java.lang.Object[] | any[]): T
                        /**
                         * Executes the given {@link RedisScript}, using the provided {@link RedisSerializer}s to serialize the script
                         * arguments and result.
                         * @param script The script to execute
                         * @param argsSerializer The {#link RedisSerializer} to use for serializing args
                         * @param resultSerializer The {#link RedisSerializer} to use for serializing the script return value
                         * @param keys Any keys that need to be passed to the script
                         * @param args Any args that need to be passed to the script
                         * @return The return value of the script or null if {#link RedisScript#getResultType()} is null, likely indicating a
                         *          throw-away status reply (i.e. "OK")
                         */
                        // @ts-ignore
                        execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, argsSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>, keys: java.util.List<K> | Array<K>, ...args: java.lang.Object[] | any[]): T
                        /**
                         * Allocates and binds a new {@link RedisConnection} to the actual return type of the method. It is up to the caller
                         * to free resources after use.
                         * @param callback must not be {#literal null}.
                         * @return 
                         * @since 1.8
                         */
                        // @ts-ignore
                        executeWithStickyConnection<T extends java.io.Closeable>(callback: org.springframework.data.redis.core.RedisCallback<T>): T
                        /**
                         * Determine if given {@code key} exists.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/exists">Redis Documentation: EXISTS</a>
                         */
                        // @ts-ignore
                        hasKey(key: K): java.lang.Boolean
                        /**
                         * Count the number of {@code keys} that exist.
                         * @param keys must not be {#literal null}.
                         * @return The number of keys existing among the ones specified as arguments. Keys mentioned multiple times and
                         *          existing are counted multiple times.
                         * @see <a href="https://redis.io/commands/exists">Redis Documentation: EXISTS</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        countExistingKeys(keys: java.util.Collection<K> | Array<K>): number
                        /**
                         * Delete given {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal true} if the key was removed.
                         * @see <a href="https://redis.io/commands/del">Redis Documentation: DEL</a>
                         */
                        // @ts-ignore
                        delete(key: K): java.lang.Boolean
                        /**
                         * Delete given {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return The number of keys that were removed. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/del">Redis Documentation: DEL</a>
                         */
                        // @ts-ignore
                        delete(keys: java.util.Collection<K> | Array<K>): number
                        /**
                         * Unlink the {@code key} from the keyspace. Unlike with {@link #delete(Object)} the actual memory reclaiming here
                         * happens asynchronously.
                         * @param key must not be {#literal null}.
                         * @return The number of keys that were removed. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/unlink">Redis Documentation: UNLINK</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        unlink(key: K): java.lang.Boolean
                        /**
                         * Unlink the {@code keys} from the keyspace. Unlike with {@link #delete(Collection)} the actual memory reclaiming
                         * here happens asynchronously.
                         * @param keys must not be {#literal null}.
                         * @return The number of keys that were removed. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/unlink">Redis Documentation: UNLINK</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        unlink(keys: java.util.Collection<K> | Array<K>): number
                        /**
                         * Determine the type stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/type">Redis Documentation: TYPE</a>
                         */
                        // @ts-ignore
                        type(key: K): org.springframework.data.redis.connection.DataType
                        /**
                         * Find all keys matching the given {@code pattern}.
                         * @param pattern must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/keys">Redis Documentation: KEYS</a>
                         */
                        // @ts-ignore
                        keys(pattern: K): Array<K>
                        /**
                         * Return a random key from the keyspace.
                         * @return {#literal null} no keys exist or when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/randomkey">Redis Documentation: RANDOMKEY</a>
                         */
                        // @ts-ignore
                        randomKey(): K
                        /**
                         * Rename key {@code oldKey} to {@code newKey}.
                         * @param oldKey must not be {#literal null}.
                         * @param newKey must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/rename">Redis Documentation: RENAME</a>
                         */
                        // @ts-ignore
                        rename(oldKey: K, newKey: K): void
                        /**
                         * Rename key {@code oleName} to {@code newKey} only if {@code newKey} does not exist.
                         * @param oldKey must not be {#literal null}.
                         * @param newKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/renamenx">Redis Documentation: RENAMENX</a>
                         */
                        // @ts-ignore
                        renameIfAbsent(oldKey: K, newKey: K): java.lang.Boolean
                        /**
                         * Set time to live for given {@code key}..
                         * @param key must not be {#literal null}.
                         * @param timeout
                         * @param unit must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        expire(key: K, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Boolean
                        /**
                         * Set the expiration for given {@code key} as a {@literal date} timestamp.
                         * @param key must not be {#literal null}.
                         * @param date must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        expireAt(key: K, date: java.util.Date): java.lang.Boolean
                        /**
                         * Remove the expiration from given {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/persist">Redis Documentation: PERSIST</a>
                         */
                        // @ts-ignore
                        persist(key: K): java.lang.Boolean
                        /**
                         * Move given {@code key} to database with {@code index}.
                         * @param key must not be {#literal null}.
                         * @param dbIndex
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/move">Redis Documentation: MOVE</a>
                         */
                        // @ts-ignore
                        move(key: K, dbIndex: number /*int*/): java.lang.Boolean
                        /**
                         * Retrieve serialized version of the value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/dump">Redis Documentation: DUMP</a>
                         */
                        // @ts-ignore
                        dump(key: K): number /*byte*/[]
                        /**
                         * Create {@code key} using the {@code serializedValue}, previously obtained using {@link #dump(Object)}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param timeToLive
                         * @param unit must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/restore">Redis Documentation: RESTORE</a>
                         */
                        // @ts-ignore
                        restore(key: K, value: number /*byte*/[], timeToLive: number /*long*/, unit: java.util.concurrent.TimeUnit): void
                        /**
                         * Create {@code key} using the {@code serializedValue}, previously obtained using {@link #dump(Object)}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param timeToLive
                         * @param unit must not be {#literal null}.
                         * @param replace use {#literal true} to replace a potentially existing value instead of erroring.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/restore">Redis Documentation: RESTORE</a>
                         */
                        // @ts-ignore
                        restore(key: K, value: number /*byte*/[], timeToLive: number /*long*/, unit: java.util.concurrent.TimeUnit, replace: boolean): void
                        /**
                         * Get the time to live for {@code key} in seconds.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/ttl">Redis Documentation: TTL</a>
                         */
                        // @ts-ignore
                        getExpire(key: K): number
                        /**
                         * Get the time to live for {@code key} in and convert it to the given {@link TimeUnit}.
                         * @param key must not be {#literal null}.
                         * @param timeUnit must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.8
                         */
                        // @ts-ignore
                        getExpire(key: K, timeUnit: java.util.concurrent.TimeUnit): number
                        /**
                         * Sort the elements for {@code query}.
                         * @param query must not be {#literal null}.
                         * @return the results of sort. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sort">Redis Documentation: SORT</a>
                         */
                        // @ts-ignore
                        sort(query: org.springframework.data.redis.core.query.SortQuery<K>): Array<V>
                        /**
                         * Sort the elements for {@code query} applying {@link RedisSerializer}.
                         * @param query must not be {#literal null}.
                         * @return the deserialized results of sort. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sort">Redis Documentation: SORT</a>
                         */
                        // @ts-ignore
                        sort<T>(query: org.springframework.data.redis.core.query.SortQuery<K>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>): Array<T>
                        /**
                         * Sort the elements for {@code query} applying {@link BulkMapper}.
                         * @param query must not be {#literal null}.
                         * @return the deserialized results of sort. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sort">Redis Documentation: SORT</a>
                         */
                        // @ts-ignore
                        sort<T>(query: org.springframework.data.redis.core.query.SortQuery<K>, bulkMapper: org.springframework.data.redis.core.BulkMapper<T, V>): Array<T>
                        /**
                         * Sort the elements for {@code query} applying {@link BulkMapper} and {@link RedisSerializer}.
                         * @param query must not be {#literal null}.
                         * @return the deserialized results of sort. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sort">Redis Documentation: SORT</a>
                         */
                        // @ts-ignore
                        sort<T, S>(query: org.springframework.data.redis.core.query.SortQuery<K>, bulkMapper: org.springframework.data.redis.core.BulkMapper<T, S>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<S>): Array<T>
                        /**
                         * Sort the elements for {@code query} and store result in {@code storeKey}.
                         * @param query must not be {#literal null}.
                         * @param storeKey must not be {#literal null}.
                         * @return number of values. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sort">Redis Documentation: SORT</a>
                         */
                        // @ts-ignore
                        sort(query: org.springframework.data.redis.core.query.SortQuery<K>, storeKey: K): number
                        /**
                         * Watch given {@code key} for modifications during transaction started with {@link #multi()}.
                         * @param key must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/watch">Redis Documentation: WATCH</a>
                         */
                        // @ts-ignore
                        watch(key: K): void
                        /**
                         * Watch given {@code keys} for modifications during transaction started with {@link #multi()}.
                         * @param keys must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/watch">Redis Documentation: WATCH</a>
                         */
                        // @ts-ignore
                        watch(keys: java.util.Collection<K> | Array<K>): void
                        /**
                         * Flushes all the previously {@link #watch(Object)} keys.
                         * @see <a href="https://redis.io/commands/unwatch">Redis Documentation: UNWATCH</a>
                         */
                        // @ts-ignore
                        unwatch(): void
                        /**
                         * Mark the start of a transaction block. <br>
                         * Commands will be queued and can then be executed by calling {@link #exec()} or rolled back using {@link #discard()}
                         * <p>
                         * @see <a href="https://redis.io/commands/multi">Redis Documentation: MULTI</a>
                         */
                        // @ts-ignore
                        multi(): void
                        /**
                         * Discard all commands issued after {@link #multi()}.
                         * @see <a href="https://redis.io/commands/discard">Redis Documentation: DISCARD</a>
                         */
                        // @ts-ignore
                        discard(): void
                        /**
                         * Executes all queued commands in a transaction started with {@link #multi()}. <br>
                         * If used along with {@link #watch(Object)} the operation will fail if any of watched keys has been modified.
                         * @return List of replies for each executed command.
                         * @see <a href="https://redis.io/commands/exec">Redis Documentation: EXEC</a>
                         */
                        // @ts-ignore
                        exec(): Array<java.lang.Object | any>
                        /**
                         * Execute a transaction, using the provided {@link RedisSerializer} to deserialize any results that are byte[]s or
                         * Collections of byte[]s. If a result is a Map, the provided {@link RedisSerializer} will be used for both the keys
                         * and values. Other result types (Long, Boolean, etc) are left as-is in the converted results. Tuple results are
                         * automatically converted to TypedTuples.
                         * @param valueSerializer The {#link RedisSerializer} to use for deserializing the results of transaction exec
                         * @return The deserialized results of transaction exec
                         */
                        // @ts-ignore
                        exec(valueSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>): Array<java.lang.Object | any>
                        /**
                         * Request information and statistics about connected clients.
                         * @return {#link List} of {@link RedisClientInfo} objects.
                         * @since 1.3
                         */
                        // @ts-ignore
                        getClientList(): Array<org.springframework.data.redis.core.types.RedisClientInfo>
                        /**
                         * Closes a given client connection identified by {@literal ip:port} given in {@code client}.
                         * @param host of connection to close.
                         * @param port of connection to close
                         * @since 1.3
                         */
                        // @ts-ignore
                        killClient(host: java.lang.String | string, port: number /*int*/): void
                        /**
                         * Change redis replication setting to new master.
                         * @param host must not be {#literal null}.
                         * @param port
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/slaveof">Redis Documentation: SLAVEOF</a>
                         */
                        // @ts-ignore
                        slaveOf(host: java.lang.String | string, port: number /*int*/): void
                        /**
                         * Change server into master.
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/slaveof">Redis Documentation: SLAVEOF</a>
                         */
                        // @ts-ignore
                        slaveOfNoOne(): void
                        /**
                         * Publishes the given message to the given channel.
                         * @param destination the channel to publish to, must not be {#literal null}.
                         * @param message message to publish
                         * @return the number of clients that received the message
                         * @see <a href="https://redis.io/commands/publish">Redis Documentation: PUBLISH</a>
                         */
                        // @ts-ignore
                        convertAndSend(destination: java.lang.String | string, message: java.lang.Object | any): void
                        /**
                         * Returns the cluster specific operations interface.
                         * @return never {#literal null}.
                         * @since 1.7
                         */
                        // @ts-ignore
                        opsForCluster(): org.springframework.data.redis.core.ClusterOperations<K, V>
                        /**
                         * Returns geospatial specific operations interface.
                         * @return never {#literal null}.
                         * @since 1.8
                         */
                        // @ts-ignore
                        opsForGeo(): org.springframework.data.redis.core.GeoOperations<K, V>
                        /**
                         * Returns geospatial specific operations interface bound to the given key.
                         * @param key must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 1.8
                         */
                        // @ts-ignore
                        boundGeoOps(key: K): org.springframework.data.redis.core.BoundGeoOperations<K, V>
                        /**
                         * Returns the operations performed on hash values.
                         * @param <HK> hash key (or field) type
                         * @param <HV> hash value type
                         * @return hash operations
                         */
                        // @ts-ignore
                        opsForHash<HK, HV>(): org.springframework.data.redis.core.HashOperations<K, HK, HV>
                        /**
                         * Returns the operations performed on hash values bound to the given key.
                         * * @param <HK> hash key (or field) type
                         * @param <HV> hash value type
                         * @param key Redis key
                         * @return hash operations bound to the given key.
                         */
                        // @ts-ignore
                        boundHashOps<HK, HV>(key: K): org.springframework.data.redis.core.BoundHashOperations<K, HK, HV>
                        /**
                         * @return 
                         * @since 1.5
                         */
                        // @ts-ignore
                        opsForHyperLogLog(): org.springframework.data.redis.core.HyperLogLogOperations<K, V>
                        /**
                         * Returns the operations performed on list values.
                         * @return list operations
                         */
                        // @ts-ignore
                        opsForList(): org.springframework.data.redis.core.ListOperations<K, V>
                        /**
                         * Returns the operations performed on list values bound to the given key.
                         * @param key Redis key
                         * @return list operations bound to the given key
                         */
                        // @ts-ignore
                        boundListOps(key: K): org.springframework.data.redis.core.BoundListOperations<K, V>
                        /**
                         * Returns the operations performed on set values.
                         * @return set operations
                         */
                        // @ts-ignore
                        opsForSet(): org.springframework.data.redis.core.SetOperations<K, V>
                        /**
                         * Returns the operations performed on set values bound to the given key.
                         * @param key Redis key
                         * @return set operations bound to the given key
                         */
                        // @ts-ignore
                        boundSetOps(key: K): org.springframework.data.redis.core.BoundSetOperations<K, V>
                        /**
                         * Returns the operations performed on simple values (or Strings in Redis terminology).
                         * @return value operations
                         */
                        // @ts-ignore
                        opsForValue(): org.springframework.data.redis.core.ValueOperations<K, V>
                        /**
                         * Returns the operations performed on simple values (or Strings in Redis terminology) bound to the given key.
                         * @param key Redis key
                         * @return value operations bound to the given key
                         */
                        // @ts-ignore
                        boundValueOps(key: K): org.springframework.data.redis.core.BoundValueOperations<K, V>
                        /**
                         * Returns the operations performed on zset values (also known as sorted sets).
                         * @return zset operations
                         */
                        // @ts-ignore
                        opsForZSet(): org.springframework.data.redis.core.ZSetOperations<K, V>
                        /**
                         * Returns the operations performed on zset values (also known as sorted sets) bound to the given key.
                         * @param key Redis key
                         * @return zset operations bound to the given key.
                         */
                        // @ts-ignore
                        boundZSetOps(key: K): org.springframework.data.redis.core.BoundZSetOperations<K, V>
                        /**
                         * @return the key {#link RedisSerializer}.
                         */
                        // @ts-ignore
                        getKeySerializer(): org.springframework.data.redis.serializer.RedisSerializer<any>
                        /**
                         * @return the value {#link RedisSerializer}.
                         */
                        // @ts-ignore
                        getValueSerializer(): org.springframework.data.redis.serializer.RedisSerializer<any>
                        /**
                         * @return the hash key {#link RedisSerializer}.
                         */
                        // @ts-ignore
                        getHashKeySerializer(): org.springframework.data.redis.serializer.RedisSerializer<any>
                        /**
                         * @return the hash value {#link RedisSerializer}.
                         */
                        // @ts-ignore
                        getHashValueSerializer(): org.springframework.data.redis.serializer.RedisSerializer<any>
                    }
                }
            }
        }
    }
}
