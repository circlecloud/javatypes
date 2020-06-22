declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveInsertOperation {
                        /**
                         * Compose insert execution by calling one of the terminating methods.
                         */
                        // @ts-ignore
                        interface TerminatingInsert<T> {
                            /**
                             * Insert exactly one object.
                             * @param object must not be {#literal null}.
                             * @return {#link Mono} emitting the inserted {@code object} when operation has completed. Never {@literal null}.
                             * @throws IllegalArgumentException if object is {#literal null}.
                             */
                            // @ts-ignore
                            one(object: T): object
                            /**
                             * Insert a collection of objects.
                             * @param objects must not be {#literal null}.
                             * @return {#literal Flux} emitting the inserted {@code objects} ony by one. Never {@literal null}.
                             * @throws IllegalArgumentException if objects is {#literal null}.
                             */
                            // @ts-ignore
                            all(objects: java.util.Collection<any> | Array<any>): object
                        }
                    }
                }
            }
        }
    }
}
