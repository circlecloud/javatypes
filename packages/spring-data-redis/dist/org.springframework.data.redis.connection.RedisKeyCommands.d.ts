declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Key-specific commands supported by Redis.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisKeyCommands {
                        /**
                         * Determine if given {@code key} exists.
                         * @param key must not be {#literal null}.
                         * @return {#literal true} if key exists. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/exists">Redis Documentation: EXISTS</a>
                         */
                        // @ts-ignore
                        exists(key: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Count how many of the given {@code keys} exist. Providing the very same {@code key} more than once also counts
                         * multiple times.
                         * @param keys must not be {#literal null}.
                         * @return the number of keys existing among the ones specified as arguments. {#literal null} when used in pipeline /
                         *          transaction.
                         * @since 2.1
                         */
                        // @ts-ignore
                        exists(...keys: number /*byte*/[][]): number
                        /**
                         * Delete given {@code keys}.
                         * @param keys must not be {#literal null}.
                         * @return The number of keys that were removed. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/del">Redis Documentation: DEL</a>
                         */
                        // @ts-ignore
                        del(...keys: number /*byte*/[][]): number
                        /**
                         * Unlink the {@code keys} from the keyspace. Unlike with {@link #del(byte[]...)} the actual memory reclaiming here
                         * happens asynchronously.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/unlink">Redis Documentation: UNLINK</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        unlink(...keys: number /*byte*/[][]): number
                        /**
                         * Determine the type stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/type">Redis Documentation: TYPE</a>
                         */
                        // @ts-ignore
                        type(key: number /*byte*/[]): org.springframework.data.redis.connection.DataType
                        /**
                         * Alter the last access time of given {@code key(s)}.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/touch">Redis Documentation: TOUCH</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        touch(...keys: number /*byte*/[][]): number
                        /**
                         * Find all keys matching the given {@code pattern}.
                         * @param pattern must not be {#literal null}.
                         * @return empty {#link Set} if no match found. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/keys">Redis Documentation: KEYS</a>
                         */
                        // @ts-ignore
                        keys(pattern: number /*byte*/[]): Array<number /*byte*/[]>
                        /**
                         * Use a {@link Cursor} to iterate over keys.
                         * @param options must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 1.4
                         * @see <a href="https://redis.io/commands/scan">Redis Documentation: SCAN</a>
                         */
                        // @ts-ignore
                        scan(options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<number /*byte*/[]>
                        /**
                         * Return a random key from the keyspace.
                         * @return {#literal null} if no keys available or when used in pipeline or transaction.
                         * @see <a href="https://redis.io/commands/randomkey">Redis Documentation: RANDOMKEY</a>
                         */
                        // @ts-ignore
                        randomKey(): number /*byte*/[]
                        /**
                         * Rename key {@code sourceKey} to {@code targetKey}.
                         * @param sourceKey must not be {#literal null}.
                         * @param targetKey must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/rename">Redis Documentation: RENAME</a>
                         */
                        // @ts-ignore
                        rename(sourceKey: number /*byte*/[], targetKey: number /*byte*/[]): void
                        /**
                         * Rename key {@code sourceKey} to {@code targetKey} only if {@code targetKey} does not exist.
                         * @param sourceKey must not be {#literal null}.
                         * @param targetKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/renamenx">Redis Documentation: RENAMENX</a>
                         */
                        // @ts-ignore
                        renameNX(sourceKey: number /*byte*/[], targetKey: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Set time to live for given {@code key} in seconds.
                         * @param key must not be {#literal null}.
                         * @param seconds
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/expire">Redis Documentation: EXPIRE</a>
                         */
                        // @ts-ignore
                        expire(key: number /*byte*/[], seconds: number /*long*/): java.lang.Boolean
                        /**
                         * Set time to live for given {@code key} in milliseconds.
                         * @param key must not be {#literal null}.
                         * @param millis
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/pexpire">Redis Documentation: PEXPIRE</a>
                         */
                        // @ts-ignore
                        pExpire(key: number /*byte*/[], millis: number /*long*/): java.lang.Boolean
                        /**
                         * Set the expiration for given {@code key} as a {@literal UNIX} timestamp.
                         * @param key must not be {#literal null}.
                         * @param unixTime
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/expireat">Redis Documentation: EXPIREAT</a>
                         */
                        // @ts-ignore
                        expireAt(key: number /*byte*/[], unixTime: number /*long*/): java.lang.Boolean
                        /**
                         * Set the expiration for given {@code key} as a {@literal UNIX} timestamp in milliseconds.
                         * @param key must not be {#literal null}.
                         * @param unixTimeInMillis
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/pexpireat">Redis Documentation: PEXPIREAT</a>
                         */
                        // @ts-ignore
                        pExpireAt(key: number /*byte*/[], unixTimeInMillis: number /*long*/): java.lang.Boolean
                        /**
                         * Remove the expiration from given {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/persist">Redis Documentation: PERSIST</a>
                         */
                        // @ts-ignore
                        persist(key: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Move given {@code key} to database with {@code index}.
                         * @param key must not be {#literal null}.
                         * @param dbIndex
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/move">Redis Documentation: MOVE</a>
                         */
                        // @ts-ignore
                        move(key: number /*byte*/[], dbIndex: number /*int*/): java.lang.Boolean
                        /**
                         * Get the time to live for {@code key} in seconds.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/ttl">Redis Documentation: TTL</a>
                         */
                        // @ts-ignore
                        ttl(key: number /*byte*/[]): number
                        /**
                         * Get the time to live for {@code key} in and convert it to the given {@link TimeUnit}.
                         * @param key must not be {#literal null}.
                         * @param timeUnit must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/ttl">Redis Documentation: TTL</a>
                         */
                        // @ts-ignore
                        ttl(key: number /*byte*/[], timeUnit: java.util.concurrent.TimeUnit): number
                        /**
                         * Get the precise time to live for {@code key} in milliseconds.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/pttl">Redis Documentation: PTTL</a>
                         */
                        // @ts-ignore
                        pTtl(key: number /*byte*/[]): number
                        /**
                         * Get the precise time to live for {@code key} in and convert it to the given {@link TimeUnit}.
                         * @param key must not be {#literal null}.
                         * @param timeUnit must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.8
                         * @see <a href="https://redis.io/commands/pttl">Redis Documentation: PTTL</a>
                         */
                        // @ts-ignore
                        pTtl(key: number /*byte*/[], timeUnit: java.util.concurrent.TimeUnit): number
                        /**
                         * Sort the elements for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param params must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sort">Redis Documentation: SORT</a>
                         */
                        // @ts-ignore
                        sort(key: number /*byte*/[], params: org.springframework.data.redis.connection.SortParameters): Array<number /*byte*/[]>
                        /**
                         * Sort the elements for {@code key} and store result in {@code storeKey}.
                         * @param key must not be {#literal null}.
                         * @param params must not be {#literal null}.
                         * @param storeKey must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/sort">Redis Documentation: SORT</a>
                         */
                        // @ts-ignore
                        sort(key: number /*byte*/[], params: org.springframework.data.redis.connection.SortParameters, storeKey: number /*byte*/[]): number
                        /**
                         * Retrieve serialized version of the value stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} if key does not exist or when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/dump">Redis Documentation: DUMP</a>
                         */
                        // @ts-ignore
                        dump(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Create {@code key} using the {@code serializedValue}, previously obtained using {@link #dump(byte[])}.
                         * @param key must not be {#literal null}.
                         * @param ttlInMillis
                         * @param serializedValue must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/restore">Redis Documentation: RESTORE</a>
                         */
                        // @ts-ignore
                        restore(key: number /*byte*/[], ttlInMillis: number /*long*/, serializedValue: number /*byte*/[]): void
                        /**
                         * Create {@code key} using the {@code serializedValue}, previously obtained using {@link #dump(byte[])}.
                         * @param key must not be {#literal null}.
                         * @param ttlInMillis
                         * @param serializedValue must not be {#literal null}.
                         * @param replace use {#literal true} to replace a potentially existing value instead of erroring.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/restore">Redis Documentation: RESTORE</a>
                         */
                        // @ts-ignore
                        restore(key: number /*byte*/[], ttlInMillis: number /*long*/, serializedValue: number /*byte*/[], replace: boolean): void
                        /**
                         * Get the type of internal representation used for storing the value at the given {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#link org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding#VACANT} if key does not
                         *          exist or {@literal null} when used in pipeline / transaction.
                         * @throws IllegalArgumentException if {#code key} is {@literal null}.
                         * @see <a href="https://redis.io/commands/object">Redis Documentation: OBJECT ENCODING</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        encodingOf(key: number /*byte*/[]): org.springframework.data.redis.connection.ValueEncoding
                        /**
                         * Get the {@link Duration} since the object stored at the given {@code key} is idle.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} if key does not exist or when used in pipeline / transaction.
                         * @throws IllegalArgumentException if {#code key} is {@literal null}.
                         * @see <a href="https://redis.io/commands/object">Redis Documentation: OBJECT IDLETIME</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        idletime(key: number /*byte*/[]): java.time.Duration
                        /**
                         * Get the number of references of the value associated with the specified {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} if key does not exist or when used in pipeline / transaction.
                         * @throws IllegalArgumentException if {#code key} is {@literal null}.
                         * @see <a href="https://redis.io/commands/object">Redis Documentation: OBJECT REFCOUNT</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        refcount(key: number /*byte*/[]): number
                    }
                }
            }
        }
    }
}
