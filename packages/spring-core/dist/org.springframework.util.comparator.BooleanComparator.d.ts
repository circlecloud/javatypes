declare namespace org {
    namespace springframework {
        namespace util {
            namespace comparator {
                /**
                 * A {@link Comparator} for {@link Boolean} objects that can sort either
                 * {@code true} or {@code false} first.
                 * @author Keith Donald
                 * @since 1.2.2
                 */
                // @ts-ignore
                class BooleanComparator extends java.lang.Object implements java.util.Comparator<java.lang.Boolean>, java.io.Serializable {
                    /**
                     * Create a BooleanComparator that sorts boolean values based on
                     * the provided flag.
                     * <p>Alternatively, you can use the default shared instances:
                     * {@code BooleanComparator.TRUE_LOW} and
                     * {@code BooleanComparator.TRUE_HIGH}.
                     * @param trueLow whether to treat true as lower or higher than false
                     * @see #TRUE_LOW
                     * @see #TRUE_HIGH
                     */
                    // @ts-ignore
                    constructor(trueLow: boolean)
                    /**
                     * A shared default instance of this comparator,
                     * treating {@code true} lower than {@code false}.
                     */
                    // @ts-ignore
                    readonly TRUE_LOW: org.springframework.util.comparator.BooleanComparator
                    /**
                     * A shared default instance of this comparator,
                     * treating {@code true} higher than {@code false}.
                     */
                    // @ts-ignore
                    readonly TRUE_HIGH: org.springframework.util.comparator.BooleanComparator
                    // @ts-ignore
                    compare(v1: java.lang.Boolean, v2: java.lang.Boolean): int
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
