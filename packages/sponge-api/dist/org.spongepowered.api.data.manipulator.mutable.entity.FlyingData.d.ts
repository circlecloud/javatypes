declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} for the "flying" state of an {@link Entity}. This
                             * is usually marking that an entity is capable of flying unobtrusively in the
                             * air. Usually applicable to a {@link Humanoid} while able to fly.
                             */
                            // @ts-ignore
                            interface FlyingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.FlyingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFlyingData> {
                                /**
                                 * Gets the {@link Value} for the "flying" state.
                                 * @return The value for the flying state
                                 * @see Keys#IS_FLYING
                                 */
                                // @ts-ignore
                                flying(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
