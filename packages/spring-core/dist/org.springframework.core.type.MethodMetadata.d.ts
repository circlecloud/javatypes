declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                /**
                 * Interface that defines abstract access to the annotations of a specific
                 * class, in a form that does not require that class to be loaded yet.
                 * @author Juergen Hoeller
                 * @author Mark Pollack
                 * @author Chris Beams
                 * @author Phillip Webb
                 * @since 3.0
                 * @see StandardMethodMetadata
                 * @see AnnotationMetadata#getAnnotatedMethods
                 * @see AnnotatedTypeMetadata
                 */
                // @ts-ignore
                interface MethodMetadata extends org.springframework.core.type.AnnotatedTypeMetadata {
                    /**
                     * Return the name of the method.
                     */
                    // @ts-ignore
                    getMethodName(): string
                    /**
                     * Return the fully-qualified name of the class that declares this method.
                     */
                    // @ts-ignore
                    getDeclaringClassName(): string
                    /**
                     * Return the fully-qualified name of this method's declared return type.
                     * @since 4.2
                     */
                    // @ts-ignore
                    getReturnTypeName(): string
                    /**
                     * Return whether the underlying method is effectively abstract:
                     * i.e. marked as abstract on a class or declared as a regular,
                     * non-default method in an interface.
                     * @since 4.2
                     */
                    // @ts-ignore
                    isAbstract(): boolean
                    /**
                     * Return whether the underlying method is declared as 'static'.
                     */
                    // @ts-ignore
                    isStatic(): boolean
                    /**
                     * Return whether the underlying method is marked as 'final'.
                     */
                    // @ts-ignore
                    isFinal(): boolean
                    /**
                     * Return whether the underlying method is overridable,
                     * i.e. not marked as static, final or private.
                     */
                    // @ts-ignore
                    isOverridable(): boolean
                }
            }
        }
    }
}
