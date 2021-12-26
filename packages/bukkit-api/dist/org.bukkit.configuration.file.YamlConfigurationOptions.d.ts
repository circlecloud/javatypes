declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace file {
                /**
                 * Various settings for controlling the input and output of a {@link
                 * YamlConfiguration}
                 */
                // @ts-ignore
                class YamlConfigurationOptions extends org.bukkit.configuration.file.FileConfigurationOptions {
                    // @ts-ignore
                    constructor(configuration: org.bukkit.configuration.file.YamlConfiguration)
                    // @ts-ignore
                    public configuration(): org.bukkit.configuration.file.YamlConfiguration
                    // @ts-ignore
                    public copyDefaults(value: boolean): org.bukkit.configuration.file.YamlConfigurationOptions
                    // @ts-ignore
                    public pathSeparator(value: string): org.bukkit.configuration.file.YamlConfigurationOptions
                    // @ts-ignore
                    public header(value: java.lang.String | string): org.bukkit.configuration.file.YamlConfigurationOptions
                    // @ts-ignore
                    public copyHeader(value: boolean): org.bukkit.configuration.file.YamlConfigurationOptions
                    /**
                     * Gets how much spaces should be used to indent each line.
                     * <p>
                     * The minimum value this may be is 2, and the maximum is 9.
                     * @return How much to indent by
                     */
                    // @ts-ignore
                    public indent(): number /*int*/
                    /**
                     * Sets how much spaces should be used to indent each line.
                     * <p>
                     * The minimum value this may be is 2, and the maximum is 9.
                     * @param value New indent
                     * @return This object, for chaining
                     */
                    // @ts-ignore
                    public indent(value: number /*int*/): org.bukkit.configuration.file.YamlConfigurationOptions
                }
            }
        }
    }
}
