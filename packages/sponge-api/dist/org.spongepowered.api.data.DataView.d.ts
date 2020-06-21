declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * Represents an object of data represented by a map.
                 * <p>DataViews always exist within a {@link DataContainer} and can be used
                 * for serialization.</p>
                 */
                // @ts-ignore
                interface DataView {
                    /**
                     * Gets the parent container of this DataView.
                     * <p>Every DataView will always have a {@link DataContainer}.</p>
                     * <p>For any {@link DataContainer}, this will return itself.</p>
                     * @return The parent container
                     */
                    // @ts-ignore
                    getContainer(): org.spongepowered.api.data.DataContainer
                    /**
                     * Gets the current path of this {@link DataView} from its root
                     * {@link DataContainer}.
                     * <p>For any {@link DataContainer} itself, this will return an
                     * empty string as it is the root of the path.</p>
                     * <p>The full path will always include this {@link DataView}s name
                     * at the end of the path.</p>
                     * @return The path of this view originating from the root
                     */
                    // @ts-ignore
                    getCurrentPath(): org.spongepowered.api.data.DataQuery
                    /**
                     * Gets the name of this individual {@link DataView} in the path.
                     * <p>This will always be the final substring of the full path
                     * from {@link #getCurrentPath()}.</p>
                     * @return The name of this DataView
                     */
                    // @ts-ignore
                    getName(): string
                    /**
                     * Gets the parent {@link DataView} of this view. The parent directly
                     * contains this view according to the {@link #getCurrentPath()}.
                     * <p>For any {@link DataContainer}, this will return an absent parent.</p>
                     * @return The parent data view containing this view
                     */
                    // @ts-ignore
                    getParent(): java.util.Optional<org.spongepowered.api.data.DataView>
                    /**
                     * Gets a collection containing all keys in this {@link DataView}.
                     * <p>If deep is set to true, then this will contain all the keys
                     * within any child {@link DataView}s (and their children, etc).
                     * These will be in a valid path notation for you to use.</p>
                     * <p>If deep is set to false, then this will contain only the keys
                     * of any direct children, and not their own children.</p>
                     * @param deep Whether or not to get all children keys
                     * @return A set of current keys in this container
                     */
                    // @ts-ignore
                    getKeys(deep: boolean): Array<org.spongepowered.api.data.DataQuery>
                    /**
                     * Gets a Map containing all keys and their values for this {@link DataView}.
                     * <p>If deep is set to true, then this will contain all the keys and
                     * values within any child {@link DataView}s (and their children,
                     * etc). These keys will be in a valid path notation for you to use.</p>
                     * <p>If deep is set to false, then this will contain only the keys and
                     * values of any direct children, and not their own children.</p>
                     * @param deep Whether or not to get a deep list of all children or not
                     * @return Map of keys and values of this container
                     */
                    // @ts-ignore
                    getValues(deep: boolean): java.util.Map<org.spongepowered.api.data.DataQuery, java.lang.Object | any>
                    /**
                     * Returns whether this {@link DataView} contains the given path.
                     * @param path The path relative to this data view
                     * @return True if the path exists
                     */
                    // @ts-ignore
                    contains(path: org.spongepowered.api.data.DataQuery): boolean
                    /**
                     * Returns whether this {@link DataView} contains an entry for all
                     * provided {@link DataQuery} objects.
                     * @param path The path relative to this data view
                     * @param paths The additional paths to check
                     * @return True if all paths exist
                     */
                    // @ts-ignore
                    contains(path: org.spongepowered.api.data.DataQuery, ...paths: org.spongepowered.api.data.DataQuery[]): boolean
                    /**
                     * Returns whether this {@link DataView} contains the given {@link Key}'s
                     * defaulted {@link DataQuery}.
                     * @param key The key to get the data path relative to this data view
                     * @return True if the path exists
                     */
                    // @ts-ignore
                    contains(key: org.spongepowered.api.data.key.Key<any>): boolean
                    /**
                     * Returns whether this {@link DataView} contains the given {@link Key}es
                     * defaulted {@link DataQuery}.
                     * @param key The key to get the data path relative to this data view
                     * @param keys The additional keys to check
                     * @return True if the path exists
                     */
                    // @ts-ignore
                    contains(key: org.spongepowered.api.data.key.Key<any>, ...keys: org.spongepowered.api.data.key.Key<any>[]): boolean
                    /**
                     * Gets an object from the desired path. If the path is not defined,
                     * an absent Optional is returned.
                     * @param path The path to the Object
                     * @return The Object, if available
                     */
                    // @ts-ignore
                    get(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Object | any>
                    /**
                     * Sets the given Object value according to the given path relative to
                     * this {@link DataView}'s path.
                     * @param path The path of the object to set
                     * @param value The value of the data
                     * @return This view, for chaining
                     */
                    // @ts-ignore
                    set(path: org.spongepowered.api.data.DataQuery, value: java.lang.Object | any): org.spongepowered.api.data.DataView
                    /**
                     * Sets the given {@link Key}ed value according to the provided
                     * {@link Key}'s {@link Key#getQuery()}.
                     * @param key The key of the value to set
                     * @param value The value of the data
                     * @param <E> The type of value
                     * @return This view, for chaining
                     */
                    // @ts-ignore
                    set<E>(key: org.spongepowered.api.data.key.Key<any>, value: E): org.spongepowered.api.data.DataView
                    /**
                     * Removes the data associated to the given path relative to this
                     * {@link DataView}'s path.
                     * <p>Path can not be empty, to remove this {@link DataView}, call
                     * the associated parent to remove this views name.</p>
                     * @param path The path of data to remove
                     * @return This view, for chaining
                     */
                    // @ts-ignore
                    remove(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataView
                    /**
                     * Creates a new {@link DataView} at the desired path.
                     * <p>If any data existed at the given path, that data will be
                     * overwritten with the newly constructed {@link DataView}.</p>
                     * @param path The path of the new view
                     * @return The newly created view
                     */
                    // @ts-ignore
                    createView(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataView
                    /**
                     * Creates a new {@link DataView} with the given data at the desired
                     * path.
                     * <p>If any data existed at the given path, that data will be overwritten
                     * with the newly constructed {@link DataView}.</p>
                     * @param path The path of the new view
                     * @param map The data to store in the new view
                     * @return The new view
                     */
                    // @ts-ignore
                    createView(path: org.spongepowered.api.data.DataQuery, map: java.util.Map<any, any>): org.spongepowered.api.data.DataView
                    /**
                     * Gets the {@link DataView} by path, if available.
                     * <p>If a {@link DataView} does not exist, or the data residing at
                     * the path is not an instance of a {@link DataView}, an absent is
                     * returned.</p>
                     * @param path The path of the value to get
                     * @return The data view, if available
                     */
                    // @ts-ignore
                    getView(path: org.spongepowered.api.data.DataQuery): java.util.Optional<org.spongepowered.api.data.DataView>
                    /**
                     * Gets the underlying {@link Map} by path, if available.
                     * <p>If a {@link Map} does not exist, or data residing at the path is not
                     * an instance of a {@link Map}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The map, if available
                     */
                    // @ts-ignore
                    getMap(path: org.spongepowered.api.data.DataQuery): java.util.Optional<any>
                    /**
                     * Gets the {@link Boolean} by path, if available.
                     * <p>If a {@link Boolean} does not exist, or the data residing at
                     * the path is not an instance of a {@link Boolean}, an absent is
                     * returned.</p>
                     * @param path The path of the value to get
                     * @return The boolean, if available
                     */
                    // @ts-ignore
                    getBoolean(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Boolean>
                    /**
                     * Gets the {@link Short} by path, if available.
                     * <p>If a {@link Short} does not exist, or the data residing at
                     * the path is not an instance of a {@link Short}, an absent is
                     * returned.</p>
                     * @param path The path of the value to get
                     * @return The boolean, if available
                     */
                    // @ts-ignore
                    getShort(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Short | number>
                    /**
                     * Gets the {@link Byte} by path, if available.
                     * <p>If a {@link Byte} does not exist, or the data residing at
                     * the path is not an instance of a {@link Byte}, an absent is
                     * returned.</p>
                     * @param path The path of the value to get
                     * @return The boolean, if available
                     */
                    // @ts-ignore
                    getByte(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Byte | number>
                    /**
                     * Gets the {@link Integer} by path, if available.
                     * <p>If a {@link Integer} does not exist, or the data residing at
                     * the path is not an instance of a {@link Integer}, an absent is
                     * returned.</p>
                     * @param path The path of the value to get
                     * @return The integer, if available
                     */
                    // @ts-ignore
                    getInt(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Integer | number>
                    /**
                     * Gets the {@link Long} by path, if available.
                     * <p>If a {@link Long} does not exist, or the data residing at
                     * the path is not an instance of a {@link Long}, an absent is
                     * returned.</p>
                     * @param path The path of the value to get
                     * @return The long, if available
                     */
                    // @ts-ignore
                    getLong(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Long | number>
                    /**
                     * Gets the {@link Float} by path, if available.
                     * <p>If a {@link Float} does not exist, or the data residing at
                     * the path is not an instance of a {@link Float}, an absent is
                     * returned.</p>
                     * @param path The path of the value to get
                     * @return The boolean, if available
                     */
                    // @ts-ignore
                    getFloat(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Float | number>
                    /**
                     * Gets the {@link Double} by path, if available.
                     * <p>If a {@link Double} does not exist, or the data residing at
                     * the path is not an instance of a {@link Double}, an absent is
                     * returned.</p>
                     * @param path The path of the value to get
                     * @return The double, if available
                     */
                    // @ts-ignore
                    getDouble(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.Double | number>
                    /**
                     * Gets the {@link String} by path, if available.
                     * <p>If a {@link String} does not exist, or the data residing at
                     * the path is not an instance of a {@link String}, an absent is
                     * returned.</p>
                     * @param path The path of the value to get
                     * @return The string, if available
                     */
                    // @ts-ignore
                    getString(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.lang.String | string>
                    /**
                     * Gets the {@link List} of something by path, if available.
                     * <p>If a {@link List} of something does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of something,
                     * an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list, if available
                     */
                    // @ts-ignore
                    getList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<any> | Array<any>>
                    /**
                     * Gets the {@link List} of {@link String} by path, if available.
                     * <p>If a {@link List} of {@link String} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link String}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list of strings, if available
                     */
                    // @ts-ignore
                    getStringList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                    /**
                     * Gets the {@link List} of {@link Character} by path, if available.
                     * <p>If a {@link List} of {@link Character} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Character}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list of characters, if available
                     */
                    // @ts-ignore
                    getCharacterList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Character> | Array<java.lang.Character>>
                    /**
                     * Gets the {@link List} of {@link Boolean} by path, if available.
                     * <p>If a {@link List} of {@link Boolean} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Boolean}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list of booleans, if available
                     */
                    // @ts-ignore
                    getBooleanList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Boolean> | Array<java.lang.Boolean>>
                    /**
                     * Gets the {@link List} of {@link Byte} by path, if available.
                     * <p>If a {@link List} of {@link Byte} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Byte}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list of bytes, if available
                     */
                    // @ts-ignore
                    getByteList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Byte | number> | Array<java.lang.Byte | number>>
                    /**
                     * Gets the {@link List} of {@link Short} by path, if available.
                     * <p>If a {@link List} of {@link Short} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Short}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list of shorts, if available
                     */
                    // @ts-ignore
                    getShortList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Short | number> | Array<java.lang.Short | number>>
                    /**
                     * Gets the {@link List} of {@link Integer} by path, if available.
                     * <p>If a {@link List} of {@link Integer} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Integer}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list of integers, if available
                     */
                    // @ts-ignore
                    getIntegerList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>>
                    /**
                     * Gets the {@link List} of {@link Long} by path, if available.
                     * <p>If a {@link List} of {@link Long} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Long}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list of longs, if available
                     */
                    // @ts-ignore
                    getLongList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Long | number> | Array<java.lang.Long | number>>
                    /**
                     * Gets the {@link List} of {@link Float} by path, if available.
                     * <p>If a {@link List} of {@link Float} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Float}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list of floats, if available
                     */
                    // @ts-ignore
                    getFloatList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Float | number> | Array<java.lang.Float | number>>
                    /**
                     * Gets the {@link List} of {@link Double} by path, if available.
                     * <p>If a {@link List} of {@link Double} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Double}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list of doubles, if available
                     */
                    // @ts-ignore
                    getDoubleList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.lang.Double | number> | Array<java.lang.Double | number>>
                    /**
                     * Gets the {@link List} of {@link Map} by path, if available.
                     * <p>If a {@link List} of {@link Map} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link Map}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list of maps, if available
                     */
                    // @ts-ignore
                    getMapList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<java.util.Map<any, any>> | Array<java.util.Map<any, any>>>
                    /**
                     * Gets the {@link List} of {@link DataView} by path, if available.
                     * <p>If a {@link List} of {@link DataView} does not exist, or the data
                     * residing at the path is not an instance of a {@link List} of
                     * {@link DataView}, an absent is returned.</p>
                     * @param path The path of the value to get
                     * @return The list of data views, if available
                     */
                    // @ts-ignore
                    getViewList(path: org.spongepowered.api.data.DataQuery): java.util.Optional<java.util.List<org.spongepowered.api.data.DataView> | Array<org.spongepowered.api.data.DataView>>
                    /**
                     * Gets the {@link DataSerializable} object by path, if available.
                     * <p>If a {@link DataSerializable} exists, but is not the proper class
                     * type, or there is no data at the path given, an absent is returned.</p>
                     * <p>It is important that the {@link DataManager} provided is
                     * the same one that has registered many of the
                     * {@link DataBuilder}s to ensure the {@link DataSerializable}
                     * requested can be returned.</p>
                     * @param <T> The type of {#link DataSerializable} object
                     * @param path The path of the value to get
                     * @param clazz The class of the {#link DataSerializable}
                     * @return The deserialized object, if available
                     */
                    // @ts-ignore
                    getSerializable<T extends org.spongepowered.api.data.DataSerializable>(path: org.spongepowered.api.data.DataQuery, clazz: java.lang.Class<T>): java.util.Optional<T>
                    /**
                     * Gets the {@link List} of {@link DataSerializable} by path, if available.
                     * <p>If a {@link List} exists, but the contents of the list are not
                     * considered {@link DataSerializable} or are not of the proper type of
                     * {@link DataSerializable}, an absent is returned.</p>
                     * <p>It is important that the {@link DataManager} provided is
                     * the same one that has registered many of the
                     * {@link DataBuilder}s to ensure the {@link DataSerializable}
                     * requested can be returned.</p>
                     * @param <T> The type of {#link DataSerializable} object
                     * @param path The path of the list value to get
                     * @param clazz The class of the {#link DataSerializable}
                     * @return The deserialized objects in a list, if available
                     */
                    // @ts-ignore
                    getSerializableList<T extends org.spongepowered.api.data.DataSerializable>(path: org.spongepowered.api.data.DataQuery, clazz: java.lang.Class<T>): java.util.Optional<java.util.List<T> | Array<T>>
                    /**
                     * Gets the {@link Object} object by path, if available.
                     * <p>If a {@link Object} exists, but is not the proper class
                     * type, or there is no data at the path given, an absent is returned.</p>
                     * <p>It is important that the {@link DataManager} provided is
                     * the same one that has registered many of the
                     * {@link DataTranslator}s to ensure the {@link DataSerializable}
                     * requested can be returned.</p>
                     * @param <T> The type of {#link Object} object
                     * @param path The path of the value to get
                     * @param objectClass The class of the {#link Object}
                     * @return The deserialized object, if available
                     */
                    // @ts-ignore
                    getObject<T>(path: org.spongepowered.api.data.DataQuery, objectClass: java.lang.Class<T>): java.util.Optional<T>
                    /**
                     * Gets the {@link List} of {@link DataSerializable} by path, if available.
                     * <p>If a {@link List} exists, but the contents of the list are not
                     * considered {@link DataTranslator}"able" or are not of the proper type of
                     * {@link DataTranslator}, an absent is returned.</p>
                     * <p>It is important that the {@link DataManager} provided is
                     * the same one that has registered many of the
                     * {@link DataTranslator}s to ensure the {@link Object}
                     * requested can be returned.</p>
                     * @param <T> The type of {#link Object} object
                     * @param path The path of the value to get
                     * @param objectClass The class of the {#link Object}
                     * @return The deserialized objects in a list, if available
                     */
                    // @ts-ignore
                    getObjectList<T>(path: org.spongepowered.api.data.DataQuery, objectClass: java.lang.Class<T>): java.util.Optional<java.util.List<T> | Array<T>>
                    /**
                     * Gets the {@link CatalogType} object by path, if available.
                     * <p>If a {@link CatalogType} exists, but is not named properly, not
                     * existing in a registry, or simply an invalid value will return
                     * an empty value.</p>
                     * @param path The path of the value to get
                     * @param catalogType The class of the dummy type
                     * @param <T> The type of dummy
                     * @return The dummy type, if available
                     */
                    // @ts-ignore
                    getCatalogType<T extends org.spongepowered.api.CatalogType>(path: org.spongepowered.api.data.DataQuery, catalogType: java.lang.Class<T>): java.util.Optional<T>
                    /**
                     * Gets the {@link List} of {@link CatalogType}s by path, if available.
                     * <p>If a {@link List} exists, but contents of the list are not
                     * considered {@link CatalogType}s or are not of the proper type
                     * of {@link CatalogType}, an absent is returned.</p>
                     * @param path The path of the list value to get
                     * @param catalogType The class of the dummy type
                     * @param <T> The type of dummy type
                     * @return The list of dummy types, if available
                     */
                    // @ts-ignore
                    getCatalogTypeList<T extends org.spongepowered.api.CatalogType>(path: org.spongepowered.api.data.DataQuery, catalogType: java.lang.Class<T>): java.util.Optional<java.util.List<T> | Array<T>>
                    /**
                     * Copies this {@link DataView} and all of it's contents into a new
                     * {@link DataContainer}.
                     * <p>Note that the copy will not have the same path as this
                     * {@link DataView} since it will be constructed with the top level path
                     * being itself.</p>
                     * @return The newly constructed data view
                     */
                    // @ts-ignore
                    copy(): org.spongepowered.api.data.DataContainer
                    /**
                     * Copies this {@link DataView} and all of it's contents into a new
                     * {@link DataContainer} with the given safety mode.
                     * <p>Note that the copy will not have the same path as this
                     * {@link DataView} since it will be constructed with the top level path
                     * being itself.</p>
                     * @param safety The safety mode of the copy
                     * @return The newly constructed data view
                     */
                    // @ts-ignore
                    copy(safety: org.spongepowered.api.data.DataView.SafetyMode): org.spongepowered.api.data.DataContainer
                    /**
                     * Gets if this view contains no data.
                     * @return True if no data
                     */
                    // @ts-ignore
                    isEmpty(): boolean
                    /**
                     * Gets the {@link org.spongepowered.api.data.DataView.SafetyMode} of this data view.
                     * @return The safety mode
                     */
                    // @ts-ignore
                    getSafetyMode(): org.spongepowered.api.data.DataView.SafetyMode
                }
            }
        }
    }
}
