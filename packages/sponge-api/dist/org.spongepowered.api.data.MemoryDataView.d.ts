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
                    readonly map: java.util.Map<java.lang.String, java.lang.Object>
                    // @ts-ignore
                    getContainer(): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    getCurrentPath(): org.spongepowered.api.data.DataQuery
                    // @ts-ignore
                    getName(): java.lang.String
                    // @ts-ignore
                    getParent(): java.util.Optional<org.spongepowered.api.data.DataView>
                    // @ts-ignore
                    getKeys(deep: boolean): java.util.Set<org.spongepowered.api.data.DataQuery>
                    // @ts-ignore
                    getValues(deep: boolean): java.util.Map<org.spongepowered.api.data.DataQuery, java.lang.Object>
                    // @ts-ignore
                    contains(path: org.spongepowered.api.data.DataQuery): boolean
                    // @ts-ignore
                    contains(path: org.spongepowered.api.data.DataQuery, ...paths: org.spongepowered.api.data.DataQuery[]): boolean
                    // @ts-ignore
                    get(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Object>
                    // @ts-ignore
                    set(path: org.spongepowered.api.data.DataQuery, value: any): org.spongepowered.api.data.DataView
                    // @ts-ignore
                    set<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>, value: E): org.spongepowered.api.data.DataView
                    // @ts-ignore
                    remove(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataView
                    // @ts-ignore
                    createView(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataView
                    // @ts-ignore
                    createView(path: org.spongepowered.api.data.DataQuery, map: java.util.Map<any, ?>): org.spongepowered.api.data.DataView
                    // @ts-ignore
                    getView(path: org.spongepowered.api.data.DataQuery): java.util.Optional<org.spongepowered.api.data.DataView>
                    // @ts-ignore
                    getMap(path: org.spongepowered.api.data.DataQuery): java.util.Optional<? extends java.util.Map<?, ?>>
                    // @ts-ignore
                    getBoolean(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Boolean>
                    // @ts-ignore
                    getByte(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Byte>
                    // @ts-ignore
                    getShort(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Short>
                    // @ts-ignore
                    getInt(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Integer>
                    // @ts-ignore
                    getLong(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Long>
                    // @ts-ignore
                    getFloat(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Float>
                    // @ts-ignore
                    getDouble(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Double>
                    // @ts-ignore
                    getString(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.String>
                    // @ts-ignore
                    getList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<?>>
                    // @ts-ignore
                    getStringList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.String>>
                    // @ts-ignore
                    getCharacterList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Character>>
                    // @ts-ignore
                    getBooleanList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Boolean>>
                    // @ts-ignore
                    getByteList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Byte>>
                    // @ts-ignore
                    getShortList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Short>>
                    // @ts-ignore
                    getIntegerList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Integer>>
                    // @ts-ignore
                    getLongList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Long>>
                    // @ts-ignore
                    getFloatList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Float>>
                    // @ts-ignore
                    getDoubleList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Double>>
                    // @ts-ignore
                    getMapList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.util.Map<?, ?>>>
                    // @ts-ignore
                    getViewList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<org.spongepowered.api.data.DataView>>
                    // @ts-ignore
                    getSerializable<T extends org.spongepowered.api.data.DataSerializable>(path: org.spongepowered.api.data.DataQuery, clazz: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    getSerializableList<T extends org.spongepowered.api.data.DataSerializable>(path: org.spongepowered.api.data.DataQuery, clazz: java.lang.Class<T>): java.util.Optional<java.util.List<T>>
                    // @ts-ignore
                    getCatalogType<T extends org.spongepowered.api.CatalogType>(path: org.spongepowered.api.data.DataQuery, catalogType: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    getCatalogTypeList<T extends org.spongepowered.api.CatalogType>(path: org.spongepowered.api.data.DataQuery, catalogType: java.lang.Class<T>): java.util.Optional<java.util.List<T>>
                    // @ts-ignore
                    getObject<T>(path: org.spongepowered.api.data.DataQuery, objectClass: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    getObjectList<T>(path: org.spongepowered.api.data.DataQuery, objectClass: java.lang.Class<T>): java.util.Optional<java.util.List<T>>
                    // @ts-ignore
                    copy(): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    copy(safety: org.spongepowered.api.data.DataView.SafetyMode): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    isEmpty(): boolean
                    // @ts-ignore
                    getSafetyMode(): org.spongepowered.api.data.DataView.SafetyMode
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    equals(obj: any): boolean
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
