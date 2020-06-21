declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
                /**
                 * Represents a program element such as a package, class, or method.
                 * Each element represents a static, language-level construct
                 * (and not, for example, a runtime construct of the virtual machine).
                 * <p> Elements should be compared using the {@link #equals(Object)}
                 * method.  There is no guarantee that any particular element will
                 * always be represented by the same object.
                 * <p> To implement operations based on the class of an {@code
                 * Element} object, either use a {@linkplain ElementVisitor visitor} or
                 * use the result of the {@link #getKind} method.  Using {@code
                 * instanceof} is <em>not</em> necessarily a reliable idiom for
                 * determining the effective class of an object in this modeling
                 * hierarchy since an implementation may choose to have a single object
                 * implement multiple {@code Element} subinterfaces.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see Elements
                 * @see TypeMirror
                 * @since 1.6
                 */
                // @ts-ignore
                interface Element extends javax.lang.model.AnnotatedConstruct {
                    /**
                     * Returns the type defined by this element.
                     * <p> A generic element defines a family of types, not just one.
                     * If this is a generic element, a <i>prototypical</i> type is
                     * returned.  This is the element's invocation on the
                     * type variables corresponding to its own formal type parameters.
                     * For example,
                     * for the generic class element {@code C<N extends Number>},
                     * the parameterized type {@code C<N>} is returned.
                     * The {@link Types} utility interface has more general methods
                     * for obtaining the full range of types defined by an element.
                     * @see Types
                     * @return the type defined by this element
                     */
                    // @ts-ignore
                    asType(): javax.lang.model.type.TypeMirror
                    /**
                     * Returns the {@code kind} of this element.
                     * @return the kind of this element
                     */
                    // @ts-ignore
                    getKind(): javax.lang.model.element.ElementKind
                    /**
                     * Returns the modifiers of this element, excluding annotations.
                     * Implicit modifiers, such as the {@code public} and {@code static}
                     * modifiers of interface members, are included.
                     * @return the modifiers of this element, or an empty set if there are none
                     */
                    // @ts-ignore
                    getModifiers(): Array<javax.lang.model.element.Modifier>
                    /**
                     * Returns the simple (unqualified) name of this element.  The
                     * name of a generic type does not include any reference to its
                     * formal type parameters.
                     * For example, the simple name of the type element {@code
                     * java.util.Set<E>} is {@code "Set"}.
                     * If this element represents an unnamed {@linkplain
                     * PackageElement#getSimpleName package}, an empty name is
                     * returned.
                     * If it represents a {@linkplain ExecutableElement#getSimpleName
                     * constructor}, the name "{@code <init>}" is returned.  If it
                     * represents a {@linkplain ExecutableElement#getSimpleName static
                     * initializer}, the name "{@code <clinit>}" is returned.
                     * If it represents an {@linkplain TypeElement#getSimpleName
                     * anonymous class} or {@linkplain ExecutableElement#getSimpleName
                     * instance initializer}, an empty name is returned.
                     * @return the simple name of this element
                     * @see PackageElement#getSimpleName
                     * @see ExecutableElement#getSimpleName
                     * @see TypeElement#getSimpleName
                     * @see VariableElement#getSimpleName
                     */
                    // @ts-ignore
                    getSimpleName(): javax.lang.model.element.Name
                    /**
                     * Returns the innermost element
                     * within which this element is, loosely speaking, enclosed.
                     * <ul>
                     * <li> If this element is one whose declaration is lexically enclosed
                     * immediately within the declaration of another element, that other
                     * element is returned.
                     * <li> If this is a {@linkplain TypeElement#getEnclosingElement
                     * top-level type}, its package is returned.
                     * <li> If this is a {@linkplain
                     * PackageElement#getEnclosingElement package}, {@code null} is
                     * returned.
                     * <li> If this is a {@linkplain
                     * TypeParameterElement#getEnclosingElement type parameter},
                     * {@linkplain TypeParameterElement#getGenericElement the
                     * generic element} of the type parameter is returned.
                     * <li> If this is a {@linkplain
                     * VariableElement#getEnclosingElement method or constructor
                     * parameter}, {@linkplain ExecutableElement the executable
                     * element} which declares the parameter is returned.
                     * </ul>
                     * @return the enclosing element, or {#code null} if there is none
                     * @see Elements#getPackageOf
                     */
                    // @ts-ignore
                    getEnclosingElement(): javax.lang.model.element.Element
                    /**
                     * Returns the elements that are, loosely speaking, directly
                     * enclosed by this element.
                     * A {@linkplain TypeElement#getEnclosedElements class or
                     * interface} is considered to enclose the fields, methods,
                     * constructors, and member types that it directly declares.
                     * A {@linkplain PackageElement#getEnclosedElements package}
                     * encloses the top-level classes and interfaces within it, but is
                     * not considered to enclose subpackages.
                     * Other kinds of elements are not currently considered to enclose
                     * any elements; however, that may change as this API or the
                     * programming language evolves.
                     * <p>Note that elements of certain kinds can be isolated using
                     * methods in {@link ElementFilter}.
                     * @return the enclosed elements, or an empty list if none
                     * @see PackageElement#getEnclosedElements
                     * @see TypeElement#getEnclosedElements
                     * @see Elements#getAllMembers
                     * @jls 8.8.9 Default Constructor
                     * @jls 8.9 Enums
                     */
                    // @ts-ignore
                    getEnclosedElements(): Array<any>
                    /**
                     * Returns {@code true} if the argument represents the same
                     * element as {@code this}, or {@code false} otherwise.
                     * <p>Note that the identity of an element involves implicit state
                     * not directly accessible from the element's methods, including
                     * state about the presence of unrelated types.  Element objects
                     * created by different implementations of these interfaces should
                     * <i>not</i> be expected to be equal even if &quot;the same&quot;
                     * element is being modeled; this is analogous to the inequality
                     * of {@code Class} objects for the same class file loaded through
                     * different class loaders.
                     * @param obj  the object to be compared with this element
                     * @return {#code true} if the specified object represents the same
                     *           element as this
                     */
                    // @ts-ignore
                    equals(obj: java.lang.Object | any): boolean
                    /**
                     * Obeys the general contract of {@link Object#hashCode Object.hashCode}.
                     * @see #equals
                     */
                    // @ts-ignore
                    hashCode(): number /*int*/
                    /**
                     * {@inheritDoc}
                     * <p> To get inherited annotations as well, use {@link
                     * Elements#getAllAnnotationMirrors(Element)
                     * getAllAnnotationMirrors}.
                     * @since 1.6
                     */
                    // @ts-ignore
                    getAnnotationMirrors(): Array<any>
                    /**
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    getAnnotation<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): A
                    /**
                     * Applies a visitor to this element.
                     * @param <R> the return type of the visitor's methods
                     * @param <P> the type of the additional parameter to the visitor's methods
                     * @param v   the visitor operating on this element
                     * @param p   additional parameter to the visitor
                     * @return a visitor-specified result
                     */
                    // @ts-ignore
                    accept<R, P>(v: javax.lang.model.element.ElementVisitor<R, P>, p: P): R
                }
            }
        }
    }
}
