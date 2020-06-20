declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for the "is playing" state of
                             * {@link Villager}s that are currently "babies".
                             */
                            // @ts-ignore
                            interface PlayingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.PlayingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePlayingData> {
                                /**
                                 * Gets the {@link Value} for the "playing" state.
                                 * @return The value for the playing state
                                 * @see Keys#IS_PLAYING
                                 */
                                // @ts-ignore
                                playing(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
