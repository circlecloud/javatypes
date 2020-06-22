declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis List commands executed using reactive infrastructure.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveListCommands {
                        /**
                         * Append {@literal values} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        rPush(key: java.nio.ByteBuffer, values: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Append {@literal values} to {@literal key} only if {@literal key} already exists.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/rpushx">Redis Documentation: RPUSHX</a>
                         */
                        // @ts-ignore
                        rPushX(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Prepend {@literal values} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         */
                        // @ts-ignore
                        lPush(key: java.nio.ByteBuffer, values: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Prepend {@literal value} to {@literal key} if {@literal key} already exists.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lpushx">Redis Documentation: LPUSHX</a>
                         */
                        // @ts-ignore
                        lPushX(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Prepend {@link PushCommand#getValues()} to {@link PushCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        push(commands: object): object
                        /**
                         * Get the size of list stored at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/llen">Redis Documentation: LLEN</a>
                         */
                        // @ts-ignore
                        lLen(key: java.nio.ByteBuffer): object
                        /**
                         * Get the size of list stored at {@link KeyCommand#getKey()}
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/llen">Redis Documentation: LLEN</a>
                         */
                        // @ts-ignore
                        lLen(commands: object): object
                        /**
                         * Get elements between {@literal start} and {@literal end} from list at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/lrange">Redis Documentation: LRANGE</a>
                         */
                        // @ts-ignore
                        lRange(key: java.nio.ByteBuffer, start: number /*long*/, end: number /*long*/): object
                        /**
                         * Get elements in {@link RangeCommand#getRange()} from list at {@link RangeCommand#getKey()}
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lrange">Redis Documentation: LRANGE</a>
                         */
                        // @ts-ignore
                        lRange(commands: object): object
                        /**
                         * Trim list at {@literal key} to elements between {@literal start} and {@literal end}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return 
                         * @see <a href="https://redis.io/commands/ltrim">Redis Documentation: LTRIM</a>
                         */
                        // @ts-ignore
                        lTrim(key: java.nio.ByteBuffer, start: number /*long*/, end: number /*long*/): object
                        /**
                         * Trim list at {@link RangeCommand#getKey()} to elements within {@link RangeCommand#getRange()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/ltrim">Redis Documentation: LTRIM</a>
                         */
                        // @ts-ignore
                        lTrim(commands: object): object
                        /**
                         * Get element at {@literal index} form list at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param index
                         * @return 
                         * @see <a href="https://redis.io/commands/lindex">Redis Documentation: LINDEX</a>
                         */
                        // @ts-ignore
                        lIndex(key: java.nio.ByteBuffer, index: number /*long*/): object
                        /**
                         * Get element at {@link LIndexCommand#getIndex()} form list at {@link LIndexCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lindex">Redis Documentation: LINDEX</a>
                         */
                        // @ts-ignore
                        lIndex(commands: object): object
                        /**
                         * Insert {@literal value} {@link Position#BEFORE} or {@link Position#AFTER} existing {@literal pivot} for
                         * {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param position must not be {#literal null}.
                         * @param pivot must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/linsert">Redis Documentation: LINSERT</a>
                         */
                        // @ts-ignore
                        lInsert(key: java.nio.ByteBuffer, position: org.springframework.data.redis.connection.RedisListCommands.Position, pivot: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Insert {@link LInsertCommand#getValue()} {@link Position#BEFORE} or {@link Position#AFTER} existing
                         * {@link LInsertCommand#getPivot()} for {@link LInsertCommand#getKey()}
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/linsert">Redis Documentation: LINSERT</a>
                         */
                        // @ts-ignore
                        lInsert(commands: object): object
                        /**
                         * Set the {@literal value} list element at {@literal index}.
                         * @param key must not be {#literal null}.
                         * @param index
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lset">Redis Documentation: LSET</a>
                         */
                        // @ts-ignore
                        lSet(key: java.nio.ByteBuffer, index: number /*long*/, value: java.nio.ByteBuffer): object
                        /**
                         * Set the {@link LSetCommand#getValue()} list element at {@link LSetCommand#getKey()}.
                         * @param commands
                         * @return 
                         * @see <a href="https://redis.io/commands/lset">Redis Documentation: LSET</a>
                         */
                        // @ts-ignore
                        lSet(commands: object): object
                        /**
                         * Removes all occurrences of {@literal value} from the list stored at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lrem">Redis Documentation: LREM</a>
                         */
                        // @ts-ignore
                        lRem(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Removes the first {@literal count} occurrences of {@literal value} from the list stored at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param count must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lrem">Redis Documentation: LREM</a>
                         */
                        // @ts-ignore
                        lRem(key: java.nio.ByteBuffer, count: java.lang.Long | number, value: java.nio.ByteBuffer): object
                        /**
                         * Removes the {@link LRemCommand#getCount()} occurrences of {@link LRemCommand#getValue()} from the list stored at
                         * {@link LRemCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lrem">Redis Documentation: LREM</a>
                         */
                        // @ts-ignore
                        lRem(commands: object): object
                        /**
                         * Removes and returns first element in list stored at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lpop">Redis Documentation: LPOP</a>
                         */
                        // @ts-ignore
                        lPop(key: java.nio.ByteBuffer): object
                        /**
                         * Removes and returns last element in list stored at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/rpop">Redis Documentation: RPOP</a>
                         */
                        // @ts-ignore
                        rPop(key: java.nio.ByteBuffer): object
                        /**
                         * Removes and returns last element in list stored at {@link KeyCommand#getKey()}
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/lpop">Redis Documentation: LPOP</a>
                         * @see <a href="https://redis.io/commands/rpop">Redis Documentation: RPOP</a>
                         */
                        // @ts-ignore
                        pop(commands: object): object
                        /**
                         * Removes and returns first element from lists stored at {@literal keys}. <br>
                         * <b>Blocks connection</b> until element available or {@literal timeout} reached.
                         * @param keys must not be {#literal null}.
                         * @param timeout must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/blpop">Redis Documentation: BLPOP</a>
                         */
                        // @ts-ignore
                        blPop(keys: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>, timeout: java.time.Duration): object
                        /**
                         * Removes and returns last element from lists stored at {@literal keys}. <br>
                         * <b>Blocks connection</b> until element available or {@literal timeout} reached.
                         * @param keys must not be {#literal null}.
                         * @param timeout must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/brpop">Redis Documentation: BRPOP</a>
                         */
                        // @ts-ignore
                        brPop(keys: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>, timeout: java.time.Duration): object
                        /**
                         * Removes and returns the top {@link BPopCommand#getDirection()} element from lists stored at
                         * {@link BPopCommand#getKeys()}.<br>
                         * <b>Blocks connection</b> until element available or {@link BPopCommand#getTimeout()} reached.
                         * @param commands
                         * @return 
                         * @see <a href="https://redis.io/commands/blpop">Redis Documentation: BLPOP</a>
                         * @see <a href="https://redis.io/commands/brpop">Redis Documentation: BRPOP</a>
                         */
                        // @ts-ignore
                        bPop(commands: object): object
                        /**
                         * Remove the last element from list at {@literal source}, append it to {@literal destination} and return its value.
                         * @param source must not be {#literal null}.
                         * @param destination must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/rpoplpush">Redis Documentation: RPOPLPUSH</a>
                         */
                        // @ts-ignore
                        rPopLPush(source: java.nio.ByteBuffer, destination: java.nio.ByteBuffer): object
                        /**
                         * Remove the last element from list at {@link RPopLPushCommand#getKey()}, append it to
                         * {@link RPopLPushCommand#getDestination()} and return its value.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/rpoplpush">Redis Documentation: RPOPLPUSH</a>
                         */
                        // @ts-ignore
                        rPopLPush(commands: object): object
                        /**
                         * Remove the last element from list at {@literal source}, append it to {@literal destination} and return its value.
                         * <b>Blocks connection</b> until element available or {@literal timeout} reached. <br />
                         * @param source must not be {#literal null}.
                         * @param destination must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/brpoplpush">Redis Documentation: BRPOPLPUSH</a>
                         */
                        // @ts-ignore
                        bRPopLPush(source: java.nio.ByteBuffer, destination: java.nio.ByteBuffer, timeout: java.time.Duration): object
                        /**
                         * Remove the last element from list at {@link BRPopLPushCommand#getKey()}, append it to
                         * {@link BRPopLPushCommand#getDestination()} and return its value. <br />
                         * <b>Blocks connection</b> until element available or {@link BRPopLPushCommand#getTimeout()} reached.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/brpoplpush">Redis Documentation: BRPOPLPUSH</a>
                         */
                        // @ts-ignore
                        bRPopLPush(commands: object): object
                    }
                }
            }
        }
    }
}
