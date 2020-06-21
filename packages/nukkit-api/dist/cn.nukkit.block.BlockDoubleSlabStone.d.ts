declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockDoubleSlabStone extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public static readonly STONE: number /*int*/
                // @ts-ignore
                public static readonly SANDSTONE: number /*int*/
                // @ts-ignore
                public static readonly WOODEN: number /*int*/
                // @ts-ignore
                public static readonly COBBLESTONE: number /*int*/
                // @ts-ignore
                public static readonly BRICK: number /*int*/
                // @ts-ignore
                public static readonly STONE_BRICK: number /*int*/
                // @ts-ignore
                public static readonly QUARTZ: number /*int*/
                // @ts-ignore
                public static readonly NETHER_BRICK: number /*int*/
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public canHarvestWithHand(): boolean
            }
        }
    }
}
