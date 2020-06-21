declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Tag class which represents a Spring-managed {@link Properties} instance
                     * that supports merging of parent/child definitions.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ManagedProperties extends java.util.Properties implements org.springframework.beans.Mergeable, org.springframework.beans.BeanMetadataElement {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the configuration source {@code Object} for this metadata element.
                         * <p>The exact type of the object will depend on the configuration mechanism used.
                         */
                        // @ts-ignore
                        public setSource(source: java.lang.Object | any): void
                        // @ts-ignore
                        public getSource(): any
                        /**
                         * Set whether merging should be enabled for this collection,
                         * in case of a 'parent' collection value being present.
                         */
                        // @ts-ignore
                        public setMergeEnabled(mergeEnabled: boolean): void
                        // @ts-ignore
                        public isMergeEnabled(): boolean
                        // @ts-ignore
                        public merge(parent: java.lang.Object | any): any
                    }
                }
            }
        }
    }
}
