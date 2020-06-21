declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by Pub4Game on 26.12.2015.
             */
            // @ts-ignore
            class BlockTrapdoorIron extends cn.nukkit.block.BlockTrapdoor {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public canHarvestWithHand(): boolean
            }
        }
    }
}
