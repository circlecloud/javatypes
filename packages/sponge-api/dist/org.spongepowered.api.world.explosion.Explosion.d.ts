declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace explosion {
                    /**
                     * Represents an explosion in a {@link World}.
                     */
                    // @ts-ignore
                    interface Explosion extends org.spongepowered.api.world.Locatable {
                        /**
                         * Creates a new {@link Builder} to build a {@link Explosion}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.world.explosion.Explosion.Builder
                        /**
                         * Gets the source {@link Explosive} of the explosion.
                         * @return The source explosive or null if there is no source
                         */
                        // @ts-ignore
                        getSourceExplosive(): java.util.Optional<org.spongepowered.api.entity.explosive.Explosive>
                        /**
                         * Gets the radius of the explosion.
                         * @return The radius
                         */
                        // @ts-ignore
                        getRadius(): float
                        /**
                         * Gets whether the affected blocks have a chance to catch on fire.
                         * @return Whether the affected blocks can catch on fire
                         */
                        // @ts-ignore
                        canCauseFire(): boolean
                        /**
                         * Gets whether the explosion will play a smoke effect.
                         * @return Whether the explosion will play smoke
                         */
                        // @ts-ignore
                        shouldPlaySmoke(): boolean
                        /**
                         * Gets whether the affected blocks should be destroyed on explosion.
                         * @return Whether the affected blocks should be destroyed
                         */
                        // @ts-ignore
                        shouldBreakBlocks(): boolean
                        /**
                         * Gets whether this explosion will damage entities.
                         * @return Whether the explosion will damage entities
                         */
                        // @ts-ignore
                        shouldDamageEntities(): boolean
                        /**
                         * Gets the number of rays cast per length of each side of the explosion bounding box.
                         * @return The number of rays cast per length of each side of the explosion bounding box
                         */
                        // @ts-ignore
                        getResolution(): int
                        /**
                         * <pre>
                         * A numerical representation of variation in blast strength per ray.
                         * The blast strength of a ray is calculated as {@code (1 * [variation]) * [radius]}
                         * 0.0 = No Variation.
                         * 1.0 = +/-0.3 Variation (Vanilla Behaviour).
                         * </pre>
                         * @return A numerical representation of variation in blast strength per ray
                         */
                        // @ts-ignore
                        getRandomness(): float
                        /**
                         * Knockback multiplier for entities effected by the explosion.
                         * @return The multiple by which the knockback of entities will be changed
                         */
                        // @ts-ignore
                        getKnockback(): double
                    }
                }
            }
        }
    }
}
