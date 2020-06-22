declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Value (or String in Redis terminology) operations bound to a certain key.
                     * @author Costin Leau
                     * @author Mark Paluch
                     * @author Jiahe Cai
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    interface BoundValueOperations<K, V> extends org.springframework.data.redis.core.BoundKeyOperations<K> {
                        /**
                         * Set {@code value} for the bound key.
                         * @param value must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        set(value: V): void
                        /**
                         * Set the {@code value} and expiration {@code timeout} for the bound key.
                         * @param value must not be {#literal null}.
                         * @param timeout
                         * @param unit must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/setex">Redis Documentation: SETEX</a>
                         */
                        // @ts-ignore
                        set(value: V, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): void
                        /**
                         * Set the {@code value} and expiration {@code timeout} for the bound key.
                         * @param value must not be {#literal null}.
                         * @param timeout must not be {#literal null}.
                         * @throws IllegalArgumentException if either {#code value} or {@code timeout} is not present.
                         * @see <a href="https://redis.io/commands/setex">Redis Documentation: SETEX</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        set(value: V, timeout: java.time.Duration): void
                        /**
                         * Set the bound key to hold the string {@code value} if the bound key is absent.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/setnx">Redis Documentation: SETNX</a>
                         */
                        // @ts-ignore
                        setIfAbsent(value: V): java.lang.Boolean
                        /**
                         * Set the bound key to hold the string {@code value} and expiration {@code timeout} if the bound key is absent.
                         * @param value must not be {#literal null}.
                         * @param timeout
                         * @param unit must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        setIfAbsent(value: V, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Boolean
                        /**
                         * Set bound key to hold the string {@code value} and expiration {@code timeout} if {@code key} is absent.
                         * @param value must not be {#literal null}.
                         * @param timeout must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @throws IllegalArgumentException if either {#code value} or {@code timeout} is not present.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        setIfAbsent(value: V, timeout: java.time.Duration): java.lang.Boolean
                        /**
                         * Set the bound key to hold the string {@code value} if {@code key} is present.
                         * @param value must not be {#literal null}.
                         * @return command result indicating if the key has been set.
                         * @throws IllegalArgumentException if {#code value} is not present.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        setIfPresent(value: V): java.lang.Boolean
                        /**
                         * Set the bound key to hold the string {@code value} and expiration {@code timeout} if {@code key} is present.
                         * @param value must not be {#literal null}.
                         * @param timeout the key expiration timeout.
                         * @param unit must not be {#literal null}.
                         * @return command result indicating if the key has been set.
                         * @throws IllegalArgumentException if either {#code value} or {@code timeout} is not present.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        setIfPresent(value: V, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Boolean
                        /**
                         * Set the bound key to hold the string {@code value} and expiration {@code timeout} if {@code key} is present.
                         * @param value must not be {#literal null}.
                         * @param timeout must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @throws IllegalArgumentException if either {#code value} or {@code timeout} is not present.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        setIfPresent(value: V, timeout: java.time.Duration): java.lang.Boolean
                        /**
                         * Get the value of the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/get">Redis Documentation: GET</a>
                         */
                        // @ts-ignore
                        get(): V
                        /**
                         * Set {@code value} of the bound key and return its old value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/getset">Redis Documentation: GETSET</a>
                         */
                        // @ts-ignore
                        getAndSet(value: V): V
                        /**
                         * Increment an integer value stored as string value under the bound key by one.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/incr">Redis Documentation: INCR</a>
                         */
                        // @ts-ignore
                        increment(): number
                        /**
                         * Increment an integer value stored as string value under the bound key by {@code delta}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/incrby">Redis Documentation: INCRBY</a>
                         */
                        // @ts-ignore
                        increment(delta: number /*long*/): number
                        /**
                         * Increment a floating point number value stored as string value under the bound key by {@code delta}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/incrbyfloat">Redis Documentation: INCRBYFLOAT</a>
                         */
                        // @ts-ignore
                        increment(delta: number /*double*/): number
                        /**
                         * Decrement an integer value stored as string value under the bound key by one.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/decr">Redis Documentation: DECR</a>
                         */
                        // @ts-ignore
                        decrement(): number
                        /**
                         * Decrement an integer value stored as string value under the bound key by {@code delta}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/decrby">Redis Documentation: DECRBY</a>
                         */
                        // @ts-ignore
                        decrement(delta: number /*long*/): number
                        /**
                         * Append a {@code value} to the bound key.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/append">Redis Documentation: APPEND</a>
                         */
                        // @ts-ignore
                        append(value: java.lang.String | string): number
                        /**
                         * Get a substring of value of the bound key between {@code begin} and {@code end}.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/getrange">Redis Documentation: GETRANGE</a>
                         */
                        // @ts-ignore
                        get(start: number /*long*/, end: number /*long*/): string
                        /**
                         * Overwrite parts of the bound key starting at the specified {@code offset} with given {@code value}.
                         * @param value must not be {#literal null}.
                         * @param offset
                         * @see <a href="https://redis.io/commands/setrange">Redis Documentation: SETRANGE</a>
                         */
                        // @ts-ignore
                        set(value: V, offset: number /*long*/): void
                        /**
                         * Get the length of the value stored at the bound key.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/strlen">Redis Documentation: STRLEN</a>
                         */
                        // @ts-ignore
                        size(): number
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
