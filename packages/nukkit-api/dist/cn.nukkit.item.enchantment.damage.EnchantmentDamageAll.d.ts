declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                namespace damage {
                    /**
                     * author: MagicDroidX
                     * Nukkit Project
                     */
                    // @ts-ignore
                    class EnchantmentDamageAll extends cn.nukkit.item.enchantment.damage.EnchantmentDamage {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getMinEnchantAbility(level: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getMaxEnchantAbility(level: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getMaxEnchantableLevel(): number /*int*/
                        // @ts-ignore
                        public getDamageBonus(entity: cn.nukkit.entity.Entity): number /*double*/
                    }
                }
            }
        }
    }
}
