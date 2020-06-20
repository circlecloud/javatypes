declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * A {@link ImmutableDataManipulator} that represents the distance an entity has fallen
                             * in the world. Usually the higher this value, the more damage that inflicted
                             * when the entity reaches the ground.
                             */
                            // @ts-ignore
                            interface ImmutableFallDistanceData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFallDistanceData, org.spongepowered.api.data.manipulator.mutable.entity.FallDistanceData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the current fall distance.
                                 * @return The value for the fall distance
                                 */
                                // @ts-ignore
                                fallDistance(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Float>
                            }
                        }
                    }
                }
            }
        }
    }
}
