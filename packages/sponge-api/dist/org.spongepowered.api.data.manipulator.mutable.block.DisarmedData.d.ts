declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * A {@link DataManipulator} for representing a "disarmed" state. Usually
                             * applicable to {@link BlockTypes#TRIPWIRE} and
                             * {@link BlockTypes#TRIPWIRE_HOOK}.
                             */
                            // @ts-ignore
                            interface DisarmedData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.DisarmedData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableDisarmedData> {
                                /**
                                 * Gets the {@link Value} for the current "disarmed" state.
                                 * @return The value for the "disarmed" state
                                 * @see Keys#DISARMED
                                 */
                                // @ts-ignore
                                disarmed(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
