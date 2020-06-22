declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace script {
                        /**
                         * A script to be executed using the <a href="https://redis.io/commands/eval">Redis scripting support</a> available as of
                         * version 2.6
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @param <T> The script result type. Should be one of Long, Boolean, List, or deserialized value type. Can be
                         *           {#litearl null} if the script returns a throw-away status (i.e "OK")
                         */
                        // @ts-ignore
                        interface RedisScript<T> {
                            /**
                             * @return The SHA1 of the script, used for executing Redis evalsha command.
                             */
                            // @ts-ignore
                            getSha1(): string
                            /**
                             * @return The script result type. Should be one of Long, Boolean, List, or deserialized value type. {#literal null}
                             *          if the script returns a throw-away status (i.e "OK").
                             */
                            // @ts-ignore
                            getResultType(): java.lang.Class<T>
                            /**
                             * @return The script contents.
                             */
                            // @ts-ignore
                            getScriptAsString(): string
                            /**
                             * @return {#literal true} if result type is {@literal null} and does not need any further deserialization.
                             * @since 2.0
                             */
                            // @ts-ignore
                            returnsRawValue(): boolean
                            /**
                             * Creates new {@link RedisScript} from {@link String}.
                             * @param script must not be {#literal null}.
                             * @return new instance of {#link RedisScript}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            of<T>(script: java.lang.String | string): org.springframework.data.redis.core.script.RedisScript<T>
                            /**
                             * Creates new {@link RedisScript} from {@link String}.
                             * @param script must not be {#literal null}.
                             * @param resultType must not be {#literal null}.
                             * @return new instance of {#link RedisScript}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            of<T>(script: java.lang.String | string, resultType: java.lang.Class<T>): org.springframework.data.redis.core.script.RedisScript<any>
                        }
                    }
                }
            }
        }
    }
}
