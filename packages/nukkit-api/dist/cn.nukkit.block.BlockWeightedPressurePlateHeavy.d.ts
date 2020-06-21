declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * @author CreeperFace
             */
            // @ts-ignore
            class BlockWeightedPressurePlateHeavy extends cn.nukkit.block.BlockPressurePlateBase {
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
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                computeRedstoneStrength(): number /*int*/
                // @ts-ignore
                public getMaxWeight(): number /*int*/
            }
        }
    }
}
