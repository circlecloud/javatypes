declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Scripting commands.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author David Liu
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisScriptingCommands {
                        /**
                         * Flush lua script cache.
                         * @see <a href="https://redis.io/commands/script-flush">Redis Documentation: SCRIPT FLUSH</a>
                         */
                        // @ts-ignore
                        scriptFlush(): void
                        /**
                         * Kill current lua script execution.
                         * @see <a href="https://redis.io/commands/script-kill">Redis Documentation: SCRIPT KILL</a>
                         */
                        // @ts-ignore
                        scriptKill(): void
                        /**
                         * Load lua script into scripts cache, without executing it.<br>
                         * Execute the script by calling {@link #evalSha(byte[], ReturnType, int, byte[]...)}.
                         * @param script must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/script-load">Redis Documentation: SCRIPT LOAD</a>
                         */
                        // @ts-ignore
                        scriptLoad(script: number /*byte*/[]): string
                        /**
                         * Check if given {@code scriptShas} exist in script cache.
                         * @param scriptShas
                         * @return one entry per given scriptSha in returned {#link List} or {@literal null} when used in pipeline /
                         *          transaction.
                         * @see <a href="https://redis.io/commands/script-exists">Redis Documentation: SCRIPT EXISTS</a>
                         */
                        // @ts-ignore
                        scriptExists(...scriptShas: java.lang.String[] | string[]): Array<java.lang.Boolean>
                        /**
                         * Evaluate given {@code script}.
                         * @param script must not be {#literal null}.
                         * @param returnType must not be {#literal null}.
                         * @param numKeys
                         * @param keysAndArgs must not be {#literal null}.
                         * @return script result. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/eval">Redis Documentation: EVAL</a>
                         */
                        // @ts-ignore
                        eval<T>(script: number /*byte*/[], returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: number /*byte*/[][]): T
                        /**
                         * Evaluate given {@code scriptSha}.
                         * @param scriptSha must not be {#literal null}.
                         * @param returnType must not be {#literal null}.
                         * @param numKeys
                         * @param keysAndArgs must not be {#literal null}.
                         * @return script result. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/evalsha">Redis Documentation: EVALSHA</a>
                         */
                        // @ts-ignore
                        evalSha<T>(scriptSha: java.lang.String | string, returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: number /*byte*/[][]): T
                        /**
                         * Evaluate given {@code scriptSha}.
                         * @param scriptSha must not be {#literal null}.
                         * @param returnType must not be {#literal null}.
                         * @param numKeys
                         * @param keysAndArgs must not be {#literal null}.
                         * @return script result. {#literal null} when used in pipeline / transaction.
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/evalsha">Redis Documentation: EVALSHA</a>
                         */
                        // @ts-ignore
                        evalSha<T>(scriptSha: number /*byte*/[], returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: number /*byte*/[][]): T
                    }
                }
            }
        }
    }
}
