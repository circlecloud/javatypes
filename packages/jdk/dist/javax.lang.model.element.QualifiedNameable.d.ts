declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
                /**
                 * A mixin interface for an element that has a qualified name.
                 * @author Joseph D. Darcy
                 * @since 1.7
                 */
                // @ts-ignore
                interface QualifiedNameable extends javax.lang.model.element.Element {
                    /**
                     * Returns the fully qualified name of an element.
                     * @return the fully qualified name of an element
                     */
                    // @ts-ignore
                    getQualifiedName(): javax.lang.model.element.Name
                }
            }
        }
    }
}
