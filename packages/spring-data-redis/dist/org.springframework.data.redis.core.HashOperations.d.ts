declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis map specific operations working on a hash.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Ninad Divadkar
                     */
                    // @ts-ignore
                    interface HashOperations<H, HK, HV> {
                        /**
                         * Delete given hash {@code hashKeys}.
                         * @param key must not be {#literal null}.
                         * @param hashKeys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        delete(key: H, ...hashKeys: java.lang.Object[] | any[]): number
                        /**
                         * Determine if given hash {@code hashKey} exists.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        hasKey(key: H, hashKey: java.lang.Object | any): java.lang.Boolean
                        /**
                         * Get value for given {@code hashKey} from hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @return {#literal null} when key or hashKey does not exist or used in pipeline / transaction.
                         */
                        // @ts-ignore
                        get(key: H, hashKey: java.lang.Object | any): HV
                        /**
                         * Get values for given {@code hashKeys} from hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param hashKeys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        multiGet(key: H, hashKeys: java.util.Collection<HK> | Array<HK>): Array<HV>
                        /**
                         * Increment {@code value} of a hash {@code hashKey} by the given {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        increment(key: H, hashKey: HK, delta: number /*long*/): number
                        /**
                         * Increment {@code value} of a hash {@code hashKey} by the given {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        increment(key: H, hashKey: HK, delta: number /*double*/): number
                        /**
                         * Get key set (fields) of hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        keys(key: H): Array<HK>
                        /**
                         * Returns the length of the value associated with {@code hashKey}. If either the {@code key} or the {@code hashKey}
                         * do not exist, {@code 0} is returned.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         */
                        // @ts-ignore
                        lengthOfValue(key: H, hashKey: HK): number
                        /**
                         * Get size of hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        size(key: H): number
                        /**
                         * Set multiple hash fields to multiple values using data provided in {@code m}.
                         * @param key must not be {#literal null}.
                         * @param m must not be {#literal null}.
                         */
                        // @ts-ignore
                        putAll(key: H, m: java.util.Map<any, any>): void
                        /**
                         * Set the {@code value} of a hash {@code hashKey}.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @param value
                         */
                        // @ts-ignore
                        put(key: H, hashKey: HK, value: HV): void
                        /**
                         * Set the {@code value} of a hash {@code hashKey} only if {@code hashKey} does not exist.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        putIfAbsent(key: H, hashKey: HK, value: HV): java.lang.Boolean
                        /**
                         * Get entry set (values) of hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        values(key: H): Array<HV>
                        /**
                         * Get entire hash stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        entries(key: H): java.util.Map<HK, HV>
                        /**
                         * Use a {@link Cursor} to iterate over entries in hash at {@code key}. <br />
                         * <strong>Important:</strong> Call {@link Cursor#close()} when done to avoid resource leak.
                         * @param key must not be {#literal null}.
                         * @param options
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.4
                         */
                        // @ts-ignore
                        scan(key: H, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<java.util.Map.Entry<HK, HV>>
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
