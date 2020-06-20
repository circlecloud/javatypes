declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the "is playing" state of
                             * {@link Villager}s that are currently "babies".
                             */
                            // @ts-ignore
                            interface ImmutablePlayingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePlayingData, org.spongepowered.api.data.manipulator.mutable.entity.PlayingData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "playing" state.
                                 * @return The immutable value for the playing state
                                 */
                                // @ts-ignore
                                playing(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
