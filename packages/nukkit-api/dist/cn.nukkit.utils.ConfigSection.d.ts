declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * Created by fromgate on 26.04.2016.
             */
            // @ts-ignore
            class ConfigSection extends java.util.LinkedHashMap<java.lang.String | string, java.lang.Object | any> {
                /**
                 * Empty ConfigSection constructor
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructor of ConfigSection that contains initial key/value data
                 * @param key
                 * @param value
                 */
                // @ts-ignore
                constructor(key: java.lang.String | string, value: java.lang.Object | any)
                /**
                 * Constructor of ConfigSection, based on values stored in map.
                 * @param map
                 */
                // @ts-ignore
                constructor(map: java.util.LinkedHashMap<java.lang.String | string, java.lang.Object | any>)
                /**
                 * Get root section as LinkedHashMap
                 * @return 
                 */
                // @ts-ignore
                public getAllMap(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Get new instance of config section
                 * @return 
                 */
                // @ts-ignore
                public getAll(): cn.nukkit.utils.ConfigSection
                /**
                 * Get object by key. If section does not contain value, return null
                 */
                // @ts-ignore
                public get(key: java.lang.String | string): any
                /**
                 * Get object by key. If section does not contain value, return default value
                 * @param key
                 * @param defaultValue
                 * @return 
                 */
                // @ts-ignore
                public get<T>(key: java.lang.String | string, defaultValue: T): T
                /**
                 * Store value into config section
                 * @param key
                 * @param value
                 */
                // @ts-ignore
                public set(key: java.lang.String | string, value: java.lang.Object | any): void
                /**
                 * Check type of section element defined by key. Return true this element is ConfigSection
                 * @param key
                 * @return 
                 */
                // @ts-ignore
                public isSection(key: java.lang.String | string): boolean
                /**
                 * Get config section element defined by key
                 * @param key
                 * @return 
                 */
                // @ts-ignore
                public getSection(key: java.lang.String | string): cn.nukkit.utils.ConfigSection
                /**
                 * Get all ConfigSections in root path.
                 * Example config:
                 * a1:
                 * b1:
                 * c1:
                 * c2:
                 * a2:
                 * b2:
                 * c3:
                 * c4:
                 * a3: true
                 * a4: "hello"
                 * a5: 100
                 * <p>
                 * getSections() will return new ConfigSection, that contains sections a1 and a2 only.
                 * @return 
                 */
                // @ts-ignore
                public getSections(): cn.nukkit.utils.ConfigSection
                /**
                 * Get sections (and only sections) from provided path
                 * @param key - config section path, if null or empty root path will used.
                 * @return 
                 */
                // @ts-ignore
                public getSections(key: java.lang.String | string): cn.nukkit.utils.ConfigSection
                /**
                 * Get int value of config section element
                 * @param key - key (inside) current section (default value equals to 0)
                 * @return 
                 */
                // @ts-ignore
                public getInt(key: java.lang.String | string): number /*int*/
                /**
                 * Get int value of config section element
                 * @param key          - key (inside) current section
                 * @param defaultValue - default value that will returned if section element is not exists
                 * @return 
                 */
                // @ts-ignore
                public getInt(key: java.lang.String | string, defaultValue: number /*int*/): number /*int*/
                /**
                 * Check type of section element defined by key. Return true this element is Integer
                 * @param key
                 * @return 
                 */
                // @ts-ignore
                public isInt(key: java.lang.String | string): boolean
                /**
                 * Get long value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getLong(key: java.lang.String | string): number /*long*/
                /**
                 * Get long value of config section element
                 * @param key          - key (inside) current section
                 * @param defaultValue - default value that will returned if section element is not exists
                 * @return 
                 */
                // @ts-ignore
                public getLong(key: java.lang.String | string, defaultValue: number /*long*/): number /*long*/
                /**
                 * Check type of section element defined by key. Return true this element is Long
                 * @param key
                 * @return 
                 */
                // @ts-ignore
                public isLong(key: java.lang.String | string): boolean
                /**
                 * Get double value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getDouble(key: java.lang.String | string): number /*double*/
                /**
                 * Get double value of config section element
                 * @param key          - key (inside) current section
                 * @param defaultValue - default value that will returned if section element is not exists
                 * @return 
                 */
                // @ts-ignore
                public getDouble(key: java.lang.String | string, defaultValue: number /*double*/): number /*double*/
                /**
                 * Check type of section element defined by key. Return true this element is Double
                 * @param key
                 * @return 
                 */
                // @ts-ignore
                public isDouble(key: java.lang.String | string): boolean
                /**
                 * Get String value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getString(key: java.lang.String | string): string
                /**
                 * Get String value of config section element
                 * @param key          - key (inside) current section
                 * @param defaultValue - default value that will returned if section element is not exists
                 * @return 
                 */
                // @ts-ignore
                public getString(key: java.lang.String | string, defaultValue: java.lang.String | string): string
                /**
                 * Check type of section element defined by key. Return true this element is String
                 * @param key
                 * @return 
                 */
                // @ts-ignore
                public isString(key: java.lang.String | string): boolean
                /**
                 * Get boolean value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getBoolean(key: java.lang.String | string): boolean
                /**
                 * Get boolean value of config section element
                 * @param key          - key (inside) current section
                 * @param defaultValue - default value that will returned if section element is not exists
                 * @return 
                 */
                // @ts-ignore
                public getBoolean(key: java.lang.String | string, defaultValue: boolean): boolean
                /**
                 * Check type of section element defined by key. Return true this element is Integer
                 * @param key
                 * @return 
                 */
                // @ts-ignore
                public isBoolean(key: java.lang.String | string): boolean
                /**
                 * Get List value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getList(key: java.lang.String | string): Array<any>
                /**
                 * Get List value of config section element
                 * @param key         - key (inside) current section
                 * @param defaultList - default value that will returned if section element is not exists
                 * @return 
                 */
                // @ts-ignore
                public getList(key: java.lang.String | string, defaultList: java.util.List<any> | Array<any>): Array<any>
                /**
                 * Check type of section element defined by key. Return true this element is List
                 * @param key
                 * @return 
                 */
                // @ts-ignore
                public isList(key: java.lang.String | string): boolean
                /**
                 * Get String List value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getStringList(key: java.lang.String | string): Array<java.lang.String | string>
                /**
                 * Get Integer List value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getIntegerList(key: java.lang.String | string): Array<java.lang.Integer | number>
                /**
                 * Get Boolean List value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getBooleanList(key: java.lang.String | string): Array<java.lang.Boolean>
                /**
                 * Get Double List value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getDoubleList(key: java.lang.String | string): Array<java.lang.Double | number>
                /**
                 * Get Float List value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getFloatList(key: java.lang.String | string): Array<java.lang.Float | number>
                /**
                 * Get Long List value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getLongList(key: java.lang.String | string): Array<java.lang.Long | number>
                /**
                 * Get Byte List value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getByteList(key: java.lang.String | string): Array<java.lang.Byte | number>
                /**
                 * Get Character List value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getCharacterList(key: java.lang.String | string): Array<java.lang.Character>
                /**
                 * Get Short List value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getShortList(key: java.lang.String | string): Array<java.lang.Short | number>
                /**
                 * Get Map List value of config section element
                 * @param key - key (inside) current section
                 * @return 
                 */
                // @ts-ignore
                public getMapList(key: java.lang.String | string): Array<java.util.Map<any>>
                /**
                 * Check existence of config section element
                 * @param key
                 * @param ignoreCase
                 * @return 
                 */
                // @ts-ignore
                public exists(key: java.lang.String | string, ignoreCase: boolean): boolean
                /**
                 * Check existence of config section element
                 * @param key
                 * @return 
                 */
                // @ts-ignore
                public exists(key: java.lang.String | string): boolean
                /**
                 * Remove config section element
                 * @param key
                 */
                // @ts-ignore
                public remove(key: java.lang.String | string): void
                /**
                 * Get all keys
                 * @param child - true = include child keys
                 * @return 
                 */
                // @ts-ignore
                public getKeys(child: boolean): Array<java.lang.String | string>
                /**
                 * Get all keys
                 * @return 
                 */
                // @ts-ignore
                public getKeys(): Array<java.lang.String | string>
            }
        }
    }
}
