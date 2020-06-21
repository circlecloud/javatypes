declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} that represents the distance an entity has fallen
                             * in the world. Usually the higher this value, the more damage that inflicted
                             * when the entity reaches the ground.
                             */
                            // @ts-ignore
                            interface FallDistanceData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.FallDistanceData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFallDistanceData> {
                                /**
                                 * Gets the {@link Value} for the current fall distance.
                                 * @return The value for the fall distance
                                 * @see Keys#FALL_DISTANCE
                                 */
                                // @ts-ignore
                                fallDistance(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Float | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
