declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * An entry which contains an object.
                     * @param <T> The entry type
                     */
                    // @ts-ignore
                    class WeightedObject<T> extends org.spongepowered.api.util.weighted.TableEntry<T> {
                        /**
                         * Creates a new {@link WeightedObject} of the provided
                         * {@code object} and {@code weight}.
                         * @param obj The object
                         * @param weight The weight of the object
                         */
                        // @ts-ignore
                        constructor(obj: T, weight: number /*double*/)
                        /**
                         * Gets the entry contained in this entry.
                         * @return The object
                         */
                        // @ts-ignore
                        get(): T
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
