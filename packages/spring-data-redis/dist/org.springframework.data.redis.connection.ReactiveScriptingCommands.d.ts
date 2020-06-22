declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis <a href="https://redis.io/commands/#scripting">Scripting</a> commands executed using reactive infrastructure.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveScriptingCommands {
                        /**
                         * Flush lua script cache.
                         * @see <a href="https://redis.io/commands/script-flush">Redis Documentation: SCRIPT FLUSH</a>
                         */
                        // @ts-ignore
                        scriptFlush(): object
                        /**
                         * Kill current lua script execution.
                         * @see <a href="https://redis.io/commands/script-kill">Redis Documentation: SCRIPT KILL</a>
                         */
                        // @ts-ignore
                        scriptKill(): object
                        /**
                         * Load lua script into scripts cache, without executing it.<br>
                         * Execute the script by calling {@link #evalSha(String, ReturnType, int, ByteBuffer...)}.
                         * @param script must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/script-load">Redis Documentation: SCRIPT LOAD</a>
                         */
                        // @ts-ignore
                        scriptLoad(script: java.nio.ByteBuffer): object
                        /**
                         * Check if given {@code scriptSha} exist in script cache.
                         * @param scriptSha The sha1 of the script is present in script cache. Must not be {#literal null}.
                         * @return a {#link Mono} indicating if script is present.
                         */
                        // @ts-ignore
                        scriptExists(scriptSha: java.lang.String | string): object
                        /**
                         * Check if given {@code scriptShas} exist in script cache.
                         * @param scriptShas must not be {#literal null}.
                         * @return {#link Flux} emitting one entry per scriptSha in given {@link List}.
                         * @see <a href="https://redis.io/commands/script-exists">Redis Documentation: SCRIPT EXISTS</a>
                         */
                        // @ts-ignore
                        scriptExists(scriptShas: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): object
                        /**
                         * Evaluate given {@code script}.
                         * @param script must not be {#literal null}.
                         * @param returnType must not be {#literal null}. Using {@link ReturnType#MULTI} emits a {@link List} as-is instead of
                         *           emitting the individual elements from the array response.
                         * @param numKeys
                         * @param keysAndArgs must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/eval">Redis Documentation: EVAL</a>
                         */
                        // @ts-ignore
                        eval<T>(script: java.nio.ByteBuffer, returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: java.nio.ByteBuffer[]): object
                        /**
                         * Evaluate given {@code scriptSha}.
                         * @param scriptSha must not be {#literal null}.
                         * @param returnType must not be {#literal null}. Using {@link ReturnType#MULTI} emits a {@link List} as-is instead of
                         *           emitting the individual elements from the array response.
                         * @param numKeys
                         * @param keysAndArgs must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/evalsha">Redis Documentation: EVALSHA</a>
                         */
                        // @ts-ignore
                        evalSha<T>(scriptSha: java.lang.String | string, returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: java.nio.ByteBuffer[]): object
                    }
                }
            }
        }
    }
}
