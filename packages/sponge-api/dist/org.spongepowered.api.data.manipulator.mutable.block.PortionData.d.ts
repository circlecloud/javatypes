declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * An {@link VariantData} for the {@link PortionType}. This has some mechanics
                             * with the partial bounding boxes for the actual blocks. Usually applicable
                             * to {@link BlockTypes#DOUBLE_PLANT}, {@link BlockTypes#STONE_SLAB}
                             * {@link BlockTypes#WOODEN_DOOR}s, etc.
                             * @see Keys#PORTION_TYPE
                             */
                            // @ts-ignore
                            interface PortionData extends org.spongepowered.api.data.manipulator.mutable.VariantData<org.spongepowered.api.data.type.PortionType, org.spongepowered.api.data.manipulator.mutable.block.PortionData, org.spongepowered.api.data.manipulator.immutable.block.ImmutablePortionData> {
                            }
                        }
                    }
                }
            }
        }
    }
}
