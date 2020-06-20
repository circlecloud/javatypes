declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Signifies that an {@link Entity} is currently "leashed" to
                             * the {@link Entity} leash holder. Usually applicable to {@link Living}
                             * entities.
                             */
                            // @ts-ignore
                            interface LeashData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.LeashData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableLeashData> {
                                /**
                                 * Gets the {@link Value} for the "leash holder".
                                 * @return The value for the leash holder
                                 */
                                // @ts-ignore
                                leashHolder(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.entity.Entity>
                            }
                        }
                    }
                }
            }
        }
    }
}
