declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class BlockDoor extends cn.nukkit.block.BlockTransparentMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public static DOOR_OPEN_BIT: number /*int*/
                // @ts-ignore
                public static DOOR_TOP_BIT: number /*int*/
                // @ts-ignore
                public static DOOR_HINGE_BIT: number /*int*/
                // @ts-ignore
                public static DOOR_POWERED_BIT: number /*int*/
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public isSolid(): boolean
                // @ts-ignore
                public getFullDamage(): number /*int*/
                // @ts-ignore
                recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public toggle(player: cn.nukkit.Player): boolean
                // @ts-ignore
                public isOpen(): boolean
                // @ts-ignore
                public isTop(): boolean
                // @ts-ignore
                public isTop(meta: number /*int*/): boolean
                // @ts-ignore
                public isRightHinged(): boolean
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
            }
        }
    }
}
