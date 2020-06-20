declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                /**
                 * Represents a type variable.
                 * A type variable may be explicitly declared by a
                 * {@linkplain TypeParameterElement type parameter} of a
                 * type, method, or constructor.
                 * A type variable may also be declared implicitly, as by
                 * the capture conversion of a wildcard type argument
                 * (see chapter 5 of
                 * <cite>The Java&trade; Language Specification</cite>).
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see TypeParameterElement
                 * @since 1.6
                 */
                // @ts-ignore
                interface TypeVariable extends javax.lang.model.type.ReferenceType {
                    /**
                     * Returns the element corresponding to this type variable.
                     * @return the element corresponding to this type variable
                     */
                    // @ts-ignore
                    asElement(): javax.lang.model.element.Element
                    /**
                     * Returns the upper bound of this type variable.
                     * <p> If this type variable was declared with no explicit
                     * upper bounds, the result is {@code java.lang.Object}.
                     * If it was declared with multiple upper bounds,
                     * the result is an {@linkplain IntersectionType intersection type};
                     * individual bounds can be found by examining the result's
                     * {@linkplain IntersectionType#getBounds() bounds}.
                     * @return the upper bound of this type variable
                     */
                    // @ts-ignore
                    getUpperBound(): javax.lang.model.type.TypeMirror
                    /**
                     * Returns the lower bound of this type variable.  While a type
                     * parameter cannot include an explicit lower bound declaration,
                     * capture conversion can produce a type variable with a
                     * non-trivial lower bound.  Type variables otherwise have a
                     * lower bound of {@link NullType}.
                     * @return the lower bound of this type variable
                     */
                    // @ts-ignore
                    getLowerBound(): javax.lang.model.type.TypeMirror
                }
            }
        }
    }
}
