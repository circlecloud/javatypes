declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace GraphLookupOperation {
                            /**
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class GraphLookupOperationBuilder extends java.lang.Object {
                                // @ts-ignore
                                constructor(from: java.lang.String | string, startWith: java.util.List<any> | Array<any>, connectFrom: java.lang.String | string, connectTo: java.lang.String | string)
                                /**
                                 * Optionally limit the number of recursions.
                                 * @param numberOfRecursions must be greater or equal to zero.
                                 * @return 
                                 */
                                // @ts-ignore
                                public maxDepth(numberOfRecursions: number /*long*/): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation.GraphLookupOperationBuilder
                                /**
                                 * Optionally add a depth field {@literal fieldName} to each traversed document in the search path.
                                 * @param fieldName must not be {#literal null} or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                public depthField(fieldName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation.GraphLookupOperationBuilder
                                /**
                                 * Optionally add a query specifying conditions to the recursive search.
                                 * @param criteriaDefinition must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public restrict(criteriaDefinition: org.springframework.data.mongodb.core.query.CriteriaDefinition): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation.GraphLookupOperationBuilder
                                /**
                                 * Set the name of the array field added to each output document and return the final {@link GraphLookupOperation}.
                                 * Contains the documents traversed in the {@literal $graphLookup} stage to reach the document.
                                 * @param fieldName must not be {#literal null} or empty.
                                 * @return the final {#link GraphLookupOperation}.
                                 */
                                // @ts-ignore
                                public as(fieldName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation
                            }
                        }
                    }
                }
            }
        }
    }
}
