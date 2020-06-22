declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * Default implementation for {@link RedisSet}. Note that the collection support works only with normal,
                         * non-pipeline/multi-exec connections as it requires a reply to be sent right away.
                         * @author Costin Leau
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class DefaultRedisSet<E> extends org.springframework.data.redis.support.collections.AbstractRedisCollection<E> implements org.springframework.data.redis.support.collections.RedisSet<E> {
                            /**
                             * Constructs a new {@link DefaultRedisSet} instance.
                             * @param key Redis key of this set.
                             * @param operations {#link RedisOperations} for the value type of this set.
                             */
                            // @ts-ignore
                            constructor(key: java.lang.String | string, operations: org.springframework.data.redis.core.RedisOperations<java.lang.String | string, E>)
                            /**
                             * Constructs a new {@link DefaultRedisSet} instance.
                             * @param boundOps {#link BoundSetOperations} for the value type of this set.
                             */
                            // @ts-ignore
                            constructor(boundOps: org.springframework.data.redis.core.BoundSetOperations<java.lang.String | string, E>)
                            // @ts-ignore
                            public diff(set: org.springframework.data.redis.support.collections.RedisSet<any>): Array<E>
                            // @ts-ignore
                            public diff(sets: java.util.Collection<any> | Array<any>): Array<E>
                            // @ts-ignore
                            public diffAndStore(set: org.springframework.data.redis.support.collections.RedisSet<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            // @ts-ignore
                            public diffAndStore(sets: java.util.Collection<any> | Array<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            // @ts-ignore
                            public intersect(set: org.springframework.data.redis.support.collections.RedisSet<any>): Array<E>
                            // @ts-ignore
                            public intersect(sets: java.util.Collection<any> | Array<any>): Array<E>
                            // @ts-ignore
                            public intersectAndStore(set: org.springframework.data.redis.support.collections.RedisSet<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            // @ts-ignore
                            public intersectAndStore(sets: java.util.Collection<any> | Array<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            // @ts-ignore
                            public union(set: org.springframework.data.redis.support.collections.RedisSet<any>): Array<E>
                            // @ts-ignore
                            public union(sets: java.util.Collection<any> | Array<any>): Array<E>
                            // @ts-ignore
                            public unionAndStore(set: org.springframework.data.redis.support.collections.RedisSet<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            // @ts-ignore
                            public unionAndStore(sets: java.util.Collection<any> | Array<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            // @ts-ignore
                            public add(e: E): boolean
                            // @ts-ignore
                            public clear(): void
                            // @ts-ignore
                            public contains(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public iterator(): java.util.Iterator<E>
                            // @ts-ignore
                            public remove(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public size(): number /*int*/
                            // @ts-ignore
                            public getType(): org.springframework.data.redis.connection.DataType
                            // @ts-ignore
                            public scan(): org.springframework.data.redis.core.Cursor<E>
                            /**
                             * @since 1.4
                             * @param options
                             * @return 
                             */
                            // @ts-ignore
                            public scan(options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<E>
                        }
                    }
                }
            }
        }
    }
}
