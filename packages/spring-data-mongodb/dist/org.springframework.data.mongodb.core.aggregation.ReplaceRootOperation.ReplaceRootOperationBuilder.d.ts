declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ReplaceRootOperation {
                            /**
                             * Builder for {@link ReplaceRootOperation}.
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class ReplaceRootOperationBuilder extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Defines a root document replacement based on a {@literal fieldName} that resolves to a document.
                                 * @param fieldName must not be {#literal null} or empty.
                                 * @return the final {#link ReplaceRootOperation}.
                                 */
                                // @ts-ignore
                                public withValueOf(fieldName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ReplaceRootOperation
                                /**
                                 * Defines a root document replacement based on a {@link AggregationExpression} that resolves to a document.
                                 * @param aggregationExpression must not be {#literal null}.
                                 * @return the final {#link ReplaceRootOperation}.
                                 */
                                // @ts-ignore
                                public withValueOf(aggregationExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ReplaceRootOperation
                                /**
                                 * Defines a root document replacement based on a composable document that is empty initially. <br />
                                 * {@link ReplaceRootOperation} can be populated with individual entries and derive its values from other, existing
                                 * documents.
                                 * @return the {#link ReplaceRootDocumentOperation}.
                                 */
                                // @ts-ignore
                                public withDocument(): org.springframework.data.mongodb.core.aggregation.ReplaceRootOperation.ReplaceRootDocumentOperation
                                /**
                                 * Defines a root document replacement based on a composable document given {@literal document}. <br />
                                 * {@link ReplaceRootOperation} can be populated with individual entries and derive its values from other, existing
                                 * documents.
                                 * @param document must not be {#literal null}.
                                 * @return the final {#link ReplaceRootOperation}.
                                 */
                                // @ts-ignore
                                public withDocument(document: Document): org.springframework.data.mongodb.core.aggregation.ReplaceRootOperation
                            }
                        }
                    }
                }
            }
        }
    }
}
