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
                    abstract class EnchantmentProtection extends cn.nukkit.item.enchantment.Enchantment {
                        // @ts-ignore
                        constructor(id: number /*int*/, name: java.lang.String | string, weight: number /*int*/, type: cn.nukkit.item.enchantment.protection.EnchantmentProtection.TYPE)
                        // @ts-ignore
                        readonly protectionType: cn.nukkit.item.enchantment.protection.EnchantmentProtection.TYPE
                        // @ts-ignore
                        public isCompatibleWith(enchantment: cn.nukkit.item.enchantment.Enchantment): boolean
                        // @ts-ignore
                        public getMaxLevel(): number /*int*/
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public getTypeModifier(): number /*double*/
                        // @ts-ignore
                        public isMajor(): boolean
                    }
                }
            }
        }
    }
}
