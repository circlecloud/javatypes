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
                    /**
                     * The primitive type {@code boolean}.
                     */
                    // @ts-ignore
                    readonly BOOLEAN: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code byte}.
                     */
                    // @ts-ignore
                    readonly BYTE: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code short}.
                     */
                    // @ts-ignore
                    readonly SHORT: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code int}.
                     */
                    // @ts-ignore
                    readonly INT: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code long}.
                     */
                    // @ts-ignore
                    readonly LONG: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code char}.
                     */
                    // @ts-ignore
                    readonly CHAR: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code float}.
                     */
                    // @ts-ignore
                    readonly FLOAT: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code double}.
                     */
                    // @ts-ignore
                    readonly DOUBLE: javax.lang.model.type.TypeKind
                    /**
                     * The pseudo-type corresponding to the keyword {@code void}.
                     * @see NoType
                     */
                    // @ts-ignore
                    readonly VOID: javax.lang.model.type.TypeKind
                    /**
                     * A pseudo-type used where no actual type is appropriate.
                     * @see NoType
                     */
                    // @ts-ignore
                    readonly NONE: javax.lang.model.type.TypeKind
                    /**
                     * The null type.
                     */
                    // @ts-ignore
                    readonly NULL: javax.lang.model.type.TypeKind
                    /**
                     * An array type.
                     */
                    // @ts-ignore
                    readonly ARRAY: javax.lang.model.type.TypeKind
                    /**
                     * A class or interface type.
                     */
                    // @ts-ignore
                    readonly DECLARED: javax.lang.model.type.TypeKind
                    /**
                     * A class or interface type that could not be resolved.
                     */
                    // @ts-ignore
                    readonly ERROR: javax.lang.model.type.TypeKind
                    /**
                     * A type variable.
                     */
                    // @ts-ignore
                    readonly TYPEVAR: javax.lang.model.type.TypeKind
                    /**
                     * A wildcard type argument.
                     */
                    // @ts-ignore
                    readonly WILDCARD: javax.lang.model.type.TypeKind
                    /**
                     * A pseudo-type corresponding to a package element.
                     * @see NoType
                     */
                    // @ts-ignore
                    readonly PACKAGE: javax.lang.model.type.TypeKind
                    /**
                     * A method, constructor, or initializer.
                     */
                    // @ts-ignore
                    readonly EXECUTABLE: javax.lang.model.type.TypeKind
                    /**
                     * An implementation-reserved type.
                     * This is not the type you are looking for.
                     */
                    // @ts-ignore
                    readonly OTHER: javax.lang.model.type.TypeKind
                    /**
                     * A union type.
                     * @since 1.7
                     */
                    // @ts-ignore
                    readonly UNION: javax.lang.model.type.TypeKind
                    /**
                     * An intersection type.
                     * @since 1.8
                     */
                    // @ts-ignore
                    readonly INTERSECTION: javax.lang.model.type.TypeKind
                    // @ts-ignore
                    values(): javax.lang.model.type.TypeKind[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): javax.lang.model.type.TypeKind
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
