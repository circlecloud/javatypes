declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace projectile {
                        /**
                         * Base event for all events with an {@link Projectile} as the target.
                         */
                        // @ts-ignore
                        interface TargetProjectileEvent extends org.spongepowered.api.event.entity.TargetEntityEvent {
                            // @ts-ignore
                            getTargetEntity(): org.spongepowered.api.entity.projectile.Projectile
                        }
                    }
                }
            }
        }
    }
}
