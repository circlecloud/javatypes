declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace chunk {
                        // @ts-ignore
                        interface ForcedChunkEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the ticket that the chunk was added to.
                             * @return The ticket the chunk was added to
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
