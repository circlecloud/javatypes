declare namespace javax {
    namespace lang {
        namespace model {
            namespace util {
                /**
                 * A visitor of program elements based on their {@linkplain
                 * ElementKind kind} with default behavior appropriate for the {@link
                 * SourceVersion#RELEASE_6 RELEASE_6} source version.  For {@linkplain
                 * Element elements} <tt><i>XYZ</i></tt> that may have more than one
                 * kind, the <tt>visit<i>XYZ</i></tt> methods in this class delegate
                 * to the <tt>visit<i>XYZKind</i></tt> method corresponding to the
                 * first argument's kind.  The <tt>visit<i>XYZKind</i></tt> methods
                 * call {@link #defaultAction defaultAction}, passing their arguments
                 * to {@code defaultAction}'s corresponding parameters.
                 * <p> Methods in this class may be overridden subject to their
                 * general contract.  Note that annotating methods in concrete
                 * subclasses with {@link java.lang.Override @Override} will help
                 * ensure that methods are overridden as intended.
                 * <p> <b>WARNING:</b> The {@code ElementVisitor} interface
                 * implemented by this class may have methods added to it or the
                 * {@code ElementKind} {@code enum} used in this case may have
                 * constants added to it in the future to accommodate new, currently
                 * unknown, language structures added to future versions of the
                 * Java&trade; programming language.  Therefore, methods whose names
                 * begin with {@code "visit"} may be added to this class in the
                 * future; to avoid incompatibilities, classes which extend this class
                 * should not declare any instance methods with names beginning with
                 * {@code "visit"}.
                 * <p>When such a new visit method is added, the default
                 * implementation in this class will be to call the {@link
                 * #visitUnknown visitUnknown} method.  A new abstract element kind
                 * visitor class will also be introduced to correspond to the new
                 * language level; this visitor will have different default behavior
                 * for the visit method in question.  When the new visitor is
                 * introduced, all or portions of this visitor may be deprecated.
                 * <p>Note that adding a default implementation of a new visit method
                 * in a visitor class will occur instead of adding a <em>default
                 * method</em> directly in the visitor interface since a Java SE 8
                 * language feature cannot be used to this version of the API since
                 * this version is required to be runnable on Java SE 7
                 * implementations.  Future versions of the API that are only required
                 * to run on Java SE 8 and later may take advantage of default methods
                 * in this situation.
                 * @param <R> the return type of this visitor's methods.  Use {#link
                 *             Void} for visitors that do not need to return results.
                 * @param <P> the type of the additional parameter to this visitor's
                 *             methods.  Use {#code Void} for visitors that do not need an
                 *             additional parameter.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see ElementKindVisitor7
                 * @see ElementKindVisitor8
                 * @since 1.6
                 */
                // @ts-ignore
                class ElementKindVisitor6<R, P> extends javax.lang.model.util.SimpleElementVisitor6<R, P> {
                    /**
                     * Constructor for concrete subclasses; uses {@code null} for the
                     * default value.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructor for concrete subclasses; uses the argument for the
                     * default value.
                     * @param defaultValue the value to assign to {#link #DEFAULT_VALUE}
                     */
                    // @ts-ignore
                    constructor(defaultValue: R)
                    /**
                     * {@inheritDoc}
                     * The element argument has kind {@code PACKAGE}.
                     * @param e {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return {#inheritDoc}
                     */
                    // @ts-ignore
                    public visitPackage(e: javax.lang.model.element.PackageElement, p: P): R
                    /**
                     * Visits a type element, dispatching to the visit method for the
                     * specific {@linkplain ElementKind kind} of type, {@code
                     * ANNOTATION_TYPE}, {@code CLASS}, {@code ENUM}, or {@code
                     * INTERFACE}.
                     * @param e {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of the kind-specific visit method
                     */
                    // @ts-ignore
                    public visitType(e: javax.lang.model.element.TypeElement, p: P): R
                    /**
                     * Visits an {@code ANNOTATION_TYPE} type element by calling
                     * {@code defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitTypeAsAnnotationType(e: javax.lang.model.element.TypeElement, p: P): R
                    /**
                     * Visits a {@code CLASS} type element by calling {@code
                     * defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitTypeAsClass(e: javax.lang.model.element.TypeElement, p: P): R
                    /**
                     * Visits an {@code ENUM} type element by calling {@code
                     * defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitTypeAsEnum(e: javax.lang.model.element.TypeElement, p: P): R
                    /**
                     * Visits an {@code INTERFACE} type element by calling {@code
                     * defaultAction}.
                     * .
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitTypeAsInterface(e: javax.lang.model.element.TypeElement, p: P): R
                    /**
                     * Visits a variable element, dispatching to the visit method for
                     * the specific {@linkplain ElementKind kind} of variable, {@code
                     * ENUM_CONSTANT}, {@code EXCEPTION_PARAMETER}, {@code FIELD},
                     * {@code LOCAL_VARIABLE}, {@code PARAMETER}, or {@code RESOURCE_VARIABLE}.
                     * @param e {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of the kind-specific visit method
                     */
                    // @ts-ignore
                    public visitVariable(e: javax.lang.model.element.VariableElement, p: P): R
                    /**
                     * Visits an {@code ENUM_CONSTANT} variable element by calling
                     * {@code defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitVariableAsEnumConstant(e: javax.lang.model.element.VariableElement, p: P): R
                    /**
                     * Visits an {@code EXCEPTION_PARAMETER} variable element by calling
                     * {@code defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitVariableAsExceptionParameter(e: javax.lang.model.element.VariableElement, p: P): R
                    /**
                     * Visits a {@code FIELD} variable element by calling
                     * {@code defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitVariableAsField(e: javax.lang.model.element.VariableElement, p: P): R
                    /**
                     * Visits a {@code LOCAL_VARIABLE} variable element by calling
                     * {@code defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitVariableAsLocalVariable(e: javax.lang.model.element.VariableElement, p: P): R
                    /**
                     * Visits a {@code PARAMETER} variable element by calling
                     * {@code defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitVariableAsParameter(e: javax.lang.model.element.VariableElement, p: P): R
                    /**
                     * Visits a {@code RESOURCE_VARIABLE} variable element by calling
                     * {@code visitUnknown}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code visitUnknown}
                     * @since 1.7
                     */
                    // @ts-ignore
                    public visitVariableAsResourceVariable(e: javax.lang.model.element.VariableElement, p: P): R
                    /**
                     * Visits an executable element, dispatching to the visit method
                     * for the specific {@linkplain ElementKind kind} of executable,
                     * {@code CONSTRUCTOR}, {@code INSTANCE_INIT}, {@code METHOD}, or
                     * {@code STATIC_INIT}.
                     * @param e {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of the kind-specific visit method
                     */
                    // @ts-ignore
                    public visitExecutable(e: javax.lang.model.element.ExecutableElement, p: P): R
                    /**
                     * Visits a {@code CONSTRUCTOR} executable element by calling
                     * {@code defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitExecutableAsConstructor(e: javax.lang.model.element.ExecutableElement, p: P): R
                    /**
                     * Visits an {@code INSTANCE_INIT} executable element by calling
                     * {@code defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitExecutableAsInstanceInit(e: javax.lang.model.element.ExecutableElement, p: P): R
                    /**
                     * Visits a {@code METHOD} executable element by calling
                     * {@code defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitExecutableAsMethod(e: javax.lang.model.element.ExecutableElement, p: P): R
                    /**
                     * Visits a {@code STATIC_INIT} executable element by calling
                     * {@code defaultAction}.
                     * @param e the element to visit
                     * @param p a visitor-specified parameter
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    public visitExecutableAsStaticInit(e: javax.lang.model.element.ExecutableElement, p: P): R
                    /**
                     * {@inheritDoc}
                     * The element argument has kind {@code TYPE_PARAMETER}.
                     * @param e {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return {#inheritDoc}
                     */
                    // @ts-ignore
                    public visitTypeParameter(e: javax.lang.model.element.TypeParameterElement, p: P): R
                }
            }
        }
    }
}
