declare namespace org {
    namespace bukkit {
        namespace attribute {
            /**
             * Types of attributes which may be present on an {@link Attributable}.
             */
            // @ts-ignore
            class Attribute extends java.lang.Enum<org.bukkit.attribute.Attribute> {
                /**
                 * Maximum health of an Entity.
                 */
                // @ts-ignore
                readonly GENERIC_MAX_HEALTH: org.bukkit.attribute.Attribute
                /**
                 * Range at which an Entity will follow others.
                 */
                // @ts-ignore
                readonly GENERIC_FOLLOW_RANGE: org.bukkit.attribute.Attribute
                /**
                 * Resistance of an Entity to knockback.
                 */
                // @ts-ignore
                readonly GENERIC_KNOCKBACK_RESISTANCE: org.bukkit.attribute.Attribute
                /**
                 * Movement speed of an Entity.
                 */
                // @ts-ignore
                readonly GENERIC_MOVEMENT_SPEED: org.bukkit.attribute.Attribute
                /**
                 * Flying speed of an Entity.
                 */
                // @ts-ignore
                readonly GENERIC_FLYING_SPEED: org.bukkit.attribute.Attribute
                /**
                 * Attack damage of an Entity.
                 */
                // @ts-ignore
                readonly GENERIC_ATTACK_DAMAGE: org.bukkit.attribute.Attribute
                /**
                 * Attack speed of an Entity.
                 */
                // @ts-ignore
                readonly GENERIC_ATTACK_SPEED: org.bukkit.attribute.Attribute
                /**
                 * Armor bonus of an Entity.
                 */
                // @ts-ignore
                readonly GENERIC_ARMOR: org.bukkit.attribute.Attribute
                /**
                 * Armor durability bonus of an Entity.
                 */
                // @ts-ignore
                readonly GENERIC_ARMOR_TOUGHNESS: org.bukkit.attribute.Attribute
                /**
                 * Luck bonus of an Entity.
                 */
                // @ts-ignore
                readonly GENERIC_LUCK: org.bukkit.attribute.Attribute
                /**
                 * Strength with which a horse will jump.
                 */
                // @ts-ignore
                readonly HORSE_JUMP_STRENGTH: org.bukkit.attribute.Attribute
                /**
                 * Chance of a zombie to spawn reinforcements.
                 */
                // @ts-ignore
                readonly ZOMBIE_SPAWN_REINFORCEMENTS: org.bukkit.attribute.Attribute
                // @ts-ignore
                values(): org.bukkit.attribute.Attribute[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.attribute.Attribute
            }
        }
    }
}
