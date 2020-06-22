declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * Redis ZSet (or sorted set (by weight)). Acts as a {@link SortedSet} based on the given priorities or weights
                         * associated with each item.
                         * <p/>
                         * Since using a {@link Comparator} does not apply, a ZSet implements the {@link SortedSet} methods where applicable.
                         * @author Costin Leau
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        interface RedisZSet<E> extends org.springframework.data.redis.support.collections.RedisCollection<E>, java.util.Set<E> {
                            // @ts-ignore
                            intersectAndStore(set: org.springframework.data.redis.support.collections.RedisZSet<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisZSet<E>
                            // @ts-ignore
                            intersectAndStore(sets: java.util.Collection<any> | Array<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisZSet<E>
                            // @ts-ignore
                            unionAndStore(set: org.springframework.data.redis.support.collections.RedisZSet<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisZSet<E>
                            // @ts-ignore
                            unionAndStore(sets: java.util.Collection<any> | Array<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisZSet<E>
                            // @ts-ignore
                            range(start: number /*long*/, end: number /*long*/): Array<E>
                            // @ts-ignore
                            reverseRange(start: number /*long*/, end: number /*long*/): Array<E>
                            /**
                             * Get all elements with lexicographical ordering with a value between {@link Range#getMin()} and
                             * {@link Range#getMax()}.
                             * @param range must not be {#literal null}.
                             * @return 
                             * @see BoundZSetOperations#rangeByLex(Range)
                             * @since 1.7
                             */
                            // @ts-ignore
                            rangeByLex(range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<E>
                            /**
                             * Get all elements {@literal n} elements, where {@literal n = } {@link Limit#getCount()}, starting at
                             * {@link Limit#getOffset()} with lexicographical ordering having a value between {@link Range#getMin()} and
                             * {@link Range#getMax()}.
                             * @param range must not be {#literal null}.
                             * @param limit can be {#literal null}.
                             * @return 
                             * @see BoundZSetOperations#rangeByLex(Range, Limit)
                             * @since 1.7
                             */
                            // @ts-ignore
                            rangeByLex(range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<E>
                            // @ts-ignore
                            rangeByScore(min: number /*double*/, max: number /*double*/): Array<E>
                            // @ts-ignore
                            reverseRangeByScore(min: number /*double*/, max: number /*double*/): Array<E>
                            // @ts-ignore
                            rangeWithScores(start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<E>>
                            // @ts-ignore
                            reverseRangeWithScores(start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<E>>
                            // @ts-ignore
                            rangeByScoreWithScores(min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<E>>
                            // @ts-ignore
                            reverseRangeByScoreWithScores(min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.core.ZSetOperations.TypedTuple<E>>
                            // @ts-ignore
                            remove(start: number /*long*/, end: number /*long*/): org.springframework.data.redis.support.collections.RedisZSet<E>
                            // @ts-ignore
                            removeByScore(min: number /*double*/, max: number /*double*/): org.springframework.data.redis.support.collections.RedisZSet<E>
                            /**
                             * Adds an element to the set with the given score, or updates the score if the element exists.
                             * @param e element to add
                             * @param score element score
                             * @return true if a new element was added, false otherwise (only the score has been updated)
                             */
                            // @ts-ignore
                            add(e: E, score: number /*double*/): boolean
                            /**
                             * Adds an element to the set with a default score. Equivalent to {@code add(e, getDefaultScore())}. The score value
                             * is implementation specific. {@inheritDoc}
                             */
                            // @ts-ignore
                            add(e: E): boolean
                            /**
                             * Returns the score of the given element. Returns null if the element is not contained by the set.
                             * @param o object
                             * @return the score associated with the given object
                             */
                            // @ts-ignore
                            score(o: java.lang.Object | any): number
                            /**
                             * Returns the rank (position) of the given element in the set, in ascending order. Returns null if the element is not
                             * contained by the set.
                             * @param o object
                             * @return rank of the given object
                             */
                            // @ts-ignore
                            rank(o: java.lang.Object | any): number
                            /**
                             * Returns the rank (position) of the given element in the set, in descending order. Returns null if the element is
                             * not contained by the set.
                             * @param o object
                             * @return reverse rank of the given object
                             */
                            // @ts-ignore
                            reverseRank(o: java.lang.Object | any): number
                            /**
                             * Returns the default score used by this set.
                             * @return the default score used by the implementation.
                             */
                            // @ts-ignore
                            getDefaultScore(): number
                            /**
                             * Returns the first (lowest) element currently in this sorted set.
                             * @return the first (lowest) element currently in this sorted set.
                             * @throws NoSuchElementException sorted set is empty.
                             */
                            // @ts-ignore
                            first(): E
                            /**
                             * Returns the last (highest) element currently in this sorted set.
                             * @return the last (highest) element currently in this sorted set.
                             * @throws NoSuchElementException sorted set is empty.
                             */
                            // @ts-ignore
                            last(): E
                            /**
                             * @since 1.4
                             * @return 
                             */
                            // @ts-ignore
                            scan(): java.util.Iterator<E>
                        }
                    }
                }
            }
        }
    }
}
