declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                /**
                 * The kind of a type mirror.
                 * <p>Note that it is possible additional type kinds will be added to
                 * accommodate new, currently unknown, language structures added to
                 * future versions of the Java&trade; programming language.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see TypeMirror
                 * @since 1.6
                 */
                // @ts-ignore
                class TypeKind extends java.lang.Enum<javax.lang.model.type.TypeKind> {
                    // @ts-ignore
                    values(): javax.lang.model.type.TypeKind[]
                    // @ts-ignore
                    valueOf(name: string): javax.lang.model.type.TypeKind
                    /**
                     * Returns {@code true} if this kind corresponds to a primitive
                     * type and {@code false} otherwise.
                     * @return {#code true} if this kind corresponds to a primitive type
                     */
                    // @ts-ignore
                    isPrimitive(): boolean
                }
            }
        }
    }
}
