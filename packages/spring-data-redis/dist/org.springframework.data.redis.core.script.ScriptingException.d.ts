declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace script {
                        /**
                         * {@link RuntimeException} thrown when issues occur with {@link RedisScript}s
                         * @author Jennifer Hickey
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class ScriptingException extends NestedRuntimeException {
                            /**
                             * Constructs a new {@link ScriptingException} instance.
                             * @param msg the detail message.
                             */
                            // @ts-ignore
                            constructor(msg: java.lang.String | string)
                            /**
                             * Constructs a new {@link ScriptingException} instance.
                             * @param msg the detail message.
                             * @param cause the nested exception.
                             */
                            // @ts-ignore
                            constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                        }
                    }
                }
            }
        }
    }
}
