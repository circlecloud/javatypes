declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableMapReduceOperation {
                        /**
                         * Additional mapReduce options (Optional).
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface MapReduceWithOptions<T> {
                            /**
                             * Set additional options to apply to the mapReduce operation.
                             * @param options must not be {#literal null}.
                             * @return new instance of {#link ExecutableMapReduce}.
                             * @throws IllegalArgumentException if options is {#literal null}.
                             */
                            // @ts-ignore
                            with(options: org.springframework.data.mongodb.core.mapreduce.MapReduceOptions): org.springframework.data.mongodb.core.ExecutableMapReduceOperation.ExecutableMapReduce<T>
                        }
                    }
                }
            }
        }
    }
}
