declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace query {
                        /**
                         * Represents a possible type of operation for an {@linkplain
                         * Inventory#query(QueryOperation...) inventory query}.
                         * @param <T> The argument type for the query
                         */
                        // @ts-ignore
                        interface QueryOperationType<T> extends org.spongepowered.api.CatalogType {
                            /**
                             * Returns a query operation that tests for the specified argument.
                             * @param arg The object to test the inventory against
                             * @return A query that may be passed to {#link
                             *  Inventory#query(QueryOperation...)}
                             */
                            // @ts-ignore
                            of(arg: T): org.spongepowered.api.item.inventory.query.QueryOperation<T>
                        }
                    }
                }
            }
        }
    }
}
