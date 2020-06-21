declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            /**
                             * Represents the data for a {@link Furnace}.
                             */
                            // @ts-ignore
                            interface FurnaceData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.tileentity.FurnaceData, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableFurnaceData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the already passed burn time of
                                 * the {@link Furnace}. When this is equal to the {@link #maxBurnTime()},
                                 * the current used fuel is depleted.
                                 * @return The value for the already passed burn time
                                 * @see Keys#PASSED_BURN_TIME
                                 */
                                // @ts-ignore
                                passedBurnTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link MutableBoundedValue} for the maximum amount of fuel that
                                 * can be supplied with the used fuel item.
                                 * <p>This is represented by the flame icon in the {@link Furnace}, if the
                                 * flame is 100% filled the value is exactly this one. So its the maximum
                                 * of the {@link #passedBurnTime()}.</p>
                                 * @return The value for the maximum amount of fuel that can be supplied
                                 *      with the used fuel item
                                 * @see Keys#MAX_BURN_TIME
                                 */
                                // @ts-ignore
                                maxBurnTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link MutableBoundedValue} for the already passed cook time of
                                 * the {@link ItemStack} in the {@link Furnace}. When this is equal to the
                                 * {@link #maxCookTime()}, the {@link ItemStack} is cooked.
                                 * @return The value for the already passed cook time
                                 * @see Keys#PASSED_COOK_TIME
                                 */
                                // @ts-ignore
                                passedCookTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link MutableBoundedValue} for the total time the
                                 * {@link ItemStack} has to cook until it is cooked.
                                 * <p>This is represented by the arrow icon in the {@link Furnace}, if the
                                 * arrow is 100% filled the value is exact this one. So its the maximum of
                                 * the {@link #passedCookTime()}.</p>
                                 * @return The value for the time the item has to cook
                                 * @see Keys#MAX_COOK_TIME
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
}
