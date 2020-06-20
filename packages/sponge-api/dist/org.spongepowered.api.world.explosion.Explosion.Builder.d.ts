declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace explosion {
                    namespace Explosion {
                        /**
                         * A builder for {@link Explosion}.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.explosion.Explosion, org.spongepowered.api.world.explosion.Explosion.Builder> {
                            /**
                             * Sets the location origin of the explosion.
                             * @param location Origin of explosion
                             * @return The builder, for chaining
                             */
                            // @ts-ignore
                            location(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): org.spongepowered.api.world.explosion.Explosion.Builder
                            /**
                             * Sets the source explosive of the explosion.
                             * @param source The source entity
                             * @return The builder, for chaining
                             */
                            // @ts-ignore
                            sourceExplosive(source: org.spongepowered.api.entity.explosive.Explosive): org.spongepowered.api.world.explosion.Explosion.Builder
                            /**
                             * Sets the radius of the explosion.
                             * @param radius The radius
                             * @return The builder, for chaining
                             */
                            // @ts-ignore
                            radius(radius: number /*float*/): org.spongepowered.api.world.explosion.Explosion.Builder
                            /**
                             * Sets whether the affected blocks have a chance to catch on fire.
                             * @param fire Whether the affected blocks can catch on fire
                             * @return The builder, for chaining
                             */
                            // @ts-ignore
                            canCauseFire(fire: boolean): org.spongepowered.api.world.explosion.Explosion.Builder
                            /**
                             * Sets whether the explosion will damage entities nearby.
                             * @param damage Whether the explosion will damage entities
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            shouldDamageEntities(damage: boolean): org.spongepowered.api.world.explosion.Explosion.Builder
                            /**
                             * Sets whether the explosion will have smoke particles.
                             * @param smoke Whether the explosion will have smoke particles
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            shouldPlaySmoke(smoke: boolean): org.spongepowered.api.world.explosion.Explosion.Builder
                            /**
                             * Sets whether the affected blocks should be destroyed on explosion.
                             * @param destroy Whether the affected blocks should be destroyed
                             * @return The builder, for chaining
                             */
                            // @ts-ignore
                            shouldBreakBlocks(destroy: boolean): org.spongepowered.api.world.explosion.Explosion.Builder
                            /**
                             * <pre>
                             * <b>WARNING: It is recommended that this variable be set no higher than the default of 16!</b>
                             * The number of rays cast per length of each side of the explosion bounding box.
                             * The total number of rays that will be cast can be calculated using {@code [resolution] * 12}
                             * </pre>
                             * @param resolution The desired resolution of the explosion
                             * @return The builder, for chaining
                             */
                            // @ts-ignore
                            resolution(resolution: number /*int*/): org.spongepowered.api.world.explosion.Explosion.Builder
                            /**
                             * <pre>
                             * A numerical representation of variation in blast strength per ray.
                             * The blast strength of a ray is calculated as {@code (1 * [variation]) * [radius]}
                             * 0 = No Variation.
                             * 1 = +/-0.3 Variation (Vanilla Behaviour).
                             * </pre>
                             * @param randomness The desired variation in blast strength per ray for this explosion as a numerical representation
                             * @return The builder, for chaining
                             */
                            // @ts-ignore
                            randomness(randomness: number /*float*/): org.spongepowered.api.world.explosion.Explosion.Builder
                            /**
                             * Knockback multiplier for entities effected by the explosion.
                             * @param knockback The multiple by which to change the knockback of entities
                             * @return The builder, for chaining
                             */
                            // @ts-ignore
                            knockback(knockback: number /*double*/): org.spongepowered.api.world.explosion.Explosion.Builder
                            /**
                             * Attempts to create a {@link Explosion} from the specified parameters.
                             * @return The explosion, if successful
                             * @throws IllegalArgumentException If any builder parameter is invalid
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.world.explosion.Explosion
                        }
                    }
                }
            }
        }
    }
}
