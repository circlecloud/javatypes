declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by CreeperFace on 26. 11. 2016.
             */
            // @ts-ignore
            class BlockStairsRedSandstone extends cn.nukkit.block.BlockStairs {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
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
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
