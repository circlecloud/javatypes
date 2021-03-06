declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                abstract class ProxyServer extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Sets the proxy instance. This method may only be called once per an
                     * application.
                     * @param instance the new instance to set
                     */
                    // @ts-ignore
                    public static setInstance(instance: net.md_5.bungee.api.ProxyServer): void
                    /**
                     * Gets the name of the currently running proxy software.
                     * @return the name of this instance
                     */
                    // @ts-ignore
                    public abstract getName(): string
                    /**
                     * Gets the version of the currently running proxy software.
                     * @return the version of this instance
                     */
                    // @ts-ignore
                    public abstract getVersion(): string
                    /**
                     * Gets a localized string from the .properties file.
                     * @param name translation name
                     * @param args translation arguments
                     * @return the localized string
                     */
                    // @ts-ignore
                    public abstract getTranslation(name: java.lang.String | string, ...args: java.lang.Object[] | any[]): string
                    /**
                     * Gets the main logger which can be used as a suitable replacement for
                     * {@link System#out} and {@link System#err}.
                     * @return the {#link Logger} instance
                     */
                    // @ts-ignore
                    public abstract getLogger(): java.util.logging.Logger
                    /**
                     * Return all players currently connected.
                     * @return all connected players
                     */
                    // @ts-ignore
                    public abstract getPlayers(): Array<net.md_5.bungee.api.connection.ProxiedPlayer>
                    /**
                     * Gets a connected player via their unique username.
                     * @param name of the player
                     * @return their player instance
                     */
                    // @ts-ignore
                    public abstract getPlayer(name: java.lang.String | string): net.md_5.bungee.api.connection.ProxiedPlayer
                    /**
                     * Gets a connected player via their UUID
                     * @param uuid of the player
                     * @return their player instance
                     */
                    // @ts-ignore
                    public abstract getPlayer(uuid: java.util.UUID): net.md_5.bungee.api.connection.ProxiedPlayer
                    /**
                     * Return all servers registered to this proxy, keyed by name. Unlike the
                     * methods in {@link ConfigurationAdapter#getServers()}, this will not
                     * return a fresh map each time.
                     * @return all registered remote server destinations
                     */
                    // @ts-ignore
                    public abstract getServers(): java.util.Map<java.lang.String | string, net.md_5.bungee.api.config.ServerInfo>
                    /**
                     * Gets the server info of a server.
                     * @param name the name of the configured server
                     * @return the server info belonging to the specified server
                     */
                    // @ts-ignore
                    public abstract getServerInfo(name: java.lang.String | string): net.md_5.bungee.api.config.ServerInfo
                    /**
                     * Get the {@link PluginManager} associated with loading plugins and
                     * dispatching events. It is recommended that implementations use the
                     * provided PluginManager class.
                     * @return the plugin manager
                     */
                    // @ts-ignore
                    public abstract getPluginManager(): net.md_5.bungee.api.plugin.PluginManager
                    /**
                     * Returns the currently in use configuration adapter.
                     * @return the used configuration adapter
                     */
                    // @ts-ignore
                    public abstract getConfigurationAdapter(): net.md_5.bungee.api.config.ConfigurationAdapter
                    /**
                     * Set the configuration adapter to be used. Must be called from
                     * {@link Plugin#onLoad()}.
                     * @param adapter the adapter to use
                     */
                    // @ts-ignore
                    public abstract setConfigurationAdapter(adapter: net.md_5.bungee.api.config.ConfigurationAdapter): void
                    /**
                     * Get the currently in use reconnect handler.
                     * @return the in use reconnect handler
                     */
                    // @ts-ignore
                    public abstract getReconnectHandler(): net.md_5.bungee.api.ReconnectHandler
                    /**
                     * Sets the reconnect handler to be used for subsequent connections.
                     * @param handler the new handler
                     */
                    // @ts-ignore
                    public abstract setReconnectHandler(handler: net.md_5.bungee.api.ReconnectHandler): void
                    /**
                     * Gracefully mark this instance for shutdown.
                     */
                    // @ts-ignore
                    public abstract stop(): void
                    /**
                     * Gracefully mark this instance for shutdown.
                     * @param reason the reason for stopping. This will be shown to players.
                     */
                    // @ts-ignore
                    public abstract stop(reason: java.lang.String | string): void
                    /**
                     * Register a channel for use with plugin messages. This is required by some
                     * server / client implementations.
                     * @param channel the channel to register
                     */
                    // @ts-ignore
                    public abstract registerChannel(channel: java.lang.String | string): void
                    /**
                     * Unregister a previously registered channel.
                     * @param channel the channel to unregister
                     */
                    // @ts-ignore
                    public abstract unregisterChannel(channel: java.lang.String | string): void
                    /**
                     * Get an immutable set of all registered plugin channels.
                     * @return registered plugin channels
                     */
                    // @ts-ignore
                    public abstract getChannels(): Array<java.lang.String | string>
                    /**
                     * Get the Minecraft version supported by this proxy.
                     * @return the supported Minecraft version
                     */
                    // @ts-ignore
                    public abstract getGameVersion(): string
                    /**
                     * Get the Minecraft protocol version supported by this proxy.
                     * @return the Minecraft protocol version
                     */
                    // @ts-ignore
                    public abstract getProtocolVersion(): number /*int*/
                    /**
                     * Factory method to construct an implementation specific server info
                     * instance.
                     * @param name name of the server
                     * @param address connectable Minecraft address + port of the server
                     * @param motd the motd when used as a forced server
                     * @param restricted whether the server info restricted property will be set
                     * @return the constructed instance
                     */
                    // @ts-ignore
                    public abstract constructServerInfo(name: java.lang.String | string, address: java.net.InetSocketAddress, motd: java.lang.String | string, restricted: boolean): net.md_5.bungee.api.config.ServerInfo
                    /**
                     * Returns the console overlord for this proxy. Being the console, this
                     * command server cannot have permissions or groups, and will be able to
                     * execute anything.
                     * @return the console command sender of this proxy
                     */
                    // @ts-ignore
                    public abstract getConsole(): net.md_5.bungee.api.CommandSender
                    /**
                     * Return the folder used to load plugins from.
                     * @return the folder used to load plugin
                     */
                    // @ts-ignore
                    public abstract getPluginsFolder(): java.io.File
                    /**
                     * Get the scheduler instance for this proxy.
                     * @return the in use scheduler
                     */
                    // @ts-ignore
                    public abstract getScheduler(): net.md_5.bungee.api.scheduler.TaskScheduler
                    /**
                     * Get the current number of connected users. The default implementation is
                     * more efficient than {@link #getPlayers()} as it does not take a lock or
                     * make a copy.
                     * @return the current number of connected players
                     */
                    // @ts-ignore
                    public abstract getOnlineCount(): number /*int*/
                    /**
                     * Send the specified message to the console and all connected players.
                     * @param message the message to broadcast
                     */
                    // @ts-ignore
                    public abstract broadcast(message: java.lang.String | string): void
                    /**
                     * Send the specified message to the console and all connected players.
                     * @param message the message to broadcast
                     */
                    // @ts-ignore
                    public abstract broadcast(...message: BaseComponent[]): void
                    /**
                     * Send the specified message to the console and all connected players.
                     * @param message the message to broadcast
                     */
                    // @ts-ignore
                    public abstract broadcast(message: BaseComponent): void
                    /**
                     * Gets the commands which are disabled and will not be run on this proxy.
                     * @return the set of disabled commands
                     */
                    // @ts-ignore
                    public abstract getDisabledCommands(): Array<java.lang.String | string>
                    /**
                     * Gets BungeeCord's core config.
                     * @return the config.
                     */
                    // @ts-ignore
                    public abstract getConfig(): net.md_5.bungee.api.ProxyConfig
                    /**
                     * Attempts to match any players with the given name, and returns a list of
                     * all possible matches.
                     * The exact algorithm to use to match players is implementation specific,
                     * but in general you can expect this method to return player's whose names
                     * begin with the specified prefix.
                     * @param match the (partial) name to match
                     * @return list of all possible players, singleton if there is an exact
                     *  match
                     */
                    // @ts-ignore
                    public abstract matchPlayer(match: java.lang.String | string): Array<net.md_5.bungee.api.connection.ProxiedPlayer>
                    /**
                     * Creates a new empty title configuration. In most cases you will want to
                     * {@link Title#reset()} the current title first so your title won't be
                     * affected by a previous one.
                     * @return A new empty title configuration.
                     * @see Title
                     */
                    // @ts-ignore
                    public abstract createTitle(): net.md_5.bungee.api.Title
                    // @ts-ignore
                    public static getInstance(): net.md_5.bungee.api.ProxyServer
                }
            }
        }
    }
}
