declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace DamageModifier {
                                /**
                                 * A builder that creates {@link DamageModifier}s, for use in both plugin and
                                 * implementation requirements.
                                 */
                                // @ts-ignore
                                class Builder extends java.lang.Object implements org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.event.cause.entity.damage.DamageModifier, org.spongepowered.api.event.cause.entity.damage.DamageModifier.Builder> {
                                    /**
                                     * Sets the {@link DamageModifierType} for the {@link DamageModifier} to
                                     * build.
                                     * @param damageModifierType The damage modifier type
                                     * @return This builder, for chaining
                                     */
                                    // @ts-ignore
                                    public type(damageModifierType: org.spongepowered.api.event.cause.entity.damage.DamageModifierType): org.spongepowered.api.event.cause.entity.damage.DamageModifier.Builder
                                    // @ts-ignore
                                    public item(itemStack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.event.cause.entity.damage.DamageModifier.Builder
                                    // @ts-ignore
                                    public item(snapshot: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.event.cause.entity.damage.DamageModifier.Builder
                                    /**
                                     * Sets the {@link Cause} for the {@link DamageModifier} to build.
                                     * @param cause The cause for the damage modifier
                                     * @return This builder, for chaining
                                     */
                                    // @ts-ignore
                                    public cause(cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.event.cause.entity.damage.DamageModifier.Builder
                                    /**
                                     * Creates a new {@link DamageModifier} with this builder's provided
                                     * {@link Cause} and {@link DamageModifierType}.
                                     * @return The newly created damage modifier
                                     */
                                    // @ts-ignore
                                    public build(): org.spongepowered.api.event.cause.entity.damage.DamageModifier
                                    // @ts-ignore
                                    public from(value: org.spongepowered.api.event.cause.entity.damage.DamageModifier): org.spongepowered.api.event.cause.entity.damage.DamageModifier.Builder
                                    // @ts-ignore
                                    public reset(): org.spongepowered.api.event.cause.entity.damage.DamageModifier.Builder
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
