declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Tag collection class used to hold managed Map values, which may
                     * include runtime bean references (to be resolved into bean objects).
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @since 27.05.2003
                     * @param <K> the key type
                     * @param <V> the value type
                     */
                    // @ts-ignore
                    class ManagedMap<K, V> extends java.util.LinkedHashMap<K, V> implements org.springframework.beans.Mergeable, org.springframework.beans.BeanMetadataElement {
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
                         * Set the default key type name (class name) to be used for this map.
                         */
                        // @ts-ignore
                        public setKeyTypeName(keyTypeName: java.lang.String | string): void
                        /**
                         * Return the default key type name (class name) to be used for this map.
                         */
                        // @ts-ignore
                        public getKeyTypeName(): string
                        /**
                         * Set the default value type name (class name) to be used for this map.
                         */
                        // @ts-ignore
                        public setValueTypeName(valueTypeName: java.lang.String | string): void
                        /**
                         * Return the default value type name (class name) to be used for this map.
                         */
                        // @ts-ignore
                        public getValueTypeName(): string
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
