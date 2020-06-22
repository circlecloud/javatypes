declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * A connection to a Redis server. Acts as an common abstraction across various Redis client libraries (or drivers).
                     * Additionally performs exception translation between the underlying Redis client library and Spring DAO exceptions.
                     * The methods follow as much as possible the Redis names and conventions.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisConnection extends org.springframework.data.redis.connection.RedisCommands {
                        /**
                         * Get {@link RedisGeoCommands}.
                         * @return never {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        geoCommands(): org.springframework.data.redis.connection.RedisGeoCommands
                        /**
                         * Get {@link RedisHashCommands}.
                         * @return never {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        hashCommands(): org.springframework.data.redis.connection.RedisHashCommands
                        /**
                         * Get {@link RedisHyperLogLogCommands}.
                         * @return never {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        hyperLogLogCommands(): org.springframework.data.redis.connection.RedisHyperLogLogCommands
                        /**
                         * Get {@link RedisKeyCommands}.
                         * @return never {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        keyCommands(): org.springframework.data.redis.connection.RedisKeyCommands
                        /**
                         * Get {@link RedisListCommands}.
                         * @return never {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        listCommands(): org.springframework.data.redis.connection.RedisListCommands
                        /**
                         * Get {@link RedisSetCommands}.
                         * @return never {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        setCommands(): org.springframework.data.redis.connection.RedisSetCommands
                        /**
                         * Get {@link RedisScriptingCommands}.
                         * @return never {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        scriptingCommands(): org.springframework.data.redis.connection.RedisScriptingCommands
                        /**
                         * Get {@link RedisServerCommands}.
                         * @return never {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        serverCommands(): org.springframework.data.redis.connection.RedisServerCommands
                        /**
                         * Get {@link RedisStringCommands}.
                         * @return never {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        stringCommands(): org.springframework.data.redis.connection.RedisStringCommands
                        /**
                         * Get {@link RedisZSetCommands}.
                         * @return never {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        zSetCommands(): org.springframework.data.redis.connection.RedisZSetCommands
                        /**
                         * Closes (or quits) the connection.
                         * @throws DataAccessException
                         */
                        // @ts-ignore
                        close(): void
                        /**
                         * Indicates whether the underlying connection is closed or not.
                         * @return true if the connection is closed, false otherwise.
                         */
                        // @ts-ignore
                        isClosed(): boolean
                        /**
                         * Returns the native connection (the underlying library/driver object).
                         * @return underlying, native object
                         */
                        // @ts-ignore
                        getNativeConnection(): any
                        /**
                         * Indicates whether the connection is in "queue"(or "MULTI") mode or not. When queueing, all commands are postponed
                         * until EXEC or DISCARD commands are issued. Since in queueing no results are returned, the connection will return
                         * NULL on all operations that interact with the data.
                         * @return true if the connection is in queue/MULTI mode, false otherwise
                         */
                        // @ts-ignore
                        isQueueing(): boolean
                        /**
                         * Indicates whether the connection is currently pipelined or not.
                         * @return true if the connection is pipelined, false otherwise
                         * @see #openPipeline()
                         * @see #isQueueing()
                         */
                        // @ts-ignore
                        isPipelined(): boolean
                        /**
                         * Activates the pipeline mode for this connection. When pipelined, all commands return null (the reply is read at the
                         * end through {@link #closePipeline()}. Calling this method when the connection is already pipelined has no effect.
                         * Pipelining is used for issuing commands without requesting the response right away but rather at the end of the
                         * batch. While somewhat similar to MULTI, pipelining does not guarantee atomicity - it only tries to improve
                         * performance when issuing a lot of commands (such as in batching scenarios).
                         * <p>
                         * Note:
                         * </p>
                         * Consider doing some performance testing before using this feature since in many cases the performance benefits are
                         * minimal yet the impact on usage are not.
                         * @see #multi()
                         */
                        // @ts-ignore
                        openPipeline(): void
                        /**
                         * Executes the commands in the pipeline and returns their result. If the connection is not pipelined, an empty
                         * collection is returned.
                         * @throws RedisPipelineException if the pipeline contains any incorrect/invalid statements
                         * @return the result of the executed commands.
                         */
                        // @ts-ignore
                        closePipeline(): Array<java.lang.Object | any>
                        /**
                         * @return 
                         * @since 1.4
                         */
                        // @ts-ignore
                        getSentinelConnection(): org.springframework.data.redis.connection.RedisSentinelConnection
                    }
                }
            }
        }
    }
}
