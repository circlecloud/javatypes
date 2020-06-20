declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * Signifies that the holder is "extended". Usually applicable to
                             * {@link BlockTypes#PISTON}.
                             */
                            // @ts-ignore
                            interface ExtendedData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.ExtendedData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableExtendedData> {
                                /**
                                 * Gets the {@link Value} for the "extended" state.
                                 * @return The value for the "extended" state
                                 * @see Keys#EXTENDED
                                 */
                                // @ts-ignore
                                extended(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
