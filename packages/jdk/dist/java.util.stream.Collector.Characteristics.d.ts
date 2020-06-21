declare namespace java {
    namespace util {
        namespace stream {
            namespace Collector {
                /**
                 * Characteristics indicating properties of a {@code Collector}, which can
                 * be used to optimize reduction implementations.
                 */
                // @ts-ignore
                class Characteristics extends java.lang.Enum<java.util.stream.Collector.Characteristics> {
                    /**
                     * Indicates that this collector is <em>concurrent</em>, meaning that
                     * the result container can support the accumulator function being
                     * called concurrently with the same result container from multiple
                     * threads.
                     * <p>If a {@code CONCURRENT} collector is not also {@code UNORDERED},
                     * then it should only be evaluated concurrently if applied to an
                     * unordered data source.
                     */
                    // @ts-ignore
                    readonly CONCURRENT: java.util.stream.Collector.Characteristics
                    /**
                     * Indicates that the collection operation does not commit to preserving
                     * the encounter order of input elements.  (This might be true if the
                     * result container has no intrinsic order, such as a {@link Set}.)
                     */
                    // @ts-ignore
                    readonly UNORDERED: java.util.stream.Collector.Characteristics
                    /**
                     * Indicates that the finisher function is the identity function and
                     * can be elided.  If set, it must be the case that an unchecked cast
                     * from A to R will succeed.
                     */
                    // @ts-ignore
                    readonly IDENTITY_FINISH: java.util.stream.Collector.Characteristics
                    // @ts-ignore
                    values(): java.util.stream.Collector.Characteristics[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): java.util.stream.Collector.Characteristics
                }
            }
        }
    }
}
