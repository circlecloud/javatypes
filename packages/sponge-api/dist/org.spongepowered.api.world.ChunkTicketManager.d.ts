declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * A manager of chunks. Chunks can be managed via tickets that may represent
                 * forced-chunk-loading, player-chunk-loading, entity-chunk-loading, etc.
                 */
                // @ts-ignore
                interface ChunkTicketManager {
                    /**
                     * Sets the callback for handling loading forced chunk tickets on world
                     * load.
                     * <p><b>Required</b> for any plugin that wants to force-load chunks. Any
                     * plugin that does not have a registered callback will have all saved
                     * tickets dropped on world load.</p>
                     * @param plugin Plugin that is registering a callback
                     * @param callback The callback function object
                     */
                    // @ts-ignore
                    registerCallback(plugin: java.lang.Object | any, callback: org.spongepowered.api.world.ChunkTicketManager.Callback): void
                    /**
                     * Attempts to create a new loading ticket for a plugin to load chunks in a
                     * world.
                     * <p>Plugins can be limited in the number of tickets they can create per
                     * world.</p>
                     * @param plugin Plugin that wants to load chunks
                     * @param world World that chunks will be loaded in
                     * @return The new LoadingTicket, or Optional.empty() if a ticket could not
                     *          be created
                     */
                    // @ts-ignore
                    createTicket(plugin: java.lang.Object | any, world: org.spongepowered.api.world.World): java.util.Optional<org.spongepowered.api.world.ChunkTicketManager.LoadingTicket>
                    /**
                     * Attempts to create a new loading ticket for a plugin to load chunks in a
                     * world.
                     * <p>This version is to create tickets that are bound to the existence of
                     * an Entity. For instance, a ticket to load the chunks a minecart is
                     * travelling through.</p>
                     * <p>Plugins can be limited in the number of tickets they can create per
                     * world.</p>
                     * @param plugin Plugin that wants to load chunks
                     * @param world World that chunks will be loaded in
                     * @return The new LoadingTicket, or Optional.empty() if a ticket could not
                     *          be created
                     */
                    // @ts-ignore
                    createEntityTicket(plugin: java.lang.Object | any, world: org.spongepowered.api.world.World): java.util.Optional<org.spongepowered.api.world.ChunkTicketManager.EntityLoadingTicket>
                    /**
                     * Attempts to create a new loading ticket for a plugin to load chunks in a
                     * world. The returned ticket will be associated with the given player.
                     * <p>.</p>
                     * @param plugin Plugin that wants to load chunks
                     * @param world World that chunks will be loaded in
                     * @param player Player that chunks are being loaded for
                     * @return The new LoadingTicket, or Optional.empty() if a ticket could not
                     *          be created
                     */
                    // @ts-ignore
                    createPlayerTicket(plugin: java.lang.Object | any, world: org.spongepowered.api.world.World, player: java.util.UUID): java.util.Optional<org.spongepowered.api.world.ChunkTicketManager.PlayerLoadingTicket>
                    /**
                     * Attempts to create a new loading ticket for a plugin to load chunks in a
                     * world. The returned ticket will be associated with the given player.
                     * <p>This version is to create tickets that are bound to the existence of
                     * an Entity. For instance, a ticket to load the chunks a minecart is
                     * travelling through.</p>
                     * <p>Plugins can be limited in the number of tickets they can create per
                     * world.</p>
                     * @param plugin Plugin that wants to load chunks
                     * @param world World that chunks will be loaded in
                     * @param player Player that chunks are being loaded for
                     * @return The new LoadingTicket, or Optional.empty() if a ticket could not
                     *          be created
                     */
                    // @ts-ignore
                    createPlayerEntityTicket(plugin: java.lang.Object | any, world: org.spongepowered.api.world.World, player: java.util.UUID): java.util.Optional<org.spongepowered.api.world.ChunkTicketManager.PlayerEntityLoadingTicket>
                    /**
                     * Gets the maximum allowed per-world tickets for a plugin.
                     * @param plugin The plugin to get the maximum ticket count for
                     * @return The maximum number of tickets the plugin can have in any given
                     *          world
                     */
                    // @ts-ignore
                    getMaxTickets(plugin: java.lang.Object | any): number /*int*/
                    /**
                     * Gets the amount of remaining tickets a plugin can have in the world
                     * before hitting the maximum.
                     * @param plugin The plugin to get the remaining available ticket count for
                     * @param world The world to get the remaining count in
                     * @return The remaining tickets the plugin has available in the world
                     */
                    // @ts-ignore
                    getAvailableTickets(plugin: java.lang.Object | any, world: org.spongepowered.api.world.World): number /*int*/
                    /**
                     * Gets the amount of tickets remaining available for a player.
                     * @param player The player to get the number of remaining tickets for
                     * @return The remaining tickets the player has available
                     */
                    // @ts-ignore
                    getAvailableTickets(player: java.util.UUID): number /*int*/
                    /**
                     * Gets the set of currently force-loaded chunks in a world.
                     * @param world The world to get force-loaded chunks from
                     * @return The set of all force-loaded chunk coordinates and the tickets
                     *          that are loading those chunks
                     */
                    // @ts-ignore
                    getForcedChunks(world: org.spongepowered.api.world.World): object
                }
            }
        }
    }
}
