declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace config {
                // @ts-ignore
                class Configuration extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(defaults: net.md_5.bungee.config.Configuration)
                    // @ts-ignore
                    public get<T>(path: java.lang.String | string, def: T): T
                    // @ts-ignore
                    public contains(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public get(path: java.lang.String | string): any
                    // @ts-ignore
                    public getDefault(path: java.lang.String | string): any
                    // @ts-ignore
                    public set(path: java.lang.String | string, value: java.lang.Object | any): void
                    // @ts-ignore
                    public getSection(path: java.lang.String | string): net.md_5.bungee.config.Configuration
                    /**
                     * Gets keys, not deep by default.
                     * @return top level keys for this section
                     */
                    // @ts-ignore
                    public getKeys(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getByte(path: java.lang.String | string): number /*byte*/
                    // @ts-ignore
                    public getByte(path: java.lang.String | string, def: number /*byte*/): number /*byte*/
                    // @ts-ignore
                    public getByteList(path: java.lang.String | string): Array<java.lang.Byte | number>
                    // @ts-ignore
                    public getShort(path: java.lang.String | string): number /*short*/
                    // @ts-ignore
                    public getShort(path: java.lang.String | string, def: number /*short*/): number /*short*/
                    // @ts-ignore
                    public getShortList(path: java.lang.String | string): Array<java.lang.Short | number>
                    // @ts-ignore
                    public getInt(path: java.lang.String | string): number /*int*/
                    // @ts-ignore
                    public getInt(path: java.lang.String | string, def: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getIntList(path: java.lang.String | string): Array<java.lang.Integer | number>
                    // @ts-ignore
                    public getLong(path: java.lang.String | string): number /*long*/
                    // @ts-ignore
                    public getLong(path: java.lang.String | string, def: number /*long*/): number /*long*/
                    // @ts-ignore
                    public getLongList(path: java.lang.String | string): Array<java.lang.Long | number>
                    // @ts-ignore
                    public getFloat(path: java.lang.String | string): number /*float*/
                    // @ts-ignore
                    public getFloat(path: java.lang.String | string, def: number /*float*/): number /*float*/
                    // @ts-ignore
                    public getFloatList(path: java.lang.String | string): Array<java.lang.Float | number>
                    // @ts-ignore
                    public getDouble(path: java.lang.String | string): number /*double*/
                    // @ts-ignore
                    public getDouble(path: java.lang.String | string, def: number /*double*/): number /*double*/
                    // @ts-ignore
                    public getDoubleList(path: java.lang.String | string): Array<java.lang.Double | number>
                    // @ts-ignore
                    public getBoolean(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public getBoolean(path: java.lang.String | string, def: boolean): boolean
                    // @ts-ignore
                    public getBooleanList(path: java.lang.String | string): Array<java.lang.Boolean>
                    // @ts-ignore
                    public getChar(path: java.lang.String | string): string
                    // @ts-ignore
                    public getChar(path: java.lang.String | string, def: string): string
                    // @ts-ignore
                    public getCharList(path: java.lang.String | string): Array<java.lang.Character>
                    // @ts-ignore
                    public getString(path: java.lang.String | string): string
                    // @ts-ignore
                    public getString(path: java.lang.String | string, def: java.lang.String | string): string
                    // @ts-ignore
                    public getStringList(path: java.lang.String | string): Array<java.lang.String | string>
                    // @ts-ignore
                    public getList(path: java.lang.String | string): Array<any>
                    // @ts-ignore
                    public getList(path: java.lang.String | string, def: java.util.List<any> | Array<any>): Array<any>
                }
            }
        }
    }
}
