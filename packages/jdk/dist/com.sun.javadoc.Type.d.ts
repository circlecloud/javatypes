declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents a type.  A type can be a class or interface, an
             * invocation (like {@code List<String>}) of a generic class or interface,
             * a type variable, a wildcard type ("<code>?</code>"),
             * or a primitive data type (like <code>char</code>).
             * @since 1.2
             * @author Kaiyang Liu (original)
             * @author Robert Field (rewrite)
             * @author Scott Seligman (generics)
             */
            // @ts-ignore
            interface Type {
                /**
                 * Return unqualified name of type excluding any dimension information.
                 * <p>
                 * For example, a two dimensional array of String returns
                 * "<code>String</code>".
                 */
                // @ts-ignore
                typeName(): java.lang.String
                /**
                 * Return qualified name of type excluding any dimension information.
                 * <p>
                 * For example, a two dimensional array of String
                 * returns "<code>java.lang.String</code>".
                 */
                // @ts-ignore
                qualifiedTypeName(): java.lang.String
                /**
                 * Return the simple name of this type excluding any dimension information.
                 * This is the unqualified name of the type, except that for nested types
                 * only the identifier of the innermost type is included.
                 * <p>
                 * For example, the class {@code Outer.Inner} returns
                 * "<code>Inner</code>".
                 * @since 1.5
                 */
                // @ts-ignore
                simpleTypeName(): java.lang.String
                /**
                 * Return the type's dimension information, as a string.
                 * <p>
                 * For example, a two dimensional array of String returns
                 * "<code>[][]</code>".
                 */
                // @ts-ignore
                dimension(): java.lang.String
                /**
                 * Return a string representation of the type.
                 * This includes any dimension information and type arguments.
                 * <p>
                 * For example, a two dimensional array of String may return
                 * "<code>java.lang.String[][]</code>",
                 * and the parameterized type {@code List<Integer>} may return
                 * "{@code java.util.List<java.lang.Integer>}".
                 * @return a string representation of the type.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Return true if this type represents a primitive type.
                 * @return true if this type represents a primitive type.
                 * @since 1.5
                 */
                // @ts-ignore
                isPrimitive(): boolean
                /**
                 * Return this type as a <code>ClassDoc</code> if it represents a class
                 * or interface.  Array dimensions are ignored.
                 * If this type is a <code>ParameterizedType</code>,
                 * <code>TypeVariable</code>, or <code>WildcardType</code>, return
                 * the <code>ClassDoc</code> of the type's erasure.  If this is an
                 * <code>AnnotationTypeDoc</code>, return this as a <code>ClassDoc</code>
                 * (but see {@link #asAnnotationTypeDoc()}).
                 * If this is a primitive type, return null.
                 * @return the <code>ClassDoc</code> of this type,
                 *          or null if it is a primitive type.
                 */
                // @ts-ignore
                asClassDoc(): com.sun.javadoc.ClassDoc
                /**
                 * Return this type as a <code>ParameterizedType</code> if it represents
                 * an invocation of a generic class or interface.  Array dimensions
                 * are ignored.
                 * @return a <code>ParameterizedType</code> if the type is an
                 *          invocation of a generic type, or null if it is not.
                 * @since 1.5
                 */
                // @ts-ignore
                asParameterizedType(): com.sun.javadoc.ParameterizedType
                /**
                 * Return this type as a <code>TypeVariable</code> if it represents
                 * a type variable.  Array dimensions are ignored.
                 * @return a <code>TypeVariable</code> if the type is a type variable,
                 *          or null if it is not.
                 * @since 1.5
                 */
                // @ts-ignore
                asTypeVariable(): com.sun.javadoc.TypeVariable
                /**
                 * Return this type as a <code>WildcardType</code> if it represents
                 * a wildcard type.
                 * @return a <code>WildcardType</code> if the type is a wildcard type,
                 *          or null if it is not.
                 * @since 1.5
                 */
                // @ts-ignore
                asWildcardType(): com.sun.javadoc.WildcardType
                /**
                 * Returns this type as a <code>AnnotatedType</code> if it represents
                 * an annotated type.
                 * @return a <code>AnnotatedType</code> if the type if an annotated type,
                 *          or null if it is not
                 * @since 1.8
                 */
                // @ts-ignore
                asAnnotatedType(): com.sun.javadoc.AnnotatedType
                /**
                 * Return this type as an <code>AnnotationTypeDoc</code> if it represents
                 * an annotation type.  Array dimensions are ignored.
                 * @return an <code>AnnotationTypeDoc</code> if the type is an annotation
                 *          type, or null if it is not.
                 * @since 1.5
                 */
                // @ts-ignore
                asAnnotationTypeDoc(): com.sun.javadoc.AnnotationTypeDoc
                /**
                 * If this type is an array type, return the element type of the
                 * array. Otherwise, return null.
                 * @return a <code>Type</code> representing the element type or null.
                 * @since 1.8
                 */
                // @ts-ignore
                getElementType(): com.sun.javadoc.Type
            }
        }
    }
}
