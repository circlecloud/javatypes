declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for the "filled" state. Usually applicable to
                             * {@link BlockTypes#END_PORTAL_FRAME}.
                             */
                            // @ts-ignore
                            interface ImmutableFilledData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableFilledData, org.spongepowered.api.data.manipulator.mutable.block.FilledData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "filled" state.
                                 * @return The immutable value for the "filled" state
                                 */
                                // @ts-ignore
                                filled(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
