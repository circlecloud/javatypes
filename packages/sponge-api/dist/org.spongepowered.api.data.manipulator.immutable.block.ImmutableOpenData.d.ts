declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for the "open" state. Usually applicable
                             * to {@link BlockTypes#WOODEN_DOOR}s and {@link BlockTypes#TRAPDOOR}s.
                             */
                            // @ts-ignore
                            interface ImmutableOpenData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableOpenData, org.spongepowered.api.data.manipulator.mutable.block.OpenData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "open" state.
                                 * @return The immutable value for the "open" state
                                 */
                                // @ts-ignore
                                open(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
