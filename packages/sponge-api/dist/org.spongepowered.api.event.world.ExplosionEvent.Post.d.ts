declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace ExplosionEvent {
                        /**
                         * An event that is fired after the completion of an explosion such that all
                         * block changes that took place due to the explosion (including side
                         * affected blocks) will be included. This is where the block changes can be
                         * updated and/or changed.
                         */
                        // @ts-ignore
                        interface Post extends org.spongepowered.api.event.world.ExplosionEvent, org.spongepowered.api.event.block.ChangeBlockEvent.Post {
                        }
                    }
                }
            }
        }
    }
}
