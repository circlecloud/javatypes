declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace transaction {
                        // @ts-ignore
                        class SlotTransaction extends org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot> {
                            /**
                             * Creates a new {@link SlotTransaction} with the provided {@link Slot},
                             * {@link ItemStackSnapshot original snapshot}, and
                             * {@link ItemStackSnapshot replacement snapshot}.
                             * @param slot The slot
                             * @param original The original item stack snapshot
                             * @param defaultReplacement The replacement item stack snapshot
                             */
                            // @ts-ignore
                            constructor(slot: org.spongepowered.api.item.inventory.Slot, original: org.spongepowered.api.item.inventory.ItemStackSnapshot, defaultReplacement: org.spongepowered.api.item.inventory.ItemStackSnapshot)
                            /**
                             * Sets the custom {@link ItemStack} output of this
                             * {@link SlotTransaction}.
                             * @param stack The stack
                             */
                            // @ts-ignore
                            public setCustom(stack: org.spongepowered.api.item.inventory.ItemStack): void
                            /**
                             * Gets the {@link Slot} of this {@link SlotTransaction}.
                             * @return The slot of this transaction
                             */
                            // @ts-ignore
                            public getSlot(): org.spongepowered.api.item.inventory.Slot
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
