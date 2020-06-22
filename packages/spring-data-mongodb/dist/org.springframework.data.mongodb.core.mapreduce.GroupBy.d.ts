declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapreduce {
                        /**
                         * Collects the parameters required to perform a group operation on a collection. The query condition and the input
                         * collection are specified on the group method as method arguments to be consistent with other operations, e.g.
                         * map-reduce.
                         * @author Mark Pollack
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class GroupBy extends java.lang.Object {
                            // @ts-ignore
                            constructor(...keys: java.lang.String[] | string[])
                            // @ts-ignore
                            constructor(key: java.lang.String | string, isKeyFunction: boolean)
                            /**
                             * Create new {@link GroupBy} with the field to group.
                             * @param key
                             * @return 
                             */
                            // @ts-ignore
                            public static keyFunction(key: java.lang.String | string): org.springframework.data.mongodb.core.mapreduce.GroupBy
                            /**
                             * Create new {@link GroupBy} with the fields to group.
                             * @param keys
                             * @return 
                             */
                            // @ts-ignore
                            public static key(...keys: java.lang.String[] | string[]): org.springframework.data.mongodb.core.mapreduce.GroupBy
                            /**
                             * Define the aggregation result document.
                             * @param initialDocument can be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public initialDocument(initialDocument: java.lang.String | string): org.springframework.data.mongodb.core.mapreduce.GroupBy
                            /**
                             * Define the aggregation result document.
                             * @param initialDocument can be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public initialDocument(initialDocument: Document): org.springframework.data.mongodb.core.mapreduce.GroupBy
                            /**
                             * Define the aggregation function that operates on the documents during the grouping operation
                             * @param reduceFunction
                             * @return 
                             */
                            // @ts-ignore
                            public reduceFunction(reduceFunction: java.lang.String | string): org.springframework.data.mongodb.core.mapreduce.GroupBy
                            /**
                             * Define the function that runs each item in the result set before db.collection.group() returns the final value.
                             * @param finalizeFunction
                             * @return 
                             */
                            // @ts-ignore
                            public finalizeFunction(finalizeFunction: java.lang.String | string): org.springframework.data.mongodb.core.mapreduce.GroupBy
                            /**
                             * Define the Collation specifying language-specific rules for string comparison.
                             * @param collation can be {#literal null}.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public collation(collation: org.springframework.data.mongodb.core.query.Collation): org.springframework.data.mongodb.core.mapreduce.GroupBy
                            /**
                             * Get the {@link Document} representation of the {@link GroupBy}.
                             * @return 
                             */
                            // @ts-ignore
                            public getGroupByObject(): Document
                        }
                    }
                }
            }
        }
    }
}
