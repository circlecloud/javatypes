declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Interface representing an object whose value set can be merged with
             * that of a parent object.
             * @author Rob Harrop
             * @since 2.0
             * @see org.springframework.beans.factory.support.ManagedSet
             * @see org.springframework.beans.factory.support.ManagedList
             * @see org.springframework.beans.factory.support.ManagedMap
             * @see org.springframework.beans.factory.support.ManagedProperties
             */
            // @ts-ignore
            interface Mergeable {
                /**
                 * Is merging enabled for this particular instance?
                 */
                // @ts-ignore
                isMergeEnabled(): boolean
                /**
                 * Merge the current value set with that of the supplied object.
                 * <p>The supplied object is considered the parent, and values in
                 * the callee's value set must override those of the supplied object.
                 * @param parent the object to merge with
                 * @return the result of the merge operation
                 * @throws IllegalArgumentException if the supplied parent is {#code null}
                 * @throws IllegalStateException if merging is not enabled for this instance
                 *  (i.e. {#code mergeEnabled} equals {@code false}).
                 */
                // @ts-ignore
                merge(parent: java.lang.Object | any): any
            }
        }
    }
}
