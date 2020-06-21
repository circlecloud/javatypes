declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    /**
                     * A compatibility object to translate and translate any type of
                     * {@link Object} that is not a {@link DataSerializable}. Natively,
                     * {@link DataView} will attempt to locate a {@code DataTranslator}
                     * during {@link DataView#set(DataQuery, Object)}.
                     * @param <T> The type of object that this translator can handle
                     */
                    // @ts-ignore
                    interface DataTranslator<T> extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the {@link TypeToken} of this translator.
                         * @see TypeToken
                         * @return The type token for this translator
                         */
                        // @ts-ignore
                        getToken(): object
                        /**
                         * Attempts to translate the {@code T} object from the provided
                         * {@link DataView}.
                         * @param view The data view to translate the object from
                         * @return The deserialized object
                         * @throws InvalidDataException If the dataview contained invalid data
                         */
                        // @ts-ignore
                        translate(view: org.spongepowered.api.data.DataView): T
                        /**
                         * Serializes the provided object to a {@link DataContainer}.
                         * @param obj The object to translate
                         * @return The object serialized to a container
                         * @throws InvalidDataException If the desired object is not supported
                         *      for any reason
                         */
                        // @ts-ignore
                        translate(obj: T): org.spongepowered.api.data.DataContainer
                        /**
                         * Serializes the {@code T} object and applies the provided
                         * data to the provided {@link DataView} instead of creating
                         * a new {@link DataContainer}, reducing nested information.
                         * @param obj The object to serialize
                         * @param dataView The data view to serialize to
                         * @return The provided data view, for chaining
                         */
                        // @ts-ignore
                        addTo(obj: T, dataView: org.spongepowered.api.data.DataView): org.spongepowered.api.data.DataView
                    }
                }
            }
        }
    }
}
