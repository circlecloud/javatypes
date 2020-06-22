declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * Default implementation for {@link RedisZSet}. Note that the collection support works only with normal,
                         * non-pipeline/multi-exec connections as it requires a reply to be sent right away.
                         * @author Costin Leau
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class DefaultRedisZSet<E> extends org.springframework.data.redis.support.collections.AbstractRedisCollection<E> implements org.springframework.data.redis.support.collections.RedisZSet<E> {
                            /**
                             * Constructs a new {@link DefaultRedisZSet} instance with a default score of {@literal 1}.
                             * @param key Redis key of this set.
                             * @param operations {#link RedisOperations} for the value type of this set.
                             */
                            // @ts-ignore
                            constructor(key: java.lang.String | string, operations: org.springframework.data.redis.core.RedisOperations<java.lang.String | string, E>)
                            /**
                             * Constructs a new {@link DefaultRedisZSet} instance.
                             * @param key Redis key of this set.
                             * @param operations {#link RedisOperations} for the value type of this set.
                             * @param defaultScore
                             */
                            // @ts-ignore
                            constructor(key: java.lang.String | string, operations: org.springframework.data.redis.core.RedisOperations<java.lang.String | string, E>, defaultScore: number /*double*/)
                            /**
                             * Constructs a new {@link DefaultRedisZSet} instance with a default score of '1'.
                             * @param boundOps {#link BoundZSetOperations} for the value type of this set.
                             */
                            // @ts-ignore
                            constructor(boundOps: org.springframework.data.redis.core.BoundZSetOperations<java.lang.String | string, E>)
                            /**
                             * Constructs a new {@link DefaultRedisZSet} instance.
                             * @param boundOps {#link BoundZSetOperations} for the value type of this set.
                             * @param defaultScore
                             */
                            // @ts-ignore
                            constructor(boundOps: org.springframework.data.redis.core.BoundZSetOperations<java.lang.String | string, E>, defaultScore: number /*double*/)
                            // @ts-ignore
                            public intersectAndStore(set: org.springframework.data.redis.support.collections.RedisZSet<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisZSet<E>
                            // @ts-ignore
                            public intersectAndStore(sets: java.util.Collection<any> | Array<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisZSet<E>
                            // @ts-ignore
                            public range(start: number /*long*/, end: number /*long*/): Array<E>
                            // @ts-ignore
                            public reverseRange(start: number /*long*/, end: number /*long*/): Array<E>
                            // @ts-ignore
                            public rangeByLex(range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<E>
                            // @ts-ignore
                            public rangeByLex(range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<E>
                            // @ts-ignore
                            public rangeByScore(min: number /*double*/, max: number /*double*/): Array<E>
                            // @ts-ignore
                            public reverseRangeByScore(min: number /*double*/, max: number /*double*/): Array<E>
                            // @ts-ignore
                            public rangeByScoreWithScores(min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<E>>
                            // @ts-ignore
                            public rangeWithScores(start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<E>>
                            // @ts-ignore
                            public reverseRangeByScoreWithScores(min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<E>>
                            // @ts-ignore
                            public reverseRangeWithScores(start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<E>>
                            // @ts-ignore
                            public remove(start: number /*long*/, end: number /*long*/): org.springframework.data.redis.support.collections.RedisZSet<E>
                            // @ts-ignore
                            public removeByScore(min: number /*double*/, max: number /*double*/): org.springframework.data.redis.support.collections.RedisZSet<E>
                            // @ts-ignore
                            public unionAndStore(set: org.springframework.data.redis.support.collections.RedisZSet<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisZSet<E>
                            // @ts-ignore
                            public unionAndStore(sets: java.util.Collection<any> | Array<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisZSet<E>
                            // @ts-ignore
                            public add(e: E): boolean
                            // @ts-ignore
                            public add(e: E, score: number /*double*/): boolean
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
                            public getDefaultScore(): number
                            // @ts-ignore
                            public first(): E
                            // @ts-ignore
                            public last(): E
                            // @ts-ignore
                            public rank(o: java.lang.Object | any): number
                            // @ts-ignore
                            public reverseRank(o: java.lang.Object | any): number
                            // @ts-ignore
                            public score(o: java.lang.Object | any): number
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
                            public scan(options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<org.springframework.data.redis.core.ZSetOperations.TypedTuple<E>>
                        }
                    }
                }
            }
        }
    }
}
