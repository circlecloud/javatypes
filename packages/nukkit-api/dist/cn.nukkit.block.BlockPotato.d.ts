declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by Pub4Game on 15.01.2016.
             */
            // @ts-ignore
            class BlockPotato extends cn.nukkit.block.BlockCrops {
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
            }
        }
    }
}
