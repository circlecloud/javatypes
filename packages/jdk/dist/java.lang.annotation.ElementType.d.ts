declare namespace java {
    namespace lang {
        namespace annotation {
            /**
             * The constants of this enumerated type provide a simple classification of the
             * syntactic locations where annotations may appear in a Java program. These
             * constants are used in {@link Target java.lang.annotation.Target}
             * meta-annotations to specify where it is legal to write annotations of a
             * given type.
             * <p>The syntactic locations where annotations may appear are split into
             * <em>declaration contexts</em> , where annotations apply to declarations, and
             * <em>type contexts</em> , where annotations apply to types used in
             * declarations and expressions.
             * <p>The constants {@link #ANNOTATION_TYPE} , {@link #CONSTRUCTOR} , {@link
             * #FIELD} , {@link #LOCAL_VARIABLE} , {@link #METHOD} , {@link #PACKAGE} ,
             * {@link #PARAMETER} , {@link #TYPE} , and {@link #TYPE_PARAMETER} correspond
             * to the declaration contexts in JLS 9.6.4.1.
             * <p>For example, an annotation whose type is meta-annotated with
             * {@code @Target(ElementType.FIELD)} may only be written as a modifier for a
             * field declaration.
             * <p>The constant {@link #TYPE_USE} corresponds to the 15 type contexts in JLS
             * 4.11, as well as to two declaration contexts: type declarations (including
             * annotation type declarations) and type parameter declarations.
             * <p>For example, an annotation whose type is meta-annotated with
             * {@code @Target(ElementType.TYPE_USE)} may be written on the type of a field
             * (or within the type of the field, if it is a nested, parameterized, or array
             * type), and may also appear as a modifier for, say, a class declaration.
             * <p>The {@code TYPE_USE} constant includes type declarations and type
             * parameter declarations as a convenience for designers of type checkers which
             * give semantics to annotation types. For example, if the annotation type
             * {@code NonNull} is meta-annotated with
             * {@code @Target(ElementType.TYPE_USE)}, then {@code @NonNull}
             * {@code class C {...}} could be treated by a type checker as indicating that
             * all variables of class {@code C} are non-null, while still allowing
             * variables of other classes to be non-null or not non-null based on whether
             * {@code @NonNull} appears at the variable's declaration.
             * @author Joshua Bloch
             * @since 1.5
             * @jls 9.6.4.1 #Target
             * @jls 4.1 The Kinds of Types and Values
             */
            // @ts-ignore
            class ElementType extends java.lang.Enum<java.lang.annotation.ElementType> {
                /**
                 * Class, interface (including annotation type), or enum declaration
                 */
                // @ts-ignore
                public static readonly TYPE: java.lang.annotation.ElementType
                /**
                 * Field declaration (includes enum constants)
                 */
                // @ts-ignore
                public static readonly FIELD: java.lang.annotation.ElementType
                /**
                 * Method declaration
                 */
                // @ts-ignore
                public static readonly METHOD: java.lang.annotation.ElementType
                /**
                 * Formal parameter declaration
                 */
                // @ts-ignore
                public static readonly PARAMETER: java.lang.annotation.ElementType
                /**
                 * Constructor declaration
                 */
                // @ts-ignore
                public static readonly CONSTRUCTOR: java.lang.annotation.ElementType
                /**
                 * Local variable declaration
                 */
                // @ts-ignore
                public static readonly LOCAL_VARIABLE: java.lang.annotation.ElementType
                /**
                 * Annotation type declaration
                 */
                // @ts-ignore
                public static readonly ANNOTATION_TYPE: java.lang.annotation.ElementType
                /**
                 * Package declaration
                 */
                // @ts-ignore
                public static readonly PACKAGE: java.lang.annotation.ElementType
                /**
                 * Type parameter declaration
                 * @since 1.8
                 */
                // @ts-ignore
                public static readonly TYPE_PARAMETER: java.lang.annotation.ElementType
                /**
                 * Use of a type
                 * @since 1.8
                 */
                // @ts-ignore
                public static readonly TYPE_USE: java.lang.annotation.ElementType
                // @ts-ignore
                public static values(): java.lang.annotation.ElementType[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.lang.annotation.ElementType
            }
        }
    }
}
