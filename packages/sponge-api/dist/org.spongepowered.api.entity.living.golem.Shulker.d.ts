declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace golem {
                        // @ts-ignore
                        interface Shulker extends org.spongepowered.api.entity.living.golem.Golem, org.spongepowered.api.entity.projectile.source.ProjectileSource {
                            /**
                             * Gets a copy of the {@link DyeableData} representing the color of this
                             * {@link Shulker} entity.
                             * @return A copy of the dye data
                             */
                            // @ts-ignore
                            getDyeData(): org.spongepowered.api.data.manipulator.mutable.DyeableData
                            /**
                             * Gets the current {@link Value} of {@link DyeColor} for this
                             * {@link Shulker}.
                             * @return The current value of dye color for this shulker
                             */
                            // @ts-ignore
                            color(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DyeColor>
                            /**
                             * Gets a copy of the {@link DirectionalData} representing the direction this
                             * {@link Shulker} is oriented towards.
                             * @return A copy of the directional data
                             */
                            // @ts-ignore
                            getDirectionalData(): org.spongepowered.api.data.manipulator.mutable.block.DirectionalData
                            /**
                             * Gets the current {@link Value} of {@link Direction} for this {@link Shulker}.
                             * @return The current value of direction for this shulker
                             */
                            // @ts-ignore
                            direction(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.Direction>
                            /**
                             * Launches a new {@link EntityTargetingProjectile} from this {@link Shulker}.
                             * @param projectileClass The class of the projectile to launch
                             * @param target the target to assign to the launched projectile
                             * @param <P> The type of {#link EntityTargetingProjectile}
                             * @return the projectile if successfully launched, {#link Optional#empty()} otherwise
                             */
                            // @ts-ignore
                            launchWithTarget<P extends org.spongepowered.api.entity.projectile.EntityTargetingProjectile>(projectileClass: java.lang.Class<P>, target: org.spongepowered.api.entity.Entity): java.util.Optional<P>
                        }
                    }
                }
            }
        }
    }
}
