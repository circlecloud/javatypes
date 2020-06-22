declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace IdentifiableJsonSchemaProperty {
                            /**
                             * Convenience {@link JsonSchemaProperty} implementation for a {@code type : 'date'} property.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class DateJsonSchemaProperty extends org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty<org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.DateJsonSchemaObject> {
                                /**
                                 * @param description must not be {#literal null}.
                                 * @return new instance of {#link DateJsonSchemaProperty}.
                                 * @see DateJsonSchemaProperty#description(String)
                                 */
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.DateJsonSchemaProperty
                                /**
                                 * @return new instance of {#link DateJsonSchemaProperty}.
                                 * @see DateJsonSchemaProperty#generateDescription()
                                 */
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.DateJsonSchemaProperty
                            }
                        }
                    }
                }
            }
        }
    }
}
