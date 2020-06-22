declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace IdentifiableJsonSchemaProperty {
                            /**
                             * Convenience {@link JsonSchemaProperty} implementation for a {@code type : 'timestamp'} property.
                             * @author Mark Paluch
                             * @since 2.1
                             */
                            // @ts-ignore
                            class TimestampJsonSchemaProperty extends org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty<org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.TimestampJsonSchemaObject> {
                                /**
                                 * @param description must not be {#literal null}.
                                 * @return new instance of {#link TimestampJsonSchemaProperty}.
                                 * @see TimestampJsonSchemaProperty#description(String)
                                 */
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.TimestampJsonSchemaProperty
                                /**
                                 * @return new instance of {#link TimestampJsonSchemaProperty}.
                                 * @see TimestampJsonSchemaProperty#generateDescription()
                                 */
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.TimestampJsonSchemaProperty
                            }
                        }
                    }
                }
            }
        }
    }
}
