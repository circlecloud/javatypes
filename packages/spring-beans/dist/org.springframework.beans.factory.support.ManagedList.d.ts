declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Tag collection class used to hold managed List elements, which may
                     * include runtime bean references (to be resolved into bean objects).
                     * @author Rod Johnson
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 27.05.2003
                     * @param <E> the element type
                     */
                    // @ts-ignore
                    class ManagedList<E> extends java.util.ArrayList<E> implements org.springframework.beans.Mergeable, org.springframework.beans.BeanMetadataElement {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(initialCapacity: number /*int*/)
                        /**
                         * Set the configuration source {@code Object} for this metadata element.
                         * <p>The exact type of the object will depend on the configuration mechanism used.
                         */
                        // @ts-ignore
                        setSource(source: any): void
                        // @ts-ignore
                        getSource(): java.lang.Object
                        /**
                         * Set the default element type name (class name) to be used for this list.
                         */
                        // @ts-ignore
                        setElementTypeName(elementTypeName: string): void
                        /**
                         * Return the default element type name (class name) to be used for this list.
                         */
                        // @ts-ignore
                        getElementTypeName(): java.lang.String
                        /**
                         * Set whether merging should be enabled for this collection,
                         * in case of a 'parent' collection value being present.
                         */
                        // @ts-ignore
                        setMergeEnabled(mergeEnabled: boolean): void
                        // @ts-ignore
                        isMergeEnabled(): boolean
                        // @ts-ignore
                        merge(parent: any): java.util.List<E>
                    }
                }
            }
        }
    }
}
