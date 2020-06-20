declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "sprinting" state of an
                             * {@link Entity}. Usually the {@link Entity} will have faster movement
                             * speed than normal.
                             */
                            // @ts-ignore
                            interface ImmutableSprintData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSprintData, org.spongepowered.api.data.manipulator.mutable.entity.SprintData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "sprinting" state.
                                 * @return The immutable value for the sprinting state
                                 */
                                // @ts-ignore
                                sprinting(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
