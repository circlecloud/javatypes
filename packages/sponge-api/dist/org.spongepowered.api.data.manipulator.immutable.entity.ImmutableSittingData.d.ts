declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} representing the "sitting" state of an
                             * {@link Entity}. Usually applies to {@link Wolf} entities and
                             * {@link Ocelot}s.
                             */
                            // @ts-ignore
                            interface ImmutableSittingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSittingData, org.spongepowered.api.data.manipulator.mutable.entity.SittingData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "sitting" state.
                                 * @return The immutable value for the sitting states
                                 */
                                // @ts-ignore
                                sitting(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
