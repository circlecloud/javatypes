declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * {@link Resource} implementation for {@code java.net.URL} locators.
                 * Supports resolution as a {@code URL} and also as a {@code File} in
                 * case of the {@code "file:"} protocol.
                 * @author Juergen Hoeller
                 * @since 28.12.2003
                 * @see java.net.URL
                 */
                // @ts-ignore
                class UrlResource extends org.springframework.core.io.AbstractFileResolvingResource {
                    /**
                     * Create a new {@code UrlResource} based on the given URI object.
                     * @param uri a URI
                     * @throws MalformedURLException if the given URL path is not valid
                     * @since 2.5
                     */
                    // @ts-ignore
                    constructor(uri: java.net.URI)
                    /**
                     * Create a new {@code UrlResource} based on the given URL object.
                     * @param url a URL
                     */
                    // @ts-ignore
                    constructor(url: java.net.URL)
                    /**
                     * Create a new {@code UrlResource} based on a URL path.
                     * <p>Note: The given path needs to be pre-encoded if necessary.
                     * @param path a URL path
                     * @throws MalformedURLException if the given URL path is not valid
                     * @see java.net.URL#URL(String)
                     */
                    // @ts-ignore
                    constructor(path: string)
                    /**
                     * Create a new {@code UrlResource} based on a URI specification.
                     * <p>The given parts will automatically get encoded if necessary.
                     * @param protocol the URL protocol to use (e.g. "jar" or "file" - without colon);
                     *  also known as "scheme"
                     * @param location the location (e.g. the file path within that protocol);
                     *  also known as "scheme-specific part"
                     * @throws MalformedURLException if the given URL specification is not valid
                     * @see java.net.URI#URI(String, String, String)
                     */
                    // @ts-ignore
                    constructor(protocol: string, location: string)
                    /**
                     * Create a new {@code UrlResource} based on a URI specification.
                     * <p>The given parts will automatically get encoded if necessary.
                     * @param protocol the URL protocol to use (e.g. "jar" or "file" - without colon);
                     *  also known as "scheme"
                     * @param location the location (e.g. the file path within that protocol);
                     *  also known as "scheme-specific part"
                     * @param fragment the fragment within that location (e.g. anchor on an HTML page,
                     *  as following after a "#" separator)
                     * @throws MalformedURLException if the given URL specification is not valid
                     * @see java.net.URI#URI(String, String, String)
                     */
                    // @ts-ignore
                    constructor(protocol: string, location: string, fragment: string)
                    /**
                     * This implementation opens an InputStream for the given URL.
                     * <p>It sets the {@code useCaches} flag to {@code false},
                     * mainly to avoid jar file locking on Windows.
                     * @see java.net.URL#openConnection()
                     * @see java.net.URLConnection#setUseCaches(boolean)
                     * @see java.net.URLConnection#getInputStream()
                     */
                    // @ts-ignore
                    getInputStream(): java.io.InputStream
                    /**
                     * This implementation returns the underlying URL reference.
                     */
                    // @ts-ignore
                    getURL(): java.net.URL
                    /**
                     * This implementation returns the underlying URI directly,
                     * if possible.
                     */
                    // @ts-ignore
                    getURI(): java.net.URI
                    // @ts-ignore
                    isFile(): boolean
                    /**
                     * This implementation returns a File reference for the underlying URL/URI,
                     * provided that it refers to a file in the file system.
                     * @see org.springframework.util.ResourceUtils#getFile(java.net.URL, String)
                     */
                    // @ts-ignore
                    getFile(): java.io.File
                    /**
                     * This implementation creates a {@code UrlResource}, delegating to
                     * {@link #createRelativeURL(String)} for adapting the relative path.
                     * @see #createRelativeURL(String)
                     */
                    // @ts-ignore
                    createRelative(relativePath: string): org.springframework.core.io.Resource
                    /**
                     * This delegate creates a {@code java.net.URL}, applying the given path
                     * relative to the path of the underlying URL of this resource descriptor.
                     * A leading slash will get dropped; a "#" symbol will get encoded.
                     * @since 5.2
                     * @see #createRelative(String)
                     * @see java.net.URL#URL(java.net.URL, String)
                     */
                    // @ts-ignore
                    createRelativeURL(relativePath: string): java.net.URL
                    /**
                     * This implementation returns the name of the file that this URL refers to.
                     * @see java.net.URL#getPath()
                     */
                    // @ts-ignore
                    getFilename(): java.lang.String
                    /**
                     * This implementation returns a description that includes the URL.
                     */
                    // @ts-ignore
                    getDescription(): java.lang.String
                    /**
                     * This implementation compares the underlying URL references.
                     */
                    // @ts-ignore
                    equals(other: any): boolean
                    /**
                     * This implementation returns the hash code of the underlying URL reference.
                     */
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
