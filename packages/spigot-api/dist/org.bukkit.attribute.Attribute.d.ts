declare namespace org {
    namespace bukkit {
        namespace attribute {
            /**
             * Types of attributes which may be present on an {@link Attributable}.
             */
            // @ts-ignore
            class Attribute extends java.lang.Enum<org.bukkit.attribute.Attribute> implements org.bukkit.Keyed {
                /**
                 * Maximum health of an Entity.
                 */
                // @ts-ignore
                public static readonly GENERIC_MAX_HEALTH: org.bukkit.attribute.Attribute
                /**
                 * Range at which an Entity will follow others.
                 */
                // @ts-ignore
                public static readonly GENERIC_FOLLOW_RANGE: org.bukkit.attribute.Attribute
                /**
                 * Resistance of an Entity to knockback.
                 */
                // @ts-ignore
                public static readonly GENERIC_KNOCKBACK_RESISTANCE: org.bukkit.attribute.Attribute
                /**
                 * Movement speed of an Entity.
                 */
                // @ts-ignore
                public static readonly GENERIC_MOVEMENT_SPEED: org.bukkit.attribute.Attribute
                /**
                 * Flying speed of an Entity.
                 */
                // @ts-ignore
                public static readonly GENERIC_FLYING_SPEED: org.bukkit.attribute.Attribute
                /**
                 * Attack damage of an Entity.
                 */
                // @ts-ignore
                public static readonly GENERIC_ATTACK_DAMAGE: org.bukkit.attribute.Attribute
                /**
                 * Attack knockback of an Entity.
                 */
                // @ts-ignore
                public static readonly GENERIC_ATTACK_KNOCKBACK: org.bukkit.attribute.Attribute
                /**
                 * Attack speed of an Entity.
                 */
                // @ts-ignore
                public static readonly GENERIC_ATTACK_SPEED: org.bukkit.attribute.Attribute
                /**
                 * Armor bonus of an Entity.
                 */
                // @ts-ignore
                public static readonly GENERIC_ARMOR: org.bukkit.attribute.Attribute
                /**
                 * Armor durability bonus of an Entity.
                 */
                // @ts-ignore
                public static readonly GENERIC_ARMOR_TOUGHNESS: org.bukkit.attribute.Attribute
                /**
                 * Luck bonus of an Entity.
                 */
                // @ts-ignore
                public static readonly GENERIC_LUCK: org.bukkit.attribute.Attribute
                /**
                 * Strength with which a horse will jump.
                 */
                // @ts-ignore
                public static readonly HORSE_JUMP_STRENGTH: org.bukkit.attribute.Attribute
                /**
                 * Chance of a zombie to spawn reinforcements.
                 */
                // @ts-ignore
                public static readonly ZOMBIE_SPAWN_REINFORCEMENTS: org.bukkit.attribute.Attribute
                // @ts-ignore
                public static values(): org.bukkit.attribute.Attribute[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.attribute.Attribute
                // @ts-ignore
                public getKey(): org.bukkit.NamespacedKey
            }
        }
    }
}
