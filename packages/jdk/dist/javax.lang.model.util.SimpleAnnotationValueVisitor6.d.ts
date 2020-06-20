declare namespace javax {
    namespace lang {
        namespace model {
            namespace util {
                /**
                 * A simple visitor for annotation values with default behavior
                 * appropriate for the {@link SourceVersion#RELEASE_6 RELEASE_6}
                 * source version.  Visit methods call {@link
                 * #defaultAction} passing their arguments to {@code defaultAction}'s
                 * corresponding parameters.
                 * <p> Methods in this class may be overridden subject to their
                 * general contract.  Note that annotating methods in concrete
                 * subclasses with {@link java.lang.Override @Override} will help
                 * ensure that methods are overridden as intended.
                 * <p> <b>WARNING:</b> The {@code AnnotationValueVisitor} interface
                 * implemented by this class may have methods added to it in the
                 * future to accommodate new, currently unknown, language structures
                 * added to future versions of the Java&trade; programming language.
                 * Therefore, methods whose names begin with {@code "visit"} may be
                 * added to this class in the future; to avoid incompatibilities,
                 * classes which extend this class should not declare any instance
                 * methods with names beginning with {@code "visit"}.
                 * <p>When such a new visit method is added, the default
                 * implementation in this class will be to call the {@link
                 * #visitUnknown visitUnknown} method.  A new simple annotation
                 * value visitor class will also be introduced to correspond to the
                 * new language level; this visitor will have different default
                 * behavior for the visit method in question.  When the new visitor is
                 * introduced, all or portions of this visitor may be deprecated.
                 * <p>Note that adding a default implementation of a new visit method
                 * in a visitor class will occur instead of adding a <em>default
                 * method</em> directly in the visitor interface since a Java SE 8
                 * language feature cannot be used to this version of the API since
                 * this version is required to be runnable on Java SE 7
                 * implementations.  Future versions of the API that are only required
                 * to run on Java SE 8 and later may take advantage of default methods
                 * in this situation.
                 * @param <R> the return type of this visitor's methods
                 * @param <P> the type of the additional parameter to this visitor's methods.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see SimpleAnnotationValueVisitor7
                 * @see SimpleAnnotationValueVisitor8
                 * @since 1.6
                 */
                // @ts-ignore
                class SimpleAnnotationValueVisitor6<R, P> extends javax.lang.model.util.AbstractAnnotationValueVisitor6<R, P> {
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
                     * Default value to be returned; {@link #defaultAction
                     * defaultAction} returns this value unless the method is
                     * overridden.
                     */
                    // @ts-ignore
                    readonly DEFAULT_VALUE: R
                    /**
                     * The default action for visit methods.  The implementation in
                     * this class just returns {@link #DEFAULT_VALUE}; subclasses will
                     * commonly override this method.
                     * @param o the value of the annotation
                     * @param p a visitor-specified parameter
                     * @return {#code DEFAULT_VALUE} unless overridden
                     */
                    // @ts-ignore
                    defaultAction(o: any, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param b {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitBoolean(b: boolean, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param b {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitByte(b: number /*byte*/, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param c {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitChar(c: string, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param d {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitDouble(d: number /*double*/, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param f {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitFloat(f: number /*float*/, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param i {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitInt(i: number /*int*/, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param i {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitLong(i: number /*long*/, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param s {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitShort(s: number /*short*/, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param s {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitString(s: string, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param t {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitType(t: javax.lang.model.type.TypeMirror, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param c {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitEnumConstant(c: javax.lang.model.element.VariableElement, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param a {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitAnnotation(a: javax.lang.model.element.AnnotationMirror, p: P): R
                    /**
                     * {@inheritDoc} This implementation calls {@code defaultAction}.
                     * @param vals {#inheritDoc}
                     * @param p {#inheritDoc}
                     * @return the result of {#code defaultAction}
                     */
                    // @ts-ignore
                    visitArray(vals: Array<javax.lang.model.element.AnnotationValue>, p: P): R
                }
            }
        }
    }
}
