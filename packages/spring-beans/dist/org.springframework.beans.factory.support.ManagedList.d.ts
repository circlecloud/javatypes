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
                        public setSource(source: java.lang.Object | any): void
                        // @ts-ignore
                        public getSource(): any
                        /**
                         * Set the default element type name (class name) to be used for this list.
                         */
                        // @ts-ignore
                        public setElementTypeName(elementTypeName: java.lang.String | string): void
                        /**
                         * Return the default element type name (class name) to be used for this list.
                         */
                        // @ts-ignore
                        public getElementTypeName(): string
                        /**
                         * Set whether merging should be enabled for this collection,
                         * in case of a 'parent' collection value being present.
                         */
                        // @ts-ignore
                        public setMergeEnabled(mergeEnabled: boolean): void
                        // @ts-ignore
                        public isMergeEnabled(): boolean
                        // @ts-ignore
                        public merge(parent: java.lang.Object | any): Array<E>
                    }
                }
            }
        }
    }
}
