declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Set operations bound to a certain key.
                     * @author Costin Leau
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface BoundSetOperations<K, V> extends org.springframework.data.redis.core.BoundKeyOperations<K> {
                        /**
                         * Add given {@code values} to set at the bound key.
                         * @param values
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sadd">Redis Documentation: SADD</a>
                         */
                        // @ts-ignore
                        add(...values: V[]): number
                        /**
                         * Remove given {@code values} from set at the bound key and return the number of removed elements.
                         * @param values
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/srem">Redis Documentation: SREM</a>
                         */
                        // @ts-ignore
                        remove(...values: java.lang.Object[] | any[]): number
                        /**
                         * Remove and return a random member from set at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         */
                        // @ts-ignore
                        pop(): V
                        /**
                         * Move {@code value} from the bound key to {@code destKey}
                         * @param destKey must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/smove">Redis Documentation: SMOVE</a>
                         */
                        // @ts-ignore
                        move(destKey: K, value: V): java.lang.Boolean
                        /**
                         * Get size of set at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/scard">Redis Documentation: SCARD</a>
                         */
                        // @ts-ignore
                        size(): number
                        /**
                         * Check if set at the bound key contains {@code value}.
                         * @param o
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sismember">Redis Documentation: SISMEMBER</a>
                         */
                        // @ts-ignore
                        isMember(o: java.lang.Object | any): java.lang.Boolean
                        /**
                         * Returns the members intersecting all given sets at the bound key and {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sinter">Redis Documentation: SINTER</a>
                         */
                        // @ts-ignore
                        intersect(key: K): Array<V>
                        /**
                         * Returns the members intersecting all given sets at the bound key and {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sinter">Redis Documentation: SINTER</a>
                         */
                        // @ts-ignore
                        intersect(keys: java.util.Collection<K> | Array<K>): Array<V>
                        /**
                         * Intersect all given sets at the bound key and {@code key} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/sinterstore">Redis Documentation: SINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(key: K, destKey: K): void
                        /**
                         * Intersect all given sets at the bound key and {@code keys} and store result in {@code destKey}.
                         * @param keys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/sinterstore">Redis Documentation: SINTERSTORE</a>
                         */
                        // @ts-ignore
                        intersectAndStore(keys: java.util.Collection<K> | Array<K>, destKey: K): void
                        /**
                         * Union all sets at given {@code key} and {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sunion">Redis Documentation: SUNION</a>
                         */
                        // @ts-ignore
                        union(key: K): Array<V>
                        /**
                         * Union all sets at given {@code keys} and {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sunion">Redis Documentation: SUNION</a>
                         */
                        // @ts-ignore
                        union(keys: java.util.Collection<K> | Array<K>): Array<V>
                        /**
                         * Union all sets at given the bound key and {@code key} and store result in {@code destKey}.
                         * @param key must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/sunionstore">Redis Documentation: SUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(key: K, destKey: K): void
                        /**
                         * Union all sets at given the bound key and {@code keys} and store result in {@code destKey}.
                         * @param keys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/sunionstore">Redis Documentation: SUNIONSTORE</a>
                         */
                        // @ts-ignore
                        unionAndStore(keys: java.util.Collection<K> | Array<K>, destKey: K): void
                        /**
                         * Diff all sets for given the bound key and {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sdiff">Redis Documentation: SDIFF</a>
                         */
                        // @ts-ignore
                        diff(key: K): Array<V>
                        /**
                         * Diff all sets for given the bound key and {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sdiff">Redis Documentation: SDIFF</a>
                         */
                        // @ts-ignore
                        diff(keys: java.util.Collection<K> | Array<K>): Array<V>
                        /**
                         * Diff all sets for given the bound key and {@code keys} and store result in {@code destKey}.
                         * @param keys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/sdiffstore">Redis Documentation: SDIFFSTORE</a>
                         */
                        // @ts-ignore
                        diffAndStore(keys: K, destKey: K): void
                        /**
                         * Diff all sets for given the bound key and {@code keys} and store result in {@code destKey}.
                         * @param keys must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/sdiffstore">Redis Documentation: SDIFFSTORE</a>
                         */
                        // @ts-ignore
                        diffAndStore(keys: java.util.Collection<K> | Array<K>, destKey: K): void
                        /**
                         * Get all elements of set at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/smembers">Redis Documentation: SMEMBERS</a>
                         */
                        // @ts-ignore
                        members(): Array<V>
                        /**
                         * Get random element from set at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        randomMember(): V
                        /**
                         * Get {@code count} distinct random elements from set at the bound key.
                         * @param count
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        distinctRandomMembers(count: number /*long*/): Array<V>
                        /**
                         * Get {@code count} random elements from set at the bound key.
                         * @param count
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        randomMembers(count: number /*long*/): Array<V>
                        /**
                         * @param options
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.4
                         */
                        // @ts-ignore
                        scan(options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<V>
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
