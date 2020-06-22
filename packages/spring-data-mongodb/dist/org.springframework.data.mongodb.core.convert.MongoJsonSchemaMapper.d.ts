declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * {@link JsonSchemaMapper} implementation using the conversion and mapping infrastructure for mapping fields to the
                         * provided domain type.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class MongoJsonSchemaMapper extends java.lang.Object implements org.springframework.data.mongodb.core.convert.JsonSchemaMapper {
                            /**
                             * Create a new {@link MongoJsonSchemaMapper} facilitating the given {@link MongoConverter}.
                             * @param converter must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(converter: org.springframework.data.mongodb.core.convert.MongoConverter)
                            // @ts-ignore
                            public mapSchema(jsonSchema: Document, type: java.lang.Class<any>): Document
                        }
                    }
                }
            }
        }
    }
}
