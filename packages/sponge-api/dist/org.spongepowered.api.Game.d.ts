declare namespace org {
    namespace spongepowered {
        namespace api {
            /**
             * The core accessor of the API. The implementation uses this to pass
             * constructed objects.
             */
            // @ts-ignore
            interface Game {
                /**
                 * Gets the current {@link GameState} that this game is currently in.
                 * @return The game state
                 */
                // @ts-ignore
                getState(): org.spongepowered.api.GameState
                /**
                 * Gets the directory where the game's files are located.
                 * @return The game directory
                 */
                // @ts-ignore
                getGameDirectory(): java.nio.file.Path
                /**
                 * Gets the directory where the game will store save files.
                 * <p>This location differs based on the implementation and is therefore
                 * implementation-specific.</p>
                 * <p>To elaborate, this is how it is handled in Minecraft based on side:
                 * </p>
                 * <ul>
                 * <li>Client
                 * <ul>This directory will point to {@link Game#getGameDirectory()}.resolve("saves").resolve(currentSaveName)</ul>
                 * <li>Server
                 * <ul>This directory will be equivalent to {@link Game#getGameDirectory()}.resolve(level-name).</ul>
                 * </ul>
                 * <p>Consult your specific implementation if they support placing this
                 * elsewhere.</p>
                 * @return The saves directory
                 */
                // @ts-ignore
                getSavesDirectory(): java.nio.file.Path
                /**
                 * Returns if the {@link Server} is available for use. The result of this method is entirely
                 * dependent on the implementation.
                 * @return True if the Server is available, false if not
                 */
                // @ts-ignore
                isServerAvailable(): boolean
                /**
                 * Gets the {@link Server}.
                 * @return The server
                 * @throws IllegalStateException If the Server isn't currently available
                 */
                // @ts-ignore
                getServer(): org.spongepowered.api.Server
                /**
                 * Retrieves the GameDictionary (item dictionary) for this {@link Game}.
                 * @return The item dictionary, or empty if unsupported
                 */
                // @ts-ignore
                getGameDictionary(): java.util.Optional<org.spongepowered.api.GameDictionary>
                /**
                 * Returns the current platform, or implementation, this {@link Game} is running on.
                 * @return The current implementation
                 */
                // @ts-ignore
                getPlatform(): org.spongepowered.api.Platform
                /**
                 * Gets the {@link GameRegistry}.
                 * @return The game registry
                 */
                // @ts-ignore
                getRegistry(): org.spongepowered.api.GameRegistry
                /**
                 * Gets the {@link DataManager} instance to register
                 * {@link DataSerializable}s, and get the related {@link DataBuilder}s.
                 * @return The serialization service
                 */
                // @ts-ignore
                getDataManager(): org.spongepowered.api.data.DataManager
                /**
                 * Gets the {@link PropertyRegistry} instance to register
                 * {@link PropertyStore}s.
                 * @return The property registry
                 */
                // @ts-ignore
                getPropertyRegistry(): org.spongepowered.api.data.property.PropertyRegistry
                /**
                 * Gets the {@link PluginManager}.
                 * @return The plugin manager
                 */
                // @ts-ignore
                getPluginManager(): org.spongepowered.api.plugin.PluginManager
                /**
                 * Gets the {@link EventManager}.
                 * @return The event manager
                 */
                // @ts-ignore
                getEventManager(): org.spongepowered.api.event.EventManager
                /**
                 * Gets the {@link AssetManager}.
                 * @return The asset manager
                 */
                // @ts-ignore
                getAssetManager(): org.spongepowered.api.asset.AssetManager
                /**
                 * Gets the {@link ConfigManager} used to load and manage configuration files
                 * for plugins.
                 * @return The configuration manager
                 */
                // @ts-ignore
                getConfigManager(): org.spongepowered.api.config.ConfigManager
                /**
                 * Gets the command dispatcher used for registering and dispatching
                 * registered commands.
                 * @return The command dispatcher
                 */
                // @ts-ignore
                getCommandManager(): org.spongepowered.api.command.CommandManager
                /**
                 * Gets the game's instance of the service manager, which is the gateway
                 * to various services provided by Sponge (command registration and so on).
                 * <p>Services registered by other plugins may be available too.</p>
                 * @return The service manager
                 */
                // @ts-ignore
                getServiceManager(): org.spongepowered.api.service.ServiceManager
                /**
                 * Gets the scheduler used to schedule tasks.
                 * @return The scheduler
                 */
                // @ts-ignore
                getScheduler(): org.spongepowered.api.scheduler.Scheduler
                /**
                 * Gets the {@link ChannelRegistrar} for creating network channels.
                 * @return The channel registrar
                 */
                // @ts-ignore
                getChannelRegistrar(): org.spongepowered.api.network.ChannelRegistrar
                /**
                 * Gets the {@link TeleportHelper}, used to find safe {@link Location}s.
                 * @return The teleport helper
                 */
                // @ts-ignore
                getTeleportHelper(): org.spongepowered.api.world.TeleportHelper
                /**
                 * Gets the {@link CauseStackManager} for handling the current event cause
                 * stack and context information.
                 * @return The cause stack manager
                 */
                // @ts-ignore
                getCauseStackManager(): org.spongepowered.api.event.CauseStackManager
            }
        }
    }
}
