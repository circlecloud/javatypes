declare namespace io {
    namespace lumine {
        namespace utils {
            namespace config {
                // @ts-ignore
                interface ConfigurationSection {
                    // @ts-ignore
                    getKeys(p0: boolean): Array<java.lang.String | string>
                    // @ts-ignore
                    getValues(p0: boolean): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    contains(p0: java.lang.String | string): boolean
                    // @ts-ignore
                    contains(p0: java.lang.String | string, p1: boolean): boolean
                    // @ts-ignore
                    isSet(p0: java.lang.String | string): boolean
                    // @ts-ignore
                    getCurrentPath(): string
                    // @ts-ignore
                    getName(): string
                    // @ts-ignore
                    getRoot(): io.lumine.utils.config.Configuration
                    // @ts-ignore
                    getParent(): io.lumine.utils.config.ConfigurationSection
                    // @ts-ignore
                    get(p0: java.lang.String | string): any
                    // @ts-ignore
                    get(p0: java.lang.String | string, p1: java.lang.Object | any): any
                    // @ts-ignore
                    set(p0: java.lang.String | string, p1: java.lang.Object | any): void
                    // @ts-ignore
                    createSection(p0: java.lang.String | string): io.lumine.utils.config.ConfigurationSection
                    // @ts-ignore
                    createSection(p0: java.lang.String | string, p1: java.util.Map<any, any>): io.lumine.utils.config.ConfigurationSection
                    // @ts-ignore
                    getString(p0: java.lang.String | string): string
                    // @ts-ignore
                    getString(p0: java.lang.String | string, p1: java.lang.String | string): string
                    // @ts-ignore
                    isString(p0: java.lang.String | string): boolean
                    // @ts-ignore
                    getInt(p0: java.lang.String | string): number /*int*/
                    // @ts-ignore
                    getInt(p0: java.lang.String | string, p1: number /*int*/): number /*int*/
                    // @ts-ignore
                    isInt(p0: java.lang.String | string): boolean
                    // @ts-ignore
                    getBoolean(p0: java.lang.String | string): boolean
                    // @ts-ignore
                    getBoolean(p0: java.lang.String | string, p1: boolean): boolean
                    // @ts-ignore
                    isBoolean(p0: java.lang.String | string): boolean
                    // @ts-ignore
                    getDouble(p0: java.lang.String | string): number /*double*/
                    // @ts-ignore
                    getDouble(p0: java.lang.String | string, p1: number /*double*/): number /*double*/
                    // @ts-ignore
                    isDouble(p0: java.lang.String | string): boolean
                    // @ts-ignore
                    getLong(p0: java.lang.String | string): number /*long*/
                    // @ts-ignore
                    getLong(p0: java.lang.String | string, p1: number /*long*/): number /*long*/
                    // @ts-ignore
                    isLong(p0: java.lang.String | string): boolean
                    // @ts-ignore
                    getList(p0: java.lang.String | string): Array<any>
                    // @ts-ignore
                    getList(p0: java.lang.String | string, p1: java.util.List<any> | Array<any>): Array<any>
                    // @ts-ignore
                    isList(p0: java.lang.String | string): boolean
                    // @ts-ignore
                    getStringList(p0: java.lang.String | string): Array<java.lang.String | string>
                    // @ts-ignore
                    getIntegerList(p0: java.lang.String | string): Array<java.lang.Integer | number>
                    // @ts-ignore
                    getBooleanList(p0: java.lang.String | string): Array<java.lang.Boolean>
                    // @ts-ignore
                    getDoubleList(p0: java.lang.String | string): Array<java.lang.Double | number>
                    // @ts-ignore
                    getFloatList(p0: java.lang.String | string): Array<java.lang.Float | number>
                    // @ts-ignore
                    getLongList(p0: java.lang.String | string): Array<java.lang.Long | number>
                    // @ts-ignore
                    getByteList(p0: java.lang.String | string): Array<java.lang.Byte | number>
                    // @ts-ignore
                    getCharacterList(p0: java.lang.String | string): Array<java.lang.Character>
                    // @ts-ignore
                    getShortList(p0: java.lang.String | string): Array<java.lang.Short | number>
                    // @ts-ignore
                    getMapList(p0: java.lang.String | string): Array<java.util.Map<any, any>>
                    // @ts-ignore
                    getSerializable<T extends ConfigurationSerializable>(p0: java.lang.String | string, p1: java.lang.Class<T>): T
                    // @ts-ignore
                    getSerializable<T extends ConfigurationSerializable>(p0: java.lang.String | string, p1: java.lang.Class<T>, p2: T): T
                    // @ts-ignore
                    getConfigurationSection(p0: java.lang.String | string): io.lumine.utils.config.ConfigurationSection
                    // @ts-ignore
                    isConfigurationSection(p0: java.lang.String | string): boolean
                    // @ts-ignore
                    getDefaultSection(): io.lumine.utils.config.ConfigurationSection
                    // @ts-ignore
                    addDefault(p0: java.lang.String | string, p1: java.lang.Object | any): void
                }
            }
        }
    }
}
