declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * A {@link DataManipulator} for the "seamless" state. This is normally a
                             * simple visual change for the applicable block types of
                             * {@link BlockTypes#DOUBLE_STONE_SLAB}, {@link BlockTypes#DOUBLE_STONE_SLAB2},
                             * and {@link BlockTypes#DOUBLE_WOODEN_SLAB}.
                             */
                            // @ts-ignore
                            interface SeamlessData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.SeamlessData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableSeamlessData> {
                                /**
                                 * Gets the {@link Value} for the "seamless" state.
                                 * @return The immutable value for the "seamless" state
                                 * @see Keys#SEAMLESS
                                 */
                                // @ts-ignore
                                seamless(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
