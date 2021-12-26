declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace io {
                    // @ts-ignore
                    class MythicConfig extends java.lang.Object implements io.lumine.xikage.mythicmobs.io.GenericConfig, java.lang.Cloneable {
                        // @ts-ignore
                        constructor(name: java.lang.String | string, fc: io.lumine.utils.config.file.FileConfiguration)
                        // @ts-ignore
                        constructor(name: java.lang.String | string, file: java.io.File, fc: io.lumine.utils.config.file.FileConfiguration)
                        // @ts-ignore
                        constructor(name: java.lang.String | string, file: java.io.File)
                        // @ts-ignore
                        public setKey(key: java.lang.String | string): void
                        // @ts-ignore
                        public getKey(): string
                        // @ts-ignore
                        public getFileConfiguration(): io.lumine.utils.config.file.FileConfiguration
                        // @ts-ignore
                        public isSet(field: java.lang.String | string): boolean
                        // @ts-ignore
                        public set(key: java.lang.String | string, value: java.lang.Object | any): void
                        // @ts-ignore
                        public load(): void
                        // @ts-ignore
                        public save(): void
                        // @ts-ignore
                        public getNestedConfig(field: java.lang.String | string): io.lumine.xikage.mythicmobs.io.MythicConfig
                        // @ts-ignore
                        public getNestedConfigs(key: java.lang.String | string): java.util.Map<java.lang.String | string, io.lumine.xikage.mythicmobs.io.MythicConfig>
                        // @ts-ignore
                        public getString(field: java.lang.String | string): string
                        // @ts-ignore
                        public getString(field: java.lang.String | string, def: java.lang.String | string): string
                        // @ts-ignore
                        public getPlaceholderString(field: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                        // @ts-ignore
                        public getPlaceholderString(field: java.lang.String | string, def: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                        // @ts-ignore
                        public getColorString(field: java.lang.String | string): string
                        // @ts-ignore
                        public getColorString(field: java.lang.String | string, def: java.lang.String | string): string
                        // @ts-ignore
                        public getBoolean(field: java.lang.String | string): boolean
                        // @ts-ignore
                        public getBoolean(field: java.lang.String | string, def: boolean): boolean
                        // @ts-ignore
                        public getInteger(field: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        public getInteger(field: java.lang.String | string, def: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getInt(field: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        public getInt(field: java.lang.String | string, def: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getDouble(field: java.lang.String | string): number /*double*/
                        // @ts-ignore
                        public getDouble(field: java.lang.String | string, def: number /*double*/): number /*double*/
                        // @ts-ignore
                        public getStringList(field: java.lang.String | string): Array<java.lang.String | string>
                        // @ts-ignore
                        public getColorStringList(field: java.lang.String | string): Array<java.lang.String | string>
                        // @ts-ignore
                        public getPlaceholderStringList(field: java.lang.String | string): Array<io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString>
                        // @ts-ignore
                        public getMapList(field: java.lang.String | string): Array<java.util.Map<any, any>>
                        // @ts-ignore
                        public getList(field: java.lang.String | string): Array<any>
                        // @ts-ignore
                        public getByteList(field: java.lang.String | string): Array<java.lang.Byte | number>
                        // @ts-ignore
                        public getItemStack(field: java.lang.String | string, def: java.lang.String | string): ItemStack
                        // @ts-ignore
                        public isConfigurationSection(section: java.lang.String | string): boolean
                        // @ts-ignore
                        public getKeys(section: java.lang.String | string): Array<java.lang.String | string>
                        // @ts-ignore
                        public isList(section: java.lang.String | string): boolean
                        // @ts-ignore
                        public getFile(): java.io.File
                    }
                }
            }
        }
    }
}
