declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveMapReduceOperation {
                        /**
                         * Provide the Javascript {@code function()} used to map matching documents.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface MapReduceWithMapFunction<T> {
                            /**
                             * Set the Javascript map {@code function()}.
                             * @param mapFunction must not be {#literal null} nor empty.
                             * @return new instance of {#link MapReduceWithReduceFunction}.
                             * @throws IllegalArgumentException if {#literal mapFunction} is {@literal null} or empty.
                             */
                            // @ts-ignore
                            map(mapFunction: java.lang.String | string): org.springframework.data.mongodb.core.ReactiveMapReduceOperation.MapReduceWithReduceFunction<T>
                        }
                    }
                }
            }
        }
    }
}
