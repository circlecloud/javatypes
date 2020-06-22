declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ReplaceRootOperation {
                            /**
                             * Replacement object that results in a replacement document or an expression that results in a document.
                             * @author Mark Paluch
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            interface Replacement {
                                /**
                                 * Renders the current {@link Replacement} into a its MongoDB representation based on the given
                                 * {@link AggregationOperationContext}.
                                 * @param context will never be {#literal null}.
                                 * @return a replacement document or an expression that results in a document.
                                 */
                                // @ts-ignore
                                toDocumentExpression(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): any
                            }
                        }
                    }
                }
            }
        }
    }
}
