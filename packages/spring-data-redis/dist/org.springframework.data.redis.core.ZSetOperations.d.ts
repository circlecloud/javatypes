declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis ZSet/sorted set specific operations.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @author Rosty Kerei
                     * @author Wongoo (望哥)
                     */
                    // @ts-ignore
                    interface ZSetOperations<K, V> {
                        /**
                         * Add {@code value} to a sorted set at {@code key}, or update its {@code score} if it already exists.
                         * @param key must not be {#literal null}.
                         * @param score the score.
                         * @param value the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        add(key: K, value: V, score: number /*double*/): java.lang.Boolean
                        /**
                         * Add {@code tuples} to a sorted set at {@code key}, or update its {@code score} if it already exists.
                         * @param key must not be {#literal null}.
                         * @param tuples must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        add(key: K, tuples: java.util.Set<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>> | Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>): number
                        /**
                         * Remove {@code values} from sorted set. Return number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrem">Redis Documentation: ZREM</a>
                         */
                        // @ts-ignore
                        remove(key: K, ...values: java.lang.Object[] | any[]): number
                        /**
                         * Increment the score of element with {@code value} in sorted set by {@code increment}.
                         * @param key must not be {#literal null}.
                         * @param delta
                         * @param value the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zincrby">Redis Documentation: ZINCRBY</a>
                         */
                        // @ts-ignore
                        incrementScore(key: K, value: V, delta: number /*double*/): number
                        /**
                         * Determine the index of element with {@code value} in a sorted set.
                         * @param key must not be {#literal null}.
                         * @param o the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrank">Redis Documentation: ZRANK</a>
                         */
                        // @ts-ignore
                        rank(key: K, o: java.lang.Object | any): number
                        /**
                         * Determine the index of element with {@code value} in a sorted set when scored high to low.
                         * @param key must not be {#literal null}.
                         * @param o the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrank">Redis Documentation: ZREVRANK</a>
                         */
                        // @ts-ignore
                        reverseRank(key: K, o: java.lang.Object | any): number
                        /**
                         * Get elements between {@code start} and {@code end} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         */
                        // @ts-ignore
                        range(key: K, start: number /*long*/, end: number /*long*/): Array<V>
                        /**
                         * Get set of {@link Tuple}s between {@code start} and {@code end} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         */
                        // @ts-ignore
                        rangeWithScores(key: K, start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        rangeByScore(key: K, min: number /*double*/, max: number /*double*/): Array<V>
                        /**
                         * Get set of {@link Tuple}s where score is between {@code min} and {@code max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        rangeByScoreWithScores(key: K, min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Get elements in range from {@code start} to {@code end} where score is between {@code min} and {@code max} from
                         * sorted set.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        rangeByScore(key: K, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<V>
                        /**
                         * Get set of {@link Tuple}s in range from {@code start} to {@code end} where score is between {@code min} and
                         * {@code max} from sorted set.
                         * @param key
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        rangeByScoreWithScores(key: K, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Get elements in range from {@code start} to {@code end} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        reverseRange(key: K, start: number /*long*/, end: number /*long*/): Array<V>
                        /**
                         * Get set of {@link Tuple}s in range from {@code start} to {@code end} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        reverseRangeWithScores(key: K, start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        reverseRangeByScore(key: K, min: number /*double*/, max: number /*double*/): Array<V>
                        /**
                         * Get set of {@link Tuple} where score is between {@code min} and {@code max} from sorted set ordered from high to
                         * low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        reverseRangeByScoreWithScores(key: K, min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Get elements in range from {@code start} to {@code end} where score is between {@code min} and {@code max} from
                         * sorted set ordered high -> low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        reverseRangeByScore(key: K, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<V>
                        /**
                         * Get set of {@link Tuple} in range from {@code start} to {@code end} where score is between {@code min} and
                         * {@code max} from sorted set ordered high -> low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        reverseRangeByScoreWithScores(key: K, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Count number of elements within sorted set with scores between {@code min} and {@code max}.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zcount">Redis Documentation: ZCOUNT</a>
                         */
                        // @ts-ignore
                        count(key: K, min: number /*double*/, max: number /*double*/): number
                        /**
                         * Returns the number of elements of the sorted set stored with given {@code key}.
                         * @see #zCard(Object)
                         * @param key
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zcard">Redis Documentation: ZCARD</a>
                         */
                        // @ts-ignore
                        size(key: K): number
                        /**
                         * Get the size of sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/zcard">Redis Documentation: ZCARD</a>
                         */
                        // @ts-ignore
                        zCard(key: K): number
                        /**
                         * Get the score of element with {@code value} from sorted set with key {@code key}.
                         * @param key must not be {#literal null}.
                         * @param o the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zscore">Redis Documentation: ZSCORE</a>
                         */
                        // @ts-ignore
                        score(key: K, o: java.lang.Object | any): number
                        /**
                         * Remove elements in range between {@code start} and {@code end} from sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zremrangebyrank">Redis Documentation: ZREMRANGEBYRANK</a>
                         */
                        // @ts-ignore
                        removeRange(key: K, start: number /*long*/, end: number /*long*/): number
                        /**
                         * Remove elements with scores between {@code min} and {@code max} from sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zremrangebyscore">Redis Documentation: ZREMRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        removeRangeByScore(key: K, min: number /*double*/, max: number /*double*/): number
                        /**
                         * Union sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKey: K, destKey: K): number
                        /**
                         * Union sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K): number
                        /**
                         * Union sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): number
                        /**
                         * Union sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights): number
                        /**
                         * Intersect sorted sets at {@code key} and {@code otherKey} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKey: K, destKey: K): number
                        /**
                         * Intersect sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K): number
                        /**
                         * Intersect sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): number
                        /**
                         * Intersect sorted sets at {@code key} and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights): number
                        /**
                         * Iterate over elements in zset at {@code key}. <br />
                         * <strong>Important:</strong> Call {@link Cursor#close()} when done to avoid resource leak.
                         * @param key
                         * @param options
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zscan">Redis Documentation: ZSCAN</a>
                         * @since 1.4
                         */
                        // @ts-ignore
                        scan(key: K, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Get all elements with lexicographical ordering from {@literal ZSET} at {@code key} with a value between
                         * {@link Range#getMin()} and {@link Range#getMax()}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.7
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        rangeByLex(key: K, range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<V>
                        /**
                         * Get all elements {@literal n} elements, where {@literal n = } {@link Limit#getCount()}, starting at
                         * {@link Limit#getOffset()} with lexicographical ordering from {@literal ZSET} at {@code key} with a value between
                         * {@link Range#getMin()} and {@link Range#getMax()}.
                         * @param key must not be {#literal null}
                         * @param range must not be {#literal null}.
                         * @param limit can be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.7
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        rangeByLex(key: K, range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<V>
                        /**
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        getOperations(): org.springframework.data.redis.core.RedisOperations<K, V>
                    }
                }
            }
        }
    }
}
