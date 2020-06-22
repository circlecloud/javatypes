declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis numeric commands executed using reactive infrastructure.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveNumberCommands {
                        /**
                         * Increment value of {@literal key} by 1.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/incr">Redis Documentation: INCR</a>
                         */
                        // @ts-ignore
                        incr(key: java.nio.ByteBuffer): object
                        /**
                         * Increment value of {@literal key} by 1.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/incr">Redis Documentation: INCR</a>
                         */
                        // @ts-ignore
                        incr(keys: object): object
                        /**
                         * Increment value of {@literal key} by {@literal value}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/incrby">Redis Documentation: INCRBY</a>
                         * @see <a href="https://redis.io/commands/incrbyfloat">Redis Documentation: INCRBYFLOAT</a>
                         */
                        // @ts-ignore
                        incrBy<T extends java.lang.Number>(key: java.nio.ByteBuffer, value: T): object
                        /**
                         * Increment value of {@literal key} by {@literal value}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/incrby">Redis Documentation: INCRBY</a>
                         * @see <a href="https://redis.io/commands/incrbyfloat">Redis Documentation: INCRBYFLOAT</a>
                         */
                        // @ts-ignore
                        incrBy<T extends java.lang.Number>(commands: object): object
                        /**
                         * Decrement value of {@literal key} by 1.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/decr">Redis Documentation: DECR</a>
                         */
                        // @ts-ignore
                        decr(key: java.nio.ByteBuffer): object
                        /**
                         * Decrement value of {@literal key} by 1.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/decr">Redis Documentation: DECR</a>
                         */
                        // @ts-ignore
                        decr(keys: object): object
                        /**
                         * Decrement value of {@literal key} by {@literal value}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/decrby">Redis Documentation: DECRBY</a>
                         */
                        // @ts-ignore
                        decrBy<T extends java.lang.Number>(key: java.nio.ByteBuffer, value: T): object
                        /**
                         * Decrement value of {@literal key} by {@literal value}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        decrBy<T extends java.lang.Number>(commands: object): object
                        /**
                         * Increment {@literal value} of a hash {@literal field} by the given {@literal value}.
                         * @param key must not be {#literal null}.
                         * @param field must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hincrby">Redis Documentation: HINCRBY</a>
                         */
                        // @ts-ignore
                        hIncrBy<T extends java.lang.Number>(key: java.nio.ByteBuffer, field: java.nio.ByteBuffer, value: T): object
                        /**
                         * Increment {@literal value} of a hash {@literal field} by the given {@literal value}.
                         * @return 
                         * @see <a href="https://redis.io/commands/hincrby">Redis Documentation: HINCRBY</a>
                         */
                        // @ts-ignore
                        hIncrBy<T extends java.lang.Number>(commands: object): object
                    }
                }
            }
        }
    }
}
