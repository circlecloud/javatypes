declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * @author Nukkit Project Team
             */
            // @ts-ignore
            class BlockBookshelf extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getBurnChance(): number /*int*/
                // @ts-ignore
                public getBurnAbility(): number /*int*/
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
