declare namespace java {
    namespace lang {
        /**
         * {@code Package} objects contain version information
         * about the implementation and specification of a Java package.
         * This versioning information is retrieved and made available
         * by the {@link ClassLoader} instance that
         * loaded the class(es).  Typically, it is stored in the manifest that is
         * distributed with the classes.
         * <p>The set of classes that make up the package may implement a
         * particular specification and if so the specification title, version number,
         * and vendor strings identify that specification.
         * An application can ask if the package is
         * compatible with a particular version, see the {@link
         * #isCompatibleWith isCompatibleWith}
         * method for details.
         * <p>Specification version numbers use a syntax that consists of nonnegative
         * decimal integers separated by periods ".", for example "2.0" or
         * "1.2.3.4.5.6.7".  This allows an extensible number to be used to represent
         * major, minor, micro, etc. versions.  The version specification is described
         * by the following formal grammar:
         * <blockquote>
         * <dl>
         * <dt><i>SpecificationVersion:</i>
         * <dd><i>Digits RefinedVersion<sub>opt</sub></i>
         * <dt><i>RefinedVersion:</i>
         * <dd>{@code .} <i>Digits</i>
         * <dd>{@code .} <i>Digits RefinedVersion</i>
         * <dt><i>Digits:</i>
         * <dd><i>Digit</i>
         * <dd><i>Digits</i>
         * <dt><i>Digit:</i>
         * <dd>any character for which {@link Character#isDigit} returns {@code true},
         * e.g. 0, 1, 2, ...
         * </dl>
         * </blockquote>
         * <p>The implementation title, version, and vendor strings identify an
         * implementation and are made available conveniently to enable accurate
         * reporting of the packages involved when a problem occurs. The contents
         * all three implementation strings are vendor specific. The
         * implementation version strings have no specified syntax and should
         * only be compared for equality with desired version identifiers.
         * <p>Within each {@code ClassLoader} instance all classes from the same
         * java package have the same Package object.  The static methods allow a package
         * to be found by name or the set of all packages known to the current class
         * loader to be found.
         * @see ClassLoader#definePackage
         */
        // @ts-ignore
        class Package extends java.lang.Object implements java.lang.reflect.AnnotatedElement {
            /**
             * Return the name of this package.
             * @return The fully-qualified name of this package as defined in section 6.5.3 of
             *           <cite>The Java&trade; Language Specification</cite>,
             *           for example, {#code java.lang}
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Return the title of the specification that this package implements.
             * @return the specification title, null is returned if it is not known.
             */
            // @ts-ignore
            getSpecificationTitle(): java.lang.String
            /**
             * Returns the version number of the specification
             * that this package implements.
             * This version string must be a sequence of nonnegative decimal
             * integers separated by "."'s and may have leading zeros.
             * When version strings are compared the most significant
             * numbers are compared.
             * @return the specification version, null is returned if it is not known.
             */
            // @ts-ignore
            getSpecificationVersion(): java.lang.String
            /**
             * Return the name of the organization, vendor,
             * or company that owns and maintains the specification
             * of the classes that implement this package.
             * @return the specification vendor, null is returned if it is not known.
             */
            // @ts-ignore
            getSpecificationVendor(): java.lang.String
            /**
             * Return the title of this package.
             * @return the title of the implementation, null is returned if it is not known.
             */
            // @ts-ignore
            getImplementationTitle(): java.lang.String
            /**
             * Return the version of this implementation. It consists of any string
             * assigned by the vendor of this implementation and does
             * not have any particular syntax specified or expected by the Java
             * runtime. It may be compared for equality with other
             * package version strings used for this implementation
             * by this vendor for this package.
             * @return the version of the implementation, null is returned if it is not known.
             */
            // @ts-ignore
            getImplementationVersion(): java.lang.String
            /**
             * Returns the name of the organization,
             * vendor or company that provided this implementation.
             * @return the vendor that implemented this package..
             */
            // @ts-ignore
            getImplementationVendor(): java.lang.String
            /**
             * Returns true if this package is sealed.
             * @return true if the package is sealed, false otherwise
             */
            // @ts-ignore
            isSealed(): boolean
            /**
             * Returns true if this package is sealed with respect to the specified
             * code source url.
             * @param url the code source url
             * @return true if this package is sealed with respect to url
             */
            // @ts-ignore
            isSealed(url: java.net.URL): boolean
            /**
             * Compare this package's specification version with a
             * desired version. It returns true if
             * this packages specification version number is greater than or equal
             * to the desired version number. <p>
             * Version numbers are compared by sequentially comparing corresponding
             * components of the desired and specification strings.
             * Each component is converted as a decimal integer and the values
             * compared.
             * If the specification value is greater than the desired
             * value true is returned. If the value is less false is returned.
             * If the values are equal the period is skipped and the next pair of
             * components is compared.
             * @param desired the version string of the desired version.
             * @return true if this package's version number is greater
             *           than or equal to the desired version number
             * @exception NumberFormatException if the desired or current version
             *           is not of the correct dotted form.
             */
            // @ts-ignore
            isCompatibleWith(desired: string): boolean
            /**
             * Find a package by name in the callers {@code ClassLoader} instance.
             * The callers {@code ClassLoader} instance is used to find the package
             * instance corresponding to the named class. If the callers
             * {@code ClassLoader} instance is null then the set of packages loaded
             * by the system {@code ClassLoader} instance is searched to find the
             * named package. <p>
             * Packages have attributes for versions and specifications only if the class
             * loader created the package instance with the appropriate attributes. Typically,
             * those attributes are defined in the manifests that accompany the classes.
             * @param name a package name, for example, java.lang.
             * @return the package of the requested name. It may be null if no package
             *           information is available from the archive or codebase.
             */
            // @ts-ignore
            getPackage(name: string): java.lang.Package
            /**
             * Get all the packages currently known for the caller's {@code ClassLoader}
             * instance.  Those packages correspond to classes loaded via or accessible by
             * name to that {@code ClassLoader} instance.  If the caller's
             * {@code ClassLoader} instance is the bootstrap {@code ClassLoader}
             * instance, which may be represented by {@code null} in some implementations,
             * only packages corresponding to classes loaded by the bootstrap
             * {@code ClassLoader} instance will be returned.
             * @return a new array of packages known to the callers {#code ClassLoader}
             *  instance.  An zero length array is returned if none are known.
             */
            // @ts-ignore
            getPackages(): java.lang.Package[]
            /**
             * Return the hash code computed from the package name.
             * @return the hash code computed from the package name.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Returns the string representation of this Package.
             * Its value is the string "package " and the package name.
             * If the package title is defined it is appended.
             * If the package version is defined it is appended.
             * @return the string representation of the package.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * @throws NullPointerException {#inheritDoc}
             * @since 1.5
             */
            // @ts-ignore
            getAnnotation<A extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<A>): A
            /**
             * {@inheritDoc}
             * @throws NullPointerException {#inheritDoc}
             * @since 1.5
             */
            // @ts-ignore
            isAnnotationPresent(annotationClass: java.lang.Class<java.lang.annotation.Annotation>): boolean
            /**
             * @throws NullPointerException {#inheritDoc}
             * @since 1.8
             */
            // @ts-ignore
            getAnnotationsByType<A extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<A>): A
            /**
             * @since 1.5
             */
            // @ts-ignore
            getAnnotations(): java.lang.annotation.Annotation[]
            /**
             * @throws NullPointerException {#inheritDoc}
             * @since 1.8
             */
            // @ts-ignore
            getDeclaredAnnotation<A extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<A>): A
            /**
             * @throws NullPointerException {#inheritDoc}
             * @since 1.8
             */
            // @ts-ignore
            getDeclaredAnnotationsByType<A extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<A>): A
            /**
             * @since 1.5
             */
            // @ts-ignore
            getDeclaredAnnotations(): java.lang.annotation.Annotation[]
        }
    }
}
