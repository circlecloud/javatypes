declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace FacetOperation {
                            /**
                             * Builder for {@link FacetOperation} by adding existing and the new pipeline of {@link AggregationOperation} to the
                             * new {@link FacetOperation}.
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class FacetOperationBuilder extends java.lang.Object {
                                /**
                                 * Creates a new {@link FacetOperation} that contains the configured pipeline of {@link AggregationOperation}
                                 * exposed as {@literal fieldName} in the resulting facet document.
                                 * @param fieldName must not be {#literal null} or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                public as(fieldName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.FacetOperation
                            }
                        }
                    }
                }
            }
        }
    }
}
