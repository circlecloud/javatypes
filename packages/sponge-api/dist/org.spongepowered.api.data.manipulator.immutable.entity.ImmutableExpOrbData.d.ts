declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the amount of "experience" stored in
                             * an {@link ExperienceOrb}.
                             */
                            // @ts-ignore
                            interface ImmutableExpOrbData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableExpOrbData, org.spongepowered.api.data.manipulator.mutable.entity.ExpOrbData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the amount of "experience" stored.
                                 * @return The immutable value for the amount of "experience" stored
                                 */
                                // @ts-ignore
                                experience(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
