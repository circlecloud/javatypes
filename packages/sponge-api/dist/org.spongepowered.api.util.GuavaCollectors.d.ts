declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * A set of collectors to allow interoperability between immutable guava
                 * collections and the JDK 8 Streams API.
                 * @deprecated Use methods provided by Guava
                 */
                // @ts-ignore
                class GuavaCollectors extends java.lang.Object {
                    /**
                     * Collect the values from a stream to an {@link ImmutableList}.
                     * @param <T> The type of elements contained by the list
                     * @return The appropriate collector
                     * @deprecated Use {#link ImmutableList#toImmutableList()}
                     */
                    // @ts-ignore
                    toImmutableList<T>(): java.util.stream.Collector<T, <any>, <any>>
                    /**
                     * Collect the values from a stream to an {@link ImmutableSet}.
                     * @param <T> The type of elements contained in the set
                     * @return The appropriate collector
                     * @deprecated Use {#link ImmutableSet#toImmutableSet()}
                     */
                    // @ts-ignore
                    toImmutableSet<T>(): java.util.stream.Collector<T, <any>, <any>>
                }
            }
        }
    }
}
