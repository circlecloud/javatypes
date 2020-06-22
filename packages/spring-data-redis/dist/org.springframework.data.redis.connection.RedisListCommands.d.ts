declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * List-specific commands supported by Redis.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisListCommands {
                        /**
                         * Append {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be empty.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        rPush(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * Prepend {@code values} to {@code key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be empty.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         */
                        // @ts-ignore
                        lPush(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * Append {@code values} to {@code key} only if the list exists.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/rpushx">Redis Documentation: RPUSHX</a>
                         */
                        // @ts-ignore
                        rPushX(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * Prepend {@code values} to {@code key} only if the list exists.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpushx">Redis Documentation: LPUSHX</a>
                         */
                        // @ts-ignore
                        lPushX(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * Get the size of list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/llen">Redis Documentation: LLEN</a>
                         */
                        // @ts-ignore
                        lLen(key: number /*byte*/[]): number
                        /**
                         * Get elements between {@code start} and {@code end} from list at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return empty {#link List} if key does not exists or range does not contain values. {@literal null} when used in
                         *          pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lrange">Redis Documentation: LRANGE</a>
                         */
                        // @ts-ignore
                        lRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * Trim list at {@code key} to elements between {@code start} and {@code end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @see <a href="https://redis.io/commands/ltrim">Redis Documentation: LTRIM</a>
                         */
                        // @ts-ignore
                        lTrim(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): void
                        /**
                         * Get element at {@code index} form list at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param index zero based index value. Use negative number to designate elements starting at the tail.
                         * @return {#literal null} when index is out of range or when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lindex">Redis Documentation: LINDEX</a>
                         */
                        // @ts-ignore
                        lIndex(key: number /*byte*/[], index: number /*long*/): number /*byte*/[]
                        /**
                         * Insert {@code value} {@link Position#BEFORE} or {@link Position#AFTER} existing {@code pivot} for {@code key}.
                         * @param key must not be {#literal null}.
                         * @param where must not be {#literal null}.
                         * @param pivot must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/linsert">Redis Documentation: LINSERT</a>
                         */
                        // @ts-ignore
                        lInsert(key: number /*byte*/[], where: org.springframework.data.redis.connection.RedisListCommands.Position, pivot: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * Set the {@code value} list element at {@code index}.
                         * @param key must not be {#literal null}.
                         * @param index
                         * @param value
                         * @see <a href="https://redis.io/commands/lset">Redis Documentation: LSET</a>
                         */
                        // @ts-ignore
                        lSet(key: number /*byte*/[], index: number /*long*/, value: number /*byte*/[]): void
                        /**
                         * Removes the first {@code count} occurrences of {@code value} from the list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count
                         * @param value
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lrem">Redis Documentation: LREM</a>
                         */
                        // @ts-ignore
                        lRem(key: number /*byte*/[], count: number /*long*/, value: number /*byte*/[]): number
                        /**
                         * Removes and returns first element in list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when key does not exist or used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lpop">Redis Documentation: LPOP</a>
                         */
                        // @ts-ignore
                        lPop(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Removes and returns last element in list stored at {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when key does not exist or used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/rpop">Redis Documentation: RPOP</a>
                         */
                        // @ts-ignore
                        rPop(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Removes and returns first element from lists stored at {@code keys}. <br>
                         * <b>Blocks connection</b> until element available or {@code timeout} reached.
                         * @param timeout seconds to block.
                         * @param keys must not be {#literal null}.
                         * @return empty {#link List} when no element could be popped and the timeout was reached. {@literal null} when used
                         *          in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/blpop">Redis Documentation: BLPOP</a>
                         * @see #lPop(byte[])
                         */
                        // @ts-ignore
                        bLPop(timeout: number /*int*/, ...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * Removes and returns last element from lists stored at {@code keys}. <br>
                         * <b>Blocks connection</b> until element available or {@code timeout} reached.
                         * @param timeout seconds to block.
                         * @param keys must not be {#literal null}.
                         * @return empty {#link List} when no element could be popped and the timeout was reached. {@literal null} when used
                         *          in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/brpop">Redis Documentation: BRPOP</a>
                         * @see #rPop(byte[])
                         */
                        // @ts-ignore
                        bRPop(timeout: number /*int*/, ...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * Remove the last element from list at {@code srcKey}, append it to {@code dstKey} and return its value.
                         * @param srcKey must not be {#literal null}.
                         * @param dstKey must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/rpoplpush">Redis Documentation: RPOPLPUSH</a>
                         */
                        // @ts-ignore
                        rPopLPush(srcKey: number /*byte*/[], dstKey: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Remove the last element from list at {@code srcKey}, append it to {@code dstKey} and return its value. <br>
                         * <b>Blocks connection</b> until element available or {@code timeout} reached.
                         * @param timeout seconds to block.
                         * @param srcKey must not be {#literal null}.
                         * @param dstKey must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/brpoplpush">Redis Documentation: BRPOPLPUSH</a>
                         * @see #rPopLPush(byte[], byte[])
                         */
                        // @ts-ignore
                        bRPopLPush(timeout: number /*int*/, srcKey: number /*byte*/[], dstKey: number /*byte*/[]): number /*byte*/[]
                    }
                }
            }
        }
    }
}
