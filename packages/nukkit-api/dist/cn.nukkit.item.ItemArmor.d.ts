declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class ItemArmor extends cn.nukkit.item.Item implements cn.nukkit.item.ItemDurable {
                // @ts-ignore
                constructor(id: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/, name: java.lang.String | string)
                // @ts-ignore
                public static readonly TIER_LEATHER: number /*int*/
                // @ts-ignore
                public static readonly TIER_IRON: number /*int*/
                // @ts-ignore
                public static readonly TIER_CHAIN: number /*int*/
                // @ts-ignore
                public static readonly TIER_GOLD: number /*int*/
                // @ts-ignore
                public static readonly TIER_DIAMOND: number /*int*/
                // @ts-ignore
                public static readonly TIER_OTHER: number /*int*/
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
                // @ts-ignore
                public isArmor(): boolean
                // @ts-ignore
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public getEnchantAbility(): number /*int*/
                // @ts-ignore
                public isUnbreakable(): boolean
            }
        }
    }
}
