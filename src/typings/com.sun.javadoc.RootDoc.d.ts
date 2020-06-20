declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents the root of the program structure information
             * for one run of javadoc.  From this root all other program
             * structure information can be extracted.
             * Also represents the command line information -- the
             * packages, classes and options specified by the user.
             * @since 1.2
             * @author Robert Field
             */
            // @ts-ignore
            interface RootDoc extends com.sun.javadoc.Doc, com.sun.javadoc.DocErrorReporter {
                /**
                 * Command line options.
                 * <p>
                 * For example, given:
                 * <pre>
                 * javadoc -foo this that -bar other ...</pre>
                 * this method will return:
                 * <pre>
                 * options()[0][0] = "-foo"
                 * options()[0][1] = "this"
                 * options()[0][2] = "that"
                 * options()[1][0] = "-bar"
                 * options()[1][1] = "other"</pre>
                 * @return an array of arrays of String.
                 */
                // @ts-ignore
                options(): java.lang.String[][]
                /**
                 * Return the packages
                 * <a href="package-summary.html#included">specified</a>
                 * on the command line.
                 * If <code>-subpackages</code> and <code>-exclude</code> options
                 * are used, return all the non-excluded packages.
                 * @return packages specified on the command line.
                 */
                // @ts-ignore
                specifiedPackages(): com.sun.javadoc.PackageDoc[]
                /**
                 * Return the classes and interfaces
                 * <a href="package-summary.html#included">specified</a>
                 * as source file names on the command line.
                 * @return classes and interfaces specified on the command line.
                 */
                // @ts-ignore
                specifiedClasses(): com.sun.javadoc.ClassDoc[]
                /**
                 * Return the
                 * <a href="package-summary.html#included">included</a>
                 * classes and interfaces in all packages.
                 * @return included classes and interfaces in all packages.
                 */
                // @ts-ignore
                classes(): com.sun.javadoc.ClassDoc[]
                /**
                 * Return a PackageDoc for the specified package name.
                 * @param name package name
                 * @return a PackageDoc holding the specified package, null if
                 *  this package is not referenced.
                 */
                // @ts-ignore
                packageNamed(name: string): com.sun.javadoc.PackageDoc
                /**
                 * Return a ClassDoc for the specified class or interface name.
                 * @param qualifiedName
                 *  <a href="package-summary.html#qualified">qualified</a>
                 *  class or package name
                 * @return a ClassDoc holding the specified class, null if
                 *  this class is not referenced.
                 */
                // @ts-ignore
                classNamed(qualifiedName: string): com.sun.javadoc.ClassDoc
            }
        }
    }
}
