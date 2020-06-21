declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class ItemTool extends cn.nukkit.item.Item implements cn.nukkit.item.ItemDurable {
                // @ts-ignore
                constructor(id: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/, name: java.lang.String | string)
                // @ts-ignore
                public static readonly TIER_WOODEN: number /*int*/
                // @ts-ignore
                public static readonly TIER_GOLD: number /*int*/
                // @ts-ignore
                public static readonly TIER_STONE: number /*int*/
                // @ts-ignore
                public static readonly TIER_IRON: number /*int*/
                // @ts-ignore
                public static readonly TIER_DIAMOND: number /*int*/
                // @ts-ignore
                public static readonly TYPE_NONE: number /*int*/
                // @ts-ignore
                public static readonly TYPE_SWORD: number /*int*/
                // @ts-ignore
                public static readonly TYPE_SHOVEL: number /*int*/
                // @ts-ignore
                public static readonly TYPE_PICKAXE: number /*int*/
                // @ts-ignore
                public static readonly TYPE_AXE: number /*int*/
                // @ts-ignore
                public static readonly TYPE_SHEARS: number /*int*/
                // @ts-ignore
                public static readonly DURABILITY_WOODEN: number /*int*/
                // @ts-ignore
                public static readonly DURABILITY_GOLD: number /*int*/
                // @ts-ignore
                public static readonly DURABILITY_STONE: number /*int*/
                // @ts-ignore
                public static readonly DURABILITY_IRON: number /*int*/
                // @ts-ignore
                public static readonly DURABILITY_DIAMOND: number /*int*/
                // @ts-ignore
                public static readonly DURABILITY_FLINT_STEEL: number /*int*/
                // @ts-ignore
                public static readonly DURABILITY_SHEARS: number /*int*/
                // @ts-ignore
                public static readonly DURABILITY_BOW: number /*int*/
                // @ts-ignore
                public static readonly DURABILITY_TRIDENT: number /*int*/
                // @ts-ignore
                public static readonly DURABILITY_FISHING_ROD: number /*int*/
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
                // @ts-ignore
                public useOn(block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public useOn(entity: cn.nukkit.entity.Entity): boolean
                // @ts-ignore
                public isUnbreakable(): boolean
                // @ts-ignore
                public isPickaxe(): boolean
                // @ts-ignore
                public isAxe(): boolean
                // @ts-ignore
                public isSword(): boolean
                // @ts-ignore
                public isShovel(): boolean
                // @ts-ignore
                public isHoe(): boolean
                // @ts-ignore
                public isShears(): boolean
                // @ts-ignore
                public isTool(): boolean
                // @ts-ignore
                public getEnchantAbility(): number /*int*/
            }
        }
    }
}
