declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Predicate that determines if the input string starts with the provided
                 * test string, case-insensitively.
                 */
                // @ts-ignore
                class StartsWithPredicate extends java.lang.Object implements java.util.function.Predicate<java.lang.String> {
                    /**
                     * Create an new predicate.
                     * @param test The string to test input against
                     */
                    // @ts-ignore
                    constructor(test: string)
                    // @ts-ignore
                    test(input: string): boolean
                }
            }
        }
    }
}
