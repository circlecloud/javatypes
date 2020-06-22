declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis map specific operations working on a hash.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveHashOperations<H, HK, HV> {
                        /**
                         * Delete given hash {@code hashKeys} from the hash at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param hashKeys must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        remove(key: H, ...hashKeys: java.lang.Object[] | any[]): object
                        /**
                         * Determine if given hash {@code hashKey} exists.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        hasKey(key: H, hashKey: java.lang.Object | any): object
                        /**
                         * Get value for given {@code hashKey} from hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        get(key: H, hashKey: java.lang.Object | any): object
                        /**
                         * Get values for given {@code hashKeys} from hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param hashKeys must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        multiGet(key: H, hashKeys: java.util.Collection<HK> | Array<HK>): object
                        /**
                         * Increment {@code value} of a hash {@code hashKey} by the given {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @param delta
                         * @return 
                         */
                        // @ts-ignore
                        increment(key: H, hashKey: HK, delta: number /*long*/): object
                        /**
                         * Increment {@code value} of a hash {@code hashKey} by the given {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @param delta
                         * @return 
                         */
                        // @ts-ignore
                        increment(key: H, hashKey: HK, delta: number /*double*/): object
                        /**
                         * Get key set (fields) of hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        keys(key: H): object
                        /**
                         * Get size of hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        size(key: H): object
                        /**
                         * Set multiple hash fields to multiple values using data provided in {@code m}.
                         * @param key must not be {#literal null}.
                         * @param map must not be {#literal null}.
                         */
                        // @ts-ignore
                        putAll(key: H, map: java.util.Map<any, any>): object
                        /**
                         * Set the {@code value} of a hash {@code hashKey}.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @param value
                         */
                        // @ts-ignore
                        put(key: H, hashKey: HK, value: HV): object
                        /**
                         * Set the {@code value} of a hash {@code hashKey} only if {@code hashKey} does not exist.
                         * @param key must not be {#literal null}.
                         * @param hashKey must not be {#literal null}.
                         * @param value
                         * @return 
                         */
                        // @ts-ignore
                        putIfAbsent(key: H, hashKey: HK, value: HV): object
                        /**
                         * Get entry set (values) of hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        values(key: H): object
                        /**
                         * Get entire hash stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        entries(key: H): object
                        /**
                         * Use a {@link Flux} to iterate over entries in the hash at {@code key}. The resulting {@link Flux} acts as a cursor
                         * and issues {@code HSCAN} commands itself as long as the subscriber signals demand.
                         * @param key must not be {#literal null}.
                         * @return the {#link Flux} emitting the {@link java.util.Map.Entry entries} on by one or an {@link Flux#empty() empty
                         *          flux} if the key does not exist.
                         * @throws IllegalArgumentException when the given {#code key} is {@literal null}.
                         * @see <a href="https://redis.io/commands/hscan">Redis Documentation: HSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        scan(key: H): object
                        /**
                         * Use a {@link Flux} to iterate over entries in the hash at {@code key} given {@link ScanOptions}. The resulting
                         * {@link Flux} acts as a cursor and issues {@code HSCAN} commands itself as long as the subscriber signals demand.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}. Use {@link ScanOptions#NONE} instead.
                         * @return the {#link Flux} emitting the {@link java.util.Map.Entry entries} on by one or an {@link Flux#empty() empty
                         *          flux} if the key does not exist.
                         * @throws IllegalArgumentException when one of the required arguments is {#literal null}.
                         * @see <a href="https://redis.io/commands/hscan">Redis Documentation: HSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        scan(key: H, options: org.springframework.data.redis.core.ScanOptions): object
                        /**
                         * Removes the given {@literal key}.
                         * @param key must not be {#literal null}.
                         */
                        // @ts-ignore
                        delete(key: H): object
                    }
                }
            }
        }
    }
}
