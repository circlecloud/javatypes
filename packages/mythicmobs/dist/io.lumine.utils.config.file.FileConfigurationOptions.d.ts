declare namespace io {
    namespace lumine {
        namespace utils {
            namespace config {
                namespace file {
                    // @ts-ignore
                    class FileConfigurationOptions extends io.lumine.utils.config.MemoryConfigurationOptions {
                        // @ts-ignore
                        constructor(configuration: io.lumine.utils.config.MemoryConfiguration)
                        // @ts-ignore
                        public configuration(): io.lumine.utils.config.file.FileConfiguration
                        // @ts-ignore
                        public copyDefaults(value: boolean): io.lumine.utils.config.file.FileConfigurationOptions
                        // @ts-ignore
                        public pathSeparator(value: string): io.lumine.utils.config.file.FileConfigurationOptions
                        // @ts-ignore
                        public header(): string
                        // @ts-ignore
                        public header(value: java.lang.String | string): io.lumine.utils.config.file.FileConfigurationOptions
                        // @ts-ignore
                        public copyHeader(): boolean
                        // @ts-ignore
                        public copyHeader(value: boolean): io.lumine.utils.config.file.FileConfigurationOptions
                    }
                }
            }
        }
    }
}
