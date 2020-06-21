declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by Snake1999 on 2016/1/11.
             * Package cn.nukkit.block in project nukkit
             */
            // @ts-ignore
            abstract class BlockPressurePlateBase extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                onPitch: number /*float*/
                // @ts-ignore
                offPitch: number /*float*/
                // @ts-ignore
                public canPassThrough(): boolean
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public getMinX(): number /*double*/
                // @ts-ignore
                public getMinZ(): number /*double*/
                // @ts-ignore
                public getMinY(): number /*double*/
                // @ts-ignore
                public getMaxX(): number /*double*/
                // @ts-ignore
                public getMaxZ(): number /*double*/
                // @ts-ignore
                public getMaxY(): number /*double*/
                // @ts-ignore
                public isPowerSource(): boolean
                // @ts-ignore
                public isActivated(): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                recalculateCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                updateState(oldStrength: number /*int*/): void
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public getRedstonePower(): number /*int*/
                // @ts-ignore
                public setRedstonePower(power: number /*int*/): void
                // @ts-ignore
                playOnSound(): void
                // @ts-ignore
                playOffSound(): void
                // @ts-ignore
                abstract computeRedstoneStrength(): number /*int*/
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
            }
        }
    }
}
