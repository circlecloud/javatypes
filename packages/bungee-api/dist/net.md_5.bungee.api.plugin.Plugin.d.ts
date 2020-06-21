declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace plugin {
                    /**
                     * Represents any Plugin that may be loaded at runtime to enhance existing
                     * functionality.
                     */
                    // @ts-ignore
                    class Plugin extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Called when the plugin has just been loaded. Most of the proxy will not
                         * be initialized, so only use it for registering
                         * {@link ConfigurationAdapter}'s and other predefined behavior.
                         */
                        // @ts-ignore
                        public onLoad(): void
                        /**
                         * Called when this plugin is enabled.
                         */
                        // @ts-ignore
                        public onEnable(): void
                        /**
                         * Called when this plugin is disabled.
                         */
                        // @ts-ignore
                        public onDisable(): void
                        /**
                         * Gets the data folder where this plugin may store arbitrary data. It will
                         * be a child of {@link ProxyServer#getPluginsFolder()}.
                         * @return the data folder of this plugin
                         */
                        // @ts-ignore
                        public getDataFolder(): java.io.File
                        /**
                         * Get a resource from within this plugins jar or container. Care must be
                         * taken to close the returned stream.
                         * @param name the full path name of this resource
                         * @return the stream for getting this resource, or null if it does not
                         *  exist
                         */
                        // @ts-ignore
                        public getResourceAsStream(name: java.lang.String | string): java.io.InputStream
                        // @ts-ignore
                        public getExecutorService(): java.util.concurrent.ExecutorService
                        // @ts-ignore
                        public getDescription(): net.md_5.bungee.api.plugin.PluginDescription
                        // @ts-ignore
                        public getProxy(): net.md_5.bungee.api.ProxyServer
                        // @ts-ignore
                        public getFile(): java.io.File
                        // @ts-ignore
                        public getLogger(): java.util.logging.Logger
                    }
                }
            }
        }
    }
}
