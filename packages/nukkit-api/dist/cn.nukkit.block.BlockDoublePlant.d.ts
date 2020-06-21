declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/11/23 by xtypr.
             * Package cn.nukkit.block in project Nukkit .
             */
            // @ts-ignore
            class BlockDoublePlant extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public static readonly SUNFLOWER: number /*int*/
                // @ts-ignore
                public static readonly LILAC: number /*int*/
                // @ts-ignore
                public static readonly TALL_GRASS: number /*int*/
                // @ts-ignore
                public static readonly LARGE_FERN: number /*int*/
                // @ts-ignore
                public static readonly ROSE_BUSH: number /*int*/
                // @ts-ignore
                public static readonly PEONY: number /*int*/
                // @ts-ignore
                public static readonly TOP_HALF_BITMASK: number /*int*/
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public canBeReplaced(): boolean
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
            }
        }
    }
}
