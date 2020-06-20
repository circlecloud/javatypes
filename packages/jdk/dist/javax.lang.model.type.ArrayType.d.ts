declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                /**
                 * Represents an array type.
                 * A multidimensional array type is represented as an array type
                 * whose component type is also an array type.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @since 1.6
                 */
                // @ts-ignore
                interface ArrayType extends javax.lang.model.type.ReferenceType {
                    /**
                     * Returns the component type of this array type.
                     * @return the component type of this array type
                     */
                    // @ts-ignore
                    getComponentType(): javax.lang.model.type.TypeMirror
                }
            }
        }
    }
}
