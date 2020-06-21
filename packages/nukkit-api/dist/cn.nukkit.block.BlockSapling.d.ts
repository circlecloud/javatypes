declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: Angelic47
             * Nukkit Project
             */
            // @ts-ignore
            class BlockSapling extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public static readonly OAK: number /*int*/
                // @ts-ignore
                public static readonly SPRUCE: number /*int*/
                // @ts-ignore
                public static readonly BIRCH: number /*int*/
                /**
                 * placeholder
                 */
                // @ts-ignore
                public static readonly BIRCH_TALL: number /*int*/
                // @ts-ignore
                public static readonly JUNGLE: number /*int*/
                // @ts-ignore
                public static readonly ACACIA: number /*int*/
                // @ts-ignore
                public static readonly DARK_OAK: number /*int*/
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public isSameType(pos: cn.nukkit.math.Vector3, type: number /*int*/): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
