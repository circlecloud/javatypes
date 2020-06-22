declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis Server commands executed using reactive infrastructure.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveServerCommands {
                        /**
                         * Start an {@literal Append Only File} rewrite process on server.
                         * @return {#link Mono} indicating command completion.
                         * @see <a href="https://redis.io/commands/bgrewriteaof">Redis Documentation: BGREWRITEAOF</a>
                         */
                        // @ts-ignore
                        bgReWriteAof(): object
                        /**
                         * Start background saving of db on server.
                         * @return {#link Mono} indicating command received by server. Operation success needs to be checked via
                         *          {@link #lastSave()}.
                         * @see <a href="https://redis.io/commands/bgsave">Redis Documentation: BGSAVE</a>
                         */
                        // @ts-ignore
                        bgSave(): object
                        /**
                         * Get time unix timestamp of last successful {@link #bgSave()} operation in seconds.
                         * @return {#link Mono} wrapping unix timestamp.
                         * @see <a href="https://redis.io/commands/lastsave">Redis Documentation: LASTSAVE</a>
                         */
                        // @ts-ignore
                        lastSave(): object
                        /**
                         * Synchronous save current db snapshot on server.
                         * @return {#link Mono} indicating command completion.
                         * @see <a href="https://redis.io/commands/save">Redis Documentation: SAVE</a>
                         */
                        // @ts-ignore
                        save(): object
                        /**
                         * Get the total number of available keys in currently selected database.
                         * @return {#link Mono} wrapping number of keys.
                         * @see <a href="https://redis.io/commands/dbsize">Redis Documentation: DBSIZE</a>
                         */
                        // @ts-ignore
                        dbSize(): object
                        /**
                         * Delete all keys of the currently selected database.
                         * @return {#link Mono} indicating command completion.
                         * @see <a href="https://redis.io/commands/flushdb">Redis Documentation: FLUSHDB</a>
                         */
                        // @ts-ignore
                        flushDb(): object
                        /**
                         * Delete all <b>all keys</b> from <b>all databases</b>.
                         * @return {#link Mono} indicating command completion.
                         * @see <a href="https://redis.io/commands/flushall">Redis Documentation: FLUSHALL</a>
                         */
                        // @ts-ignore
                        flushAll(): object
                        /**
                         * Load {@literal default} server information like
                         * <ul>
                         * <li>memory</li>
                         * <li>cpu utilization</li>
                         * <li>replication</li>
                         * </ul>
                         * <p>
                         * @return {#link Mono} wrapping server information.
                         * @see <a href="https://redis.io/commands/info">Redis Documentation: INFO</a>
                         */
                        // @ts-ignore
                        info(): object
                        /**
                         * Load server information for given {@code selection}.
                         * @param section must not be {#literal null} nor {@literal empty}.
                         * @return {#link Mono} wrapping server information of given {@code section}.
                         * @throws IllegalArgumentException when section is {#literal null} or {@literal empty}.
                         * @see <a href="https://redis.io/commands/info">Redis Documentation: INFO</a>
                         */
                        // @ts-ignore
                        info(section: java.lang.String | string): object
                        /**
                         * Load configuration parameters for given {@code pattern} from server.
                         * @param pattern must not be {#literal null}.
                         * @return {#link Mono} wrapping configuration parameters matching given {@code pattern}.
                         * @throws IllegalArgumentException when {#code pattern} is {@literal null} or {@literal empty}.
                         * @see <a href="https://redis.io/commands/config-get">Redis Documentation: CONFIG GET</a>
                         */
                        // @ts-ignore
                        getConfig(pattern: java.lang.String | string): object
                        /**
                         * Set server configuration for {@code param} to {@code value}.
                         * @param param must not be {#literal null} nor {@literal empty}.
                         * @param value must not be {#literal null} nor {@literal empty}.
                         * @throws IllegalArgumentException when {#code pattern} / {@code value} is {@literal null} or {@literal empty}.
                         * @see <a href="https://redis.io/commands/config-set">Redis Documentation: CONFIG SET</a>
                         */
                        // @ts-ignore
                        setConfig(param: java.lang.String | string, value: java.lang.String | string): object
                        /**
                         * Reset statistic counters on server. <br>
                         * Counters can be retrieved using {@link #info()}.
                         * @return {#link Mono} indicating command completion.
                         * @see <a href="https://redis.io/commands/config-resetstat">Redis Documentation: CONFIG RESETSTAT</a>
                         */
                        // @ts-ignore
                        resetConfigStats(): object
                        /**
                         * Request server timestamp using {@code TIME} command.
                         * @return {#link Mono} wrapping current server time in milliseconds.
                         * @see <a href="https://redis.io/commands/time">Redis Documentation: TIME</a>
                         */
                        // @ts-ignore
                        time(): object
                        /**
                         * Closes a given client connection identified by {@literal host:port}.
                         * @param host of connection to close. Must not be {#literal null} nor {@literal empty}.
                         * @param port of connection to close
                         * @return {#link Mono} wrapping {@link String} representation of the command result.
                         * @throws IllegalArgumentException if {#code host} is {@literal null} or {@literal empty}.
                         * @see <a href="https://redis.io/commands/client-kill">Redis Documentation: CLIENT KILL</a>
                         */
                        // @ts-ignore
                        killClient(host: java.lang.String | string, port: number /*int*/): object
                        /**
                         * Assign given name to current connection.
                         * @param name must not be {#literal null} nor {@literal empty}.
                         * @throws IllegalArgumentException when {#code name} is {@literal null} or {@literal empty}.
                         * @see <a href="https://redis.io/commands/client-setname">Redis Documentation: CLIENT SETNAME</a>
                         */
                        // @ts-ignore
                        setClientName(name: java.lang.String | string): object
                        /**
                         * Returns the name of the current connection.
                         * @return {#link Mono} wrapping the connection name.
                         * @see <a href="https://redis.io/commands/client-getname">Redis Documentation: CLIENT GETNAME</a>
                         */
                        // @ts-ignore
                        getClientName(): object
                        /**
                         * Request information and statistics about connected clients.
                         * @return {#link Flux} emitting {@link RedisClientInfo} objects.
                         * @see <a href="https://redis.io/commands/client-list">Redis Documentation: CLIENT LIST</a>
                         */
                        // @ts-ignore
                        getClientList(): object
                    }
                }
            }
        }
    }
}
