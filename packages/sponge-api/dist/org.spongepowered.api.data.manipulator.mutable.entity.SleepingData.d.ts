declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} for the "sleeping" state of a
                             * {@link Player}. Also applicable to {@link Bat}s where they can be
                             * shown as "sleeping".
                             */
                            // @ts-ignore
                            interface SleepingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.SleepingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSleepingData> {
                                /**
                                 * Gets the {@link Value} for whether the owning {@link Player}'s
                                 * "sleeping" state is ignored when vanilla mechanics dictate that all
                                 * {@link Player}s must be sleeping to advance through the night.
                                 * @return The immutable value for ignoring sleep
                                 * @see Keys#IS_SLEEPING
                                 */
                                // @ts-ignore
                                sleeping(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
