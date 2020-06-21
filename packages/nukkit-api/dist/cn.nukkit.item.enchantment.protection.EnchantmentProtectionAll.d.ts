declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                namespace protection {
                    /**
                     * author: MagicDroidX
                     * Nukkit Project
                     */
                    // @ts-ignore
                    class EnchantmentProtectionAll extends cn.nukkit.item.enchantment.protection.EnchantmentProtection {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getMinEnchantAbility(level: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getMaxEnchantAbility(level: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getTypeModifier(): number /*double*/
                        // @ts-ignore
                        public getProtectionFactor(e: cn.nukkit.event.entity.EntityDamageEvent): number /*float*/
                    }
                }
            }
        }
    }
}
