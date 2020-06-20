declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            /**
                             * Represents a modifier that will apply a function on a damage value to deal
                             * towards an entity such that the raw damage is the input of a
                             * {@link DoubleUnaryOperator} such that the output will be the final damage
                             * applied to the {@link Entity}.
                             */
                            // @ts-ignore
                            interface DamageModifier {
                                /**
                                 * Creates a new {@link Builder} for constructing a {@link DamageModifier}.
                                 * @return A new builder
                                 */
                                // @ts-ignore
                                builder(): org.spongepowered.api.event.cause.entity.damage.DamageModifier.Builder
                                /**
                                 * Gets the {@link DamageModifierType} for this {@link DamageModifier}.
                                 * @return The damage modifier type
                                 */
                                // @ts-ignore
                                getType(): org.spongepowered.api.event.cause.entity.damage.DamageModifierType
                                /**
                                 * Gets the cause of this {@link DamageModifier}.
                                 * @return The cause of this damage modifier
                                 */
                                // @ts-ignore
                                getCause(): org.spongepowered.api.event.cause.Cause
                                /**
                                 * Gets the contributing {@link ItemStackSnapshot} that provided the
                                 * "reason" for this {@link DamageModifier} to exist. An example of a
                                 * contributing {@link ItemStack} is if an {@link ItemTypes#DIAMOND_SWORD}
                                 * provided an {@link Enchantment} that provided a
                                 * {@link DamageModifierTypes#WEAPON_ENCHANTMENT}, this modifier would have
                                 * the {@link ItemStackSnapshot} for the weapon used. Some modifiers however,
                                 * do not require an {@link ItemStack} to be the contributing factor for
                                 * this modifier to exist.
                                 * @return The contributing item, if available
                                 */
                                // @ts-ignore
                                getContributingItem(): java.util.Optional<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                            }
                        }
                    }
                }
            }
        }
    }
}
