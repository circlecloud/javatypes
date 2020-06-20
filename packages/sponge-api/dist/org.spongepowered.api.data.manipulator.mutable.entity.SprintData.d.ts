declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} handling the "sprinting" state of an
                             * {@link Entity}. Usually the {@link Entity} will have faster movement
                             * speed than normal.
                             */
                            // @ts-ignore
                            interface SprintData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.SprintData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSprintData> {
                                /**
                                 * Gets the {@link Value} for the "sprinting" state.
                                 * @return The value for the sprinting state
                                 * @see Keys#IS_SPRINTING
                                 */
                                // @ts-ignore
                                sprinting(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
