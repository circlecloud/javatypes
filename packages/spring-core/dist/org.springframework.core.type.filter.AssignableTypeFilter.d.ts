declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace filter {
                    /**
                     * A simple filter which matches classes that are assignable to a given type.
                     * @author Rod Johnson
                     * @author Mark Fisher
                     * @author Ramnivas Laddad
                     * @since 2.5
                     */
                    // @ts-ignore
                    class AssignableTypeFilter extends org.springframework.core.type.filter.AbstractTypeHierarchyTraversingFilter {
                        /**
                         * Create a new AssignableTypeFilter for the given type.
                         * @param targetType the type to match
                         */
                        // @ts-ignore
                        constructor(targetType: java.lang.Class<any>)
                        /**
                         * Return the {@code type} that this instance is using to filter candidates.
                         * @since 5.0
                         */
                        // @ts-ignore
                        public getTargetType(): java.lang.Class<any>
                        // @ts-ignore
                        matchClassName(className: java.lang.String | string): boolean
                        // @ts-ignore
                        matchSuperClass(superClassName: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        matchInterface(interfaceName: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        matchTargetType(typeName: java.lang.String | string): java.lang.Boolean
                    }
                }
            }
        }
    }
}
