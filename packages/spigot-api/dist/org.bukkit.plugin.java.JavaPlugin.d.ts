declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace java {
                /**
                 * Represents a Java plugin
                 */
                // @ts-ignore
                class JavaPlugin extends org.bukkit.plugin.PluginBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(loader: org.bukkit.plugin.java.JavaPluginLoader, description: org.bukkit.plugin.PluginDescriptionFile, dataFolder: java.io.File, file: java.io.File)
                    /**
                     * Returns the folder that the plugin data's files are located in. The
                     * folder may not yet exist.
                     * @return The folder.
                     */
                    // @ts-ignore
                    getDataFolder(): java.io.File
                    /**
                     * Gets the associated PluginLoader responsible for this plugin
                     * @return PluginLoader that controls this plugin
                     */
                    // @ts-ignore
                    getPluginLoader(): org.bukkit.plugin.PluginLoader
                    /**
                     * Returns the Server instance currently running this plugin
                     * @return Server running this plugin
                     */
                    // @ts-ignore
                    getServer(): org.bukkit.Server
                    /**
                     * Returns a value indicating whether or not this plugin is currently
                     * enabled
                     * @return true if this plugin is enabled, otherwise false
                     */
                    // @ts-ignore
                    isEnabled(): boolean
                    /**
                     * Returns the file which contains this plugin
                     * @return File containing this plugin
                     */
                    // @ts-ignore
                    getFile(): java.io.File
                    /**
                     * Returns the plugin.yaml file containing the details for this plugin
                     * @return Contents of the plugin.yaml file
                     */
                    // @ts-ignore
                    getDescription(): org.bukkit.plugin.PluginDescriptionFile
                    // @ts-ignore
                    getConfig(): org.bukkit.configuration.file.FileConfiguration
                    /**
                     * Provides a reader for a text file located inside the jar.
                     * <p>
                     * The returned reader will read text with the UTF-8 charset.
                     * @param file the filename of the resource to load
                     * @return null if {#link #getResource(String)} returns null
                     * @throws IllegalArgumentException if file is null
                     * @see ClassLoader#getResourceAsStream(String)
                     */
                    // @ts-ignore
                    getTextResource(file: string): java.io.Reader
                    // @ts-ignore
                    reloadConfig(): void
                    // @ts-ignore
                    saveConfig(): void
                    // @ts-ignore
                    saveDefaultConfig(): void
                    // @ts-ignore
                    saveResource(resourcePath: string, replace: boolean): void
                    // @ts-ignore
                    getResource(filename: string): java.io.InputStream
                    /**
                     * Returns the ClassLoader which holds this plugin
                     * @return ClassLoader holding this plugin
                     */
                    // @ts-ignore
                    getClassLoader(): java.lang.ClassLoader
                    /**
                     * Sets the enabled state of this plugin
                     * @param enabled true if enabled, otherwise false
                     */
                    // @ts-ignore
                    setEnabled(enabled: boolean): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    onCommand(sender: org.bukkit.command.CommandSender, command: org.bukkit.command.Command, label: string, args: string[]): boolean
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    onTabComplete(sender: org.bukkit.command.CommandSender, command: org.bukkit.command.Command, alias: string, args: string[]): java.util.List<java.lang.String>
                    /**
                     * Gets the command with the given name, specific to this plugin. Commands
                     * need to be registered in the {@link PluginDescriptionFile#getCommands()
                     * PluginDescriptionFile} to exist at runtime.
                     * @param name name or alias of the command
                     * @return the plugin command if found, otherwise null
                     */
                    // @ts-ignore
                    getCommand(name: string): org.bukkit.command.PluginCommand
                    // @ts-ignore
                    onLoad(): void
                    // @ts-ignore
                    onDisable(): void
                    // @ts-ignore
                    onEnable(): void
                    // @ts-ignore
                    getDefaultWorldGenerator(worldName: string, id: string): org.bukkit.generator.ChunkGenerator
                    // @ts-ignore
                    isNaggable(): boolean
                    // @ts-ignore
                    setNaggable(canNag: boolean): void
                    // @ts-ignore
                    getLogger(): java.util.logging.Logger
                    // @ts-ignore
                    toString(): java.lang.String
                    /**
                     * This method provides fast access to the plugin that has {@link
                     * #getProvidingPlugin(Class) provided} the given plugin class, which is
                     * usually the plugin that implemented it.
                     * <p>
                     * An exception to this would be if plugin's jar that contained the class
                     * does not extend the class, where the intended plugin would have
                     * resided in a different jar / classloader.
                     * @param <T> a class that extends JavaPlugin
                     * @param clazz the class desired
                     * @return the plugin that provides and implements said class
                     * @throws IllegalArgumentException if clazz is null
                     * @throws IllegalArgumentException if clazz does not extend {#link
                     *      JavaPlugin}
                     * @throws IllegalStateException if clazz was not provided by a plugin,
                     *      for example, if called with
                     *      <code>JavaPlugin.getPlugin(JavaPlugin.class)</code>
                     * @throws IllegalStateException if called from the static initializer for
                     *      given JavaPlugin
                     * @throws ClassCastException if plugin that provided the class does not
                     *      extend the class
                     */
                    // @ts-ignore
                    getPlugin<T extends org.bukkit.plugin.java.JavaPlugin>(clazz: java.lang.Class<T>): T
                    /**
                     * This method provides fast access to the plugin that has provided the
                     * given class.
                     * @param clazz a class belonging to a plugin
                     * @return the plugin that provided the class
                     * @throws IllegalArgumentException if the class is not provided by a
                     *      JavaPlugin
                     * @throws IllegalArgumentException if class is null
                     * @throws IllegalStateException if called from the static initializer for
                     *      given JavaPlugin
                     */
                    // @ts-ignore
                    getProvidingPlugin(clazz: java.lang.Class<any>): org.bukkit.plugin.java.JavaPlugin
                }
            }
        }
    }
}
