declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    namespace source {
                        /**
                         * Represents a {@link ProjectileSource} that is a block. Examples are
                         * Dispensers.
                         */
                        // @ts-ignore
                        interface BlockProjectileSource extends org.spongepowered.api.entity.projectile.source.ProjectileSource {
                            /**
                             * Gets the {@link Location} where the projectile source is at.
                             * @return The location
                             */
                            // @ts-ignore
                            getLocation(): org.spongepowered.api.world.Location<org.spongepowered.api.world.World>
                            /**
                             * Gets the {@link BlockState} of the projectile source.
                             * @return The blockstate
                             */
                            // @ts-ignore
                            getBlock(): org.spongepowered.api.block.BlockState
                        }
                    }
                }
            }
        }
    }
}
