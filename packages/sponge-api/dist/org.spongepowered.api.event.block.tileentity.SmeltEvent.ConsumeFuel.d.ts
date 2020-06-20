declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        namespace SmeltEvent {
                            /**
                             * Fires whenever fuel is consumed to refill the current burn time.
                             * Canceling this event prevents fuel from being consumed in a furnace In the current burn time to 0.
                             */
                            // @ts-ignore
                            interface ConsumeFuel extends org.spongepowered.api.event.block.tileentity.SmeltEvent, org.spongepowered.api.event.item.inventory.AffectItemStackEvent {
                            }
                        }
                    }
                }
            }
        }
    }
}
