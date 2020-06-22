declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis specific {@link KeyValueAdapter} implementation. Uses binary codec to read/write data from/to Redis. Objects
                     * are stored in a Redis Hash using the value of {@link RedisHash}, the {@link KeyspaceConfiguration} or just
                     * {@link Class#getName()} as a prefix. <br />
                     * <strong>Example</strong>
                     * <pre>
                     * <code>
                     * &#64;RedisHash("persons")
                     * class Person {
                     * &#64;Id String id;
                     * String name;
                     * }
                     * prefix              ID
                     * |                 |
                     * V                 V
                     * hgetall persons:5d67b7e1-8640-4475-beeb-c666fab4c0e5
                     * 1) id
                     * 2) 5d67b7e1-8640-4475-beeb-c666fab4c0e5
                     * 3) name
                     * 4) Rand al'Thor
                     * </code>
                     * </pre>
                     * <br />
                     * The {@link KeyValueAdapter} is <strong>not</strong> intended to store simple types such as {@link String} values.
                     * Please use {@link RedisTemplate} for this purpose.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class RedisKeyValueAdapter extends AbstractKeyValueAdapter {
                        /**
                         * Creates new {@link RedisKeyValueAdapter} with default {@link RedisMappingContext} and default
                         * {@link RedisCustomConversions}.
                         * @param redisOps must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(redisOps: org.springframework.data.redis.core.RedisOperations<any, any>)
                        /**
                         * Creates new {@link RedisKeyValueAdapter} with default {@link RedisCustomConversions}.
                         * @param redisOps must not be {#literal null}.
                         * @param mappingContext must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(redisOps: org.springframework.data.redis.core.RedisOperations<any, any>, mappingContext: org.springframework.data.redis.core.mapping.RedisMappingContext)
                        /**
                         * Creates new {@link RedisKeyValueAdapter}.
                         * @param redisOps must not be {#literal null}.
                         * @param mappingContext must not be {#literal null}.
                         * @param customConversions can be {#literal null}.
                         * @deprecated since 2.0, use
                         *              {#link #RedisKeyValueAdapter(RedisOperations, RedisMappingContext, org.springframework.data.convert.CustomConversions)}.
                         */
                        // @ts-ignore
                        constructor(redisOps: org.springframework.data.redis.core.RedisOperations<any, any>, mappingContext: org.springframework.data.redis.core.mapping.RedisMappingContext, customConversions: org.springframework.data.redis.core.convert.CustomConversions)
                        /**
                         * Creates new {@link RedisKeyValueAdapter}.
                         * @param redisOps must not be {#literal null}.
                         * @param mappingContext must not be {#literal null}.
                         * @param customConversions can be {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        constructor(redisOps: org.springframework.data.redis.core.RedisOperations<any, any>, mappingContext: org.springframework.data.redis.core.mapping.RedisMappingContext, customConversions: org.springframework.data.convert.CustomConversions)
                        /**
                         * Creates new {@link RedisKeyValueAdapter} with specific {@link RedisConverter}.
                         * @param redisOps must not be {#literal null}.
                         * @param redisConverter must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(redisOps: org.springframework.data.redis.core.RedisOperations<any, any>, redisConverter: org.springframework.data.redis.core.convert.RedisConverter)
                        /**
                         * Default constructor.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public put(id: java.lang.Object | any, item: java.lang.Object | any, keyspace: java.lang.String | string): any
                        // @ts-ignore
                        public contains(id: java.lang.Object | any, keyspace: java.lang.String | string): boolean
                        // @ts-ignore
                        public get(id: java.lang.Object | any, keyspace: java.lang.String | string): any
                        // @ts-ignore
                        public get<T>(id: java.lang.Object | any, keyspace: java.lang.String | string, type: java.lang.Class<T>): T
                        // @ts-ignore
                        public delete(id: java.lang.Object | any, keyspace: java.lang.String | string): any
                        // @ts-ignore
                        public delete<T>(id: java.lang.Object | any, keyspace: java.lang.String | string, type: java.lang.Class<T>): T
                        // @ts-ignore
                        public getAllOf(keyspace: java.lang.String | string): Array<any>
                        // @ts-ignore
                        public getAllOf(keyspace: java.lang.String | string, offset: number /*long*/, rows: number /*int*/): Array<any>
                        // @ts-ignore
                        public deleteAllOf(keyspace: java.lang.String | string): void
                        // @ts-ignore
                        public entries(keyspace: java.lang.String | string): object
                        // @ts-ignore
                        public count(keyspace: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        public update(update: org.springframework.data.redis.core.PartialUpdate<any>): void
                        /**
                         * Execute {@link RedisCallback} via underlying {@link RedisOperations}.
                         * @param callback must not be {#literal null}.
                         * @see RedisOperations#execute(RedisCallback)
                         * @return 
                         */
                        // @ts-ignore
                        public execute<T>(callback: org.springframework.data.redis.core.RedisCallback<T>): T
                        /**
                         * Get the {@link RedisConverter} in use.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getConverter(): org.springframework.data.redis.core.convert.RedisConverter
                        // @ts-ignore
                        public clear(): void
                        // @ts-ignore
                        public createKey(keyspace: java.lang.String | string, id: java.lang.String | string): number /*byte*/[]
                        /**
                         * Convert given source to binary representation using the underlying {@link ConversionService}.
                         * @param source
                         * @return 
                         * @throws ConverterNotFoundException
                         */
                        // @ts-ignore
                        public toBytes(source: java.lang.Object | any): number /*byte*/[]
                        /**
                         * Configure usage of {@link KeyExpirationEventMessageListener}.
                         * @param enableKeyspaceEvents
                         * @since 1.8
                         */
                        // @ts-ignore
                        public setEnableKeyspaceEvents(enableKeyspaceEvents: org.springframework.data.redis.core.RedisKeyValueAdapter.EnableKeyspaceEvents): void
                        /**
                         * Configure the {@literal notify-keyspace-events} property if not already set. Use an empty {@link String} or
                         * {@literal null} to retain existing server settings.
                         * @param keyspaceNotificationsConfigParameter can be {#literal null}.
                         * @since 1.8
                         */
                        // @ts-ignore
                        public setKeyspaceNotificationsConfigParameter(keyspaceNotificationsConfigParameter: java.lang.String | string): void
                        /**
                         * @see org.springframework.beans.factory.InitializingBean#afterPropertiesSet()
                         * @since 1.8
                         */
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public destroy(): void
                        // @ts-ignore
                        public onApplicationEvent(event: org.springframework.data.redis.core.RedisKeyspaceEvent): void
                        // @ts-ignore
                        public setApplicationContext(applicationContext: ApplicationContext): void
                    }
                }
            }
        }
    }
}
