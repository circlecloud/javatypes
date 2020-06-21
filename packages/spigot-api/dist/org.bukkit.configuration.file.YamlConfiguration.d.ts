declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace file {
                /**
                 * An implementation of {@link Configuration} which saves all files in Yaml.
                 * Note that this implementation is not synchronized.
                 */
                // @ts-ignore
                class YamlConfiguration extends org.bukkit.configuration.file.FileConfiguration {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly COMMENT_PREFIX: java.lang.String | string
                    // @ts-ignore
                    static readonly BLANK_CONFIG: java.lang.String | string
                    // @ts-ignore
                    public saveToString(): string
                    // @ts-ignore
                    public loadFromString(contents: java.lang.String | string): void
                    // @ts-ignore
                    convertMapsToSections(input: java.util.Map<any, any>, section: org.bukkit.configuration.ConfigurationSection): void
                    // @ts-ignore
                    parseHeader(input: java.lang.String | string): string
                    // @ts-ignore
                    buildHeader(): string
                    // @ts-ignore
                    public options(): org.bukkit.configuration.file.YamlConfigurationOptions
                    /**
                     * Creates a new {@link YamlConfiguration}, loading from the given file.
                     * <p>
                     * Any errors loading the Configuration will be logged and then ignored.
                     * If the specified input is not a valid config, a blank config will be
                     * returned.
                     * <p>
                     * The encoding used may follow the system dependent default.
                     * @param file Input file
                     * @return Resulting configuration
                     * @throws IllegalArgumentException Thrown if file is null
                     */
                    // @ts-ignore
                    public static loadConfiguration(file: java.io.File): org.bukkit.configuration.file.YamlConfiguration
                    /**
                     * Creates a new {@link YamlConfiguration}, loading from the given reader.
                     * <p>
                     * Any errors loading the Configuration will be logged and then ignored.
                     * If the specified input is not a valid config, a blank config will be
                     * returned.
                     * @param reader input
                     * @return resulting configuration
                     * @throws IllegalArgumentException Thrown if stream is null
                     */
                    // @ts-ignore
                    public static loadConfiguration(reader: java.io.Reader): org.bukkit.configuration.file.YamlConfiguration
                }
            }
        }
    }
}
