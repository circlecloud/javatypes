declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Set-specific commands supported by Redis.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisSetCommands {
                        /**
                         * Add given {@code values} to set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be empty.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sadd">Redis Documentation: SADD</a>
                         */
                        // @ts-ignore
                        sAdd(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * Remove given {@code values} from set at {@code key} and return the number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param values must not be empty.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/srem">Redis Documentation: SREM</a>
                         */
                        // @ts-ignore
                        sRem(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * Remove and return a random member from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when key does not exist or used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         */
                        // @ts-ignore
                        sPop(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Remove and return {@code count} random members from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count number of random members to pop from the set.
                         * @return empty {#link List} if set does not exist. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         * @since 2.0
                         */
                        // @ts-ignore
                        sPop(key: number /*byte*/[], count: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * Move {@code value} from {@code srcKey} to {@code destKey}
                         * @param srcKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/smove">Redis Documentation: SMOVE</a>
                         */
                        // @ts-ignore
                        sMove(srcKey: number /*byte*/[], destKey: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Get size of set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/scard">Redis Documentation: SCARD</a>
                         */
                        // @ts-ignore
                        sCard(key: number /*byte*/[]): number
                        /**
                         * Check if set at {@code key} contains {@code value}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sismember">Redis Documentation: SISMEMBER</a>
                         */
                        // @ts-ignore
                        sIsMember(key: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Returns the members intersecting all given sets at {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return empty {#link Set} if no intersection found. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sinter">Redis Documentation: SINTER</a>
                         */
                        // @ts-ignore
                        sInter(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * Intersect all given sets at {@code keys} and store result in {@code destKey}.
                         * @param destKey must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sinterstore">Redis Documentation: SINTERSTORE</a>
                         */
                        // @ts-ignore
                        sInterStore(destKey: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        /**
                         * Union all sets at given {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return empty {#link Set} if keys do not exist. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sunion">Redis Documentation: SUNION</a>
                         */
                        // @ts-ignore
                        sUnion(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * Union all sets at given {@code keys} and store result in {@code destKey}.
                         * @param destKey must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sunionstore">Redis Documentation: SUNIONSTORE</a>
                         */
                        // @ts-ignore
                        sUnionStore(destKey: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        /**
                         * Diff all sets for given {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sdiff">Redis Documentation: SDIFF</a>
                         */
                        // @ts-ignore
                        sDiff(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * Diff all sets for given {@code keys} and store result in {@code destKey}.
                         * @param destKey must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sdiffstore">Redis Documentation: SDIFFSTORE</a>
                         */
                        // @ts-ignore
                        sDiffStore(destKey: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        /**
                         * Get all elements of set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return empty {#link Set} when key does not exist. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/smembers">Redis Documentation: SMEMBERS</a>
                         */
                        // @ts-ignore
                        sMembers(key: number /*byte*/[]): Array<number /*byte*/[]>
                        /**
                         * Get random element from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        sRandMember(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Get {@code count} random elements from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        sRandMember(key: number /*byte*/[], count: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * Use a {@link Cursor} to iterate over elements in set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 1.4
                         * @see <a href="https://redis.io/commands/scan">Redis Documentation: SCAN</a>
                         */
                        // @ts-ignore
                        sScan(key: number /*byte*/[], options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<number /*byte*/[]>
                    }
                }
            }
        }
    }
}
