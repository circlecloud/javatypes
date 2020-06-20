declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * An {@link VariantData} for the {@link TreeType}. The main use for this type
                             * is for a visual difference in the types of tree related blocks. Usually
                             * applicable to {@link BlockTypes#SAPLING}, {@link BlockTypes#PLANKS},
                             * {@link BlockTypes#LOG}, etc.
                             * @see Keys#TREE_TYPE
                             */
                            // @ts-ignore
                            interface TreeData extends org.spongepowered.api.data.manipulator.mutable.VariantData<org.spongepowered.api.data.type.TreeType, org.spongepowered.api.data.manipulator.mutable.block.TreeData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableTreeData> {
                            }
                        }
                    }
                }
            }
        }
    }
}
