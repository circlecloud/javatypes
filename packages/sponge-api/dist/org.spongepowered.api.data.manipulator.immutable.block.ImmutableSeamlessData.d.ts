declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for the "seamless" state. This is
                             * normally a simple visual change for the applicable block types of
                             * {@link BlockTypes#DOUBLE_STONE_SLAB}, {@link BlockTypes#DOUBLE_STONE_SLAB2},
                             * and {@link BlockTypes#DOUBLE_WOODEN_SLAB}.
                             */
                            // @ts-ignore
                            interface ImmutableSeamlessData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableSeamlessData, org.spongepowered.api.data.manipulator.mutable.block.SeamlessData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "seamless" state.
                                 * @return The immutable value for the "seamless" state
                                 */
                                // @ts-ignore
                                seamless(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
