declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        /**
                         * Represents a Furnace.
                         */
                        // @ts-ignore
                        interface Furnace extends org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier {
                            /**
                             * Attempts to smelt the current items if possible.
                             * <p>This will work if there is a compatible recipe.</p>
                             * @return If the smelt was successful
                             */
                            // @ts-ignore
                            smelt(): boolean
                            /**
                             * Gets this furnace's {@link FurnaceData}.
                             * @return The furnace data
                             */
                            // @ts-ignore
                            getFurnaceData(): org.spongepowered.api.data.manipulator.mutable.tileentity.FurnaceData
                            /**
                             * Gets the {@link MutableBoundedValue} for the already passed burn time.
                             * @return The value for the already passed burn time
                             * @see FurnaceData#passedBurnTime
                             */
                            // @ts-ignore
                            passedBurnTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            /**
                             * Gets the {@link MutableBoundedValue} for the maximum amount of fuel that
                             * can be supplied with the used fuel item.
                             * @return The value for the maximum amount of fuel that can be supplied
                             *          with the used fuel item
                             * @see FurnaceData#maxBurnTime
                             */
                            // @ts-ignore
                            maxBurnTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            /**
                             * Gets the {@link MutableBoundedValue} for the already passed cook time of
                             * the item stack in this furnace.
                             * @return The value for the already passed cook time
                             * @see FurnaceData#passedCookTime
                             */
                            // @ts-ignore
                            passedCookTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            /**
                             * Gets the {@link MutableBoundedValue} for the total time the item stack
                             * has to cook until it is cooked.
                             * @return The value for the time the item has to cook
                             * @see FurnaceData#maxCookTime
                             */
                            // @ts-ignore
                            maxCookTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                        }
                    }
                }
            }
        }
    }
}
