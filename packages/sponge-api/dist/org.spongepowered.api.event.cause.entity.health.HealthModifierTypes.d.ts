declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            // @ts-ignore
                            class HealthModifierTypes extends java.lang.Object {
                                /**
                                 * Represents a {@link HealthModifier} that "absorbs" damage based on
                                 * the {@link PotionEffectTypes#ABSORPTION} level on the
                                 * {@link Entity}.
                                 */
                                // @ts-ignore
                                public static readonly ABSORPTION: org.spongepowered.api.event.cause.entity.health.HealthModifierType
                                /**
                                 * Represents a {@link HealthModifier} that will reduce damage based on
                                 * the armor {@link ItemStack}s.
                                 */
                                // @ts-ignore
                                public static readonly ARMOR: org.spongepowered.api.event.cause.entity.health.HealthModifierType
                                /**
                                 * Represents a {@link HealthModifier} that will modify the heal amount
                                 * from a {@link PotionEffect} affecting the target.
                                 */
                                // @ts-ignore
                                public static readonly DEFENSIVE_POTION_EFFECT: org.spongepowered.api.event.cause.entity.health.HealthModifierType
                                /**
                                 * Represents a {@link HealthModifier} that enhances damage based on the
                                 * current {@link Difficulty} of the {@link World}.
                                 */
                                // @ts-ignore
                                public static readonly DIFFICULTY: org.spongepowered.api.event.cause.entity.health.HealthModifierType
                                /**
                                 * Represents a {@link HealthModifier} that will modify damage based on
                                 * magic.
                                 */
                                // @ts-ignore
                                public static readonly MAGIC: org.spongepowered.api.event.cause.entity.health.HealthModifierType
                                /**
                                 * Represents the {@link HealthModifier} that will increase heal amount
                                 * from a {@link PotionEffect} affecting the target.
                                 */
                                // @ts-ignore
                                public static readonly OFFENSIVE_POTION_EFFECT: org.spongepowered.api.event.cause.entity.health.HealthModifierType
                                /**
                                 * Represents the {@link HealthModifier} that will modify heal amount from
                                 * an {@link EnchantmentType} on an equipped {@link ItemStack}.
                                 * <p>Usually, within the {@link HealthModifier#getCause()} will reside
                                 * an {@link ItemStackSnapshot} and an {@link Enchantment} signifying
                                 * that the {@link EnchantmentType} of the {@link ItemStack} is modifying the
                                 * incoming/outgoing heal amount.</p>
                                 */
                                // @ts-ignore
                                public static readonly WEAPON_ENCHANTMENT: org.spongepowered.api.event.cause.entity.health.HealthModifierType
                            }
                        }
                    }
                }
            }
        }
    }
}
