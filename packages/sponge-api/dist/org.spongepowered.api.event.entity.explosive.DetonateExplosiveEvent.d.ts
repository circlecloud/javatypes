declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace explosive {
                        /**
                         * Event called immediately before an {@link Explosive} explodes.
                         */
                        // @ts-ignore
                        interface DetonateExplosiveEvent extends org.spongepowered.api.event.entity.explosive.TargetExplosiveEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Returns the explosion of the vanilla behavior that this event was
                             * initialized with.
                             * @return Original explosion
                             */
                            // @ts-ignore
                            getOriginalExplosion(): org.spongepowered.api.world.explosion.Explosion
                            /**
                             * Returns the {@link Builder} that will be used to build the
                             * explosion for the impending detonation.
                             * @return Explosion builder for detonation
                             */
                            // @ts-ignore
                            getExplosionBuilder(): org.spongepowered.api.world.explosion.Explosion.Builder
                        }
                    }
                }
            }
        }
    }
}
