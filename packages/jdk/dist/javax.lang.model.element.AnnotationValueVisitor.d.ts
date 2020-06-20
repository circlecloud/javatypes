declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
                /**
                 * A visitor of the values of annotation type elements, using a
                 * variant of the visitor design pattern.  Unlike a standard visitor
                 * which dispatches based on the concrete type of a member of a type
                 * hierarchy, this visitor dispatches based on the type of data
                 * stored; there are no distinct subclasses for storing, for example,
                 * {@code boolean} values versus {@code int} values.  Classes
                 * implementing this interface are used to operate on a value when the
                 * type of that value is unknown at compile time.  When a visitor is
                 * passed to a value's {@link AnnotationValue#accept accept} method,
                 * the <tt>visit<i>XYZ</i></tt> method applicable to that value is
                 * invoked.
                 * <p> Classes implementing this interface may or may not throw a
                 * {@code NullPointerException} if the additional parameter {@code p}
                 * is {@code null}; see documentation of the implementing class for
                 * details.
                 * <p> <b>WARNING:</b> It is possible that methods will be added to
                 * this interface to accommodate new, currently unknown, language
                 * structures added to future versions of the Java&trade; programming
                 * language.  Therefore, visitor classes directly implementing this
                 * interface may be source incompatible with future versions of the
                 * platform.  To avoid this source incompatibility, visitor
                 * implementations are encouraged to instead extend the appropriate
                 * abstract visitor class that implements this interface.  However, an
                 * API should generally use this visitor interface as the type for
                 * parameters, return type, etc. rather than one of the abstract
                 * classes.
                 * <p>Note that methods to accommodate new language constructs could
                 * be added in a source <em>compatible</em> way if they were added as
                 * <em>default methods</em>.  However, default methods are only
                 * available on Java SE 8 and higher releases and the {@code
                 * javax.lang.model.*} packages bundled in Java SE 8 are required to
                 * also be runnable on Java SE 7.  Therefore, default methods
                 * <em>cannot</em> be used when extending {@code javax.lang.model.*}
                 * to cover Java SE 8 language features.  However, default methods may
                 * be used in subsequent revisions of the {@code javax.lang.model.*}
                 * packages that are only required to run on Java SE 8 and higher
                 * platform versions.
                 * @param <R> the return type of this visitor's methods
                 * @param <P> the type of the additional parameter to this visitor's methods.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @since 1.6
                 */
                // @ts-ignore
                interface AnnotationValueVisitor<R, P> {
                    /**
                     * Visits an annotation value.
                     * @param av the value to visit
                     * @param p a visitor-specified parameter
                     * @return a visitor-specified result
                     */
                    // @ts-ignore
                    visit(av: javax.lang.model.element.AnnotationValue, p: P): R
                    /**
                     * A convenience method equivalent to {@code v.visit(av, null)}.
                     * @param av the value to visit
                     * @return a visitor-specified result
                     */
                    // @ts-ignore
                    visit(av: javax.lang.model.element.AnnotationValue): R
                    /**
                     * Visits a {@code boolean} value in an annotation.
                     * @param b the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitBoolean(b: boolean, p: P): R
                    /**
                     * Visits a {@code byte} value in an annotation.
                     * @param b the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitByte(b: number /*byte*/, p: P): R
                    /**
                     * Visits a {@code char} value in an annotation.
                     * @param c the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitChar(c: string, p: P): R
                    /**
                     * Visits a {@code double} value in an annotation.
                     * @param d the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitDouble(d: number /*double*/, p: P): R
                    /**
                     * Visits a {@code float} value in an annotation.
                     * @param f the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitFloat(f: number /*float*/, p: P): R
                    /**
                     * Visits an {@code int} value in an annotation.
                     * @param i the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitInt(i: number /*int*/, p: P): R
                    /**
                     * Visits a {@code long} value in an annotation.
                     * @param i the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitLong(i: number /*long*/, p: P): R
                    /**
                     * Visits a {@code short} value in an annotation.
                     * @param s the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitShort(s: number /*short*/, p: P): R
                    /**
                     * Visits a string value in an annotation.
                     * @param s the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitString(s: string, p: P): R
                    /**
                     * Visits a type value in an annotation.
                     * @param t the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitType(t: javax.lang.model.type.TypeMirror, p: P): R
                    /**
                     * Visits an {@code enum} value in an annotation.
                     * @param c the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitEnumConstant(c: javax.lang.model.element.VariableElement, p: P): R
                    /**
                     * Visits an annotation value in an annotation.
                     * @param a the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitAnnotation(a: javax.lang.model.element.AnnotationMirror, p: P): R
                    /**
                     * Visits an array value in an annotation.
                     * @param vals the value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     */
                    // @ts-ignore
                    visitArray(vals: Array<javax.lang.model.element.AnnotationValue>, p: P): R
                    /**
                     * Visits an unknown kind of annotation value.
                     * This can occur if the language evolves and new kinds
                     * of value can be stored in an annotation.
                     * @param av the unknown value being visited
                     * @param p a visitor-specified parameter
                     * @return the result of the visit
                     * @throws UnknownAnnotationValueException
                     *   a visitor implementation may optionally throw this exception
                     */
                    // @ts-ignore
                    visitUnknown(av: javax.lang.model.element.AnnotationValue, p: P): R
                }
            }
        }
    }
}
