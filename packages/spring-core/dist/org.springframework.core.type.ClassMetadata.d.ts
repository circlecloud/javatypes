declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                /**
                 * Interface that defines abstract metadata of a specific class,
                 * in a form that does not require that class to be loaded yet.
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see StandardClassMetadata
                 * @see org.springframework.core.type.classreading.MetadataReader#getClassMetadata()
                 * @see AnnotationMetadata
                 */
                // @ts-ignore
                interface ClassMetadata {
                    /**
                     * Return the name of the underlying class.
                     */
                    // @ts-ignore
                    getClassName(): string
                    /**
                     * Return whether the underlying class represents an interface.
                     */
                    // @ts-ignore
                    isInterface(): boolean
                    /**
                     * Return whether the underlying class represents an annotation.
                     * @since 4.1
                     */
                    // @ts-ignore
                    isAnnotation(): boolean
                    /**
                     * Return whether the underlying class is marked as abstract.
                     */
                    // @ts-ignore
                    isAbstract(): boolean
                    /**
                     * Return whether the underlying class represents a concrete class,
                     * i.e. neither an interface nor an abstract class.
                     */
                    // @ts-ignore
                    isConcrete(): boolean
                    /**
                     * Return whether the underlying class is marked as 'final'.
                     */
                    // @ts-ignore
                    isFinal(): boolean
                    /**
                     * Determine whether the underlying class is independent, i.e. whether
                     * it is a top-level class or a nested class (static inner class) that
                     * can be constructed independently from an enclosing class.
                     */
                    // @ts-ignore
                    isIndependent(): boolean
                    /**
                     * Return whether the underlying class is declared within an enclosing
                     * class (i.e. the underlying class is an inner/nested class or a
                     * local class within a method).
                     * <p>If this method returns {@code false}, then the underlying
                     * class is a top-level class.
                     */
                    // @ts-ignore
                    hasEnclosingClass(): boolean
                    /**
                     * Return the name of the enclosing class of the underlying class,
                     * or {@code null} if the underlying class is a top-level class.
                     */
                    // @ts-ignore
                    getEnclosingClassName(): string
                    /**
                     * Return whether the underlying class has a super class.
                     */
                    // @ts-ignore
                    hasSuperClass(): boolean
                    /**
                     * Return the name of the super class of the underlying class,
                     * or {@code null} if there is no super class defined.
                     */
                    // @ts-ignore
                    getSuperClassName(): string
                    /**
                     * Return the names of all interfaces that the underlying class
                     * implements, or an empty array if there are none.
                     */
                    // @ts-ignore
                    getInterfaceNames(): string[]
                    /**
                     * Return the names of all classes declared as members of the class represented by
                     * this ClassMetadata object. This includes public, protected, default (package)
                     * access, and private classes and interfaces declared by the class, but excludes
                     * inherited classes and interfaces. An empty array is returned if no member classes
                     * or interfaces exist.
                     * @since 3.1
                     */
                    // @ts-ignore
                    getMemberClassNames(): string[]
                }
            }
        }
    }
}
