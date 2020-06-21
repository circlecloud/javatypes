declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace plugin {
                    /**
                     * Class to manage bridging between plugin duties and implementation duties, for
                     * example event handling and plugin management.
                     */
                    // @ts-ignore
                    class PluginManager extends java.lang.Object {
                        // @ts-ignore
                        constructor(proxy: net.md_5.bungee.api.ProxyServer)
                        // @ts-ignore
                        constructor(proxy: net.md_5.bungee.api.ProxyServer, yaml: Yaml, eventBus: EventBus)
                        /**
                         * Register a command so that it may be executed.
                         * @param plugin the plugin owning this command
                         * @param command the command to register
                         */
                        // @ts-ignore
                        public registerCommand(plugin: net.md_5.bungee.api.plugin.Plugin, command: net.md_5.bungee.api.plugin.Command): void
                        /**
                         * Unregister a command so it will no longer be executed.
                         * @param command the command to unregister
                         */
                        // @ts-ignore
                        public unregisterCommand(command: net.md_5.bungee.api.plugin.Command): void
                        /**
                         * Unregister all commands owned by a {@link Plugin}
                         * @param plugin the plugin to register the commands of
                         */
                        // @ts-ignore
                        public unregisterCommands(plugin: net.md_5.bungee.api.plugin.Plugin): void
                        /**
                         * Checks if the command is registered and can possibly be executed by the
                         * sender (without taking permissions into account).
                         * @param commandName the name of the command
                         * @param sender the sender executing the command
                         * @return whether the command will be handled
                         */
                        // @ts-ignore
                        public isExecutableCommand(commandName: java.lang.String | string, sender: net.md_5.bungee.api.CommandSender): boolean
                        // @ts-ignore
                        public dispatchCommand(sender: net.md_5.bungee.api.CommandSender, commandLine: java.lang.String | string): boolean
                        /**
                         * Execute a command if it is registered, else return false.
                         * @param sender the sender executing the command
                         * @param commandLine the complete command line including command name and
                         *  arguments
                         * @param tabResults list to place tab results into. If this list is non
                         *  null then the command will not be executed and tab results will be
                         *  returned instead.
                         * @return whether the command was handled
                         */
                        // @ts-ignore
                        public dispatchCommand(sender: net.md_5.bungee.api.CommandSender, commandLine: java.lang.String | string, tabResults: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): boolean
                        /**
                         * Returns the {@link Plugin} objects corresponding to all loaded plugins.
                         * @return the set of loaded plugins
                         */
                        // @ts-ignore
                        public getPlugins(): Array<net.md_5.bungee.api.plugin.Plugin>
                        /**
                         * Returns a loaded plugin identified by the specified name.
                         * @param name of the plugin to retrieve
                         * @return the retrieved plugin or null if not loaded
                         */
                        // @ts-ignore
                        public getPlugin(name: java.lang.String | string): net.md_5.bungee.api.plugin.Plugin
                        // @ts-ignore
                        public loadPlugins(): void
                        // @ts-ignore
                        public enablePlugins(): void
                        /**
                         * Load all plugins from the specified folder.
                         * @param folder the folder to search for plugins in
                         */
                        // @ts-ignore
                        public detectPlugins(folder: java.io.File): void
                        /**
                         * Dispatch an event to all subscribed listeners and return the event once
                         * it has been handled by these listeners.
                         * @param <T> the type bounds, must be a class which extends event
                         * @param event the event to call
                         * @return the called event
                         */
                        // @ts-ignore
                        public callEvent<T extends net.md_5.bungee.api.plugin.Event>(event: T): T
                        /**
                         * Register a {@link Listener} for receiving called events. Methods in this
                         * Object which wish to receive events must be annotated with the
                         * {@link EventHandler} annotation.
                         * @param plugin the owning plugin
                         * @param listener the listener to register events for
                         */
                        // @ts-ignore
                        public registerListener(plugin: net.md_5.bungee.api.plugin.Plugin, listener: net.md_5.bungee.api.plugin.Listener): void
                        /**
                         * Unregister a {@link Listener} so that the events do not reach it anymore.
                         * @param listener the listener to unregister
                         */
                        // @ts-ignore
                        public unregisterListener(listener: net.md_5.bungee.api.plugin.Listener): void
                        /**
                         * Unregister all of a Plugin's listener.
                         * @param plugin target plugin
                         */
                        // @ts-ignore
                        public unregisterListeners(plugin: net.md_5.bungee.api.plugin.Plugin): void
                        /**
                         * Get an unmodifiable collection of all registered commands.
                         * @return commands
                         */
                        // @ts-ignore
                        public getCommands(): Array<java.util.Map.Entry<java.lang.String | string, net.md_5.bungee.api.plugin.Command>>
                    }
                }
            }
        }
    }
}
