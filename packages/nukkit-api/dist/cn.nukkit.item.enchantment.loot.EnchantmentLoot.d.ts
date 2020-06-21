declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                namespace loot {
                    /**
                     * author: MagicDroidX
                     * Nukkit Project
                     */
                    // @ts-ignore
                    abstract class EnchantmentLoot extends cn.nukkit.item.enchantment.Enchantment {
                        // @ts-ignore
                        constructor(id: number /*int*/, name: java.lang.String | string, weight: number /*int*/, type: cn.nukkit.item.enchantment.EnchantmentType)
                        // @ts-ignore
                        public getMinEnchantAbility(level: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getMaxEnchantAbility(level: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getMaxLevel(): number /*int*/
                        // @ts-ignore
                        public isCompatibleWith(enchantment: cn.nukkit.item.enchantment.Enchantment): boolean
                    }
                }
            }
        }
    }
}
