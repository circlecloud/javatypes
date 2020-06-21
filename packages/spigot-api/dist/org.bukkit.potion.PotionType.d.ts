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
                readonly UNCRAFTABLE: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly WATER: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly MUNDANE: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly THICK: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly AWKWARD: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly NIGHT_VISION: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly INVISIBILITY: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly JUMP: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly FIRE_RESISTANCE: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly SPEED: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly SLOWNESS: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly WATER_BREATHING: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly INSTANT_HEAL: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly INSTANT_DAMAGE: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly POISON: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly REGEN: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly STRENGTH: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly WEAKNESS: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly LUCK: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly TURTLE_MASTER: org.bukkit.potion.PotionType
                // @ts-ignore
                readonly SLOW_FALLING: org.bukkit.potion.PotionType
                // @ts-ignore
                values(): org.bukkit.potion.PotionType[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.potion.PotionType
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
                getMaxLevel(): number /*int*/
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
