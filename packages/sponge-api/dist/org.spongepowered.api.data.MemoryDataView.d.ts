declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * Default implementation of a {@link DataView} being used in memory.
                 * @deprecated To be moved to implementation to avoid implementation bugs
                 *      being existing in the API.
                 */
                // @ts-ignore
                class MemoryDataView extends java.lang.Object implements org.spongepowered.api.data.DataView {
                    // @ts-ignore
                    constructor(safety: org.spongepowered.api.data.DataView.SafetyMode)
                    // @ts-ignore
                    constructor(parent: org.spongepowered.api.data.DataView, path: org.spongepowered.api.data.DataQuery, safety: org.spongepowered.api.data.DataView.SafetyMode)
                    // @ts-ignore
                    readonly map: java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public getContainer(): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    public getCurrentPath(): org.spongepowered.api.data.DataQuery
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getParent(): java.util.Optional<org.spongepowered.api.data.DataView>
                    // @ts-ignore
                    public getKeys(deep: boolean): Array<org.spongepowered.api.data.DataQuery>
                    // @ts-ignore
                    public getValues(deep: boolean): java.util.Map<org.spongepowered.api.data.DataQuery, java.lang.Object | any>
                    // @ts-ignore
                    public contains(path: org.spongepowered.api.data.DataQuery): boolean
                    // @ts-ignore
                    public contains(path: org.spongepowered.api.data.DataQuery, ...paths: org.spongepowered.api.data.DataQuery[]): boolean
                    // @ts-ignore
                    public get(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Object | any>
                    // @ts-ignore
                    public set(path: org.spongepowered.api.data.DataQuery, value: java.lang.Object | any): org.spongepowered.api.data.DataView
                    // @ts-ignore
                    public set<E>(key: org.spongepowered.api.data.key.Key<any>, value: E): org.spongepowered.api.data.DataView
                    // @ts-ignore
                    public remove(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataView
                    // @ts-ignore
                    public createView(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataView
                    // @ts-ignore
                    public createView(path: org.spongepowered.api.data.DataQuery, map: java.util.Map<any, any>): org.spongepowered.api.data.DataView
                    // @ts-ignore
                    public getView(path: org.spongepowered.api.data.DataQuery): java.util.Optional<org.spongepowered.api.data.DataView>
                    // @ts-ignore
                    public getMap(path: org.spongepowered.api.data.DataQuery): java.util.Optional<any>
                    // @ts-ignore
                    public getBoolean(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Boolean>
                    // @ts-ignore
                    public getByte(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Byte | number>
                    // @ts-ignore
                    public getShort(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Short | number>
                    // @ts-ignore
                    public getInt(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Integer | number>
                    // @ts-ignore
                    public getLong(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Long | number>
                    // @ts-ignore
                    public getFloat(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Float | number>
                    // @ts-ignore
                    public getDouble(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Double | number>
                    // @ts-ignore
                    public getString(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.String | string>
                    // @ts-ignore
                    public getList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<any> | Array<any>>
                    // @ts-ignore
                    public getStringList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                    // @ts-ignore
                    public getCharacterList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Character> | Array<java.lang.Character>>
                    // @ts-ignore
                    public getBooleanList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Boolean> | Array<java.lang.Boolean>>
                    // @ts-ignore
                    public getByteList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Byte | number> | Array<java.lang.Byte | number>>
                    // @ts-ignore
                    public getShortList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Short | number> | Array<java.lang.Short | number>>
                    // @ts-ignore
                    public getIntegerList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>>
                    // @ts-ignore
                    public getLongList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Long | number> | Array<java.lang.Long | number>>
                    // @ts-ignore
                    public getFloatList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Float | number> | Array<java.lang.Float | number>>
                    // @ts-ignore
                    public getDoubleList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Double | number> | Array<java.lang.Double | number>>
                    // @ts-ignore
                    public getMapList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.util.Map<any, any>> | Array<java.util.Map<any, any>>>
                    // @ts-ignore
                    public getViewList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<org.spongepowered.api.data.DataView> | Array<org.spongepowered.api.data.DataView>>
                    // @ts-ignore
                    public getSerializable<T extends org.spongepowered.api.data.DataSerializable>(path: org.spongepowered.api.data.DataQuery, clazz: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    public getSerializableList<T extends org.spongepowered.api.data.DataSerializable>(path: org.spongepowered.api.data.DataQuery, clazz: java.lang.Class<T>): java.util.Optional<java.util.List<T> | Array<T>>
                    // @ts-ignore
                    public getCatalogType<T extends org.spongepowered.api.CatalogType>(path: org.spongepowered.api.data.DataQuery, catalogType: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    public getCatalogTypeList<T extends org.spongepowered.api.CatalogType>(path: org.spongepowered.api.data.DataQuery, catalogType: java.lang.Class<T>): java.util.Optional<java.util.List<T> | Array<T>>
                    // @ts-ignore
                    public getObject<T>(path: org.spongepowered.api.data.DataQuery, objectClass: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    public getObjectList<T>(path: org.spongepowered.api.data.DataQuery, objectClass: java.lang.Class<T>): java.util.Optional<java.util.List<T> | Array<T>>
                    // @ts-ignore
                    public copy(): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    public copy(safety: org.spongepowered.api.data.DataView.SafetyMode): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    public isEmpty(): boolean
                    // @ts-ignore
                    public getSafetyMode(): org.spongepowered.api.data.DataView.SafetyMode
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
