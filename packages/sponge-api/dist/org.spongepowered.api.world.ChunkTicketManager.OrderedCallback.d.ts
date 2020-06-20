declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkTicketManager {
                    /**
                     * A ordered callback for loading tickets during world load.
                     */
                    // @ts-ignore
                    interface OrderedCallback extends org.spongepowered.api.world.ChunkTicketManager.Callback {
                        /**
                         * Callback for loading Tickets during world load.
                         * <p>During this callback you cannot associate chunks to tickets. This
                         * callback gets all loaded non-player tickets. The returned list will
                         * be truncated to maxTickets after this callback is called, and and
                         * tickets absent from the list will be released.</p>
                         * @param tickets The list of loaded tickets
                         * @param world The world tickets were loaded for
                         * @param maxTickets The maximum tickets allowed for this plugin
                         * @return A list of all tickets you wish to keep
                         */
                        // @ts-ignore
                        onLoaded(tickets: object, world: org.spongepowered.api.world.World, maxTickets: number /*int*/): java.util.List<org.spongepowered.api.world.ChunkTicketManager.LoadingTicket>
                    }
                }
            }
        }
    }
}
