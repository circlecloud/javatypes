declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockBricksStone extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public static readonly NORMAL: number /*int*/
                // @ts-ignore
                public static readonly MOSSY: number /*int*/
                // @ts-ignore
                public static readonly CRACKED: number /*int*/
                // @ts-ignore
                public static readonly CHISELED: number /*int*/
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public canHarvestWithHand(): boolean
            }
        }
    }
}
