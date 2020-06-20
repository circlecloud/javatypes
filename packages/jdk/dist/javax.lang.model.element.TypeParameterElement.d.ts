declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
                /**
                 * Represents a formal type parameter of a generic class, interface, method,
                 * or constructor element.
                 * A type parameter declares a {@link TypeVariable}.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see TypeVariable
                 * @since 1.6
                 */
                // @ts-ignore
                interface TypeParameterElement extends javax.lang.model.element.Element {
                    /**
                     * Returns the generic class, interface, method, or constructor that is
                     * parameterized by this type parameter.
                     * @return the generic class, interface, method, or constructor that is
                     *  parameterized by this type parameter
                     */
                    // @ts-ignore
                    getGenericElement(): javax.lang.model.element.Element
                    /**
                     * Returns the bounds of this type parameter.
                     * These are the types given by the {@code extends} clause
                     * used to declare this type parameter.
                     * If no explicit {@code extends} clause was used,
                     * then {@code java.lang.Object} is considered to be the sole bound.
                     * @return the bounds of this type parameter, or an empty list if
                     *  there are none
                     */
                    // @ts-ignore
                    getBounds(): java.util.List<? extends javax.lang.model.type.TypeMirror>
                    /**
                     * Returns the {@linkplain TypeParameterElement#getGenericElement generic element} of this type parameter.
                     * @return the generic element of this type parameter
                     */
                    // @ts-ignore
                    getEnclosingElement(): javax.lang.model.element.Element
                }
            }
        }
    }
}
