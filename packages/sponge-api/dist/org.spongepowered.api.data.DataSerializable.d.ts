declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * Represents an object that can be represented by a {@link DataContainer}.
                 * <p>DataContainers received from {@link DataSerializable#toContainer()}
                 * should be considered to be copies of the original data, and therefore,
                 * thread safe.</p>
                 */
                // @ts-ignore
                interface DataSerializable {
                    /**
                     * Gets the content version of this {@link DataSerializable}. The version
                     * may differ between instances of plugins and implementations such that
                     * the {@link DataView} from {@link #toContainer()} may include different
                     * information, or remove other information as they are no longer deemed
                     * necessary. The version goes hand in hand with {@link DataContentUpdater}
                     * as it is required when there exists any {@link DataView} of this
                     * {@link DataSerializable} with an "older" version.
                     * @return The version of the content being serialized
                     */
                    // @ts-ignore
                    getContentVersion(): number /*int*/
                    /**
                     * Serializes this object into a comprehensible {@link DataContainer}.
                     * @return A newly created DataContainer
                     */
                    // @ts-ignore
                    toContainer(): org.spongepowered.api.data.DataContainer
                }
            }
        }
    }
}
