declare namespace org {
    namespace bukkit {
        namespace configuration {
            /**
             * A type of {@link ConfigurationSection} that is stored in memory.
             */
            // @ts-ignore
            class MemorySection extends java.lang.Object implements org.bukkit.configuration.ConfigurationSection {
                /**
                 * Creates an empty MemorySection for use as a root {@link Configuration}
                 * section.
                 * <p>
                 * Note that calling this without being yourself a {@link Configuration}
                 * will throw an exception!
                 * @throws IllegalStateException Thrown if this is not a {#link
                 *      Configuration} root.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates an empty MemorySection with the specified parent and path.
                 * @param parent Parent section that contains this own section.
                 * @param path Path that you may access this section from via the root
                 *      {#link Configuration}.
                 * @throws IllegalArgumentException Thrown is parent or path is null, or
                 *      if parent contains no root Configuration.
                 */
                // @ts-ignore
                constructor(parent: org.bukkit.configuration.ConfigurationSection, path: string)
                // @ts-ignore
                readonly map: java.util.Map<java.lang.String, java.lang.Object>
                // @ts-ignore
                getKeys(deep: boolean): java.util.Set<java.lang.String>
                // @ts-ignore
                getValues(deep: boolean): java.util.Map<java.lang.String, java.lang.Object>
                // @ts-ignore
                contains(path: string): boolean
                // @ts-ignore
                contains(path: string, ignoreDefault: boolean): boolean
                // @ts-ignore
                isSet(path: string): boolean
                // @ts-ignore
                getCurrentPath(): java.lang.String
                // @ts-ignore
                getName(): java.lang.String
                // @ts-ignore
                getRoot(): org.bukkit.configuration.Configuration
                // @ts-ignore
                getParent(): org.bukkit.configuration.ConfigurationSection
                // @ts-ignore
                addDefault(path: string, value: any): void
                // @ts-ignore
                getDefaultSection(): org.bukkit.configuration.ConfigurationSection
                // @ts-ignore
                set(path: string, value: any): void
                // @ts-ignore
                get(path: string): java.lang.Object
                // @ts-ignore
                get(path: string, def: any): java.lang.Object
                // @ts-ignore
                createSection(path: string): org.bukkit.configuration.ConfigurationSection
                // @ts-ignore
                createSection(path: string, map: java.util.Map<any, ?>): org.bukkit.configuration.ConfigurationSection
                // @ts-ignore
                getString(path: string): java.lang.String
                // @ts-ignore
                getString(path: string, def: string): java.lang.String
                // @ts-ignore
                isString(path: string): boolean
                // @ts-ignore
                getInt(path: string): int
                // @ts-ignore
                getInt(path: string, def: number /*int*/): int
                // @ts-ignore
                isInt(path: string): boolean
                // @ts-ignore
                getBoolean(path: string): boolean
                // @ts-ignore
                getBoolean(path: string, def: boolean): boolean
                // @ts-ignore
                isBoolean(path: string): boolean
                // @ts-ignore
                getDouble(path: string): double
                // @ts-ignore
                getDouble(path: string, def: number /*double*/): double
                // @ts-ignore
                isDouble(path: string): boolean
                // @ts-ignore
                getLong(path: string): long
                // @ts-ignore
                getLong(path: string, def: number /*long*/): long
                // @ts-ignore
                isLong(path: string): boolean
                // @ts-ignore
                getList(path: string): java.util.List<?>
                // @ts-ignore
                getList(path: string, def: Array<any>): java.util.List<?>
                // @ts-ignore
                isList(path: string): boolean
                // @ts-ignore
                getStringList(path: string): java.util.List<java.lang.String>
                // @ts-ignore
                getIntegerList(path: string): java.util.List<java.lang.Integer>
                // @ts-ignore
                getBooleanList(path: string): java.util.List<java.lang.Boolean>
                // @ts-ignore
                getDoubleList(path: string): java.util.List<java.lang.Double>
                // @ts-ignore
                getFloatList(path: string): java.util.List<java.lang.Float>
                // @ts-ignore
                getLongList(path: string): java.util.List<java.lang.Long>
                // @ts-ignore
                getByteList(path: string): java.util.List<java.lang.Byte>
                // @ts-ignore
                getCharacterList(path: string): java.util.List<java.lang.Character>
                // @ts-ignore
                getShortList(path: string): java.util.List<java.lang.Short>
                // @ts-ignore
                getMapList(path: string): java.util.List<java.util.Map<?, ?>>
                // @ts-ignore
                getObject<T>(path: string, clazz: java.lang.Class<T>): T
                // @ts-ignore
                getObject<T>(path: string, clazz: java.lang.Class<T>, def: T): T
                // @ts-ignore
                getSerializable<T extends org.bukkit.configuration.serialization.ConfigurationSerializable>(path: string, clazz: java.lang.Class<T>): T
                // @ts-ignore
                getSerializable<T extends org.bukkit.configuration.serialization.ConfigurationSerializable>(path: string, clazz: java.lang.Class<T>, def: T extends org.bukkit.configuration.serialization.ConfigurationSerializable): T
                // @ts-ignore
                getVector(path: string): org.bukkit.util.Vector
                // @ts-ignore
                getVector(path: string, def: org.bukkit.util.Vector): org.bukkit.util.Vector
                // @ts-ignore
                isVector(path: string): boolean
                // @ts-ignore
                getOfflinePlayer(path: string): org.bukkit.OfflinePlayer
                // @ts-ignore
                getOfflinePlayer(path: string, def: org.bukkit.OfflinePlayer): org.bukkit.OfflinePlayer
                // @ts-ignore
                isOfflinePlayer(path: string): boolean
                // @ts-ignore
                getItemStack(path: string): org.bukkit.inventory.ItemStack
                // @ts-ignore
                getItemStack(path: string, def: org.bukkit.inventory.ItemStack): org.bukkit.inventory.ItemStack
                // @ts-ignore
                isItemStack(path: string): boolean
                // @ts-ignore
                getColor(path: string): org.bukkit.Color
                // @ts-ignore
                getColor(path: string, def: org.bukkit.Color): org.bukkit.Color
                // @ts-ignore
                isColor(path: string): boolean
                // @ts-ignore
                getLocation(path: string): org.bukkit.Location
                // @ts-ignore
                getLocation(path: string, def: org.bukkit.Location): org.bukkit.Location
                // @ts-ignore
                isLocation(path: string): boolean
                // @ts-ignore
                getConfigurationSection(path: string): org.bukkit.configuration.ConfigurationSection
                // @ts-ignore
                isConfigurationSection(path: string): boolean
                // @ts-ignore
                isPrimitiveWrapper(input: any): boolean
                // @ts-ignore
                getDefault(path: string): java.lang.Object
                // @ts-ignore
                mapChildrenKeys(output: Array<java.lang.String>, section: org.bukkit.configuration.ConfigurationSection, deep: boolean): void
                // @ts-ignore
                mapChildrenValues(output: java.util.Map<java.lang.String, java.lang.Object>, section: org.bukkit.configuration.ConfigurationSection, deep: boolean): void
                /**
                 * Creates a full path to the given {@link ConfigurationSection} from its
                 * root {@link Configuration}.
                 * <p>
                 * You may use this method for any given {@link ConfigurationSection}, not
                 * only {@link MemorySection}.
                 * @param section Section to create a path for.
                 * @param key Name of the specified section.
                 * @return Full path of the section from its root.
                 */
                // @ts-ignore
                createPath(section: org.bukkit.configuration.ConfigurationSection, key: string): java.lang.String
                /**
                 * Creates a relative path to the given {@link ConfigurationSection} from
                 * the given relative section.
                 * <p>
                 * You may use this method for any given {@link ConfigurationSection}, not
                 * only {@link MemorySection}.
                 * @param section Section to create a path for.
                 * @param key Name of the specified section.
                 * @param relativeTo Section to create the path relative to.
                 * @return Full path of the section from its root.
                 */
                // @ts-ignore
                createPath(section: org.bukkit.configuration.ConfigurationSection, key: string, relativeTo: org.bukkit.configuration.ConfigurationSection): java.lang.String
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
