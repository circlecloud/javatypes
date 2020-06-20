declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        /**
                         * Represents a Brewing Stand.
                         */
                        // @ts-ignore
                        interface BrewingStand extends org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier {
                            /**
                             * Attempts to brew the current potions if possible.
                             * <p>This will work if there is a compatible recipe.</p>
                             * @return If the brew was successful
                             */
                            // @ts-ignore
                            brew(): boolean
                        }
                    }
                }
            }
        }
    }
}
