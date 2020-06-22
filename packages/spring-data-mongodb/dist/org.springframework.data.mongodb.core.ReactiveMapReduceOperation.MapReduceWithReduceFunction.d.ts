declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveMapReduceOperation {
                        /**
                         * Provide the Javascript {@code function()} used to reduce matching documents.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface MapReduceWithReduceFunction<T> {
                            /**
                             * Set the Javascript map {@code function()}.
                             * @param reduceFunction must not be {#literal null} nor empty.
                             * @return new instance of {#link ReactiveMapReduce}.
                             * @throws IllegalArgumentException if {#literal reduceFunction} is {@literal null} or empty.
                             */
                            // @ts-ignore
                            reduce(reduceFunction: java.lang.String | string): org.springframework.data.mongodb.core.ReactiveMapReduceOperation.ReactiveMapReduce<T>
                        }
                    }
                }
            }
        }
    }
}
