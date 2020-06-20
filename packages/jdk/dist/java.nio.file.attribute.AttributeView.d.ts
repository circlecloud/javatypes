declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * An object that provides a read-only or updatable <em>view</em> of non-opaque
                 * values associated with an object in a filesystem. This interface is extended
                 * or implemented by specific attribute views that define the attributes
                 * supported by the view. A specific attribute view will typically define
                 * type-safe methods to read or update the attributes that it supports.
                 * @since 1.7
                 */
                // @ts-ignore
                interface AttributeView {
                    /**
                     * Returns the name of the attribute view.
                     * @return the name of the attribute view
                     */
                    // @ts-ignore
                    name(): java.lang.String
                }
            }
        }
    }
}
