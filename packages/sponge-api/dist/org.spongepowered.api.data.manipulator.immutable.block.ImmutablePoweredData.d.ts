declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for the "powered" state. For
                             * redstone based mechanics, a "powered on" state will mean the object is
                             * currently "powered" and may emit a redstone signal. Usually applicable
                             * to {@link BlockTypes#LEVER}, {@link BlockTypes#STONE_BUTTON}, etc.
                             */
                            // @ts-ignore
                            interface ImmutablePoweredData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutablePoweredData, org.spongepowered.api.data.manipulator.mutable.block.PoweredData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "powered" state.
                                 * @return The immutable value for the "powered" state
                                 */
                                // @ts-ignore
                                powered(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
