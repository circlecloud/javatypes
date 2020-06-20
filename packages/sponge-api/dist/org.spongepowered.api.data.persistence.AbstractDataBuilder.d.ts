declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    /**
                     * An abstract implementation of {@link DataBuilder} that pre-defines all of
                     * the necessary "content update" implementation required for content
                     * versioning. Note that the builder itself is versioned to ensure that
                     * content versioning is appropriately handled. It is highly recommended to
                     * extend this class to implement {@link DataManipulatorBuilder} and implement
                     * {@link DataContentUpdater}s as necessary for future upgradeability of
                     * custom content.
                     * @param <T> The type of DataSerializable
                     */
                    // @ts-ignore
                    class AbstractDataBuilder<T extends org.spongepowered.api.data.DataSerializable> extends java.lang.Object implements org.spongepowered.api.data.persistence.DataBuilder<T> {
                        // @ts-ignore
                        constructor(requiredClass: java.lang.Class<T>, supportedVersion: number /*int*/)
                        /**
                         * Builds the currently {@link #supportedVersion} variant of the intended
                         * {@link DataSerializable}, such that all content upgrades have already
                         * been handled by {@link #build(DataView)}. This otherwise follows the
                         * same contract as {@link DataBuilder#build(DataView)}.
                         * @param container The container with data to build from
                         * @return The deserialized data serializable, if possible
                         * @throws InvalidDataException If there's issues of invalid data formats
                         *      or invalid data
                         */
                        // @ts-ignore
                        abstract buildContent(container: org.spongepowered.api.data.DataView): java.util.Optional<T>
                        // @ts-ignore
                        build(container: org.spongepowered.api.data.DataView): java.util.Optional<T>
                    }
                }
            }
        }
    }
}
