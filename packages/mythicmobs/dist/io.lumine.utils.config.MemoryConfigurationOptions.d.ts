declare namespace io {
    namespace lumine {
        namespace utils {
            namespace config {
                // @ts-ignore
                class MemoryConfigurationOptions extends io.lumine.utils.config.ConfigurationOptions {
                    // @ts-ignore
                    constructor(configuration: io.lumine.utils.config.MemoryConfiguration)
                    // @ts-ignore
                    public configuration(): io.lumine.utils.config.MemoryConfiguration
                    // @ts-ignore
                    public copyDefaults(value: boolean): io.lumine.utils.config.MemoryConfigurationOptions
                    // @ts-ignore
                    public pathSeparator(value: string): io.lumine.utils.config.MemoryConfigurationOptions
                }
            }
        }
    }
}
