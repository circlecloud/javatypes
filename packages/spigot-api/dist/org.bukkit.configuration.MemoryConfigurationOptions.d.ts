declare namespace org {
    namespace bukkit {
        namespace configuration {
            /**
             * Various settings for controlling the input and output of a {@link
             * MemoryConfiguration}
             */
            // @ts-ignore
            class MemoryConfigurationOptions extends org.bukkit.configuration.ConfigurationOptions {
                // @ts-ignore
                constructor(configuration: org.bukkit.configuration.MemoryConfiguration)
                // @ts-ignore
                configuration(): org.bukkit.configuration.MemoryConfiguration
                // @ts-ignore
                copyDefaults(value: boolean): org.bukkit.configuration.MemoryConfigurationOptions
                // @ts-ignore
                pathSeparator(value: string): org.bukkit.configuration.MemoryConfigurationOptions
            }
        }
    }
}
