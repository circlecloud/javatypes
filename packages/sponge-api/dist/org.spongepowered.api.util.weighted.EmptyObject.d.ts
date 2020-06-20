declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * Represents an entry in a table which has no associated object. Used to have
                     * rolls which give nothing.
                     * @param <T> The type of object of this entries table
                     */
                    // @ts-ignore
                    class EmptyObject<T> extends org.spongepowered.api.util.weighted.TableEntry<T> implements org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a new {@link EmptyObject} with the given weight.
                         * @param weight The weight of this object
                         */
                        // @ts-ignore
                        constructor(weight: number /*double*/)
                        // @ts-ignore
                        getContentVersion(): int
                        // @ts-ignore
                        toContainer(): org.spongepowered.api.data.DataContainer
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
