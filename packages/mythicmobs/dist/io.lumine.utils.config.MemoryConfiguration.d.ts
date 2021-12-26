declare namespace io {
    namespace lumine {
        namespace utils {
            namespace config {
                // @ts-ignore
                class MemoryConfiguration extends io.lumine.utils.config.MemorySection implements io.lumine.utils.config.Configuration {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(defaults: io.lumine.utils.config.Configuration)
                    // @ts-ignore
                    defaults: io.lumine.utils.config.Configuration
                    // @ts-ignore
                    public addDefault(path: java.lang.String | string, value: java.lang.Object | any): void
                    // @ts-ignore
                    public addDefaults(defaults: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    // @ts-ignore
                    public addDefaults(defaults: io.lumine.utils.config.Configuration): void
                    // @ts-ignore
                    public setDefaults(defaults: io.lumine.utils.config.Configuration): void
                    // @ts-ignore
                    public getDefaults(): io.lumine.utils.config.Configuration
                    // @ts-ignore
                    public getParent(): io.lumine.utils.config.ConfigurationSection
                    // @ts-ignore
                    public options(): io.lumine.utils.config.MemoryConfigurationOptions
                }
            }
        }
    }
}
