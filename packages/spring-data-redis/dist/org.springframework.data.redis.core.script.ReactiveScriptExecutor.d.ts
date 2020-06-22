declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace script {
                        /**
                         * Executes {@link RedisScript}s using reactive infrastructure.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @param <K> The type of keys that may be passed during script execution
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface ReactiveScriptExecutor<K> {
                            /**
                             * Execute the given {@link RedisScript}
                             * @param script must not be {#literal null}.
                             * @return the return value of the script or {#link Flux#empty()} if {@link RedisScript#getResultType()} is
                             *          {@literal null}, likely indicating a throw-away status reply (i.e. "OK")
                             */
                            // @ts-ignore
                            execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>): object
                            /**
                             * Execute the given {@link RedisScript}
                             * @param script must not be {#literal null}.
                             * @param keys must not be {#literal null}.
                             * @return the return value of the script or {#link Flux#empty()} if {@link RedisScript#getResultType()} is
                             *          {@literal null}, likely indicating a throw-away status reply (i.e. "OK")
                             */
                            // @ts-ignore
                            execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>): object
                            /**
                             * Executes the given {@link RedisScript}
                             * @param script The script to execute. Must not be {#literal null}.
                             * @param keys Any keys that need to be passed to the script. Must not be {#literal null}.
                             * @param args Any args that need to be passed to the script. Can be {#literal empty}.
                             * @return The return value of the script or {#link Flux#empty()} if {@link RedisScript#getResultType()} is
                             *          {@literal null}, likely indicating a throw-away status reply (i.e. "OK")
                             */
                            // @ts-ignore
                            execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, args: java.util.List<any> | Array<any>): object
                            /**
                             * Executes the given {@link RedisScript}, using the provided {@link RedisSerializer}s to serialize the script
                             * arguments and result.
                             * @param script The script to execute. must not be {#literal null}.
                             * @param keys Any keys that need to be passed to the script
                             * @param args Any args that need to be passed to the script
                             * @param argsWriter The {#link RedisElementWriter} to use for serializing args. Must not be {@literal null}.
                             * @param resultReader The {#link RedisElementReader} to use for serializing the script return value. Must not be
                             *           {@literal null}.
                             * @return The return value of the script or {#link Flux#empty()} if {@link RedisScript#getResultType()} is
                             *          {@literal null}, likely indicating a throw-away status reply (i.e. "OK")
                             */
                            // @ts-ignore
                            execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, args: java.util.List<any> | Array<any>, argsWriter: org.springframework.data.redis.serializer.RedisElementWriter<any>, resultReader: org.springframework.data.redis.serializer.RedisElementReader<T>): object
                        }
                    }
                }
            }
        }
    }
}
