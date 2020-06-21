declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} for the amount of "experience" stored in
                             * an {@link ExperienceOrb}.
                             */
                            // @ts-ignore
                            interface ExpOrbData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.ExpOrbData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableExpOrbData> {
                                /**
                                 * Gets the {@link Value} for the amount of "experience" stored.
                                 * @return The immutable value for the amount of "experience" stored
                                 * @see Keys#CONTAINED_EXPERIENCE
                                 */
                                // @ts-ignore
                                experience(): org.spongepowered.api.data.value.mutable.Value<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
