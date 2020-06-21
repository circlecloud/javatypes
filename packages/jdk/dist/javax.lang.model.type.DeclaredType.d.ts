declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                /**
                 * Represents a declared type, either a class type or an interface type.
                 * This includes parameterized types such as {@code java.util.Set<String>}
                 * as well as raw types.
                 * <p> While a {@code TypeElement} represents a class or interface
                 * <i>element</i>, a {@code DeclaredType} represents a class
                 * or interface <i>type</i>, the latter being a use
                 * (or <i>invocation</i>) of the former.
                 * See {@link TypeElement} for more on this distinction.
                 * <p> The supertypes (both class and interface types) of a declared
                 * type may be found using the {@link
                 * Types#directSupertypes(TypeMirror)} method.  This returns the
                 * supertypes with any type arguments substituted in.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see TypeElement
                 * @since 1.6
                 */
                // @ts-ignore
                interface DeclaredType extends javax.lang.model.type.ReferenceType {
                    /**
                     * Returns the element corresponding to this type.
                     * @return the element corresponding to this type
                     */
                    // @ts-ignore
                    asElement(): javax.lang.model.element.Element
                    /**
                     * Returns the type of the innermost enclosing instance or a
                     * {@code NoType} of kind {@code NONE} if there is no enclosing
                     * instance.  Only types corresponding to inner classes have an
                     * enclosing instance.
                     * @return a type mirror for the enclosing type
                     * @jls 8.1.3 Inner Classes and Enclosing Instances
                     * @jls 15.9.2 Determining Enclosing Instances
                     */
                    // @ts-ignore
                    getEnclosingType(): javax.lang.model.type.TypeMirror
                    /**
                     * Returns the actual type arguments of this type.
                     * For a type nested within a parameterized type
                     * (such as {@code Outer<String>.Inner<Number>}), only the type
                     * arguments of the innermost type are included.
                     * @return the actual type arguments of this type, or an empty list
                     *            if none
                     */
                    // @ts-ignore
                    getTypeArguments(): Array<any>
                }
            }
        }
    }
}
