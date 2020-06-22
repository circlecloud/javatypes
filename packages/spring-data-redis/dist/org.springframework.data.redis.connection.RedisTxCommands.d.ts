declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Transaction/Batch specific commands supported by Redis.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisTxCommands {
                        /**
                         * Mark the start of a transaction block. <br>
                         * Commands will be queued and can then be executed by calling {@link #exec()} or rolled back using {@link #discard()}
                         * <p>
                         * @see <a href="https://redis.io/commands/multi">Redis Documentation: MULTI</a>
                         */
                        // @ts-ignore
                        multi(): void
                        /**
                         * Executes all queued commands in a transaction started with {@link #multi()}. <br>
                         * If used along with {@link #watch(byte[]...)} the operation will fail if any of watched keys has been modified.
                         * @return List of replies for each executed command.
                         * @see <a href="https://redis.io/commands/exec">Redis Documentation: EXEC</a>
                         */
                        // @ts-ignore
                        exec(): Array<java.lang.Object | any>
                        /**
                         * Discard all commands issued after {@link #multi()}.
                         * @see <a href="https://redis.io/commands/discard">Redis Documentation: DISCARD</a>
                         */
                        // @ts-ignore
                        discard(): void
                        /**
                         * Watch given {@code keys} for modifications during transaction started with {@link #multi()}.
                         * @param keys must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/watch">Redis Documentation: WATCH</a>
                         */
                        // @ts-ignore
                        watch(...keys: number /*byte*/[][]): void
                        /**
                         * Flushes all the previously {@link #watch(byte[]...)} keys.
                         * @see <a href="https://redis.io/commands/unwatch">Redis Documentation: UNWATCH</a>
                         */
                        // @ts-ignore
                        unwatch(): void
                    }
                }
            }
        }
    }
}
