declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace ExplosionEvent {
                        /**
                         * An event that is fired as the explosion is going to start affecting
                         * multiple blocks and entities. Note that none of the locations have
                         * been affected yet as this is mainly an event when an explosion has
                         * already calculated all the blocks and entities the explosion should
                         * affect.
                         */
                        // @ts-ignore
                        interface Detonate extends org.spongepowered.api.event.world.ExplosionEvent, org.spongepowered.api.event.world.TargetWorldEvent, org.spongepowered.api.event.entity.AffectEntityEvent {
                            /**
                             * Gets the list of calculated affected locations for blocks that will
                             * be removed due to the explosion. Note that the list is mutable.
                             * However, adding new locations may cause unknown effects.
                             * @return The list of blocks that will be affected by the explosion
                             */
                            // @ts-ignore
                            getAffectedLocations(): Array<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                        }
                    }
                }
            }
        }
    }
}
