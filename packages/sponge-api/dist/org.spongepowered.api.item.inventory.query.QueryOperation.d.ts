declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace query {
                        /**
                         * Represents an operation that is part of a query. The details of the
                         * filtering are implementation-specific and are not exposed in this
                         * interface.
                         */
                        // @ts-ignore
                        interface QueryOperation<T> {
                            /**
                             * Returns the {@link QueryOperationType} used to
                             * {@linkplain QueryOperationType#of(Object) create} this query operation.
                             * @return The type of this query operation
                             */
                            // @ts-ignore
                            getType(): org.spongepowered.api.item.inventory.query.QueryOperationType<T>
                        }
                    }
                }
            }
        }
    }
}
