declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis connection using reactive infrastructure declaring entry points for reactive command execution.
                     * <p>
                     * {@link ReactiveRedisConnection} is typically implemented by a stateful object that requires to be {@link #close()
                     * closed} once it is no longer required.
                     * <p>
                     * Commands can be either executed by passing plain arguments like {@code key}, {@code value} or wrapped inside a
                     * command stream. Streaming command execution accepts {@link org.reactivestreams.Publisher} of a particular
                     * {@link Command}. Commands are executed at the time their emission.
                     * <p>
                     * Arguments are binary-safe by using {@link ByteBuffer} arguments. Expect {@link ByteBuffer} to be consumed by
                     * {@link ReactiveRedisConnection} invocation or during execution. Any {@link ByteBuffer} used as method parameter
                     * should not be altered after invocation.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     * @see Command
                     * @see CommandResponse
                     * @see KeyCommand
                     */
                    // @ts-ignore
                    interface ReactiveRedisConnection extends java.io.Closeable {
                        // @ts-ignore
                        close(): void
                        /**
                         * Asynchronously close the connection and release associated resources.
                         * @return the {#link Mono} signaling when done.
                         */
                        // @ts-ignore
                        closeLater(): object
                        /**
                         * Get {@link ReactiveKeyCommands}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        keyCommands(): org.springframework.data.redis.connection.ReactiveKeyCommands
                        /**
                         * Get {@link ReactiveStringCommands}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        stringCommands(): org.springframework.data.redis.connection.ReactiveStringCommands
                        /**
                         * Get {@link ReactiveNumberCommands}
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        numberCommands(): org.springframework.data.redis.connection.ReactiveNumberCommands
                        /**
                         * Get {@link ReactiveListCommands}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        listCommands(): org.springframework.data.redis.connection.ReactiveListCommands
                        /**
                         * Get {@link ReactiveSetCommands}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        setCommands(): org.springframework.data.redis.connection.ReactiveSetCommands
                        /**
                         * Get {@link ReactiveZSetCommands}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        zSetCommands(): org.springframework.data.redis.connection.ReactiveZSetCommands
                        /**
                         * Get {@link ReactiveHashCommands}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        hashCommands(): org.springframework.data.redis.connection.ReactiveHashCommands
                        /**
                         * Get {@link ReactiveGeoCommands}
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        geoCommands(): org.springframework.data.redis.connection.ReactiveGeoCommands
                        /**
                         * Get {@link ReactiveHyperLogLogCommands}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        hyperLogLogCommands(): org.springframework.data.redis.connection.ReactiveHyperLogLogCommands
                        /**
                         * Get {@link ReactivePubSubCommands}.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        pubSubCommands(): org.springframework.data.redis.connection.ReactivePubSubCommands
                        /**
                         * Get {@link ReactiveScriptingCommands}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        scriptingCommands(): org.springframework.data.redis.connection.ReactiveScriptingCommands
                        /**
                         * Get {@link ReactiveServerCommands}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        serverCommands(): org.springframework.data.redis.connection.ReactiveServerCommands
                        /**
                         * Test connection.
                         * @return {#link Mono} wrapping server response message - usually {@literal PONG}.
                         * @see <a href="https://redis.io/commands/ping">Redis Documentation: PING</a>
                         */
                        // @ts-ignore
                        ping(): object
                    }
                }
            }
        }
    }
}
