declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                /**
                                 * Represents a {@link Cause} for damage on the {@link Entity} being
                                 * damaged. Usually the {@link DamageSource} will have different properties
                                 * based on the source of damage, such as {@link EntityDamageSource}s,
                                 * {@link BlockDamageSource}s, and {@link FallingBlockDamageSource}s.
                                 * <p>Almost always, the {@link DamageSource} will be the first element in
                                 * the {@link Cause} of the event. Any additional modifiers that "aid" the
                                 * {@link Cause} of the event will be listed subsequently.</p>
                                 */
                                // @ts-ignore
                                interface DamageSource {
                                    /**
                                     * Creates a new {@link Builder builder} to build a {@link DamageSource}.
                                     * @return A new builder
                                     */
                                    // @ts-ignore
                                    builder(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.Builder
                                    /**
                                     * Gets the {@link DamageType} of this source.
                                     * @return The damage type
                                     */
                                    // @ts-ignore
                                    getType(): org.spongepowered.api.event.cause.entity.damage.DamageType
                                    /**
                                     * Gets whether this {@link DamageSource}'s damage is absolute and
                                     * will ignore potion effects and enchantments.
                                     * @return If this damage source deals absolute damage
                                     */
                                    // @ts-ignore
                                    isAbsolute(): boolean
                                    /**
                                     * Gets whether this {@link DamageSource} will deal damage that
                                     * bypasses any armor.
                                     * @return True if this damage source bypasses armor
                                     */
                                    // @ts-ignore
                                    isBypassingArmor(): boolean
                                    /**
                                     * Gets whether this {@link DamageSource}'s damage is scaled by
                                     * {@link Difficulty}.
                                     * @return True if the damage from this source is scaled
                                     */
                                    // @ts-ignore
                                    isScaledByDifficulty(): boolean
                                    /**
                                     * Gets whether this {@link DamageSource} is an explosion.
                                     * @return True if this damage source is an explosion
                                     */
                                    // @ts-ignore
                                    isExplosive(): boolean
                                    /**
                                     * Gets whether this {@link DamageSource} is considered to be magical
                                     * damage, such as potions, or other sources.
                                     * @return If this damage is magic based
                                     */
                                    // @ts-ignore
                                    isMagic(): boolean
                                    /**
                                     * Gets whether this {@link DamageSource} is considered to damage creative, or
                                     * otherwise "normally unharmable" players. Usually associated with
                                     * {@link DamageTypes#VOID}.
                                     * @return If this damage should affect creative players
                                     */
                                    // @ts-ignore
                                    doesAffectCreative(): boolean
                                    /**
                                     * Gets the amount of exhaustion this {@link DamageSource} will
                                     * add to the entity, generally only to players.
                                     * <p>In vanilla gameplay this is set to 0.1 by default and
                                     * overridden to 0 if the source is set to be absolute or
                                     * as overriding armor.</p>
                                     * @return The increase in exhaustion
                                     */
                                    // @ts-ignore
                                    getExhaustion(): number /*double*/
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
