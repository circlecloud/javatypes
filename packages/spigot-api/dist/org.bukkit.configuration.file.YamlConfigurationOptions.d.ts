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
                    configuration(): org.bukkit.configuration.file.YamlConfiguration
                    // @ts-ignore
                    copyDefaults(value: boolean): org.bukkit.configuration.file.YamlConfigurationOptions
                    // @ts-ignore
                    pathSeparator(value: string): org.bukkit.configuration.file.YamlConfigurationOptions
                    // @ts-ignore
                    header(value: string): org.bukkit.configuration.file.YamlConfigurationOptions
                    // @ts-ignore
                    copyHeader(value: boolean): org.bukkit.configuration.file.YamlConfigurationOptions
                    /**
                     * Gets how much spaces should be used to indent each line.
                     * <p>
                     * The minimum value this may be is 2, and the maximum is 9.
                     * @return How much to indent by
                     */
                    // @ts-ignore
                    indent(): int
                    /**
                     * Sets how much spaces should be used to indent each line.
                     * <p>
                     * The minimum value this may be is 2, and the maximum is 9.
                     * @param value New indent
                     * @return This object, for chaining
                     */
                    // @ts-ignore
                    indent(value: number /*int*/): org.bukkit.configuration.file.YamlConfigurationOptions
                }
            }
        }
    }
}
