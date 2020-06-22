declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis set specific operations.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @see <a href="https://redis.io/commands#set">Redis Documentation: Set Commands</a>
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveSetOperations<K, V> {
                        /**
                         * Add given {@code values} to set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return 
                         * @see <a href="https://redis.io/commands/sadd">Redis Documentation: SADD</a>
                         */
                        // @ts-ignore
                        add(key: K, ...values: V[]): object
                        /**
                         * Remove given {@code values} from set at {@code key} and return the number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return 
                         * @see <a href="https://redis.io/commands/srem">Redis Documentation: SREM</a>
                         */
                        // @ts-ignore
                        remove(key: K, ...values: java.lang.Object[] | any[]): object
                        /**
                         * Remove and return a random member from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         */
                        // @ts-ignore
                        pop(key: K): object
                        /**
                         * Remove and return {@code count} random members from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count number of random members to pop from the set.
                         * @return {#link Flux} emitting random members.
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         */
                        // @ts-ignore
                        pop(key: K, count: number /*long*/): object
                        /**
                         * Move {@code value} from {@code key} to {@code destKey}
                         * @param sourceKey must not be {#literal null}.
                         * @param value
                         * @param destKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/smove">Redis Documentation: SMOVE</a>
                         */
                        // @ts-ignore
                        move(sourceKey: K, value: V, destKey: K): object
                        /**
                         * Get size of set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/scard">Redis Documentation: SCARD</a>
                         */
                        // @ts-ignore
                        size(key: K): object
                        /**
                         * Check if set at {@code key} contains {@code value}.
                         * @param key must not be {#literal null}.
                         * @param o
                         * @return 
                         * @see <a href="https://redis.io/commands/sismember">Redis Documentation: SISMEMBER</a>
                         */
                        // @ts-ignore
                        isMember(key: K, o: java.lang.Object | any): object
                        /**
                         * Returns the members intersecting all given sets at {@code key} and {@code otherKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sinter">Redis Documentation: SINTER</a>
                         */
                        // @ts-ignore
                        intersect(key: K, otherKey: K): object
                        /**
                         * Returns the members intersecting all given sets at {@code key} and {@code otherKeys}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sinter">Redis Documentation: SINTER</a>
                         */
                        // @ts-ignore
                        intersect(key: K, otherKeys: java.util.Collection<K> | Array<K>): object
                        /**
                         * Intersect all given sets at {@code key} and {@code otherKey} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sinterstore">Redis Documentation: SINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKey: K, destKey: K): object
                        /**
                         * Intersect all given sets at {@code key} and {@code otherKeys} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sinterstore">Redis Documentation: SINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K): object
                        /**
                         * Union all sets at given {@code keys} and {@code otherKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sunion">Redis Documentation: SUNION</a>
                         */
                        // @ts-ignore
                        union(key: K, otherKey: K): object
                        /**
                         * Union all sets at given {@code keys} and {@code otherKeys}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sunion">Redis Documentation: SUNION</a>
                         */
                        // @ts-ignore
                        union(key: K, otherKeys: java.util.Collection<K> | Array<K>): object
                        /**
                         * Union all sets at given {@code key} and {@code otherKey} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sunionstore">Redis Documentation: SUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKey: K, destKey: K): object
                        /**
                         * Union all sets at given {@code key} and {@code otherKeys} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sunionstore">Redis Documentation: SUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K): object
                        /**
                         * Diff all sets for given {@code key} and {@code otherKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sdiff">Redis Documentation: SDIFF</a>
                         */
                        // @ts-ignore
                        difference(key: K, otherKey: K): object
                        /**
                         * Diff all sets for given {@code key} and {@code otherKeys}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sdiff">Redis Documentation: SDIFF</a>
                         */
                        // @ts-ignore
                        difference(key: K, otherKeys: java.util.Collection<K> | Array<K>): object
                        /**
                         * Diff all sets for given {@code key} and {@code otherKey} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sdiffstore">Redis Documentation: SDIFFSTORE</a>
                         */
                        // @ts-ignore
                        differenceAndStore(key: K, otherKey: K, destKey: K): object
                        /**
                         * Diff all sets for given {@code key} and {@code otherKeys} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sdiffstore">Redis Documentation: SDIFFSTORE</a>
                         */
                        // @ts-ignore
                        differenceAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K): object
                        /**
                         * Get all elements of set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/smembers">Redis Documentation: SMEMBERS</a>
                         */
                        // @ts-ignore
                        members(key: K): object
                        /**
                         * Use a {@link Flux} to iterate over entries in the set at {@code key}. The resulting {@link Flux} acts as a cursor
                         * and issues {@code SSCAN} commands itself as long as the subscriber signals demand.
                         * @param key must not be {#literal null}.
                         * @return the {#link Flux} emitting the {@literal values} one by one or an {@link Flux#empty() empty Flux} if none
                         *          exist.
                         * @throws IllegalArgumentException when given {#code key} is {@literal null}.
                         * @see <a href="https://redis.io/commands/sscan">Redis Documentation: SSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        scan(key: K): object
                        /**
                         * Use a {@link Flux} to iterate over entries in the set at {@code key} given {@link ScanOptions}. The resulting
                         * {@link Flux} acts as a cursor and issues {@code SSCAN} commands itself as long as the subscriber signals demand.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}. Use {@link ScanOptions#NONE} instead.
                         * @return the {#link Flux} emitting the {@literal values} one by one or an {@link Flux#empty() empty Flux} if the key
                         *          does not exist.
                         * @throws IllegalArgumentException when one of the required arguments is {#literal null}.
                         * @see <a href="https://redis.io/commands/sscan">Redis Documentation: SSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        scan(key: K, options: org.springframework.data.redis.core.ScanOptions): object
                        /**
                         * Get random element from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        randomMember(key: K): object
                        /**
                         * Get {@code count} distinct random elements from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count number of members to return.
                         * @return 
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        distinctRandomMembers(key: K, count: number /*long*/): object
                        /**
                         * Get {@code count} random elements from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count number of members to return.
                         * @return 
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        randomMembers(key: K, count: number /*long*/): object
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
