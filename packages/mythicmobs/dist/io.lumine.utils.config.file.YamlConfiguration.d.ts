declare namespace io {
    namespace lumine {
        namespace utils {
            namespace config {
                namespace file {
                    // @ts-ignore
                    class YamlConfiguration extends io.lumine.utils.config.file.FileConfiguration {
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
                        convertMapsToSections(input: java.util.Map<any, any>, section: io.lumine.utils.config.ConfigurationSection): void
                        // @ts-ignore
                        parseHeader(input: java.lang.String | string): string
                        // @ts-ignore
                        buildHeader(): string
                        // @ts-ignore
                        public options(): io.lumine.utils.config.file.YamlConfigurationOptions
                        // @ts-ignore
                        public static loadConfiguration(file: java.io.File): io.lumine.utils.config.file.YamlConfiguration
                        // @ts-ignore
                        public static loadConfiguration(reader: java.io.Reader): io.lumine.utils.config.file.YamlConfiguration
                    }
                }
            }
        }
    }
}
