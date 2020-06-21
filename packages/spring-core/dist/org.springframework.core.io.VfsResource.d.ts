declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * JBoss VFS based {@link Resource} implementation.
                 * <p>As of Spring 4.0, this class supports VFS 3.x on JBoss AS 6+
                 * (package {@code org.jboss.vfs}) and is in particular compatible with
                 * JBoss AS 7 and WildFly 8+.
                 * @author Ales Justin
                 * @author Juergen Hoeller
                 * @author Costin Leau
                 * @author Sam Brannen
                 * @since 3.0
                 * @see org.jboss.vfs.VirtualFile
                 */
                // @ts-ignore
                class VfsResource extends org.springframework.core.io.AbstractResource {
                    /**
                     * Create a new {@code VfsResource} wrapping the given resource handle.
                     * @param resource a {#code org.jboss.vfs.VirtualFile} instance
                     *  (untyped in order to avoid a static dependency on the VFS API)
                     */
                    // @ts-ignore
                    constructor(resource: java.lang.Object | any)
                    // @ts-ignore
                    public getInputStream(): java.io.InputStream
                    // @ts-ignore
                    public exists(): boolean
                    // @ts-ignore
                    public isReadable(): boolean
                    // @ts-ignore
                    public getURL(): java.net.URL
                    // @ts-ignore
                    public getURI(): java.net.URI
                    // @ts-ignore
                    public getFile(): java.io.File
                    // @ts-ignore
                    public contentLength(): number /*long*/
                    // @ts-ignore
                    public lastModified(): number /*long*/
                    // @ts-ignore
                    public createRelative(relativePath: java.lang.String | string): org.springframework.core.io.Resource
                    // @ts-ignore
                    public getFilename(): string
                    // @ts-ignore
                    public getDescription(): string
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
