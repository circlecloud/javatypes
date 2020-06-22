declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis ZSet/sorted set specific operations.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @see <a href="https://redis.io/commands#zset">Redis Documentation: Sorted Set Commands</a>
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveZSetOperations<K, V> {
                        /**
                         * Add {@code value} to a sorted set at {@code key}, or update its {@code score} if it already exists.
                         * @param key must not be {#literal null}.
                         * @param score the score.
                         * @param value the value.
                         * @return 
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        add(key: K, value: V, score: number /*double*/): object
                        /**
                         * Add {@code tuples} to a sorted set at {@code key}, or update their score if it already exists.
                         * @param key must not be {#literal null}.
                         * @param tuples the score.
                         * @return 
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        addAll(key: K, tuples: java.util.Collection<any> | Array<any>): object
                        /**
                         * Remove {@code values} from sorted set. Return number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrem">Redis Documentation: ZREM</a>
                         */
                        // @ts-ignore
                        remove(key: K, ...values: java.lang.Object[] | any[]): object
                        /**
                         * Increment the score of element with {@code value} in sorted set by {@code increment}.
                         * @param key must not be {#literal null}.
                         * @param delta
                         * @param value the value.
                         * @return 
                         * @see <a href="https://redis.io/commands/zincrby">Redis Documentation: ZINCRBY</a>
                         */
                        // @ts-ignore
                        incrementScore(key: K, value: V, delta: number /*double*/): object
                        /**
                         * Determine the index of element with {@code value} in a sorted set.
                         * @param key must not be {#literal null}.
                         * @param o the value.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrank">Redis Documentation: ZRANK</a>
                         */
                        // @ts-ignore
                        rank(key: K, o: java.lang.Object | any): object
                        /**
                         * Determine the index of element with {@code value} in a sorted set when scored high to low.
                         * @param key must not be {#literal null}.
                         * @param o the value.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrank">Redis Documentation: ZREVRANK</a>
                         */
                        // @ts-ignore
                        reverseRank(key: K, o: java.lang.Object | any): object
                        /**
                         * Get elements between {@code start} and {@code end} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         */
                        // @ts-ignore
                        range(key: K, range: object): object
                        /**
                         * Get set of {@link Tuple}s between {@code start} and {@code end} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         */
                        // @ts-ignore
                        rangeWithScores(key: K, range: object): object
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        rangeByScore(key: K, range: object): object
                        /**
                         * Get set of {@link Tuple}s where score is between {@code min} and {@code max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        rangeByScoreWithScores(key: K, range: object): object
                        /**
                         * Get elements in range from {@code start} to {@code end} where score is between {@code min} and {@code max} from
                         * sorted set.
                         * @param key must not be {#literal null}.
                         * @param range
                         * @param limit
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        rangeByScore(key: K, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Get set of {@link Tuple}s in range from {@code start} to {@code end} where score is between {@code min} and
                         * {@code max} from sorted set.
                         * @param key
                         * @param range
                         * @param limit
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        rangeByScoreWithScores(key: K, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Get elements in range from {@code start} to {@code end} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param range
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        reverseRange(key: K, range: object): object
                        /**
                         * Get set of {@link Tuple}s in range from {@code start} to {@code end} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param range
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        reverseRangeWithScores(key: K, range: object): object
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param range
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        reverseRangeByScore(key: K, range: object): object
                        /**
                         * Get set of {@link Tuple} where score is between {@code min} and {@code max} from sorted set ordered from high to
                         * low.
                         * @param key must not be {#literal null}.
                         * @param range
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        reverseRangeByScoreWithScores(key: K, range: object): object
                        /**
                         * Get elements in range from {@code start} to {@code end} where score is between {@code min} and {@code max} from
                         * sorted set ordered high -> low.
                         * @param key must not be {#literal null}.
                         * @param range
                         * @param limit
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        reverseRangeByScore(key: K, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Get set of {@link Tuple} in range from {@code start} to {@code end} where score is between {@code min} and
                         * {@code max} from sorted set ordered high -> low.
                         * @param key must not be {#literal null}.
                         * @param range
                         * @param limit
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        reverseRangeByScoreWithScores(key: K, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Use a {@link Flux} to iterate over entries in the sorted set at {@code key}. The resulting {@link Flux} acts as a
                         * cursor and issues {@code ZSCAN} commands itself as long as the subscriber signals demand.
                         * @param key must not be {#literal null}.
                         * @return the {#link Flux} emitting the {@literal values} one by one or an {@link Flux#empty() empty Flux} if none
                         *          exist.
                         * @throws IllegalArgumentException when given {#code key} is {@literal null}.
                         * @see <a href="https://redis.io/commands/zscan">Redis Documentation: ZSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        scan(key: K): object
                        /**
                         * Use a {@link Flux} to iterate over entries in the sorted set at {@code key} given {@link ScanOptions}. The
                         * resulting {@link Flux} acts as a cursor and issues {@code ZSCAN} commands itself as long as the subscriber signals
                         * demand.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}. Use {@link ScanOptions#NONE} instead.
                         * @return the {#link Flux} emitting the {@literal values} one by one or an {@link Flux#empty() empty Flux} if none
                         *          exist.
                         * @throws IllegalArgumentException when one of the required arguments is {#literal null}.
                         * @see <a href="https://redis.io/commands/zscan">Redis Documentation: ZSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        scan(key: K, options: org.springframework.data.redis.core.ScanOptions): object
                        /**
                         * Count number of elements within sorted set with scores between {@code min} and {@code max}.
                         * @param key must not be {#literal null}.
                         * @param range
                         * @return 
                         * @see <a href="https://redis.io/commands/zcount">Redis Documentation: ZCOUNT</a>
                         */
                        // @ts-ignore
                        count(key: K, range: object): object
                        /**
                         * Returns the number of elements of the sorted set stored with given {@code key}.
                         * @param key
                         * @return 
                         * @see <a href="https://redis.io/commands/zcard">Redis Documentation: ZCARD</a>
                         */
                        // @ts-ignore
                        size(key: K): object
                        /**
                         * Get the score of element with {@code value} from sorted set with key {@code key}.
                         * @param key must not be {#literal null}.
                         * @param o the value.
                         * @return 
                         * @see <a href="https://redis.io/commands/zscore">Redis Documentation: ZSCORE</a>
                         */
                        // @ts-ignore
                        score(key: K, o: java.lang.Object | any): object
                        /**
                         * Remove elements in range between {@code start} and {@code end} from sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @param range
                         * @return 
                         * @see <a href="https://redis.io/commands/zremrangebyrank">Redis Documentation: ZREMRANGEBYRANK</a>
                         */
                        // @ts-ignore
                        removeRange(key: K, range: object): object
                        /**
                         * Remove elements with scores between {@code min} and {@code max} from sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @param range
                         * @return 
                         * @see <a href="https://redis.io/commands/zremrangebyscore">Redis Documentation: ZREMRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        removeRangeByScore(key: K, range: object): object
                        /**
                         * Union sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKey: K, destKey: K): object
                        /**
                         * Union sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K): object
                        /**
                         * Union sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): object
                        /**
                         * Union sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights): object
                        /**
                         * Intersect sorted sets at {@code key} and {@code otherKey} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKey: K, destKey: K): object
                        /**
                         * Intersect sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K): object
                        /**
                         * Intersect sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): object
                        /**
                         * Intersect sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights): object
                        /**
                         * Get all elements with lexicographical ordering from {@literal ZSET} at {@code key} with a value between
                         * {@link Range#getLowerBound()} and {@link Range#getUpperBound()}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        rangeByLex(key: K, range: object): object
                        /**
                         * Get all elements {@literal n} elements, where {@literal n = } {@link Limit#getCount()}, starting at
                         * {@link Limit#getOffset()} with lexicographical ordering from {@literal ZSET} at {@code key} with a value between
                         * {@link Range#getLowerBound()} and {@link Range#getUpperBound()}.
                         * @param key must not be {#literal null}
                         * @param range must not be {#literal null}.
                         * @param limit can be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        rangeByLex(key: K, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Get all elements with reverse lexicographical ordering from {@literal ZSET} at {@code key} with a value between
                         * {@link Range#getLowerBound()} and {@link Range#getUpperBound()}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/zrevrangebylex">Redis Documentation: ZREVRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        reverseRangeByLex(key: K, range: object): object
                        /**
                         * Get all elements {@literal n} elements, where {@literal n = } {@link Limit#getCount()}, starting at
                         * {@link Limit#getOffset()} with reverse lexicographical ordering from {@literal ZSET} at {@code key} with a value
                         * between {@link Range#getLowerBound()} and {@link Range#getUpperBound()}.
                         * @param key must not be {#literal null}
                         * @param range must not be {#literal null}.
                         * @param limit can be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebylex">Redis Documentation: ZREVRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        reverseRangeByLex(key: K, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Removes the given {@literal key}.
                         * @param key must not be {#literal null}.
                         */
                        // @ts-ignore
                        delete(key: K): object
                    }
                }
            }
        }
    }
}
