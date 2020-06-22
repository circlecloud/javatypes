declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * {@link AggregationOperationContext} implementation prefixing non-command keys on root level with the given prefix.
                         * Useful when mapping fields to domain specific types while having to prefix keys for query purpose.
                         * <p />
                         * Fields to be excluded from prefixing my be added to a {@literal blacklist}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class PrefixingDelegatingAggregationOperationContext extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationOperationContext {
                            // @ts-ignore
                            constructor(delegate: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext, prefix: java.lang.String | string)
                            // @ts-ignore
                            constructor(delegate: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext, prefix: java.lang.String | string, blacklist: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>)
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
