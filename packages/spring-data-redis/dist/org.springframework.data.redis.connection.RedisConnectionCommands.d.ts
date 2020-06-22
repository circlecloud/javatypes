declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Connection-specific commands supported by Redis.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisConnectionCommands {
                        /**
                         * Select the DB with given positive {@code dbIndex}.
                         * @param dbIndex the database index.
                         * @see <a href="https://redis.io/commands/select">Redis Documentation: SELECT</a>
                         */
                        // @ts-ignore
                        select(dbIndex: number /*int*/): void
                        /**
                         * Returns {@code message} via server roundtrip.
                         * @param message the message to echo.
                         * @return the message or {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/echo">Redis Documentation: ECHO</a>
                         */
                        // @ts-ignore
                        echo(message: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Test connection.
                         * @return Server response message - usually {#literal PONG}. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/ping">Redis Documentation: PING</a>
                         */
                        // @ts-ignore
                        ping(): string
                    }
                }
            }
        }
    }
}
