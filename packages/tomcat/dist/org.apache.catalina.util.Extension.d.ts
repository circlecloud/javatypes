declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Utility class that represents either an available "Optional Package"
                 * (formerly known as "Standard Extension") as described in the manifest
                 * of a JAR file, or the requirement for such an optional package.  It is
                 * used to support the requirements of the Servlet Specification, version
                 * 2.3, related to providing shared extensions to all webapps.
                 * <p>
                 * In addition, static utility methods are available to scan a manifest
                 * and return an array of either available or required optional modules
                 * documented in that manifest.
                 * <p>
                 * For more information about optional packages, see the document
                 * <em>Optional Package Versioning</em> in the documentation bundle for your
                 * Java2 Standard Edition package, in file
                 * <code>guide/extensions/versioning.html</code>.
                 * @author Craig McClanahan
                 * @author Justyna Horwat
                 * @author Greg Murray
                 */
                // @ts-ignore
                class Extension extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getExtensionName(): string
                    // @ts-ignore
                    public setExtensionName(extensionName: java.lang.String | string): void
                    // @ts-ignore
                    public getImplementationURL(): string
                    // @ts-ignore
                    public setImplementationURL(implementationURL: java.lang.String | string): void
                    // @ts-ignore
                    public getImplementationVendor(): string
                    // @ts-ignore
                    public setImplementationVendor(implementationVendor: java.lang.String | string): void
                    // @ts-ignore
                    public getImplementationVendorId(): string
                    // @ts-ignore
                    public setImplementationVendorId(implementationVendorId: java.lang.String | string): void
                    // @ts-ignore
                    public getImplementationVersion(): string
                    // @ts-ignore
                    public setImplementationVersion(implementationVersion: java.lang.String | string): void
                    // @ts-ignore
                    public getSpecificationVendor(): string
                    // @ts-ignore
                    public setSpecificationVendor(specificationVendor: java.lang.String | string): void
                    // @ts-ignore
                    public getSpecificationVersion(): string
                    // @ts-ignore
                    public setSpecificationVersion(specificationVersion: java.lang.String | string): void
                    // @ts-ignore
                    public setFulfilled(fulfilled: boolean): void
                    // @ts-ignore
                    public isFulfilled(): boolean
                    /**
                     * Return <code>true</code> if the specified <code>Extension</code>
                     * (which represents an optional package required by this application)
                     * is satisfied by this <code>Extension</code> (which represents an
                     * optional package that is already installed.  Otherwise, return
                     * <code>false</code>.
                     * @param required Extension of the required optional package
                     * @return <code>true</code> if the extension is satisfied
                     */
                    // @ts-ignore
                    public isCompatibleWith(required: org.apache.catalina.util.Extension): boolean
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
