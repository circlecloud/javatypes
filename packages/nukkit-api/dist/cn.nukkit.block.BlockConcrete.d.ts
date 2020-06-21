declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by CreeperFace on 2.6.2017.
             */
            // @ts-ignore
            class BlockConcrete extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public getDyeColor(): cn.nukkit.utils.DyeColor
            }
        }
    }
}
