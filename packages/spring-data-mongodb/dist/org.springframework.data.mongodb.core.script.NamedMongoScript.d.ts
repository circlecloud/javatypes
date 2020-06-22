declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace script {
                        /**
                         * An {@link ExecutableMongoScript} assigned to a name that allows calling the function by its {@literal name} once it
                         * has been saved to the {@link com.mongodb.DB} instance.
                         * @author Christoph Strobl
                         * @author Oliver Gierke
                         * @since 1.7
                         */
                        // @ts-ignore
                        class NamedMongoScript extends java.lang.Object {
                            /**
                             * Creates new {@link NamedMongoScript} that can be saved to the {@link com.mongodb.DB} instance.
                             * @param name must not be {#literal null} or empty.
                             * @param rawScript the {#link String} representation of the {@literal JavaScript} function. Must not be
                             *           {@literal null} or empty.
                             */
                            // @ts-ignore
                            constructor(name: java.lang.String | string, rawScript: java.lang.String | string)
                            /**
                             * Creates new {@link NamedMongoScript}.
                             * @param name must not be {#literal null} or empty.
                             * @param script must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(name: java.lang.String | string, script: org.springframework.data.mongodb.core.script.ExecutableMongoScript)
                            /**
                             * Returns the actual script code.
                             * @return will never be {#literal null}.
                             */
                            // @ts-ignore
                            public getCode(): string
                            /**
                             * Returns the underlying {@link ExecutableMongoScript}.
                             * @return will never be {#literal null}.
                             */
                            // @ts-ignore
                            public getScript(): org.springframework.data.mongodb.core.script.ExecutableMongoScript
                            /**
                             * Returns the name of the script.
                             * @return will never be {#literal null} or empty.
                             */
                            // @ts-ignore
                            public getName(): string
                        }
                    }
                }
            }
        }
    }
}
