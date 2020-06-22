declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis Server commands executed in cluster environment using reactive infrastructure.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveClusterServerCommands extends org.springframework.data.redis.connection.ReactiveServerCommands {
                        /**
                         * Start an {@literal Append Only File} rewrite process on the specific server.
                         * @param node must not be {#literal null}.
                         * @return {#link Mono} indicating command completion.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisServerCommands#bgReWriteAof()
                         */
                        // @ts-ignore
                        bgReWriteAof(node: org.springframework.data.redis.connection.RedisClusterNode): object
                        /**
                         * Start background saving of db on server.
                         * @param node must not be {#literal null}.
                         * @return {#link Mono} indicating command received by server. Operation success needs to be checked via
                         *          {@link #lastSave(RedisClusterNode)}.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisServerCommands#bgSave()
                         */
                        // @ts-ignore
                        bgSave(node: org.springframework.data.redis.connection.RedisClusterNode): object
                        /**
                         * Get time unix timestamp of last successful {@link #bgSave()} operation in seconds.
                         * @param node must not be {#literal null}.
                         * @return #return {@link Mono} wrapping unix timestamp.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisServerCommands#lastSave()
                         */
                        // @ts-ignore
                        lastSave(node: org.springframework.data.redis.connection.RedisClusterNode): object
                        /**
                         * Synchronous save current db snapshot on server.
                         * @param node must not be {#literal null}.
                         * @return {#link Mono} indicating command completion.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisServerCommands#save()
                         */
                        // @ts-ignore
                        save(node: org.springframework.data.redis.connection.RedisClusterNode): object
                        /**
                         * Get the total number of available keys in currently selected database.
                         * @param node must not be {#literal null}.
                         * @return {#link Mono} wrapping number of keys.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisServerCommands#dbSize()
                         */
                        // @ts-ignore
                        dbSize(node: org.springframework.data.redis.connection.RedisClusterNode): object
                        /**
                         * Delete all keys of the currently selected database.
                         * @param node must not be {#literal null}. {@link Mono} indicating command completion.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisServerCommands#flushDb()
                         */
                        // @ts-ignore
                        flushDb(node: org.springframework.data.redis.connection.RedisClusterNode): object
                        /**
                         * Delete all <b>all keys</b> from <b>all databases</b>.
                         * @param node must not be {#literal null}.
                         * @return {#link Mono} indicating command completion.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisServerCommands#flushAll()
                         */
                        // @ts-ignore
                        flushAll(node: org.springframework.data.redis.connection.RedisClusterNode): object
                        /**
                         * Load {@literal default} server information like
                         * <ul>
                         * <li>memory</li>
                         * <li>cpu utilization</li>
                         * <li>replication</li>
                         * </ul>
                         * <p>
                         * @param node must not be {#literal null}.
                         * @return {#link Mono} wrapping server information.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisServerCommands#info()
                         */
                        // @ts-ignore
                        info(node: org.springframework.data.redis.connection.RedisClusterNode): object
                        /**
                         * Load server information for given {@code selection}.
                         * @param node must not be {#literal null}.
                         * @param section must not be {#literal null} nor {@literal empty}.
                         * @return {#link Mono} wrapping server information of given {@code section}.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @throws IllegalArgumentException when section is {#literal null} or {@literal empty}.
                         * @see RedisServerCommands#info(String)
                         */
                        // @ts-ignore
                        info(node: org.springframework.data.redis.connection.RedisClusterNode, section: java.lang.String | string): object
                        /**
                         * Load configuration parameters for given {@code pattern} from server.
                         * @param node must not be {#literal null}.
                         * @param pattern must not be {#literal null}.
                         * @return {#link Mono} wrapping configuration parameters matching given {@code pattern}.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @throws IllegalArgumentException when {#code pattern} is {@literal null} or {@literal empty}.
                         * @see RedisServerCommands#getConfig(String)
                         */
                        // @ts-ignore
                        getConfig(node: org.springframework.data.redis.connection.RedisClusterNode, pattern: java.lang.String | string): object
                        /**
                         * Set server configuration for {@code param} to {@code value}.
                         * @param node must not be {#literal null}.
                         * @param param must not be {#literal null} nor {@literal empty}.
                         * @param value must not be {#literal null} nor {@literal empty}.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @throws IllegalArgumentException when {#code pattern} / {@code value} is {@literal null} or {@literal empty}.
                         * @see RedisServerCommands#setConfig(String, String)
                         */
                        // @ts-ignore
                        setConfig(node: org.springframework.data.redis.connection.RedisClusterNode, param: java.lang.String | string, value: java.lang.String | string): object
                        /**
                         * Reset statistic counters on server. <br>
                         * Counters can be retrieved using {@link #info()}.
                         * @param node must not be {#literal null}.
                         * @return {#link Mono} indicating command completion.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisServerCommands#resetConfigStats()
                         */
                        // @ts-ignore
                        resetConfigStats(node: org.springframework.data.redis.connection.RedisClusterNode): object
                        /**
                         * Request server timestamp using {@code TIME} command.
                         * @param node must not be {#literal null}.
                         * @return {#link Mono} wrapping current server time in milliseconds.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisServerCommands#time()
                         */
                        // @ts-ignore
                        time(node: org.springframework.data.redis.connection.RedisClusterNode): object
                        /**
                         * Request information and statistics about connected clients.
                         * @param node must not be {#literal null}.
                         * @return {#link Flux} emitting {@link RedisClientInfo} objects.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisServerCommands#getClientList()
                         */
                        // @ts-ignore
                        getClientList(node: org.springframework.data.redis.connection.RedisClusterNode): object
                    }
                }
            }
        }
    }
}
