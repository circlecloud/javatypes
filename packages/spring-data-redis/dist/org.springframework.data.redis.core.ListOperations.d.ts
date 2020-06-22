declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis list specific operations.
                     * @author Costin Leau
                     * @author David Liu
                     * @author Thomas Darimont
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface ListOperations<K, V> {
                        /**
                         * Get elements between {@code begin} and {@code end} from list at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lrange">Redis Documentation: LRANGE</a>
                         */
                        // @ts-ignore
                        range(key: K, start: number /*long*/, end: number /*long*/): Array<V>
                        /**
                         * Trim list at {@code key} to elements between {@code start} and {@code end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @see <a href="https://redis.io/commands/ltrim">Redis Documentation: LTRIM</a>
                         */
                        // @ts-ignore
                        trim(key: K, start: number /*long*/, end: number /*long*/): void
                        /**
                         * Get the size of list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/llen">Redis Documentation: LLEN</a>
                         */
                        // @ts-ignore
                        size(key: K): number
                        /**
                         * Prepend {@code value} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         */
                        // @ts-ignore
                        leftPush(key: K, value: V): number
                        /**
                         * Prepend {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         */
                        // @ts-ignore
                        leftPushAll(key: K, ...values: V[]): number
                        /**
                         * Prepend {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         */
                        // @ts-ignore
                        leftPushAll(key: K, values: java.util.Collection<V> | Array<V>): number
                        /**
                         * Prepend {@code values} to {@code key} only if the list exists.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpushx">Redis Documentation: LPUSHX</a>
                         */
                        // @ts-ignore
                        leftPushIfPresent(key: K, value: V): number
                        /**
                         * Insert {@code value} to {@code key} before {@code pivot}.
                         * @param key must not be {#literal null}.
                         * @param pivot must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/linsert">Redis Documentation: LINSERT</a>
                         */
                        // @ts-ignore
                        leftPush(key: K, pivot: V, value: V): number
                        /**
                         * Append {@code value} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        rightPush(key: K, value: V): number
                        /**
                         * Append {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        rightPushAll(key: K, ...values: V[]): number
                        /**
                         * Append {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        rightPushAll(key: K, values: java.util.Collection<V> | Array<V>): number
                        /**
                         * Append {@code values} to {@code key} only if the list exists.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/rpushx">Redis Documentation: RPUSHX</a>
                         */
                        // @ts-ignore
                        rightPushIfPresent(key: K, value: V): number
                        /**
                         * Insert {@code value} to {@code key} after {@code pivot}.
                         * @param key must not be {#literal null}.
                         * @param pivot must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/linsert">Redis Documentation: LINSERT</a>
                         */
                        // @ts-ignore
                        rightPush(key: K, pivot: V, value: V): number
                        /**
                         * Set the {@code value} list element at {@code index}.
                         * @param key must not be {#literal null}.
                         * @param index
                         * @param value
                         * @see <a href="https://redis.io/commands/lset">Redis Documentation: LSET</a>
                         */
                        // @ts-ignore
                        set(key: K, index: number /*long*/, value: V): void
                        /**
                         * Removes the first {@code count} occurrences of {@code value} from the list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lrem">Redis Documentation: LREM</a>
                         */
                        // @ts-ignore
                        remove(key: K, count: number /*long*/, value: java.lang.Object | any): number
                        /**
                         * Get element at {@code index} form list at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param index
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lindex">Redis Documentation: LINDEX</a>
                         */
                        // @ts-ignore
                        index(key: K, index: number /*long*/): V
                        /**
                         * Removes and returns first element in list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/lpop">Redis Documentation: LPOP</a>
                         */
                        // @ts-ignore
                        leftPop(key: K): V
                        /**
                         * Removes and returns first element from lists stored at {@code key} . <br>
                         * <b>Blocks connection</b> until element available or {@code timeout} reached.
                         * @param key must not be {#literal null}.
                         * @param timeout
                         * @param unit must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/blpop">Redis Documentation: BLPOP</a>
                         */
                        // @ts-ignore
                        leftPop(key: K, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): V
                        /**
                         * Removes and returns last element in list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/rpop">Redis Documentation: RPOP</a>
                         */
                        // @ts-ignore
                        rightPop(key: K): V
                        /**
                         * Removes and returns last element from lists stored at {@code key}. <br>
                         * <b>Blocks connection</b> until element available or {@code timeout} reached.
                         * @param key must not be {#literal null}.
                         * @param timeout
                         * @param unit must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/brpop">Redis Documentation: BRPOP</a>
                         */
                        // @ts-ignore
                        rightPop(key: K, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): V
                        /**
                         * Remove the last element from list at {@code sourceKey}, append it to {@code destinationKey} and return its value.
                         * @param sourceKey must not be {#literal null}.
                         * @param destinationKey must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/rpoplpush">Redis Documentation: RPOPLPUSH</a>
                         */
                        // @ts-ignore
                        rightPopAndLeftPush(sourceKey: K, destinationKey: K): V
                        /**
                         * Remove the last element from list at {@code srcKey}, append it to {@code dstKey} and return its value.<br>
                         * <b>Blocks connection</b> until element available or {@code timeout} reached.
                         * @param sourceKey must not be {#literal null}.
                         * @param destinationKey must not be {#literal null}.
                         * @param timeout
                         * @param unit must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/brpoplpush">Redis Documentation: BRPOPLPUSH</a>
                         */
                        // @ts-ignore
                        rightPopAndLeftPush(sourceKey: K, destinationKey: K, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): V
                        // @ts-ignore
                        getOperations(): org.springframework.data.redis.core.RedisOperations<K, V>
                    }
                }
            }
        }
    }
}
