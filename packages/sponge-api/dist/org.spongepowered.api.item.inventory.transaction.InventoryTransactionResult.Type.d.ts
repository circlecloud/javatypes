declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace transaction {
                        namespace InventoryTransactionResult {
                            // @ts-ignore
                            class Type extends java.lang.Enum<org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Type> {
                                /**
                                 * The actual result of the operation is undefined, this probably
                                 * indicates that something went wrong with the operation that the
                                 * inventory couldn't handle or didn't expect. The state of the
                                 * inventory is undefined.
                                 */
                                // @ts-ignore
                                readonly UNDEFINED: org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Type
                                /**
                                 * The inventory operation succeeded.
                                 */
                                // @ts-ignore
                                readonly SUCCESS: org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Type
                                /**
                                 * The inventory operation failed for an <em>expected</em> reason (such
                                 * as the inventory being full or not accepting items of a supplied
                                 * type. The condition of the inventory is unchanged.
                                 */
                                // @ts-ignore
                                readonly FAILURE: org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Type
                                /**
                                 * The inventory operation failed because an <em>unexpected</em>
                                 * condition occurred. The state of the inventory is undefined.
                                 */
                                // @ts-ignore
                                readonly ERROR: org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Type
                                /**
                                 * An operation was cancelled by a third party (eg. an inventory event
                                 * was cancelled). The condition of the inventory is unchanged.
                                 */
                                // @ts-ignore
                                readonly CANCELLED: org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Type
                                // @ts-ignore
                                values(): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Type[]
                                // @ts-ignore
                                valueOf(name: java.lang.String | string): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Type
                            }
                        }
                    }
                }
            }
        }
    }
}
