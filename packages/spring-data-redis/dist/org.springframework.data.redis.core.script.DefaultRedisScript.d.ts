declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace script {
                        /**
                         * Default implementation of {@link RedisScript}. Delegates to an underlying {@link ScriptSource} to retrieve script
                         * text and detect if script has been modified (and thus should have SHA1 re-calculated). This class is best used as a
                         * Singleton to avoid re-calculation of SHA1 on every script execution.
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @param <T> The script result type. Should be one of Long, Boolean, List, or deserialized value type. Can be null if
                         *           the script returns a throw-away status (i.e "OK")
                         */
                        // @ts-ignore
                        class DefaultRedisScript<T> extends java.lang.Object implements org.springframework.data.redis.core.script.RedisScript<T> {
                            /**
                             * Creates a new {@link DefaultRedisScript}
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates a new {@link DefaultRedisScript}
                             * @param script must not be {#literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            constructor(script: java.lang.String | string)
                            /**
                             * Creates a new {@link DefaultRedisScript}
                             * @param script must not be {#literal null}.
                             * @param resultType can be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(script: java.lang.String | string, resultType: java.lang.Class<T>)
                            // @ts-ignore
                            public afterPropertiesSet(): void
                            // @ts-ignore
                            public getSha1(): string
                            // @ts-ignore
                            public getResultType(): java.lang.Class<T>
                            // @ts-ignore
                            public getScriptAsString(): string
                            /**
                             * @param resultType The script result type. Should be one of Long, Boolean, List, or deserialized value type. Can be
                             *           null if the script returns a throw-away status (i.e "OK")
                             */
                            // @ts-ignore
                            public setResultType(resultType: java.lang.Class<T>): void
                            /**
                             * @param scriptText The script text
                             */
                            // @ts-ignore
                            public setScriptText(scriptText: java.lang.String | string): void
                            /**
                             * @param scriptLocation The location of the script
                             */
                            // @ts-ignore
                            public setLocation(scriptLocation: Resource): void
                            /**
                             * @param scriptSource A #{link {@link ScriptSource} pointing to the script
                             */
                            // @ts-ignore
                            public setScriptSource(scriptSource: ScriptSource): void
                        }
                    }
                }
            }
        }
    }
}
