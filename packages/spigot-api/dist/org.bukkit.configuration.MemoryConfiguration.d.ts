declare namespace org {
    namespace bukkit {
        namespace configuration {
            /**
             * This is a {@link Configuration} implementation that does not save or load
             * from any source, and stores all values in memory only.
             * This is useful for temporary Configurations for providing defaults.
             */
            // @ts-ignore
            class MemoryConfiguration extends org.bukkit.configuration.MemorySection implements org.bukkit.configuration.Configuration {
                /**
                 * Creates an empty {@link MemoryConfiguration} with no default values.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates an empty {@link MemoryConfiguration} using the specified {@link
                 * Configuration} as a source for all default values.
                 * @param defaults Default value provider
                 * @throws IllegalArgumentException Thrown if defaults is null
                 */
                // @ts-ignore
                constructor(defaults: org.bukkit.configuration.Configuration)
                // @ts-ignore
                defaults: org.bukkit.configuration.Configuration
                // @ts-ignore
                addDefault(path: string, value: any): void
                // @ts-ignore
                addDefaults(defaults: java.util.Map<java.lang.String, java.lang.Object>): void
                // @ts-ignore
                addDefaults(defaults: org.bukkit.configuration.Configuration): void
                // @ts-ignore
                setDefaults(defaults: org.bukkit.configuration.Configuration): void
                // @ts-ignore
                getDefaults(): org.bukkit.configuration.Configuration
                // @ts-ignore
                getParent(): org.bukkit.configuration.ConfigurationSection
                // @ts-ignore
                options(): org.bukkit.configuration.MemoryConfigurationOptions
            }
        }
    }
}
