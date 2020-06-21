declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by Pub4Game on 27.12.2015.
             */
            // @ts-ignore
            class BlockMobSpawner extends cn.nukkit.block.BlockSolid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public canBePushed(): boolean
                // @ts-ignore
                public canHarvestWithHand(): boolean
            }
        }
    }
}
