declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
                /**
                 * A mixin interface for an element that has type parameters.
                 * @author Joseph D. Darcy
                 * @since 1.7
                 */
                // @ts-ignore
                interface Parameterizable extends javax.lang.model.element.Element {
                    /**
                     * Returns the formal type parameters of the type element in
                     * declaration order.
                     * @return the formal type parameters, or an empty list
                     *  if there are none
                     */
                    // @ts-ignore
                    getTypeParameters(): java.util.List<? extends javax.lang.model.element.TypeParameterElement>
                }
            }
        }
    }
}
