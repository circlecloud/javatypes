declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: Angelic47
             * Nukkit Project
             */
            // @ts-ignore
            class BlockBedrock extends cn.nukkit.block.BlockSolid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public canBePushed(): boolean
                // @ts-ignore
                public canHarvestWithHand(): boolean
            }
        }
    }
}
