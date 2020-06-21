declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * Represents the complete set of resources for a web application. The resources
             * for a web application comprise of multiple ResourceSets and when looking for
             * a Resource, the ResourceSets are processed in the following order:
             * <ol>
             * <li>Pre  - Resources defined by the &lt;PreResource&gt; element in the web
             * application's context.xml. Resources will be searched in the order
             * they were specified.</li>
             * <li>Main - The main resources for the web application - i.e. the WAR or the
             * directory containing the expanded WAR</li>
             * <li>JARs - Resource JARs as defined by the Servlet specification. JARs will
             * be searched in the order they were added to the ResourceRoot.</li>
             * <li>Post - Resources defined by the &lt;PostResource&gt; element in the web
             * application's context.xml. Resources will be searched in the order
             * they were specified.</li>
             * </ol>
             * The following conventions should be noted:
             * <ul>
             * <li>Write operations (including delete) will only be applied to the main
             * ResourceSet. The write operation will fail if the presence of a Resource
             * in one of the other ResourceSets effectively makes the operation on the
             * main ResourceSet a NO-OP.</li>
             * <li>A file in a ResourceSet will hide a directory of the same name (and all
             * the contents of that directory) in a ResourceSet that is later in the
             * search order.</li>
             * <li>Only the main ResourceSet may define a META-INF/context.xml since that
             * file defines the Pre- and Post-Resources.</li>
             * <li>As per the Servlet specification, any META-INF or WEB-INF directories in
             * a resource JAR will be ignored.</li>
             * <li>Pre- and Post-Resources may define WEB-INF/lib and WEB-INF/classes in
             * order to make additional libraries and/or classes available to the web
             * application.
             * </ul>
             * This mechanism replaces and extends the following features that were present
             * in earlier versions:
             * <ul>
             * <li>Aliases               - Replaced by Post-Resources with the addition of
             * support for single files as well as directories
             * and JARs.</li>
             * <li>VirtualWebappLoader   - Replaced by Pre- and Post-Resources mapped to
             * WEB-INF/lib and WEB-INF/classes</li>
             * <li>VirtualDirContext     - Replaced by Pre- and Post-Resources</li>
             * <li>External repositories - Replaced by Pre- and Post-Resources mapped to
             * WEB-INF/lib and WEB-INF/classes</li>
             * <li>Resource JARs         - Same feature but implemented using the same
             * mechanism as all the other additional
             * resources.</li>
             * </ul>
             */
            // @ts-ignore
            interface WebResourceRoot extends org.apache.catalina.Lifecycle {
                /**
                 * Obtain the object that represents the resource at the given path. Note
                 * that the resource at that path may not exist. If the path does not
                 * exist, the WebResource returned will be associated with the main
                 * WebResourceSet.
                 * @param path  The path for the resource of interest relative to the root
                 *               of the web application. It must start with '/'.
                 * @return The object that represents the resource at the given path
                 */
                // @ts-ignore
                getResource(path: java.lang.String | string): org.apache.catalina.WebResource
                /**
                 * Obtain the objects that represent the resource at the given path. Note
                 * that the resource at that path may not exist. If the path does not
                 * exist, the WebResource returned will be associated with the main
                 * WebResourceSet. This will include all matches even if the resource would
                 * not normally be accessible (e.g. because it was overridden by another
                 * resource)
                 * @param path  The path for the resource of interest relative to the root
                 *               of the web application. It must start with '/'.
                 * @return The objects that represents the resource at the given path
                 */
                // @ts-ignore
                getResources(path: java.lang.String | string): org.apache.catalina.WebResource[]
                /**
                 * Obtain the object that represents the class loader resource at the given
                 * path. WEB-INF/classes is always searched prior to searching JAR files in
                 * WEB-INF/lib. The search order for JAR files will be consistent across
                 * subsequent calls to this method until the web application is reloaded. No
                 * guarantee is made as to what the search order for JAR files may be.
                 * @param path  The path of the class loader resource of interest relative
                 *               to the the root of class loader resources for this web
                 *               application.
                 * @return The object that represents the class loader resource at the
                 *           given path
                 */
                // @ts-ignore
                getClassLoaderResource(path: java.lang.String | string): org.apache.catalina.WebResource
                /**
                 * Obtain the objects that represent the class loader resource at the given
                 * path. Note that the resource at that path may not exist. If the path does
                 * not exist, the WebResource returned will be associated with the main
                 * WebResourceSet. This will include all matches even if the resource would
                 * not normally be accessible (e.g. because it was overridden by another
                 * resource)
                 * @param path  The path for the class loader resource of interest relative
                 *               to the root of the class loader resources for the web
                 *               application. It must start with '/'.
                 * @return The objects that represents the class loader resources at the
                 *           given path
                 */
                // @ts-ignore
                getClassLoaderResources(path: java.lang.String | string): org.apache.catalina.WebResource[]
                /**
                 * Obtain the list of the names of all of the files and directories located
                 * in the specified directory.
                 * @param path  The path for the resource of interest relative to the root
                 *               of the web application. It must start with '/'.
                 * @return The list of resources. If path does not refer to a directory
                 *           then a zero length array will be returned.
                 */
                // @ts-ignore
                list(path: java.lang.String | string): string[]
                /**
                 * Obtain the Set of the web applications pathnames of all of the files and
                 * directories located in the specified directory. Paths representing
                 * directories will end with a '/' character.
                 * @param path  The path for the resource of interest relative to the root
                 *               of the web application. It must start with '/'.
                 * @return The Set of resources. If path does not refer to a directory
                 *           then null will be returned.
                 */
                // @ts-ignore
                listWebAppPaths(path: java.lang.String | string): Array<java.lang.String | string>
                /**
                 * Obtain the list of all of the WebResources in the specified directory.
                 * @param path  The path for the resource of interest relative to the root
                 *               of the web application. It must start with '/'.
                 * @return The list of resources. If path does not refer to a directory
                 *           then a zero length array will be returned.
                 */
                // @ts-ignore
                listResources(path: java.lang.String | string): org.apache.catalina.WebResource[]
                /**
                 * Create a new directory at the given path.
                 * @param path  The path for the new resource to create relative to the root
                 *               of the web application. It must start with '/'.
                 * @return <code>true</code> if the directory was created, otherwise
                 *           <code>false</code>
                 */
                // @ts-ignore
                mkdir(path: java.lang.String | string): boolean
                /**
                 * Create a new resource at the requested path using the provided
                 * InputStream.
                 * @param path      The path to be used for the new Resource. It is relative
                 *                   to the root of the web application and must start with
                 *                   '/'.
                 * @param is        The InputStream that will provide the content for the
                 *                   new Resource.
                 * @param overwrite If <code>true</code> and the resource already exists it
                 *                   will be overwritten. If <code>false</code> and the
                 *                   resource already exists the write will fail.
                 * @return <code>true</code> if and only if the new Resource is written
                 */
                // @ts-ignore
                write(path: java.lang.String | string, jis: java.io.InputStream, overwrite: boolean): boolean
                /**
                 * Creates a new {@link WebResourceSet} for this {@link WebResourceRoot}
                 * based on the provided parameters.
                 * @param type          The type of {#link WebResourceSet} to create
                 * @param webAppMount   The path within the web application that the
                 *                           resources should be published at. It must start
                 *                           with '/'.
                 * @param url           The URL of the resource (must locate a JAR, file or
                 *                           directory)
                 * @param internalPath  The path within the resource where the content is to
                 *                           be found. It must start with '/'.
                 */
                // @ts-ignore
                createWebResourceSet(type: org.apache.catalina.WebResourceRoot.ResourceSetType, webAppMount: java.lang.String | string, url: java.net.URL, internalPath: java.lang.String | string): void
                /**
                 * Creates a new {@link WebResourceSet} for this {@link WebResourceRoot}
                 * based on the provided parameters.
                 * @param type          The type of {#link WebResourceSet} to create
                 * @param webAppMount   The path within the web application that the
                 *                           resources should be published at. It must start
                 *                           with '/'.
                 * @param base          The location of the resources
                 * @param archivePath   The path within the resource to the archive where
                 *                           the content is to be found. If there is no
                 *                           archive then this should be <code>null</code>.
                 * @param internalPath  The path within the archive (or the resource if the
                 *                           archivePath is <code>null</code> where the
                 *                           content is to be found. It must start with '/'.
                 */
                // @ts-ignore
                createWebResourceSet(type: org.apache.catalina.WebResourceRoot.ResourceSetType, webAppMount: java.lang.String | string, base: java.lang.String | string, archivePath: java.lang.String | string, internalPath: java.lang.String | string): void
                /**
                 * Adds the provided WebResourceSet to this web application as a 'Pre'
                 * resource.
                 * @param webResourceSet the resource set to use
                 */
                // @ts-ignore
                addPreResources(webResourceSet: org.apache.catalina.WebResourceSet): void
                /**
                 * @return the list of WebResourceSet configured to this web application
                 *  as a 'Pre' resource.
                 */
                // @ts-ignore
                getPreResources(): org.apache.catalina.WebResourceSet[]
                /**
                 * Adds the provided WebResourceSet to this web application as a 'Jar'
                 * resource.
                 * @param webResourceSet the resource set to use
                 */
                // @ts-ignore
                addJarResources(webResourceSet: org.apache.catalina.WebResourceSet): void
                /**
                 * @return the list of WebResourceSet configured to this web application
                 *  as a 'Jar' resource.
                 */
                // @ts-ignore
                getJarResources(): org.apache.catalina.WebResourceSet[]
                /**
                 * Adds the provided WebResourceSet to this web application as a 'Post'
                 * resource.
                 * @param webResourceSet the resource set to use
                 */
                // @ts-ignore
                addPostResources(webResourceSet: org.apache.catalina.WebResourceSet): void
                /**
                 * @return the list of WebResourceSet configured to this web application
                 *  as a 'Post' resource.
                 */
                // @ts-ignore
                getPostResources(): org.apache.catalina.WebResourceSet[]
                /**
                 * @return the web application this WebResourceRoot is associated with.
                 */
                // @ts-ignore
                getContext(): org.apache.catalina.Context
                /**
                 * Set the web application this WebResourceRoot is associated with.
                 * @param context the associated context
                 */
                // @ts-ignore
                setContext(context: org.apache.catalina.Context): void
                /**
                 * Configure if this resources allow the use of symbolic links.
                 * @param allowLinking  <code>true</code> if symbolic links are allowed.
                 */
                // @ts-ignore
                setAllowLinking(allowLinking: boolean): void
                /**
                 * Determine if this resources allow the use of symbolic links.
                 * @return <code>true</code> if symbolic links are allowed
                 */
                // @ts-ignore
                getAllowLinking(): boolean
                /**
                 * Set whether or not caching is permitted for this web application.
                 * @param cachingAllowed    <code>true</code> to enable caching, else
                 *                           <code>false</code>
                 */
                // @ts-ignore
                setCachingAllowed(cachingAllowed: boolean): void
                /**
                 * @return <code>true</code> if caching is permitted for this web application.
                 */
                // @ts-ignore
                isCachingAllowed(): boolean
                /**
                 * Set the Time-To-Live (TTL) for cache entries.
                 * @param ttl   TTL in milliseconds
                 */
                // @ts-ignore
                setCacheTtl(ttl: number /*long*/): void
                /**
                 * Get the Time-To-Live (TTL) for cache entries.
                 * @return TTL in milliseconds
                 */
                // @ts-ignore
                getCacheTtl(): number /*long*/
                /**
                 * Set the maximum permitted size for the cache.
                 * @param cacheMaxSize  Maximum cache size in kilobytes
                 */
                // @ts-ignore
                setCacheMaxSize(cacheMaxSize: number /*long*/): void
                /**
                 * Get the maximum permitted size for the cache.
                 * @return Maximum cache size in kilobytes
                 */
                // @ts-ignore
                getCacheMaxSize(): number /*long*/
                /**
                 * Set the maximum permitted size for a single object in the cache. Note
                 * that the maximum size in bytes may not exceed {@link Integer#MAX_VALUE}.
                 * @param cacheObjectMaxSize    Maximum size for a single cached object in
                 *                               kilobytes
                 */
                // @ts-ignore
                setCacheObjectMaxSize(cacheObjectMaxSize: number /*int*/): void
                /**
                 * Get the maximum permitted size for a single object in the cache. Note
                 * that the maximum size in bytes may not exceed {@link Integer#MAX_VALUE}.
                 * @return Maximum size for a single cached object in kilobytes
                 */
                // @ts-ignore
                getCacheObjectMaxSize(): number /*int*/
                /**
                 * Controls whether the track locked files feature is enabled. If enabled,
                 * all calls to methods that return objects that lock a file and need to be
                 * closed to release that lock (e.g. {@link WebResource#getInputStream()}
                 * will perform a number of additional tasks.
                 * <ul>
                 * <li>The stack trace at the point where the method was called will be
                 * recorded and associated with the returned object.</li>
                 * <li>The returned object will be wrapped so that the point where close()
                 * (or equivalent) is called to release the resources can be detected.
                 * Tracking of the object will cease once the resources have been
                 * released.</li>
                 * <li>All remaining locked resources on web application shutdown will be
                 * logged and then closed.</li>
                 * </ul>
                 * @param trackLockedFiles {#code true} to enable it, {@code false} to
                 *                          disable it
                 */
                // @ts-ignore
                setTrackLockedFiles(trackLockedFiles: boolean): void
                /**
                 * Has the track locked files feature been enabled?
                 * @return {#code true} if it has been enabled, otherwise {@code false}
                 */
                // @ts-ignore
                getTrackLockedFiles(): boolean
                /**
                 * This method will be invoked by the context on a periodic basis and allows
                 * the implementation a method that executes periodic tasks, such as purging
                 * expired cache entries.
                 */
                // @ts-ignore
                backgroundProcess(): void
                /**
                 * Add a specified resource to track to be able to later release
                 * resources on stop.
                 * @param trackedResource the resource that will be tracked
                 */
                // @ts-ignore
                registerTrackedResource(trackedResource: org.apache.catalina.TrackedWebResource): void
                /**
                 * Stop tracking specified resource, once it no longer needs to free resources.
                 * @param trackedResource the resource that was tracked
                 */
                // @ts-ignore
                deregisterTrackedResource(trackedResource: org.apache.catalina.TrackedWebResource): void
                /**
                 * @return the set of {#link WebResourceSet#getBaseUrl()} for all
                 *  {@link WebResourceSet}s used by this root.
                 */
                // @ts-ignore
                getBaseUrls(): Array<java.net.URL>
                /**
                 * Implementations may cache some information to improve performance. This
                 * method triggers the clean-up of those resources.
                 */
                // @ts-ignore
                gc(): void
            }
        }
    }
}
