declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * A manager of the overall Data API. This handles the registration of
                 * {@link DataSerializable}s and their {@link DataBuilder}s,
                 * {@link DataManipulator}s and their respective {@link DataManipulatorBuilder}s,
                 * {@link ImmutableDataManipulator}s and their respective
                 * {@link ImmutableDataManipulatorBuilder}s, etc.
                 * <p>Note that this manager powers not just serialization and deserialization,
                 * but also powers a majority of the Data API.</p>
                 */
                // @ts-ignore
                interface DataManager {
                    /**
                     * Registers a {@link DataBuilder} that will dynamically build
                     * the given {@link DataSerializable} from a {@link DataContainer}.
                     * <p>Builders may not always exist for a given {@link DataSerializable},
                     * nor is it guaranteed that a provided builder will function with all
                     * {@link DataContainer}s.
                     * </p>
                     * @param clazz The class of the {#link DataSerializable}
                     * @param builder The builder that can build the data serializable
                     * @param <T> The type of data serializable
                     */
                    // @ts-ignore
                    registerBuilder<T extends org.spongepowered.api.data.DataSerializable>(clazz: java.lang.Class<T>, builder: org.spongepowered.api.data.persistence.DataBuilder<T>): void
                    /**
                     * Registers a {@link DataContentUpdater} for the desired
                     * {@link DataSerializable} such that any versioned data may be updated to
                     * newer versions for the most up to date {@link DataBuilder}.
                     * @param clazz The data serializable class
                     * @param updater The updater
                     * @param <T> The type of DataSerializable
                     */
                    // @ts-ignore
                    registerContentUpdater<T extends org.spongepowered.api.data.DataSerializable>(clazz: java.lang.Class<T>, updater: org.spongepowered.api.data.persistence.DataContentUpdater): void
                    /**
                     * Gets a wrapped fake {@link DataContentUpdater} that may wrap several
                     * {@link DataContentUpdater}s to translate versioned data from the desired
                     * {@code fromVersion} to the {@code toVersion}. If the version jump is too
                     * great or a {@link DataContentUpdater} has not been registered to cover
                     * the complete jump, {@link Optional#empty()} may be returned.
                     * @param clazz The data serializable class
                     * @param fromVersion The version converting from
                     * @param toVersion The version converting to
                     * @param <T> The type of data serializable
                     * @return The content updater, if available
                     */
                    // @ts-ignore
                    getWrappedContentUpdater<T extends org.spongepowered.api.data.DataSerializable>(clazz: java.lang.Class<T>, fromVersion: number /*int*/, toVersion: number /*int*/): java.util.Optional<org.spongepowered.api.data.persistence.DataContentUpdater>
                    /**
                     * Attempts to retrieve the {@link DataBuilder} for the desired
                     * {@link DataSerializable} class.
                     * <p>Builders may not always exist for a given {@link DataSerializable},
                     * nor is it guaranteed that a provided builder will function with all
                     * {@link DataContainer}s.</p>
                     * @param clazz The class of the data serializable
                     * @param <T> The type of data serializable
                     * @return The builder, if available
                     */
                    // @ts-ignore
                    getBuilder<T extends org.spongepowered.api.data.DataSerializable>(clazz: java.lang.Class<T>): java.util.Optional<org.spongepowered.api.data.persistence.DataBuilder<T>>
                    /**
                     * Attempts to translate an instance of the {@link DataSerializable} from
                     * the provided {@link DataView}. If there is no {@link DataBuilder}
                     * registered for the provided {@link DataSerializable}, then
                     * {@link Optional#empty()} may be returned.
                     * @param clazz The class of the data serializable
                     * @param dataView The data view containing raw data
                     * @param <T> The type of data serializable
                     * @return The data serializable, if available
                     */
                    // @ts-ignore
                    deserialize<T extends org.spongepowered.api.data.DataSerializable>(clazz: java.lang.Class<T>, dataView: org.spongepowered.api.data.DataView): java.util.Optional<T>
                    /**
                     * Registers the given {@link ImmutableDataHolder} class with it's
                     * associated {@link ImmutableDataBuilder}. The builder can be used to
                     * create new instances of the given {@link ImmutableDataHolder} for data
                     * retrieval, data representation, etc.
                     * @param holderClass The class of the immutable data holder
                     * @param builder The builder instance of the immutable data holder
                     * @param <T> The type of immutable data holder
                     * @param <B> The type of immutable data builder
                     */
                    // @ts-ignore
                    register<T extends org.spongepowered.api.data.ImmutableDataHolder<T>, B extends org.spongepowered.api.data.ImmutableDataBuilder<T, B>>(holderClass: java.lang.Class<T>, builder: B): void
                    /**
                     * Registers a legacy {@code id} that is used by a previous version of
                     * {@link DataRegistration} from a plugin such that the custom data can
                     * be retained, while not being lost.
                     * @param legacyId The legacy id
                     * @param registration The registration object successfully created
                     */
                    // @ts-ignore
                    registerLegacyManipulatorIds(legacyId: java.lang.String | string, registration: org.spongepowered.api.data.DataRegistration<any, any>): void
                    /**
                     * Attempts to retrieve the builder for the given
                     * {@link ImmutableDataHolder}.
                     * <p>If the {@link ImmutableDataHolder} was not registered, multiple
                     * systems could fail to retrieve specific data.</p>
                     * @param holderClass The immutable data holder class
                     * @param <T> The type of immutable data holder
                     * @param <B> The type of immutable data builder
                     * @return The builder, if available
                     */
                    // @ts-ignore
                    getImmutableBuilder<T extends org.spongepowered.api.data.ImmutableDataHolder<T>, B extends org.spongepowered.api.data.ImmutableDataBuilder<T, B>>(holderClass: java.lang.Class<T>): java.util.Optional<B>
                    /**
                     * Attempts to retrieve the builder for the given {@link DataManipulator}.
                     * <p>If the {@link DataManipulator} was not registered, multiple systems
                     * could fail to retrieve specific data.</p>
                     * @param manipulatorClass The manipulator class
                     * @param <T> The type of manipulator
                     * @param <I> The type of immutable manipulator
                     * @return The builder, if available
                     */
                    // @ts-ignore
                    getManipulatorBuilder<T extends org.spongepowered.api.data.manipulator.DataManipulator<T, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, T>>(manipulatorClass: java.lang.Class<T>): java.util.Optional<org.spongepowered.api.data.manipulator.DataManipulatorBuilder<T, I>>
                    /**
                     * Attempts to retrieve the builder for the given
                     * {@link ImmutableDataManipulator}.
                     * <p>If the {@link ImmutableDataManipulator} was not registered, multiple
                     * systems could fail to retrieve specific data.</p>
                     * @param immutableManipulatorClass The immutable manipulator class
                     * @param <T> The type of DataManipulator
                     * @param <I> The type of ImmutableDataManipulator
                     * @return The DataManipulatorBuilder, if available
                     */
                    // @ts-ignore
                    getImmutableManipulatorBuilder<T extends org.spongepowered.api.data.manipulator.DataManipulator<T, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, T>>(immutableManipulatorClass: java.lang.Class<I>): java.util.Optional<org.spongepowered.api.data.manipulator.DataManipulatorBuilder<T, I>>
                    /**
                     * Registers a {@link DataTranslator} for the desired class.
                     * @param objectClass The class of the object type being managed
                     * @param translator The translator for the desired class object
                     * @param <T> The type of object
                     * @deprecated Use the event {#code org.spongepowered.api.event.game.GameRegistryEvent.Register&lt;DataTranslator&lt;?&gt;&gt;} instead
                     */
                    // @ts-ignore
                    registerTranslator<T>(objectClass: java.lang.Class<T>, translator: org.spongepowered.api.data.persistence.DataTranslator<T>): void
                    /**
                     * Gets the desired {@link DataTranslator} for the provided class.
                     * @param objectClass The class of the object
                     * @param <T> The type of object
                     * @return The data translator, if available
                     */
                    // @ts-ignore
                    getTranslator<T>(objectClass: java.lang.Class<T>): java.util.Optional<org.spongepowered.api.data.persistence.DataTranslator<T>>
                    /**
                     * Gets all {@link Class}es of all {@link DataManipulator}s registered for
                     * the provided {@link PluginContainer}. The provided {@link Collection} is
                     * considered immutable and can not be modified.
                     * @param container The plugin container for registered classes
                     * @return The collection of all registered data manipulator classes
                     */
                    // @ts-ignore
                    getAllRegistrationsFor(container: org.spongepowered.api.plugin.PluginContainer): Array<java.lang.Class<any>>
                    /**
                     * Creates a new {@link DataContainer} with a default
                     * {@link org.spongepowered.api.data.DataView.SafetyMode} of
                     * {@link org.spongepowered.api.data.DataView.SafetyMode#ALL_DATA_CLONED}.
                     * @return A new data container
                     */
                    // @ts-ignore
                    createContainer(): org.spongepowered.api.data.DataContainer
                    /**
                     * Creates a new {@link DataContainer} with the provided
                     * {@link org.spongepowered.api.data.DataView.SafetyMode}.
                     * @param safety The safety mode to use
                     * @see org.spongepowered.api.data.DataView.SafetyMode
                     * @return A new data container with the provided safety mode
                     */
                    // @ts-ignore
                    createContainer(safety: org.spongepowered.api.data.DataView.SafetyMode): org.spongepowered.api.data.DataContainer
                }
            }
        }
    }
}
