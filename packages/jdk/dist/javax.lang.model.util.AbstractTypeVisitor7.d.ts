declare namespace javax {
    namespace lang {
        namespace model {
            namespace util {
                /**
                 * A skeletal visitor of types with default behavior appropriate for
                 * the {@link javax.lang.model.SourceVersion#RELEASE_7 RELEASE_7}
                 * source version.
                 * <p> <b>WARNING:</b> The {@code TypeVisitor} interface implemented
                 * by this class may have methods added to it in the future to
                 * accommodate new, currently unknown, language structures added to
                 * future versions of the Java&trade; programming language.
                 * Therefore, methods whose names begin with {@code "visit"} may be
                 * added to this class in the future; to avoid incompatibilities,
                 * classes which extend this class should not declare any instance
                 * methods with names beginning with {@code "visit"}.
                 * <p>When such a new visit method is added, the default
                 * implementation in this class will be to call the {@link
                 * #visitUnknown visitUnknown} method.  A new abstract type visitor
                 * class will also be introduced to correspond to the new language
                 * level; this visitor will have different default behavior for the
                 * visit method in question.  When the new visitor is introduced, all
                 * or portions of this visitor may be deprecated.
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
                 * @see AbstractTypeVisitor6
                 * @see AbstractTypeVisitor8
                 * @since 1.7
                 */
                // @ts-ignore
                class AbstractTypeVisitor7<R, P> extends javax.lang.model.util.AbstractTypeVisitor6<R, P> {
                    /**
                     * Constructor for concrete subclasses to call.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Visits a {@code UnionType} in a manner defined by a subclass.
                     * @param t  {#inheritDoc}
                     * @param p  {#inheritDoc}
                     * @return the result of the visit as defined by a subclass
                     */
                    // @ts-ignore
                    abstract visitUnion(t: javax.lang.model.type.UnionType, p: P): R
                }
            }
        }
    }
}
