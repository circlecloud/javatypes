declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis operations for simple (or in Redis terminology 'string') values.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @author Jiahe Cai
                     */
                    // @ts-ignore
                    interface ValueOperations<K, V> {
                        /**
                         * Set {@code value} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        set(key: K, value: V): void
                        /**
                         * Set the {@code value} and expiration {@code timeout} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param timeout the key expiration timeout.
                         * @param unit must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/setex">Redis Documentation: SETEX</a>
                         */
                        // @ts-ignore
                        set(key: K, value: V, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): void
                        /**
                         * Set the {@code value} and expiration {@code timeout} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param timeout must not be {#literal null}.
                         * @throws IllegalArgumentException if either {#code key}, {@code value} or {@code timeout} is not present.
                         * @see <a href="https://redis.io/commands/setex">Redis Documentation: SETEX</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        set(key: K, value: V, timeout: java.time.Duration): void
                        /**
                         * Set {@code key} to hold the string {@code value} if {@code key} is absent.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/setnx">Redis Documentation: SETNX</a>
                         */
                        // @ts-ignore
                        setIfAbsent(key: K, value: V): java.lang.Boolean
                        /**
                         * Set {@code key} to hold the string {@code value} and expiration {@code timeout} if {@code key} is absent.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param timeout the key expiration timeout.
                         * @param unit must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        setIfAbsent(key: K, value: V, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Boolean
                        /**
                         * Set {@code key} to hold the string {@code value} and expiration {@code timeout} if {@code key} is absent.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param timeout must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @throws IllegalArgumentException if either {#code key}, {@code value} or {@code timeout} is not present.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        setIfAbsent(key: K, value: V, timeout: java.time.Duration): java.lang.Boolean
                        /**
                         * Set {@code key} to hold the string {@code value} if {@code key} is present.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return command result indicating if the key has been set.
                         * @throws IllegalArgumentException if either {#code key} or {@code value} is not present.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        setIfPresent(key: K, value: V): java.lang.Boolean
                        /**
                         * Set {@code key} to hold the string {@code value} and expiration {@code timeout} if {@code key} is present.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param timeout the key expiration timeout.
                         * @param unit must not be {#literal null}.
                         * @return command result indicating if the key has been set.
                         * @throws IllegalArgumentException if either {#code key}, {@code value} or {@code timeout} is not present.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        setIfPresent(key: K, value: V, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Boolean
                        /**
                         * Set {@code key} to hold the string {@code value} and expiration {@code timeout} if {@code key} is present.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param timeout must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @throws IllegalArgumentException if either {#code key}, {@code value} or {@code timeout} is not present.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        setIfPresent(key: K, value: V, timeout: java.time.Duration): java.lang.Boolean
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@code tuple}.
                         * @param map must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/mset">Redis Documentation: MSET</a>
                         */
                        // @ts-ignore
                        multiSet(map: java.util.Map<any, any>): void
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@code tuple} only if the provided key does
                         * not exist.
                         * @param map must not be {#literal null}.
                         * @param {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/msetnx">Redis Documentation: MSETNX</a>
                         */
                        // @ts-ignore
                        multiSetIfAbsent(map: java.util.Map<any, any>): java.lang.Boolean
                        /**
                         * Get the value of {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/get">Redis Documentation: GET</a>
                         */
                        // @ts-ignore
                        get(key: java.lang.Object | any): V
                        /**
                         * Set {@code value} of {@code key} and return its old value.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/getset">Redis Documentation: GETSET</a>
                         */
                        // @ts-ignore
                        getAndSet(key: K, value: V): V
                        /**
                         * Get multiple {@code keys}. Values are returned in the order of the requested keys.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/mget">Redis Documentation: MGET</a>
                         */
                        // @ts-ignore
                        multiGet(keys: java.util.Collection<K> | Array<K>): Array<V>
                        /**
                         * Increment an integer value stored as string value under {@code key} by one.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/incr">Redis Documentation: INCR</a>
                         */
                        // @ts-ignore
                        increment(key: K): number
                        /**
                         * Increment an integer value stored as string value under {@code key} by {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/incrby">Redis Documentation: INCRBY</a>
                         */
                        // @ts-ignore
                        increment(key: K, delta: number /*long*/): number
                        /**
                         * Increment a floating point number value stored as string value under {@code key} by {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/incrbyfloat">Redis Documentation: INCRBYFLOAT</a>
                         */
                        // @ts-ignore
                        increment(key: K, delta: number /*double*/): number
                        /**
                         * Decrement an integer value stored as string value under {@code key} by one.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/decr">Redis Documentation: DECR</a>
                         */
                        // @ts-ignore
                        decrement(key: K): number
                        /**
                         * Decrement an integer value stored as string value under {@code key} by {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/decrby">Redis Documentation: DECRBY</a>
                         */
                        // @ts-ignore
                        decrement(key: K, delta: number /*long*/): number
                        /**
                         * Append a {@code value} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/append">Redis Documentation: APPEND</a>
                         */
                        // @ts-ignore
                        append(key: K, value: java.lang.String | string): number
                        /**
                         * Get a substring of value of {@code key} between {@code begin} and {@code end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/getrange">Redis Documentation: GETRANGE</a>
                         */
                        // @ts-ignore
                        get(key: K, start: number /*long*/, end: number /*long*/): string
                        /**
                         * Overwrite parts of {@code key} starting at the specified {@code offset} with given {@code value}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @param offset
                         * @see <a href="https://redis.io/commands/setrange">Redis Documentation: SETRANGE</a>
                         */
                        // @ts-ignore
                        set(key: K, value: V, offset: number /*long*/): void
                        /**
                         * Get the length of the value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/strlen">Redis Documentation: STRLEN</a>
                         */
                        // @ts-ignore
                        size(key: K): number
                        /**
                         * Sets the bit at {@code offset} in value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param offset
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/setbit">Redis Documentation: SETBIT</a>
                         */
                        // @ts-ignore
                        setBit(key: K, offset: number /*long*/, value: boolean): java.lang.Boolean
                        /**
                         * Get the bit value at {@code offset} of value at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param offset
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/setbit">Redis Documentation: GETBIT</a>
                         */
                        // @ts-ignore
                        getBit(key: K, offset: number /*long*/): java.lang.Boolean
                        /**
                         * Get / Manipulate specific integer fields of varying bit widths and arbitrary non (necessary) aligned offset stored
                         * at a given {@code key}.
                         * @param key must not be {#literal null}.
                         * @param subCommands must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/bitfield">Redis Documentation: BITFIELD</a>
                         */
                        // @ts-ignore
                        bitField(key: K, subCommands: org.springframework.data.redis.connection.BitFieldSubCommands): Array<java.lang.Long | number>
                        // @ts-ignore
                        getOperations(): org.springframework.data.redis.core.RedisOperations<K, V>
                    }
                }
            }
        }
    }
}
