declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * ZSet (or SortedSet) operations bound to a certain key.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @author Wongoo (望哥)
                     */
                    // @ts-ignore
                    interface BoundZSetOperations<K, V> extends org.springframework.data.redis.core.BoundKeyOperations<K> {
                        /**
                         * Add {@code value} to a sorted set at the bound key, or update its {@code score} if it already exists.
                         * @param score the score.
                         * @param value the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        add(value: V, score: number /*double*/): java.lang.Boolean
                        /**
                         * Add {@code tuples} to a sorted set at the bound key, or update its {@code score} if it already exists.
                         * @param tuples must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        add(tuples: java.util.Set<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>> | Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>): number
                        /**
                         * Remove {@code values} from sorted set. Return number of removed elements.
                         * @param values must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrem">Redis Documentation: ZREM</a>
                         */
                        // @ts-ignore
                        remove(...values: java.lang.Object[] | any[]): number
                        /**
                         * Increment the score of element with {@code value} in sorted set by {@code increment}.
                         * @param delta
                         * @param value the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zincrby">Redis Documentation: ZINCRBY</a>
                         */
                        // @ts-ignore
                        incrementScore(value: V, delta: number /*double*/): number
                        /**
                         * Determine the index of element with {@code value} in a sorted set.
                         * @param o the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrank">Redis Documentation: ZRANK</a>
                         */
                        // @ts-ignore
                        rank(o: java.lang.Object | any): number
                        /**
                         * Determine the index of element with {@code value} in a sorted set when scored high to low.
                         * @param o the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrank">Redis Documentation: ZREVRANK</a>
                         */
                        // @ts-ignore
                        reverseRank(o: java.lang.Object | any): number
                        /**
                         * Get elements between {@code start} and {@code end} from sorted set.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         */
                        // @ts-ignore
                        range(start: number /*long*/, end: number /*long*/): Array<V>
                        /**
                         * Get set of {@link Tuple}s between {@code start} and {@code end} from sorted set.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         */
                        // @ts-ignore
                        rangeWithScores(start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        rangeByScore(min: number /*double*/, max: number /*double*/): Array<V>
                        /**
                         * Get set of {@link Tuple}s where score is between {@code min} and {@code max} from sorted set.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        rangeByScoreWithScores(min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Get elements in range from {@code start} to {@code end} from sorted set ordered from high to low.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        reverseRange(start: number /*long*/, end: number /*long*/): Array<V>
                        /**
                         * Get set of {@link Tuple}s in range from {@code start} to {@code end} from sorted set ordered from high to low.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        reverseRangeWithScores(start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set ordered from high to low.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        reverseRangeByScore(min: number /*double*/, max: number /*double*/): Array<V>
                        /**
                         * Get set of {@link Tuple} where score is between {@code min} and {@code max} from sorted set ordered from high to
                         * low.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        reverseRangeByScoreWithScores(min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Count number of elements within sorted set with scores between {@code min} and {@code max}.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zcount">Redis Documentation: ZCOUNT</a>
                         */
                        // @ts-ignore
                        count(min: number /*double*/, max: number /*double*/): number
                        /**
                         * Returns the number of elements of the sorted set stored with given the bound key.
                         * @see #zCard()
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zcard">Redis Documentation: ZCARD</a>
                         */
                        // @ts-ignore
                        size(): number
                        /**
                         * Get the size of sorted set with the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/zcard">Redis Documentation: ZCARD</a>
                         */
                        // @ts-ignore
                        zCard(): number
                        /**
                         * Get the score of element with {@code value} from sorted set with key the bound key.
                         * @param o the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zscore">Redis Documentation: ZSCORE</a>
                         */
                        // @ts-ignore
                        score(o: java.lang.Object | any): number
                        /**
                         * Remove elements in range between {@code start} and {@code end} from sorted set with the bound key.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zremrangebyrank">Redis Documentation: ZREMRANGEBYRANK</a>
                         */
                        // @ts-ignore
                        removeRange(start: number /*long*/, end: number /*long*/): number
                        /**
                         * Remove elements with scores between {@code min} and {@code max} from sorted set with the bound key.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zremrangebyscore">Redis Documentation: ZREMRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        removeRangeByScore(min: number /*double*/, max: number /*double*/): number
                        /**
                         * Union sorted sets at the bound key and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(otherKey: K, destKey: K): number
                        /**
                         * Union sorted sets at the bound key and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(otherKeys: java.util.Collection<K> | Array<K>, destKey: K): number
                        /**
                         * Union sorted sets at the bound key and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): number
                        /**
                         * Union sorted sets at the bound key and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights): number
                        /**
                         * Intersect sorted sets at the bound key and {@code otherKey} and store result in destination {@code destKey}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(otherKey: K, destKey: K): number
                        /**
                         * Intersect sorted sets at the bound key and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(otherKeys: java.util.Collection<K> | Array<K>, destKey: K): number
                        /**
                         * Intersect sorted sets at the bound key and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): number
                        /**
                         * Intersect sorted sets at the bound key and {@code otherKeys} and store result in destination {@code destKey}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(otherKeys: java.util.Collection<K> | Array<K>, destKey: K, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights): number
                        /**
                         * Iterate over elements in zset at the bound key. <br />
                         * <strong>Important:</strong> Call {@link Cursor#close()} when done to avoid resource leak.
                         * @param options
                         * @return 
                         * @since 1.4
                         */
                        // @ts-ignore
                        scan(options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>>
                        /**
                         * Get all elements with lexicographical ordering with a value between {@link Range#getMin()} and
                         * {@link Range#getMax()}.
                         * @param range must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.7
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        rangeByLex(range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<V>
                        /**
                         * Get all elements {@literal n} elements, where {@literal n = } {@link Limit#getCount()}, starting at
                         * {@link Limit#getOffset()} with lexicographical ordering having a value between {@link Range#getMin()} and
                         * {@link Range#getMax()}.
                         * @param range must not be {#literal null}.
                         * @param limit can be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.7
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        rangeByLex(range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<V>
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
