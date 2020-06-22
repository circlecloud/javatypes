declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace IdentifiableJsonSchemaProperty {
                            /**
                             * Convenience {@link JsonSchemaProperty} implementation for a {@code type : 'boolean'} property.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class BooleanJsonSchemaProperty extends org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty<org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.BooleanJsonSchemaObject> {
                                /**
                                 * @param description must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see BooleanJsonSchemaObject#description(String)
                                 */
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.BooleanJsonSchemaProperty
                                /**
                                 * @return new instance of {#link BooleanJsonSchemaProperty}.
                                 * @see BooleanJsonSchemaObject#generateDescription()
                                 */
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.BooleanJsonSchemaProperty
                            }
                        }
                    }
                }
            }
        }
    }
}
