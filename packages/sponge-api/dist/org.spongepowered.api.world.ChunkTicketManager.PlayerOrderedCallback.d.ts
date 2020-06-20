declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkTicketManager {
                    /**
                     * A player ordered callback for loading tickets during world load.
                     */
                    // @ts-ignore
                    interface PlayerOrderedCallback extends org.spongepowered.api.world.ChunkTicketManager.Callback {
                        /**
                         * Callback for loading player Tickets during world load.
                         * <p>During this callback you cannot associate chunks to tickets. This
                         * callback gets all player-associated tickets registered by the plugin.
                         * Tickets absent from the returned Multimap will be released.</p>
                         * @param tickets The list of loaded tickets by player
                         * @param world The world tickets were loaded for
                         * @return All tickets per-player that you wish to keep
                         */
                        // @ts-ignore
                        onPlayerLoaded(tickets: object, world: org.spongepowered.api.world.World): <any>
                    }
                }
            }
        }
    }
}
