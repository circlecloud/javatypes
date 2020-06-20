declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkTicketManager {
                    /**
                     * Represents a loading ticket which is attached to a specific entity.
                     */
                    // @ts-ignore
                    interface EntityLoadingTicket extends org.spongepowered.api.world.ChunkTicketManager.LoadingTicket {
                        /**
                         * Binds an Entity to this Ticket, causing the chunk the Entity is in to
                         * be initially loaded with the World. This makes the Entity available
                         * during callbacks.
                         * @param entity The entity to bind to this ticket
                         */
                        // @ts-ignore
                        bindToEntity(entity: org.spongepowered.api.entity.Entity): void
                        /**
                         * Gets the Entity bound to this ticket.
                         * @return The currently bound entity
                         */
                        // @ts-ignore
                        getBoundEntity(): org.spongepowered.api.entity.Entity
                    }
                }
            }
        }
    }
}
