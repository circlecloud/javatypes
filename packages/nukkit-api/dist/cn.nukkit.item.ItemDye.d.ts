declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class ItemDye extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(dyeColor: cn.nukkit.utils.DyeColor)
                // @ts-ignore
                constructor(dyeColor: cn.nukkit.utils.DyeColor, amount: number /*int*/)
                // @ts-ignore
                constructor(meta: java.lang.Integer | number, amount: number /*int*/)
                // @ts-ignore
                public static readonly WHITE: number /*int*/
                // @ts-ignore
                public static readonly ORANGE: number /*int*/
                // @ts-ignore
                public static readonly MAGENTA: number /*int*/
                // @ts-ignore
                public static readonly LIGHT_BLUE: number /*int*/
                // @ts-ignore
                public static readonly YELLOW: number /*int*/
                // @ts-ignore
                public static readonly LIME: number /*int*/
                // @ts-ignore
                public static readonly PINK: number /*int*/
                // @ts-ignore
                public static readonly GRAY: number /*int*/
                // @ts-ignore
                public static readonly LIGHT_GRAY: number /*int*/
                // @ts-ignore
                public static readonly CYAN: number /*int*/
                // @ts-ignore
                public static readonly PURPLE: number /*int*/
                // @ts-ignore
                public static readonly BLUE: number /*int*/
                // @ts-ignore
                public static readonly BROWN: number /*int*/
                // @ts-ignore
                public static readonly GREEN: number /*int*/
                // @ts-ignore
                public static readonly RED: number /*int*/
                // @ts-ignore
                public static readonly BLACK: number /*int*/
                // @ts-ignore
                public static getColor(meta: number /*int*/): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public getDyeColor(): cn.nukkit.utils.DyeColor
                // @ts-ignore
                public static getColorName(meta: number /*int*/): string
            }
        }
    }
}
