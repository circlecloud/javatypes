declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                class RegistryModuleAlreadyRegisteredException extends org.spongepowered.api.registry.RegistryException {
                    /**
                     * Creates a new {@link RegistryModuleAlreadyRegisteredException} based on
                     * the fact that the provided {@link RegistryModule} is already registered,
                     * either due to the fact that the object it covers is already associated
                     * with a different {@link RegistryModule module}, or that the module itself
                     * has already been registered.
                     * @param message The message
                     * @param module The module in question
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, module: org.spongepowered.api.registry.RegistryModule)
                    /**
                     * Gets the {@link RegistryModule} associated with this exception.
                     * @return The registry module
                     */
                    // @ts-ignore
                    getModule(): org.spongepowered.api.registry.RegistryModule
                }
            }
        }
    }
}
