declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace file {
                /**
                 * This is a base class for all File based implementations of {@link
                 * Configuration}
                 */
                // @ts-ignore
                abstract class FileConfiguration extends org.bukkit.configuration.MemoryConfiguration {
                    /**
                     * Creates an empty {@link FileConfiguration} with no default values.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates an empty {@link FileConfiguration} using the specified {@link
                     * Configuration} as a source for all default values.
                     * @param defaults Default value provider
                     */
                    // @ts-ignore
                    constructor(defaults: org.bukkit.configuration.Configuration)
                    /**
                     * Saves this {@link FileConfiguration} to the specified location.
                     * <p>
                     * If the file does not exist, it will be created. If already exists, it
                     * will be overwritten. If it cannot be overwritten or created, an
                     * exception will be thrown.
                     * <p>
                     * This method will save using the system default encoding, or possibly
                     * using UTF8.
                     * @param file File to save to.
                     * @throws IOException Thrown when the given file cannot be written to for
                     *      any reason.
                     * @throws IllegalArgumentException Thrown when file is null.
                     */
                    // @ts-ignore
                    public save(file: java.io.File): void
                    /**
                     * Saves this {@link FileConfiguration} to the specified location.
                     * <p>
                     * If the file does not exist, it will be created. If already exists, it
                     * will be overwritten. If it cannot be overwritten or created, an
                     * exception will be thrown.
                     * <p>
                     * This method will save using the system default encoding, or possibly
                     * using UTF8.
                     * @param file File to save to.
                     * @throws IOException Thrown when the given file cannot be written to for
                     *      any reason.
                     * @throws IllegalArgumentException Thrown when file is null.
                     */
                    // @ts-ignore
                    public save(file: java.lang.String | string): void
                    /**
                     * Saves this {@link FileConfiguration} to a string, and returns it.
                     * @return String containing this configuration.
                     */
                    // @ts-ignore
                    public abstract saveToString(): string
                    /**
                     * Loads this {@link FileConfiguration} from the specified location.
                     * <p>
                     * All the values contained within this configuration will be removed,
                     * leaving only settings and defaults, and the new values will be loaded
                     * from the given file.
                     * <p>
                     * If the file cannot be loaded for any reason, an exception will be
                     * thrown.
                     * @param file File to load from.
                     * @throws FileNotFoundException Thrown when the given file cannot be
                     *      opened.
                     * @throws IOException Thrown when the given file cannot be read.
                     * @throws InvalidConfigurationException Thrown when the given file is not
                     *      a valid Configuration.
                     * @throws IllegalArgumentException Thrown when file is null.
                     */
                    // @ts-ignore
                    public load(file: java.io.File): void
                    /**
                     * Loads this {@link FileConfiguration} from the specified reader.
                     * <p>
                     * All the values contained within this configuration will be removed,
                     * leaving only settings and defaults, and the new values will be loaded
                     * from the given stream.
                     * @param reader the reader to load from
                     * @throws IOException thrown when underlying reader throws an IOException
                     * @throws InvalidConfigurationException thrown when the reader does not
                     *       represent a valid Configuration
                     * @throws IllegalArgumentException thrown when reader is null
                     */
                    // @ts-ignore
                    public load(reader: java.io.Reader): void
                    /**
                     * Loads this {@link FileConfiguration} from the specified location.
                     * <p>
                     * All the values contained within this configuration will be removed,
                     * leaving only settings and defaults, and the new values will be loaded
                     * from the given file.
                     * <p>
                     * If the file cannot be loaded for any reason, an exception will be
                     * thrown.
                     * @param file File to load from.
                     * @throws FileNotFoundException Thrown when the given file cannot be
                     *      opened.
                     * @throws IOException Thrown when the given file cannot be read.
                     * @throws InvalidConfigurationException Thrown when the given file is not
                     *      a valid Configuration.
                     * @throws IllegalArgumentException Thrown when file is null.
                     */
                    // @ts-ignore
                    public load(file: java.lang.String | string): void
                    /**
                     * Loads this {@link FileConfiguration} from the specified string, as
                     * opposed to from file.
                     * <p>
                     * All the values contained within this configuration will be removed,
                     * leaving only settings and defaults, and the new values will be loaded
                     * from the given string.
                     * <p>
                     * If the string is invalid in any way, an exception will be thrown.
                     * @param contents Contents of a Configuration to load.
                     * @throws InvalidConfigurationException Thrown if the specified string is
                     *      invalid.
                     * @throws IllegalArgumentException Thrown if contents is null.
                     */
                    // @ts-ignore
                    public abstract loadFromString(contents: java.lang.String | string): void
                    /**
                     * Compiles the header for this {@link FileConfiguration} and returns the
                     * result.
                     * <p>
                     * This will use the header from {@link #options()} -&gt; {@link
                     * FileConfigurationOptions#header()}, respecting the rules of {@link
                     * FileConfigurationOptions#copyHeader()} if set.
                     * @return Compiled header
                     */
                    // @ts-ignore
                    abstract buildHeader(): string
                    // @ts-ignore
                    public options(): org.bukkit.configuration.file.FileConfigurationOptions
                }
            }
        }
    }
}
