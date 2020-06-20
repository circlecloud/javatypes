declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for representing the "anger" level. If
                             * an {@link Entity} can be "angered", usually the {@link Entity} may attack
                             * nearby entities until the "anger level" has decreased to {@code 0}.
                             */
                            // @ts-ignore
                            interface ImmutableAngerableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAngerableData, org.spongepowered.api.data.manipulator.mutable.entity.AngerableData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "anger" level.
                                 * @return The immutable bounded value for the anger level
                                 */
                                // @ts-ignore
                                angerLevel(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
