declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by Snake1999 on 2016/1/11.
             * Package cn.nukkit.block in project nukkit
             */
            // @ts-ignore
            class BlockRail extends cn.nukkit.block.BlockFlowable implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                canBePowered: boolean
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public canPassThrough(): boolean
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public getMaxY(): number /*double*/
                // @ts-ignore
                public recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                checkRailsConnected(): java.util.Map<cn.nukkit.block.BlockRail, cn.nukkit.math.BlockFace>
                // @ts-ignore
                public isAbstract(): boolean
                // @ts-ignore
                public canPowered(): boolean
                // @ts-ignore
                public getOrientation(): cn.nukkit.utils.Rail.Orientation
                // @ts-ignore
                public setOrientation(o: cn.nukkit.utils.Rail.Orientation): void
                // @ts-ignore
                public getRealMeta(): number /*int*/
                // @ts-ignore
                public isActive(): boolean
                // @ts-ignore
                public setActive(active: boolean): void
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
            }
        }
    }
}
