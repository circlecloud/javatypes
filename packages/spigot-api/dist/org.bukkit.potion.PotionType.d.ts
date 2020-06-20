declare namespace org {
    namespace bukkit {
        namespace potion {
            /**
             * This enum reflects and matches each potion state that can be obtained from
             * the Creative mode inventory
             */
            // @ts-ignore
            class PotionType extends java.lang.Enum<org.bukkit.potion.PotionType> {
                // @ts-ignore
                values(): org.bukkit.potion.PotionType[]
                // @ts-ignore
                valueOf(name: string): org.bukkit.potion.PotionType
                // @ts-ignore
                getEffectType(): org.bukkit.potion.PotionEffectType
                // @ts-ignore
                isInstant(): boolean
                /**
                 * Checks if the potion type has an upgraded state.
                 * This refers to whether or not the potion type can be Tier 2,
                 * such as Potion of Fire Resistance II.
                 * @return true if the potion type can be upgraded;
                 */
                // @ts-ignore
                isUpgradeable(): boolean
                /**
                 * Checks if the potion type has an extended state.
                 * This refers to the extended duration potions
                 * @return true if the potion type can be extended
                 */
                // @ts-ignore
                isExtendable(): boolean
                // @ts-ignore
                getMaxLevel(): int
                /**
                 * @param effectType the effect to get by
                 * @return the matching potion type
                 * @deprecated Misleading
                 */
                // @ts-ignore
                getByEffect(effectType: org.bukkit.potion.PotionEffectType): org.bukkit.potion.PotionType
            }
        }
    }
}
