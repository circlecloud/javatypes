declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by CreeperFace on 26. 11. 2016.
             */
            // @ts-ignore
            class BlockRedSandstone extends cn.nukkit.block.BlockSandstone {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
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
