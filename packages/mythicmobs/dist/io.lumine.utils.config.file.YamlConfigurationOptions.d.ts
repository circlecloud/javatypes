declare namespace io {
    namespace lumine {
        namespace utils {
            namespace config {
                namespace file {
                    // @ts-ignore
                    class YamlConfigurationOptions extends io.lumine.utils.config.file.FileConfigurationOptions {
                        // @ts-ignore
                        constructor(configuration: io.lumine.utils.config.file.YamlConfiguration)
                        // @ts-ignore
                        public configuration(): io.lumine.utils.config.file.YamlConfiguration
                        // @ts-ignore
                        public copyDefaults(value: boolean): io.lumine.utils.config.file.YamlConfigurationOptions
                        // @ts-ignore
                        public pathSeparator(value: string): io.lumine.utils.config.file.YamlConfigurationOptions
                        // @ts-ignore
                        public header(value: java.lang.String | string): io.lumine.utils.config.file.YamlConfigurationOptions
                        // @ts-ignore
                        public copyHeader(value: boolean): io.lumine.utils.config.file.YamlConfigurationOptions
                        // @ts-ignore
                        public indent(): number /*int*/
                        // @ts-ignore
                        public indent(value: number /*int*/): io.lumine.utils.config.file.YamlConfigurationOptions
                    }
                }
            }
        }
    }
}
