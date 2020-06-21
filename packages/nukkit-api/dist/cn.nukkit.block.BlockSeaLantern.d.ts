declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            class BlockSeaLantern extends cn.nukkit.block.BlockTransparent {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public canSilkTouch(): boolean
            }
        }
    }
}
