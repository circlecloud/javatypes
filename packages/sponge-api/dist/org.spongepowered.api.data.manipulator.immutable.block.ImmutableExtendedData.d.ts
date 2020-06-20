declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for representing the "extended" state.
                             * Usually applicable to {@link BlockTypes#PISTON}.
                             */
                            // @ts-ignore
                            interface ImmutableExtendedData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableExtendedData, org.spongepowered.api.data.manipulator.mutable.block.ExtendedData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "extended" state.
                                 * @return The immutable value for the "extended" state
                                 */
                                // @ts-ignore
                                extended(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
