declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
                /**
                 * Represents a package program element.  Provides access to information
                 * about the package and its members.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see javax.lang.model.util.Elements#getPackageOf
                 * @since 1.6
                 */
                // @ts-ignore
                interface PackageElement extends javax.lang.model.element.Element, javax.lang.model.element.QualifiedNameable {
                    /**
                     * Returns the fully qualified name of this package.
                     * This is also known as the package's <i>canonical</i> name.
                     * @return the fully qualified name of this package, or an
                     *  empty name if this is an unnamed package
                     * @jls 6.7 Fully Qualified Names and Canonical Names
                     */
                    // @ts-ignore
                    getQualifiedName(): javax.lang.model.element.Name
                    /**
                     * Returns the simple name of this package.  For an unnamed
                     * package, an empty name is returned.
                     * @return the simple name of this package or an empty name if
                     *  this is an unnamed package
                     */
                    // @ts-ignore
                    getSimpleName(): javax.lang.model.element.Name
                    /**
                     * Returns the {@linkplain NestingKind#TOP_LEVEL top-level}
                     * classes and interfaces within this package.  Note that
                     * subpackages are <em>not</em> considered to be enclosed by a
                     * package.
                     * @return the top-level classes and interfaces within this
                     *  package
                     */
                    // @ts-ignore
                    getEnclosedElements(): Array<any>
                    /**
                     * Returns {@code true} is this is an unnamed package and {@code
                     * false} otherwise.
                     * @return {#code true} is this is an unnamed package and {@code
                     *  false} otherwise
                     * @jls 7.4.2 Unnamed Packages
                     */
                    // @ts-ignore
                    isUnnamed(): boolean
                    /**
                     * Returns {@code null} since a package is not enclosed by another
                     * element.
                     * @return {#code null}
                     */
                    // @ts-ignore
                    getEnclosingElement(): javax.lang.model.element.Element
                }
            }
        }
    }
}
