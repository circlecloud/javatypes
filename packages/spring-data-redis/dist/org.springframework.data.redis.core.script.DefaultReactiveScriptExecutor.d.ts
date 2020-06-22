declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace script {
                        /**
                         * Default implementation of {@link ReactiveScriptExecutor}. Optimizes performance by attempting to execute script first
                         * using {@code EVALSHA}, then falling back to {@code EVAL} if Redis has not yet cached the script.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @param <K> The type of keys that may be passed during script execution
                         * @since 2.0
                         */
                        // @ts-ignore
                        class DefaultReactiveScriptExecutor<K> extends java.lang.Object implements org.springframework.data.redis.core.script.ReactiveScriptExecutor<K> {
                            /**
                             * Creates a new {@link DefaultReactiveScriptExecutor} given {@link ReactiveRedisConnectionFactory} and
                             * {@link RedisSerializationContext}.
                             * @param connectionFactory must not be {#literal null}.
                             * @param serializationContext must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(connectionFactory: org.springframework.data.redis.connection.ReactiveRedisConnectionFactory, serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<K, any>)
                            // @ts-ignore
                            public execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, args: java.util.List<any> | Array<any>): object
                            // @ts-ignore
                            public execute<T>(script: org.springframework.data.redis.core.script.RedisScript<T>, keys: java.util.List<K> | Array<K>, args: java.util.List<any> | Array<any>, argsWriter: org.springframework.data.redis.serializer.RedisElementWriter<any>, resultReader: org.springframework.data.redis.serializer.RedisElementReader<T>): object
                            // @ts-ignore
                            eval<T>(connection: org.springframework.data.redis.connection.ReactiveRedisConnection, script: org.springframework.data.redis.core.script.RedisScript<T>, returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, keysAndArgs: java.nio.ByteBuffer[], resultReader: org.springframework.data.redis.serializer.RedisElementReader<T>): object
                            // @ts-ignore
                            keysAndArgs(argsWriter: org.springframework.data.redis.serializer.RedisElementWriter<any>, keys: java.util.List<K> | Array<K>, args: java.util.List<any> | Array<any>): java.nio.ByteBuffer[]
                            /**
                             * @param script
                             * @return 
                             */
                            // @ts-ignore
                            scriptBytes(script: org.springframework.data.redis.core.script.RedisScript<any>): java.nio.ByteBuffer
                            // @ts-ignore
                            deserializeResult<T>(reader: org.springframework.data.redis.serializer.RedisElementReader<T>, result: object): object
                            // @ts-ignore
                            keySerializer(): org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<K>
                            // @ts-ignore
                            public getConnectionFactory(): org.springframework.data.redis.connection.ReactiveRedisConnectionFactory
                        }
                    }
                }
            }
        }
    }
}
