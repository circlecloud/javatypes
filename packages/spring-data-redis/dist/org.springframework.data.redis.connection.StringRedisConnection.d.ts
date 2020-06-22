declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Convenience extension of {@link RedisConnection} that accepts and returns {@link String}s instead of byte arrays.
                     * Uses a {@link RedisSerializer} underneath to perform the conversion.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author David Liu
                     * @author Mark Paluch
                     * @author Ninad Divadkar
                     * @see RedisCallback
                     * @see RedisSerializer
                     * @see StringRedisTemplate
                     */
                    // @ts-ignore
                    interface StringRedisConnection extends org.springframework.data.redis.connection.RedisConnection {
                        /**
                         * 'Native' or 'raw' execution of the given command along-side the given arguments. The command is executed as is,
                         * with as little 'interpretation' as possible - it is up to the caller to take care of any processing of arguments or
                         * the result.
                         * @param command Command to execute
                         * @param args Possible command arguments (may be null)
                         * @return execution result.
                         * @see RedisCommands#execute(String, byte[]...)
                         */
                        // @ts-ignore
                        execute(command: java.lang.String | string, ...args: java.lang.String[] | string[]): any
                        /**
                         * 'Native' or 'raw' execution of the given command along-side the given arguments. The command is executed as is,
                         * with as little 'interpretation' as possible - it is up to the caller to take care of any processing of arguments or
                         * the result.
                         * @param command Command to execute
                         * @return execution result.
                         * @see RedisCommands#execute(String, byte[]...)
                         */
                        // @ts-ignore
                        execute(command: java.lang.String | string): any
                        /**
                         * Determine if given {@code key} exists.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/exists">Redis Documentation: EXISTS</a>
                         * @see RedisKeyCommands#exists(byte[])
                         */
                        // @ts-ignore
                        exists(key: java.lang.String | string): java.lang.Boolean
                        /**
                         * Count how many of the given {@code keys} exist.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/exists">Redis Documentation: EXISTS</a>
                         * @see RedisKeyCommands#exists(byte[][])
                         * @since 2.1
                         */
                        // @ts-ignore
                        exists(...keys: java.lang.String[] | string[]): number
                        /**
                         * Delete given {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return The number of keys that were removed.
                         * @see <a href="https://redis.io/commands/del">Redis Documentation: DEL</a>
                         * @see RedisKeyCommands#del(byte[]...)
                         */
                        // @ts-ignore
                        del(...keys: java.lang.String[] | string[]): number
                        /**
                         * Unlink the {@code keys} from the keyspace. Unlike with {@link #del(String...)} the actual memory reclaiming here
                         * happens asynchronously.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/unlink">Redis Documentation: UNLINK</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        unlink(...keys: java.lang.String[] | string[]): number
                        /**
                         * Determine the type stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/type">Redis Documentation: TYPE</a>
                         * @see RedisKeyCommands#type(byte[])
                         */
                        // @ts-ignore
                        type(key: java.lang.String | string): org.springframework.data.redis.connection.DataType
                        /**
                         * Alter the last access time of given {@code key(s)}.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/touch">Redis Documentation: TOUCH</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        touch(...keys: java.lang.String[] | string[]): number
                        /**
                         * Find all keys matching the given {@code pattern}.
                         * @param pattern must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/keys">Redis Documentation: KEYS</a>
                         * @see RedisKeyCommands#keys(byte[])
                         */
                        // @ts-ignore
                        keys(pattern: java.lang.String | string): Array<java.lang.String | string>
                        /**
                         * Rename key {@code oleName} to {@code newName}.
                         * @param oldName must not be {#literal null}.
                         * @param newName must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/rename">Redis Documentation: RENAME</a>
                         * @see RedisKeyCommands#rename(byte[], byte[])
                         */
                        // @ts-ignore
                        rename(oldName: java.lang.String | string, newName: java.lang.String | string): void
                        /**
                         * Rename key {@code oleName} to {@code newName} only if {@code newName} does not exist.
                         * @param oldName must not be {#literal null}.
                         * @param newName must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/renamenx">Redis Documentation: RENAMENX</a>
                         * @see RedisKeyCommands#renameNX(byte[], byte[])
                         */
                        // @ts-ignore
                        renameNX(oldName: java.lang.String | string, newName: java.lang.String | string): java.lang.Boolean
                        /**
                         * Set time to live for given {@code key} in seconds.
                         * @param key must not be {#literal null}.
                         * @param seconds
                         * @return 
                         * @see <a href="https://redis.io/commands/expire">Redis Documentation: EXPIRE</a>
                         * @see RedisKeyCommands#expire(byte[], long)
                         */
                        // @ts-ignore
                        expire(key: java.lang.String | string, seconds: number /*long*/): java.lang.Boolean
                        /**
                         * Set time to live for given {@code key} in milliseconds.
                         * @param key must not be {#literal null}.
                         * @param millis
                         * @return 
                         * @see <a href="https://redis.io/commands/pexpire">Redis Documentation: PEXPIRE</a>
                         * @see RedisKeyCommands#pExpire(byte[], long)
                         */
                        // @ts-ignore
                        pExpire(key: java.lang.String | string, millis: number /*long*/): java.lang.Boolean
                        /**
                         * Set the expiration for given {@code key} as a {@literal UNIX} timestamp.
                         * @param key must not be {#literal null}.
                         * @param unixTime
                         * @return 
                         * @see <a href="https://redis.io/commands/expireat">Redis Documentation: EXPIREAT</a>
                         * @see RedisKeyCommands#expireAt(byte[], long)
                         */
                        // @ts-ignore
                        expireAt(key: java.lang.String | string, unixTime: number /*long*/): java.lang.Boolean
                        /**
                         * Set the expiration for given {@code key} as a {@literal UNIX} timestamp in milliseconds.
                         * @param key must not be {#literal null}.
                         * @param unixTimeInMillis
                         * @return 
                         * @see <a href="https://redis.io/commands/pexpireat">Redis Documentation: PEXPIREAT</a>
                         * @see RedisKeyCommands#pExpireAt(byte[], long)
                         */
                        // @ts-ignore
                        pExpireAt(key: java.lang.String | string, unixTimeInMillis: number /*long*/): java.lang.Boolean
                        /**
                         * Remove the expiration from given {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/persist">Redis Documentation: PERSIST</a>
                         * @see RedisKeyCommands#persist(byte[])
                         */
                        // @ts-ignore
                        persist(key: java.lang.String | string): java.lang.Boolean
                        /**
                         * Move given {@code key} to database with {@code index}.
                         * @param key must not be {#literal null}.
                         * @param dbIndex
                         * @return 
                         * @see <a href="https://redis.io/commands/move">Redis Documentation: MOVE</a>
                         * @see RedisKeyCommands#move(byte[], int)
                         */
                        // @ts-ignore
                        move(key: java.lang.String | string, dbIndex: number /*int*/): java.lang.Boolean
                        /**
                         * Get the time to live for {@code key} in seconds.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/ttl">Redis Documentation: TTL</a>
                         * @see RedisKeyCommands#ttl(byte[])
                         */
                        // @ts-ignore
                        ttl(key: java.lang.String | string): number
                        /**
                         * Get the time to live for {@code key} in and convert it to the given {@link TimeUnit}.
                         * @param key must not be {#literal null}.
                         * @param timeUnit must not be {#literal null}.
                         * @return 
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/ttl">Redis Documentation: TTL</a>
                         * @see RedisKeyCommands#ttl(byte[], TimeUnit)
                         */
                        // @ts-ignore
                        ttl(key: java.lang.String | string, timeUnit: java.util.concurrent.TimeUnit): number
                        /**
                         * Get the precise time to live for {@code key} in milliseconds.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pttl">Redis Documentation: PTTL</a>
                         * @see RedisKeyCommands#pTtl(byte[])
                         */
                        // @ts-ignore
                        pTtl(key: java.lang.String | string): number
                        /**
                         * Get the precise time to live for {@code key} in and convert it to the given {@link TimeUnit}.
                         * @param key must not be {#literal null}.
                         * @param timeUnit must not be {#literal null}.
                         * @return 
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/pttl">Redis Documentation: PTTL</a>
                         * @see RedisKeyCommands#pTtl(byte[], TimeUnit)
                         */
                        // @ts-ignore
                        pTtl(key: java.lang.String | string, timeUnit: java.util.concurrent.TimeUnit): number
                        /**
                         * Returns {@code message} via server roundtrip.
                         * @param message the message to echo.
                         * @return 
                         * @see <a href="https://redis.io/commands/echo">Redis Documentation: ECHO</a>
                         * @see RedisConnectionCommands#echo(byte[])
                         */
                        // @ts-ignore
                        echo(message: java.lang.String | string): string
                        /**
                         * Sort the elements for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param params must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sort">Redis Documentation: SORT</a>
                         */
                        // @ts-ignore
                        sort(key: java.lang.String | string, params: org.springframework.data.redis.connection.SortParameters): Array<java.lang.String | string>
                        /**
                         * Sort the elements for {@code key} and store result in {@code storeKey}.
                         * @param key must not be {#literal null}.
                         * @param params must not be {#literal null}.
                         * @param storeKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sort">Redis Documentation: SORT</a>
                         */
                        // @ts-ignore
                        sort(key: java.lang.String | string, params: org.springframework.data.redis.connection.SortParameters, storeKey: java.lang.String | string): number
                        /**
                         * Get the type of internal representation used for storing the value at the given {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} if key does not exist or when used in pipeline / transaction.
                         * @throws IllegalArgumentException if {#code key} is {@literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        encodingOf(key: java.lang.String | string): org.springframework.data.redis.connection.ValueEncoding
                        /**
                         * Get the {@link Duration} since the object stored at the given {@code key} is idle.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} if key does not exist or when used in pipeline / transaction.
                         * @throws IllegalArgumentException if {#code key} is {@literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        idletime(key: java.lang.String | string): java.time.Duration
                        /**
                         * Get the number of references of the value associated with the specified {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} if key does not exist or when used in pipeline / transaction.
                         * @throws IllegalArgumentException if {#code key} is {@literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        refcount(key: java.lang.String | string): number
                        /**
                         * Get the value of {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/get">Redis Documentation: GET</a>
                         * @see RedisStringCommands#get(byte[])
                         */
                        // @ts-ignore
                        get(key: java.lang.String | string): string
                        /**
                         * Set {@code value} of {@code key} and return its old value.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/getset">Redis Documentation: GETSET</a>
                         * @see RedisStringCommands#getSet(byte[], byte[])
                         */
                        // @ts-ignore
                        getSet(key: java.lang.String | string, value: java.lang.String | string): string
                        /**
                         * Get multiple {@code keys}. Values are returned in the order of the requested keys.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/mget">Redis Documentation: MGET</a>
                         * @see RedisStringCommands#mGet(byte[]...)
                         */
                        // @ts-ignore
                        mGet(...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        /**
                         * Set {@code value} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         * @see RedisStringCommands#set(byte[], byte[])
                         */
                        // @ts-ignore
                        set(key: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        /**
                         * Set {@code value} for {@code key} applying timeouts from {@code expiration} if set and inserting/updating values
                         * depending on {@code option}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @param expiration can be {#literal null}. Defaulted to {@link Expiration#persistent()}.
                         * @param option can be {#literal null}. Defaulted to {@link SetOption#UPSERT}.
                         * @since 1.7
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         * @see RedisStringCommands#set(byte[], byte[], Expiration, SetOption)
                         */
                        // @ts-ignore
                        set(key: java.lang.String | string, value: java.lang.String | string, expiration: org.springframework.data.redis.core.types.Expiration, option: org.springframework.data.redis.connection.RedisStringCommands.SetOption): java.lang.Boolean
                        /**
                         * Set {@code value} for {@code key}, only if {@code key} does not exist.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/setnx">Redis Documentation: SETNX</a>
                         * @see RedisStringCommands#setNX(byte[], byte[])
                         */
                        // @ts-ignore
                        setNX(key: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        /**
                         * Set the {@code value} and expiration in {@code seconds} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param seconds
                         * @param value must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/setex">Redis Documentation: SETEX</a>
                         * @see RedisStringCommands#setEx(byte[], long, byte[])
                         */
                        // @ts-ignore
                        setEx(key: java.lang.String | string, seconds: number /*long*/, value: java.lang.String | string): java.lang.Boolean
                        /**
                         * Set the {@code value} and expiration in {@code milliseconds} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param milliseconds
                         * @param value must not be {#literal null}.
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/psetex">Redis Documentation: PSETEX</a>
                         * @see RedisStringCommands#pSetEx(byte[], long, byte[])
                         */
                        // @ts-ignore
                        pSetEx(key: java.lang.String | string, milliseconds: number /*long*/, value: java.lang.String | string): java.lang.Boolean
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@code tuple}.
                         * @param tuple must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/mset">Redis Documentation: MSET</a>
                         * @see RedisStringCommands#mSet(Map)
                         */
                        // @ts-ignore
                        mSetString(tuple: java.util.Map<java.lang.String | string, java.lang.String | string>): java.lang.Boolean
                        /**
                         * Set multiple keys to multiple values using key-value pairs provided in {@code tuple} only if the provided key does
                         * not exist.
                         * @param tuple must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/msetnx">Redis Documentation: MSETNX</a>
                         * @see RedisStringCommands#mSetNX(Map)
                         */
                        // @ts-ignore
                        mSetNXString(tuple: java.util.Map<java.lang.String | string, java.lang.String | string>): java.lang.Boolean
                        /**
                         * Increment an integer value stored as string value of {@code key} by 1.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/incr">Redis Documentation: INCR</a>
                         * @see RedisStringCommands#incr(byte[])
                         */
                        // @ts-ignore
                        incr(key: java.lang.String | string): number
                        /**
                         * Increment an integer value stored of {@code key} by {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/incrby">Redis Documentation: INCRBY</a>
                         * @see RedisStringCommands#incrBy(byte[], long)
                         */
                        // @ts-ignore
                        incrBy(key: java.lang.String | string, value: number /*long*/): number
                        /**
                         * Increment a floating point number value of {@code key} by {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/incrbyfloat">Redis Documentation: INCRBYFLOAT</a>
                         * @see RedisStringCommands#incrBy(byte[], double)
                         */
                        // @ts-ignore
                        incrBy(key: java.lang.String | string, value: number /*double*/): number
                        /**
                         * Decrement an integer value stored as string value of {@code key} by 1.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/decr">Redis Documentation: DECR</a>
                         * @see RedisStringCommands#decr(byte[])
                         */
                        // @ts-ignore
                        decr(key: java.lang.String | string): number
                        /**
                         * Decrement an integer value stored as string value of {@code key} by {@code value}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/decrby">Redis Documentation: DECRBY</a>
                         * @see RedisStringCommands#decrBy(byte[], long)
                         */
                        // @ts-ignore
                        decrBy(key: java.lang.String | string, value: number /*long*/): number
                        /**
                         * Append a {@code value} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/append">Redis Documentation: APPEND</a>
                         * @see RedisStringCommands#append(byte[], byte[])
                         */
                        // @ts-ignore
                        append(key: java.lang.String | string, value: java.lang.String | string): number
                        /**
                         * Get a substring of value of {@code key} between {@code start} and {@code end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/getrange">Redis Documentation: GETRANGE</a>
                         * @see RedisStringCommands#getRange(byte[], long, long)
                         */
                        // @ts-ignore
                        getRange(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): string
                        /**
                         * Overwrite parts of {@code key} starting at the specified {@code offset} with given {@code value}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @param offset
                         * @see <a href="https://redis.io/commands/setrange">Redis Documentation: SETRANGE</a>
                         * @see RedisStringCommands#setRange(byte[], byte[], long)
                         */
                        // @ts-ignore
                        setRange(key: java.lang.String | string, value: java.lang.String | string, offset: number /*long*/): void
                        /**
                         * Get the bit value at {@code offset} of value at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param offset
                         * @return 
                         * @see <a href="https://redis.io/commands/getbit">Redis Documentation: GETBIT</a>
                         * @see RedisStringCommands#getBit(byte[], long)
                         */
                        // @ts-ignore
                        getBit(key: java.lang.String | string, offset: number /*long*/): java.lang.Boolean
                        /**
                         * Sets the bit at {@code offset} in value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param offset
                         * @param value
                         * @return the original bit value stored at {#code offset}.
                         * @see <a href="https://redis.io/commands/setbit">Redis Documentation: SETBIT</a>
                         * @see RedisStringCommands#setBit(byte[], long, boolean)
                         */
                        // @ts-ignore
                        setBit(key: java.lang.String | string, offset: number /*long*/, value: boolean): java.lang.Boolean
                        /**
                         * Count the number of set bits (population counting) in value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/bitcount">Redis Documentation: BITCOUNT</a>
                         * @see RedisStringCommands#bitCount(byte[])
                         */
                        // @ts-ignore
                        bitCount(key: java.lang.String | string): number
                        /**
                         * Count the number of set bits (population counting) of value stored at {@code key} between {@code start} and
                         * {@code end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/bitcount">Redis Documentation: BITCOUNT</a>
                         * @see RedisStringCommands#bitCount(byte[], long, long)
                         */
                        // @ts-ignore
                        bitCount(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): number
                        /**
                         * Perform bitwise operations between strings.
                         * @param op must not be {#literal null}.
                         * @param destination must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/bitop">Redis Documentation: BITOP</a>
                         * @see RedisStringCommands#bitOp(BitOperation, byte[], byte[]...)
                         */
                        // @ts-ignore
                        bitOp(op: org.springframework.data.redis.connection.RedisStringCommands.BitOperation, destination: java.lang.String | string, ...keys: java.lang.String[] | string[]): number
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
                        bitPos(key: java.lang.String | string, bit: boolean): number
                        /**
                         * Return the position of the first bit set to given {@code bit} in a string.
                         * {@link org.springframework.data.domain.Range} start and end can contain negative values in order to index
                         * <strong>bytes</strong> starting from the end of the string, where {@literal -1} is the last byte, {@literal -2} is
                         * the penultimate.
                         * @param key the key holding the actual String.
                         * @param bit the bit value to look for.
                         * @param range must not be {#literal null}. Use {@link Range#unbounded()} to not limit search.
                         * @return {#literal null} when used in pipeline / transaction. The position of the first bit set to 1 or 0 according
                         *          to the request.
                         * @see <a href="https://redis.io/commands/bitpos">Redis Documentation: BITPOS</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        bitPos(key: java.lang.String | string, bit: boolean, range: object): number
                        /**
                         * Get the length of the value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/strlen">Redis Documentation: STRLEN</a>
                         * @see RedisStringCommands#strLen(byte[])
                         */
                        // @ts-ignore
                        strLen(key: java.lang.String | string): number
                        /**
                         * Append {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return 
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         * @see RedisListCommands#rPush(byte[], byte[]...)
                         */
                        // @ts-ignore
                        rPush(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        /**
                         * Prepend {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return 
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         * @see RedisListCommands#lPush(byte[], byte[]...)
                         */
                        // @ts-ignore
                        lPush(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        /**
                         * Append {@code values} to {@code key} only if the list exists.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/rpushx">Redis Documentation: RPUSHX</a>
                         * @see RedisListCommands#rPushX(byte[], byte[])
                         */
                        // @ts-ignore
                        rPushX(key: java.lang.String | string, value: java.lang.String | string): number
                        /**
                         * Prepend {@code values} to {@code key} only if the list exists.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/lpushx">Redis Documentation: LPUSHX</a>
                         * @see RedisListCommands#lPushX(byte[], byte[])
                         */
                        // @ts-ignore
                        lPushX(key: java.lang.String | string, value: java.lang.String | string): number
                        /**
                         * Get the size of list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/llen">Redis Documentation: LLEN</a>
                         * @see RedisListCommands#lLen(byte[])
                         */
                        // @ts-ignore
                        lLen(key: java.lang.String | string): number
                        /**
                         * Get elements between {@code start} and {@code end} from list at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/lrange">Redis Documentation: LRANGE</a>
                         * @see RedisListCommands#lRange(byte[], long, long)
                         */
                        // @ts-ignore
                        lRange(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): Array<java.lang.String | string>
                        /**
                         * Trim list at {@code key} to elements between {@code start} and {@code end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @see <a href="https://redis.io/commands/ltrim">Redis Documentation: LTRIM</a>
                         * @see RedisListCommands#lTrim(byte[], long, long)
                         */
                        // @ts-ignore
                        lTrim(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): void
                        /**
                         * Get element at {@code index} form list at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param index
                         * @return 
                         * @see <a href="https://redis.io/commands/lindex">Redis Documentation: LINDEX</a>
                         * @see RedisListCommands#lIndex(byte[], long)
                         */
                        // @ts-ignore
                        lIndex(key: java.lang.String | string, index: number /*long*/): string
                        /**
                         * Insert {@code value} {@link Position#BEFORE} or {@link Position#AFTER} existing {@code pivot} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param where must not be {#literal null}.
                         * @param pivot
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/linsert">Redis Documentation: LINSERT</a>
                         * @see RedisListCommands#lIndex(byte[], long)
                         */
                        // @ts-ignore
                        lInsert(key: java.lang.String | string, where: org.springframework.data.redis.connection.RedisListCommands.Position, pivot: java.lang.String | string, value: java.lang.String | string): number
                        /**
                         * Set the {@code value} list element at {@code index}.
                         * @param key must not be {#literal null}.
                         * @param index
                         * @param value
                         * @see <a href="https://redis.io/commands/lset">Redis Documentation: LSET</a>
                         * @see RedisListCommands#lSet(byte[], long, byte[])
                         */
                        // @ts-ignore
                        lSet(key: java.lang.String | string, index: number /*long*/, value: java.lang.String | string): void
                        /**
                         * Removes the first {@code count} occurrences of {@code value} from the list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/lrem">Redis Documentation: LREM</a>
                         * @see RedisListCommands#lRem(byte[], long, byte[])
                         */
                        // @ts-ignore
                        lRem(key: java.lang.String | string, count: number /*long*/, value: java.lang.String | string): number
                        /**
                         * Removes and returns first element in list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lpop">Redis Documentation: LPOP</a>
                         * @see RedisListCommands#lPop(byte[])
                         */
                        // @ts-ignore
                        lPop(key: java.lang.String | string): string
                        /**
                         * Removes and returns last element in list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/rpop">Redis Documentation: RPOP</a>
                         * @see RedisListCommands#rPop(byte[])
                         */
                        // @ts-ignore
                        rPop(key: java.lang.String | string): string
                        /**
                         * Removes and returns first element from lists stored at {@code keys} (see: {@link #lPop(byte[])}). <br>
                         * <b>Blocks connection</b> until element available or {@code timeout} reached.
                         * @param timeout
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/blpop">Redis Documentation: BLPOP</a>
                         * @see RedisListCommands#bLPop(int, byte[]...)
                         */
                        // @ts-ignore
                        bLPop(timeout: number /*int*/, ...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        /**
                         * Removes and returns last element from lists stored at {@code keys} (see: {@link #rPop(byte[])}). <br>
                         * <b>Blocks connection</b> until element available or {@code timeout} reached.
                         * @param timeout
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/brpop">Redis Documentation: BRPOP</a>
                         * @see RedisListCommands#bRPop(int, byte[]...)
                         */
                        // @ts-ignore
                        bRPop(timeout: number /*int*/, ...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        /**
                         * Remove the last element from list at {@code srcKey}, append it to {@code dstKey} and return its value.
                         * @param srcKey must not be {#literal null}.
                         * @param dstKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/rpoplpush">Redis Documentation: RPOPLPUSH</a>
                         * @see RedisListCommands#rPopLPush(byte[], byte[])
                         */
                        // @ts-ignore
                        rPopLPush(srcKey: java.lang.String | string, dstKey: java.lang.String | string): string
                        /**
                         * Remove the last element from list at {@code srcKey}, append it to {@code dstKey} and return its value (see
                         * {@link #rPopLPush(byte[], byte[])}). <br>
                         * <b>Blocks connection</b> until element available or {@code timeout} reached.
                         * @param timeout
                         * @param srcKey must not be {#literal null}.
                         * @param dstKey must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/brpoplpush">Redis Documentation: BRPOPLPUSH</a>
                         * @see RedisListCommands#bRPopLPush(int, byte[], byte[])
                         */
                        // @ts-ignore
                        bRPopLPush(timeout: number /*int*/, srcKey: java.lang.String | string, dstKey: java.lang.String | string): string
                        /**
                         * Add given {@code values} to set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return 
                         * @see <a href="https://redis.io/commands/sadd">Redis Documentation: SADD</a>
                         * @see RedisSetCommands#sAdd(byte[], byte[]...)
                         */
                        // @ts-ignore
                        sAdd(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        /**
                         * Remove given {@code values} from set at {@code key} and return the number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param values
                         * @return 
                         * @see <a href="https://redis.io/commands/srem">Redis Documentation: SREM</a>
                         * @see RedisSetCommands#sRem(byte[], byte[]...)
                         */
                        // @ts-ignore
                        sRem(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        /**
                         * Remove and return a random member from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         * @see RedisSetCommands#sPop(byte[])
                         */
                        // @ts-ignore
                        sPop(key: java.lang.String | string): string
                        /**
                         * Remove and return {@code count} random members from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count the number of random members to return.
                         * @return empty {#link List} if {@literal key} does not exist.
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         * @see RedisSetCommands#sPop(byte[], long)
                         * @since 2.0
                         */
                        // @ts-ignore
                        sPop(key: java.lang.String | string, count: number /*long*/): Array<java.lang.String | string>
                        /**
                         * Move {@code value} from {@code srcKey} to {@code destKey}
                         * @param srcKey must not be {#literal null}.
                         * @param destKey must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/smove">Redis Documentation: SMOVE</a>
                         * @see RedisSetCommands#sMove(byte[], byte[], byte[])
                         */
                        // @ts-ignore
                        sMove(srcKey: java.lang.String | string, destKey: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        /**
                         * Get size of set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/scard">Redis Documentation: SCARD</a>
                         * @see RedisSetCommands#sCard(byte[])
                         */
                        // @ts-ignore
                        sCard(key: java.lang.String | string): number
                        /**
                         * Check if set at {@code key} contains {@code value}.
                         * @param key must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/sismember">Redis Documentation: SISMEMBER</a>
                         * @see RedisSetCommands#sIsMember(byte[], byte[])
                         */
                        // @ts-ignore
                        sIsMember(key: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        /**
                         * Returns the members intersecting all given sets at {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sinter">Redis Documentation: SINTER</a>
                         * @see RedisSetCommands#sInter(byte[]...)
                         */
                        // @ts-ignore
                        sInter(...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        /**
                         * Intersect all given sets at {@code keys} and store result in {@code destKey}.
                         * @param destKey must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sinterstore">Redis Documentation: SINTERSTORE</a>
                         * @see RedisSetCommands#sInterStore(byte[], byte[]...)
                         */
                        // @ts-ignore
                        sInterStore(destKey: java.lang.String | string, ...keys: java.lang.String[] | string[]): number
                        /**
                         * Union all sets at given {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sunion">Redis Documentation: SUNION</a>
                         * @see RedisSetCommands#sUnion(byte[]...)
                         */
                        // @ts-ignore
                        sUnion(...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        /**
                         * Union all sets at given {@code keys} and store result in {@code destKey}.
                         * @param destKey must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sunionstore">Redis Documentation: SUNIONSTORE</a>
                         * @see RedisSetCommands#sUnionStore(byte[], byte[]...)
                         */
                        // @ts-ignore
                        sUnionStore(destKey: java.lang.String | string, ...keys: java.lang.String[] | string[]): number
                        /**
                         * Diff all sets for given {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sdiff">Redis Documentation: SDIFF</a>
                         * @see RedisSetCommands#sDiff(byte[]...)
                         */
                        // @ts-ignore
                        sDiff(...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        /**
                         * Diff all sets for given {@code keys} and store result in {@code destKey}.
                         * @param destKey must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sdiffstore">Redis Documentation: SDIFFSTORE</a>
                         * @see RedisSetCommands#sDiffStore(byte[], byte[]...)
                         */
                        // @ts-ignore
                        sDiffStore(destKey: java.lang.String | string, ...keys: java.lang.String[] | string[]): number
                        /**
                         * Get all elements of set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/smembers">Redis Documentation: SMEMBERS</a>
                         * @see RedisSetCommands#sMembers(byte[])
                         */
                        // @ts-ignore
                        sMembers(key: java.lang.String | string): Array<java.lang.String | string>
                        /**
                         * Get random element from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         * @see RedisSetCommands#sRandMember(byte[])
                         */
                        // @ts-ignore
                        sRandMember(key: java.lang.String | string): string
                        /**
                         * Get {@code count} random elements from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count
                         * @return 
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         * @see RedisSetCommands#sRem(byte[], byte[]...)
                         */
                        // @ts-ignore
                        sRandMember(key: java.lang.String | string, count: number /*long*/): Array<java.lang.String | string>
                        /**
                         * Use a {@link Cursor} to iterate over elements in set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}.
                         * @return 
                         * @since 1.4
                         * @see <a href="https://redis.io/commands/scan">Redis Documentation: SCAN</a>
                         * @see RedisSetCommands#sScan(byte[], ScanOptions)
                         */
                        // @ts-ignore
                        sScan(key: java.lang.String | string, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<java.lang.String | string>
                        /**
                         * Add {@code value} to a sorted set at {@code key}, or update its {@code score} if it already exists.
                         * @param key must not be {#literal null}.
                         * @param score the score.
                         * @param value the value.
                         * @return 
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         * @see RedisZSetCommands#zAdd(byte[], double, byte[])
                         */
                        // @ts-ignore
                        zAdd(key: java.lang.String | string, score: number /*double*/, value: java.lang.String | string): java.lang.Boolean
                        /**
                         * Add {@code tuples} to a sorted set at {@code key}, or update its {@code score} if it already exists.
                         * @param key must not be {#literal null}.
                         * @param tuples the tuples.
                         * @return 
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         * @see RedisZSetCommands#zAdd(byte[], Set)
                         */
                        // @ts-ignore
                        zAdd(key: java.lang.String | string, tuples: java.util.Set<org.springframework.data.redis.connection.StringRedisConnection.StringTuple> | Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>): number
                        /**
                         * Remove {@code values} from sorted set. Return number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrem">Redis Documentation: ZREM</a>
                         * @see RedisZSetCommands#zRem(byte[], byte[]...)
                         */
                        // @ts-ignore
                        zRem(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        /**
                         * Increment the score of element with {@code value} in sorted set by {@code increment}.
                         * @param key must not be {#literal null}.
                         * @param increment
                         * @param value the value.
                         * @return 
                         * @see <a href="https://redis.io/commands/zincrby">Redis Documentation: ZINCRBY</a>
                         * @see RedisZSetCommands#zIncrBy(byte[], double, byte[])
                         */
                        // @ts-ignore
                        zIncrBy(key: java.lang.String | string, increment: number /*double*/, value: java.lang.String | string): number
                        /**
                         * Determine the index of element with {@code value} in a sorted set.
                         * @param key must not be {#literal null}.
                         * @param value the value.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrank">Redis Documentation: ZRANK</a>
                         * @see RedisZSetCommands#zRank(byte[], byte[])
                         */
                        // @ts-ignore
                        zRank(key: java.lang.String | string, value: java.lang.String | string): number
                        /**
                         * Determine the index of element with {@code value} in a sorted set when scored high to low.
                         * @param key must not be {#literal null}.
                         * @param value the value.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrank">Redis Documentation: ZREVRANK</a>
                         * @see RedisZSetCommands#zRevRank(byte[], byte[])
                         */
                        // @ts-ignore
                        zRevRank(key: java.lang.String | string, value: java.lang.String | string): number
                        /**
                         * Get elements between {@code start} and {@code end} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         * @see RedisZSetCommands#zRange(byte[], long, long)
                         */
                        // @ts-ignore
                        zRange(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): Array<java.lang.String | string>
                        /**
                         * Get set of {@link Tuple}s between {@code start} and {@code end} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         * @see RedisZSetCommands#zRangeWithScores(byte[], long, long)
                         */
                        // @ts-ignore
                        zRangeWithScores(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         * @see RedisZSetCommands#zRangeByScore(byte[], double, double)
                         */
                        // @ts-ignore
                        zRangeByScore(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): Array<java.lang.String | string>
                        /**
                         * Get set of {@link Tuple}s where score is between {@code min} and {@code max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         * @see RedisZSetCommands#zRangeByScoreWithScores(byte[], double, double)
                         */
                        // @ts-ignore
                        zRangeByScoreWithScores(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        /**
                         * Get elements in range from {@code start} to {@code end} where score is between {@code min} and {@code max} from
                         * sorted set.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         * @see RedisZSetCommands#zRangeByScore(byte[], double, double, long, long)
                         */
                        // @ts-ignore
                        zRangeByScore(key: java.lang.String | string, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<java.lang.String | string>
                        /**
                         * Get set of {@link Tuple}s in range from {@code start} to {@code end} where score is between {@code min} and
                         * {@code max} from sorted set.
                         * @param key
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         * @see RedisZSetCommands#zRangeByScoreWithScores(byte[], double, double, long, long)
                         */
                        // @ts-ignore
                        zRangeByScoreWithScores(key: java.lang.String | string, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        /**
                         * Get elements in range from {@code start} to {@code end} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         * @see RedisZSetCommands#zRevRange(byte[], long, long)
                         */
                        // @ts-ignore
                        zRevRange(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): Array<java.lang.String | string>
                        /**
                         * Get set of {@link Tuple}s in range from {@code start} to {@code end} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         * @see RedisZSetCommands#zRevRangeWithScores(byte[], long, long)
                         */
                        // @ts-ignore
                        zRevRangeWithScores(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         * @see RedisZSetCommands#zRevRangeByScore(byte[], double, double)
                         */
                        // @ts-ignore
                        zRevRangeByScore(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): Array<java.lang.String | string>
                        /**
                         * Get set of {@link Tuple} where score is between {@code min} and {@code max} from sorted set ordered from high to
                         * low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         * @see RedisZSetCommands#zRevRangeByScoreWithScores(byte[], double, double)
                         */
                        // @ts-ignore
                        zRevRangeByScoreWithScores(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        /**
                         * Get elements in range from {@code start} to {@code end} where score is between {@code min} and {@code max} from
                         * sorted set ordered high -> low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         * @see RedisZSetCommands#zRevRangeByScore(byte[], double, double, long, long)
                         */
                        // @ts-ignore
                        zRevRangeByScore(key: java.lang.String | string, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<java.lang.String | string>
                        /**
                         * Get set of {@link Tuple} in range from {@code start} to {@code end} where score is between {@code min} and
                         * {@code max} from sorted set ordered high -> low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         * @see RedisZSetCommands#zRevRangeByScoreWithScores(byte[], double, double, long, long)
                         */
                        // @ts-ignore
                        zRevRangeByScoreWithScores(key: java.lang.String | string, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        /**
                         * Count number of elements within sorted set with scores between {@code min} and {@code max}.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return 
                         * @see <a href="https://redis.io/commands/zcount">Redis Documentation: ZCOUNT</a>
                         * @see RedisZSetCommands#zCount(byte[], double, double)
                         */
                        // @ts-ignore
                        zCount(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): number
                        /**
                         * Get the size of sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zcard">Redis Documentation: ZCARD</a>
                         * @see RedisZSetCommands#zCard(byte[])
                         */
                        // @ts-ignore
                        zCard(key: java.lang.String | string): number
                        /**
                         * Get the score of element with {@code value} from sorted set with key {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value the value.
                         * @return 
                         * @see <a href="https://redis.io/commands/zscore">Redis Documentation: ZSCORE</a>
                         * @see RedisZSetCommands#zScore(byte[], byte[])
                         */
                        // @ts-ignore
                        zScore(key: java.lang.String | string, value: java.lang.String | string): number
                        /**
                         * Remove elements in range between {@code start} and {@code end} from sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/zremrangebyrank">Redis Documentation: ZREMRANGEBYRANK</a>
                         * @see RedisZSetCommands#zRemRange(byte[], long, long)
                         */
                        // @ts-ignore
                        zRemRange(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): number
                        /**
                         * Remove elements with scores between {@code min} and {@code max} from sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return 
                         * @see <a href="https://redis.io/commands/zremrangebyscore">Redis Documentation: ZREMRANGEBYSCORE</a>
                         * @see RedisZSetCommands#zRemRangeByScore(byte[], double, double)
                         */
                        // @ts-ignore
                        zRemRangeByScore(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): number
                        /**
                         * Union sorted {@code sets} and store result in destination {@code key}.
                         * @param destKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         * @see RedisZSetCommands#zUnionStore(byte[], byte[]...)
                         */
                        // @ts-ignore
                        zUnionStore(destKey: java.lang.String | string, ...sets: java.lang.String[] | string[]): number
                        /**
                         * Union sorted {@code sets} and store result in destination {@code key}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights
                         * @param sets must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         * @see RedisZSetCommands#zUnionStore(byte[], Aggregate, int[], byte[]...)
                         */
                        // @ts-ignore
                        zUnionStore(destKey: java.lang.String | string, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: number /*int*/[], ...sets: java.lang.String[] | string[]): number
                        /**
                         * Intersect sorted {@code sets} and store result in destination {@code key}.
                         * @param destKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         * @see RedisZSetCommands#zInterStore(byte[], byte[]...)
                         */
                        // @ts-ignore
                        zInterStore(destKey: java.lang.String | string, ...sets: java.lang.String[] | string[]): number
                        /**
                         * Intersect sorted {@code sets} and store result in destination {@code key}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights
                         * @param sets must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         * @see RedisZSetCommands#zInterStore(byte[], Aggregate, int[], byte[]...)
                         */
                        // @ts-ignore
                        zInterStore(destKey: java.lang.String | string, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: number /*int*/[], ...sets: java.lang.String[] | string[]): number
                        /**
                         * Use a {@link Cursor} to iterate over elements in sorted set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}.
                         * @return 
                         * @since 1.4
                         * @see <a href="https://redis.io/commands/zscan">Redis Documentation: ZSCAN</a>
                         * @see RedisZSetCommands#zScan(byte[], ScanOptions)
                         */
                        // @ts-ignore
                        zScan(key: java.lang.String | string, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param min must not be {#literal null}.
                         * @param max must not be {#literal null}.
                         * @return 
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         * @see RedisZSetCommands#zRangeByScore(byte[], String, String)
                         */
                        // @ts-ignore
                        zRangeByScore(key: java.lang.String | string, min: java.lang.String | string, max: java.lang.String | string): Array<java.lang.String | string>
                        /**
                         * Get elements in range from {@code start} to {@code end} where score is between {@code min} and {@code max} from
                         * sorted set.
                         * @param key must not be {#literal null}.
                         * @param min must not be {#literal null}.
                         * @param max must not be {#literal null}.
                         * @param offset
                         * @param count
                         * @return 
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         * @see RedisZSetCommands#zRangeByScore(byte[], double, double, long, long)
                         */
                        // @ts-ignore
                        zRangeByScore(key: java.lang.String | string, min: java.lang.String | string, max: java.lang.String | string, offset: number /*long*/, count: number /*long*/): Array<java.lang.String | string>
                        /**
                         * Get all the elements in the sorted set at {@literal key} in lexicographical ordering.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         * @see RedisZSetCommands#zRangeByLex(byte[])
                         */
                        // @ts-ignore
                        zRangeByLex(key: java.lang.String | string): Array<java.lang.String | string>
                        /**
                         * Get all the elements in {@link Range} from the sorted set at {@literal key} in lexicographical ordering.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         * @see RedisZSetCommands#zRangeByLex(byte[], Range)
                         */
                        // @ts-ignore
                        zRangeByLex(key: java.lang.String | string, range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<java.lang.String | string>
                        /**
                         * Get all the elements in {@link Range} from the sorted set at {@literal key} in lexicographical ordering. Result is
                         * limited via {@link Limit}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param range can be {#literal null}.
                         * @return 
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         * @see RedisZSetCommands#zRangeByLex(byte[], Range, Limit)
                         */
                        // @ts-ignore
                        zRangeByLex(key: java.lang.String | string, range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<java.lang.String | string>
                        /**
                         * Set the {@code value} of a hash {@code field}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/hset">Redis Documentation: HSET</a>
                         * @see RedisHashCommands#hSet(byte[], byte[], byte[])
                         */
                        // @ts-ignore
                        hSet(key: java.lang.String | string, field: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        /**
                         * Set the {@code value} of a hash {@code field} only if {@code field} does not exist.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @param value
                         * @return 
                         * @see <a href="https://redis.io/commands/hsetnx">Redis Documentation: HSETNX</a>
                         * @see RedisHashCommands#hSetNX(byte[], byte[], byte[])
                         */
                        // @ts-ignore
                        hSetNX(key: java.lang.String | string, field: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        /**
                         * Get value for given {@code field} from hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hget">Redis Documentation: HGET</a>
                         * @see RedisHashCommands#hGet(byte[], byte[])
                         */
                        // @ts-ignore
                        hGet(key: java.lang.String | string, field: java.lang.String | string): string
                        /**
                         * Get values for given {@code fields} from hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param fields must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hmget">Redis Documentation: HMGET</a>
                         * @see RedisHashCommands#hMGet(byte[], byte[]...)
                         */
                        // @ts-ignore
                        hMGet(key: java.lang.String | string, ...fields: java.lang.String[] | string[]): Array<java.lang.String | string>
                        /**
                         * Set multiple hash fields to multiple values using data provided in {@code hashes}
                         * @param key must not be {#literal null}.
                         * @param hashes must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/hmset">Redis Documentation: HMSET</a>
                         * @see RedisHashCommands#hMGet(byte[], byte[]...)
                         */
                        // @ts-ignore
                        hMSet(key: java.lang.String | string, hashes: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                        /**
                         * Increment {@code value} of a hash {@code field} by the given {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @param delta
                         * @return 
                         * @see <a href="https://redis.io/commands/hincrby">Redis Documentation: HINCRBY</a>
                         * @see RedisHashCommands#hIncrBy(byte[], byte[], long)
                         */
                        // @ts-ignore
                        hIncrBy(key: java.lang.String | string, field: java.lang.String | string, delta: number /*long*/): number
                        /**
                         * Increment {@code value} of a hash {@code field} by the given {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param field
                         * @param delta
                         * @return 
                         * @see <a href="https://redis.io/commands/hincrbyfloat">Redis Documentation: HINCRBYFLOAT</a>
                         * @see RedisHashCommands#hIncrBy(byte[], byte[], double)
                         */
                        // @ts-ignore
                        hIncrBy(key: java.lang.String | string, field: java.lang.String | string, delta: number /*double*/): number
                        /**
                         * Determine if given hash {@code field} exists.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hexits">Redis Documentation: HEXISTS</a>
                         * @see RedisHashCommands#hExists(byte[], byte[])
                         */
                        // @ts-ignore
                        hExists(key: java.lang.String | string, field: java.lang.String | string): java.lang.Boolean
                        /**
                         * Delete given hash {@code fields}.
                         * @param key must not be {#literal null}.
                         * @param fields must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hdel">Redis Documentation: HDEL</a>
                         * @see RedisHashCommands#hDel(byte[], byte[]...)
                         */
                        // @ts-ignore
                        hDel(key: java.lang.String | string, ...fields: java.lang.String[] | string[]): number
                        /**
                         * Get size of hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hlen">Redis Documentation: HLEN</a>
                         * @see RedisHashCommands#hLen(byte[])
                         */
                        // @ts-ignore
                        hLen(key: java.lang.String | string): number
                        /**
                         * Get key set (fields) of hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hkeys">Redis Documentation: HKEYS</a>?
                         * @see RedisHashCommands#hKeys(byte[])
                         */
                        // @ts-ignore
                        hKeys(key: java.lang.String | string): Array<java.lang.String | string>
                        /**
                         * Get entry set (values) of hash at {@code field}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hvals">Redis Documentation: HVALS</a>
                         * @see RedisHashCommands#hVals(byte[])
                         */
                        // @ts-ignore
                        hVals(key: java.lang.String | string): Array<java.lang.String | string>
                        /**
                         * Get entire hash stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hgetall">Redis Documentation: HGETALL</a>
                         * @see RedisHashCommands#hGetAll(byte[])
                         */
                        // @ts-ignore
                        hGetAll(key: java.lang.String | string): java.util.Map<java.lang.String | string, java.lang.String | string>
                        /**
                         * Use a {@link Cursor} to iterate over entries in hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}.
                         * @return 
                         * @since 1.4
                         * @see <a href="https://redis.io/commands/hscan">Redis Documentation: HSCAN</a>
                         * @see RedisHashCommands#hScan(byte[], ScanOptions)
                         */
                        // @ts-ignore
                        hScan(key: java.lang.String | string, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<java.util.Map.Entry<java.lang.String | string, java.lang.String | string>>
                        /**
                         * Returns the length of the value associated with {@code field} in the hash stored at {@code key}. If the key or the
                         * field do not exist, {@code 0} is returned.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         */
                        // @ts-ignore
                        hStrLen(key: java.lang.String | string, field: java.lang.String | string): number
                        /**
                         * Adds given {@literal values} to the HyperLogLog stored at given {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/pfadd">Redis Documentation: PFADD</a>
                         * @see RedisHyperLogLogCommands#pfAdd(byte[], byte[]...)
                         */
                        // @ts-ignore
                        pfAdd(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        /**
                         * Return the approximated cardinality of the structures observed by the HyperLogLog at {@literal key(s)}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pfcount">Redis Documentation: PFCOUNT</a>
                         * @see RedisHyperLogLogCommands#pfCount(byte[]...)
                         */
                        // @ts-ignore
                        pfCount(...keys: java.lang.String[] | string[]): number
                        /**
                         * Merge N different HyperLogLogs at {@literal sourceKeys} into a single {@literal destinationKey}.
                         * @param destinationKey must not be {#literal null}.
                         * @param sourceKeys must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/pfmerge">Redis Documentation: PFMERGE</a>
                         * @see RedisHyperLogLogCommands#pfMerge(byte[], byte[]...)
                         */
                        // @ts-ignore
                        pfMerge(destinationKey: java.lang.String | string, ...sourceKeys: java.lang.String[] | string[]): void
                        /**
                         * Add {@link Point} with given member {@literal name} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param point must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return Number of elements added.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @see RedisGeoCommands#geoAdd(byte[], Point, byte[])
                         */
                        // @ts-ignore
                        geoAdd(key: java.lang.String | string, point: Point, member: java.lang.String | string): number
                        /**
                         * Add {@link GeoLocation} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param location must not be {#literal null}.
                         * @return Number of elements added.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @see RedisGeoCommands#geoAdd(byte[], GeoLocation)
                         */
                        // @ts-ignore
                        geoAdd(key: java.lang.String | string, location: org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<java.lang.String | string>): number
                        /**
                         * Add {@link Map} of member / {@link Point} pairs to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param memberCoordinateMap must not be {#literal null}.
                         * @return Number of elements added.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @see RedisGeoCommands#geoAdd(byte[], Map)
                         */
                        // @ts-ignore
                        geoAdd(key: java.lang.String | string, memberCoordinateMap: java.util.Map<java.lang.String | string, Point>): number
                        /**
                         * Add {@link GeoLocation}s to {@literal key}
                         * @param key must not be {#literal null}.
                         * @param locations must not be {#literal null}.
                         * @return Number of elements added.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @see RedisGeoCommands#geoAdd(byte[], Iterable)
                         */
                        // @ts-ignore
                        geoAdd(key: java.lang.String | string, locations: java.lang.Iterable<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<java.lang.String | string>>): number
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2}.
                         * @param key must not be {#literal null}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         * @see RedisGeoCommands#geoDist(byte[], byte[], byte[])
                         */
                        // @ts-ignore
                        geoDist(key: java.lang.String | string, member1: java.lang.String | string, member2: java.lang.String | string): Distance
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2} in the given {@link Metric}.
                         * @param key must not be {#literal null}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @param metric must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         * @see RedisGeoCommands#geoDist(byte[], byte[], byte[], Metric)
                         */
                        // @ts-ignore
                        geoDist(key: java.lang.String | string, member1: java.lang.String | string, member2: java.lang.String | string, metric: Metric): Distance
                        /**
                         * Get geohash representation of the position for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         * @see RedisGeoCommands#geoHash(byte[], byte[]...)
                         */
                        // @ts-ignore
                        geoHash(key: java.lang.String | string, ...members: java.lang.String[] | string[]): Array<java.lang.String | string>
                        /**
                         * Get the {@link Point} representation of positions for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         * @see RedisGeoCommands#geoPos(byte[], byte[]...)
                         */
                        // @ts-ignore
                        geoPos(key: java.lang.String | string, ...members: java.lang.String[] | string[]): Array<Point>
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle}.
                         * @param key must not be {#literal null}.
                         * @param within must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         * @see RedisGeoCommands#geoRadius(byte[], Circle)
                         */
                        // @ts-ignore
                        geoRadius(key: java.lang.String | string, within: Circle): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle} applying {@link GeoRadiusCommandArgs}.
                         * @param key must not be {#literal null}.
                         * @param within must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         * @see RedisGeoCommands#geoRadius(byte[], Circle, GeoRadiusCommandArgs)
                         */
                        // @ts-ignore
                        geoRadius(key: java.lang.String | string, within: Circle, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param radius
                         * @return never {#literal null}.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         * @see RedisGeoCommands#geoRadiusByMember(byte[], byte[], double)
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: java.lang.String | string, member: java.lang.String | string, radius: number /*double*/): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@link Distance}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param radius must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         * @see RedisGeoCommands#geoRadiusByMember(byte[], byte[], Distance)
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: java.lang.String | string, member: java.lang.String | string, radius: Distance): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@link Distance} and {@link GeoRadiusCommandArgs}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param radius must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         * @see RedisGeoCommands#geoRadiusByMember(byte[], byte[], Distance, GeoRadiusCommandArgs)
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: java.lang.String | string, member: java.lang.String | string, radius: Distance, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Remove the {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @since 1.8
                         * @return Number of members elements removed.
                         * @see <a href="https://redis.io/commands/zrem">Redis Documentation: ZREM</a>
                         * @see RedisGeoCommands#geoRemove(byte[], byte[]...)
                         */
                        // @ts-ignore
                        geoRemove(key: java.lang.String | string, ...members: java.lang.String[] | string[]): number
                        /**
                         * Publishes the given message to the given channel.
                         * @param channel the channel to publish to, must not be {#literal null}.
                         * @param message message to publish
                         * @return the number of clients that received the message
                         * @see <a href="https://redis.io/commands/publish">Redis Documentation: PUBLISH</a>
                         * @see RedisPubSubCommands#publish(byte[], byte[])
                         */
                        // @ts-ignore
                        publish(channel: java.lang.String | string, message: java.lang.String | string): number
                        /**
                         * Subscribes the connection to the given channels. Once subscribed, a connection enters listening mode and can only
                         * subscribe to other channels or unsubscribe. No other commands are accepted until the connection is unsubscribed.
                         * <p>
                         * Note that this operation is blocking and the current thread starts waiting for new messages immediately.
                         * @param listener message listener, must not be {#literal null}.
                         * @param channels channel names, must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/subscribe">Redis Documentation: SUBSCRIBE</a>
                         * @see RedisPubSubCommands#subscribe(MessageListener, byte[]...)
                         */
                        // @ts-ignore
                        subscribe(listener: org.springframework.data.redis.connection.MessageListener, ...channels: java.lang.String[] | string[]): void
                        /**
                         * Subscribes the connection to all channels matching the given patterns. Once subscribed, a connection enters
                         * listening mode and can only subscribe to other channels or unsubscribe. No other commands are accepted until the
                         * connection is unsubscribed.
                         * <p>
                         * Note that this operation is blocking and the current thread starts waiting for new messages immediately.
                         * @param listener message listener, must not be {#literal null}.
                         * @param patterns channel name patterns, must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/psubscribe">Redis Documentation: PSUBSCRIBE</a>
                         * @see RedisPubSubCommands#pSubscribe(MessageListener, byte[]...)
                         */
                        // @ts-ignore
                        pSubscribe(listener: org.springframework.data.redis.connection.MessageListener, ...patterns: java.lang.String[] | string[]): void
                        /**
                         * Load lua script into scripts cache, without executing it.<br>
                         * Execute the script by calling {@link #evalSha(byte[], ReturnType, int, byte[]...)}.
                         * @param script must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/script-load">Redis Documentation: SCRIPT LOAD</a>
                         * @see RedisScriptingCommands#scriptLoad(byte[])
                         */
                        // @ts-ignore
                        scriptLoad(script: java.lang.String | string): string
                        /**
                         * Evaluate given {@code script}.
                         * @param script must not be {#literal null}.
                         * @param returnType must not be {#literal null}.
                         * @param numKeys
                         * @param keysAndArgs must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/eval">Redis Documentation: EVAL</a>
                         * @see RedisScriptingCommands#eval(byte[], ReturnType, int, byte[]...)
                         */
                        // @ts-ignore
                        eval<T>(script: java.lang.String | string, returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: java.lang.String[] | string[]): T
                        /**
                         * Evaluate given {@code scriptSha}.
                         * @param scriptSha must not be {#literal null}.
                         * @param returnType must not be {#literal null}.
                         * @param numKeys
                         * @param keysAndArgs must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/evalsha">Redis Documentation: EVALSHA</a>
                         * @see RedisScriptingCommands#evalSha(String, ReturnType, int, byte[]...)
                         */
                        // @ts-ignore
                        evalSha<T>(scriptSha: java.lang.String | string, returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: java.lang.String[] | string[]): T
                        /**
                         * Assign given name to current connection.
                         * @param name
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/client-setname">Redis Documentation: CLIENT SETNAME</a>
                         * @see RedisServerCommands#setClientName(byte[])
                         */
                        // @ts-ignore
                        setClientName(name: java.lang.String | string): void
                        /**
                         * Request information and statistics about connected clients.
                         * @return {#link List} of {@link RedisClientInfo} objects.
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/client-list">Redis Documentation: CLIENT LIST</a>
                         * @see RedisServerCommands#getClientList()
                         */
                        // @ts-ignore
                        getClientList(): Array<org.springframework.data.redis.core.types.RedisClientInfo>
                        /**
                         * Get / Manipulate specific integer fields of varying bit widths and arbitrary non (necessary) aligned offset stored
                         * at a given {@code key}.
                         * @param key must not be {#literal null}.
                         * @param command must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        bitfield(key: java.lang.String | string, command: org.springframework.data.redis.connection.BitFieldSubCommands): Array<java.lang.Long | number>
                    }
                }
            }
        }
    }
}
