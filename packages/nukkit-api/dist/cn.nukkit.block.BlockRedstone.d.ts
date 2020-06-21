declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            class BlockRedstone extends cn.nukkit.block.BlockSolidMeta {
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
                public getToolType(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public isPowerSource(): boolean
                // @ts-ignore
                public getWeakPower(face: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public canHarvestWithHand(): boolean
            }
        }
    }
}
