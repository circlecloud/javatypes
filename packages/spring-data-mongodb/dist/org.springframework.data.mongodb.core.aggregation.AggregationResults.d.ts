declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Collects the results of executing an aggregation operation.
                         * @author Tobias Trelle
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @param <T> The class in which the results are mapped onto.
                         * @since 1.3
                         */
                        // @ts-ignore
                        class AggregationResults<T> extends java.lang.Object implements java.lang.Iterable<T> {
                            /**
                             * Creates a new {@link AggregationResults} instance from the given mapped and raw results.
                             * @param mappedResults must not be {#literal null}.
                             * @param rawResults must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mappedResults: java.util.List<T> | Array<T>, rawResults: Document)
                            /**
                             * Returns the aggregation results.
                             * @return 
                             */
                            // @ts-ignore
                            public getMappedResults(): Array<T>
                            /**
                             * Returns the unique mapped result. Assumes no result or exactly one.
                             * @return 
                             * @throws IllegalArgumentException in case more than one result is available.
                             */
                            // @ts-ignore
                            public getUniqueMappedResult(): T
                            // @ts-ignore
                            public iterator(): java.util.Iterator<T>
                            /**
                             * Returns the server that has been used to perform the aggregation.
                             * @return 
                             */
                            // @ts-ignore
                            public getServerUsed(): string
                            /**
                             * Returns the raw result that was returned by the server.
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public getRawResults(): Document
                        }
                    }
                }
            }
        }
    }
}
