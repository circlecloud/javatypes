declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Utility for working with {@code Optional&lt;Boolean&gt;}s.
                 * <p>This also saves memory by holding three static instances of
                 * {@code Optional&lt;Boolean&gt;}, which represents the possible states it can
                 * have.</p>
                 */
                // @ts-ignore
                class OptBool extends java.lang.Object {
                    /**
                     * The true value.
                     */
                    // @ts-ignore
                    readonly TRUE: java.util.Optional<java.lang.Boolean>
                    /**
                     * The false value.
                     */
                    // @ts-ignore
                    readonly FALSE: java.util.Optional<java.lang.Boolean>
                    /**
                     * The absent value.
                     * <p>Also a shorthand for constructing instances
                     * with {@code Optional.&lt;Boolean&gt;absent()}.</p>
                     */
                    // @ts-ignore
                    readonly ABSENT: java.util.Optional<java.lang.Boolean>
                    /**
                     * Constructs a new {@code Optional&lt;Boolean&gt;} from the given boolean.
                     * @param bool The boolean
                     * @return The constructed Optional
                     */
                    // @ts-ignore
                    of(bool: boolean): java.util.Optional<java.lang.Boolean>
                    /**
                     * Constructs a new {@code Optional&lt;Boolean&gt;} from the given {@link Boolean}.
                     * @param bool The boolean
                     * @return The constructed Optional, or {#link Optional#empty()}
                     */
                    // @ts-ignore
                    of(bool: java.lang.Boolean): java.util.Optional<java.lang.Boolean>
                    /**
                     * Coerces the given {@code Optional&lt;Boolean&gt;} into one of the three
                     * stored states.
                     * @param bool The boolean
                     * @return The constructed Optional, or {#link Optional#empty()}
                     */
                    // @ts-ignore
                    of(bool: java.util.Optional<java.lang.Boolean>): java.util.Optional<java.lang.Boolean>
                }
            }
        }
    }
}
