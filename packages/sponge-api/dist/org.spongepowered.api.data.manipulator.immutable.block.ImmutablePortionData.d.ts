declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableVariantData} for the {@link PortionType}. This has some
                             * mechanics with the partial bounding boxes for the actual blocks. Usually
                             * applicable to {@link BlockTypes#DOUBLE_PLANT}, {@link BlockTypes#STONE_SLAB}
                             * {@link BlockTypes#WOODEN_DOOR}s, etc.
                             */
                            // @ts-ignore
                            interface ImmutablePortionData extends org.spongepowered.api.data.manipulator.immutable.ImmutableVariantData<org.spongepowered.api.data.type.PortionType, org.spongepowered.api.data.manipulator.immutable.block.ImmutablePortionData, org.spongepowered.api.data.manipulator.mutable.block.PortionData> {
                            }
                        }
                    }
                }
            }
        }
    }
}
