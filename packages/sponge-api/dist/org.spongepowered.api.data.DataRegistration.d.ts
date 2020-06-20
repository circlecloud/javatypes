declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface DataRegistration<T extends org.spongepowered.api.data.manipulator.DataManipulator<T, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, T>> extends org.spongepowered.api.CatalogType {
                    /**
                     * Creates a new {@link Builder} to build a {@link DataRegistration}.
                     * Through the use of generics, this can be duck-typed to the generics of
                     * the desired {@link DataManipulator} type to be registered.
                     * @return The new builder instance
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.data.DataRegistration.Builder<?, ?>
                    /**
                     * Gets the {@link DataManipulator} class for this registration.
                     * @return The manipulator class registered
                     */
                    // @ts-ignore
                    getManipulatorClass(): java.lang.Class<T>
                    /**
                     * Gets the implementing class of the {@link DataManipulator} for this
                     * registration.
                     * @return The manipulator class registered
                     */
                    // @ts-ignore
                    getImplementationClass(): java.lang.Class<? extends T>
                    /**
                     * Gets the {@link ImmutableDataManipulator} class for this registration.
                     * @return The immutable class registered
                     */
                    // @ts-ignore
                    getImmutableManipulatorClass(): java.lang.Class<I>
                    /**
                     * Gets the implementing class of the {@link ImmutableDataManipulator} for
                     * this registration.
                     * @return The immutable manipulator class registered
                     */
                    // @ts-ignore
                    getImmutableImplementationClass(): java.lang.Class<? extends I>
                    /**
                     * Gets the {@link DataManipulatorBuilder} registered for this registration.
                     * @return The manipulator builder
                     */
                    // @ts-ignore
                    getDataManipulatorBuilder(): org.spongepowered.api.data.manipulator.DataManipulatorBuilder<T, I>
                    /**
                     * Gets the owning {@link PluginContainer}.
                     * @return The owning plugin container for this registration
                     */
                    // @ts-ignore
                    getPluginContainer(): org.spongepowered.api.plugin.PluginContainer
                    // @ts-ignore
                    getId(): java.lang.String
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
