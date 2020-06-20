declare namespace javax {
    namespace lang {
        namespace model {
            namespace util {
                /**
                 * Filters for selecting just the elements of interest from a
                 * collection of elements.  The returned sets and lists are new
                 * collections and do use the argument as a backing store.  The
                 * methods in this class do not make any attempts to guard against
                 * concurrent modifications of the arguments.  The returned sets and
                 * lists are mutable but unsafe for concurrent access.  A returned set
                 * has the same iteration order as the argument set to a method.
                 * <p>If iterables and sets containing {@code null} are passed as
                 * arguments to methods in this class, a {@code NullPointerException}
                 * will be thrown.
                 * <p>Note that a <i>static import</i> statement can make the text of
                 * calls to the methods in this class more concise; for example:
                 * <blockquote><pre>
                 * import static javax.lang.model.util.ElementFilter.*;
                 * ...
                 * {@code List<VariableElement>} fs = fieldsIn(someClass.getEnclosedElements());
                 * </pre></blockquote>
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @author Martin Buchholz
                 * @since 1.6
                 */
                // @ts-ignore
                class ElementFilter extends java.lang.Object {
                    /**
                     * Returns a list of fields in {@code elements}.
                     * @return a list of fields in {#code elements}
                     * @param elements the elements to filter
                     */
                    // @ts-ignore
                    fieldsIn(elements: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.VariableElement>
                    /**
                     * Returns a set of fields in {@code elements}.
                     * @return a set of fields in {#code elements}
                     * @param elements the elements to filter
                     */
                    // @ts-ignore
                    fieldsIn(elements: Array<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.VariableElement>
                    /**
                     * Returns a list of constructors in {@code elements}.
                     * @return a list of constructors in {#code elements}
                     * @param elements the elements to filter
                     */
                    // @ts-ignore
                    constructorsIn(elements: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.ExecutableElement>
                    /**
                     * Returns a set of constructors in {@code elements}.
                     * @return a set of constructors in {#code elements}
                     * @param elements the elements to filter
                     */
                    // @ts-ignore
                    constructorsIn(elements: Array<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.ExecutableElement>
                    /**
                     * Returns a list of methods in {@code elements}.
                     * @return a list of methods in {#code elements}
                     * @param elements the elements to filter
                     */
                    // @ts-ignore
                    methodsIn(elements: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.ExecutableElement>
                    /**
                     * Returns a set of methods in {@code elements}.
                     * @return a set of methods in {#code elements}
                     * @param elements the elements to filter
                     */
                    // @ts-ignore
                    methodsIn(elements: Array<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.ExecutableElement>
                    /**
                     * Returns a list of types in {@code elements}.
                     * @return a list of types in {#code elements}
                     * @param elements the elements to filter
                     */
                    // @ts-ignore
                    typesIn(elements: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.TypeElement>
                    /**
                     * Returns a set of types in {@code elements}.
                     * @return a set of types in {#code elements}
                     * @param elements the elements to filter
                     */
                    // @ts-ignore
                    typesIn(elements: Array<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.TypeElement>
                    /**
                     * Returns a list of packages in {@code elements}.
                     * @return a list of packages in {#code elements}
                     * @param elements the elements to filter
                     */
                    // @ts-ignore
                    packagesIn(elements: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.PackageElement>
                    /**
                     * Returns a set of packages in {@code elements}.
                     * @return a set of packages in {#code elements}
                     * @param elements the elements to filter
                     */
                    // @ts-ignore
                    packagesIn(elements: Array<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.PackageElement>
                }
            }
        }
    }
}
