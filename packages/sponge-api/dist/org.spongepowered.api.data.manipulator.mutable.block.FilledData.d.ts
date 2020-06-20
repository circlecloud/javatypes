declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * A {@link DataManipulator} for the "filled" state. Usually applicable to
                             * {@link BlockTypes#END_PORTAL_FRAME}.
                             */
                            // @ts-ignore
                            interface FilledData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.FilledData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableFilledData> {
                                /**
                                 * Gets the {@link Value} for the "filled" state.
                                 * @return The value for the "filled" state
                                 * @see Keys#FILLED
                                 */
                                // @ts-ignore
                                filled(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
