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
                    public static readonly BOOLEAN: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code byte}.
                     */
                    // @ts-ignore
                    public static readonly BYTE: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code short}.
                     */
                    // @ts-ignore
                    public static readonly SHORT: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code int}.
                     */
                    // @ts-ignore
                    public static readonly INT: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code long}.
                     */
                    // @ts-ignore
                    public static readonly LONG: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code char}.
                     */
                    // @ts-ignore
                    public static readonly CHAR: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code float}.
                     */
                    // @ts-ignore
                    public static readonly FLOAT: javax.lang.model.type.TypeKind
                    /**
                     * The primitive type {@code double}.
                     */
                    // @ts-ignore
                    public static readonly DOUBLE: javax.lang.model.type.TypeKind
                    /**
                     * The pseudo-type corresponding to the keyword {@code void}.
                     * @see NoType
                     */
                    // @ts-ignore
                    public static readonly VOID: javax.lang.model.type.TypeKind
                    /**
                     * A pseudo-type used where no actual type is appropriate.
                     * @see NoType
                     */
                    // @ts-ignore
                    public static readonly NONE: javax.lang.model.type.TypeKind
                    /**
                     * The null type.
                     */
                    // @ts-ignore
                    public static readonly NULL: javax.lang.model.type.TypeKind
                    /**
                     * An array type.
                     */
                    // @ts-ignore
                    public static readonly ARRAY: javax.lang.model.type.TypeKind
                    /**
                     * A class or interface type.
                     */
                    // @ts-ignore
                    public static readonly DECLARED: javax.lang.model.type.TypeKind
                    /**
                     * A class or interface type that could not be resolved.
                     */
                    // @ts-ignore
                    public static readonly ERROR: javax.lang.model.type.TypeKind
                    /**
                     * A type variable.
                     */
                    // @ts-ignore
                    public static readonly TYPEVAR: javax.lang.model.type.TypeKind
                    /**
                     * A wildcard type argument.
                     */
                    // @ts-ignore
                    public static readonly WILDCARD: javax.lang.model.type.TypeKind
                    /**
                     * A pseudo-type corresponding to a package element.
                     * @see NoType
                     */
                    // @ts-ignore
                    public static readonly PACKAGE: javax.lang.model.type.TypeKind
                    /**
                     * A method, constructor, or initializer.
                     */
                    // @ts-ignore
                    public static readonly EXECUTABLE: javax.lang.model.type.TypeKind
                    /**
                     * An implementation-reserved type.
                     * This is not the type you are looking for.
                     */
                    // @ts-ignore
                    public static readonly OTHER: javax.lang.model.type.TypeKind
                    /**
                     * A union type.
                     * @since 1.7
                     */
                    // @ts-ignore
                    public static readonly UNION: javax.lang.model.type.TypeKind
                    /**
                     * An intersection type.
                     * @since 1.8
                     */
                    // @ts-ignore
                    public static readonly INTERSECTION: javax.lang.model.type.TypeKind
                    // @ts-ignore
                    public static values(): javax.lang.model.type.TypeKind[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): javax.lang.model.type.TypeKind
                    /**
                     * Returns {@code true} if this kind corresponds to a primitive
                     * type and {@code false} otherwise.
                     * @return {#code true} if this kind corresponds to a primitive type
                     */
                    // @ts-ignore
                    public isPrimitive(): boolean
                }
            }
        }
    }
}
