declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis set specific operations.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface SetOperations<K, V> {
                        /**
                         * Add given {@code values} to set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sadd">Redis Documentation: SADD</a>
                         */
                        // @ts-ignore
                        add(key: K, ...values: V[]): number
                        /**
                         * Remove given {@code values} from set at {@code key} and return the number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/srem">Redis Documentation: SREM</a>
                         */
                        // @ts-ignore
                        remove(key: K, ...values: java.lang.Object[] | any[]): number
                        /**
                         * Remove and return a random member from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         */
                        // @ts-ignore
                        pop(key: K): V
                        /**
                         * Remove and return {@code count} random members from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count number of random members to pop from the set.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         * @since 2.0
                         */
                        // @ts-ignore
                        pop(key: K, count: number /*long*/): Array<V>
                        /**
                         * Move {@code value} from {@code key} to {@code destKey}
                         * @param key must not be {#literal null}.
                         * @param value
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/smove">Redis Documentation: SMOVE</a>
                         */
                        // @ts-ignore
                        move(key: K, value: V, destKey: K): java.lang.Boolean
                        /**
                         * Get size of set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/scard">Redis Documentation: SCARD</a>
                         */
                        // @ts-ignore
                        size(key: K): number
                        /**
                         * Check if set at {@code key} contains {@code value}.
                         * @param key must not be {#literal null}.
                         * @param o
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sismember">Redis Documentation: SISMEMBER</a>
                         */
                        // @ts-ignore
                        isMember(key: K, o: java.lang.Object | any): java.lang.Boolean
                        /**
                         * Returns the members intersecting all given sets at {@code key} and {@code otherKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sinter">Redis Documentation: SINTER</a>
                         */
                        // @ts-ignore
                        intersect(key: K, otherKey: K): Array<V>
                        /**
                         * Returns the members intersecting all given sets at {@code key} and {@code otherKeys}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sinter">Redis Documentation: SINTER</a>
                         */
                        // @ts-ignore
                        intersect(key: K, otherKeys: java.util.Collection<K> | Array<K>): Array<V>
                        /**
                         * Intersect all given sets at {@code key} and {@code otherKey} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sinterstore">Redis Documentation: SINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKey: K, destKey: K): number
                        /**
                         * Intersect all given sets at {@code key} and {@code otherKeys} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sinterstore">Redis Documentation: SINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K): number
                        /**
                         * Union all sets at given {@code keys} and {@code otherKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sunion">Redis Documentation: SUNION</a>
                         */
                        // @ts-ignore
                        union(key: K, otherKey: K): Array<V>
                        /**
                         * Union all sets at given {@code keys} and {@code otherKeys}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sunion">Redis Documentation: SUNION</a>
                         */
                        // @ts-ignore
                        union(key: K, otherKeys: java.util.Collection<K> | Array<K>): Array<V>
                        /**
                         * Union all sets at given {@code key} and {@code otherKey} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sunionstore">Redis Documentation: SUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKey: K, destKey: K): number
                        /**
                         * Union all sets at given {@code key} and {@code otherKeys} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sunionstore">Redis Documentation: SUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K): number
                        /**
                         * Diff all sets for given {@code key} and {@code otherKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sdiff">Redis Documentation: SDIFF</a>
                         */
                        // @ts-ignore
                        difference(key: K, otherKey: K): Array<V>
                        /**
                         * Diff all sets for given {@code key} and {@code otherKeys}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sdiff">Redis Documentation: SDIFF</a>
                         */
                        // @ts-ignore
                        difference(key: K, otherKeys: java.util.Collection<K> | Array<K>): Array<V>
                        /**
                         * Diff all sets for given {@code key} and {@code otherKey} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sdiffstore">Redis Documentation: SDIFFSTORE</a>
                         */
                        // @ts-ignore
                        differenceAndStore(key: K, otherKey: K, destKey: K): number
                        /**
                         * Diff all sets for given {@code key} and {@code otherKeys} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param otherKeys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sdiffstore">Redis Documentation: SDIFFSTORE</a>
                         */
                        // @ts-ignore
                        differenceAndStore(key: K, otherKeys: java.util.Collection<K> | Array<K>, destKey: K): number
                        /**
                         * Get all elements of set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/smembers">Redis Documentation: SMEMBERS</a>
                         */
                        // @ts-ignore
                        members(key: K): Array<V>
                        /**
                         * Get random element from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        randomMember(key: K): V
                        /**
                         * Get {@code count} distinct random elements from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count nr of members to return
                         * @return empty {#link Set} if {@code key} does not exist.
                         * @throws IllegalArgumentException if count is negative.
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        distinctRandomMembers(key: K, count: number /*long*/): Array<V>
                        /**
                         * Get {@code count} random elements from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count nr of members to return.
                         * @return empty {#link List} if {@code key} does not exist or {@literal null} when used in pipeline / transaction.
                         * @throws IllegalArgumentException if count is negative.
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        randomMembers(key: K, count: number /*long*/): Array<V>
                        /**
                         * Iterate over elements in set at {@code key}. <br />
                         * <strong>Important:</strong> Call {@link Cursor#close()} when done to avoid resource leak.
                         * @param key
                         * @param options
                         * @return 
                         * @since 1.4
                         */
                        // @ts-ignore
                        scan(key: K, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<V>
                        // @ts-ignore
                        getOperations(): org.springframework.data.redis.core.RedisOperations<K, V>
                    }
                }
            }
        }
    }
}
