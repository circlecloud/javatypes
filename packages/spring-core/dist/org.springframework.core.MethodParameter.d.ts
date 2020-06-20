declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Helper class that encapsulates the specification of a method parameter, i.e. a {@link Method}
             * or {@link Constructor} plus a parameter index and a nested type index for a declared generic
             * type. Useful as a specification object to pass along.
             * <p>As of 4.2, there is a {@link org.springframework.core.annotation.SynthesizingMethodParameter}
             * subclass available which synthesizes annotations with attribute aliases. That subclass is used
             * for web and message endpoint processing, in particular.
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @author Andy Clement
             * @author Sam Brannen
             * @author Sebastien Deleuze
             * @author Phillip Webb
             * @since 2.0
             * @see org.springframework.core.annotation.SynthesizingMethodParameter
             */
            // @ts-ignore
            class MethodParameter extends java.lang.Object {
                /**
                 * Create a new {@code MethodParameter} for the given method, with nesting level 1.
                 * @param method the Method to specify a parameter for
                 * @param parameterIndex the index of the parameter: -1 for the method
                 *  return type; 0 for the first method parameter; 1 for the second method
                 *  parameter, etc.
                 */
                // @ts-ignore
                constructor(method: java.lang.reflect.Method, parameterIndex: number /*int*/)
                /**
                 * Create a new {@code MethodParameter} for the given method.
                 * @param method the Method to specify a parameter for
                 * @param parameterIndex the index of the parameter: -1 for the method
                 *  return type; 0 for the first method parameter; 1 for the second method
                 *  parameter, etc.
                 * @param nestingLevel the nesting level of the target type
                 *  (typically 1; e.g. in case of a List of Lists, 1 would indicate the
                 *  nested List, whereas 2 would indicate the element of the nested List)
                 */
                // @ts-ignore
                constructor(method: java.lang.reflect.Method, parameterIndex: number /*int*/, nestingLevel: number /*int*/)
                /**
                 * Create a new MethodParameter for the given constructor, with nesting level 1.
                 * @param constructor the Constructor to specify a parameter for
                 * @param parameterIndex the index of the parameter
                 */
                // @ts-ignore
                constructor(constructor: java.lang.reflect.Constructor<any>, parameterIndex: number /*int*/)
                /**
                 * Create a new MethodParameter for the given constructor.
                 * @param constructor the Constructor to specify a parameter for
                 * @param parameterIndex the index of the parameter
                 * @param nestingLevel the nesting level of the target type
                 *  (typically 1; e.g. in case of a List of Lists, 1 would indicate the
                 *  nested List, whereas 2 would indicate the element of the nested List)
                 */
                // @ts-ignore
                constructor(constructor: java.lang.reflect.Constructor<any>, parameterIndex: number /*int*/, nestingLevel: number /*int*/)
                /**
                 * Copy constructor, resulting in an independent MethodParameter object
                 * based on the same metadata and cache state that the original object was in.
                 * @param original the original MethodParameter object to copy from
                 */
                // @ts-ignore
                constructor(original: org.springframework.core.MethodParameter)
                /**
                 * Return the wrapped Method, if any.
                 * <p>Note: Either Method or Constructor is available.
                 * @return the Method, or {#code null} if none
                 */
                // @ts-ignore
                getMethod(): java.lang.reflect.Method
                /**
                 * Return the wrapped Constructor, if any.
                 * <p>Note: Either Method or Constructor is available.
                 * @return the Constructor, or {#code null} if none
                 */
                // @ts-ignore
                getConstructor(): java.lang.reflect.Constructor<?>
                /**
                 * Return the class that declares the underlying Method or Constructor.
                 */
                // @ts-ignore
                getDeclaringClass(): java.lang.Class<?>
                /**
                 * Return the wrapped member.
                 * @return the Method or Constructor as Member
                 */
                // @ts-ignore
                getMember(): java.lang.reflect.Member
                /**
                 * Return the wrapped annotated element.
                 * <p>Note: This method exposes the annotations declared on the method/constructor
                 * itself (i.e. at the method/constructor level, not at the parameter level).
                 * @return the Method or Constructor as AnnotatedElement
                 */
                // @ts-ignore
                getAnnotatedElement(): java.lang.reflect.AnnotatedElement
                /**
                 * Return the wrapped executable.
                 * @return the Method or Constructor as Executable
                 * @since 5.0
                 */
                // @ts-ignore
                getExecutable(): java.lang.reflect.Executable
                /**
                 * Return the {@link Parameter} descriptor for method/constructor parameter.
                 * @since 5.0
                 */
                // @ts-ignore
                getParameter(): java.lang.reflect.Parameter
                /**
                 * Return the index of the method/constructor parameter.
                 * @return the parameter index (-1 in case of the return type)
                 */
                // @ts-ignore
                getParameterIndex(): int
                /**
                 * Increase this parameter's nesting level.
                 * @see #getNestingLevel()
                 * @deprecated since 5.2 in favor of {#link #nested(Integer)}
                 */
                // @ts-ignore
                increaseNestingLevel(): void
                /**
                 * Decrease this parameter's nesting level.
                 * @see #getNestingLevel()
                 * @deprecated since 5.2 in favor of retaining the original MethodParameter and
                 *  using {#link #nested(Integer)} if nesting is required
                 */
                // @ts-ignore
                decreaseNestingLevel(): void
                /**
                 * Return the nesting level of the target type
                 * (typically 1; e.g. in case of a List of Lists, 1 would indicate the
                 * nested List, whereas 2 would indicate the element of the nested List).
                 */
                // @ts-ignore
                getNestingLevel(): int
                /**
                 * Return a variant of this {@code MethodParameter} with the type
                 * for the current level set to the specified value.
                 * @param typeIndex the new type index
                 * @since 5.2
                 */
                // @ts-ignore
                withTypeIndex(typeIndex: number /*int*/): org.springframework.core.MethodParameter
                /**
                 * Set the type index for the current nesting level.
                 * @param typeIndex the corresponding type index
                 *  (or {#code null} for the default type index)
                 * @see #getNestingLevel()
                 * @deprecated since 5.2 in favor of {#link #withTypeIndex}
                 */
                // @ts-ignore
                setTypeIndexForCurrentLevel(typeIndex: number /*int*/): void
                /**
                 * Return the type index for the current nesting level.
                 * @return the corresponding type index, or {#code null}
                 *  if none specified (indicating the default type index)
                 * @see #getNestingLevel()
                 */
                // @ts-ignore
                getTypeIndexForCurrentLevel(): java.lang.Integer
                /**
                 * Return the type index for the specified nesting level.
                 * @param nestingLevel the nesting level to check
                 * @return the corresponding type index, or {#code null}
                 *  if none specified (indicating the default type index)
                 */
                // @ts-ignore
                getTypeIndexForLevel(nestingLevel: number /*int*/): java.lang.Integer
                /**
                 * Return a variant of this {@code MethodParameter} which points to the
                 * same parameter but one nesting level deeper.
                 * @since 4.3
                 */
                // @ts-ignore
                nested(): org.springframework.core.MethodParameter
                /**
                 * Return a variant of this {@code MethodParameter} which points to the
                 * same parameter but one nesting level deeper.
                 * @param typeIndex the type index for the new nesting level
                 * @since 5.2
                 */
                // @ts-ignore
                nested(typeIndex: number): org.springframework.core.MethodParameter
                /**
                 * Return whether this method indicates a parameter which is not required:
                 * either in the form of Java 8's {@link java.util.Optional}, any variant
                 * of a parameter-level {@code Nullable} annotation (such as from JSR-305
                 * or the FindBugs set of annotations), or a language-level nullable type
                 * declaration or {@code Continuation} parameter in Kotlin.
                 * @since 4.3
                 */
                // @ts-ignore
                isOptional(): boolean
                /**
                 * Return a variant of this {@code MethodParameter} which points to
                 * the same parameter but one nesting level deeper in case of a
                 * {@link java.util.Optional} declaration.
                 * @since 4.3
                 * @see #isOptional()
                 * @see #nested()
                 */
                // @ts-ignore
                nestedIfOptional(): org.springframework.core.MethodParameter
                /**
                 * Return a variant of this {@code MethodParameter} which refers to the
                 * given containing class.
                 * @param containingClass a specific containing class (potentially a
                 *  subclass of the declaring class, e.g. substituting a type variable)
                 * @since 5.2
                 * @see #getParameterType()
                 */
                // @ts-ignore
                withContainingClass(containingClass: java.lang.Class<any>): org.springframework.core.MethodParameter
                /**
                 * Return the containing class for this method parameter.
                 * @return a specific containing class (potentially a subclass of the
                 *  declaring class), or otherwise simply the declaring class itself
                 * @see #getDeclaringClass()
                 */
                // @ts-ignore
                getContainingClass(): java.lang.Class<?>
                /**
                 * Return the type of the method/constructor parameter.
                 * @return the parameter type (never {#code null})
                 */
                // @ts-ignore
                getParameterType(): java.lang.Class<?>
                /**
                 * Return the generic type of the method/constructor parameter.
                 * @return the parameter type (never {#code null})
                 * @since 3.0
                 */
                // @ts-ignore
                getGenericParameterType(): java.lang.reflect.Type
                /**
                 * Return the nested type of the method/constructor parameter.
                 * @return the parameter type (never {#code null})
                 * @since 3.1
                 * @see #getNestingLevel()
                 */
                // @ts-ignore
                getNestedParameterType(): java.lang.Class<?>
                /**
                 * Return the nested generic type of the method/constructor parameter.
                 * @return the parameter type (never {#code null})
                 * @since 4.2
                 * @see #getNestingLevel()
                 */
                // @ts-ignore
                getNestedGenericParameterType(): java.lang.reflect.Type
                /**
                 * Return the annotations associated with the target method/constructor itself.
                 */
                // @ts-ignore
                getMethodAnnotations(): java.lang.annotation.Annotation[]
                /**
                 * Return the method/constructor annotation of the given type, if available.
                 * @param annotationType the annotation type to look for
                 * @return the annotation object, or {#code null} if not found
                 */
                // @ts-ignore
                getMethodAnnotation<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): A
                /**
                 * Return whether the method/constructor is annotated with the given type.
                 * @param annotationType the annotation type to look for
                 * @since 4.3
                 * @see #getMethodAnnotation(Class)
                 */
                // @ts-ignore
                hasMethodAnnotation<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): boolean
                /**
                 * Return the annotations associated with the specific method/constructor parameter.
                 */
                // @ts-ignore
                getParameterAnnotations(): java.lang.annotation.Annotation[]
                /**
                 * Return {@code true} if the parameter has at least one annotation,
                 * {@code false} if it has none.
                 * @see #getParameterAnnotations()
                 */
                // @ts-ignore
                hasParameterAnnotations(): boolean
                /**
                 * Return the parameter annotation of the given type, if available.
                 * @param annotationType the annotation type to look for
                 * @return the annotation object, or {#code null} if not found
                 */
                // @ts-ignore
                getParameterAnnotation<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): A
                /**
                 * Return whether the parameter is declared with the given annotation type.
                 * @param annotationType the annotation type to look for
                 * @see #getParameterAnnotation(Class)
                 */
                // @ts-ignore
                hasParameterAnnotation<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): boolean
                /**
                 * Initialize parameter name discovery for this method parameter.
                 * <p>This method does not actually try to retrieve the parameter name at
                 * this point; it just allows discovery to happen when the application calls
                 * {@link #getParameterName()} (if ever).
                 */
                // @ts-ignore
                initParameterNameDiscovery(parameterNameDiscoverer: org.springframework.core.ParameterNameDiscoverer): void
                /**
                 * Return the name of the method/constructor parameter.
                 * @return the parameter name (may be {#code null} if no
                 *  parameter name metadata is contained in the class file or no
                 *  {@link #initParameterNameDiscovery ParameterNameDiscoverer}
                 *  has been set to begin with)
                 */
                // @ts-ignore
                getParameterName(): java.lang.String
                /**
                 * A template method to post-process a given annotation instance before
                 * returning it to the caller.
                 * <p>The default implementation simply returns the given annotation as-is.
                 * @param annotation the annotation about to be returned
                 * @return the post-processed annotation (or simply the original one)
                 * @since 4.2
                 */
                // @ts-ignore
                adaptAnnotation<A extends java.lang.annotation.Annotation>(annotation: A extends java.lang.annotation.Annotation): A
                /**
                 * A template method to post-process a given annotation array before
                 * returning it to the caller.
                 * <p>The default implementation simply returns the given annotation array as-is.
                 * @param annotations the annotation array about to be returned
                 * @return the post-processed annotation array (or simply the original one)
                 * @since 4.2
                 */
                // @ts-ignore
                adaptAnnotationArray(annotations: java.lang.annotation.Annotation[]): java.lang.annotation.Annotation[]
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.springframework.core.MethodParameter
                /**
                 * Create a new MethodParameter for the given method or constructor.
                 * <p>This is a convenience factory method for scenarios where a
                 * Method or Constructor reference is treated in a generic fashion.
                 * @param methodOrConstructor the Method or Constructor to specify a parameter for
                 * @param parameterIndex the index of the parameter
                 * @return the corresponding MethodParameter instance
                 * @deprecated as of 5.0, in favor of {#link #forExecutable}
                 */
                // @ts-ignore
                forMethodOrConstructor(methodOrConstructor: any, parameterIndex: number /*int*/): org.springframework.core.MethodParameter
                /**
                 * Create a new MethodParameter for the given method or constructor.
                 * <p>This is a convenience factory method for scenarios where a
                 * Method or Constructor reference is treated in a generic fashion.
                 * @param executable the Method or Constructor to specify a parameter for
                 * @param parameterIndex the index of the parameter
                 * @return the corresponding MethodParameter instance
                 * @since 5.0
                 */
                // @ts-ignore
                forExecutable(executable: java.lang.reflect.Executable, parameterIndex: number /*int*/): org.springframework.core.MethodParameter
                /**
                 * Create a new MethodParameter for the given parameter descriptor.
                 * <p>This is a convenience factory method for scenarios where a
                 * Java 8 {@link Parameter} descriptor is already available.
                 * @param parameter the parameter descriptor
                 * @return the corresponding MethodParameter instance
                 * @since 5.0
                 */
                // @ts-ignore
                forParameter(parameter: java.lang.reflect.Parameter): org.springframework.core.MethodParameter
                // @ts-ignore
                findParameterIndex(parameter: java.lang.reflect.Parameter): int
            }
        }
    }
}
