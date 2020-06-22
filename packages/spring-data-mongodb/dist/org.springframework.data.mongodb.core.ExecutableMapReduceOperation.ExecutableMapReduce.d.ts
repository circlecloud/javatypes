declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableMapReduceOperation {
                        /**
                         * {@link ExecutableMapReduce} provides methods for constructing mapReduce operations in a fluent way.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface ExecutableMapReduce<T> extends org.springframework.data.mongodb.core.ExecutableMapReduceOperation.MapReduceWithMapFunction<T>, org.springframework.data.mongodb.core.ExecutableMapReduceOperation.MapReduceWithReduceFunction<T>, org.springframework.data.mongodb.core.ExecutableMapReduceOperation.MapReduceWithCollection<T>, org.springframework.data.mongodb.core.ExecutableMapReduceOperation.MapReduceWithProjection<T>, org.springframework.data.mongodb.core.ExecutableMapReduceOperation.MapReduceWithOptions<T> {
                        }
                    }
                }
            }
        }
    }
}
