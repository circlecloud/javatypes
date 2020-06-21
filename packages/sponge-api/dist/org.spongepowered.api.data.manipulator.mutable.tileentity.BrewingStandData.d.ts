declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            /**
                             * An {@link DataManipulator} handling the {@link BrewingStand}
                             * information, such as the remaining brew time.
                             */
                            // @ts-ignore
                            interface BrewingStandData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.tileentity.BrewingStandData, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableBrewingStandData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the remaining brew time.
                                 * <p>If nothing is brewing the value is 0.</p>
                                 * @return The value for the remaining brew time
                                 * @see Keys#REMAINING_BREW_TIME
                                 */
                                // @ts-ignore
                                remainingBrewTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
