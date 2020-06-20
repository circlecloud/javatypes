declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    /**
                     * Represents a builder that can take a {@link DataContainer} and create a
                     * new instance of a {@link DataSerializable}. The builder should be a
                     * singleton and may not exist for every data serializable.
                     * <p>It is <strong>HIGHLY</strong> recommended to extend
                     * {@link AbstractDataBuilder} as it implements content updating</p>
                     * @param <T> The type of data serializable this builder can build
                     */
                    // @ts-ignore
                    interface DataBuilder<T extends org.spongepowered.api.data.DataSerializable> extends org.spongepowered.api.util.ResettableBuilder<T, org.spongepowered.api.data.persistence.DataBuilder<T>> {
                        /**
                         * Attempts to build the provided {@link DataSerializable} from the given
                         * {@link DataView}. If the {@link DataView} is invalid or
                         * missing necessary information to complete building the
                         * {@link DataSerializable}, {@link Optional#empty()} may be returned.
                         * @param container The container containing all necessary data
                         * @return The instance of the {#link DataSerializable}, if successful
                         * @throws InvalidDataException In the event that the builder is unable to
                         *      properly construct the data serializable from the data view
                         */
                        // @ts-ignore
                        build(container: org.spongepowered.api.data.DataView): java.util.Optional<T>
                        // @ts-ignore
                        reset(): org.spongepowered.api.data.persistence.DataBuilder<T>
                        // @ts-ignore
                        from(value: T extends org.spongepowered.api.data.DataSerializable): org.spongepowered.api.data.persistence.DataBuilder<T>
                    }
                }
            }
        }
    }
}
