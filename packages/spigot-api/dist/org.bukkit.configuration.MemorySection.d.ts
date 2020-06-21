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
                constructor(parent: org.bukkit.configuration.ConfigurationSection, path: java.lang.String | string)
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
                public getRoot(): org.bukkit.configuration.Configuration
                // @ts-ignore
                public getParent(): org.bukkit.configuration.ConfigurationSection
                // @ts-ignore
                public addDefault(path: java.lang.String | string, value: java.lang.Object | any): void
                // @ts-ignore
                public getDefaultSection(): org.bukkit.configuration.ConfigurationSection
                // @ts-ignore
                public set(path: java.lang.String | string, value: java.lang.Object | any): void
                // @ts-ignore
                public get(path: java.lang.String | string): any
                // @ts-ignore
                public get(path: java.lang.String | string, def: java.lang.Object | any): any
                // @ts-ignore
                public createSection(path: java.lang.String | string): org.bukkit.configuration.ConfigurationSection
                // @ts-ignore
                public createSection(path: java.lang.String | string, map: java.util.Map<any, any>): org.bukkit.configuration.ConfigurationSection
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
                public getObject<T>(path: java.lang.String | string, clazz: java.lang.Class<T>): T
                // @ts-ignore
                public getObject<T>(path: java.lang.String | string, clazz: java.lang.Class<T>, def: T): T
                // @ts-ignore
                public getSerializable<T extends org.bukkit.configuration.serialization.ConfigurationSerializable>(path: java.lang.String | string, clazz: java.lang.Class<T>): T
                // @ts-ignore
                public getSerializable<T extends org.bukkit.configuration.serialization.ConfigurationSerializable>(path: java.lang.String | string, clazz: java.lang.Class<T>, def: T): T
                // @ts-ignore
                public getVector(path: java.lang.String | string): org.bukkit.util.Vector
                // @ts-ignore
                public getVector(path: java.lang.String | string, def: org.bukkit.util.Vector): org.bukkit.util.Vector
                // @ts-ignore
                public isVector(path: java.lang.String | string): boolean
                // @ts-ignore
                public getOfflinePlayer(path: java.lang.String | string): org.bukkit.OfflinePlayer
                // @ts-ignore
                public getOfflinePlayer(path: java.lang.String | string, def: org.bukkit.OfflinePlayer): org.bukkit.OfflinePlayer
                // @ts-ignore
                public isOfflinePlayer(path: java.lang.String | string): boolean
                // @ts-ignore
                public getItemStack(path: java.lang.String | string): org.bukkit.inventory.ItemStack
                // @ts-ignore
                public getItemStack(path: java.lang.String | string, def: org.bukkit.inventory.ItemStack): org.bukkit.inventory.ItemStack
                // @ts-ignore
                public isItemStack(path: java.lang.String | string): boolean
                // @ts-ignore
                public getColor(path: java.lang.String | string): org.bukkit.Color
                // @ts-ignore
                public getColor(path: java.lang.String | string, def: org.bukkit.Color): org.bukkit.Color
                // @ts-ignore
                public isColor(path: java.lang.String | string): boolean
                // @ts-ignore
                public getLocation(path: java.lang.String | string): org.bukkit.Location
                // @ts-ignore
                public getLocation(path: java.lang.String | string, def: org.bukkit.Location): org.bukkit.Location
                // @ts-ignore
                public isLocation(path: java.lang.String | string): boolean
                // @ts-ignore
                public getConfigurationSection(path: java.lang.String | string): org.bukkit.configuration.ConfigurationSection
                // @ts-ignore
                public isConfigurationSection(path: java.lang.String | string): boolean
                // @ts-ignore
                isPrimitiveWrapper(input: java.lang.Object | any): boolean
                // @ts-ignore
                getDefault(path: java.lang.String | string): any
                // @ts-ignore
                mapChildrenKeys(output: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>, section: org.bukkit.configuration.ConfigurationSection, deep: boolean): void
                // @ts-ignore
                mapChildrenValues(output: java.util.Map<java.lang.String | string, java.lang.Object | any>, section: org.bukkit.configuration.ConfigurationSection, deep: boolean): void
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
                public static createPath(section: org.bukkit.configuration.ConfigurationSection, key: java.lang.String | string): string
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
                public static createPath(section: org.bukkit.configuration.ConfigurationSection, key: java.lang.String | string, relativeTo: org.bukkit.configuration.ConfigurationSection): string
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
