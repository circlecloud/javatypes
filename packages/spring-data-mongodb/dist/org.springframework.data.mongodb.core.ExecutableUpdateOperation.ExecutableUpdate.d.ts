declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableUpdateOperation {
                        /**
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface ExecutableUpdate<T> extends org.springframework.data.mongodb.core.ExecutableUpdateOperation.UpdateWithCollection<T>, org.springframework.data.mongodb.core.ExecutableUpdateOperation.UpdateWithQuery<T>, org.springframework.data.mongodb.core.ExecutableUpdateOperation.UpdateWithUpdate<T> {
                        }
                    }
                }
            }
        }
    }
}
