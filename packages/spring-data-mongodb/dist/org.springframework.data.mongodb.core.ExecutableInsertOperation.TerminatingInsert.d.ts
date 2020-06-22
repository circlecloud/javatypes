declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableInsertOperation {
                        /**
                         * Trigger insert execution by calling one of the terminating methods.
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface TerminatingInsert<T> extends org.springframework.data.mongodb.core.ExecutableInsertOperation.TerminatingBulkInsert<T> {
                            /**
                             * Insert exactly one object.
                             * @param object must not be {#literal null}.
                             * @return the inserted object.
                             * @throws IllegalArgumentException if object is {#literal null}.
                             */
                            // @ts-ignore
                            one(object: T): T
                            /**
                             * Insert a collection of objects.
                             * @param objects must not be {#literal null}.
                             * @return the inserted objects.
                             * @throws IllegalArgumentException if objects is {#literal null}.
                             */
                            // @ts-ignore
                            all(objects: java.util.Collection<any> | Array<any>): Array<any>
                        }
                    }
                }
            }
        }
    }
}
