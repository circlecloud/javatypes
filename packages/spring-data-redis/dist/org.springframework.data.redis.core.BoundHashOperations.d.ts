declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Hash operations bound to a certain key.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Ninad Divadkar
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface BoundHashOperations<H, HK, HV> extends org.springframework.data.redis.core.BoundKeyOperations<H> {
                        /**
                         * Delete given hash {@code keys} at the bound key.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        delete(...keys: java.lang.Object[] | any[]): number
                        /**
                         * Determine if given hash {@code key} exists at the bound key.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        hasKey(key: java.lang.Object | any): java.lang.Boolean
                        /**
                         * Get value for given {@code key} from the hash at the bound key.
                         * @param member must not be {#literal null}.
                         * @return {#literal null} when member does not exist or when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        get(member: java.lang.Object | any): HV
                        /**
                         * Get values for given {@code keys} from the hash at the bound key.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        multiGet(keys: java.util.Collection<HK> | Array<HK>): Array<HV>
                        /**
                         * Increment {@code value} of a hash {@code key} by the given {@code delta} at the bound key.
                         * @param key must not be {#literal null}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        increment(key: HK, delta: number /*long*/): number
                        /**
                         * Increment {@code value} of a hash {@code key} by the given {@code delta} at the bound key.
                         * @param key must not be {#literal null}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        increment(key: HK, delta: number /*double*/): number
                        /**
                         * Get key set (fields) of hash at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        keys(): Array<HK>
                        /**
                         * Returns the length of the value associated with {@code hashKey}. If the {@code hashKey} do not exist, {@code 0} is
                         * returned.
                         * @param hashKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         */
                        // @ts-ignore
                        lengthOfValue(hashKey: HK): number
                        /**
                         * Get size of hash at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        size(): number
                        /**
                         * Set multiple hash fields to multiple values using data provided in {@code m} at the bound key.
                         * @param m must not be {#literal null}.
                         */
                        // @ts-ignore
                        putAll(m: java.util.Map<any, any>): void
                        /**
                         * Set the {@code value} of a hash {@code key} at the bound key.
                         * @param key must not be {#literal null}.
                         * @param value
                         */
                        // @ts-ignore
                        put(key: HK, value: HV): void
                        /**
                         * Set the {@code value} of a hash {@code key} only if {@code key} does not exist.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        putIfAbsent(key: HK, value: HV): java.lang.Boolean
                        /**
                         * Get entry set (values) of hash at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        values(): Array<HV>
                        /**
                         * Get entire hash at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        entries(): java.util.Map<HK, HV>
                        /**
                         * Use a {@link Cursor} to iterate over entries in the hash.
                         * @param options
                         * @return 
                         * @since 1.4
                         */
                        // @ts-ignore
                        scan(options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<java.util.Map.Entry<HK, HV>>
                        /**
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        getOperations(): org.springframework.data.redis.core.RedisOperations<H, any>
                    }
                }
            }
        }
    }
}
