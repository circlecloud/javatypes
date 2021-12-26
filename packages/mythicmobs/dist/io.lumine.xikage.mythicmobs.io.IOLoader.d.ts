declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace io {
                    // @ts-ignore
                    class IOLoader<T extends JavaPlugin> extends java.lang.Object {
                        // @ts-ignore
                        constructor(plugin: T, newfile: java.lang.String | string)
                        // @ts-ignore
                        constructor(plugin: T, newfile: java.lang.String | string, folder: java.lang.String | string)
                        // @ts-ignore
                        constructor(plugin: T, newfile: java.io.File, folder: java.lang.String | string)
                        // @ts-ignore
                        public reloadCustomConfig(loadDefaults: boolean): void
                        // @ts-ignore
                        public getFile(): java.io.File
                        // @ts-ignore
                        public getCustomConfig(): io.lumine.utils.config.file.FileConfiguration
                        // @ts-ignore
                        public saveCustomConfig(): void
                    }
                }
            }
        }
    }
}
