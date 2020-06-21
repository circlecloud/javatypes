declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockFire extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public hasEntityCollision(): boolean
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public canBeReplaced(): boolean
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public canNeighborBurn(): boolean
                // @ts-ignore
                public isBlockTopFacingSurfaceSolid(block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public tickRate(): number /*int*/
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                recalculateCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
            }
        }
    }
}
