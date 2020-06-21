declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class Enchantment extends java.lang.Object implements java.lang.Cloneable {
                    // @ts-ignore
                    constructor(id: number /*int*/, name: java.lang.String | string, weight: number /*int*/, type: cn.nukkit.item.enchantment.EnchantmentType)
                    // @ts-ignore
                    static enchantments: cn.nukkit.item.enchantment.Enchantment[]
                    // @ts-ignore
                    public static readonly ID_PROTECTION_ALL: number /*int*/
                    // @ts-ignore
                    public static readonly ID_PROTECTION_FIRE: number /*int*/
                    // @ts-ignore
                    public static readonly ID_PROTECTION_FALL: number /*int*/
                    // @ts-ignore
                    public static readonly ID_PROTECTION_EXPLOSION: number /*int*/
                    // @ts-ignore
                    public static readonly ID_PROTECTION_PROJECTILE: number /*int*/
                    // @ts-ignore
                    public static readonly ID_THORNS: number /*int*/
                    // @ts-ignore
                    public static readonly ID_WATER_BREATHING: number /*int*/
                    // @ts-ignore
                    public static readonly ID_WATER_WALKER: number /*int*/
                    // @ts-ignore
                    public static readonly ID_WATER_WORKER: number /*int*/
                    // @ts-ignore
                    public static readonly ID_DAMAGE_ALL: number /*int*/
                    // @ts-ignore
                    public static readonly ID_DAMAGE_SMITE: number /*int*/
                    // @ts-ignore
                    public static readonly ID_DAMAGE_ARTHROPODS: number /*int*/
                    // @ts-ignore
                    public static readonly ID_KNOCKBACK: number /*int*/
                    // @ts-ignore
                    public static readonly ID_FIRE_ASPECT: number /*int*/
                    // @ts-ignore
                    public static readonly ID_LOOTING: number /*int*/
                    // @ts-ignore
                    public static readonly ID_EFFICIENCY: number /*int*/
                    // @ts-ignore
                    public static readonly ID_SILK_TOUCH: number /*int*/
                    // @ts-ignore
                    public static readonly ID_DURABILITY: number /*int*/
                    // @ts-ignore
                    public static readonly ID_FORTUNE_DIGGING: number /*int*/
                    // @ts-ignore
                    public static readonly ID_BOW_POWER: number /*int*/
                    // @ts-ignore
                    public static readonly ID_BOW_KNOCKBACK: number /*int*/
                    // @ts-ignore
                    public static readonly ID_BOW_FLAME: number /*int*/
                    // @ts-ignore
                    public static readonly ID_BOW_INFINITY: number /*int*/
                    // @ts-ignore
                    public static readonly ID_FORTUNE_FISHING: number /*int*/
                    // @ts-ignore
                    public static readonly ID_LURE: number /*int*/
                    // @ts-ignore
                    public static readonly ID_FROST_WALKER: number /*int*/
                    // @ts-ignore
                    public static readonly ID_MENDING: number /*int*/
                    // @ts-ignore
                    public static readonly ID_BINDING_CURSE: number /*int*/
                    // @ts-ignore
                    public static readonly ID_VANISHING_CURSE: number /*int*/
                    // @ts-ignore
                    public static readonly ID_TRIDENT_IMPALING: number /*int*/
                    // @ts-ignore
                    public static readonly ID_TRIDENT_RIPTIDE: number /*int*/
                    // @ts-ignore
                    public static readonly ID_TRIDENT_LOYALTY: number /*int*/
                    // @ts-ignore
                    public static readonly ID_TRIDENT_CHANNELING: number /*int*/
                    // @ts-ignore
                    public readonly id: number /*int*/
                    // @ts-ignore
                    public type: cn.nukkit.item.enchantment.EnchantmentType
                    // @ts-ignore
                    level: number /*int*/
                    // @ts-ignore
                    readonly name: java.lang.String | string
                    // @ts-ignore
                    public static readonly words: java.lang.String[] | string[]
                    // @ts-ignore
                    public static init(): void
                    // @ts-ignore
                    public static get(id: number /*int*/): cn.nukkit.item.enchantment.Enchantment
                    // @ts-ignore
                    public static getEnchantment(id: number /*int*/): cn.nukkit.item.enchantment.Enchantment
                    // @ts-ignore
                    public static getEnchantments(): cn.nukkit.item.enchantment.Enchantment[]
                    // @ts-ignore
                    public getLevel(): number /*int*/
                    // @ts-ignore
                    public setLevel(level: number /*int*/): cn.nukkit.item.enchantment.Enchantment
                    // @ts-ignore
                    public setLevel(level: number /*int*/, safe: boolean): cn.nukkit.item.enchantment.Enchantment
                    // @ts-ignore
                    public getId(): number /*int*/
                    // @ts-ignore
                    public getWeight(): number /*int*/
                    // @ts-ignore
                    public getMinLevel(): number /*int*/
                    // @ts-ignore
                    public getMaxLevel(): number /*int*/
                    // @ts-ignore
                    public getMaxEnchantableLevel(): number /*int*/
                    // @ts-ignore
                    public getMinEnchantAbility(level: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getMaxEnchantAbility(level: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getProtectionFactor(event: cn.nukkit.event.entity.EntityDamageEvent): number /*float*/
                    // @ts-ignore
                    public getDamageBonus(entity: cn.nukkit.entity.Entity): number /*double*/
                    // @ts-ignore
                    public doPostAttack(attacker: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    public doPostHurt(attacker: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    public isCompatibleWith(enchantment: cn.nukkit.item.enchantment.Enchantment): boolean
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public canEnchant(item: cn.nukkit.item.Item): boolean
                    // @ts-ignore
                    public isMajor(): boolean
                    // @ts-ignore
                    clone(): cn.nukkit.item.enchantment.Enchantment
                    // @ts-ignore
                    public static getRandomName(): string
                }
            }
        }
    }
}
