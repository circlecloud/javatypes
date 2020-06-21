declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace DataRegistration {
                    // @ts-ignore
                    interface Builder<T extends org.spongepowered.api.data.manipulator.DataManipulator<T, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, T>> extends org.spongepowered.api.util.CatalogBuilder<org.spongepowered.api.data.DataRegistration<T, I>, org.spongepowered.api.data.DataRegistration.Builder<T, I>> {
                        /**
                         * Sets the {@link DataManipulator} class to be used. For the sake of
                         * generics, this method must be called prior to
                         * {@link #immutableClass(Class)} to properly infer generic usage
                         * by the compiler and at runtime.
                         * @param manipulatorClass The manipulator class
                         * @param <D> The type of data manipulator
                         * @param <M> The type of immutable data manipulator
                         * @return This builder, properly generified, for chaining
                         */
                        // @ts-ignore
                        dataClass<D extends org.spongepowered.api.data.manipulator.DataManipulator<D, M>, M extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<M, D>>(manipulatorClass: java.lang.Class<D>): org.spongepowered.api.data.DataRegistration.Builder<D, M>
                        /**
                         * Sets the immutable class. <strong>THIS MUST BE CALLED AFTER
                         * {@link #dataClass(Class)}!</strong>
                         * @param immutableDataClass The immutable data class
                         * @return This builder, for chaining
                         * @throws IllegalStateException If the data manipulator class has not
                         *      been set already
                         */
                        // @ts-ignore
                        immutableClass(immutableDataClass: java.lang.Class<I>): org.spongepowered.api.data.DataRegistration.Builder<T, I>
                        /**
                         * Optionally sets a separate implementation class for the
                         * {@link DataManipulator}. <strong>THIS MUST BE CALLED AFTER
                         * {@link #dataClass(Class)}!</strong>
                         * @param dataImplementationClass The data manipulator implementation
                         * @return This builder, for chaining
                         * @throws IllegalStateException If the data manipulator class has not
                         *      been set already
                         */
                        // @ts-ignore
                        dataImplementation(dataImplementationClass: java.lang.Class<any>): org.spongepowered.api.data.DataRegistration.Builder<T, I>
                        /**
                         * Optionally sets a separate implementation class for the
                         * {@link ImmutableDataManipulator}. <strong>THIS MUST BE CALLED AFTER
                         * {@link #dataClass(Class)}!</strong>
                         * @param immutableImplementationClass The immutable data manipulator
                         *      implementation
                         * @return This builder, for chaining
                         * @throws IllegalStateException If the immutable data manipulator
                         *      class has not been set already
                         */
                        // @ts-ignore
                        immutableImplementation(immutableImplementationClass: java.lang.Class<any>): org.spongepowered.api.data.DataRegistration.Builder<T, I>
                        /**
                         * Sets the id for the manipulator. The id should be formatted
                         * according to the normal {@link CatalogType} standard:
                         * <code>&#123;manipulator-id&#124;</code> since the
                         * <code>&quot;pluginid&quot;</code>
                         * is gathered from {@link #buildAndRegister(PluginContainer)} provided
                         * {@link PluginContainer}.
                         * <p>The importance of the id is that the id is what will be used for
                         * serialization and deserialization of custom plugin provided data,
                         * such that if the string changes, or a plugin is no longer available
                         * to register the data, the custom data being deserialized will not be
                         * available through the system, and may be lost.</p>
                         * @param id The id for the manipulator
                         * @return This builder, for chaining
                         * @deprecated Use {#link #id(String)} instead
                         */
                        // @ts-ignore
                        manipulatorId(id: java.lang.String | string): org.spongepowered.api.data.DataRegistration.Builder<T, I>
                        /**
                         * Sets a more generalized name to refer to the registered
                         * {@link DataManipulator} as a common name.
                         * <p>As an example: if I have a DummyTestData, a name could be "Dummy".
                         * </p>
                         * @param name The data name
                         * @return This builder, for chaining
                         * @deprecated Use {#link #name(String)} instead
                         */
                        // @ts-ignore
                        dataName(name: java.lang.String | string): org.spongepowered.api.data.DataRegistration.Builder<T, I>
                        /**
                         * Sets the {@link DataManipulatorBuilder} to be used to generate new
                         * {@link DataManipulator DataManipulators} and
                         * {@link ImmutableDataManipulator ImmutableDataManipulators}.
                         * @param builder The builder
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        builder(builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder<T, I>): org.spongepowered.api.data.DataRegistration.Builder<T, I>
                        /**
                         * Since {@link DataRegistration} objects should be considered
                         * singletons in that the data registered upon creation is already
                         * preformed, creating a new {@link DataRegistration} will always
                         * fail.
                         * @param value The built object
                         * @return This builder, but will fail
                         * @throws UnsupportedOperationException Always will throw an exception
                         *      since there can not be multiple registration objects for the same
                         *      data
                         */
                        // @ts-ignore
                        from(value: org.spongepowered.api.data.DataRegistration<T, I>): org.spongepowered.api.data.DataRegistration.Builder<T, I>
                        // @ts-ignore
                        reset(): org.spongepowered.api.data.DataRegistration.Builder<T, I>
                        /**
                         * Registers all of the objects for the provided {@link DataRegistration}
                         * object, including the registration's
                         * {@link DataRegistration#getManipulatorClass()} for the
                         * {@link DataManipulator} and
                         * {@link DataRegistration#getImmutableManipulatorClass()}
                         * and {@link DataRegistration#getDataManipulatorBuilder()} object. More
                         * importantly, this also allows the proper identification of the
                         * {@link DataManipulator} itself by the provided
                         * {@link DataRegistration#getId()},
                         * which, much like {@link CatalogType#getId()} is formatted with
                         * <code>&#123;plugin-id&#124;&#58;&#123;manipulator-id&#124;</code>.
                         * <p>It is expected that as the required {@link PluginContainer} is used
                         * is not a default container from Sponge. The
                         * {@link PluginContainer#getId()} is utilized to generate the final
                         * {@link DataRegistration#getId()} for serialization purposes.</p>
                         * @return The data registration object
                         * @throws IllegalStateException If registrations can no longer
                         *      take place
                         * @throws IllegalArgumentException Various reasons
                         * @throws DataAlreadyRegisteredException If the classes and or builder
                         *      has already been registered
                         * @deprecated Use {#link #build()} instead
                         */
                        // @ts-ignore
                        buildAndRegister(container: org.spongepowered.api.plugin.PluginContainer): org.spongepowered.api.data.DataRegistration<T, I>
                        /**
                         * {@inheritDoc}
                         * All of the objects for the provided {@link DataRegistration}
                         * object, including the registration's
                         * {@link DataRegistration#getManipulatorClass()} for the
                         * {@link DataManipulator} and
                         * {@link DataRegistration#getImmutableManipulatorClass()}
                         * and {@link DataRegistration#getDataManipulatorBuilder()}
                         * object will also be registered.
                         * @return The data registration object
                         * @throws IllegalStateException If registrations can no longer take place
                         * @throws IllegalArgumentException Various reasons
                         * @throws DataAlreadyRegisteredException If the classes and or builder
                         *                                         has already been registered
                         */
                        // @ts-ignore
                        build(): org.spongepowered.api.data.DataRegistration<T, I>
                    }
                }
            }
        }
    }
}
