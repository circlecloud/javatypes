declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} representing that an {@link Entity} is
                             * "leashed" to another {@link Entity}. Usually when an {@link Entity} is
                             * "leashed", their movement is impeded to the distance from the leash owner.
                             */
                            // @ts-ignore
                            interface ImmutableLeashData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableLeashData, org.spongepowered.api.data.manipulator.mutable.entity.LeashData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "leash holder".
                                 * @return The immutable value for the leash holder
                                 */
                                // @ts-ignore
                                leashHolder(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.entity.Entity>
                            }
                        }
                    }
                }
            }
        }
    }
}
