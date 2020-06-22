declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis list specific operations.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @see <a href="https://redis.io/commands#list">Redis Documentation: List Commands</a>
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveListOperations<K, V> {
                        /**
                         * Get elements between {@code begin} and {@code end} from list at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/lrange">Redis Documentation: LRANGE</a>
                         */
                        // @ts-ignore
                        range(key: K, start: number /*long*/, end: number /*long*/): object
                        /**
                         * Trim list at {@code key} to elements between {@code start} and {@code end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @see <a href="https://redis.io/commands/ltrim">Redis Documentation: LTRIM</a>
                         */
                        // @ts-ignore
                        trim(key: K, start: number /*long*/, end: number /*long*/): object
                        /**
                         * Get the size of list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/llen">Redis Documentation: LLEN</a>
                         */
                        // @ts-ignore
                        size(key: K): object
                        /**
                         * Prepend {@code value} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         */
                        // @ts-ignore
                        leftPush(key: K, value: V): object
                        /**
                         * Prepend {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return 
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         */
                        // @ts-ignore
                        leftPushAll(key: K, ...values: V[]): object
                        /**
                         * Prepend {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         */
                        // @ts-ignore
                        leftPushAll(key: K, values: java.util.Collection<V> | Array<V>): object
                        /**
                         * Prepend {@code values} to {@code key} only if the list exists.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/lpushx">Redis Documentation: LPUSHX</a>
                         */
                        // @ts-ignore
                        leftPushIfPresent(key: K, value: V): object
                        /**
                         * Insert {@code value} to {@code key} before {@code pivot}.
                         * @param key must not be {#literal null}.
                         * @param pivot must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/linsert">Redis Documentation: LINSERT</a>
                         */
                        // @ts-ignore
                        leftPush(key: K, pivot: V, value: V): object
                        /**
                         * Append {@code value} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        rightPush(key: K, value: V): object
                        /**
                         * Append {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return 
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        rightPushAll(key: K, ...values: V[]): object
                        /**
                         * Append {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return 
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        rightPushAll(key: K, values: java.util.Collection<V> | Array<V>): object
                        /**
                         * Append {@code values} to {@code key} only if the list exists.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/rpushx">Redis Documentation: RPUSHX</a>
                         */
                        // @ts-ignore
                        rightPushIfPresent(key: K, value: V): object
                        /**
                         * Insert {@code value} to {@code key} after {@code pivot}.
                         * @param key must not be {#literal null}.
                         * @param pivot must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/linsert">Redis Documentation: LINSERT</a>
                         */
                        // @ts-ignore
                        rightPush(key: K, pivot: V, value: V): object
                        /**
                         * Set the {@code value} list element at {@code index}.
                         * @param key must not be {#literal null}.
                         * @param index
                         * @param value
                         * @see <a href="https://redis.io/commands/lset">Redis Documentation: LSET</a>
                         */
                        // @ts-ignore
                        set(key: K, index: number /*long*/, value: V): object
                        /**
                         * Removes the first {@code count} occurrences of {@code value} from the list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/lrem">Redis Documentation: LREM</a>
                         */
                        // @ts-ignore
                        remove(key: K, count: number /*long*/, value: java.lang.Object | any): object
                        /**
                         * Get element at {@code index} form list at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param index
                         * @return 
                         * @see <a href="https://redis.io/commands/lindex">Redis Documentation: LINDEX</a>
                         */
                        // @ts-ignore
                        index(key: K, index: number /*long*/): object
                        /**
                         * Removes and returns first element in list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lpop">Redis Documentation: LPOP</a>
                         */
                        // @ts-ignore
                        leftPop(key: K): object
                        /**
                         * Removes and returns first element from lists stored at {@code key}. <br>
                         * <b>Results return once an element available or {@code timeout} reached.</b>
                         * @param key must not be {#literal null}.
                         * @param timeout maximal duration to wait until an entry in the list at {#code key} is available. Must be either
                         *           {@link Duration#ZERO} or greater {@link 1 second}, must not be {@literal null}. A timeout of zero can be
                         *           used to wait indefinitely. Durations between zero and one second are not supported.
                         * @return 
                         * @see <a href="https://redis.io/commands/blpop">Redis Documentation: BLPOP</a>
                         */
                        // @ts-ignore
                        leftPop(key: K, timeout: java.time.Duration): object
                        /**
                         * Removes and returns last element in list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/rpop">Redis Documentation: RPOP</a>
                         */
                        // @ts-ignore
                        rightPop(key: K): object
                        /**
                         * Removes and returns last element from lists stored at {@code key}. <br>
                         * <b>Results return once an element available or {@code timeout} reached.</b>
                         * @param key must not be {#literal null}.
                         * @param timeout maximal duration to wait until an entry in the list at {#code key} is available. Must be either
                         *           {@link Duration#ZERO} or greater {@link 1 second}, must not be {@literal null}. A timeout of zero can be
                         *           used to wait indefinitely. Durations between zero and one second are not supported.
                         * @return 
                         * @see <a href="https://redis.io/commands/brpop">Redis Documentation: BRPOP</a>
                         */
                        // @ts-ignore
                        rightPop(key: K, timeout: java.time.Duration): object
                        /**
                         * Remove the last element from list at {@code sourceKey}, append it to {@code destinationKey} and return its value.
                         * @param sourceKey must not be {#literal null}.
                         * @param destinationKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/rpoplpush">Redis Documentation: RPOPLPUSH</a>
                         */
                        // @ts-ignore
                        rightPopAndLeftPush(sourceKey: K, destinationKey: K): object
                        /**
                         * Remove the last element from list at {@code srcKey}, append it to {@code dstKey} and return its value.<br>
                         * <b>Results return once an element available or {@code timeout} reached.</b>
                         * @param sourceKey must not be {#literal null}.
                         * @param destinationKey must not be {#literal null}.
                         * @param timeout maximal duration to wait until an entry in the list at {#code sourceKey} is available. Must be
                         *           either {@link Duration#ZERO} or greater {@link 1 second}, must not be {@literal null}. A timeout of zero
                         *           can be used to wait indefinitely. Durations between zero and one second are not supported.
                         * @return 
                         * @see <a href="https://redis.io/commands/brpoplpush">Redis Documentation: BRPOPLPUSH</a>
                         */
                        // @ts-ignore
                        rightPopAndLeftPush(sourceKey: K, destinationKey: K, timeout: java.time.Duration): object
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
