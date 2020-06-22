declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis String commands executed using reactive infrastructure.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveStringCommands {
                        /**
                         * Set {@literal value} for {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        set(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Set {@literal value} for {@literal key} with {@literal expiration} and {@literal options}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param expiration must not be {#literal null}.
                         * @param option must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        set(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer, expiration: org.springframework.data.redis.core.types.Expiration, option: org.springframework.data.redis.connection.RedisStringCommands.SetOption): object
                        /**
                         * Set each and every item separately by invoking {@link SetCommand}.
                         * @param commands must not be {#literal null}.
                         * @return {#link Flux} of {@link BooleanResponse} holding the {@link SetCommand} along with the command result.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        set(commands: object): object
                        /**
                         * Get single element stored at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return {#link Mono#empty()} in case {@literal key} does not exist.
                         * @see <a href="https://redis.io/commands/get">Redis Documentation: GET</a>
                         */
                        // @ts-ignore
                        get(key: java.nio.ByteBuffer): object
                        /**
                         * Get elements one by one.
                         * @param keys must not be {#literal null}.
                         * @return {#link Flux} of {@link ByteBufferResponse} holding the {@literal key} to get along with the value
                         *          retrieved.
                         * @see <a href="https://redis.io/commands/get">Redis Documentation: GET</a>
                         */
                        // @ts-ignore
                        get(keys: object): object
                        /**
                         * Set {@literal value} for {@literal key} and return the existing value.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#link Mono#empty()} if key did not exist.
                         * @see <a href="https://redis.io/commands/getset">Redis Documentation: GETSET</a>
                         */
                        // @ts-ignore
                        getSet(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Set {@literal value} for {@literal key} and return the existing value one by one.
                         * @param commands must not be {#literal null}.
                         * @return {#link Flux} of {@link ByteBufferResponse} holding the {@link SetCommand} along with the previously
                         *          existing value.
                         * @see <a href="https://redis.io/commands/getset">Redis Documentation: GETSET</a>
                         */
                        // @ts-ignore
                        getSet(commands: object): object
                        /**
                         * Get multiple values in one batch.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/mget">Redis Documentation: MGET</a>
                         */
                        // @ts-ignore
                        mGet(keys: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Get multiple values at for {@literal keysets} in batches.
                         * @param keysets must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/mget">Redis Documentation: MGET</a>
                         */
                        // @ts-ignore
                        mGet(keysets: object): object
                        /**
                         * Set {@literal value} for {@literal key}, only if {@literal key} does not exist.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/setnx">Redis Documentation: SETNX</a>
                         */
                        // @ts-ignore
                        setNX(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Set {@literal key value} pairs, only if {@literal key} does not exist.
                         * @param values must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/setnx">Redis Documentation: SETNX</a>
                         */
                        // @ts-ignore
                        setNX(values: object): object
                        /**
                         * Set {@literal key value} pair and {@link Expiration}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param expireTimeout must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/setex">Redis Documentation: SETEX</a>
                         */
                        // @ts-ignore
                        setEX(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer, expireTimeout: org.springframework.data.redis.core.types.Expiration): object
                        /**
                         * Set {@literal key value} pairs and {@link Expiration}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/setex">Redis Documentation: SETEX</a>
                         */
                        // @ts-ignore
                        setEX(commands: object): object
                        /**
                         * Set {@literal key value} pair and {@link Expiration}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param expireTimeout must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/psetex">Redis Documentation: PSETEX</a>
                         */
                        // @ts-ignore
                        pSetEX(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer, expireTimeout: org.springframework.data.redis.core.types.Expiration): object
                        /**
                         * Set {@literal key value} pairs and {@link Expiration}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/psetex">Redis Documentation: PSETEX</a>
                         */
                        // @ts-ignore
                        pSetEX(commands: object): object
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@literal tuple}.
                         * @param keyValuePairs must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/mset">Redis Documentation: MSET</a>
                         */
                        // @ts-ignore
                        mSet(keyValuePairs: java.util.Map<java.nio.ByteBuffer, java.nio.ByteBuffer>): object
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@literal commands}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/mset">Redis Documentation: MSET</a>
                         */
                        // @ts-ignore
                        mSet(commands: object): object
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@literal keyValuePairs} only if the
                         * provided key does not exist.
                         * @param keyValuePairs must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/msetnx">Redis Documentation: MSETNX</a>
                         */
                        // @ts-ignore
                        mSetNX(keyValuePairs: java.util.Map<java.nio.ByteBuffer, java.nio.ByteBuffer>): object
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@literal tuples} only if the provided key
                         * does not exist.
                         * @param source must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/msetnx">Redis Documentation: MSETNX</a>
                         */
                        // @ts-ignore
                        mSetNX(source: object): object
                        /**
                         * Append a {@literal value} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/append">Redis Documentation: APPEND</a>
                         */
                        // @ts-ignore
                        append(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Append a {@link AppendCommand#getValue()} to the {@link AppendCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/append">Redis Documentation: APPEND</a>
                         */
                        // @ts-ignore
                        append(commands: object): object
                        /**
                         * Get a substring of value of {@literal key} between {@literal start} and {@literal end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/getrange">Redis Documentation: GETRANGE</a>
                         */
                        // @ts-ignore
                        getRange(key: java.nio.ByteBuffer, start: number /*long*/, end: number /*long*/): object
                        /**
                         * Get a substring of value of {@literal key} between {@literal start} and {@literal end}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/getrange">Redis Documentation: GETRANGE</a>
                         */
                        // @ts-ignore
                        getRange(commands: object): object
                        /**
                         * Overwrite parts of {@literal key} starting at the specified {@literal offset} with given {@literal value}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param offset
                         * @return 
                         * @see <a href="https://redis.io/commands/setrange">Redis Documentation: SETRANGE</a>
                         */
                        // @ts-ignore
                        setRange(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer, offset: number /*long*/): object
                        /**
                         * Overwrite parts of {@link SetRangeCommand#key} starting at the specified {@literal offset} with given
                         * {@link SetRangeCommand#value}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/setrange">Redis Documentation: SETRANGE</a>
                         */
                        // @ts-ignore
                        setRange(commands: object): object
                        /**
                         * Get the bit value at {@literal offset} of value at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param offset
                         * @return 
                         * @see <a href="https://redis.io/commands/getbit">Redis Documentation: GETBIT</a>
                         */
                        // @ts-ignore
                        getBit(key: java.nio.ByteBuffer, offset: number /*long*/): object
                        /**
                         * Get the bit value at {@literal offset} of value at {@literal key}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/getbit">Redis Documentation: GETBIT</a>
                         */
                        // @ts-ignore
                        getBit(commands: object): object
                        /**
                         * Sets the bit at {@literal offset} in value stored at {@literal key} and return the original value.
                         * @param key must not be {#literal null}.
                         * @param offset
                         * @param value
                         * @return 
                         */
                        // @ts-ignore
                        setBit(key: java.nio.ByteBuffer, offset: number /*long*/, value: boolean): object
                        /**
                         * Sets the bit at {@literal offset} in value stored at {@literal key} and return the original value.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/setbit">Redis Documentation: SETBIT</a>
                         */
                        // @ts-ignore
                        setBit(commands: object): object
                        /**
                         * Count the number of set bits (population counting) in value stored at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/bitcount">Redis Documentation: BITCOUNT</a>
                         */
                        // @ts-ignore
                        bitCount(key: java.nio.ByteBuffer): object
                        /**
                         * Count the number of set bits (population counting) of value stored at {@literal key} between {@literal start} and
                         * {@literal end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/bitcount">Redis Documentation: BITCOUNT</a>
                         */
                        // @ts-ignore
                        bitCount(key: java.nio.ByteBuffer, start: number /*long*/, end: number /*long*/): object
                        /**
                         * Count the number of set bits (population counting) of value stored at {@literal key} between {@literal start} and
                         * {@literal end}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/bitcount">Redis Documentation: BITCOUNT</a>
                         */
                        // @ts-ignore
                        bitCount(commands: object): object
                        /**
                         * Get / Manipulate specific integer fields of varying bit widths and arbitrary non (necessary) aligned offset stored
                         * at a given {@code key}.
                         * @param key must not be {#literal null}.
                         * @param subCommands
                         * @return 
                         * @see <a href="https://redis.io/commands/bitfield">Redis Documentation: BITFIELD</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        bitField(key: java.nio.ByteBuffer, subCommands: org.springframework.data.redis.connection.BitFieldSubCommands): object
                        /**
                         * Get / Manipulate specific integer fields of varying bit widths and arbitrary non (necessary) aligned offset stored
                         * at a given {@code key}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/bitfield">Redis Documentation: BITFIELD</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        bitField(commands: object): object
                        /**
                         * Perform bitwise operations between strings.
                         * @param keys must not be {#literal null}.
                         * @param bitOp must not be {#literal null}.
                         * @param destination must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/bitop">Redis Documentation: BITOP</a>
                         */
                        // @ts-ignore
                        bitOp(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>, bitOp: org.springframework.data.redis.connection.RedisStringCommands.BitOperation, destination: java.nio.ByteBuffer): object
                        /**
                         * Perform bitwise operations between strings.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/bitop">Redis Documentation: BITOP</a>
                         */
                        // @ts-ignore
                        bitOp(commands: object): object
                        /**
                         * Return the position of the first bit set to given {@code bit} in a string.
                         * @param key the key holding the actual String.
                         * @param bit the bit value to look for.
                         * @return {#link Mono} emitting result when ready.
                         * @since 2.1
                         */
                        // @ts-ignore
                        bitPos(key: java.nio.ByteBuffer, bit: boolean): object
                        /**
                         * Return the position of the first bit set to given {@code bit} in a string. {@link Range} start and end can contain
                         * negative values in order to index <strong>bytes</strong> starting from the end of the string, where {@literal -1}
                         * is the last byte, {@literal -2} is the penultimate.
                         * @param key the key holding the actual String.
                         * @param bit the bit value to look for.
                         * @param range must not be {#literal null}. Use {@link Range#unbounded()} to not limit search.
                         * @return {#link Mono} emitting result when ready.
                         * @since 2.1
                         */
                        // @ts-ignore
                        bitPos(key: java.nio.ByteBuffer, bit: boolean, range: object): object
                        /**
                         * Emmit the the position of the first bit set to given {@code bit} in a string. Get the length of the value stored at
                         * {@literal key}.
                         * @param commands must not be {#literal null}.
                         * @return {#link Flux} emitting results when ready.
                         * @since 2.1
                         */
                        // @ts-ignore
                        bitPos(commands: object): object
                        /**
                         * Get the length of the value stored at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/strlen">Redis Documentation: STRLEN</a>
                         */
                        // @ts-ignore
                        strLen(key: java.nio.ByteBuffer): object
                        /**
                         * Get the length of the value stored at {@literal key}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/strlen">Redis Documentation: STRLEN</a>
                         */
                        // @ts-ignore
                        strLen(keys: object): object
                    }
                }
            }
        }
    }
}
