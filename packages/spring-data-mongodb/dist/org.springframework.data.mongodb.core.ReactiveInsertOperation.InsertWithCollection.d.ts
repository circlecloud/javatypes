declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveInsertOperation {
                        /**
                         * Collection override (optional).
                         */
                        // @ts-ignore
                        interface InsertWithCollection<T> {
                            /**
                             * Explicitly set the name of the collection. <br />
                             * Skip this step to use the default collection derived from the domain type.
                             * @param collection must not be {#literal null} nor {@literal empty}.
                             * @return new instance of {#link TerminatingInsert}. Never {@literal null}.
                             * @throws IllegalArgumentException if collection is {#literal null}.
                             */
                            // @ts-ignore
                            inCollection(collection: java.lang.String | string): org.springframework.data.mongodb.core.ReactiveInsertOperation.TerminatingInsert<T>
                        }
                    }
                }
            }
        }
    }
}
