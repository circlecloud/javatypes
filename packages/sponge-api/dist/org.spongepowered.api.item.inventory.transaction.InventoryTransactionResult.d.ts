declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace transaction {
                        /**
                         * An interface for data returned by inventory operations which encapsulates the
                         * result of an attempted operation.
                         */
                        // @ts-ignore
                        class InventoryTransactionResult extends java.lang.Object {
                            /**
                             * Begin building a new InventoryTransactionResult.
                             * @return A new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Builder
                            /**
                             * Returns a builder which indicates that the transaction succeeded, but the
                             * transaction result was no-op.
                             * @return A new transaction result
                             */
                            // @ts-ignore
                            successNoTransactions(): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult
                            /**
                             * Returns a builder which indicates that the transaction failed, and the
                             * transaction result was no-op.
                             * @return A new transaction result
                             */
                            // @ts-ignore
                            failNoTransactions(): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult
                            /**
                             * Gets the type of result.
                             * @return the type of result
                             */
                            // @ts-ignore
                            getType(): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Type
                            /**
                             * If items were supplied to the operation, this collection will return any
                             * items which were rejected by the target inventory.
                             * @return any items which were rejected as part of the inventory operation
                             */
                            // @ts-ignore
                            getRejectedItems(): java.util.Collection<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                            /**
                             * If the operation replaced items in the inventory, this collection returns
                             * the ItemStacks which were replaced.
                             * @return any items which were ejected as part of the inventory operation
                             */
                            // @ts-ignore
                            getReplacedItems(): java.util.Collection<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                        }
                    }
                }
            }
        }
    }
}
