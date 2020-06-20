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
                    constructor(clazz: java.lang.Class<org.bukkit.configuration.serialization.ConfigurationSerializable>)
                    // @ts-ignore
                    readonly SERIALIZED_TYPE_KEY: string
                    // @ts-ignore
                    getMethod(name: string, isStatic: boolean): java.lang.reflect.Method
                    // @ts-ignore
                    getConstructor(): java.lang.reflect.Constructor<? extends org.bukkit.configuration.serialization.ConfigurationSerializable>
                    // @ts-ignore
                    deserializeViaMethod(method: java.lang.reflect.Method, args: java.util.Map<java.lang.String, any>): org.bukkit.configuration.serialization.ConfigurationSerializable
                    // @ts-ignore
                    deserializeViaCtor(ctor: java.lang.reflect.Constructor<org.bukkit.configuration.serialization.ConfigurationSerializable>, args: java.util.Map<java.lang.String, any>): org.bukkit.configuration.serialization.ConfigurationSerializable
                    // @ts-ignore
                    deserialize(args: java.util.Map<java.lang.String, any>): org.bukkit.configuration.serialization.ConfigurationSerializable
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
                    deserializeObject(args: java.util.Map<java.lang.String, any>, clazz: java.lang.Class<org.bukkit.configuration.serialization.ConfigurationSerializable>): org.bukkit.configuration.serialization.ConfigurationSerializable
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
                    deserializeObject(args: java.util.Map<java.lang.String, any>): org.bukkit.configuration.serialization.ConfigurationSerializable
                    /**
                     * Registers the given {@link ConfigurationSerializable} class by its
                     * alias
                     * @param clazz Class to register
                     */
                    // @ts-ignore
                    registerClass(clazz: java.lang.Class<org.bukkit.configuration.serialization.ConfigurationSerializable>): void
                    /**
                     * Registers the given alias to the specified {@link
                     * ConfigurationSerializable} class
                     * @param clazz Class to register
                     * @param alias Alias to register as
                     * @see SerializableAs
                     */
                    // @ts-ignore
                    registerClass(clazz: java.lang.Class<org.bukkit.configuration.serialization.ConfigurationSerializable>, alias: string): void
                    /**
                     * Unregisters the specified alias to a {@link ConfigurationSerializable}
                     * @param alias Alias to unregister
                     */
                    // @ts-ignore
                    unregisterClass(alias: string): void
                    /**
                     * Unregisters any aliases for the specified {@link
                     * ConfigurationSerializable} class
                     * @param clazz Class to unregister
                     */
                    // @ts-ignore
                    unregisterClass(clazz: java.lang.Class<org.bukkit.configuration.serialization.ConfigurationSerializable>): void
                    /**
                     * Attempts to get a registered {@link ConfigurationSerializable} class by
                     * its alias
                     * @param alias Alias of the serializable
                     * @return Registered class, or null if not found
                     */
                    // @ts-ignore
                    getClassByAlias(alias: string): java.lang.Class<? extends org.bukkit.configuration.serialization.ConfigurationSerializable>
                    /**
                     * Gets the correct alias for the given {@link ConfigurationSerializable}
                     * class
                     * @param clazz Class to get alias for
                     * @return Alias to use for the class
                     */
                    // @ts-ignore
                    getAlias(clazz: java.lang.Class<org.bukkit.configuration.serialization.ConfigurationSerializable>): java.lang.String
                }
            }
        }
    }
}
