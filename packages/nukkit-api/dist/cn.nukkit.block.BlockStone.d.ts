declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockStone extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public static readonly NORMAL: number /*int*/
                // @ts-ignore
                public static readonly GRANITE: number /*int*/
                // @ts-ignore
                public static readonly POLISHED_GRANITE: number /*int*/
                // @ts-ignore
                public static readonly DIORITE: number /*int*/
                // @ts-ignore
                public static readonly POLISHED_DIORITE: number /*int*/
                // @ts-ignore
                public static readonly ANDESITE: number /*int*/
                // @ts-ignore
                public static readonly POLISHED_ANDESITE: number /*int*/
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
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public canSilkTouch(): boolean
            }
        }
    }
}
