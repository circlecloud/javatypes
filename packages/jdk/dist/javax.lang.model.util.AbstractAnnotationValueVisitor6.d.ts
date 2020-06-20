declare namespace javax {
    namespace lang {
        namespace model {
            namespace util {
                /**
                 * A skeletal visitor for annotation values with default behavior
                 * appropriate for the {@link SourceVersion#RELEASE_6 RELEASE_6}
                 * source version.
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
                 * #visitUnknown visitUnknown} method.  A new abstract annotation
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
                 * @see AbstractAnnotationValueVisitor7
                 * @see AbstractAnnotationValueVisitor8
                 * @since 1.6
                 */
                // @ts-ignore
                class AbstractAnnotationValueVisitor6<R, P> extends java.lang.Object implements javax.lang.model.element.AnnotationValueVisitor<R, P> {
                    /**
                     * Constructor for concrete subclasses to call.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Visits an annotation value as if by passing itself to that
                     * value's {@link AnnotationValue#accept accept}.  The invocation
                     * {@code v.visit(av)} is equivalent to {@code av.accept(v, p)}.
                     * @param av {#inheritDoc}
                     * @param p  {#inheritDoc}
                     */
                    // @ts-ignore
                    visit(av: javax.lang.model.element.AnnotationValue, p: P): R
                    /**
                     * Visits an annotation value as if by passing itself to that
                     * value's {@link AnnotationValue#accept accept} method passing
                     * {@code null} for the additional parameter.  The invocation
                     * {@code v.visit(av)} is equivalent to {@code av.accept(v,
                     * null)}.
                     * @param av {#inheritDoc}
                     */
                    // @ts-ignore
                    visit(av: javax.lang.model.element.AnnotationValue): R
                    /**
                     * {@inheritDoc}
                     * <p>The default implementation of this method in {@code
                     * AbstractAnnotationValueVisitor6} will always throw {@code
                     * UnknownAnnotationValueException}.  This behavior is not
                     * required of a subclass.
                     * @param av {#inheritDoc}
                     * @param p  {#inheritDoc}
                     */
                    // @ts-ignore
                    visitUnknown(av: javax.lang.model.element.AnnotationValue, p: P): R
                }
            }
        }
    }
}
