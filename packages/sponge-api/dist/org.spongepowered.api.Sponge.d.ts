declare namespace org {
    namespace spongepowered {
        namespace api {
            /**
             * A static all access class granting static access to various systems
             * for the API.
             */
            // @ts-ignore
            class Sponge extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Gets the {@link Game} instance. There is ever only going
                 * to be a single game instance at any given time, except during
                 * the various extraneous {@link GameState}s that the game instance
                 * is otherwise unavailable.
                 * @return The game instance
                 */
                // @ts-ignore
                getGame(): org.spongepowered.api.Game
                /**
                 * Returns the current platform, or implementation, this {@link Game}
                 * is running on.
                 * @return The current implementation
                 */
                // @ts-ignore
                getPlatform(): org.spongepowered.api.Platform
                /**
                 * Gets the {@link GameRegistry} instance.
                 * @return The game registry instance
                 */
                // @ts-ignore
                getRegistry(): org.spongepowered.api.GameRegistry
                /**
                 * Gets the {@link DataManager} instance.
                 * @return The data manager instance
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
                 * Gets the {@link PluginManager} instance.
                 * @return The plugin manager instance
                 */
                // @ts-ignore
                getPluginManager(): org.spongepowered.api.plugin.PluginManager
                /**
                 * Gets the {@link EventManager} instance.
                 * @return The event manager instance
                 */
                // @ts-ignore
                getEventManager(): org.spongepowered.api.event.EventManager
                /**
                 * Gets the {@link AssetManager} instance.
                 * @return The asset manager instance
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
                 * Gets the {@link CommandManager} instance.
                 * @return The command manager instance
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
                 * Gets whether a {@link Server} instance is available without throwing an
                 * exception from calling {@link #getServer()}.
                 * @see Game#isServerAvailable()
                 * @return True if the server instance is available
                 */
                // @ts-ignore
                isServerAvailable(): boolean
                /**
                 * Gets the {@link Server} instance from the
                 * {@link Game} instance.
                 * <p>Note: During various {@link GameState}s, a {@link Server} instance
                 * may <strong>NOT</strong> be available. During these specific states,
                 * calling {@link Game#getServer()} will throw an exception. To double
                 * check, call {@link #isServerAvailable()}</p>
                 * @see Game#getServer()
                 * @see Game#isServerAvailable()
                 * @return The server instance
                 */
                // @ts-ignore
                getServer(): org.spongepowered.api.Server
                /**
                 * Gets the {@link GameDictionary} instance from the
                 * {@link Game} instance.
                 * @see Game#getGameDictionary()
                 * @return The game dictionary instance, or empty if unsupported
                 */
                // @ts-ignore
                getDictionary(): java.util.Optional<org.spongepowered.api.GameDictionary>
                /**
                 * Gets the {@link CauseStackManager} instance from the
                 * {@link Game} instance.
                 * @see Game#getCauseStackManager()
                 * @return The cause stack manager instance
                 */
                // @ts-ignore
                getCauseStackManager(): org.spongepowered.api.event.CauseStackManager
                /**
                 * Gets the {@link MetricsConfigManager} instance, allowing data/metric gathering
                 * systems to determine whether they have permission to gather server
                 * metrics.
                 * @return The {#link MetricsConfigManager} instance
                 */
                // @ts-ignore
                getMetricsConfigManager(): org.spongepowered.api.util.metric.MetricsConfigManager
            }
        }
    }
}
