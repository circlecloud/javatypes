declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * The context for an {@link AggregationOperation}.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @since 1.3
                         */
                        // @ts-ignore
                        interface AggregationOperationContext {
                            /**
                             * Returns the mapped {@link Document}, potentially converting the source considering mapping metadata etc.
                             * @param document will never be {#literal null}.
                             * @return must not be {#literal null}.
                             */
                            // @ts-ignore
                            getMappedObject(document: Document): Document
                            /**
                             * Returns a {@link FieldReference} for the given field or {@literal null} if the context does not expose the given
                             * field.
                             * @param field must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            getReference(field: org.springframework.data.mongodb.core.aggregation.Field): org.springframework.data.mongodb.core.aggregation.ExposedFields.FieldReference
                            /**
                             * Returns the {@link FieldReference} for the field with the given name or {@literal null} if the context does not
                             * expose a field with the given name.
                             * @param name must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            getReference(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ExposedFields.FieldReference
                        }
                    }
                }
            }
        }
    }
}
