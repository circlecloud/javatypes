declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace transaction {
                        namespace InventoryTransactionResult {
                            // @ts-ignore
                            class Builder extends java.lang.Object implements org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult, org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Builder> {
                                /**
                                 * Sets the {@link Type} of transaction result being built.
                                 * @param type The type of transaction result
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                public type(type: org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Type): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Builder
                                /**
                                 * Adds the provided {@link ItemStack itemstacks} as stacks that have been
                                 * "rejected".
                                 * @param itemStacks The itemstacks being rejected
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                public reject(...itemStacks: org.spongepowered.api.item.inventory.ItemStack[]): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Builder
                                /**
                                 * Adds the provided {@link ItemStack itemstacks} as stacks that are
                                 * being replaced.
                                 * @param itemStacks The itemstacks being replaced
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                public replace(...itemStacks: org.spongepowered.api.item.inventory.ItemStack[]): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Builder
                                /**
                                 * Creates a new {@link InventoryTransactionResult}.
                                 * @return A new inventory transaction result
                                 */
                                // @ts-ignore
                                public build(): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult
                                // @ts-ignore
                                public from(value: org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Builder
                                // @ts-ignore
                                public reset(): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult.Builder
                            }
                        }
                    }
                }
            }
        }
    }
}
