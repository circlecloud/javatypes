declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Helper class that simplifies Redis data access code.
                     * <p/>
                     * Performs automatic serialization/deserialization between the given objects and the underlying binary data in the
                     * Redis store. By default, it uses Java serialization for its objects (through {@link JdkSerializationRedisSerializer}
                     * ). For String intensive operations consider the dedicated {@link StringRedisTemplate}.
                     * <p/>
                     * The central method is execute, supporting Redis access code implementing the {@link RedisCallback} interface. It
                     * provides {@link RedisConnection} handling such that neither the {@link RedisCallback} implementation nor the calling
                     * code needs to explicitly care about retrieving/closing Redis connections, or handling Connection lifecycle
                     * exceptions. For typical single step actions, there are various convenience methods.
                     * <p/>
                     * Once configured, this class is thread-safe.
                     * <p/>
                     * Note that while the template is generified, it is up to the serializers/deserializers to properly convert the given
                     * Objects to and from binary data.
                     * <p/>
                     * <b>This is the central class in Redis support</b>.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Ninad Divadkar
                     * @author Anqing Shao
                     * @author Mark Paluch
                     * @author Denis Zavedeev
                     * @param <K> the Redis key type against which the template works (usually a String)
                     * @param <V> the Redis value type against which the template works
                     * @see StringRedisTemplate
                     */
                    // @ts-ignore
                    class RedisTemplate<K, V> extends org.springframework.data.redis.core.RedisAccessor implements org.springframework.data.redis.core.RedisOperations<K, V> {
                        /**
                         * Constructs a new <code>RedisTemplate</code> instance.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public execute<T>(action: org.springframework.data.redis.core.RedisCallback<T>): T
                        /**
                         * Executes the given action object within a connection, which can be exposed or not.
                         * @param <T> return type
                         * @param action callback object that specifies the Redis action
                         * @param exposeConnection whether to enforce exposure of the native Redis Connection to callback code
                         * @return object returned by the action
                         */
                        // @ts-ignore
                        public execute<T>(action: org.springframework.data.redis.core.RedisCallback<T>, exposeConnection: boolean): T
                        /**
                         * Executes the given action object within a connection that can be exposed or not. Additionally, the connection can
                         * be pipelined. Note the results of the pipeline are discarded (making it suitable for write-only scenarios).
                         * @param <T> return type
                         * @param action callback object to execute
                         * @param exposeConnection whether to enforce exposure of the native Redis Connection to callback code
                         * @param pipeline whether to pipeline or not the connection for the execution
                         * @return object returned by the action
                         */
                        // @ts-ignore
                        public execute<T>(action: org.springframework.data.redis.core.RedisCallback<T>, exposeConnection: boolean, pipeline: boolean): T
                        // @ts-ignore
                        public execute<T>(session: org.springframework.data.redis.core.SessionCallback<T>): T
                        // @ts-ignore
                        public executePipelined(session: org.springframework.data.redis.core.SessionCallback<any>): Array<java.lang.Object | any>
                        // @ts-ignore
                        public executePipelined(session: org.springframework.data.redis.core.SessionCallback<any>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>): Array<java.lang.Object | any>
                        // @ts-ignore
                        public executePipelined(action: org.springframework.data.redis.core.RedisCallback<any>): Array<java.lang.Object | any>
                        // @ts-ignore
                        public executePipelined(action: org.springframework.data.redis.core.RedisCallback<any>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>): Array<java.lang.Object | any>
                        // @ts-ignore
                        public execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, ...args: java.lang.Object[] | any[]): T
                        // @ts-ignore
                        public execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, argsSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>, keys: java.util.List<K> | Array<K>, ...args: java.lang.Object[] | any[]): T
                        // @ts-ignore
                        public executeWithStickyConnection<T extends java.io.Closeable>(callback: org.springframework.data.redis.core.RedisCallback<T>): T
                        // @ts-ignore
                        createRedisConnectionProxy(pm: org.springframework.data.redis.connection.RedisConnection): org.springframework.data.redis.connection.RedisConnection
                        /**
                         * Processes the connection (before any settings are executed on it). Default implementation returns the connection as
                         * is.
                         * @param connection redis connection
                         */
                        // @ts-ignore
                        preProcessConnection(connection: org.springframework.data.redis.connection.RedisConnection, existingConnection: boolean): org.springframework.data.redis.connection.RedisConnection
                        // @ts-ignore
                        postProcessResult<T>(result: T, conn: org.springframework.data.redis.connection.RedisConnection, existingConnection: boolean): T
                        /**
                         * Returns whether to expose the native Redis connection to RedisCallback code, or rather a connection proxy (the
                         * default).
                         * @return whether to expose the native Redis connection or not
                         */
                        // @ts-ignore
                        public isExposeConnection(): boolean
                        /**
                         * Sets whether to expose the Redis connection to {@link RedisCallback} code. Default is "false": a proxy will be
                         * returned, suppressing <tt>quit</tt> and <tt>disconnect</tt> calls.
                         * @param exposeConnection
                         */
                        // @ts-ignore
                        public setExposeConnection(exposeConnection: boolean): void
                        /**
                         * @return Whether or not the default serializer should be used. If not, any serializers not explicitly set will
                         *          remain null and values will not be serialized or deserialized.
                         */
                        // @ts-ignore
                        public isEnableDefaultSerializer(): boolean
                        /**
                         * @param enableDefaultSerializer Whether or not the default serializer should be used. If not, any serializers not
                         *           explicitly set will remain null and values will not be serialized or deserialized.
                         */
                        // @ts-ignore
                        public setEnableDefaultSerializer(enableDefaultSerializer: boolean): void
                        /**
                         * Returns the default serializer used by this template.
                         * @return template default serializer
                         */
                        // @ts-ignore
                        public getDefaultSerializer(): org.springframework.data.redis.serializer.RedisSerializer<any>
                        /**
                         * Sets the default serializer to use for this template. All serializers (except the
                         * {@link #setStringSerializer(RedisSerializer)}) are initialized to this value unless explicitly set. Defaults to
                         * {@link JdkSerializationRedisSerializer}.
                         * @param serializer default serializer to use
                         */
                        // @ts-ignore
                        public setDefaultSerializer(serializer: org.springframework.data.redis.serializer.RedisSerializer<any>): void
                        /**
                         * Sets the key serializer to be used by this template. Defaults to {@link #getDefaultSerializer()}.
                         * @param serializer the key serializer to be used by this template.
                         */
                        // @ts-ignore
                        public setKeySerializer(serializer: org.springframework.data.redis.serializer.RedisSerializer<any>): void
                        /**
                         * Returns the key serializer used by this template.
                         * @return the key serializer used by this template.
                         */
                        // @ts-ignore
                        public getKeySerializer(): org.springframework.data.redis.serializer.RedisSerializer<any>
                        /**
                         * Sets the value serializer to be used by this template. Defaults to {@link #getDefaultSerializer()}.
                         * @param serializer the value serializer to be used by this template.
                         */
                        // @ts-ignore
                        public setValueSerializer(serializer: org.springframework.data.redis.serializer.RedisSerializer<any>): void
                        /**
                         * Returns the value serializer used by this template.
                         * @return the value serializer used by this template.
                         */
                        // @ts-ignore
                        public getValueSerializer(): org.springframework.data.redis.serializer.RedisSerializer<any>
                        /**
                         * Returns the hashKeySerializer.
                         * @return Returns the hashKeySerializer
                         */
                        // @ts-ignore
                        public getHashKeySerializer(): org.springframework.data.redis.serializer.RedisSerializer<any>
                        /**
                         * Sets the hash key (or field) serializer to be used by this template. Defaults to {@link #getDefaultSerializer()}.
                         * @param hashKeySerializer The hashKeySerializer to set.
                         */
                        // @ts-ignore
                        public setHashKeySerializer(hashKeySerializer: org.springframework.data.redis.serializer.RedisSerializer<any>): void
                        /**
                         * Returns the hashValueSerializer.
                         * @return Returns the hashValueSerializer
                         */
                        // @ts-ignore
                        public getHashValueSerializer(): org.springframework.data.redis.serializer.RedisSerializer<any>
                        /**
                         * Sets the hash value serializer to be used by this template. Defaults to {@link #getDefaultSerializer()}.
                         * @param hashValueSerializer The hashValueSerializer to set.
                         */
                        // @ts-ignore
                        public setHashValueSerializer(hashValueSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>): void
                        /**
                         * Returns the stringSerializer.
                         * @return Returns the stringSerializer
                         */
                        // @ts-ignore
                        public getStringSerializer(): org.springframework.data.redis.serializer.RedisSerializer<java.lang.String | string>
                        /**
                         * Sets the string value serializer to be used by this template (when the arguments or return types are always
                         * strings). Defaults to {@link StringRedisSerializer}.
                         * @see ValueOperations#get(Object, long, long)
                         * @param stringSerializer The stringValueSerializer to set.
                         */
                        // @ts-ignore
                        public setStringSerializer(stringSerializer: org.springframework.data.redis.serializer.RedisSerializer<java.lang.String | string>): void
                        /**
                         * @param scriptExecutor The {#link ScriptExecutor} to use for executing Redis scripts
                         */
                        // @ts-ignore
                        public setScriptExecutor(scriptExecutor: org.springframework.data.redis.core.script.ScriptExecutor<K>): void
                        /**
                         * Execute a transaction, using the default {@link RedisSerializer}s to deserialize any results that are byte[]s or
                         * Collections or Maps of byte[]s or Tuples. Other result types (Long, Boolean, etc) are left as-is in the converted
                         * results. If conversion of tx results has been disabled in the {@link RedisConnectionFactory}, the results of exec
                         * will be returned without deserialization. This check is mostly for backwards compatibility with 1.0.
                         * @return The (possibly deserialized) results of transaction exec
                         */
                        // @ts-ignore
                        public exec(): Array<java.lang.Object | any>
                        // @ts-ignore
                        public exec(valueSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>): Array<java.lang.Object | any>
                        // @ts-ignore
                        execRaw(): Array<java.lang.Object | any>
                        // @ts-ignore
                        public delete(key: K): java.lang.Boolean
                        // @ts-ignore
                        public delete(keys: java.util.Collection<K> | Array<K>): number
                        // @ts-ignore
                        public unlink(key: K): java.lang.Boolean
                        // @ts-ignore
                        public unlink(keys: java.util.Collection<K> | Array<K>): number
                        // @ts-ignore
                        public hasKey(key: K): java.lang.Boolean
                        // @ts-ignore
                        public countExistingKeys(keys: java.util.Collection<K> | Array<K>): number
                        // @ts-ignore
                        public expire(key: K, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Boolean
                        // @ts-ignore
                        public expireAt(key: K, date: java.util.Date): java.lang.Boolean
                        // @ts-ignore
                        public convertAndSend(channel: java.lang.String | string, message: java.lang.Object | any): void
                        // @ts-ignore
                        public getExpire(key: K): number
                        // @ts-ignore
                        public getExpire(key: K, timeUnit: java.util.concurrent.TimeUnit): number
                        // @ts-ignore
                        public keys(pattern: K): Array<K>
                        // @ts-ignore
                        public persist(key: K): java.lang.Boolean
                        // @ts-ignore
                        public move(key: K, dbIndex: number /*int*/): java.lang.Boolean
                        // @ts-ignore
                        public randomKey(): K
                        // @ts-ignore
                        public rename(oldKey: K, newKey: K): void
                        // @ts-ignore
                        public renameIfAbsent(oldKey: K, newKey: K): java.lang.Boolean
                        // @ts-ignore
                        public type(key: K): org.springframework.data.redis.connection.DataType
                        /**
                         * Executes the Redis dump command and returns the results. Redis uses a non-standard serialization mechanism and
                         * includes checksum information, thus the raw bytes are returned as opposed to deserializing with valueSerializer.
                         * Use the return value of dump as the value argument to restore
                         * @param key The key to dump
                         * @return results The results of the dump operation
                         */
                        // @ts-ignore
                        public dump(key: K): number /*byte*/[]
                        /**
                         * Executes the Redis restore command. The value passed in should be the exact serialized data returned from
                         * {@link #dump(Object)}, since Redis uses a non-standard serialization mechanism.
                         * @param key The key to restore
                         * @param value The value to restore, as returned by {#link #dump(Object)}
                         * @param timeToLive An expiration for the restored key, or 0 for no expiration
                         * @param unit The time unit for timeToLive
                         * @param replace use {#literal true} to replace a potentially existing value instead of erroring.
                         * @throws RedisSystemException if the key you are attempting to restore already exists and {#code replace} is set to
                         *            {@literal false}.
                         */
                        // @ts-ignore
                        public restore(key: K, value: number /*byte*/[], timeToLive: number /*long*/, unit: java.util.concurrent.TimeUnit, replace: boolean): void
                        // @ts-ignore
                        public multi(): void
                        // @ts-ignore
                        public discard(): void
                        // @ts-ignore
                        public watch(key: K): void
                        // @ts-ignore
                        public watch(keys: java.util.Collection<K> | Array<K>): void
                        // @ts-ignore
                        public unwatch(): void
                        // @ts-ignore
                        public sort(query: org.springframework.data.redis.core.query.SortQuery<K>): Array<V>
                        // @ts-ignore
                        public sort<T>(query: org.springframework.data.redis.core.query.SortQuery<K>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>): Array<T>
                        // @ts-ignore
                        public sort<T>(query: org.springframework.data.redis.core.query.SortQuery<K>, bulkMapper: org.springframework.data.redis.core.BulkMapper<T, V>): Array<T>
                        // @ts-ignore
                        public sort<T, S>(query: org.springframework.data.redis.core.query.SortQuery<K>, bulkMapper: org.springframework.data.redis.core.BulkMapper<T, S>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<S>): Array<T>
                        // @ts-ignore
                        public sort(query: org.springframework.data.redis.core.query.SortQuery<K>, storeKey: K): number
                        // @ts-ignore
                        public killClient(host: java.lang.String | string, port: number /*int*/): void
                        // @ts-ignore
                        public getClientList(): Array<org.springframework.data.redis.core.types.RedisClientInfo>
                        // @ts-ignore
                        public slaveOf(host: java.lang.String | string, port: number /*int*/): void
                        // @ts-ignore
                        public slaveOfNoOne(): void
                        // @ts-ignore
                        public opsForCluster(): org.springframework.data.redis.core.ClusterOperations<K, V>
                        // @ts-ignore
                        public opsForGeo(): org.springframework.data.redis.core.GeoOperations<K, V>
                        // @ts-ignore
                        public boundGeoOps(key: K): org.springframework.data.redis.core.BoundGeoOperations<K, V>
                        // @ts-ignore
                        public boundHashOps<HK, HV>(key: K): org.springframework.data.redis.core.BoundHashOperations<K, HK, HV>
                        // @ts-ignore
                        public opsForHash<HK, HV>(): org.springframework.data.redis.core.HashOperations<K, HK, HV>
                        // @ts-ignore
                        public opsForHyperLogLog(): org.springframework.data.redis.core.HyperLogLogOperations<K, V>
                        // @ts-ignore
                        public opsForList(): org.springframework.data.redis.core.ListOperations<K, V>
                        // @ts-ignore
                        public boundListOps(key: K): org.springframework.data.redis.core.BoundListOperations<K, V>
                        // @ts-ignore
                        public boundSetOps(key: K): org.springframework.data.redis.core.BoundSetOperations<K, V>
                        // @ts-ignore
                        public opsForSet(): org.springframework.data.redis.core.SetOperations<K, V>
                        // @ts-ignore
                        public boundValueOps(key: K): org.springframework.data.redis.core.BoundValueOperations<K, V>
                        // @ts-ignore
                        public opsForValue(): org.springframework.data.redis.core.ValueOperations<K, V>
                        // @ts-ignore
                        public boundZSetOps(key: K): org.springframework.data.redis.core.BoundZSetOperations<K, V>
                        // @ts-ignore
                        public opsForZSet(): org.springframework.data.redis.core.ZSetOperations<K, V>
                        /**
                         * If set to {@code true} {@link RedisTemplate} will use {@literal MULTI...EXEC|DISCARD} to keep track of operations.
                         * @param enableTransactionSupport
                         * @since 1.3
                         */
                        // @ts-ignore
                        public setEnableTransactionSupport(enableTransactionSupport: boolean): void
                        /**
                         * Set the {@link ClassLoader} to be used for the default {@link JdkSerializationRedisSerializer} in case no other
                         * {@link RedisSerializer} is explicitly set as the default one.
                         * @param classLoader can be {#literal null}.
                         * @see org.springframework.beans.factory.BeanClassLoaderAware#setBeanClassLoader
                         * @since 1.8
                         */
                        // @ts-ignore
                        public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    }
                }
            }
        }
    }
}
