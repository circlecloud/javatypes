declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "sneaking" state of
                             * an {@link Entity}. Usually, when "sneaking", the {@link Entity} will appear
                             * to move slower and cause no "walking sounds".
                             */
                            // @ts-ignore
                            interface ImmutableSneakingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSneakingData, org.spongepowered.api.data.manipulator.mutable.entity.SneakingData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "sneaking" state.
                                 * @return The immutable value for the "sneaking" state
                                 */
                                // @ts-ignore
                                sneaking(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
