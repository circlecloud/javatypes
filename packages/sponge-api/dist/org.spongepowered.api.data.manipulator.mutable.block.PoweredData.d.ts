declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * An {@link DataManipulator} for the "powered" state. For redstone based
                             * mechanics, a "powered on" state will mean the object is currently "powered"
                             * and may emit a redstone signal. Usually applicable to
                             * {@link BlockTypes#LEVER}, {@link BlockTypes#STONE_BUTTON}, etc.
                             */
                            // @ts-ignore
                            interface PoweredData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.PoweredData, org.spongepowered.api.data.manipulator.immutable.block.ImmutablePoweredData> {
                                /**
                                 * Gets the {@link Value} for the "powered" state.
                                 * @return The immutable value for the "powered" state
                                 * @see Keys#POWERED
                                 */
                                // @ts-ignore
                                powered(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
