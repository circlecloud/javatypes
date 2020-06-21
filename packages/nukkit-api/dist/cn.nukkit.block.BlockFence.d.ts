declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/12/7 by xtypr.
             * Package cn.nukkit.block in project Nukkit .
             */
            // @ts-ignore
            class BlockFence extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public static readonly FENCE_OAK: number /*int*/
                // @ts-ignore
                public static readonly FENCE_SPRUCE: number /*int*/
                // @ts-ignore
                public static readonly FENCE_BIRCH: number /*int*/
                // @ts-ignore
                public static readonly FENCE_JUNGLE: number /*int*/
                // @ts-ignore
                public static readonly FENCE_ACACIA: number /*int*/
                // @ts-ignore
                public static readonly FENCE_DARK_OAK: number /*int*/
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public getBurnChance(): number /*int*/
                // @ts-ignore
                public getBurnAbility(): number /*int*/
                // @ts-ignore
                public canConnect(block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
            }
        }
    }
}
