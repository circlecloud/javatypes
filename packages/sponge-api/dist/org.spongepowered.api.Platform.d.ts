declare namespace org {
    namespace spongepowered {
        namespace api {
            /**
             * Represents a possible platform or implementation a {@link Game} could be
             * running on.
             */
            // @ts-ignore
            interface Platform {
                // @ts-ignore
                readonly API_ID: java.lang.String | string
                /**
                 * Retrieves the current {@link Type} this platform is running on.
                 * @return The current type
                 */
                // @ts-ignore
                getType(): org.spongepowered.api.Platform.Type
                /**
                 * Retrieves the current {@link Type} the platform is executing on.
                 * <p>A Minecraft instance will have a client and server thread. If the
                 * server is executing, this will return {@linkplain Type#SERVER} but
                 * {@link Platform#getType()} would return {@linkplain Type#CLIENT}.</p>
                 * @return The execution type
                 */
                // @ts-ignore
                getExecutionType(): org.spongepowered.api.Platform.Type
                /**
                 * Returns the {@link PluginContainer} for the specified platform
                 * {@link Component}.
                 * @param component The platform component
                 * @return The plugin container for the component
                 */
                // @ts-ignore
                getContainer(component: org.spongepowered.api.Platform.Component): org.spongepowered.api.plugin.PluginContainer
                /**
                 * Returns the current API plugin container.
                 * @return The API plugin container
                 * @deprecated Use {#link #getContainer(Component)} with
                 *      {@link Component#API}
                 */
                // @ts-ignore
                getApi(): org.spongepowered.api.plugin.PluginContainer
                /**
                 * Returns the current implementation plugin container.
                 * @return The implementation plugin container
                 * @deprecated Use {#link #getContainer(Component)} with
                 *      {@link Component#IMPLEMENTATION}
                 */
                // @ts-ignore
                getImplementation(): org.spongepowered.api.plugin.PluginContainer
                /**
                 * Gets the current Minecraft version of this platform.
                 * @return The Minecraft version
                 */
                // @ts-ignore
                getMinecraftVersion(): org.spongepowered.api.MinecraftVersion
                /**
                 * Returns this platform instance, as a key-value map.
                 * <p>The returned map instance is connected directly to this platform
                 * instance. Existing keys like name and version are not modifiable, but
                 * new keys are stored in this instance and are shared between any
                 * references to a map obtained through the retrieved map.</p>
                 * <p>This mechanism allows for platform-specific information like Forge
                 * version.</p>
                 * @return This platform as a map
                 */
                // @ts-ignore
                asMap(): java.util.Map<java.lang.String | string, java.lang.Object | any>
            }
        }
    }
}
