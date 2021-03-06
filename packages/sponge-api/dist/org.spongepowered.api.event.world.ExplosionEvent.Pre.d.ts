declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace ExplosionEvent {
                        /**
                         * An event that is fired before the explosion occurs.
                         */
                        // @ts-ignore
                        interface Pre extends org.spongepowered.api.event.world.ExplosionEvent, org.spongepowered.api.event.world.TargetWorldEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Sets the {@link Explosion} involved for this event. This will
                             * override the explosion used before calculations take place with
                             * regards to the blocks and entities affected.
                             * @param explosion The new explosion
                             */
                            // @ts-ignore
                            setExplosion(explosion: org.spongepowered.api.world.explosion.Explosion): void
                        }
                    }
                }
            }
        }
    }
}
