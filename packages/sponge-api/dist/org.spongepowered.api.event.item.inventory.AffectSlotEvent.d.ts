declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface AffectSlotEvent extends org.spongepowered.api.event.item.inventory.AffectItemStackEvent {
                            // @ts-ignore
                            getTransactions(): Array<org.spongepowered.api.item.inventory.transaction.SlotTransaction>
                            // @ts-ignore
                            filter(predicate: java.util.function$.Predicate<org.spongepowered.api.item.inventory.ItemStack>): Array<org.spongepowered.api.item.inventory.transaction.SlotTransaction>
                        }
                    }
                }
            }
        }
    }
}
