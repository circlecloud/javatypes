declare namespace io {
    namespace lumine {
        namespace utils {
            namespace config {
                // @ts-ignore
                interface Configuration extends io.lumine.utils.config.ConfigurationSection {
                    // @ts-ignore
                    addDefault(p0: java.lang.String | string, p1: java.lang.Object | any): void
                    // @ts-ignore
                    addDefaults(p0: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    // @ts-ignore
                    addDefaults(p0: io.lumine.utils.config.Configuration): void
                    // @ts-ignore
                    setDefaults(p0: io.lumine.utils.config.Configuration): void
                    // @ts-ignore
                    getDefaults(): io.lumine.utils.config.Configuration
                    // @ts-ignore
                    options(): io.lumine.utils.config.ConfigurationOptions
                }
            }
        }
    }
}
