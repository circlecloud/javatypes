declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        namespace SmeltEvent {
                            /**
                             * The first tick of an item smelting.
                             * Note that actually no stacks are affected when starting to smelt.
                             */
                            // @ts-ignore
                            interface Start extends org.spongepowered.api.event.block.tileentity.SmeltEvent, org.spongepowered.api.event.item.inventory.AffectItemStackEvent {
                            }
                        }
                    }
                }
            }
        }
    }
}
