declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * List operations bound to a certain key.
                     * @author Costin Leau
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface BoundListOperations<K, V> extends org.springframework.data.redis.core.BoundKeyOperations<K> {
                        /**
                         * Get elements between {@code begin} and {@code end} from list at the bound key.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lrange">Redis Documentation: LRANGE</a>
                         */
                        // @ts-ignore
                        range(start: number /*long*/, end: number /*long*/): Array<V>
                        /**
                         * Trim list at the bound key to elements between {@code start} and {@code end}.
                         * @param start
                         * @param end
                         * @see <a href="https://redis.io/commands/ltrim">Redis Documentation: LTRIM</a>
                         */
                        // @ts-ignore
                        trim(start: number /*long*/, end: number /*long*/): void
                        /**
                         * Get the size of list stored at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/llen">Redis Documentation: LLEN</a>
                         */
                        // @ts-ignore
                        size(): number
                        /**
                         * Prepend {@code value} to the bound key.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         */
                        // @ts-ignore
                        leftPush(value: V): number
                        /**
                         * Prepend {@code values} to the bound key.
                         * @param values
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         */
                        // @ts-ignore
                        leftPushAll(...values: V[]): number
                        /**
                         * Prepend {@code values} to the bound key only if the list exists.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpushx">Redis Documentation: LPUSHX</a>
                         */
                        // @ts-ignore
                        leftPushIfPresent(value: V): number
                        /**
                         * Prepend {@code values} to the bound key before {@code value}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         */
                        // @ts-ignore
                        leftPush(pivot: V, value: V): number
                        /**
                         * Append {@code value} to the bound key.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        rightPush(value: V): number
                        /**
                         * Append {@code values} to the bound key.
                         * @param values
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        rightPushAll(...values: V[]): number
                        /**
                         * Append {@code values} to the bound key only if the list exists.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/rpushx">Redis Documentation: RPUSHX</a>
                         */
                        // @ts-ignore
                        rightPushIfPresent(value: V): number
                        /**
                         * Append {@code values} to the bound key before {@code value}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        rightPush(pivot: V, value: V): number
                        /**
                         * Set the {@code value} list element at {@code index}.
                         * @param index
                         * @param value
                         * @see <a href="https://redis.io/commands/lset">Redis Documentation: LSET</a>
                         */
                        // @ts-ignore
                        set(index: number /*long*/, value: V): void
                        /**
                         * Removes the first {@code count} occurrences of {@code value} from the list stored at the bound key.
                         * @param count
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lrem">Redis Documentation: LREM</a>
                         */
                        // @ts-ignore
                        remove(count: number /*long*/, value: java.lang.Object | any): number
                        /**
                         * Get element at {@code index} form list at the bound key.
                         * @param index
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lindex">Redis Documentation: LINDEX</a>
                         */
                        // @ts-ignore
                        index(index: number /*long*/): V
                        /**
                         * Removes and returns first element in list stored at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpop">Redis Documentation: LPOP</a>
                         */
                        // @ts-ignore
                        leftPop(): V
                        /**
                         * Removes and returns first element from lists stored at the bound key . <br>
                         * <b>Blocks connection</b> until element available or {@code timeout} reached.
                         * @param timeout
                         * @param unit must not be {#literal null}.
                         * @return {#literal null} when timeout reached or used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/blpop">Redis Documentation: BLPOP</a>
                         */
                        // @ts-ignore
                        leftPop(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): V
                        /**
                         * Removes and returns last element in list stored at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/rpop">Redis Documentation: RPOP</a>
                         */
                        // @ts-ignore
                        rightPop(): V
                        /**
                         * Removes and returns last element from lists stored at the bound key. <br>
                         * <b>Blocks connection</b> until element available or {@code timeout} reached.
                         * @param timeout
                         * @param unit must not be {#literal null}.
                         * @return {#literal null} when timeout reached or used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/brpop">Redis Documentation: BRPOP</a>
                         */
                        // @ts-ignore
                        rightPop(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): V
                        // @ts-ignore
                        getOperations(): org.springframework.data.redis.core.RedisOperations<K, V>
                    }
                }
            }
        }
    }
}
