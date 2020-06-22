declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * Base implementation for {@link RedisCollection}. Provides a skeletal implementation. Note that the collection support
                         * works only with normal, non-pipeline/multi-exec connections as it requires a reply to be sent right away.
                         * @author Costin Leau
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        abstract class AbstractRedisCollection<E> extends java.util.AbstractCollection<E> implements org.springframework.data.redis.support.collections.RedisCollection<E> {
                            /**
                             * Constructs a new {@link AbstractRedisCollection} instance.
                             * @param key Redis key of this collection.
                             * @param operations {#link RedisOperations} for the value type of this collection.
                             */
                            // @ts-ignore
                            constructor(key: java.lang.String | string, operations: org.springframework.data.redis.core.RedisOperations<java.lang.String | string, E>)
                            // @ts-ignore
                            public static readonly ENCODING: java.lang.String | string
                            // @ts-ignore
                            public getKey(): string
                            // @ts-ignore
                            public getOperations(): org.springframework.data.redis.core.RedisOperations<java.lang.String | string, E>
                            // @ts-ignore
                            public addAll(c: java.util.Collection<any> | Array<any>): boolean
                            // @ts-ignore
                            public containsAll(c: java.util.Collection<any> | Array<any>): boolean
                            // @ts-ignore
                            public removeAll(c: java.util.Collection<any> | Array<any>): boolean
                            // @ts-ignore
                            public expire(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Boolean
                            // @ts-ignore
                            public expireAt(date: java.util.Date): java.lang.Boolean
                            // @ts-ignore
                            public getExpire(): number
                            // @ts-ignore
                            public persist(): java.lang.Boolean
                            // @ts-ignore
                            public rename(newKey: java.lang.String | string): void
                            // @ts-ignore
                            checkResult(obj: java.lang.Object | any): void
                            // @ts-ignore
                            public equals(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
