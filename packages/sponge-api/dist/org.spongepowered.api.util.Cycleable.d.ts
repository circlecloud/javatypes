declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Represents a type of {@link Enum} or pseudo enum, such as a
                 * {@link CatalogType}, that can be "cycled" for the "next" value. The uses are
                 * varying, but usually related to cycling {@link BlockState}s. Note that
                 * {@link Cycleable} is <b>NOT</b> intended to cycle between "types" that have
                 * no particular ordering, such as {@link DyeColor}, {@link BrickType}, etc.
                 * due to their non-ordered nature. Applying an ordering on such types is not
                 * recommended as there is no logic to a particular ordering, except that of
                 * which they are registered.
                 * @param <T> The type of cycleable for type reference
                 */
                // @ts-ignore
                interface Cycleable<T extends org.spongepowered.api.util.Cycleable<T>> {
                    /**
                     * Gets the "next" {@link Cycleable} instance to be considered
                     * for cycling.
                     * @return The next value
                     */
                    // @ts-ignore
                    cycleNext(): T
                }
            }
        }
    }
}
