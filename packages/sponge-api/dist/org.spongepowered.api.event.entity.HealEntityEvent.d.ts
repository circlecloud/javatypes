declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * An event where an {@link Entity} is "healed". This can usually mean that
                     * after a certain amount of "heal amount" the entity is destroyed. Similar to
                     * the {@link DamageEntityEvent}, this event uses various modifiers
                     */
                    // @ts-ignore
                    interface HealEntityEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the original amount to "heal" the targeted {@link Entity}.
                         * @return The original heal amount
                         */
                        // @ts-ignore
                        getOriginalHealAmount(): number /*double*/
                        /**
                         * Gets the original "final" amount of healing after all original
                         * {@link HealthModifier}s are applied to {@link #getOriginalHealAmount()}.
                         * The "final" heal amount is considered the amount gained by the
                         * {@link Entity}, if health is tracked.
                         * @return The final amount of healing to originally deal
                         */
                        // @ts-ignore
                        getOriginalFinalHealAmount(): number /*double*/
                        /**
                         * Gets an {@link Map} of all original {@link HealthModifier}s and their
                         * associated "modified" heal amount. Note that ordering is not retained.
                         * @return An immutable map of the original modified heal amounts
                         */
                        // @ts-ignore
                        getOriginalHealingAmounts(): java.util.Map<org.spongepowered.api.event.cause.entity.health.HealthModifier, java.lang.Double | number>
                        /**
                         * Gets the final heal amount that will be applied to the entity. The final
                         * heal amount is the end result of the {@link #getBaseHealAmount()} being
                         * applied in {@link DoubleUnaryOperator#applyAsDouble(double)} available
                         * from all the {@link Tuple}s of {@link HealthModifier} to
                         * {@link DoubleUnaryOperator} in {@link #getOriginalFunctions()}.
                         * @return The final heal amount to deal
                         */
                        // @ts-ignore
                        getFinalHealAmount(): number /*double*/
                        /**
                         * Gets the original healing amount for the provided {@link HealthModifier}.
                         * If the provided {@link HealthModifier} was not included in
                         * {@link #getOriginalHealingAmounts()}, an {@link IllegalArgumentException}
                         * is thrown.
                         * @param healthModifier The original healing modifier
                         * @return The original healing change
                         */
                        // @ts-ignore
                        getOriginalHealingModifierAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): number /*double*/
                        /**
                         * Gets the original {@link List} of {@link HealthFunction}s that was
                         * originally passed into the event.
                         * @return The list of heal amount modifier functions
                         */
                        // @ts-ignore
                        getOriginalFunctions(): Array<org.spongepowered.api.event.cause.entity.health.HealthFunction>
                        /**
                         * Gets the "base" healing amount to apply to the targeted {@link Entity}.
                         * The "base" heal amount is the original value before passing along the
                         * chain of {@link DoubleUnaryOperator}s for all known
                         * {@link HealthModifier}s.
                         * @return The base heal amount
                         */
                        // @ts-ignore
                        getBaseHealAmount(): number /*double*/
                        /**
                         * Sets the "base" healing amount to apply to the targeted {@link Entity}.
                         * The "base" heal amount is the original value passed along the chain of
                         * {@link DoubleUnaryOperator}s for all known {@link HealthModifier}s.
                         * @param healAmount The base heal amount
                         */
                        // @ts-ignore
                        setBaseHealAmount(healAmount: number /*double*/): void
                        /**
                         * Checks whether the provided {@link HealthModifier} is applicable to the
                         * current available {@link HealthModifier}s.
                         * @param healthModifier The health modifier to check
                         * @return True if the health modifier is relevant to this event
                         */
                        // @ts-ignore
                        isModifierApplicable(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): boolean
                        /**
                         * Gets the heal amount for the provided {@link HealthModifier}. Providing
                         * that {@link #isModifierApplicable(HealthModifier)} returns
                         * <code>true</code>, the cached "heal amount" for the
                         * {@link HealthModifier} is returned.
                         * @param healthModifier The heal amount modifier to get the heal amount for
                         * @return The modifier
                         */
                        // @ts-ignore
                        getHealAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): number /*double*/
                        /**
                         * Sets the provided {@link DoubleUnaryOperator} to be used for the given
                         * {@link HealthModifier}. If the {@link HealthModifier} is already included
                         * in {@link #getModifiers()}, the {@link DoubleUnaryOperator} replaces the
                         * existing function. If there is no {@link HealthFunction} for the
                         * {@link HealthModifier}, a new one is created and added to the end of the
                         * list of {@link DoubleUnaryOperator}s to be applied to the
                         * {@link #getBaseHealAmount()}.
                         * <p>If needing to create a custom {@link HealthModifier} is required,
                         * usage of the
                         * {@link org.spongepowered.api.event.cause.entity.health.HealthModifier.Builder}
                         * is recommended.</p>
                         * @param healthModifier The heal amount modifier
                         * @param function The function to map to the modifier
                         */
                        // @ts-ignore
                        setHealAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier, func: java.util.function$.DoubleUnaryOperator): void
                        /**
                         * Gets a list of simple {@link HealthFunction}s. All {@link HealthModifier}
                         * s are applicable to the entity based on the {@link HealingSource} and any
                         * possible invulnerabilities due to the {@link HealingSource}.
                         * @return A list of heal amount modifiers to functions
                         */
                        // @ts-ignore
                        getModifiers(): Array<org.spongepowered.api.event.cause.entity.health.HealthFunction>
                    }
                }
            }
        }
    }
}
