declare namespace org {
    namespace springframework {
        namespace util {
            namespace AutoPopulatingList {
                /**
                 * Factory interface for creating elements for an index-based access
                 * data structure such as a {@link java.util.List}.
                 * @param <E> the element type
                 */
                // @ts-ignore
                interface ElementFactory<E> {
                    /**
                     * Create the element for the supplied index.
                     * @return the element object
                     * @throws ElementInstantiationException if the instantiation process failed
                     *  (any exception thrown by a target constructor should be propagated as-is)
                     */
                    // @ts-ignore
                    createElement(index: number /*int*/): E
                }
            }
        }
    }
}
