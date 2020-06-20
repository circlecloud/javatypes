declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Signifies that a {@link Entity} is currently "saddled". Usually applicable
                             * to {@link Pig}s.
                             */
                            // @ts-ignore
                            interface PigSaddleData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.PigSaddleData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePigSaddleData> {
                                /**
                                 * Gets the {@link Value} for the the "saddled" state.
                                 * @return The value for the saddle state
                                 * @see Keys#PIG_SADDLE
                                 */
                                // @ts-ignore
                                saddle(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
