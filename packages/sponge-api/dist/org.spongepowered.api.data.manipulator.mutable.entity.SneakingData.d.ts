declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} handling the "sneaking" state of
                             * an {@link Entity}. Usually, when "sneaking", the {@link Entity} will appear
                             * to move slower and cause no "walking sounds".
                             */
                            // @ts-ignore
                            interface SneakingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.SneakingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSneakingData> {
                                /**
                                 * Gets the {@link Value} for the "sneaking" state.
                                 * @return The value for the "sneaking" state
                                 * @see Keys#IS_SNEAKING
                                 */
                                // @ts-ignore
                                sneaking(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
