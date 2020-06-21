declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/12/8 by xtypr.
             * Package cn.nukkit.block in project Nukkit .
             */
            // @ts-ignore
            class BlockLadder extends cn.nukkit.block.BlockTransparentMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public hasEntityCollision(): boolean
                // @ts-ignore
                public canBeClimbed(): boolean
                // @ts-ignore
                public isSolid(): boolean
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public setDamage(meta: number /*int*/): void
                // @ts-ignore
                public getMinX(): number /*double*/
                // @ts-ignore
                public getMinZ(): number /*double*/
                // @ts-ignore
                public getMaxX(): number /*double*/
                // @ts-ignore
                public getMaxZ(): number /*double*/
                // @ts-ignore
                recalculateCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
            }
        }
    }
}
