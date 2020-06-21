declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace filter {
                    /**
                     * Type filter that is aware of traversing over hierarchy.
                     * <p>This filter is useful when matching needs to be made based on potentially the
                     * whole class/interface hierarchy. The algorithm employed uses a succeed-fast
                     * strategy: if at any time a match is declared, no further processing is
                     * carried out.
                     * @author Ramnivas Laddad
                     * @author Mark Fisher
                     * @since 2.5
                     */
                    // @ts-ignore
                    abstract class AbstractTypeHierarchyTraversingFilter extends java.lang.Object implements org.springframework.core.type.filter.TypeFilter {
                        // @ts-ignore
                        constructor(considerInherited: boolean, considerInterfaces: boolean)
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        public match(metadataReader: org.springframework.core.type.classreading.MetadataReader, metadataReaderFactory: org.springframework.core.type.classreading.MetadataReaderFactory): boolean
                        /**
                         * Override this to match self characteristics alone. Typically,
                         * the implementation will use a visitor to extract information
                         * to perform matching.
                         */
                        // @ts-ignore
                        matchSelf(metadataReader: org.springframework.core.type.classreading.MetadataReader): boolean
                        /**
                         * Override this to match on type name.
                         */
                        // @ts-ignore
                        matchClassName(className: java.lang.String | string): boolean
                        /**
                         * Override this to match on super type name.
                         */
                        // @ts-ignore
                        matchSuperClass(superClassName: java.lang.String | string): java.lang.Boolean
                        /**
                         * Override this to match on interface type name.
                         */
                        // @ts-ignore
                        matchInterface(interfaceName: java.lang.String | string): java.lang.Boolean
                    }
                }
            }
        }
    }
}
