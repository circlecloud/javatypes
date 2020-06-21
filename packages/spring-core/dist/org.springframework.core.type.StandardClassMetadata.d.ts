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
                    public getIntrospectedClass(): java.lang.Class<any>
                    // @ts-ignore
                    public getClassName(): string
                    // @ts-ignore
                    public isInterface(): boolean
                    // @ts-ignore
                    public isAnnotation(): boolean
                    // @ts-ignore
                    public isAbstract(): boolean
                    // @ts-ignore
                    public isFinal(): boolean
                    // @ts-ignore
                    public isIndependent(): boolean
                    // @ts-ignore
                    public getEnclosingClassName(): string
                    // @ts-ignore
                    public getSuperClassName(): string
                    // @ts-ignore
                    public getInterfaceNames(): string[]
                    // @ts-ignore
                    public getMemberClassNames(): string[]
                }
            }
        }
    }
}
