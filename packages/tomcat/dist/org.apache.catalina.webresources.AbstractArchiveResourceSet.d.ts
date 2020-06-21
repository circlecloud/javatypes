declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                // @ts-ignore
                abstract class AbstractArchiveResourceSet extends org.apache.catalina.webresources.AbstractResourceSet {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    archiveEntries: java.util.Map<java.lang.String | string, java.util.jar.JarEntry>
                    // @ts-ignore
                    readonly archiveLock: java.lang.Object | any
                    // @ts-ignore
                    setBaseUrl(baseUrl: java.net.URL): void
                    // @ts-ignore
                    public getBaseUrl(): java.net.URL
                    // @ts-ignore
                    getBaseUrlString(): string
                    // @ts-ignore
                    public list(path: java.lang.String | string): string[]
                    // @ts-ignore
                    public listWebAppPaths(path: java.lang.String | string): Array<java.lang.String | string>
                    /**
                     * Obtain the map of entries in the archive. May return null in which case
                     * {@link #getArchiveEntry(String)} should be used.
                     * @param single Is this request being make to support a single lookup? If
                     *                false, a map will always be returned. If true,
                     *                implementations may use this as a hint in determining the
                     *                optimum way to respond.
                     * @return The archives entries mapped to their names or null if
                     *          {#link #getArchiveEntry(String)} should be used.
                     */
                    // @ts-ignore
                    abstract getArchiveEntries(single: boolean): java.util.Map<java.lang.String | string, java.util.jar.JarEntry>
                    /**
                     * Obtain a single entry from the archive. For performance reasons,
                     * {@link #getArchiveEntries(boolean)} should always be called first and the
                     * archive entry looked up in the map if one is returned. Only if that call
                     * returns null should this method be used.
                     * @param pathInArchive The path in the archive of the entry required
                     * @return The specified archive entry or null if it does not exist
                     */
                    // @ts-ignore
                    abstract getArchiveEntry(pathInArchive: java.lang.String | string): java.util.jar.JarEntry
                    // @ts-ignore
                    public mkdir(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public write(path: java.lang.String | string, jis: java.io.InputStream, overwrite: boolean): boolean
                    // @ts-ignore
                    public getResource(path: java.lang.String | string): org.apache.catalina.WebResource
                    // @ts-ignore
                    abstract isMultiRelease(): boolean
                    // @ts-ignore
                    abstract createArchiveResource(jarEntry: java.util.jar.JarEntry, webAppPath: java.lang.String | string, manifest: java.util.jar.Manifest): org.apache.catalina.WebResource
                    // @ts-ignore
                    public isReadOnly(): boolean
                    // @ts-ignore
                    public setReadOnly(readOnly: boolean): void
                    // @ts-ignore
                    openJarFile(): java.util.jar.JarFile
                    // @ts-ignore
                    closeJarFile(): void
                    // @ts-ignore
                    public gc(): void
                }
            }
        }
    }
}
