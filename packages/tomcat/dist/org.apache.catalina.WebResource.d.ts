declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * Represents a file or directory within a web application. It borrows heavily
             * from {@link java.io.File}.
             */
            // @ts-ignore
            interface WebResource {
                /**
                 * @return {#link java.io.File#lastModified()}.
                 */
                // @ts-ignore
                getLastModified(): number /*long*/
                /**
                 * @return the last modified time of this resource in the correct format for
                 *  the HTTP Last-Modified header as specified by RFC 2616.
                 */
                // @ts-ignore
                getLastModifiedHttp(): string
                /**
                 * @return {#link java.io.File#exists()}.
                 */
                // @ts-ignore
                exists(): boolean
                /**
                 * Indicates if this resource is required for applications to correctly scan
                 * the file structure but that does not exist in either the main or any
                 * additional {@link WebResourceSet}. For example, if an external
                 * directory is mapped to /WEB-INF/lib in an otherwise empty web
                 * application, /WEB-INF will be represented as a virtual resource.
                 * @return <code>true</code> for a virtual resource
                 */
                // @ts-ignore
                isVirtual(): boolean
                /**
                 * @return {#link java.io.File#isDirectory()}.
                 */
                // @ts-ignore
                isDirectory(): boolean
                /**
                 * @return {#link java.io.File#isFile()}.
                 */
                // @ts-ignore
                isFile(): boolean
                /**
                 * @return {#link java.io.File#delete()}.
                 */
                // @ts-ignore
                delete(): boolean
                /**
                 * @return {#link java.io.File#getName()}.
                 */
                // @ts-ignore
                getName(): string
                /**
                 * @return {#link java.io.File#length()}.
                 */
                // @ts-ignore
                getContentLength(): number /*long*/
                /**
                 * @return {#link java.io.File#getCanonicalPath()}.
                 */
                // @ts-ignore
                getCanonicalPath(): string
                /**
                 * @return {#link java.io.File#canRead()}.
                 */
                // @ts-ignore
                canRead(): boolean
                /**
                 * @return The path of this resource relative to the web application root. If the
                 *  resource is a directory, the return value will end in '/'.
                 */
                // @ts-ignore
                getWebappPath(): string
                /**
                 * Return the strong ETag if available (currently not supported) else return
                 * the weak ETag calculated from the content length and last modified.
                 * @return The ETag for this resource
                 */
                // @ts-ignore
                getETag(): string
                /**
                 * Set the MIME type for this Resource.
                 * @param mimeType The mime type that will be associated with the resource
                 */
                // @ts-ignore
                setMimeType(mimeType: java.lang.String | string): void
                /**
                 * @return the MIME type for this Resource.
                 */
                // @ts-ignore
                getMimeType(): string
                /**
                 * Obtain an InputStream based on the contents of this resource.
                 * @return An InputStream based on the contents of this resource or
                 *           <code>null</code> if the resource does not exist or does not
                 *           represent a file
                 */
                // @ts-ignore
                getInputStream(): java.io.InputStream
                /**
                 * @return the cached binary content of this resource.
                 */
                // @ts-ignore
                getContent(): number /*byte*/[]
                /**
                 * @return The time the file was created. If not available, the result of
                 *  {#link #getLastModified()} will be returned.
                 */
                // @ts-ignore
                getCreation(): number /*long*/
                /**
                 * @return a URL to access the resource or <code>null</code> if no such URL
                 *  is available or if the resource does not exist.
                 */
                // @ts-ignore
                getURL(): java.net.URL
                /**
                 * @return the code base for this resource that will be used when looking up the
                 *  assigned permissions for the code base in the security policy file when
                 *  running under a security manager.
                 */
                // @ts-ignore
                getCodeBase(): java.net.URL
                /**
                 * @return a reference to the WebResourceRoot of which this WebResource is a
                 *  part.
                 */
                // @ts-ignore
                getWebResourceRoot(): org.apache.catalina.WebResourceRoot
                /**
                 * @return the certificates that were used to sign this resource to verify
                 *  it or #null if none.
                 * @see java.util.jar.JarEntry#getCertificates()
                 */
                // @ts-ignore
                getCertificates(): java.security.cert.Certificate[]
                /**
                 * @return the manifest associated with this resource or #null if none.
                 * @see java.util.jar.JarFile#getManifest()
                 */
                // @ts-ignore
                getManifest(): java.util.jar.Manifest
            }
        }
    }
}
