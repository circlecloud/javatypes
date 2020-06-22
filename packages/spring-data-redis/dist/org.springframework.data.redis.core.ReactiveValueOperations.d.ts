declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Reactive Redis operations for simple (or in Redis terminology 'string') values.
                     * @author Mark Paluch
                     * @author Jiahe Cai
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveValueOperations<K, V> {
                        /**
                         * Set {@code value} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        set(key: K, value: V): object
                        /**
                         * Set the {@code value} and expiration {@code timeout} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @param timeout must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/setex">Redis Documentation: SETEX</a>
                         */
                        // @ts-ignore
                        set(key: K, value: V, timeout: java.time.Duration): object
                        /**
                         * Set {@code key} to hold the string {@code value} if {@code key} is absent.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @see <a href="https://redis.io/commands/setnx">Redis Documentation: SETNX</a>
                         */
                        // @ts-ignore
                        setIfAbsent(key: K, value: V): object
                        /**
                         * Set {@code key} to hold the string {@code value} and expiration {@code timeout} if {@code key} is absent.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @param timeout must not be {#literal null}.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        setIfAbsent(key: K, value: V, timeout: java.time.Duration): object
                        /**
                         * Set {@code key} to hold the string {@code value} if {@code key} is present.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        setIfPresent(key: K, value: V): object
                        /**
                         * Set {@code key} to hold the string {@code value} and expiration {@code timeout} if {@code key} is present.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @param timeout must not be {#literal null}.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        setIfPresent(key: K, value: V, timeout: java.time.Duration): object
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@code tuple}.
                         * @param map must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/mset">Redis Documentation: MSET</a>
                         */
                        // @ts-ignore
                        multiSet(map: java.util.Map<any, any>): object
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@code tuple} only if the provided key does
                         * not exist.
                         * @param map must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/msetnx">Redis Documentation: MSETNX</a>
                         */
                        // @ts-ignore
                        multiSetIfAbsent(map: java.util.Map<any, any>): object
                        /**
                         * Get the value of {@code key}.
                         * @param key must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/get">Redis Documentation: GET</a>
                         */
                        // @ts-ignore
                        get(key: java.lang.Object | any): object
                        /**
                         * Set {@code value} of {@code key} and return its old value.
                         * @param key must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/getset">Redis Documentation: GETSET</a>
                         */
                        // @ts-ignore
                        getAndSet(key: K, value: V): object
                        /**
                         * Get multiple {@code keys}. Values are returned in the order of the requested keys.
                         * @param keys must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/mget">Redis Documentation: MGET</a>
                         */
                        // @ts-ignore
                        multiGet(keys: java.util.Collection<K> | Array<K>): object
                        /**
                         * Increments the number stored at {@code key} by one.
                         * @param key must not be {#literal null}.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/incr">Redis Documentation: INCR</a>
                         */
                        // @ts-ignore
                        increment(key: K): object
                        /**
                         * Increments the number stored at {@code key} by {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param delta
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/incrby">Redis Documentation: INCRBY</a>
                         */
                        // @ts-ignore
                        increment(key: K, delta: number /*long*/): object
                        /**
                         * Increment the string representing a floating point number stored at {@code key} by {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param delta
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/incrbyfloat">Redis Documentation: INCRBYFLOAT</a>
                         */
                        // @ts-ignore
                        increment(key: K, delta: number /*double*/): object
                        /**
                         * Decrements the number stored at {@code key} by one.
                         * @param key must not be {#literal null}.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/decr">Redis Documentation: DECR</a>
                         */
                        // @ts-ignore
                        decrement(key: K): object
                        /**
                         * Decrements the number stored at {@code key} by {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param delta
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/decrby">Redis Documentation: DECRBY</a>
                         */
                        // @ts-ignore
                        decrement(key: K, delta: number /*long*/): object
                        /**
                         * Append a {@code value} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @see <a href="https://redis.io/commands/append">Redis Documentation: APPEND</a>
                         */
                        // @ts-ignore
                        append(key: K, value: java.lang.String | string): object
                        /**
                         * Get a substring of value of {@code key} between {@code begin} and {@code end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @see <a href="https://redis.io/commands/getrange">Redis Documentation: GETRANGE</a>
                         */
                        // @ts-ignore
                        get(key: K, start: number /*long*/, end: number /*long*/): object
                        /**
                         * Overwrite parts of {@code key} starting at the specified {@code offset} with given {@code value}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @param offset
                         * @see <a href="https://redis.io/commands/setrange">Redis Documentation: SETRANGE</a>
                         */
                        // @ts-ignore
                        set(key: K, value: V, offset: number /*long*/): object
                        /**
                         * Get the length of the value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/strlen">Redis Documentation: STRLEN</a>
                         */
                        // @ts-ignore
                        size(key: K): object
                        /**
                         * Sets the bit at {@code offset} in value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param offset
                         * @param value
                         * @see <a href="https://redis.io/commands/setbit">Redis Documentation: SETBIT</a>
                         */
                        // @ts-ignore
                        setBit(key: K, offset: number /*long*/, value: boolean): object
                        /**
                         * « Get the bit value at {@code offset} of value at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param offset
                         * @see <a href="https://redis.io/commands/getbit">Redis Documentation: GETBIT</a>
                         */
                        // @ts-ignore
                        getBit(key: K, offset: number /*long*/): object
                        /**
                         * Get / Manipulate specific integer fields of varying bit widths and arbitrary non (necessary) aligned offset stored
                         * at a given {@code key}.
                         * @param key must not be {#literal null}.
                         * @param command must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         */
                        // @ts-ignore
                        bitField(key: K, command: org.springframework.data.redis.connection.BitFieldSubCommands): object
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
