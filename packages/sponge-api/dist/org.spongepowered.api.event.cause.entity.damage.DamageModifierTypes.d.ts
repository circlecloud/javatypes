declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            // @ts-ignore
                            class DamageModifierTypes extends java.lang.Object {
                                /**
                                 * Represents a {@link DamageModifier} that "absorbs" damage based on
                                 * the {@link PotionEffectTypes#ABSORPTION} level on the
                                 * {@link Entity}.
                                 */
                                // @ts-ignore
                                public static readonly ABSORPTION: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents a {@link DamageModifier} that will reduce damage based on
                                 * the armor {@link ItemStack}s.
                                 */
                                // @ts-ignore
                                public static readonly ARMOR: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents a {@link DamageModifier} that will reduce damage based on
                                 * the {@link EnchantmentType}s applicable to an {@link ItemStack} that is
                                 * considered to be "armor" currently equipped on the owner.
                                 * <p>Usually, within the {@link DamageModifier#getCause()} will reside
                                 * an {@link ItemStackSnapshot} and an {@link Enchantment} signifying
                                 * that the {@link EnchantmentType} of the {@link ItemStack} is modifying the
                                 * incoming/outgoing damage. There can be multiple {@link DamageModifier}s
                                 * of this type in a single event due to the variety of possibilities in
                                 * customization of armor handling.</p>
                                 */
                                // @ts-ignore
                                public static readonly ARMOR_ENCHANTMENT: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents the {@link DamageModifier} that will reduce damage from a
                                 * {@link Player} if their attack cooldown has not been completed yet.
                                 */
                                // @ts-ignore
                                public static readonly ATTACK_COOLDOWN: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents the {@link DamageModifier} that will modify damage output
                                 * based on the fact that the attacking source is critically hitting the
                                 * target.
                                 */
                                // @ts-ignore
                                public static readonly CRITICAL_HIT: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents a {@link DamageModifier} that will reduce damage based on
                                 * the {@link PotionEffectTypes#RESISTANCE} or any other
                                 * {@link PotionEffectType} that can be deemed as reducing incoming damage.
                                 * <p>Usually, within the {@link DamageModifier#getCause()} will reside
                                 * a {@link PotionEffect} including the amplifier and duration, signifying
                                 * that the {@link PotionEffectType} is modifying the incoming damage.</p>
                                 */
                                // @ts-ignore
                                public static readonly DEFENSIVE_POTION_EFFECT: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents a {@link DamageModifier} that enhances damage based on the
                                 * current {@link Difficulty} of the {@link World}.
                                 */
                                // @ts-ignore
                                public static readonly DIFFICULTY: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents the {@link DamageModifier} that will modify damage from
                                 * a {@link FallingBlockDamageSource}.
                                 * <p>Usually, within the {@link DamageModifier#getCause()} will reside
                                 * an {@link ItemStackSnapshot} and an {@link Enchantment} signifying
                                 * that the {@link EnchantmentType} of the {@link ItemStack} is modifying the
                                 * incoming/outgoing damage.</p>
                                 */
                                // @ts-ignore
                                public static readonly HARD_HAT: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents a {@link DamageModifier} that will modify damage based on
                                 * magic.
                                 */
                                // @ts-ignore
                                public static readonly MAGIC: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents a {@link DamageModifier} that will reduce outgoing damage
                                 * based on a {@link PotionEffect}.
                                 * <p>Usually, within the {@link DamageModifier#getCause()} will reside
                                 * a {@link PotionEffect} including the amplifier and duration, signifying
                                 * that the {@link PotionEffectType} is reducing the outgoing damage.</p>
                                 */
                                // @ts-ignore
                                public static readonly NEGATIVE_POTION_EFFECT: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents the {@link DamageModifier} that will increase damage from
                                 * a {@link PotionEffect} affecting the attacker.
                                 */
                                // @ts-ignore
                                public static readonly OFFENSIVE_POTION_EFFECT: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents a {@link DamageModifier} that will reduce damage due to
                                 * using a shield.
                                 */
                                // @ts-ignore
                                public static readonly SHIELD: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents a {@link DamageModifier} that is applied for a sweeping
                                 * attack.
                                 */
                                // @ts-ignore
                                public static readonly SWEEPING: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents a {@link DamageModifier} that is applied for a sweaping
                                 * attack.
                                 * @deprecated use {#link #SWEEPING}
                                 */
                                // @ts-ignore
                                public static readonly SWEAPING: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Represents the {@link DamageModifier} that will modify damage from
                                 * an {@link EnchantmentType} on an equipped {@link ItemStack}.
                                 * <p>Usually, within the {@link DamageModifier#getCause()} will reside
                                 * an {@link ItemStackSnapshot} and an {@link Enchantment} signifying
                                 * that the {@link EnchantmentType} of the {@link ItemStack} is modifying the
                                 * incoming/outgoing damage.</p>
                                 */
                                // @ts-ignore
                                public static readonly WEAPON_ENCHANTMENT: org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                            }
                        }
                    }
                }
            }
        }
    }
}
