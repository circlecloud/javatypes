declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents a java program element: class, interface, field,
             * constructor, or method.
             * This is an abstract class dealing with information common to
             * these elements.
             * @see MemberDoc
             * @see ClassDoc
             * @author Robert Field
             */
            // @ts-ignore
            interface ProgramElementDoc extends com.sun.javadoc.Doc {
                /**
                 * Get the containing class or interface of this program element.
                 * @return a ClassDoc for this element's containing class or interface.
                 *  If this is a top-level class or interface, return null.
                 */
                // @ts-ignore
                containingClass(): com.sun.javadoc.ClassDoc
                /**
                 * Get the package that this program element is contained in.
                 * @return a PackageDoc for this element containing package.
                 *  If in the unnamed package, this PackageDoc will have the
                 *  name "".
                 */
                // @ts-ignore
                containingPackage(): com.sun.javadoc.PackageDoc
                /**
                 * Get the fully qualified name of this program element.
                 * For example, for the class <code>java.util.Hashtable</code>,
                 * return "java.util.Hashtable".
                 * <p>
                 * For the method <code>bar()</code> in class <code>Foo</code>
                 * in the unnamed package, return "Foo.bar".
                 * @return the qualified name of the program element as a String.
                 */
                // @ts-ignore
                qualifiedName(): string
                /**
                 * Get the modifier specifier integer.
                 * @see java.lang.reflect.Modifier
                 */
                // @ts-ignore
                modifierSpecifier(): number /*int*/
                /**
                 * Get modifiers string.
                 * For example, for:
                 * <pre>
                 * public abstract int foo() { ... }
                 * </pre>
                 * return "public abstract".
                 * Annotations are not included.
                 */
                // @ts-ignore
                modifiers(): string
                /**
                 * Get the annotations of this program element.
                 * Return an empty array if there are none.
                 * @return the annotations of this program element.
                 * @since 1.5
                 */
                // @ts-ignore
                annotations(): com.sun.javadoc.AnnotationDesc[]
                /**
                 * Return true if this program element is public.
                 */
                // @ts-ignore
                isPublic(): boolean
                /**
                 * Return true if this program element is protected.
                 */
                // @ts-ignore
                isProtected(): boolean
                /**
                 * Return true if this program element is private.
                 */
                // @ts-ignore
                isPrivate(): boolean
                /**
                 * Return true if this program element is package private.
                 */
                // @ts-ignore
                isPackagePrivate(): boolean
                /**
                 * Return true if this program element is static.
                 */
                // @ts-ignore
                isStatic(): boolean
                /**
                 * Return true if this program element is final.
                 */
                // @ts-ignore
                isFinal(): boolean
            }
        }
    }
}
