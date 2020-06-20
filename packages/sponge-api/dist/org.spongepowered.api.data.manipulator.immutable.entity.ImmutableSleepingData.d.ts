declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the "sleeping" state of a
                             * {@link Player}. Also applicable to {@link Bat}s where they can be
                             * shown as "sleeping".
                             */
                            // @ts-ignore
                            interface ImmutableSleepingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSleepingData, org.spongepowered.api.data.manipulator.mutable.entity.SleepingData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "sleeping" state.
                                 * @return The immutable value for the "sleeping" state
                                 */
                                // @ts-ignore
                                sleeping(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for whether the owning {@link Player}'s
                                 * "sleeping" state is ignored when vanilla mechanics dictate that all
                                 * {@link Player}s must be sleeping to advance through the night.
                                 * @return The immutable value for ignoring sleep
                                 */
                                // @ts-ignore
                                ignoreSleeping(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
