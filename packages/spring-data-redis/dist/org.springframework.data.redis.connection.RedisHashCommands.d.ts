declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Hash-specific commands supported by Redis.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisHashCommands {
                        /**
                         * Set the {@code value} of a hash {@code field}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hset">Redis Documentation: HSET</a>
                         */
                        // @ts-ignore
                        hSet(key: number /*byte*/[], field: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Set the {@code value} of a hash {@code field} only if {@code field} does not exist.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hsetnx">Redis Documentation: HSETNX</a>
                         */
                        // @ts-ignore
                        hSetNX(key: number /*byte*/[], field: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Get value for given {@code field} from hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @return {#literal null} when key or field do not exists or when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hget">Redis Documentation: HGET</a>
                         */
                        // @ts-ignore
                        hGet(key: number /*byte*/[], field: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Get values for given {@code fields} from hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param fields must not be {#literal empty}.
                         * @return empty {#link List} if key or fields do not exists. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hmget">Redis Documentation: HMGET</a>
                         */
                        // @ts-ignore
                        hMGet(key: number /*byte*/[], ...fields: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * Set multiple hash fields to multiple values using data provided in {@code hashes}
                         * @param key must not be {#literal null}.
                         * @param hashes must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/hmset">Redis Documentation: HMSET</a>
                         */
                        // @ts-ignore
                        hMSet(key: number /*byte*/[], hashes: java.util.Map<number /*byte*/[], number /*byte*/[]>): void
                        /**
                         * Increment {@code value} of a hash {@code field} by the given {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hincrby">Redis Documentation: HINCRBY</a>
                         */
                        // @ts-ignore
                        hIncrBy(key: number /*byte*/[], field: number /*byte*/[], delta: number /*long*/): number
                        /**
                         * Increment {@code value} of a hash {@code field} by the given {@code delta}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @param delta
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hincrbyfloat">Redis Documentation: HINCRBYFLOAT</a>
                         */
                        // @ts-ignore
                        hIncrBy(key: number /*byte*/[], field: number /*byte*/[], delta: number /*double*/): number
                        /**
                         * Determine if given hash {@code field} exists.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hexits">Redis Documentation: HEXISTS</a>
                         */
                        // @ts-ignore
                        hExists(key: number /*byte*/[], field: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Delete given hash {@code fields}.
                         * @param key must not be {#literal null}.
                         * @param fields must not be {#literal empty}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hdel">Redis Documentation: HDEL</a>
                         */
                        // @ts-ignore
                        hDel(key: number /*byte*/[], ...fields: number /*byte*/[][]): number
                        /**
                         * Get size of hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hlen">Redis Documentation: HLEN</a>
                         */
                        // @ts-ignore
                        hLen(key: number /*byte*/[]): number
                        /**
                         * Get key set (fields) of hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hkeys">Redis Documentation: HKEYS</a>?
                         */
                        // @ts-ignore
                        hKeys(key: number /*byte*/[]): Array<number /*byte*/[]>
                        /**
                         * Get entry set (values) of hash at {@code field}.
                         * @param key must not be {#literal null}.
                         * @return empty {#link List} if key does not exist. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hvals">Redis Documentation: HVALS</a>
                         */
                        // @ts-ignore
                        hVals(key: number /*byte*/[]): Array<number /*byte*/[]>
                        /**
                         * Get entire hash stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return empty {#link Map} if key does not exist or {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/hgetall">Redis Documentation: HGETALL</a>
                         */
                        // @ts-ignore
                        hGetAll(key: number /*byte*/[]): java.util.Map<number /*byte*/[], number /*byte*/[]>
                        /**
                         * Use a {@link Cursor} to iterate over entries in hash at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}.
                         * @return 
                         * @since 1.4
                         * @see <a href="https://redis.io/commands/hscan">Redis Documentation: HSCAN</a>
                         */
                        // @ts-ignore
                        hScan(key: number /*byte*/[], options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<java.util.Map.Entry<number /*byte*/[], number /*byte*/[]>>
                        /**
                         * Returns the length of the value associated with {@code field} in the hash stored at {@code key}. If the key or the
                         * field do not exist, {@code 0} is returned.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         */
                        // @ts-ignore
                        hStrLen(key: number /*byte*/[], field: number /*byte*/[]): number
                    }
                }
            }
        }
    }
}
