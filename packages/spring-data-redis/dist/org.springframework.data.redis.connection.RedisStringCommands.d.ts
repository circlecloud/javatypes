declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * String/Value-specific commands supported by Redis.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisStringCommands {
                        /**
                         * Get the value of {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when key does not exist or used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/get">Redis Documentation: GET</a>
                         */
                        // @ts-ignore
                        get(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Set {@code value} of {@code key} and return its old value.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} if key did not exist before or when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/getset">Redis Documentation: GETSET</a>
                         */
                        // @ts-ignore
                        getSet(key: number /*byte*/[], value: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Get multiple {@code keys}. Values are returned in the order of the requested keys.
                         * @param keys must not be {#literal null}.
                         * @return empty {#link List} if keys do not exist or when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/mget">Redis Documentation: MGET</a>
                         */
                        // @ts-ignore
                        mGet(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * Set {@code value} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        set(key: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Set {@code value} for {@code key} applying timeouts from {@code expiration} if set and inserting/updating values
                         * depending on {@code option}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param expiration must not be {#literal null}. Use {@link Expiration#persistent()} to not set any ttl.
                         * @param option must not be {#literal null}. Use {@link SetOption#upsert()} to add non existing.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.7
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        set(key: number /*byte*/[], value: number /*byte*/[], expiration: org.springframework.data.redis.core.types.Expiration, option: org.springframework.data.redis.connection.RedisStringCommands.SetOption): java.lang.Boolean
                        /**
                         * Set {@code value} for {@code key}, only if {@code key} does not exist.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/setnx">Redis Documentation: SETNX</a>
                         */
                        // @ts-ignore
                        setNX(key: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Set the {@code value} and expiration in {@code seconds} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param seconds
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/setex">Redis Documentation: SETEX</a>
                         */
                        // @ts-ignore
                        setEx(key: number /*byte*/[], seconds: number /*long*/, value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Set the {@code value} and expiration in {@code milliseconds} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param milliseconds
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/psetex">Redis Documentation: PSETEX</a>
                         */
                        // @ts-ignore
                        pSetEx(key: number /*byte*/[], milliseconds: number /*long*/, value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@code tuple}.
                         * @param tuple must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/mset">Redis Documentation: MSET</a>
                         */
                        // @ts-ignore
                        mSet(tuple: java.util.Map<number /*byte*/[], number /*byte*/[]>): java.lang.Boolean
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@code tuple} only if the provided key does
                         * not exist.
                         * @param tuple must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/msetnx">Redis Documentation: MSETNX</a>
                         */
                        // @ts-ignore
                        mSetNX(tuple: java.util.Map<number /*byte*/[], number /*byte*/[]>): java.lang.Boolean
                        /**
                         * Increment an integer value stored as string value of {@code key} by 1.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/incr">Redis Documentation: INCR</a>
                         */
                        // @ts-ignore
                        incr(key: number /*byte*/[]): number
                        /**
                         * Increment an integer value stored of {@code key} by {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/incrby">Redis Documentation: INCRBY</a>
                         */
                        // @ts-ignore
                        incrBy(key: number /*byte*/[], value: number /*long*/): number
                        /**
                         * Increment a floating point number value of {@code key} by {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/incrbyfloat">Redis Documentation: INCRBYFLOAT</a>
                         */
                        // @ts-ignore
                        incrBy(key: number /*byte*/[], value: number /*double*/): number
                        /**
                         * Decrement an integer value stored as string value of {@code key} by 1.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/decr">Redis Documentation: DECR</a>
                         */
                        // @ts-ignore
                        decr(key: number /*byte*/[]): number
                        /**
                         * Decrement an integer value stored as string value of {@code key} by {@code value}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/decrby">Redis Documentation: DECRBY</a>
                         */
                        // @ts-ignore
                        decrBy(key: number /*byte*/[], value: number /*long*/): number
                        /**
                         * Append a {@code value} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/append">Redis Documentation: APPEND</a>
                         */
                        // @ts-ignore
                        append(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * Get a substring of value of {@code key} between {@code start} and {@code end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/getrange">Redis Documentation: GETRANGE</a>
                         */
                        // @ts-ignore
                        getRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): number /*byte*/[]
                        /**
                         * Overwrite parts of {@code key} starting at the specified {@code offset} with given {@code value}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @param offset
                         * @see <a href="https://redis.io/commands/setrange">Redis Documentation: SETRANGE</a>
                         */
                        // @ts-ignore
                        setRange(key: number /*byte*/[], value: number /*byte*/[], offset: number /*long*/): void
                        /**
                         * Get the bit value at {@code offset} of value at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param offset
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/getbit">Redis Documentation: GETBIT</a>
                         */
                        // @ts-ignore
                        getBit(key: number /*byte*/[], offset: number /*long*/): java.lang.Boolean
                        /**
                         * Sets the bit at {@code offset} in value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param offset
                         * @param value
                         * @return the original bit value stored at {#code offset} or {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/setbit">Redis Documentation: SETBIT</a>
                         */
                        // @ts-ignore
                        setBit(key: number /*byte*/[], offset: number /*long*/, value: boolean): java.lang.Boolean
                        /**
                         * Count the number of set bits (population counting) in value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/bitcount">Redis Documentation: BITCOUNT</a>
                         */
                        // @ts-ignore
                        bitCount(key: number /*byte*/[]): number
                        /**
                         * Count the number of set bits (population counting) of value stored at {@code key} between {@code start} and
                         * {@code end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/bitcount">Redis Documentation: BITCOUNT</a>
                         */
                        // @ts-ignore
                        bitCount(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): number
                        /**
                         * Get / Manipulate specific integer fields of varying bit widths and arbitrary non (necessary) aligned offset stored
                         * at a given {@code key}.
                         * @param key must not be {#literal null}.
                         * @param subCommands must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         */
                        // @ts-ignore
                        bitField(key: number /*byte*/[], subCommands: org.springframework.data.redis.connection.BitFieldSubCommands): Array<java.lang.Long | number>
                        /**
                         * Perform bitwise operations between strings.
                         * @param op must not be {#literal null}.
                         * @param destination must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/bitop">Redis Documentation: BITOP</a>
                         */
                        // @ts-ignore
                        bitOp(op: org.springframework.data.redis.connection.RedisStringCommands.BitOperation, destination: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        /**
                         * Return the position of the first bit set to given {@code bit} in a string.
                         * @param key the key holding the actual String.
                         * @param bit the bit value to look for.
                         * @return {#literal null} when used in pipeline / transaction. The position of the first bit set to 1 or 0 according
                         *          to the request.
                         * @see <a href="https://redis.io/commands/bitpos">Redis Documentation: BITPOS</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        bitPos(key: number /*byte*/[], bit: boolean): number
                        /**
                         * Return the position of the first bit set to given {@code bit} in a string. {@link Range} start and end can contain
                         * negative values in order to index <strong>bytes</strong> starting from the end of the string, where {@literal -1}
                         * is the last byte, {@literal -2} is the penultimate.
                         * @param key the key holding the actual String.
                         * @param bit the bit value to look for.
                         * @param range must not be {#literal null}. Use {@link Range#unbounded()} to not limit search.
                         * @return {#literal null} when used in pipeline / transaction. The position of the first bit set to 1 or 0 according
                         *          to the request.
                         * @see <a href="https://redis.io/commands/bitpos">Redis Documentation: BITPOS</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        bitPos(key: number /*byte*/[], bit: boolean, range: object): number
                        /**
                         * Get the length of the value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/strlen">Redis Documentation: STRLEN</a>
                         */
                        // @ts-ignore
                        strLen(key: number /*byte*/[]): number
                    }
                }
            }
        }
    }
}
