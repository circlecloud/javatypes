declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                /**
                 * {@link ClassMetadata} implementation that uses standard reflection
                 * to introspect a given {@code Class}.
                 * @author Juergen Hoeller
                 * @since 2.5
                 */
                // @ts-ignore
                class StandardClassMetadata extends java.lang.Object implements org.springframework.core.type.ClassMetadata {
                    /**
                     * Create a new StandardClassMetadata wrapper for the given Class.
                     * @param introspectedClass the Class to introspect
                     * @deprecated since 5.2 in favor of {#link StandardAnnotationMetadata}
                     */
                    // @ts-ignore
                    constructor(introspectedClass: java.lang.Class<any>)
                    /**
                     * Return the underlying Class.
                     */
                    // @ts-ignore
                    getIntrospectedClass(): java.lang.Class<?>
                    // @ts-ignore
                    getClassName(): java.lang.String
                    // @ts-ignore
                    isInterface(): boolean
                    // @ts-ignore
                    isAnnotation(): boolean
                    // @ts-ignore
                    isAbstract(): boolean
                    // @ts-ignore
                    isFinal(): boolean
                    // @ts-ignore
                    isIndependent(): boolean
                    // @ts-ignore
                    getEnclosingClassName(): java.lang.String
                    // @ts-ignore
                    getSuperClassName(): java.lang.String
                    // @ts-ignore
                    getInterfaceNames(): java.lang.String[]
                    // @ts-ignore
                    getMemberClassNames(): java.lang.String[]
                }
            }
        }
    }
}
