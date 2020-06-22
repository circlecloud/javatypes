declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveMapReduceOperation {
                        /**
                         * {@link ReactiveMapReduce} provides methods for constructing reactive mapReduce operations in a fluent way.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface ReactiveMapReduce<T> extends org.springframework.data.mongodb.core.ReactiveMapReduceOperation.MapReduceWithMapFunction<T>, org.springframework.data.mongodb.core.ReactiveMapReduceOperation.MapReduceWithReduceFunction<T>, org.springframework.data.mongodb.core.ReactiveMapReduceOperation.MapReduceWithCollection<T>, org.springframework.data.mongodb.core.ReactiveMapReduceOperation.MapReduceWithProjection<T>, org.springframework.data.mongodb.core.ReactiveMapReduceOperation.MapReduceWithOptions<T> {
                        }
                    }
                }
            }
        }
    }
}
