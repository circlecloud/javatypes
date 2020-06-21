declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class BlockLiquid extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public adjacentSources: number /*int*/
                // @ts-ignore
                flowVector: cn.nukkit.math.Vector3
                // @ts-ignore
                public canBeFlowedInto(): boolean
                // @ts-ignore
                recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public hasEntityCollision(): boolean
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public canBeReplaced(): boolean
                // @ts-ignore
                public isSolid(): boolean
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public getBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public getMaxY(): number /*double*/
                // @ts-ignore
                recalculateCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public getFluidHeightPercent(): number /*float*/
                // @ts-ignore
                getFlowDecay(block: cn.nukkit.block.Block): number /*int*/
                // @ts-ignore
                getEffectiveFlowDecay(block: cn.nukkit.block.Block): number /*int*/
                // @ts-ignore
                public clearCaches(): void
                // @ts-ignore
                public getFlowVector(): cn.nukkit.math.Vector3
                // @ts-ignore
                public addVelocityToEntity(entity: cn.nukkit.entity.Entity, vector: cn.nukkit.math.Vector3): void
                // @ts-ignore
                public getFlowDecayPerBlock(): number /*int*/
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                flowIntoBlock(block: cn.nukkit.block.Block, newFlowDecay: number /*int*/): void
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                checkForHarden(): void
                // @ts-ignore
                triggerLavaMixEffects(pos: cn.nukkit.math.Vector3): void
                // @ts-ignore
                public abstract getBlock(meta: number /*int*/): cn.nukkit.block.BlockLiquid
                // @ts-ignore
                public canPassThrough(): boolean
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                liquidCollide(cause: cn.nukkit.block.Block, result: cn.nukkit.block.Block): boolean
                // @ts-ignore
                canFlowInto(block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
            }
        }
    }
}
