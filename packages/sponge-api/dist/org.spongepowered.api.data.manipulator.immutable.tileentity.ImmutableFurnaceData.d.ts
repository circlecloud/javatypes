declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            /**
                             * An {@link ImmutableDataManipulator} representing the {@link Furnace}.
                             */
                            // @ts-ignore
                            interface ImmutableFurnaceData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableFurnaceData, org.spongepowered.api.data.manipulator.mutable.tileentity.FurnaceData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the already passed burn
                                 * time of the {@link Furnace}. When the {@code #passedBurnTime()} is equal
                                 * to the {@link #maxBurnTime()}, the current used fuel is depleted.
                                 * @return The immutable value for the already passed burn time
                                 */
                                // @ts-ignore
                                passedBurnTime(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the maximum amount of fuel
                                 * that can be supplied with the used fuel item.
                                 * <p>This is represented by the flame icon in the {@link Furnace}, if the
                                 * flame is 100% filled the value is exactly this one. So its the maximum
                                 * of the {@link #passedBurnTime()}.</p>
                                 * @return The immutable value for the maximum amount of fuel that can be
                                 *       supplied with the used fuel item
                                 */
                                // @ts-ignore
                                maxBurnTime(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the already passed cook time
                                 * of the {@link ItemStack} in the {@link Furnace}. When this is equal
                                 * to the {@link #maxCookTime()}, the {@link ItemStack} is cooked.
                                 * @return The immutable value for the already passed cook time
                                 */
                                // @ts-ignore
                                passedCookTime(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the total time the
                                 * {@link ItemStack} has to cook until it is cooked.
                                 * @return The immutable value for the time the item has to cook
                                 */
                                // @ts-ignore
                                maxCookTime(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
