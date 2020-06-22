declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapreduce {
                        /**
                         * Collects the results of performing a MapReduce operations.
                         * @author Mark Pollack
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @param <T> The class in which the results are mapped onto, accessible via an iterator.
                         */
                        // @ts-ignore
                        class MapReduceResults<T> extends java.lang.Object implements java.lang.Iterable<T> {
                            /**
                             * Creates a new {@link MapReduceResults} from the given mapped results and the raw one.
                             * @param mappedResults must not be {#literal null}.
                             * @param rawResults must not be {#literal null}.
                             * @deprecated since 1.7. Please use {#link #MapReduceResults(List, MapReduceOutput)}
                             */
                            // @ts-ignore
                            constructor(mappedResults: java.util.List<T> | Array<T>, rawResults: Document)
                            /**
                             * Creates a new {@link MapReduceResults} from the given mapped results and the {@link MapReduceOutput}.
                             * @param mappedResults must not be {#literal null}.
                             * @param mapReduceOutput must not be {#literal null}.
                             * @since 1.7
                             */
                            // @ts-ignore
                            constructor(mappedResults: java.util.List<T> | Array<T>, mapReduceOutput: MapReduceOutput)
                            // @ts-ignore
                            public iterator(): java.util.Iterator<T>
                            // @ts-ignore
                            public getTiming(): org.springframework.data.mongodb.core.mapreduce.MapReduceTiming
                            // @ts-ignore
                            public getCounts(): org.springframework.data.mongodb.core.mapreduce.MapReduceCounts
                            // @ts-ignore
                            public getOutputCollection(): string
                            // @ts-ignore
                            public getRawResults(): Document
                        }
                    }
                }
            }
        }
    }
}
