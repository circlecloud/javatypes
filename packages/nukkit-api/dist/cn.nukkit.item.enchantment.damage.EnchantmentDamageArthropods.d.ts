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
                    class EnchantmentDamageArthropods extends cn.nukkit.item.enchantment.damage.EnchantmentDamage {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getMinEnchantAbility(level: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getMaxEnchantAbility(level: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getDamageBonus(entity: cn.nukkit.entity.Entity): number /*double*/
                        // @ts-ignore
                        public doPostAttack(attacker: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity): void
                    }
                }
            }
        }
    }
}
