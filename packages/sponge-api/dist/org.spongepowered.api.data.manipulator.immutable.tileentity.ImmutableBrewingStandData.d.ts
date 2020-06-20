declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the {@link BrewingStand}
                             * information, such as the remaining brew time.
                             */
                            // @ts-ignore
                            interface ImmutableBrewingStandData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableBrewingStandData, org.spongepowered.api.data.manipulator.mutable.tileentity.BrewingStandData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the remaining brew time.
                                 * <p>If nothing is brewing the immutable value is 0.</p>
                                 * @return The immutable value for the remaining brew time
                                 */
                                // @ts-ignore
                                remainingBrewTime(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
