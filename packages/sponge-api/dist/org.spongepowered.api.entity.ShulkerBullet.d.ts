declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                /**
                 * A {@link ShulkerBullet} is the projectile {@link Shulker}s shoot.
                 */
                // @ts-ignore
                interface ShulkerBullet extends org.spongepowered.api.entity.projectile.EntityTargetingProjectile, org.spongepowered.api.entity.projectile.DamagingProjectile {
                    /**
                     * Gets a copy of the {@link DirectionalData} being used for this
                     * {@link ShulkerBullet} entity.
                     * @return A copy of the directional data
                     */
                    // @ts-ignore
                    getDirectionalData(): org.spongepowered.api.data.manipulator.mutable.block.DirectionalData
                    /**
                     * Gets the {@link Value} for the current direction this
                     * {@link ShulkerBullet} is going to.
                     * @return The current direction value
                     */
                    // @ts-ignore
                    direction(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.Direction>
                }
            }
        }
    }
}
