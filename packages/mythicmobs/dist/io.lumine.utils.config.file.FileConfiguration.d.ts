declare namespace io {
    namespace lumine {
        namespace utils {
            namespace config {
                namespace file {
                    // @ts-ignore
                    abstract class FileConfiguration extends io.lumine.utils.config.MemoryConfiguration {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(defaults: io.lumine.utils.config.Configuration)
                        // @ts-ignore
                        public save(file: java.io.File): void
                        // @ts-ignore
                        public save(file: java.lang.String | string): void
                        // @ts-ignore
                        public abstract saveToString(): string
                        // @ts-ignore
                        public load(file: java.io.File): void
                        // @ts-ignore
                        public load(reader: java.io.Reader): void
                        // @ts-ignore
                        public load(file: java.lang.String | string): void
                        // @ts-ignore
                        public abstract loadFromString(p0: java.lang.String | string): void
                        // @ts-ignore
                        abstract buildHeader(): string
                        // @ts-ignore
                        public options(): io.lumine.utils.config.file.FileConfigurationOptions
                    }
                }
            }
        }
    }
}
