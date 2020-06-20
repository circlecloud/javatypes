declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        namespace SmeltEvent {
                            /**
                             * The smelting timer ticking up or down.
                             * Note that actually no stacks are affected when ticking.
                             */
                            // @ts-ignore
                            interface Tick extends org.spongepowered.api.event.block.tileentity.SmeltEvent, org.spongepowered.api.event.item.inventory.AffectItemStackEvent {
                            }
                        }
                    }
                }
            }
        }
    }
}
