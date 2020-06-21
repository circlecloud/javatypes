declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by CreeperFace on 27. 10. 2016.
             */
            // @ts-ignore
            class BlockCocoa extends cn.nukkit.block.BlockTransparentMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                static readonly EAST: cn.nukkit.math.AxisAlignedBB[]
                // @ts-ignore
                static readonly WEST: cn.nukkit.math.AxisAlignedBB[]
                // @ts-ignore
                static readonly NORTH: cn.nukkit.math.AxisAlignedBB[]
                // @ts-ignore
                static readonly SOUTH: cn.nukkit.math.AxisAlignedBB[]
                // @ts-ignore
                static readonly ALL: cn.nukkit.math.AxisAlignedBB[]
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public setDamage(meta: number /*int*/): void
                // @ts-ignore
                public getMinX(): number /*double*/
                // @ts-ignore
                public getMaxX(): number /*double*/
                // @ts-ignore
                public getMinY(): number /*double*/
                // @ts-ignore
                public getMaxY(): number /*double*/
                // @ts-ignore
                public getMinZ(): number /*double*/
                // @ts-ignore
                public getMaxZ(): number /*double*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
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
