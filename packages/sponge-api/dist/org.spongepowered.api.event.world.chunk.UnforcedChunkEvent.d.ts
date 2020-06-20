declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace chunk {
                        // @ts-ignore
                        interface UnforcedChunkEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the ticket that the chunk was removed from.
                             * @return The ticket the chunk was removed from
                             */
                            // @ts-ignore
                            getTicket(): org.spongepowered.api.world.ChunkTicketManager.LoadingTicket
                            /**
                             * Gets the chunk coordinates.
                             * @return The chunk coordinates
                             */
                            // @ts-ignore
                            getChunkCoords(): Vector3i
                        }
                    }
                }
            }
        }
    }
}
