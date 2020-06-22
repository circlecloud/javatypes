declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace script {
                        /**
                         * Executes {@link RedisScript}s
                         * @author Jennifer Hickey
                         * @param <K> The type of keys that may be passed during script execution
                         */
                        // @ts-ignore
                        interface ScriptExecutor<K> {
                            /**
                             * Executes the given {@link RedisScript}
                             * @param script The script to execute
                             * @param keys Any keys that need to be passed to the script
                             * @param args Any args that need to be passed to the script
                             * @return The return value of the script or null if {#link RedisScript#getResultType()} is null, likely indicating a
                             *          throw-away status reply (i.e. "OK")
                             */
                            // @ts-ignore
                            execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, ...args: java.lang.Object[] | any[]): T
                            /**
                             * Executes the given {@link RedisScript}, using the provided {@link RedisSerializer}s to serialize the script
                             * arguments and result.
                             * @param script The script to execute
                             * @param argsSerializer The {#link RedisSerializer} to use for serializing args
                             * @param resultSerializer The {#link RedisSerializer} to use for serializing the script return value
                             * @param keys Any keys that need to be passed to the script
                             * @param args Any args that need to be passed to the script
                             * @return The return value of the script or null if {#link RedisScript#getResultType()} is null, likely indicating a
                             *          throw-away status reply (i.e. "OK")
                             */
                            // @ts-ignore
                            execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, argsSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>, keys: java.util.List<K> | Array<K>, ...args: java.lang.Object[] | any[]): T
                        }
                    }
                }
            }
        }
    }
}
