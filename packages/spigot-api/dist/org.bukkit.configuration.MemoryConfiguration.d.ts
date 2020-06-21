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
                public addDefault(path: java.lang.String | string, value: java.lang.Object | any): void
                // @ts-ignore
                public addDefaults(defaults: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                // @ts-ignore
                public addDefaults(defaults: org.bukkit.configuration.Configuration): void
                // @ts-ignore
                public setDefaults(defaults: org.bukkit.configuration.Configuration): void
                // @ts-ignore
                public getDefaults(): org.bukkit.configuration.Configuration
                // @ts-ignore
                public getParent(): org.bukkit.configuration.ConfigurationSection
                // @ts-ignore
                public options(): org.bukkit.configuration.MemoryConfigurationOptions
            }
        }
    }
}
