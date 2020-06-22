declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis Hash commands executed using reactive infrastructure.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveHashCommands {
                        /**
                         * Set the {@literal value} of a hash {@literal field}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hset">Redis Documentation: HSET</a>
                         */
                        // @ts-ignore
                        hSet(key: java.nio.ByteBuffer, field: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Set the {@literal value} of a hash {@literal field}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hsetnx">Redis Documentation: HSETNX</a>
                         */
                        // @ts-ignore
                        hSetNX(key: java.nio.ByteBuffer, field: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Set multiple hash fields to multiple values using data provided in {@literal fieldValueMap}.
                         * @param key must not be {#literal null}.
                         * @param fieldValueMap must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hmset">Redis Documentation: HMSET</a>
                         */
                        // @ts-ignore
                        hMSet(key: java.nio.ByteBuffer, fieldValueMap: java.util.Map<java.nio.ByteBuffer, java.nio.ByteBuffer>): object
                        /**
                         * Set the {@literal value} of a hash {@literal field}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hset">Redis Documentation: HSET</a>
                         */
                        // @ts-ignore
                        hSet(commands: object): object
                        /**
                         * Get value for given {@literal field} from hash at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hget">Redis Documentation: HGET</a>
                         */
                        // @ts-ignore
                        hGet(key: java.nio.ByteBuffer, field: java.nio.ByteBuffer): object
                        /**
                         * Get values for given {@literal fields} from hash at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param fields must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hmget">Redis Documentation: HMGET</a>
                         */
                        // @ts-ignore
                        hMGet(key: java.nio.ByteBuffer, fields: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Get values for given {@literal fields} from hash at {@literal key}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hmget">Redis Documentation: HMGET</a>
                         */
                        // @ts-ignore
                        hMGet(commands: object): object
                        /**
                         * Determine if given hash {@literal field} exists.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hexists">Redis Documentation: HEXISTS</a>
                         */
                        // @ts-ignore
                        hExists(key: java.nio.ByteBuffer, field: java.nio.ByteBuffer): object
                        /**
                         * Determine if given hash {@literal field} exists.
                         * @param commands
                         * @return 
                         * @see <a href="https://redis.io/commands/hexists">Redis Documentation: HEXISTS</a>
                         */
                        // @ts-ignore
                        hExists(commands: object): object
                        /**
                         * Delete given hash {@literal field}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hdel">Redis Documentation: HDEL</a>
                         */
                        // @ts-ignore
                        hDel(key: java.nio.ByteBuffer, field: java.nio.ByteBuffer): object
                        /**
                         * Delete given hash {@literal fields}.
                         * @param key must not be {#literal null}.
                         * @param fields must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hdel">Redis Documentation: HDEL</a>
                         */
                        // @ts-ignore
                        hDel(key: java.nio.ByteBuffer, fields: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Delete given hash {@literal fields}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hdel">Redis Documentation: HDEL</a>
                         */
                        // @ts-ignore
                        hDel(commands: object): object
                        /**
                         * Get size of hash at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hlen">Redis Documentation: HLEN</a>
                         */
                        // @ts-ignore
                        hLen(key: java.nio.ByteBuffer): object
                        /**
                         * Get size of hash at {@literal key}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hlen">Redis Documentation: HLEN</a>
                         */
                        // @ts-ignore
                        hLen(commands: object): object
                        /**
                         * Get key set (fields) of hash at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hkeys">Redis Documentation: HKEYS</a>
                         */
                        // @ts-ignore
                        hKeys(key: java.nio.ByteBuffer): object
                        /**
                         * Get key set (fields) of hash at {@literal key}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hkeys">Redis Documentation: HKEYS</a>
                         */
                        // @ts-ignore
                        hKeys(commands: object): object
                        /**
                         * Get entry set (values) of hash at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hvals">Redis Documentation: HVALS</a>
                         */
                        // @ts-ignore
                        hVals(key: java.nio.ByteBuffer): object
                        /**
                         * Get entry set (values) of hash at {@literal key}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hvals">Redis Documentation: HVALS</a>
                         */
                        // @ts-ignore
                        hVals(commands: object): object
                        /**
                         * Get entire hash stored at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hgetall">Redis Documentation: HGETALL</a>
                         */
                        // @ts-ignore
                        hGetAll(key: java.nio.ByteBuffer): object
                        /**
                         * Get entire hash stored at {@literal key}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hgetall">Redis Documentation: HGETALL</a>
                         */
                        // @ts-ignore
                        hGetAll(commands: object): object
                        /**
                         * Use a {@link Flux} to iterate over entries in the hash at {@code key}. The resulting {@link Flux} acts as a cursor
                         * and issues {@code HSCAN} commands itself as long as the subscriber signals demand.
                         * @param key must not be {#literal null}.
                         * @return the {#link Flux} emitting {@link java.util.Map.Entry entries} one by one.
                         * @throws IllegalArgumentException in case the given key is {#literal null}.
                         * @see <a href="https://redis.io/commands/hscan">Redis Documentation: HSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        hScan(key: java.nio.ByteBuffer): object
                        /**
                         * Use a {@link Flux} to iterate over entries in the hash at {@code key} given {@link ScanOptions}. The resulting
                         * {@link Flux} acts as a cursor and issues {@code HSCAN} commands itself as long as the subscriber signals demand.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}. Use {@link ScanOptions#NONE} instead.
                         * @return the {#link Flux} emitting the raw {@link java.util.Map.Entry entries} one by one.
                         * @throws IllegalArgumentException in case one of the required arguments is {#literal null}.
                         * @see <a href="https://redis.io/commands/hscan">Redis Documentation: HSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        hScan(key: java.nio.ByteBuffer, options: org.springframework.data.redis.core.ScanOptions): object
                        /**
                         * Use a {@link Flux} to iterate over entries in the hash at {@code key}. The resulting {@link Flux} acts as a cursor
                         * and issues {@code HSCAN} commands itself as long as the subscriber signals demand.
                         * @param commands must not be {#literal null}.
                         * @return the {#link Flux} emitting {@link CommandResponse} one by one.
                         * @see <a href="https://redis.io/commands/hscan">Redis Documentation: HSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        hScan(commands: object): object
                        /**
                         * Get the length of the value associated with {@code field}. If either the {@code key} or the {@code field} do not
                         * exist, {@code 0} is emitted.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        hStrLen(key: java.nio.ByteBuffer, field: java.nio.ByteBuffer): object
                        /**
                         * Get the length of the value associated with {@code field}. If either the {@code key} or the {@code field} do not
                         * exist, {@code 0} is emitted.
                         * @param commands must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        hStrLen(commands: object): object
                    }
                }
            }
        }
    }
}
