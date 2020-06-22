declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Server-specific commands supported by Redis.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisServerCommands {
                        /**
                         * Start an {@literal Append Only File} rewrite process on server.
                         * @deprecated As of 1.3, use {#link #bgReWriteAof}.
                         * @see <a href="https://redis.io/commands/bgrewriteaof">Redis Documentation: BGREWRITEAOF</a>
                         */
                        // @ts-ignore
                        bgWriteAof(): void
                        /**
                         * Start an {@literal Append Only File} rewrite process on server.
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/bgrewriteaof">Redis Documentation: BGREWRITEAOF</a>
                         */
                        // @ts-ignore
                        bgReWriteAof(): void
                        /**
                         * Start background saving of db on server.
                         * @see <a href="https://redis.io/commands/bgsave">Redis Documentation: BGSAVE</a>
                         */
                        // @ts-ignore
                        bgSave(): void
                        /**
                         * Get time of last {@link #bgSave()} operation in seconds.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/lastsave">Redis Documentation: LASTSAVE</a>
                         */
                        // @ts-ignore
                        lastSave(): number
                        /**
                         * Synchronous save current db snapshot on server.
                         * @see <a href="https://redis.io/commands/save">Redis Documentation: SAVE</a>
                         */
                        // @ts-ignore
                        save(): void
                        /**
                         * Get the total number of available keys in currently selected database.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/dbsize">Redis Documentation: DBSIZE</a>
                         */
                        // @ts-ignore
                        dbSize(): number
                        /**
                         * Delete all keys of the currently selected database.
                         * @see <a href="https://redis.io/commands/flushdb">Redis Documentation: FLUSHDB</a>
                         */
                        // @ts-ignore
                        flushDb(): void
                        /**
                         * Delete all <b>all keys</b> from <b>all databases</b>.
                         * @see <a href="https://redis.io/commands/flushall">Redis Documentation: FLUSHALL</a>
                         */
                        // @ts-ignore
                        flushAll(): void
                        /**
                         * Load {@literal default} server information like
                         * <ul>
                         * <li>memory</li>
                         * <li>cpu utilization</li>
                         * <li>replication</li>
                         * </ul>
                         * <p>
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/info">Redis Documentation: INFO</a>
                         */
                        // @ts-ignore
                        info(): java.util.Properties
                        /**
                         * Load server information for given {@code selection}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/info">Redis Documentation: INFO</a>
                         */
                        // @ts-ignore
                        info(section: java.lang.String | string): java.util.Properties
                        /**
                         * Shutdown server.
                         * @see <a href="https://redis.io/commands/shutdown">Redis Documentation: SHUTDOWN</a>
                         */
                        // @ts-ignore
                        shutdown(): void
                        /**
                         * Shutdown server.
                         * @see <a href="https://redis.io/commands/shutdown">Redis Documentation: SHUTDOWN</a>
                         * @since 1.3
                         */
                        // @ts-ignore
                        shutdown(option: org.springframework.data.redis.connection.RedisServerCommands.ShutdownOption): void
                        /**
                         * Load configuration parameters for given {@code pattern} from server.
                         * @param pattern must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/config-get">Redis Documentation: CONFIG GET</a>
                         */
                        // @ts-ignore
                        getConfig(pattern: java.lang.String | string): java.util.Properties
                        /**
                         * Set server configuration for {@code param} to {@code value}.
                         * @param param must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/config-set">Redis Documentation: CONFIG SET</a>
                         */
                        // @ts-ignore
                        setConfig(param: java.lang.String | string, value: java.lang.String | string): void
                        /**
                         * Reset statistic counters on server. <br>
                         * Counters can be retrieved using {@link #info()}.
                         * @see <a href="https://redis.io/commands/config-resetstat">Redis Documentation: CONFIG RESETSTAT</a>
                         */
                        // @ts-ignore
                        resetConfigStats(): void
                        /**
                         * Request server timestamp using {@code TIME} command.
                         * @return current server time in milliseconds or {#literal null} when used in pipeline / transaction.
                         * @since 1.1
                         * @see <a href="https://redis.io/commands/time">Redis Documentation: TIME</a>
                         */
                        // @ts-ignore
                        time(): number
                        /**
                         * Closes a given client connection identified by {@literal host:port}.
                         * @param host of connection to close.
                         * @param port of connection to close
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/client-kill">Redis Documentation: CLIENT KILL</a>
                         */
                        // @ts-ignore
                        killClient(host: java.lang.String | string, port: number /*int*/): void
                        /**
                         * Assign given name to current connection.
                         * @param name
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/client-setname">Redis Documentation: CLIENT SETNAME</a>
                         */
                        // @ts-ignore
                        setClientName(name: number /*byte*/[]): void
                        /**
                         * Returns the name of the current connection.
                         * @see <a href="https://redis.io/commands/client-getname">Redis Documentation: CLIENT GETNAME</a>
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.3
                         */
                        // @ts-ignore
                        getClientName(): string
                        /**
                         * Request information and statistics about connected clients.
                         * @return {#link List} of {@link RedisClientInfo} objects or {@literal null} when used in pipeline / transaction.
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/client-list">Redis Documentation: CLIENT LIST</a>
                         */
                        // @ts-ignore
                        getClientList(): Array<org.springframework.data.redis.core.types.RedisClientInfo>
                        /**
                         * Change redis replication setting to new master.
                         * @param host must not be {#literal null}.
                         * @param port
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/slaveof">Redis Documentation: SLAVEOF</a>
                         */
                        // @ts-ignore
                        slaveOf(host: java.lang.String | string, port: number /*int*/): void
                        /**
                         * Change server into master.
                         * @since 1.3
                         * @see <a href="https://redis.io/commands/slaveof">Redis Documentation: SLAVEOF</a>
                         */
                        // @ts-ignore
                        slaveOfNoOne(): void
                        /**
                         * Atomically transfer a key from a source Redis instance to a destination Redis instance. On success the key is
                         * deleted from the original instance and is guaranteed to exist in the target instance.
                         * @param key must not be {#literal null}.
                         * @param target must not be {#literal null}.
                         * @param dbIndex
                         * @param option can be {#literal null}. Defaulted to {@link MigrateOption#COPY}.
                         * @since 1.7
                         * @see <a href="https://redis.io/commands/migrate">Redis Documentation: MIGRATE</a>
                         */
                        // @ts-ignore
                        migrate(key: number /*byte*/[], target: org.springframework.data.redis.connection.RedisNode, dbIndex: number /*int*/, option: org.springframework.data.redis.connection.RedisServerCommands.MigrateOption): void
                        /**
                         * Atomically transfer a key from a source Redis instance to a destination Redis instance. On success the key is
                         * deleted from the original instance and is guaranteed to exist in the target instance.
                         * @param key must not be {#literal null}.
                         * @param target must not be {#literal null}.
                         * @param dbIndex
                         * @param option can be {#literal null}. Defaulted to {@link MigrateOption#COPY}.
                         * @param timeout
                         * @since 1.7
                         * @see <a href="https://redis.io/commands/migrate">Redis Documentation: MIGRATE</a>
                         */
                        // @ts-ignore
                        migrate(key: number /*byte*/[], target: org.springframework.data.redis.connection.RedisNode, dbIndex: number /*int*/, option: org.springframework.data.redis.connection.RedisServerCommands.MigrateOption, timeout: number /*long*/): void
                    }
                }
            }
        }
    }
}
