declare namespace java {
    namespace util {
        namespace jar {
            namespace Attributes {
                /**
                 * The Attributes.Name class represents an attribute name stored in
                 * this Map. Valid attribute names are case-insensitive, are restricted
                 * to the ASCII characters in the set [0-9a-zA-Z_-], and cannot exceed
                 * 70 characters in length. Attribute values can contain any characters
                 * and will be UTF8-encoded when written to the output stream.  See the
                 * <a href="../../../../technotes/guides/jar/jar.html">JAR File Specification</a>
                 * for more information about valid attribute names and values.
                 */
                // @ts-ignore
                class Name extends java.lang.Object {
                    /**
                     * Constructs a new attribute name using the given string name.
                     * @param name the attribute string name
                     * @exception IllegalArgumentException if the attribute name was
                     *             invalid
                     * @exception NullPointerException if the attribute name was null
                     */
                    // @ts-ignore
                    constructor(name: string)
                    /**
                     * <code>Name</code> object for <code>Manifest-Version</code>
                     * manifest attribute. This attribute indicates the version number
                     * of the manifest standard to which a JAR file's manifest conforms.
                     * @see <a href="../../../../technotes/guides/jar/jar.html#JAR_Manifest">
                     *       Manifest and Signature Specification</a>
                     */
                    // @ts-ignore
                    readonly MANIFEST_VERSION: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Signature-Version</code>
                     * manifest attribute used when signing JAR files.
                     * @see <a href="../../../../technotes/guides/jar/jar.html#JAR_Manifest">
                     *       Manifest and Signature Specification</a>
                     */
                    // @ts-ignore
                    readonly SIGNATURE_VERSION: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Content-Type</code>
                     * manifest attribute.
                     */
                    // @ts-ignore
                    readonly CONTENT_TYPE: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Class-Path</code>
                     * manifest attribute. Bundled extensions can use this attribute
                     * to find other JAR files containing needed classes.
                     * @see <a href="../../../../technotes/guides/jar/jar.html#classpath">
                     *       JAR file specification</a>
                     */
                    // @ts-ignore
                    readonly CLASS_PATH: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Main-Class</code> manifest
                     * attribute used for launching applications packaged in JAR files.
                     * The <code>Main-Class</code> attribute is used in conjunction
                     * with the <code>-jar</code> command-line option of the
                     * <tt>java</tt> application launcher.
                     */
                    // @ts-ignore
                    readonly MAIN_CLASS: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Sealed</code> manifest attribute
                     * used for sealing.
                     * @see <a href="../../../../technotes/guides/jar/jar.html#sealing">
                     *       Package Sealing</a>
                     */
                    // @ts-ignore
                    readonly SEALED: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Extension-List</code> manifest attribute
                     * used for declaring dependencies on installed extensions.
                     * @see <a href="../../../../technotes/guides/extensions/spec.html#dependency">
                     *       Installed extension dependency</a>
                     */
                    // @ts-ignore
                    readonly EXTENSION_LIST: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Extension-Name</code> manifest attribute
                     * used for declaring dependencies on installed extensions.
                     * @see <a href="../../../../technotes/guides/extensions/spec.html#dependency">
                     *       Installed extension dependency</a>
                     */
                    // @ts-ignore
                    readonly EXTENSION_NAME: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Extension-Name</code> manifest attribute
                     * used for declaring dependencies on installed extensions.
                     * @deprecated Extension mechanism will be removed in a future release.
                     *              Use class path instead.
                     * @see <a href="../../../../technotes/guides/extensions/spec.html#dependency">
                     *       Installed extension dependency</a>
                     */
                    // @ts-ignore
                    readonly EXTENSION_INSTALLATION: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Implementation-Title</code>
                     * manifest attribute used for package versioning.
                     * @see <a href="../../../../technotes/guides/versioning/spec/versioning2.html#wp90779">
                     *       Java Product Versioning Specification</a>
                     */
                    // @ts-ignore
                    readonly IMPLEMENTATION_TITLE: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Implementation-Version</code>
                     * manifest attribute used for package versioning.
                     * @see <a href="../../../../technotes/guides/versioning/spec/versioning2.html#wp90779">
                     *       Java Product Versioning Specification</a>
                     */
                    // @ts-ignore
                    readonly IMPLEMENTATION_VERSION: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Implementation-Vendor</code>
                     * manifest attribute used for package versioning.
                     * @see <a href="../../../../technotes/guides/versioning/spec/versioning2.html#wp90779">
                     *       Java Product Versioning Specification</a>
                     */
                    // @ts-ignore
                    readonly IMPLEMENTATION_VENDOR: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Implementation-Vendor-Id</code>
                     * manifest attribute used for package versioning.
                     * @deprecated Extension mechanism will be removed in a future release.
                     *              Use class path instead.
                     * @see <a href="../../../../technotes/guides/extensions/versioning.html#applet">
                     *       Optional Package Versioning</a>
                     */
                    // @ts-ignore
                    readonly IMPLEMENTATION_VENDOR_ID: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Implementation-URL</code>
                     * manifest attribute used for package versioning.
                     * @deprecated Extension mechanism will be removed in a future release.
                     *              Use class path instead.
                     * @see <a href="../../../../technotes/guides/extensions/versioning.html#applet">
                     *       Optional Package Versioning</a>
                     */
                    // @ts-ignore
                    readonly IMPLEMENTATION_URL: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Specification-Title</code>
                     * manifest attribute used for package versioning.
                     * @see <a href="../../../../technotes/guides/versioning/spec/versioning2.html#wp90779">
                     *       Java Product Versioning Specification</a>
                     */
                    // @ts-ignore
                    readonly SPECIFICATION_TITLE: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Specification-Version</code>
                     * manifest attribute used for package versioning.
                     * @see <a href="../../../../technotes/guides/versioning/spec/versioning2.html#wp90779">
                     *       Java Product Versioning Specification</a>
                     */
                    // @ts-ignore
                    readonly SPECIFICATION_VERSION: java.util.jar.Attributes.Name
                    /**
                     * <code>Name</code> object for <code>Specification-Vendor</code>
                     * manifest attribute used for package versioning.
                     * @see <a href="../../../../technotes/guides/versioning/spec/versioning2.html#wp90779">
                     *       Java Product Versioning Specification</a>
                     */
                    // @ts-ignore
                    readonly SPECIFICATION_VENDOR: java.util.jar.Attributes.Name
                    /**
                     * Compares this attribute name to another for equality.
                     * @param o the object to compare
                     * @return true if this attribute name is equal to the
                     *          specified attribute object
                     */
                    // @ts-ignore
                    equals(o: any): boolean
                    /**
                     * Computes the hash value for this attribute name.
                     */
                    // @ts-ignore
                    hashCode(): int
                    /**
                     * Returns the attribute name as a String.
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
