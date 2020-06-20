declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} for representing the "anger" level. If an
                             * {@link Entity} can be "angered", usually the {@link Entity} may attack
                             * nearby entities until the "anger level" has decreased to {@code 0}.
                             */
                            // @ts-ignore
                            interface AngerableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.AngerableData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAngerableData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "anger" level.
                                 * @return The bounded value for the anger level
                                 * @see Keys#ANGER
                                 */
                                // @ts-ignore
                                angerLevel(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
