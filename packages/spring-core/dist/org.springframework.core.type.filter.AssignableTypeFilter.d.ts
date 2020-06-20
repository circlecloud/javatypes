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
                        getTargetType(): java.lang.Class<?>
                        // @ts-ignore
                        matchClassName(className: string): boolean
                        // @ts-ignore
                        matchSuperClass(superClassName: string): java.lang.Boolean
                        // @ts-ignore
                        matchInterface(interfaceName: string): java.lang.Boolean
                        // @ts-ignore
                        matchTargetType(typeName: string): java.lang.Boolean
                    }
                }
            }
        }
    }
}
