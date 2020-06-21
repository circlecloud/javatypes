declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/12/6 by xtypr.
             * Package cn.nukkit.block in project Nukkit .
             */
            // @ts-ignore
            class BlockSnowLayer extends cn.nukkit.block.BlockFallable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getDamage(): number /*int*/
                // @ts-ignore
                public setDamage(meta: number /*int*/): void
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
                public canBeReplaced(): boolean
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public isTransparent(): boolean
                // @ts-ignore
                public canBeFlowedInto(): boolean
                // @ts-ignore
                public canPassThrough(): boolean
                // @ts-ignore
                public isSolid(): boolean
                // @ts-ignore
                recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB
            }
        }
    }
}
