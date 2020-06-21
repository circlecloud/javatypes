declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/11/23 by xtypr.
             * Package cn.nukkit.block in project Nukkit .
             */
            // @ts-ignore
            class BlockFlower extends cn.nukkit.block.BlockFlowable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public static readonly TYPE_POPPY: number /*int*/
                // @ts-ignore
                public static readonly TYPE_BLUE_ORCHID: number /*int*/
                // @ts-ignore
                public static readonly TYPE_ALLIUM: number /*int*/
                // @ts-ignore
                public static readonly TYPE_AZURE_BLUET: number /*int*/
                // @ts-ignore
                public static readonly TYPE_RED_TULIP: number /*int*/
                // @ts-ignore
                public static readonly TYPE_ORANGE_TULIP: number /*int*/
                // @ts-ignore
                public static readonly TYPE_WHITE_TULIP: number /*int*/
                // @ts-ignore
                public static readonly TYPE_PINK_TULIP: number /*int*/
                // @ts-ignore
                public static readonly TYPE_OXEYE_DAISY: number /*int*/
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                getUncommonFlower(): cn.nukkit.block.Block
            }
        }
    }
}
