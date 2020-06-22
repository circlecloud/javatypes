declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace script {
                        /**
                         * Value object for MongoDB JavaScript functions implementation that can be saved or directly executed.
                         * @author Christoph Strobl
                         * @author Oliver Gierke
                         * @since 1.7
                         */
                        // @ts-ignore
                        class ExecutableMongoScript extends java.lang.Object {
                            /**
                             * Creates new {@link ExecutableMongoScript}.
                             * @param code must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            constructor(code: java.lang.String | string)
                            /**
                             * Returns the actual script code.
                             * @return will never be {#literal null} or empty.
                             */
                            // @ts-ignore
                            public getCode(): string
                        }
                    }
                }
            }
        }
    }
}
