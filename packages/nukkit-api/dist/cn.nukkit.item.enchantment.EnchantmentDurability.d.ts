declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class EnchantmentDurability extends cn.nukkit.item.enchantment.Enchantment {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getMinEnchantAbility(level: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getMaxEnchantAbility(level: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getMaxLevel(): number /*int*/
                    // @ts-ignore
                    public isCompatibleWith(enchantment: cn.nukkit.item.enchantment.Enchantment): boolean
                    // @ts-ignore
                    public canEnchant(item: cn.nukkit.item.Item): boolean
                    // @ts-ignore
                    public static negateDamage(item: cn.nukkit.item.Item, level: number /*int*/, random: java.util.Random): boolean
                }
            }
        }
    }
}
