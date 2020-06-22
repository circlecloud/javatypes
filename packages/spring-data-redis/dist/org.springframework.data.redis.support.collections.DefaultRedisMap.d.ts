declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * Default implementation for {@link RedisMap}. Note that the current implementation doesn't provide the same locking
                         * semantics across all methods. In highly concurrent environments, race conditions might appear.
                         * @author Costin Leau
                         * @author Christoph Strobl
                         * @author Christian Bühler
                         */
                        // @ts-ignore
                        class DefaultRedisMap<K, V> extends java.lang.Object implements org.springframework.data.redis.support.collections.RedisMap<K, V> {
                            /**
                             * Constructs a new {@link DefaultRedisMap} instance.
                             * @param key Redis key of this map.
                             * @param operations {#link RedisOperations} for this map.
                             * @see RedisOperations#getHashKeySerializer()
                             * @see RedisOperations#getValueSerializer()
                             */
                            // @ts-ignore
                            constructor(key: java.lang.String | string, operations: org.springframework.data.redis.core.RedisOperations<java.lang.String | string, any>)
                            /**
                             * Constructs a new {@link DefaultRedisMap} instance.
                             * @param boundOps {#link BoundHashOperations} for this map.
                             */
                            // @ts-ignore
                            constructor(boundOps: org.springframework.data.redis.core.BoundHashOperations<java.lang.String | string, K, V>)
                            // @ts-ignore
                            public increment(key: K, delta: number /*long*/): number
                            // @ts-ignore
                            public increment(key: K, delta: number /*double*/): number
                            // @ts-ignore
                            public getOperations(): org.springframework.data.redis.core.RedisOperations<java.lang.String | string, any>
                            // @ts-ignore
                            public clear(): void
                            // @ts-ignore
                            public containsKey(key: java.lang.Object | any): boolean
                            // @ts-ignore
                            public containsValue(value: java.lang.Object | any): boolean
                            // @ts-ignore
                            public entrySet(): Array<java.util.Map.Entry<K, V>>
                            // @ts-ignore
                            public get(key: java.lang.Object | any): V
                            // @ts-ignore
                            public isEmpty(): boolean
                            // @ts-ignore
                            public keySet(): Array<K>
                            // @ts-ignore
                            public put(key: K, value: V): V
                            // @ts-ignore
                            public putAll(m: java.util.Map<any, any>): void
                            // @ts-ignore
                            public remove(key: java.lang.Object | any): V
                            // @ts-ignore
                            public size(): number /*int*/
                            // @ts-ignore
                            public values(): Array<V>
                            // @ts-ignore
                            public equals(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public putIfAbsent(key: K, value: V): V
                            // @ts-ignore
                            public remove(key: java.lang.Object | any, value: java.lang.Object | any): boolean
                            // @ts-ignore
                            public replace(key: K, oldValue: V, newValue: V): boolean
                            // @ts-ignore
                            public replace(key: K, value: V): V
                            // @ts-ignore
                            public expire(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Boolean
                            // @ts-ignore
                            public expireAt(date: java.util.Date): java.lang.Boolean
                            // @ts-ignore
                            public getExpire(): number
                            // @ts-ignore
                            public persist(): java.lang.Boolean
                            // @ts-ignore
                            public getKey(): string
                            // @ts-ignore
                            public rename(newKey: java.lang.String | string): void
                            // @ts-ignore
                            public getType(): org.springframework.data.redis.connection.DataType
                            // @ts-ignore
                            public scan(): org.springframework.data.redis.core.Cursor<java.util.Map.Entry<K, V>>
                        }
                    }
                }
            }
        }
    }
}
