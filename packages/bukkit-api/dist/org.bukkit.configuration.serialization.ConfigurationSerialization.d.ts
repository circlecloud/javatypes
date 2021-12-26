declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace serialization {
                /**
                 * Utility class for storing and retrieving classes for {@link Configuration}.
                 */
                // @ts-ignore
                class ConfigurationSerialization extends java.lang.Object {
                    // @ts-ignore
                    constructor(clazz: java.lang.Class<any>)
                    // @ts-ignore
                    public static readonly SERIALIZED_TYPE_KEY: java.lang.String | string
                    // @ts-ignore
                    getMethod(name: java.lang.String | string, isStatic: boolean): java.lang.reflect.Method
                    // @ts-ignore
                    getConstructor(): java.lang.reflect.Constructor<any>
                    // @ts-ignore
                    deserializeViaMethod(method: java.lang.reflect.Method, args: java.util.Map<java.lang.String | string, any>): org.bukkit.configuration.serialization.ConfigurationSerializable
                    // @ts-ignore
                    deserializeViaCtor(ctor: java.lang.reflect.Constructor<any>, args: java.util.Map<java.lang.String | string, any>): org.bukkit.configuration.serialization.ConfigurationSerializable
                    // @ts-ignore
                    public deserialize(args: java.util.Map<java.lang.String | string, any>): org.bukkit.configuration.serialization.ConfigurationSerializable
                    /**
                     * Attempts to deserialize the given arguments into a new instance of the
                     * given class.
                     * <p>
                     * The class must implement {@link ConfigurationSerializable}, including
                     * the extra methods as specified in the javadoc of
                     * ConfigurationSerializable.
                     * <p>
                     * If a new instance could not be made, an example being the class not
                     * fully implementing the interface, null will be returned.
                     * @param args Arguments for deserialization
                     * @param clazz Class to deserialize into
                     * @return New instance of the specified class
                     */
                    // @ts-ignore
                    public static deserializeObject(args: java.util.Map<java.lang.String | string, any>, clazz: java.lang.Class<any>): org.bukkit.configuration.serialization.ConfigurationSerializable
                    /**
                     * Attempts to deserialize the given arguments into a new instance of the
                     * given class.
                     * <p>
                     * The class must implement {@link ConfigurationSerializable}, including
                     * the extra methods as specified in the javadoc of
                     * ConfigurationSerializable.
                     * <p>
                     * If a new instance could not be made, an example being the class not
                     * fully implementing the interface, null will be returned.
                     * @param args Arguments for deserialization
                     * @return New instance of the specified class
                     */
                    // @ts-ignore
                    public static deserializeObject(args: java.util.Map<java.lang.String | string, any>): org.bukkit.configuration.serialization.ConfigurationSerializable
                    /**
                     * Registers the given {@link ConfigurationSerializable} class by its
                     * alias
                     * @param clazz Class to register
                     */
                    // @ts-ignore
                    public static registerClass(clazz: java.lang.Class<any>): void
                    /**
                     * Registers the given alias to the specified {@link
                     * ConfigurationSerializable} class
                     * @param clazz Class to register
                     * @param alias Alias to register as
                     * @see SerializableAs
                     */
                    // @ts-ignore
                    public static registerClass(clazz: java.lang.Class<any>, alias: java.lang.String | string): void
                    /**
                     * Unregisters the specified alias to a {@link ConfigurationSerializable}
                     * @param alias Alias to unregister
                     */
                    // @ts-ignore
                    public static unregisterClass(alias: java.lang.String | string): void
                    /**
                     * Unregisters any aliases for the specified {@link
                     * ConfigurationSerializable} class
                     * @param clazz Class to unregister
                     */
                    // @ts-ignore
                    public static unregisterClass(clazz: java.lang.Class<any>): void
                    /**
                     * Attempts to get a registered {@link ConfigurationSerializable} class by
                     * its alias
                     * @param alias Alias of the serializable
                     * @return Registered class, or null if not found
                     */
                    // @ts-ignore
                    public static getClassByAlias(alias: java.lang.String | string): java.lang.Class<any>
                    /**
                     * Gets the correct alias for the given {@link ConfigurationSerializable}
                     * class
                     * @param clazz Class to get alias for
                     * @return Alias to use for the class
                     */
                    // @ts-ignore
                    public static getAlias(clazz: java.lang.Class<any>): string
                }
            }
        }
    }
}
