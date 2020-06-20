declare namespace org {
    namespace bukkit {
        namespace configuration {
            /**
             * Represents a section of a {@link Configuration}
             */
            // @ts-ignore
            interface ConfigurationSection {
                /**
                 * Gets a set containing all keys in this section.
                 * <p>
                 * If deep is set to true, then this will contain all the keys within any
                 * child {@link ConfigurationSection}s (and their children, etc). These
                 * will be in a valid path notation for you to use.
                 * <p>
                 * If deep is set to false, then this will contain only the keys of any
                 * direct children, and not their own children.
                 * @param deep Whether or not to get a deep list, as opposed to a shallow
                 *      list.
                 * @return Set of keys contained within this ConfigurationSection.
                 */
                // @ts-ignore
                getKeys(deep: boolean): java.util.Set<java.lang.String>
                /**
                 * Gets a Map containing all keys and their values for this section.
                 * <p>
                 * If deep is set to true, then this will contain all the keys and values
                 * within any child {@link ConfigurationSection}s (and their children,
                 * etc). These keys will be in a valid path notation for you to use.
                 * <p>
                 * If deep is set to false, then this will contain only the keys and
                 * values of any direct children, and not their own children.
                 * @param deep Whether or not to get a deep list, as opposed to a shallow
                 *      list.
                 * @return Map of keys and values of this section.
                 */
                // @ts-ignore
                getValues(deep: boolean): java.util.Map<java.lang.String, java.lang.Object>
                /**
                 * Checks if this {@link ConfigurationSection} contains the given path.
                 * <p>
                 * If the value for the requested path does not exist but a default value
                 * has been specified, this will return true.
                 * @param path Path to check for existence.
                 * @return True if this section contains the requested path, either via
                 *      default or being set.
                 * @throws IllegalArgumentException Thrown when path is null.
                 */
                // @ts-ignore
                contains(path: string): boolean
                /**
                 * Checks if this {@link ConfigurationSection} contains the given path.
                 * <p>
                 * If the value for the requested path does not exist, the boolean parameter
                 * of true has been specified, a default value for the path exists, this
                 * will return true.
                 * <p>
                 * If a boolean parameter of false has been specified, true will only be
                 * returned if there is a set value for the specified path.
                 * @param path Path to check for existence.
                 * @param ignoreDefault Whether or not to ignore if a default value for the
                 *  specified path exists.
                 * @return True if this section contains the requested path, or if a default
                 *  value exist and the boolean parameter for this method is true.
                 * @throws IllegalArgumentException Thrown when path is null.
                 */
                // @ts-ignore
                contains(path: string, ignoreDefault: boolean): boolean
                /**
                 * Checks if this {@link ConfigurationSection} has a value set for the
                 * given path.
                 * <p>
                 * If the value for the requested path does not exist but a default value
                 * has been specified, this will still return false.
                 * @param path Path to check for existence.
                 * @return True if this section contains the requested path, regardless of
                 *      having a default.
                 * @throws IllegalArgumentException Thrown when path is null.
                 */
                // @ts-ignore
                isSet(path: string): boolean
                /**
                 * Gets the path of this {@link ConfigurationSection} from its root {@link
                 * Configuration}
                 * <p>
                 * For any {@link Configuration} themselves, this will return an empty
                 * string.
                 * <p>
                 * If the section is no longer contained within its root for any reason,
                 * such as being replaced with a different value, this may return null.
                 * <p>
                 * To retrieve the single name of this section, that is, the final part of
                 * the path returned by this method, you may use {@link #getName()}.
                 * @return Path of this section relative to its root
                 */
                // @ts-ignore
                getCurrentPath(): java.lang.String
                /**
                 * Gets the name of this individual {@link ConfigurationSection}, in the
                 * path.
                 * <p>
                 * This will always be the final part of {@link #getCurrentPath()}, unless
                 * the section is orphaned.
                 * @return Name of this section
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Gets the root {@link Configuration} that contains this {@link
                 * ConfigurationSection}
                 * <p>
                 * For any {@link Configuration} themselves, this will return its own
                 * object.
                 * <p>
                 * If the section is no longer contained within its root for any reason,
                 * such as being replaced with a different value, this may return null.
                 * @return Root configuration containing this section.
                 */
                // @ts-ignore
                getRoot(): org.bukkit.configuration.Configuration
                /**
                 * Gets the parent {@link ConfigurationSection} that directly contains
                 * this {@link ConfigurationSection}.
                 * <p>
                 * For any {@link Configuration} themselves, this will return null.
                 * <p>
                 * If the section is no longer contained within its parent for any reason,
                 * such as being replaced with a different value, this may return null.
                 * @return Parent section containing this section.
                 */
                // @ts-ignore
                getParent(): org.bukkit.configuration.ConfigurationSection
                /**
                 * Gets the requested Object by path.
                 * <p>
                 * If the Object does not exist but a default value has been specified,
                 * this will return the default value. If the Object does not exist and no
                 * default value was specified, this will return null.
                 * @param path Path of the Object to get.
                 * @return Requested Object.
                 */
                // @ts-ignore
                get(path: string): java.lang.Object
                /**
                 * Gets the requested Object by path, returning a default value if not
                 * found.
                 * <p>
                 * If the Object does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param path Path of the Object to get.
                 * @param def The default value to return if the path is not found.
                 * @return Requested Object.
                 */
                // @ts-ignore
                get(path: string, def: any): java.lang.Object
                /**
                 * Sets the specified path to the given value.
                 * <p>
                 * If value is null, the entry will be removed. Any existing entry will be
                 * replaced, regardless of what the new value is.
                 * <p>
                 * Some implementations may have limitations on what you may store. See
                 * their individual javadocs for details. No implementations should allow
                 * you to store {@link Configuration}s or {@link ConfigurationSection}s,
                 * please use {@link #createSection(java.lang.String)} for that.
                 * @param path Path of the object to set.
                 * @param value New value to set the path to.
                 */
                // @ts-ignore
                set(path: string, value: any): void
                /**
                 * Creates an empty {@link ConfigurationSection} at the specified path.
                 * <p>
                 * Any value that was previously set at this path will be overwritten. If
                 * the previous value was itself a {@link ConfigurationSection}, it will
                 * be orphaned.
                 * @param path Path to create the section at.
                 * @return Newly created section
                 */
                // @ts-ignore
                createSection(path: string): org.bukkit.configuration.ConfigurationSection
                /**
                 * Creates a {@link ConfigurationSection} at the specified path, with
                 * specified values.
                 * <p>
                 * Any value that was previously set at this path will be overwritten. If
                 * the previous value was itself a {@link ConfigurationSection}, it will
                 * be orphaned.
                 * @param path Path to create the section at.
                 * @param map The values to used.
                 * @return Newly created section
                 */
                // @ts-ignore
                createSection(path: string, map: java.util.Map<any, ?>): org.bukkit.configuration.ConfigurationSection
                /**
                 * Gets the requested String by path.
                 * <p>
                 * If the String does not exist but a default value has been specified,
                 * this will return the default value. If the String does not exist and no
                 * default value was specified, this will return null.
                 * @param path Path of the String to get.
                 * @return Requested String.
                 */
                // @ts-ignore
                getString(path: string): java.lang.String
                /**
                 * Gets the requested String by path, returning a default value if not
                 * found.
                 * <p>
                 * If the String does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param path Path of the String to get.
                 * @param def The default value to return if the path is not found or is
                 *      not a String.
                 * @return Requested String.
                 */
                // @ts-ignore
                getString(path: string, def: string): java.lang.String
                /**
                 * Checks if the specified path is a String.
                 * <p>
                 * If the path exists but is not a String, this will return false. If the
                 * path does not exist, this will return false. If the path does not exist
                 * but a default value has been specified, this will check if that default
                 * value is a String and return appropriately.
                 * @param path Path of the String to check.
                 * @return Whether or not the specified path is a String.
                 */
                // @ts-ignore
                isString(path: string): boolean
                /**
                 * Gets the requested int by path.
                 * <p>
                 * If the int does not exist but a default value has been specified, this
                 * will return the default value. If the int does not exist and no default
                 * value was specified, this will return 0.
                 * @param path Path of the int to get.
                 * @return Requested int.
                 */
                // @ts-ignore
                getInt(path: string): int
                /**
                 * Gets the requested int by path, returning a default value if not found.
                 * <p>
                 * If the int does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param path Path of the int to get.
                 * @param def The default value to return if the path is not found or is
                 *      not an int.
                 * @return Requested int.
                 */
                // @ts-ignore
                getInt(path: string, def: number /*int*/): int
                /**
                 * Checks if the specified path is an int.
                 * <p>
                 * If the path exists but is not a int, this will return false. If the
                 * path does not exist, this will return false. If the path does not exist
                 * but a default value has been specified, this will check if that default
                 * value is a int and return appropriately.
                 * @param path Path of the int to check.
                 * @return Whether or not the specified path is an int.
                 */
                // @ts-ignore
                isInt(path: string): boolean
                /**
                 * Gets the requested boolean by path.
                 * <p>
                 * If the boolean does not exist but a default value has been specified,
                 * this will return the default value. If the boolean does not exist and
                 * no default value was specified, this will return false.
                 * @param path Path of the boolean to get.
                 * @return Requested boolean.
                 */
                // @ts-ignore
                getBoolean(path: string): boolean
                /**
                 * Gets the requested boolean by path, returning a default value if not
                 * found.
                 * <p>
                 * If the boolean does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param path Path of the boolean to get.
                 * @param def The default value to return if the path is not found or is
                 *      not a boolean.
                 * @return Requested boolean.
                 */
                // @ts-ignore
                getBoolean(path: string, def: boolean): boolean
                /**
                 * Checks if the specified path is a boolean.
                 * <p>
                 * If the path exists but is not a boolean, this will return false. If the
                 * path does not exist, this will return false. If the path does not exist
                 * but a default value has been specified, this will check if that default
                 * value is a boolean and return appropriately.
                 * @param path Path of the boolean to check.
                 * @return Whether or not the specified path is a boolean.
                 */
                // @ts-ignore
                isBoolean(path: string): boolean
                /**
                 * Gets the requested double by path.
                 * <p>
                 * If the double does not exist but a default value has been specified,
                 * this will return the default value. If the double does not exist and no
                 * default value was specified, this will return 0.
                 * @param path Path of the double to get.
                 * @return Requested double.
                 */
                // @ts-ignore
                getDouble(path: string): double
                /**
                 * Gets the requested double by path, returning a default value if not
                 * found.
                 * <p>
                 * If the double does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param path Path of the double to get.
                 * @param def The default value to return if the path is not found or is
                 *      not a double.
                 * @return Requested double.
                 */
                // @ts-ignore
                getDouble(path: string, def: number /*double*/): double
                /**
                 * Checks if the specified path is a double.
                 * <p>
                 * If the path exists but is not a double, this will return false. If the
                 * path does not exist, this will return false. If the path does not exist
                 * but a default value has been specified, this will check if that default
                 * value is a double and return appropriately.
                 * @param path Path of the double to check.
                 * @return Whether or not the specified path is a double.
                 */
                // @ts-ignore
                isDouble(path: string): boolean
                /**
                 * Gets the requested long by path.
                 * <p>
                 * If the long does not exist but a default value has been specified, this
                 * will return the default value. If the long does not exist and no
                 * default value was specified, this will return 0.
                 * @param path Path of the long to get.
                 * @return Requested long.
                 */
                // @ts-ignore
                getLong(path: string): long
                /**
                 * Gets the requested long by path, returning a default value if not
                 * found.
                 * <p>
                 * If the long does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param path Path of the long to get.
                 * @param def The default value to return if the path is not found or is
                 *      not a long.
                 * @return Requested long.
                 */
                // @ts-ignore
                getLong(path: string, def: number /*long*/): long
                /**
                 * Checks if the specified path is a long.
                 * <p>
                 * If the path exists but is not a long, this will return false. If the
                 * path does not exist, this will return false. If the path does not exist
                 * but a default value has been specified, this will check if that default
                 * value is a long and return appropriately.
                 * @param path Path of the long to check.
                 * @return Whether or not the specified path is a long.
                 */
                // @ts-ignore
                isLong(path: string): boolean
                /**
                 * Gets the requested List by path.
                 * <p>
                 * If the List does not exist but a default value has been specified, this
                 * will return the default value. If the List does not exist and no
                 * default value was specified, this will return null.
                 * @param path Path of the List to get.
                 * @return Requested List.
                 */
                // @ts-ignore
                getList(path: string): java.util.List<?>
                /**
                 * Gets the requested List by path, returning a default value if not
                 * found.
                 * <p>
                 * If the List does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param path Path of the List to get.
                 * @param def The default value to return if the path is not found or is
                 *      not a List.
                 * @return Requested List.
                 */
                // @ts-ignore
                getList(path: string, def: Array<any>): java.util.List<?>
                /**
                 * Checks if the specified path is a List.
                 * <p>
                 * If the path exists but is not a List, this will return false. If the
                 * path does not exist, this will return false. If the path does not exist
                 * but a default value has been specified, this will check if that default
                 * value is a List and return appropriately.
                 * @param path Path of the List to check.
                 * @return Whether or not the specified path is a List.
                 */
                // @ts-ignore
                isList(path: string): boolean
                /**
                 * Gets the requested List of String by path.
                 * <p>
                 * If the List does not exist but a default value has been specified, this
                 * will return the default value. If the List does not exist and no
                 * default value was specified, this will return an empty List.
                 * <p>
                 * This method will attempt to cast any values into a String if possible,
                 * but may miss any values out if they are not compatible.
                 * @param path Path of the List to get.
                 * @return Requested List of String.
                 */
                // @ts-ignore
                getStringList(path: string): java.util.List<java.lang.String>
                /**
                 * Gets the requested List of Integer by path.
                 * <p>
                 * If the List does not exist but a default value has been specified, this
                 * will return the default value. If the List does not exist and no
                 * default value was specified, this will return an empty List.
                 * <p>
                 * This method will attempt to cast any values into a Integer if possible,
                 * but may miss any values out if they are not compatible.
                 * @param path Path of the List to get.
                 * @return Requested List of Integer.
                 */
                // @ts-ignore
                getIntegerList(path: string): java.util.List<java.lang.Integer>
                /**
                 * Gets the requested List of Boolean by path.
                 * <p>
                 * If the List does not exist but a default value has been specified, this
                 * will return the default value. If the List does not exist and no
                 * default value was specified, this will return an empty List.
                 * <p>
                 * This method will attempt to cast any values into a Boolean if possible,
                 * but may miss any values out if they are not compatible.
                 * @param path Path of the List to get.
                 * @return Requested List of Boolean.
                 */
                // @ts-ignore
                getBooleanList(path: string): java.util.List<java.lang.Boolean>
                /**
                 * Gets the requested List of Double by path.
                 * <p>
                 * If the List does not exist but a default value has been specified, this
                 * will return the default value. If the List does not exist and no
                 * default value was specified, this will return an empty List.
                 * <p>
                 * This method will attempt to cast any values into a Double if possible,
                 * but may miss any values out if they are not compatible.
                 * @param path Path of the List to get.
                 * @return Requested List of Double.
                 */
                // @ts-ignore
                getDoubleList(path: string): java.util.List<java.lang.Double>
                /**
                 * Gets the requested List of Float by path.
                 * <p>
                 * If the List does not exist but a default value has been specified, this
                 * will return the default value. If the List does not exist and no
                 * default value was specified, this will return an empty List.
                 * <p>
                 * This method will attempt to cast any values into a Float if possible,
                 * but may miss any values out if they are not compatible.
                 * @param path Path of the List to get.
                 * @return Requested List of Float.
                 */
                // @ts-ignore
                getFloatList(path: string): java.util.List<java.lang.Float>
                /**
                 * Gets the requested List of Long by path.
                 * <p>
                 * If the List does not exist but a default value has been specified, this
                 * will return the default value. If the List does not exist and no
                 * default value was specified, this will return an empty List.
                 * <p>
                 * This method will attempt to cast any values into a Long if possible,
                 * but may miss any values out if they are not compatible.
                 * @param path Path of the List to get.
                 * @return Requested List of Long.
                 */
                // @ts-ignore
                getLongList(path: string): java.util.List<java.lang.Long>
                /**
                 * Gets the requested List of Byte by path.
                 * <p>
                 * If the List does not exist but a default value has been specified, this
                 * will return the default value. If the List does not exist and no
                 * default value was specified, this will return an empty List.
                 * <p>
                 * This method will attempt to cast any values into a Byte if possible,
                 * but may miss any values out if they are not compatible.
                 * @param path Path of the List to get.
                 * @return Requested List of Byte.
                 */
                // @ts-ignore
                getByteList(path: string): java.util.List<java.lang.Byte>
                /**
                 * Gets the requested List of Character by path.
                 * <p>
                 * If the List does not exist but a default value has been specified, this
                 * will return the default value. If the List does not exist and no
                 * default value was specified, this will return an empty List.
                 * <p>
                 * This method will attempt to cast any values into a Character if
                 * possible, but may miss any values out if they are not compatible.
                 * @param path Path of the List to get.
                 * @return Requested List of Character.
                 */
                // @ts-ignore
                getCharacterList(path: string): java.util.List<java.lang.Character>
                /**
                 * Gets the requested List of Short by path.
                 * <p>
                 * If the List does not exist but a default value has been specified, this
                 * will return the default value. If the List does not exist and no
                 * default value was specified, this will return an empty List.
                 * <p>
                 * This method will attempt to cast any values into a Short if possible,
                 * but may miss any values out if they are not compatible.
                 * @param path Path of the List to get.
                 * @return Requested List of Short.
                 */
                // @ts-ignore
                getShortList(path: string): java.util.List<java.lang.Short>
                /**
                 * Gets the requested List of Maps by path.
                 * <p>
                 * If the List does not exist but a default value has been specified, this
                 * will return the default value. If the List does not exist and no
                 * default value was specified, this will return an empty List.
                 * <p>
                 * This method will attempt to cast any values into a Map if possible, but
                 * may miss any values out if they are not compatible.
                 * @param path Path of the List to get.
                 * @return Requested List of Maps.
                 */
                // @ts-ignore
                getMapList(path: string): java.util.List<java.util.Map<?, ?>>
                /**
                 * Gets the requested object at the given path.
                 * If the Object does not exist but a default value has been specified, this
                 * will return the default value. If the Object does not exist and no
                 * default value was specified, this will return null.
                 * <b>Note:</b> For example #getObject(path, String.class) is <b>not</b>
                 * equivalent to {@link #getString(String) #getString(path)} because
                 * {@link #getString(String) #getString(path)} converts internally all
                 * Objects to Strings. However, #getObject(path, Boolean.class) is
                 * equivalent to {@link #getBoolean(String) #getBoolean(path)} for example.
                 * @param <T> the type of the requested object
                 * @param path the path to the object.
                 * @param clazz the type of the requested object
                 * @return Requested object
                 */
                // @ts-ignore
                getObject<T>(path: string, clazz: java.lang.Class<T>): T
                /**
                 * Gets the requested object at the given path, returning a default value if
                 * not found
                 * If the Object does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * <b>Note:</b> For example #getObject(path, String.class, def) is
                 * <b>not</b> equivalent to
                 * {@link #getString(String, String) #getString(path, def)} because
                 * {@link #getString(String, String) #getString(path, def)} converts
                 * internally all Objects to Strings. However, #getObject(path,
                 * Boolean.class, def) is equivalent to {@link #getBoolean(String, boolean) #getBoolean(path,
                 * def)} for example.
                 * @param <T> the type of the requested object
                 * @param path the path to the object.
                 * @param clazz the type of the requested object
                 * @param def the default object to return if the object is not present at
                 *  the path
                 * @return Requested object
                 */
                // @ts-ignore
                getObject<T>(path: string, clazz: java.lang.Class<T>, def: T): T
                /**
                 * Gets the requested {@link ConfigurationSerializable} object at the given
                 * path.
                 * If the Object does not exist but a default value has been specified, this
                 * will return the default value. If the Object does not exist and no
                 * default value was specified, this will return null.
                 * @param <T> the type of {#link ConfigurationSerializable}
                 * @param path the path to the object.
                 * @param clazz the type of {#link ConfigurationSerializable}
                 * @return Requested {#link ConfigurationSerializable} object
                 */
                // @ts-ignore
                getSerializable<T extends org.bukkit.configuration.serialization.ConfigurationSerializable>(path: string, clazz: java.lang.Class<T>): T
                /**
                 * Gets the requested {@link ConfigurationSerializable} object at the given
                 * path, returning a default value if not found
                 * If the Object does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param <T> the type of {#link ConfigurationSerializable}
                 * @param path the path to the object.
                 * @param clazz the type of {#link ConfigurationSerializable}
                 * @param def the default object to return if the object is not present at
                 *  the path
                 * @return Requested {#link ConfigurationSerializable} object
                 */
                // @ts-ignore
                getSerializable<T extends org.bukkit.configuration.serialization.ConfigurationSerializable>(path: string, clazz: java.lang.Class<T>, def: T extends org.bukkit.configuration.serialization.ConfigurationSerializable): T
                /**
                 * Gets the requested Vector by path.
                 * <p>
                 * If the Vector does not exist but a default value has been specified,
                 * this will return the default value. If the Vector does not exist and no
                 * default value was specified, this will return null.
                 * @param path Path of the Vector to get.
                 * @return Requested Vector.
                 */
                // @ts-ignore
                getVector(path: string): org.bukkit.util.Vector
                /**
                 * Gets the requested {@link Vector} by path, returning a default value if
                 * not found.
                 * <p>
                 * If the Vector does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param path Path of the Vector to get.
                 * @param def The default value to return if the path is not found or is
                 *      not a Vector.
                 * @return Requested Vector.
                 */
                // @ts-ignore
                getVector(path: string, def: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Checks if the specified path is a Vector.
                 * <p>
                 * If the path exists but is not a Vector, this will return false. If the
                 * path does not exist, this will return false. If the path does not exist
                 * but a default value has been specified, this will check if that default
                 * value is a Vector and return appropriately.
                 * @param path Path of the Vector to check.
                 * @return Whether or not the specified path is a Vector.
                 */
                // @ts-ignore
                isVector(path: string): boolean
                /**
                 * Gets the requested OfflinePlayer by path.
                 * <p>
                 * If the OfflinePlayer does not exist but a default value has been
                 * specified, this will return the default value. If the OfflinePlayer
                 * does not exist and no default value was specified, this will return
                 * null.
                 * @param path Path of the OfflinePlayer to get.
                 * @return Requested OfflinePlayer.
                 */
                // @ts-ignore
                getOfflinePlayer(path: string): org.bukkit.OfflinePlayer
                /**
                 * Gets the requested {@link OfflinePlayer} by path, returning a default
                 * value if not found.
                 * <p>
                 * If the OfflinePlayer does not exist then the specified default value
                 * will returned regardless of if a default has been identified in the
                 * root {@link Configuration}.
                 * @param path Path of the OfflinePlayer to get.
                 * @param def The default value to return if the path is not found or is
                 *      not an OfflinePlayer.
                 * @return Requested OfflinePlayer.
                 */
                // @ts-ignore
                getOfflinePlayer(path: string, def: org.bukkit.OfflinePlayer): org.bukkit.OfflinePlayer
                /**
                 * Checks if the specified path is an OfflinePlayer.
                 * <p>
                 * If the path exists but is not a OfflinePlayer, this will return false.
                 * If the path does not exist, this will return false. If the path does
                 * not exist but a default value has been specified, this will check if
                 * that default value is a OfflinePlayer and return appropriately.
                 * @param path Path of the OfflinePlayer to check.
                 * @return Whether or not the specified path is an OfflinePlayer.
                 */
                // @ts-ignore
                isOfflinePlayer(path: string): boolean
                /**
                 * Gets the requested ItemStack by path.
                 * <p>
                 * If the ItemStack does not exist but a default value has been specified,
                 * this will return the default value. If the ItemStack does not exist and
                 * no default value was specified, this will return null.
                 * @param path Path of the ItemStack to get.
                 * @return Requested ItemStack.
                 */
                // @ts-ignore
                getItemStack(path: string): org.bukkit.inventory.ItemStack
                /**
                 * Gets the requested {@link ItemStack} by path, returning a default value
                 * if not found.
                 * <p>
                 * If the ItemStack does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param path Path of the ItemStack to get.
                 * @param def The default value to return if the path is not found or is
                 *      not an ItemStack.
                 * @return Requested ItemStack.
                 */
                // @ts-ignore
                getItemStack(path: string, def: org.bukkit.inventory.ItemStack): org.bukkit.inventory.ItemStack
                /**
                 * Checks if the specified path is an ItemStack.
                 * <p>
                 * If the path exists but is not a ItemStack, this will return false. If
                 * the path does not exist, this will return false. If the path does not
                 * exist but a default value has been specified, this will check if that
                 * default value is a ItemStack and return appropriately.
                 * @param path Path of the ItemStack to check.
                 * @return Whether or not the specified path is an ItemStack.
                 */
                // @ts-ignore
                isItemStack(path: string): boolean
                /**
                 * Gets the requested Color by path.
                 * <p>
                 * If the Color does not exist but a default value has been specified,
                 * this will return the default value. If the Color does not exist and no
                 * default value was specified, this will return null.
                 * @param path Path of the Color to get.
                 * @return Requested Color.
                 */
                // @ts-ignore
                getColor(path: string): org.bukkit.Color
                /**
                 * Gets the requested {@link Color} by path, returning a default value if
                 * not found.
                 * <p>
                 * If the Color does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param path Path of the Color to get.
                 * @param def The default value to return if the path is not found or is
                 *      not a Color.
                 * @return Requested Color.
                 */
                // @ts-ignore
                getColor(path: string, def: org.bukkit.Color): org.bukkit.Color
                /**
                 * Checks if the specified path is a Color.
                 * <p>
                 * If the path exists but is not a Color, this will return false. If the
                 * path does not exist, this will return false. If the path does not exist
                 * but a default value has been specified, this will check if that default
                 * value is a Color and return appropriately.
                 * @param path Path of the Color to check.
                 * @return Whether or not the specified path is a Color.
                 */
                // @ts-ignore
                isColor(path: string): boolean
                /**
                 * Gets the requested Location by path.
                 * <p>
                 * If the Location does not exist but a default value has been specified,
                 * this will return the default value. If the Location does not exist and no
                 * default value was specified, this will return null.
                 * @param path Path of the Location to get.
                 * @return Requested Location.
                 */
                // @ts-ignore
                getLocation(path: string): org.bukkit.Location
                /**
                 * Gets the requested {@link Location} by path, returning a default value if
                 * not found.
                 * <p>
                 * If the Location does not exist then the specified default value will
                 * returned regardless of if a default has been identified in the root
                 * {@link Configuration}.
                 * @param path Path of the Location to get.
                 * @param def The default value to return if the path is not found or is not
                 *  a Location.
                 * @return Requested Location.
                 */
                // @ts-ignore
                getLocation(path: string, def: org.bukkit.Location): org.bukkit.Location
                /**
                 * Checks if the specified path is a Location.
                 * <p>
                 * If the path exists but is not a Location, this will return false. If the
                 * path does not exist, this will return false. If the path does not exist
                 * but a default value has been specified, this will check if that default
                 * value is a Location and return appropriately.
                 * @param path Path of the Location to check.
                 * @return Whether or not the specified path is a Location.
                 */
                // @ts-ignore
                isLocation(path: string): boolean
                /**
                 * Gets the requested ConfigurationSection by path.
                 * <p>
                 * If the ConfigurationSection does not exist but a default value has been
                 * specified, this will return the default value. If the
                 * ConfigurationSection does not exist and no default value was specified,
                 * this will return null.
                 * @param path Path of the ConfigurationSection to get.
                 * @return Requested ConfigurationSection.
                 */
                // @ts-ignore
                getConfigurationSection(path: string): org.bukkit.configuration.ConfigurationSection
                /**
                 * Checks if the specified path is a ConfigurationSection.
                 * <p>
                 * If the path exists but is not a ConfigurationSection, this will return
                 * false. If the path does not exist, this will return false. If the path
                 * does not exist but a default value has been specified, this will check
                 * if that default value is a ConfigurationSection and return
                 * appropriately.
                 * @param path Path of the ConfigurationSection to check.
                 * @return Whether or not the specified path is a ConfigurationSection.
                 */
                // @ts-ignore
                isConfigurationSection(path: string): boolean
                /**
                 * Gets the equivalent {@link ConfigurationSection} from the default
                 * {@link Configuration} defined in {@link #getRoot()}.
                 * <p>
                 * If the root contains no defaults, or the defaults doesn't contain a
                 * value for this path, or the value at this path is not a {@link
                 * ConfigurationSection} then this will return null.
                 * @return Equivalent section in root configuration
                 */
                // @ts-ignore
                getDefaultSection(): org.bukkit.configuration.ConfigurationSection
                /**
                 * Sets the default value in the root at the given path as provided.
                 * <p>
                 * If no source {@link Configuration} was provided as a default
                 * collection, then a new {@link MemoryConfiguration} will be created to
                 * hold the new default value.
                 * <p>
                 * If value is null, the value will be removed from the default
                 * Configuration source.
                 * <p>
                 * If the value as returned by {@link #getDefaultSection()} is null, then
                 * this will create a new section at the path, replacing anything that may
                 * have existed there previously.
                 * @param path Path of the value to set.
                 * @param value Value to set the default to.
                 * @throws IllegalArgumentException Thrown if path is null.
                 */
                // @ts-ignore
                addDefault(path: string, value: any): void
            }
        }
    }
}
