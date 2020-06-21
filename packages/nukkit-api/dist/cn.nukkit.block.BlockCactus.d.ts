declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * @author Nukkit Project Team
             */
            // @ts-ignore
            class BlockCactus extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public hasEntityCollision(): boolean
                // @ts-ignore
                public getMinX(): number /*double*/
                // @ts-ignore
                public getMinY(): number /*double*/
                // @ts-ignore
                public getMinZ(): number /*double*/
                // @ts-ignore
                public getMaxX(): number /*double*/
                // @ts-ignore
                public getMaxY(): number /*double*/
                // @ts-ignore
                public getMaxZ(): number /*double*/
                // @ts-ignore
                recalculateCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
            }
        }
    }
}
