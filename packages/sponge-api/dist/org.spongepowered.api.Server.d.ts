declare namespace org {
    namespace spongepowered {
        namespace api {
            /**
             * Represents a typical Minecraft Server.
             */
            // @ts-ignore
            interface Server {
                /**
                 * Gets the {@link Player}s currently online.
                 * @return A {#link Collection} of online players
                 */
                // @ts-ignore
                getOnlinePlayers(): java.util.Collection<org.spongepowered.api.entity.living.player.Player>
                /**
                 * Gets the max players allowed on this server.
                 * @return Maximum number of connected players
                 */
                // @ts-ignore
                getMaxPlayers(): int
                /**
                 * Gets a {@link Player} by their UUID.
                 * @param uniqueId The UUID to get the player from
                 * @return The {#link Player} or empty if not found
                 */
                // @ts-ignore
                getPlayer(uniqueId: java.util.UUID): java.util.Optional<org.spongepowered.api.entity.living.player.Player>
                /**
                 * Gets a {@link Player} by their name.
                 * <p>This only works for online players.</p>
                 * <p><b>Note: Do not use names for persistent storage, the
                 * Notch of today may not be the Notch of yesterday.</b></p>
                 * @param name The name to get the player from
                 * @return The {#link Player} or empty if not found
                 */
                // @ts-ignore
                getPlayer(name: string): java.util.Optional<org.spongepowered.api.entity.living.player.Player>
                /**
                 * Gets all currently loaded {@link World}s.
                 * @return A collection of loaded worlds
                 */
                // @ts-ignore
                getWorlds(): java.util.Collection<org.spongepowered.api.world.World>
                /**
                 * Gets the properties of all unloaded worlds.
                 * @return A collection of world properties
                 */
                // @ts-ignore
                getUnloadedWorlds(): java.util.Collection<org.spongepowered.api.world.storage.WorldProperties>
                /**
                 * Gets the properties of all worlds, loaded or otherwise.
                 * @return A collection of world properties
                 */
                // @ts-ignore
                getAllWorldProperties(): java.util.Collection<org.spongepowered.api.world.storage.WorldProperties>
                /**
                 * Gets a loaded {@link World} by its unique id ({@link UUID}), if it
                 * exists.
                 * @param uniqueId UUID to lookup
                 * @return The world, if found
                 */
                // @ts-ignore
                getWorld(uniqueId: java.util.UUID): java.util.Optional<org.spongepowered.api.world.World>
                /**
                 * Gets a loaded {@link World} by name, if it exists.
                 * @param worldName Name to lookup
                 * @return The world, if found
                 */
                // @ts-ignore
                getWorld(worldName: string): java.util.Optional<org.spongepowered.api.world.World>
                /**
                 * Gets the properties of default world.
                 * @return The world properties
                 */
                // @ts-ignore
                getDefaultWorld(): java.util.Optional<org.spongepowered.api.world.storage.WorldProperties>
                /**
                 * Gets the default {@link World} name that the server creates and loads.
                 * @return The name
                 */
                // @ts-ignore
                getDefaultWorldName(): java.lang.String
                /**
                 * Loads a {@link World} from the default storage container. If a world with
                 * the given name is already loaded then it is returned instead.
                 * @param worldName The name to lookup
                 * @return The world, if found
                 */
                // @ts-ignore
                loadWorld(worldName: string): java.util.Optional<org.spongepowered.api.world.World>
                /**
                 * Loads a {@link World} from the default storage container. If a world with
                 * the given UUID is already loaded then it is returned instead.
                 * @param uniqueId The UUID to lookup
                 * @return The world, if found
                 */
                // @ts-ignore
                loadWorld(uniqueId: java.util.UUID): java.util.Optional<org.spongepowered.api.world.World>
                /**
                 * Loads a {@link World} from the default storage container. If the world
                 * associated with the given properties is already loaded then it is
                 * returned instead.
                 * @param properties The properties of the world to load
                 * @return The world, if found
                 */
                // @ts-ignore
                loadWorld(properties: org.spongepowered.api.world.storage.WorldProperties): java.util.Optional<org.spongepowered.api.world.World>
                /**
                 * Gets the {@link WorldProperties} of a world. If a world with the given
                 * name is loaded then this is equivalent to calling
                 * {@link World#getProperties()}. However, if no loaded world is found then
                 * an attempt will be made to match unloaded worlds.
                 * @param worldName The name to lookup
                 * @return The world properties, if found
                 */
                // @ts-ignore
                getWorldProperties(worldName: string): java.util.Optional<org.spongepowered.api.world.storage.WorldProperties>
                /**
                 * Gets the {@link WorldProperties} of a world. If a world with the given
                 * UUID is loaded then this is equivalent to calling
                 * {@link World#getProperties()}. However, if no loaded world is found then
                 * an attempt will be made to match unloaded worlds.
                 * @param uniqueId The UUID to lookup
                 * @return The world properties, if found
                 */
                // @ts-ignore
                getWorldProperties(uniqueId: java.util.UUID): java.util.Optional<org.spongepowered.api.world.storage.WorldProperties>
                /**
                 * Unloads a {@link World}, if there are any connected players in the given
                 * world then no operation will occur.
                 * <p>A world which is unloaded will be removed from memory. However if it
                 * is still enabled according to {@link WorldProperties#isEnabled()} then it
                 * will be loaded again if the server is restarted.</p>
                 * @param world The world to unload
                 * @return Whether the operation was successful
                 */
                // @ts-ignore
                unloadWorld(world: org.spongepowered.api.world.World): boolean
                /**
                 * Creates a new {@link WorldProperties} from the given
                 * {@link WorldArchetype}. For the creation of the WorldArchetype please see
                 * {@link org.spongepowered.api.world.WorldArchetype.Builder}.
                 * <p>If the {@link World} exists at the folder name given, the properties
                 * representing that folder name are returned instead.</p>
                 * <p>Although the world is created it is not loaded at this time. Please
                 * see one of the following methods for loading the world.</p>
                 * <ul> <li>{@link #loadWorld(String)}</li> <li>{@link #loadWorld(UUID)}
                 * </li> <li>{@link #loadWorld(WorldProperties)}</li> </ul>
                 * @param folderName The name of the folder for the world
                 * @param archetype The archetype for creation
                 * @return The new or existing world properties, if creation was successful
                 * @throws IOException If there are any io issues creating the properties
                 *       file
                 */
                // @ts-ignore
                createWorldProperties(folderName: string, archetype: org.spongepowered.api.world.WorldArchetype): org.spongepowered.api.world.storage.WorldProperties
                /**
                 * Creates a world copy asynchronously using the new name given and returns
                 * the new world properties if the copy was possible.
                 * <p>If the world is already loaded then the following will occur:</p>
                 * <ul>
                 * <li>World is saved.</li>
                 * <li>World saving is disabled.</li>
                 * <li>World is copied. </li>
                 * <li>World saving is enabled.</li>
                 * </ul>
                 * @param worldProperties The world properties to copy
                 * @param copyName The name for copied world
                 * @return An {#link Optional} containing the properties of the new world
                 *          instance, if the copy was successful
                 */
                // @ts-ignore
                copyWorld(worldProperties: org.spongepowered.api.world.storage.WorldProperties, copyName: string): java.util.concurrent.CompletableFuture<java.util.Optional<org.spongepowered.api.world.storage.WorldProperties>>
                /**
                 * Renames an unloaded world.
                 * @param worldProperties The world properties to rename
                 * @param newName The name that should be used as a replacement for the
                 *         current world name
                 * @return An {#link Optional} containing the new {@link WorldProperties}
                 *          if the rename was successful
                 */
                // @ts-ignore
                renameWorld(worldProperties: org.spongepowered.api.world.storage.WorldProperties, newName: string): java.util.Optional<org.spongepowered.api.world.storage.WorldProperties>
                /**
                 * Deletes the provided world's files asynchronously from the disk.
                 * @param worldProperties The world properties to delete
                 * @return True if the deletion was successful.
                 */
                // @ts-ignore
                deleteWorld(worldProperties: org.spongepowered.api.world.storage.WorldProperties): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                /**
                 * Persists the given {@link WorldProperties} to the world storage for it,
                 * updating any modified values.
                 * @param properties The world properties to save
                 * @return True if the save was successful
                 */
                // @ts-ignore
                saveWorldProperties(properties: org.spongepowered.api.world.storage.WorldProperties): boolean
                /**
                 * Gets the 'server' scoreboard. In Vanilla, this is the scoreboard of
                 * dimension 0 (the overworld).
                 * <p>The sever scoreboard is used with the Vanilla /scoreboard command,
                 * automatic score updating through criteria, and other things.</p>
                 * <p>The server scoreboard may not be available if dimension 0
                 * is not yet loaded. In Vanilla, this will only occur when the
                 * server is first starting, as dimension 0 is normally always loaded.</p>
                 * @return the server scoreboard, if available.
                 */
                // @ts-ignore
                getServerScoreboard(): java.util.Optional<org.spongepowered.api.scoreboard.Scoreboard>
                /**
                 * Returns information about the chunk layout used by this server
                 * implementation.
                 * @return The chunk layout used by the implementation
                 */
                // @ts-ignore
                getChunkLayout(): org.spongepowered.api.world.storage.ChunkLayout
                /**
                 * Gets the time, in ticks, since this server began running for the current
                 * session.
                 * <p>This value is not persisted across server restarts, it is set to zero
                 * each time the server starts.</p>
                 * @return The number of ticks since this server started running
                 */
                // @ts-ignore
                getRunningTimeTicks(): int
                /**
                 * Gets the message channel that server-wide messages are sent through.
                 * @return The server-wide broadcast channel
                 */
                // @ts-ignore
                getBroadcastChannel(): org.spongepowered.api.text.channel.MessageChannel
                /**
                 * Sets the channel that server-wide messages should be sent through.
                 * @param channel The broadcast channel
                 */
                // @ts-ignore
                setBroadcastChannel(channel: org.spongepowered.api.text.channel.MessageChannel): void
                /**
                 * Gets the bound {@link InetSocketAddress} from where this server is
                 * accepting connections.
                 * @return The address or Optional.empty() if not found
                 */
                // @ts-ignore
                getBoundAddress(): java.util.Optional<java.net.InetSocketAddress>
                /**
                 * Tests if the server has a whitelist enabled.
                 * @return True if enabled, false if not
                 */
                // @ts-ignore
                hasWhitelist(): boolean
                /**
                 * Sets whether the server is utilizing a whitelist.
                 * @param enabled True to enable the whitelist, false to disable
                 */
                // @ts-ignore
                setHasWhitelist(enabled: boolean): void
                /**
                 * Tests if this server is set to online mode.
                 * <b>Online mode authenticates users against Minecraft's servers, false
                 * performs no validity checks.</b>
                 * @return True if enabled, false if not
                 */
                // @ts-ignore
                getOnlineMode(): boolean
                /**
                 * Gets the default message that is displayed in the server list of the
                 * client.
                 * @return The server's default description (MOTD)
                 */
                // @ts-ignore
                getMotd(): org.spongepowered.api.text.Text
                /**
                 * Shuts down the server, and kicks all players with the default kic
                 * k message.
                 * <p>For the Sponge implementation on the client, this will trigger the
                 * Integrated Server to shutdown a tick later.</p>
                 */
                // @ts-ignore
                shutdown(): void
                /**
                 * Shuts down the server, and kicks all players with the given message.
                 * @param kickMessage The message to kick players with
                 */
                // @ts-ignore
                shutdown(kickMessage: org.spongepowered.api.text.Text): void
                /**
                 * Gets the command source used for commands coming from this server's
                 * console.
                 * @return This server's console command source
                 */
                // @ts-ignore
                getConsole(): org.spongepowered.api.command.source.ConsoleSource
                /**
                 * Gets the ChunkTicketManager used for requesting tickets to force load
                 * chunks.
                 * @return This server's chunk load service
                 */
                // @ts-ignore
                getChunkTicketManager(): org.spongepowered.api.world.ChunkTicketManager
                /**
                 * Gets the {@link GameProfileManager} for resolving game profiles.
                 * @return This server's game profile manager
                 */
                // @ts-ignore
                getGameProfileManager(): org.spongepowered.api.profile.GameProfileManager
                /**
                 * Gets the current ticks per second. A tick represents one cycle of the
                 * game loop.
                 * <p>Note: The server aims to limit itself at 20 ticks per second. Lower
                 * ticks per second may elude to the server taking more time to process
                 * information per tick. Examples of overburdening the server per tick
                 * include spawning 10,000 cows in a small area.</p>
                 * @return The current ticks per second
                 */
                // @ts-ignore
                getTicksPerSecond(): double
                /**
                 * Gets the default resource pack. The default resource pack is sent to
                 * players when they join the server.
                 * @return The default resource pack
                 */
                // @ts-ignore
                getDefaultResourcePack(): java.util.Optional<org.spongepowered.api.resourcepack.ResourcePack>
                /**
                 * Gets the player idle timeout, in minutes.
                 * <p>A return value of {@code 0} disables the player idle timeout.</p>
                 * @return The player idle timeout
                 */
                // @ts-ignore
                getPlayerIdleTimeout(): int
                /**
                 * Sets the player idle timeout, in minutes.
                 * <p>A value of {@code 0} disables the player idle timeout.</p>
                 * @param timeout The player idle timeout
                 */
                // @ts-ignore
                setPlayerIdleTimeout(timeout: number /*int*/): void
                /**
                 * Checks if the current thread matches the main thread of the server.
                 * @return True if main thread, false if not
                 */
                // @ts-ignore
                isMainThread(): boolean
            }
        }
    }
}
