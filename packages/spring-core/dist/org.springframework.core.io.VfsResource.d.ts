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
                    constructor(resource: any)
                    // @ts-ignore
                    getInputStream(): java.io.InputStream
                    // @ts-ignore
                    exists(): boolean
                    // @ts-ignore
                    isReadable(): boolean
                    // @ts-ignore
                    getURL(): java.net.URL
                    // @ts-ignore
                    getURI(): java.net.URI
                    // @ts-ignore
                    getFile(): java.io.File
                    // @ts-ignore
                    contentLength(): long
                    // @ts-ignore
                    lastModified(): long
                    // @ts-ignore
                    createRelative(relativePath: string): org.springframework.core.io.Resource
                    // @ts-ignore
                    getFilename(): java.lang.String
                    // @ts-ignore
                    getDescription(): java.lang.String
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
