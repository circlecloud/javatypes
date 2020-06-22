declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace script {
                        /**
                         * Default implementation of {@link ScriptExecutor}. Optimizes performance by attempting to execute script first using
                         * evalsha, then falling back to eval if Redis has not yet cached the script. Evalsha is not attempted if the script is
                         * executed in a pipeline or transaction.
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         * @param <K> The type of keys that may be passed during script execution
                         */
                        // @ts-ignore
                        class DefaultScriptExecutor<K> extends java.lang.Object implements org.springframework.data.redis.core.script.ScriptExecutor<K> {
                            /**
                             * @param template The {#link RedisTemplate} to use
                             */
                            // @ts-ignore
                            constructor(template: org.springframework.data.redis.core.RedisTemplate<K, any>)
                            // @ts-ignore
                            public execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, ...args: java.lang.Object[] | any[]): T
                            // @ts-ignore
                            public execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, argsSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>, resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>, keys: java.util.List<K> | Array<K>, ...args: java.lang.Object[] | any[]): T
                            // @ts-ignore
                            eval<T>(connection: org.springframework.data.redis.connection.RedisConnection, script: org.springframework.data.redis.core.script.RedisScript<T>, returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, keysAndArgs: number /*byte*/[][], resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>): T
                            // @ts-ignore
                            keysAndArgs(argsSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>, keys: java.util.List<K> | Array<K>, args: java.lang.Object[] | any[]): number /*byte*/[][]
                            // @ts-ignore
                            scriptBytes(script: org.springframework.data.redis.core.script.RedisScript<any>): number /*byte*/[]
                            // @ts-ignore
                            deserializeResult<T>(resultSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>, result: java.lang.Object | any): T
                            // @ts-ignore
                            keySerializer(): org.springframework.data.redis.serializer.RedisSerializer<any>
                        }
                    }
                }
            }
        }
    }
}
