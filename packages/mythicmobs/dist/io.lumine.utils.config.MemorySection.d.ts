declare namespace io {
    namespace lumine {
        namespace utils {
            namespace config {
                // @ts-ignore
                class MemorySection extends java.lang.Object implements io.lumine.utils.config.ConfigurationSection {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(parent: io.lumine.utils.config.ConfigurationSection, path: java.lang.String | string)
                    // @ts-ignore
                    readonly map: java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public getKeys(deep: boolean): Array<java.lang.String | string>
                    // @ts-ignore
                    public getValues(deep: boolean): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public contains(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public contains(path: java.lang.String | string, ignoreDefault: boolean): boolean
                    // @ts-ignore
                    public isSet(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public getCurrentPath(): string
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getRoot(): io.lumine.utils.config.Configuration
                    // @ts-ignore
                    public getParent(): io.lumine.utils.config.ConfigurationSection
                    // @ts-ignore
                    public addDefault(path: java.lang.String | string, value: java.lang.Object | any): void
                    // @ts-ignore
                    public getDefaultSection(): io.lumine.utils.config.ConfigurationSection
                    // @ts-ignore
                    public set(path: java.lang.String | string, value: java.lang.Object | any): void
                    // @ts-ignore
                    public get(path: java.lang.String | string): any
                    // @ts-ignore
                    public get(path: java.lang.String | string, def: java.lang.Object | any): any
                    // @ts-ignore
                    public createSection(path: java.lang.String | string): io.lumine.utils.config.ConfigurationSection
                    // @ts-ignore
                    public createSection(path: java.lang.String | string, map: java.util.Map<any, any>): io.lumine.utils.config.ConfigurationSection
                    // @ts-ignore
                    public getString(path: java.lang.String | string): string
                    // @ts-ignore
                    public getString(path: java.lang.String | string, def: java.lang.String | string): string
                    // @ts-ignore
                    public isString(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public getInt(path: java.lang.String | string): number /*int*/
                    // @ts-ignore
                    public getInt(path: java.lang.String | string, def: number /*int*/): number /*int*/
                    // @ts-ignore
                    public isInt(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public getBoolean(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public getBoolean(path: java.lang.String | string, def: boolean): boolean
                    // @ts-ignore
                    public isBoolean(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public getDouble(path: java.lang.String | string): number /*double*/
                    // @ts-ignore
                    public getDouble(path: java.lang.String | string, def: number /*double*/): number /*double*/
                    // @ts-ignore
                    public isDouble(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public getLong(path: java.lang.String | string): number /*long*/
                    // @ts-ignore
                    public getLong(path: java.lang.String | string, def: number /*long*/): number /*long*/
                    // @ts-ignore
                    public isLong(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public getList(path: java.lang.String | string): Array<any>
                    // @ts-ignore
                    public getList(path: java.lang.String | string, def: java.util.List<any> | Array<any>): Array<any>
                    // @ts-ignore
                    public isList(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public getStringList(path: java.lang.String | string): Array<java.lang.String | string>
                    // @ts-ignore
                    public getIntegerList(path: java.lang.String | string): Array<java.lang.Integer | number>
                    // @ts-ignore
                    public getBooleanList(path: java.lang.String | string): Array<java.lang.Boolean>
                    // @ts-ignore
                    public getDoubleList(path: java.lang.String | string): Array<java.lang.Double | number>
                    // @ts-ignore
                    public getFloatList(path: java.lang.String | string): Array<java.lang.Float | number>
                    // @ts-ignore
                    public getLongList(path: java.lang.String | string): Array<java.lang.Long | number>
                    // @ts-ignore
                    public getByteList(path: java.lang.String | string): Array<java.lang.Byte | number>
                    // @ts-ignore
                    public getCharacterList(path: java.lang.String | string): Array<java.lang.Character>
                    // @ts-ignore
                    public getShortList(path: java.lang.String | string): Array<java.lang.Short | number>
                    // @ts-ignore
                    public getMapList(path: java.lang.String | string): Array<java.util.Map<any, any>>
                    // @ts-ignore
                    public getSerializable<T extends ConfigurationSerializable>(path: java.lang.String | string, clazz: java.lang.Class<T>): T
                    // @ts-ignore
                    public getSerializable<T extends ConfigurationSerializable>(path: java.lang.String | string, clazz: java.lang.Class<T>, def: T): T
                    // @ts-ignore
                    public getItemStack(path: java.lang.String | string): ItemStack
                    // @ts-ignore
                    public getItemStack(path: java.lang.String | string, def: ItemStack): ItemStack
                    // @ts-ignore
                    public isItemStack(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public getColor(path: java.lang.String | string): Color
                    // @ts-ignore
                    public getColor(path: java.lang.String | string, def: Color): Color
                    // @ts-ignore
                    public isColor(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public getConfigurationSection(path: java.lang.String | string): io.lumine.utils.config.ConfigurationSection
                    // @ts-ignore
                    public isConfigurationSection(path: java.lang.String | string): boolean
                    // @ts-ignore
                    isPrimitiveWrapper(input: java.lang.Object | any): boolean
                    // @ts-ignore
                    getDefault(path: java.lang.String | string): any
                    // @ts-ignore
                    mapChildrenKeys(output: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>, section: io.lumine.utils.config.ConfigurationSection, deep: boolean): void
                    // @ts-ignore
                    mapChildrenValues(output: java.util.Map<java.lang.String | string, java.lang.Object | any>, section: io.lumine.utils.config.ConfigurationSection, deep: boolean): void
                    // @ts-ignore
                    public static createPath(section: io.lumine.utils.config.ConfigurationSection, key: java.lang.String | string): string
                    // @ts-ignore
                    public static createPath(section: io.lumine.utils.config.ConfigurationSection, key: java.lang.String | string, relativeTo: io.lumine.utils.config.ConfigurationSection): string
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
