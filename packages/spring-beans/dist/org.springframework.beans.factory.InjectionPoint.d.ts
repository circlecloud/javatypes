declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * A simple descriptor for an injection point, pointing to a method/constructor
                 * parameter or a field. Exposed by {@link UnsatisfiedDependencyException}.
                 * Also available as an argument for factory methods, reacting to the
                 * requesting injection point for building a customized bean instance.
                 * @author Juergen Hoeller
                 * @since 4.3
                 * @see UnsatisfiedDependencyException#getInjectionPoint()
                 * @see org.springframework.beans.factory.config.DependencyDescriptor
                 */
                // @ts-ignore
                class InjectionPoint extends java.lang.Object {
                    /**
                     * Create an injection point descriptor for a method or constructor parameter.
                     * @param methodParameter the MethodParameter to wrap
                     */
                    // @ts-ignore
                    constructor(methodParameter: MethodParameter)
                    /**
                     * Just available for serialization purposes in subclasses.
                     */
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    methodParameter: MethodParameter
                    // @ts-ignore
                    field: java.lang.reflect.Field
                    /**
                     * Return the wrapped MethodParameter, if any.
                     * <p>Note: Either MethodParameter or Field is available.
                     * @return the MethodParameter, or {#code null} if none
                     */
                    // @ts-ignore
                    public getMethodParameter(): MethodParameter
                    /**
                     * Return the wrapped Field, if any.
                     * <p>Note: Either MethodParameter or Field is available.
                     * @return the Field, or {#code null} if none
                     */
                    // @ts-ignore
                    public getField(): java.lang.reflect.Field
                    /**
                     * Return the wrapped MethodParameter, assuming it is present.
                     * @return the MethodParameter (never {#code null})
                     * @throws IllegalStateException if no MethodParameter is available
                     * @since 5.0
                     */
                    // @ts-ignore
                    obtainMethodParameter(): MethodParameter
                    /**
                     * Obtain the annotations associated with the wrapped field or method/constructor parameter.
                     */
                    // @ts-ignore
                    public getAnnotations(): java.lang.annotation.Annotation[]
                    /**
                     * Retrieve a field/parameter annotation of the given type, if any.
                     * @param annotationType the annotation type to retrieve
                     * @return the annotation instance, or {#code null} if none found
                     * @since 4.3.9
                     */
                    // @ts-ignore
                    public getAnnotation<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): A
                    /**
                     * Return the type declared by the underlying field or method/constructor parameter,
                     * indicating the injection type.
                     */
                    // @ts-ignore
                    public getDeclaredType(): java.lang.Class<any>
                    /**
                     * Returns the wrapped member, containing the injection point.
                     * @return the Field / Method / Constructor as Member
                     */
                    // @ts-ignore
                    public getMember(): java.lang.reflect.Member
                    /**
                     * Return the wrapped annotated element.
                     * <p>Note: In case of a method/constructor parameter, this exposes
                     * the annotations declared on the method or constructor itself
                     * (i.e. at the method/constructor level, not at the parameter level).
                     * Use {@link #getAnnotations()} to obtain parameter-level annotations in
                     * such a scenario, transparently with corresponding field annotations.
                     * @return the Field / Method / Constructor as AnnotatedElement
                     */
                    // @ts-ignore
                    public getAnnotatedElement(): java.lang.reflect.AnnotatedElement
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
