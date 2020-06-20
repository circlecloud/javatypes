declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents a toggle for an entity being "aggressive" and resorting to
                             * attacking other nearby entities if possible.
                             */
                            // @ts-ignore
                            interface AggressiveData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.AggressiveData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAggressiveData> {
                                /**
                                 * Gets the {@link Value} for the "aggressive" state.
                                 * @return The value for the aggressive state
                                 * @see Keys#ANGRY
                                 */
                                // @ts-ignore
                                aggressive(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
