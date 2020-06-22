declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * {@link AggregationOperationContext} aware of a particular type and a {@link MappingContext} to potentially translate
                         * property references into document field names.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.3
                         */
                        // @ts-ignore
                        class TypeBasedAggregationOperationContext extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationOperationContext {
                            /**
                             * Creates a new {@link TypeBasedAggregationOperationContext} for the given type, {@link MappingContext} and
                             * {@link QueryMapper}.
                             * @param type must not be {#literal null}.
                             * @param mappingContext must not be {#literal null}.
                             * @param mapper must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(type: java.lang.Class<any>, mappingContext: object, mapper: org.springframework.data.mongodb.core.convert.QueryMapper)
                            // @ts-ignore
                            public getMappedObject(document: Document): Document
                            // @ts-ignore
                            public getReference(field: org.springframework.data.mongodb.core.aggregation.Field): org.springframework.data.mongodb.core.aggregation.ExposedFields.FieldReference
                            // @ts-ignore
                            public getReference(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ExposedFields.FieldReference
                        }
                    }
                }
            }
        }
    }
}
