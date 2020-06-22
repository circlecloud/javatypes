declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * {@link JsonSchemaMapper} allows mapping a given {@link Document} containing a {@literal $jsonSchema} to the fields of
                         * a given domain type. The mapping considers {@link org.springframework.data.mongodb.core.mapping.Field} annotations
                         * and other Spring Data specifics.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface JsonSchemaMapper {
                            /**
                             * Map the {@literal required} and {@literal properties} fields the given {@link Document} containing the
                             * {@literal $jsonSchema} against the given domain type. <br />
                             * The source document remains untouched, fields that do not require mapping are simply copied over to the mapped
                             * instance.
                             * @param jsonSchema the {#link Document} holding the raw schema representation. Must not be {@literal null}.
                             * @param type the target type to map against. Must not be {#literal null}.
                             * @return a <strong>new</strong> {#link Document} containing the mapped {@literal $jsonSchema} never {@literal null}.
                             */
                            // @ts-ignore
                            mapSchema(jsonSchema: Document, type: java.lang.Class<any>): Document
                        }
                    }
                }
            }
        }
    }
}
