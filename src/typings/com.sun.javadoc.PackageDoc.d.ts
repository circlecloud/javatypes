declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents a java package.  Provides access to information
             * about the package, the package's comment and tags, and the
             * classes in the package.
             * <p>
             * Each method whose return type is an array will return an empty
             * array (never null) when there are no objects in the result.
             * @since 1.2
             * @author Kaiyang Liu (original)
             * @author Robert Field (rewrite)
             */
            // @ts-ignore
            interface PackageDoc extends com.sun.javadoc.Doc {
                /**
                 * Get all classes and interfaces in the package, filtered to the specified
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#included">access
                 * modifier option</a>.
                 * @return filtered classes and interfaces in this package
                 * @param filter Specifying true filters according to the specified access
                 *                modifier option.
                 *                Specifying false includes all classes and interfaces
                 *                regardless of access modifier option.
                 * @since 1.4
                 */
                // @ts-ignore
                allClasses(filter: boolean): com.sun.javadoc.ClassDoc[]
                /**
                 * Get all
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#included">included</a>
                 * classes and interfaces in the package.  Same as allClasses(true).
                 * @return all included classes and interfaces in this package.
                 */
                // @ts-ignore
                allClasses(): com.sun.javadoc.ClassDoc[]
                /**
                 * Get included
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#class">ordinary</a>
                 * classes (that is, exclude exceptions, errors, enums, interfaces, and
                 * annotation types)
                 * in this package.
                 * @return included ordinary classes in this package.
                 */
                // @ts-ignore
                ordinaryClasses(): com.sun.javadoc.ClassDoc[]
                /**
                 * Get included Exception classes in this package.
                 * @return included Exceptions in this package.
                 */
                // @ts-ignore
                exceptions(): com.sun.javadoc.ClassDoc[]
                /**
                 * Get included Error classes in this package.
                 * @return included Errors in this package.
                 */
                // @ts-ignore
                errors(): com.sun.javadoc.ClassDoc[]
                /**
                 * Get included enum types in this package.
                 * @return included enum types in this package.
                 * @since 1.5
                 */
                // @ts-ignore
                enums(): com.sun.javadoc.ClassDoc[]
                /**
                 * Get included interfaces in this package, omitting annotation types.
                 * @return included interfaces in this package.
                 */
                // @ts-ignore
                interfaces(): com.sun.javadoc.ClassDoc[]
                /**
                 * Get included annotation types in this package.
                 * @return included annotation types in this package.
                 * @since 1.5
                 */
                // @ts-ignore
                annotationTypes(): com.sun.javadoc.AnnotationTypeDoc[]
                /**
                 * Get the annotations of this package.
                 * Return an empty array if there are none.
                 * @return the annotations of this package.
                 * @since 1.5
                 */
                // @ts-ignore
                annotations(): com.sun.javadoc.AnnotationDesc[]
                /**
                 * Lookup a class or interface within this package.
                 * @return ClassDoc of found class or interface,
                 *  or null if not found.
                 */
                // @ts-ignore
                findClass(className: string): com.sun.javadoc.ClassDoc
            }
        }
    }
}
