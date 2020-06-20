declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkTicketManager {
                    /**
                     * Represents a loading ticket which is attached to a specific player.
                     */
                    // @ts-ignore
                    interface PlayerLoadingTicket extends org.spongepowered.api.world.ChunkTicketManager.LoadingTicket {
                        /**
                         * Gets the UUID of the player associated with this ticket.
                         * @return The UUID of the player that owns this ticket
                         */
                        // @ts-ignore
                        getPlayerUniqueId(): java.util.UUID
                    }
                }
            }
        }
    }
}
