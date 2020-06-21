declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * AMAZING COARSE DIRT added by kvetinac97
             * Nukkit Project
             */
            // @ts-ignore
            class BlockDirt extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
