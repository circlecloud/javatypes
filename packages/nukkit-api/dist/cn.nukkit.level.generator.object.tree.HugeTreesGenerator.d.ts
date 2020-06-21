declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace object {
                    namespace tree {
                        // @ts-ignore
                        abstract class HugeTreesGenerator extends cn.nukkit.level.generator.object.tree.TreeGenerator {
                            // @ts-ignore
                            constructor(baseHeightIn: number /*int*/, extraRandomHeightIn: number /*int*/, woodMetadataIn: cn.nukkit.block.Block, leavesMetadataIn: cn.nukkit.block.Block)
                            /**
                             * The base height of the tree
                             */
                            // @ts-ignore
                            readonly baseHeight: number /*int*/
                            /**
                             * Sets the metadata for the wood blocks used
                             */
                            // @ts-ignore
                            readonly woodMetadata: cn.nukkit.block.Block
                            /**
                             * Sets the metadata for the leaves used in huge trees
                             */
                            // @ts-ignore
                            readonly leavesMetadata: cn.nukkit.block.Block
                            // @ts-ignore
                            extraRandomHeight: number /*int*/
                            // @ts-ignore
                            getHeight(rand: cn.nukkit.math.NukkitRandom): number /*int*/
                            // @ts-ignore
                            ensureGrowable(worldIn: cn.nukkit.level.ChunkManager, rand: cn.nukkit.math.NukkitRandom, treePos: cn.nukkit.math.Vector3, p_175929_4_: number /*int*/): boolean
                            // @ts-ignore
                            growLeavesLayerStrict(worldIn: cn.nukkit.level.ChunkManager, layerCenter: cn.nukkit.math.Vector3, width: number /*int*/): void
                            // @ts-ignore
                            growLeavesLayer(worldIn: cn.nukkit.level.ChunkManager, layerCenter: cn.nukkit.math.Vector3, width: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
