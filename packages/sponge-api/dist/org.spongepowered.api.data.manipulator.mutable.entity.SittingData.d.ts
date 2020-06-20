declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Signifies that an {@link Entity} is currently "sitting". Usually applicable
                             * to {@link Wolf} and {@link Ocelot}s.
                             */
                            // @ts-ignore
                            interface SittingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.SittingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSittingData> {
                                /**
                                 * Gets the {@link Value} for the "sitting" state.
                                 * @return The value for the sitting states
                                 * @see Keys#IS_SITTING
                                 */
                                // @ts-ignore
                                sitting(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
