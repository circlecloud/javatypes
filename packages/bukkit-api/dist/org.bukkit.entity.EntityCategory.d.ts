declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * A classification of entities which may behave differently than others or be
             * affected uniquely by enchantments and potion effects among other things.
             */
            // @ts-ignore
            class EntityCategory extends java.lang.Enum<org.bukkit.entity.EntityCategory> {
                /**
                 * Any uncategorized entity. No additional effects are applied to these
                 * entities relating to a categorization.
                 */
                // @ts-ignore
                public static readonly NONE: org.bukkit.entity.EntityCategory
                /**
                 * Undead creatures. These creatures:
                 * <ul>
                 * <li>Are damaged by potions of healing.
                 * <li>Are healed by potions of harming.
                 * <li>Are immune to drowning and poison.
                 * <li>Are subject to burning in daylight (though not all).
                 * <li>Sink in water (except {@link Drowned}, {@link Phantom Phantoms}
                 * and {@link Wither Withers}).
                 * <li>Take additional damage from {@link Enchantment#DAMAGE_UNDEAD}.
                 * <li>Are ignored by {@link Wither Withers}.
                 * </ul>
                 */
                // @ts-ignore
                public static readonly UNDEAD: org.bukkit.entity.EntityCategory
                /**
                 * Entities of the arthropod family. These creatures:
                 * <ul>
                 * <li>Take additional damage and receive {@link PotionEffectType#SLOW}
                 * from {@link Enchantment#DAMAGE_ARTHROPODS}.
                 * <li>Are immune to {@link PotionEffectType#POISON} if they are spiders.
                 * </ul>
                 */
                // @ts-ignore
                public static readonly ARTHROPOD: org.bukkit.entity.EntityCategory
                /**
                 * Entities that participate in raids. These creatures:
                 * <ul>
                 * <li>Are immune to damage from {@link EvokerFangs}.
                 * <li>Are ignored by {@link Vindicator vindicators} named "Johnny".
                 * <li>Are hostile to {@link Villager villagers},
                 * {@link WanderingTrader wandering traders}, {@link IronGolem iron golems}
                 * and {@link Player players}.
                 * </ul>
                 */
                // @ts-ignore
                public static readonly ILLAGER: org.bukkit.entity.EntityCategory
                /**
                 * Entities that reside primarily underwater (excluding {@link Drowned}).
                 * These creatures:
                 * <ul>
                 * <li>Take additional damage from {@link Enchantment#IMPALING}.
                 * <li>Are immune to drowning (excluding {@link Dolphin dolphins}).
                 * <li>Take suffocation damage when out of water for extended periods of
                 * time (excluding {@link Guardian guardians} and {@link Turtle turtles}).
                 * <li>Are capable of swimming in water rather than floating or sinking.
                 * </ul>
                 */
                // @ts-ignore
                public static readonly WATER: org.bukkit.entity.EntityCategory
                // @ts-ignore
                public static values(): org.bukkit.entity.EntityCategory[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.entity.EntityCategory
            }
        }
    }
}
