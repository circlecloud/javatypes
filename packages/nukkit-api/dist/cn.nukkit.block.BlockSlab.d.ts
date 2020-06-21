declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class BlockSlab extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor(meta: number /*int*/, doubleSlab: number /*int*/)
                // @ts-ignore
                readonly doubleSlab: number /*int*/
                // @ts-ignore
                public getMinY(): number /*double*/
                // @ts-ignore
                public getMaxY(): number /*double*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
            }
        }
    }
}
