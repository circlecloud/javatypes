declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * @author Nukkit Project Team
             */
            // @ts-ignore
            class BlockDiamond extends cn.nukkit.block.BlockSolid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
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
