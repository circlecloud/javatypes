declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for representing a "disarmed" state.
                             * Usually applicable to {@link BlockTypes#TRIPWIRE} and
                             * {@link BlockTypes#TRIPWIRE_HOOK}.
                             */
                            // @ts-ignore
                            interface ImmutableDisarmedData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableDisarmedData, org.spongepowered.api.data.manipulator.mutable.block.DisarmedData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the current "disarmed" state.
                                 * @return The immutable value for the "disarmed" state
                                 */
                                // @ts-ignore
                                disarmed(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
