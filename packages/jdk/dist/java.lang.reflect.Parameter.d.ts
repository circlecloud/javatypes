declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * Information about method parameters.
             * A {@code Parameter} provides information about method parameters,
             * including its name and modifiers.  It also provides an alternate
             * means of obtaining attributes for the parameter.
             * @since 1.8
             */
            // @ts-ignore
            class Parameter extends java.lang.Object implements java.lang.reflect.AnnotatedElement {
                /**
                 * Compares based on the executable and the index.
                 * @param obj The object to compare.
                 * @return Whether or not this is equal to the argument.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns a hash code based on the executable's hash code and the
                 * index.
                 * @return A hash code based on the executable's hash code.
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns true if the parameter has a name according to the class
                 * file; returns false otherwise. Whether a parameter has a name
                 * is determined by the {@literal MethodParameters} attribute of
                 * the method which declares the parameter.
                 * @return true if and only if the parameter has a name according
                 *  to the class file.
                 */
                // @ts-ignore
                isNamePresent(): boolean
                /**
                 * Returns a string describing this parameter.  The format is the
                 * modifiers for the parameter, if any, in canonical order as
                 * recommended by <cite>The Java&trade; Language
                 * Specification</cite>, followed by the fully- qualified type of
                 * the parameter (excluding the last [] if the parameter is
                 * variable arity), followed by "..." if the parameter is variable
                 * arity, followed by a space, followed by the name of the
                 * parameter.
                 * @return A string representation of the parameter and associated
                 *  information.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Return the {@code Executable} which declares this parameter.
                 * @return The {#code Executable} declaring this parameter.
                 */
                // @ts-ignore
                getDeclaringExecutable(): java.lang.reflect.Executable
                /**
                 * Get the modifier flags for this the parameter represented by
                 * this {@code Parameter} object.
                 * @return The modifier flags for this parameter.
                 */
                // @ts-ignore
                getModifiers(): int
                /**
                 * Returns the name of the parameter.  If the parameter's name is
                 * {@linkplain #isNamePresent() present}, then this method returns
                 * the name provided by the class file. Otherwise, this method
                 * synthesizes a name of the form argN, where N is the index of
                 * the parameter in the descriptor of the method which declares
                 * the parameter.
                 * @return The name of the parameter, either provided by the class
                 *          file or synthesized if the class file does not provide
                 *          a name.
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Returns a {@code Type} object that identifies the parameterized
                 * type for the parameter represented by this {@code Parameter}
                 * object.
                 * @return a {#code Type} object identifying the parameterized
                 *  type of the parameter represented by this object
                 */
                // @ts-ignore
                getParameterizedType(): java.lang.reflect.Type
                /**
                 * Returns a {@code Class} object that identifies the
                 * declared type for the parameter represented by this
                 * {@code Parameter} object.
                 * @return a {#code Class} object identifying the declared
                 *  type of the parameter represented by this object
                 */
                // @ts-ignore
                getType(): java.lang.Class<?>
                /**
                 * Returns an AnnotatedType object that represents the use of a type to
                 * specify the type of the formal parameter represented by this Parameter.
                 * @return an {#code AnnotatedType} object representing the use of a type
                 *          to specify the type of the formal parameter represented by this
                 *          Parameter
                 */
                // @ts-ignore
                getAnnotatedType(): java.lang.reflect.AnnotatedType
                /**
                 * Returns {@code true} if this parameter is implicitly declared
                 * in source code; returns {@code false} otherwise.
                 * @return true if and only if this parameter is implicitly
                 *  declared as defined by <cite>The Java&trade; Language
                 *  Specification</cite>.
                 */
                // @ts-ignore
                isImplicit(): boolean
                /**
                 * Returns {@code true} if this parameter is neither implicitly
                 * nor explicitly declared in source code; returns {@code false}
                 * otherwise.
                 * @jls 13.1 The Form of a Binary
                 * @return true if and only if this parameter is a synthetic
                 *  construct as defined by
                 *  <cite>The Java&trade; Language Specification</cite>.
                 */
                // @ts-ignore
                isSynthetic(): boolean
                /**
                 * Returns {@code true} if this parameter represents a variable
                 * argument list; returns {@code false} otherwise.
                 * @return {#code true} if an only if this parameter represents a
                 *  variable argument list.
                 */
                // @ts-ignore
                isVarArgs(): boolean
                /**
                 * {@inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                getAnnotation<T extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<T>): T
                /**
                 * {@inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                getAnnotationsByType<T extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<T>): T
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                getDeclaredAnnotations(): java.lang.annotation.Annotation[]
                /**
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                getDeclaredAnnotation<T extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<T>): T
                /**
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                getDeclaredAnnotationsByType<T extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<T>): T
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                getAnnotations(): java.lang.annotation.Annotation[]
            }
        }
    }
}
