declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * Signifies that a block is "open". Usually applicable to
                             * {@link BlockTypes#WOODEN_DOOR} and other doors.
                             */
                            // @ts-ignore
                            interface OpenData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.OpenData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableOpenData> {
                                /**
                                 * Gets the {@link Value} for the "open" state.
                                 * @return The value for the "open" state
                                 * @see Keys#OPEN
                                 */
                                // @ts-ignore
                                open(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
