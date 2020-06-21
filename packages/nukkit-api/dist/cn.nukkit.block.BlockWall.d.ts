declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockWall extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public static readonly NONE_MOSSY_WALL: number /*int*/
                // @ts-ignore
                public static readonly MOSSY_WALL: number /*int*/
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public isSolid(): boolean
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public canConnect(block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public canHarvestWithHand(): boolean
            }
        }
    }
}
