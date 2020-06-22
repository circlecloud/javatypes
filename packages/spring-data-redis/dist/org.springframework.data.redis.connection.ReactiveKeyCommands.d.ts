declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis Key commands executed using reactive infrastructure.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveKeyCommands {
                        /**
                         * Determine if given {@literal key} exists.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/exists">Redis Documentation: EXISTS</a>
                         */
                        // @ts-ignore
                        exists(key: java.nio.ByteBuffer): object
                        /**
                         * Determine if given {@literal key} exists.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/exists">Redis Documentation: EXISTS</a>
                         */
                        // @ts-ignore
                        exists(keys: object): object
                        /**
                         * Determine the type stored at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/type">Redis Documentation: TYPE</a>
                         */
                        // @ts-ignore
                        type(key: java.nio.ByteBuffer): object
                        /**
                         * Determine the type stored at {@literal key}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/type">Redis Documentation: TYPE</a>
                         */
                        // @ts-ignore
                        type(keys: object): object
                        /**
                         * Alter the last access time of given {@code key(s)}.
                         * @param keys must not be {#literal null}.
                         * @return {#link Mono} emitting the number of keys touched.
                         * @see <a href="https://redis.io/commands/touch">Redis Documentation: TOUCH</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        touch(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Alter the last access time of given {@code key(s)}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/touch">Redis Documentation: TOUCH</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        touch(keys: object): object
                        /**
                         * Find all keys matching the given {@literal pattern}.<br />
                         * It is recommended to use {@link #scan(ScanOptions)} to iterate over the keyspace as {@link #keys(ByteBuffer)} is a
                         * non-interruptible and expensive Redis operation.
                         * @param pattern must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/keys">Redis Documentation: KEYS</a>
                         */
                        // @ts-ignore
                        keys(pattern: java.nio.ByteBuffer): object
                        /**
                         * Find all keys matching the given {@literal pattern}.<br />
                         * It is recommended to use {@link #scan(ScanOptions)} to iterate over the keyspace as {@link #keys(Publisher)} is a
                         * non-interruptible and expensive Redis operation.
                         * @param patterns must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/keys">Redis Documentation: KEYS</a>
                         */
                        // @ts-ignore
                        keys(patterns: object): object
                        /**
                         * Use a {@link Flux} to iterate over keys. The resulting {@link Flux} acts as a cursor and issues {@code SCAN}
                         * commands itself as long as the subscriber signals demand.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/scan">Redis Documentation: SCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        scan(): object
                        /**
                         * Use a {@link Flux} to iterate over keys. The resulting {@link Flux} acts as a cursor and issues {@code SCAN}
                         * commands itself as long as the subscriber signals demand.
                         * @param options must not be {#literal null}.
                         * @return the {#link Flux} emitting {@link ByteBuffer keys} one by one.
                         * @throws IllegalArgumentException when options is {#literal null}.
                         * @see <a href="https://redis.io/commands/scan">Redis Documentation: SCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        scan(options: org.springframework.data.redis.core.ScanOptions): object
                        /**
                         * Return a random key from the keyspace.
                         * @return 
                         * @see <a href="https://redis.io/commands/randomkey">Redis Documentation: RANDOMKEY</a>
                         */
                        // @ts-ignore
                        randomKey(): object
                        /**
                         * Rename key {@literal oleName} to {@literal newName}.
                         * @param key must not be {#literal null}.
                         * @param newName must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/rename">Redis Documentation: RENAME</a>
                         */
                        // @ts-ignore
                        rename(key: java.nio.ByteBuffer, newName: java.nio.ByteBuffer): object
                        /**
                         * Rename key {@literal oleName} to {@literal newName}.
                         * @param command must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/rename">Redis Documentation: RENAME</a>
                         */
                        // @ts-ignore
                        rename(command: object): object
                        /**
                         * Rename key {@literal oleName} to {@literal newName} only if {@literal newName} does not exist.
                         * @param key must not be {#literal null}.
                         * @param newName must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/renamenx">Redis Documentation: RENAMENX</a>
                         */
                        // @ts-ignore
                        renameNX(key: java.nio.ByteBuffer, newName: java.nio.ByteBuffer): object
                        /**
                         * Rename key {@literal oleName} to {@literal newName} only if {@literal newName} does not exist.
                         * @param command must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/renamenx">Redis Documentation: RENAMENX</a>
                         */
                        // @ts-ignore
                        renameNX(command: object): object
                        /**
                         * Delete {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/del">Redis Documentation: DEL</a>
                         */
                        // @ts-ignore
                        del(key: java.nio.ByteBuffer): object
                        /**
                         * Delete {@literal keys} one by one.
                         * @param keys must not be {#literal null}.
                         * @return {#link Flux} of {@link NumericResponse} holding the {@literal key} removed along with the deletion result.
                         * @see <a href="https://redis.io/commands/del">Redis Documentation: DEL</a>
                         */
                        // @ts-ignore
                        del(keys: object): object
                        /**
                         * Delete multiple {@literal keys} one in one batch.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/del">Redis Documentation: DEL</a>
                         */
                        // @ts-ignore
                        mDel(keys: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Delete multiple {@literal keys} in batches.
                         * @param keys must not be {#literal null}.
                         * @return {#link Flux} of {@link NumericResponse} holding the {@literal keys} removed along with the deletion result.
                         * @see <a href="https://redis.io/commands/del">Redis Documentation: DEL</a>
                         */
                        // @ts-ignore
                        mDel(keys: object): object
                        /**
                         * Unlink the {@code key} from the keyspace. Unlike with {@link #del(ByteBuffer)} the actual memory reclaiming here
                         * happens asynchronously.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/unlink">Redis Documentation: UNLINK</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        unlink(key: java.nio.ByteBuffer): object
                        /**
                         * Unlink the {@code key} from the keyspace. Unlike with {@link #del(ByteBuffer)} the actual memory reclaiming here
                         * happens asynchronously.
                         * @param keys must not be {#literal null}.
                         * @return {#link Flux} of {@link NumericResponse} holding the {@literal key} removed along with the unlink result.
                         * @see <a href="https://redis.io/commands/unlink">Redis Documentation: UNLINK</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        unlink(keys: object): object
                        /**
                         * Unlink the {@code keys} from the keyspace. Unlike with {@link #mDel(List)} the actual memory reclaiming here
                         * happens asynchronously.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/unlink">Redis Documentation: UNLINK</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        mUnlink(keys: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Unlink the {@code keys} from the keyspace. Unlike with {@link #mDel(Publisher)} the actual memory reclaiming here
                         * happens asynchronously.
                         * @param keys must not be {#literal null}.
                         * @return {#link Flux} of {@link NumericResponse} holding the {@literal key} removed along with the deletion result.
                         * @see <a href="https://redis.io/commands/unlink">Redis Documentation: UNLINK</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        mUnlink(keys: object): object
                        /**
                         * Set time to live for given {@code key} in seconds.
                         * @param key must not be {#literal null}.
                         * @param timeout must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/expire">Redis Documentation: EXPIRE</a>
                         */
                        // @ts-ignore
                        expire(key: java.nio.ByteBuffer, timeout: java.time.Duration): object
                        /**
                         * Expire {@literal keys} one by one.
                         * @param commands must not be {#literal null}.
                         * @return {#link Flux} of {@link BooleanResponse} holding the {@literal key} removed along with the expiration
                         *          result.
                         * @see <a href="https://redis.io/commands/expire">Redis Documentation: EXPIRE</a>
                         */
                        // @ts-ignore
                        expire(commands: object): object
                        /**
                         * Set time to live for given {@code key} in milliseconds.
                         * @param key must not be {#literal null}.
                         * @param timeout must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pexpire">Redis Documentation: PEXPIRE</a>
                         */
                        // @ts-ignore
                        pExpire(key: java.nio.ByteBuffer, timeout: java.time.Duration): object
                        /**
                         * Expire {@literal keys} one by one.
                         * @param commands must not be {#literal null}.
                         * @return {#link Flux} of {@link BooleanResponse} holding the {@literal key} removed along with the expiration
                         *          result.
                         * @see <a href="https://redis.io/commands/pexpire">Redis Documentation: PEXPIRE</a>
                         */
                        // @ts-ignore
                        pExpire(commands: object): object
                        /**
                         * Set the expiration for given {@code key} as a {@literal UNIX} timestamp.
                         * @param key must not be {#literal null}.
                         * @param expireAt must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/expireat">Redis Documentation: EXPIREAT</a>
                         */
                        // @ts-ignore
                        expireAt(key: java.nio.ByteBuffer, expireAt: java.time.Instant): object
                        /**
                         * Set one-by-one the expiration for given {@code key} as a {@literal UNIX} timestamp.
                         * @param commands must not be {#literal null}.
                         * @return {#link Flux} of {@link BooleanResponse} holding the {@literal key} removed along with the expiration
                         *          result.
                         * @see <a href="https://redis.io/commands/expireat">Redis Documentation: EXPIREAT</a>
                         */
                        // @ts-ignore
                        expireAt(commands: object): object
                        /**
                         * Set the expiration for given {@code key} as a {@literal UNIX} timestamp.
                         * @param key must not be {#literal null}.
                         * @param expireAt must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pexpireat">Redis Documentation: PEXPIREAT</a>
                         */
                        // @ts-ignore
                        pExpireAt(key: java.nio.ByteBuffer, expireAt: java.time.Instant): object
                        /**
                         * Set one-by-one the expiration for given {@code key} as a {@literal UNIX} timestamp in milliseconds.
                         * @param commands must not be {#literal null}.
                         * @return {#link Flux} of {@link BooleanResponse} holding the {@literal key} removed along with the expiration
                         *          result.
                         * @see <a href="https://redis.io/commands/pexpireat">Redis Documentation: PEXPIREAT</a>
                         */
                        // @ts-ignore
                        pExpireAt(commands: object): object
                        /**
                         * Remove the expiration from given {@code key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/persist">Redis Documentation: PERSIST</a>
                         */
                        // @ts-ignore
                        persist(key: java.nio.ByteBuffer): object
                        /**
                         * Remove one-by-one the expiration from given {@code key}.
                         * @param commands must not be {#literal null}.
                         * @return {#link Flux} of {@link BooleanResponse} holding the {@literal key} persisted along with the persist result.
                         * @see <a href="https://redis.io/commands/persist">Redis Documentation: PERSIST</a>
                         */
                        // @ts-ignore
                        persist(commands: object): object
                        /**
                         * Get the time to live for {@code key} in seconds.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/ttl">Redis Documentation: TTL</a>
                         */
                        // @ts-ignore
                        ttl(key: java.nio.ByteBuffer): object
                        /**
                         * Get one-by-one the time to live for keys.
                         * @param commands must not be {#literal null}.
                         * @return {#link Flux} of {@link NumericResponse} holding the {@literal key} along with the time to live result.
                         * @see <a href="https://redis.io/commands/ttl">Redis Documentation: TTL</a>
                         */
                        // @ts-ignore
                        ttl(commands: object): object
                        /**
                         * Get the time to live for {@code key} in milliseconds.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/ttl">Redis Documentation: TTL</a>
                         */
                        // @ts-ignore
                        pTtl(key: java.nio.ByteBuffer): object
                        /**
                         * Get one-by-one the time to live for keys.
                         * @param commands must not be {#literal null}.
                         * @return {#link Flux} of {@link NumericResponse} holding the {@literal key} along with the time to live result.
                         * @see <a href="https://redis.io/commands/pttl">Redis Documentation: PTTL</a>
                         */
                        // @ts-ignore
                        pTtl(commands: object): object
                        /**
                         * Move given {@code key} to database with {@code index}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/move">Redis Documentation: MOVE</a>
                         */
                        // @ts-ignore
                        move(key: java.nio.ByteBuffer, database: number /*int*/): object
                        /**
                         * Move keys one-by-one between databases.
                         * @param commands must not be {#literal null}.
                         * @return {#link Flux} of {@link BooleanResponse} holding the {@literal key} to move along with the move result.
                         * @see <a href="https://redis.io/commands/move">Redis Documentation: MOVE</a>
                         */
                        // @ts-ignore
                        move(commands: object): object
                        /**
                         * Get the type of internal representation used for storing the value at the given {@code key}.
                         * @param key must not be {#literal null}.
                         * @return the {#link Mono} emitting {@link org.springframework.data.redis.connection.ValueEncoding}.
                         * @throws IllegalArgumentException if {#code key} is {@literal null}.
                         * @see <a href="https://redis.io/commands/object">Redis Documentation: OBJECT ENCODING</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        encodingOf(key: java.nio.ByteBuffer): object
                        /**
                         * Get the {@link Duration} since the object stored at the given {@code key} is idle.
                         * @param key must not be {#literal null}.
                         * @return the {#link Mono} emitting the idletime of the key of {@link Mono#empty()} if the key does not exist.
                         * @throws IllegalArgumentException if {#code key} is {@literal null}.
                         * @see <a href="https://redis.io/commands/object">Redis Documentation: OBJECT IDLETIME</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        idletime(key: java.nio.ByteBuffer): object
                        /**
                         * Get the number of references of the value associated with the specified {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#link Mono#empty()} if key does not exist.
                         * @throws IllegalArgumentException if {#code key} is {@literal null}.
                         * @see <a href="https://redis.io/commands/object">Redis Documentation: OBJECT REFCOUNT</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        refcount(key: java.nio.ByteBuffer): object
                    }
                }
            }
        }
    }
}
