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
                public static readonly UNCRAFTABLE: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly WATER: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly MUNDANE: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly THICK: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly AWKWARD: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly NIGHT_VISION: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly INVISIBILITY: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly JUMP: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly FIRE_RESISTANCE: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly SPEED: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly SLOWNESS: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly WATER_BREATHING: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly INSTANT_HEAL: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly INSTANT_DAMAGE: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly POISON: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly REGEN: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly STRENGTH: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly WEAKNESS: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly LUCK: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly TURTLE_MASTER: org.bukkit.potion.PotionType
                // @ts-ignore
                public static readonly SLOW_FALLING: org.bukkit.potion.PotionType
                // @ts-ignore
                public static values(): org.bukkit.potion.PotionType[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.potion.PotionType
                // @ts-ignore
                public getEffectType(): org.bukkit.potion.PotionEffectType
                // @ts-ignore
                public isInstant(): boolean
                /**
                 * Checks if the potion type has an upgraded state.
                 * This refers to whether or not the potion type can be Tier 2,
                 * such as Potion of Fire Resistance II.
                 * @return true if the potion type can be upgraded;
                 */
                // @ts-ignore
                public isUpgradeable(): boolean
                /**
                 * Checks if the potion type has an extended state.
                 * This refers to the extended duration potions
                 * @return true if the potion type can be extended
                 */
                // @ts-ignore
                public isExtendable(): boolean
                // @ts-ignore
                public getMaxLevel(): number /*int*/
                /**
                 * @param effectType the effect to get by
                 * @return the matching potion type
                 * @deprecated Misleading
                 */
                // @ts-ignore
                public static getByEffect(effectType: org.bukkit.potion.PotionEffectType): org.bukkit.potion.PotionType
            }
        }
    }
}
