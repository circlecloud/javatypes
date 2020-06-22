declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableFindOperation {
                        /**
                         * {@link ExecutableFind} provides methods for constructing lookup operations in a fluent way.
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface ExecutableFind<T> extends org.springframework.data.mongodb.core.ExecutableFindOperation.FindWithCollection<T>, org.springframework.data.mongodb.core.ExecutableFindOperation.FindWithProjection<T>, org.springframework.data.mongodb.core.ExecutableFindOperation.FindDistinct {
                        }
                    }
                }
            }
        }
    }
}
