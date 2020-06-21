declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/12/2 by xtypr.
             * Package cn.nukkit.block in project Nukkit .
             */
            // @ts-ignore
            class BlockCobweb extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
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
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public canHarvestWithHand(): boolean
            }
        }
    }
}
