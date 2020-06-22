declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableInsertOperation {
                        /**
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface ExecutableInsert<T> extends org.springframework.data.mongodb.core.ExecutableInsertOperation.TerminatingInsert<T>, org.springframework.data.mongodb.core.ExecutableInsertOperation.InsertWithCollection<T>, org.springframework.data.mongodb.core.ExecutableInsertOperation.InsertWithBulkMode<T> {
                        }
                    }
                }
            }
        }
    }
}
