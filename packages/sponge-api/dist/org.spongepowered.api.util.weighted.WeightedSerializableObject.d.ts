declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * An entry which contains an object with the added restriction that the object
                     * be serializable.
                     * @param <T> The entry type
                     */
                    // @ts-ignore
                    class WeightedSerializableObject<T extends org.spongepowered.api.data.DataSerializable> extends org.spongepowered.api.util.weighted.WeightedObject<T> implements org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a new {@link WeightedSerializableObject} with the provided
                         * {@link DataSerializable}.
                         * @param object The serializable object
                         * @param weight The weight
                         */
                        // @ts-ignore
                        constructor(object: T extends org.spongepowered.api.data.DataSerializable, weight: number /*int*/)
                        // @ts-ignore
                        toString(): java.lang.String
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        getContentVersion(): int
                        // @ts-ignore
                        toContainer(): org.spongepowered.api.data.DataContainer
                    }
                }
            }
        }
    }
}
