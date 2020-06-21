declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                /**
                 * Represents a union type.
                 * As of the {@link javax.lang.model.SourceVersion#RELEASE_7
                 * RELEASE_7} source version, union types can appear as the type
                 * of a multi-catch exception parameter.
                 * @since 1.7
                 */
                // @ts-ignore
                interface UnionType extends javax.lang.model.type.TypeMirror {
                    /**
                     * Return the alternatives comprising this union type.
                     * @return the alternatives comprising this union type.
                     */
                    // @ts-ignore
                    getAlternatives(): Array<any>
                }
            }
        }
    }
}
