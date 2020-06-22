declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        /**
                         * {@link JsonSchemaProperty} implementation.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class IdentifiableJsonSchemaProperty<T extends org.springframework.data.mongodb.core.schema.JsonSchemaObject> extends java.lang.Object implements org.springframework.data.mongodb.core.schema.JsonSchemaProperty {
                            // @ts-ignore
                            readonly identifier: java.lang.String | string
                            // @ts-ignore
                            readonly jsonSchemaObjectDelegate: T
                            // @ts-ignore
                            public getIdentifier(): string
                            // @ts-ignore
                            public toDocument(): Document
                            // @ts-ignore
                            public getTypes(): Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type>
                        }
                    }
                }
            }
        }
    }
}
