declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    /**
                     * Called when an {@link Explosion} occurs in a {@link World}.
                     */
                    // @ts-ignore
                    interface ExplosionEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the {@link Explosion} involved in this event.
                         * @return The explosion that this event is involved in
                         */
                        // @ts-ignore
                        getExplosion(): org.spongepowered.api.world.explosion.Explosion
                    }
                }
            }
        }
    }
}
