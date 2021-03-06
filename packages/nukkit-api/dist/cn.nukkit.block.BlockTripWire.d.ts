declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * @author CreeperFace
             */
            // @ts-ignore
            class BlockTripWire extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public canPassThrough(): boolean
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public isPowered(): boolean
                // @ts-ignore
                public isAttached(): boolean
                // @ts-ignore
                public isDisarmed(): boolean
                // @ts-ignore
                public setPowered(value: boolean): void
                // @ts-ignore
                public setAttached(value: boolean): void
                // @ts-ignore
                public setDisarmed(value: boolean): void
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public updateHook(scheduleUpdate: boolean): void
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public getMaxY(): number /*double*/
                // @ts-ignore
                recalculateCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB
            }
        }
    }
}
