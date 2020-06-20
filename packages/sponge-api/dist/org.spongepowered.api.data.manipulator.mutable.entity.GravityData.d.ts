declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for gravity. If the value is true, the
                             * {@link Entity} will have gravity.
                             */
                            // @ts-ignore
                            interface GravityData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.GravityData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableGravityData> {
                                /**
                                 * Gets the {@link Value} of the gravity of an {@link Entity}. Returns true
                                 * when the {@link Entity} has gravity.
                                 * @return Whether the entity is affected by gravity
                                 * @see Keys#HAS_GRAVITY
                                 */
                                // @ts-ignore
                                gravity(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
