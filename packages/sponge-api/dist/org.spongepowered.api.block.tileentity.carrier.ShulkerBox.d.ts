declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        /**
                         * Represents a ShulkerBox. ShulkerBoxes are specific in that when they are
                         * mined, they drop themselves with the contents added in themselves, so placing
                         * them back as items will result in a restored inventory.
                         */
                        // @ts-ignore
                        interface ShulkerBox extends org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier {
                            /**
                             * Gets a copy of the {@link DyeableData} representing the color of this
                             * {@link ShulkerBox}.
                             * @return A copy of the dye data
                             */
                            // @ts-ignore
                            getDyeData(): org.spongepowered.api.data.manipulator.mutable.DyeableData
                            /**
                             * Gets the current {@link Value} of {@link DyeColor} for this
                             * {@link ShulkerBox}.
                             * @return The current value of dye color for this shulker box
                             */
                            // @ts-ignore
                            color(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DyeColor>
                        }
                    }
                }
            }
        }
    }
}
