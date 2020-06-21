declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * author: MagicDroidX
             * Nukkit
             */
            // @ts-ignore
            class Config extends java.lang.Object {
                /**
                 * Constructor for Config instance with undefined file object
                 * @param type - Config type
                 */
                // @ts-ignore
                constructor(type: number /*int*/)
                /**
                 * Constructor for Config (YAML) instance with undefined file object
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(file: java.lang.String | string)
                // @ts-ignore
                constructor(file: java.io.File)
                // @ts-ignore
                constructor(file: java.lang.String | string, type: number /*int*/)
                // @ts-ignore
                constructor(file: java.io.File, type: number /*int*/)
                // @ts-ignore
                constructor(file: java.lang.String | string, type: number /*int*/, defaultMap: java.util.LinkedHashMap<java.lang.String | string, java.lang.Object | any>)
                // @ts-ignore
                constructor(file: java.lang.String | string, type: number /*int*/, defaultMap: cn.nukkit.utils.ConfigSection)
                // @ts-ignore
                constructor(file: java.io.File, type: number /*int*/, defaultMap: cn.nukkit.utils.ConfigSection)
                // @ts-ignore
                constructor(file: java.io.File, type: number /*int*/, defaultMap: java.util.LinkedHashMap<java.lang.String | string, java.lang.Object | any>)
                // @ts-ignore
                public static readonly DETECT: number /*int*/
                // @ts-ignore
                public static readonly PROPERTIES: number /*int*/
                // @ts-ignore
                public static readonly CNF: number /*int*/
                // @ts-ignore
                public static readonly JSON: number /*int*/
                // @ts-ignore
                public static readonly YAML: number /*int*/
                // @ts-ignore
                public static readonly ENUM: number /*int*/
                // @ts-ignore
                public static readonly ENUMERATION: number /*int*/
                // @ts-ignore
                public static readonly format: java.util.Map<java.lang.String | string, java.lang.Integer | number>
                // @ts-ignore
                public reload(): void
                // @ts-ignore
                public load(file: java.lang.String | string): boolean
                // @ts-ignore
                public load(file: java.lang.String | string, type: number /*int*/): boolean
                // @ts-ignore
                public load(file: java.lang.String | string, type: number /*int*/, defaultMap: cn.nukkit.utils.ConfigSection): boolean
                // @ts-ignore
                public load(inputStream: java.io.InputStream): boolean
                // @ts-ignore
                public check(): boolean
                // @ts-ignore
                public isCorrect(): boolean
                /**
                 * Save configuration into provided file. Internal file object will be set to new file.
                 * @param file
                 * @param async
                 * @return 
                 */
                // @ts-ignore
                public save(file: java.io.File, async: boolean): boolean
                // @ts-ignore
                public save(file: java.io.File): boolean
                // @ts-ignore
                public save(): boolean
                // @ts-ignore
                public save(async: java.lang.Boolean): boolean
                // @ts-ignore
                public set(key: java.lang.String | string, value: java.lang.Object | any): void
                // @ts-ignore
                public get(key: java.lang.String | string): any
                // @ts-ignore
                public get<T>(key: java.lang.String | string, defaultValue: T): T
                // @ts-ignore
                public getSection(key: java.lang.String | string): cn.nukkit.utils.ConfigSection
                // @ts-ignore
                public isSection(key: java.lang.String | string): boolean
                // @ts-ignore
                public getSections(key: java.lang.String | string): cn.nukkit.utils.ConfigSection
                // @ts-ignore
                public getSections(): cn.nukkit.utils.ConfigSection
                // @ts-ignore
                public getInt(key: java.lang.String | string): number /*int*/
                // @ts-ignore
                public getInt(key: java.lang.String | string, defaultValue: number /*int*/): number /*int*/
                // @ts-ignore
                public isInt(key: java.lang.String | string): boolean
                // @ts-ignore
                public getLong(key: java.lang.String | string): number /*long*/
                // @ts-ignore
                public getLong(key: java.lang.String | string, defaultValue: number /*long*/): number /*long*/
                // @ts-ignore
                public isLong(key: java.lang.String | string): boolean
                // @ts-ignore
                public getDouble(key: java.lang.String | string): number /*double*/
                // @ts-ignore
                public getDouble(key: java.lang.String | string, defaultValue: number /*double*/): number /*double*/
                // @ts-ignore
                public isDouble(key: java.lang.String | string): boolean
                // @ts-ignore
                public getString(key: java.lang.String | string): string
                // @ts-ignore
                public getString(key: java.lang.String | string, defaultValue: java.lang.String | string): string
                // @ts-ignore
                public isString(key: java.lang.String | string): boolean
                // @ts-ignore
                public getBoolean(key: java.lang.String | string): boolean
                // @ts-ignore
                public getBoolean(key: java.lang.String | string, defaultValue: boolean): boolean
                // @ts-ignore
                public isBoolean(key: java.lang.String | string): boolean
                // @ts-ignore
                public getList(key: java.lang.String | string): Array<any>
                // @ts-ignore
                public getList(key: java.lang.String | string, defaultList: java.util.List<any> | Array<any>): Array<any>
                // @ts-ignore
                public isList(key: java.lang.String | string): boolean
                // @ts-ignore
                public getStringList(key: java.lang.String | string): Array<java.lang.String | string>
                // @ts-ignore
                public getIntegerList(key: java.lang.String | string): Array<java.lang.Integer | number>
                // @ts-ignore
                public getBooleanList(key: java.lang.String | string): Array<java.lang.Boolean>
                // @ts-ignore
                public getDoubleList(key: java.lang.String | string): Array<java.lang.Double | number>
                // @ts-ignore
                public getFloatList(key: java.lang.String | string): Array<java.lang.Float | number>
                // @ts-ignore
                public getLongList(key: java.lang.String | string): Array<java.lang.Long | number>
                // @ts-ignore
                public getByteList(key: java.lang.String | string): Array<java.lang.Byte | number>
                // @ts-ignore
                public getCharacterList(key: java.lang.String | string): Array<java.lang.Character>
                // @ts-ignore
                public getShortList(key: java.lang.String | string): Array<java.lang.Short | number>
                // @ts-ignore
                public getMapList(key: java.lang.String | string): Array<java.util.Map<any>>
                // @ts-ignore
                public setAll(map: java.util.LinkedHashMap<java.lang.String | string, java.lang.Object | any>): void
                // @ts-ignore
                public setAll(section: cn.nukkit.utils.ConfigSection): void
                // @ts-ignore
                public exists(key: java.lang.String | string): boolean
                // @ts-ignore
                public exists(key: java.lang.String | string, ignoreCase: boolean): boolean
                // @ts-ignore
                public remove(key: java.lang.String | string): void
                // @ts-ignore
                public getAll(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Get root (main) config section of the Config
                 * @return 
                 */
                // @ts-ignore
                public getRootSection(): cn.nukkit.utils.ConfigSection
                // @ts-ignore
                public setDefault(map: java.util.LinkedHashMap<java.lang.String | string, java.lang.Object | any>): number /*int*/
                // @ts-ignore
                public setDefault(map: cn.nukkit.utils.ConfigSection): number /*int*/
                /**
                 * @deprecated use {#link #get(String)} instead
                 */
                // @ts-ignore
                public getNested(key: java.lang.String | string): any
                /**
                 * @deprecated use {#link #get(String, Object)} instead
                 */
                // @ts-ignore
                public getNested<T>(key: java.lang.String | string, defaultValue: T): T
                /**
                 * @deprecated use {#link #get(String)} instead
                 */
                // @ts-ignore
                public getNestedAs<T>(key: java.lang.String | string, type: java.lang.Class<T>): T
                /**
                 * @deprecated use {#link #remove(String)} instead
                 */
                // @ts-ignore
                public removeNested(key: java.lang.String | string): void
                // @ts-ignore
                public getKeys(): Array<java.lang.String | string>
                // @ts-ignore
                public getKeys(child: boolean): Array<java.lang.String | string>
            }
        }
    }
}
