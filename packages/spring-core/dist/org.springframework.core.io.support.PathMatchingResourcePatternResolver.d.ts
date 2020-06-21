declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace support {
                    /**
                     * A {@link ResourcePatternResolver} implementation that is able to resolve a
                     * specified resource location path into one or more matching Resources.
                     * The source path may be a simple path which has a one-to-one mapping to a
                     * target {@link org.springframework.core.io.Resource}, or alternatively
                     * may contain the special "{@code classpath*:}" prefix and/or
                     * internal Ant-style regular expressions (matched using Spring's
                     * {@link org.springframework.util.AntPathMatcher} utility).
                     * Both of the latter are effectively wildcards.
                     * <p><b>No Wildcards:</b>
                     * <p>In the simple case, if the specified location path does not start with the
                     * {@code "classpath*:}" prefix, and does not contain a PathMatcher pattern,
                     * this resolver will simply return a single resource via a
                     * {@code getResource()} call on the underlying {@code ResourceLoader}.
                     * Examples are real URLs such as "{@code file:C:/context.xml}", pseudo-URLs
                     * such as "{@code classpath:/context.xml}", and simple unprefixed paths
                     * such as "{@code /WEB-INF/context.xml}". The latter will resolve in a
                     * fashion specific to the underlying {@code ResourceLoader} (e.g.
                     * {@code ServletContextResource} for a {@code WebApplicationContext}).
                     * <p><b>Ant-style Patterns:</b>
                     * <p>When the path location contains an Ant-style pattern, e.g.:
                     * <pre class="code">
                     * /WEB-INF/*-context.xml
                     * com/mycompany/**&#47;applicationContext.xml
                     * file:C:/some/path/*-context.xml
                     * classpath:com/mycompany/**&#47;applicationContext.xml</pre>
                     * the resolver follows a more complex but defined procedure to try to resolve
                     * the wildcard. It produces a {@code Resource} for the path up to the last
                     * non-wildcard segment and obtains a {@code URL} from it. If this URL is
                     * not a "{@code jar:}" URL or container-specific variant (e.g.
                     * "{@code zip:}" in WebLogic, "{@code wsjar}" in WebSphere", etc.),
                     * then a {@code java.io.File} is obtained from it, and used to resolve the
                     * wildcard by walking the filesystem. In the case of a jar URL, the resolver
                     * either gets a {@code java.net.JarURLConnection} from it, or manually parses
                     * the jar URL, and then traverses the contents of the jar file, to resolve the
                     * wildcards.
                     * <p><b>Implications on portability:</b>
                     * <p>If the specified path is already a file URL (either explicitly, or
                     * implicitly because the base {@code ResourceLoader} is a filesystem one,
                     * then wildcarding is guaranteed to work in a completely portable fashion.
                     * <p>If the specified path is a classpath location, then the resolver must
                     * obtain the last non-wildcard path segment URL via a
                     * {@code Classloader.getResource()} call. Since this is just a
                     * node of the path (not the file at the end) it is actually undefined
                     * (in the ClassLoader Javadocs) exactly what sort of a URL is returned in
                     * this case. In practice, it is usually a {@code java.io.File} representing
                     * the directory, where the classpath resource resolves to a filesystem
                     * location, or a jar URL of some sort, where the classpath resource resolves
                     * to a jar location. Still, there is a portability concern on this operation.
                     * <p>If a jar URL is obtained for the last non-wildcard segment, the resolver
                     * must be able to get a {@code java.net.JarURLConnection} from it, or
                     * manually parse the jar URL, to be able to walk the contents of the jar,
                     * and resolve the wildcard. This will work in most environments, but will
                     * fail in others, and it is strongly recommended that the wildcard
                     * resolution of resources coming from jars be thoroughly tested in your
                     * specific environment before you rely on it.
                     * <p><b>{@code classpath*:} Prefix:</b>
                     * <p>There is special support for retrieving multiple class path resources with
                     * the same name, via the "{@code classpath*:}" prefix. For example,
                     * "{@code classpath*:META-INF/beans.xml}" will find all "beans.xml"
                     * files in the class path, be it in "classes" directories or in JAR files.
                     * This is particularly useful for autodetecting config files of the same name
                     * at the same location within each jar file. Internally, this happens via a
                     * {@code ClassLoader.getResources()} call, and is completely portable.
                     * <p>The "classpath*:" prefix can also be combined with a PathMatcher pattern in
                     * the rest of the location path, for example "classpath*:META-INF/*-beans.xml".
                     * In this case, the resolution strategy is fairly simple: a
                     * {@code ClassLoader.getResources()} call is used on the last non-wildcard
                     * path segment to get all the matching resources in the class loader hierarchy,
                     * and then off each resource the same PathMatcher resolution strategy described
                     * above is used for the wildcard subpath.
                     * <p><b>Other notes:</b>
                     * <p><b>WARNING:</b> Note that "{@code classpath*:}" when combined with
                     * Ant-style patterns will only work reliably with at least one root directory
                     * before the pattern starts, unless the actual target files reside in the file
                     * system. This means that a pattern like "{@code classpath*:*.xml}" will
                     * <i>not</i> retrieve files from the root of jar files but rather only from the
                     * root of expanded directories. This originates from a limitation in the JDK's
                     * {@code ClassLoader.getResources()} method which only returns file system
                     * locations for a passed-in empty String (indicating potential roots to search).
                     * This {@code ResourcePatternResolver} implementation is trying to mitigate the
                     * jar root lookup limitation through {@link URLClassLoader} introspection and
                     * "java.class.path" manifest evaluation; however, without portability guarantees.
                     * <p><b>WARNING:</b> Ant-style patterns with "classpath:" resources are not
                     * guaranteed to find matching resources if the root package to search is available
                     * in multiple class path locations. This is because a resource such as
                     * <pre class="code">
                     * com/mycompany/package1/service-context.xml
                     * </pre>
                     * may be in only one location, but when a path such as
                     * <pre class="code">
                     * classpath:com/mycompany/**&#47;service-context.xml
                     * </pre>
                     * is used to try to resolve it, the resolver will work off the (first) URL
                     * returned by {@code getResource("com/mycompany");}. If this base package node
                     * exists in multiple classloader locations, the actual end resource may not be
                     * underneath. Therefore, preferably, use "{@code classpath*:}" with the same
                     * Ant-style pattern in such a case, which will search <i>all</i> class path
                     * locations that contain the root package.
                     * @author Juergen Hoeller
                     * @author Colin Sampaleanu
                     * @author Marius Bogoevici
                     * @author Costin Leau
                     * @author Phillip Webb
                     * @since 1.0.2
                     * @see #CLASSPATH_ALL_URL_PREFIX
                     * @see org.springframework.util.AntPathMatcher
                     * @see org.springframework.core.io.ResourceLoader#getResource(String)
                     * @see ClassLoader#getResources(String)
                     */
                    // @ts-ignore
                    class PathMatchingResourcePatternResolver extends java.lang.Object implements org.springframework.core.io.support.ResourcePatternResolver {
                        /**
                         * Create a new PathMatchingResourcePatternResolver with a DefaultResourceLoader.
                         * <p>ClassLoader access will happen via the thread context class loader.
                         * @see org.springframework.core.io.DefaultResourceLoader
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new PathMatchingResourcePatternResolver.
                         * <p>ClassLoader access will happen via the thread context class loader.
                         * @param resourceLoader the ResourceLoader to load root directories and
                         *  actual resources with
                         */
                        // @ts-ignore
                        constructor(resourceLoader: org.springframework.core.io.ResourceLoader)
                        /**
                         * Create a new PathMatchingResourcePatternResolver with a DefaultResourceLoader.
                         * @param classLoader the ClassLoader to load classpath resources with,
                         *  or {#code null} for using the thread context class loader
                         *  at the time of actual resource access
                         * @see org.springframework.core.io.DefaultResourceLoader
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader)
                        /**
                         * Return the ResourceLoader that this pattern resolver works with.
                         */
                        // @ts-ignore
                        public getResourceLoader(): org.springframework.core.io.ResourceLoader
                        // @ts-ignore
                        public getClassLoader(): java.lang.ClassLoader
                        /**
                         * Set the PathMatcher implementation to use for this
                         * resource pattern resolver. Default is AntPathMatcher.
                         * @see org.springframework.util.AntPathMatcher
                         */
                        // @ts-ignore
                        public setPathMatcher(pathMatcher: org.springframework.util.PathMatcher): void
                        /**
                         * Return the PathMatcher that this resource pattern resolver uses.
                         */
                        // @ts-ignore
                        public getPathMatcher(): org.springframework.util.PathMatcher
                        // @ts-ignore
                        public getResource(location: java.lang.String | string): org.springframework.core.io.Resource
                        // @ts-ignore
                        public getResources(locationPattern: java.lang.String | string): org.springframework.core.io.Resource[]
                        /**
                         * Find all class location resources with the given location via the ClassLoader.
                         * Delegates to {@link #doFindAllClassPathResources(String)}.
                         * @param location the absolute path within the classpath
                         * @return the result as Resource array
                         * @throws IOException in case of I/O errors
                         * @see java.lang.ClassLoader#getResources
                         * @see #convertClassLoaderURL
                         */
                        // @ts-ignore
                        findAllClassPathResources(location: java.lang.String | string): org.springframework.core.io.Resource[]
                        /**
                         * Find all class location resources with the given path via the ClassLoader.
                         * Called by {@link #findAllClassPathResources(String)}.
                         * @param path the absolute path within the classpath (never a leading slash)
                         * @return a mutable Set of matching Resource instances
                         * @since 4.1.1
                         */
                        // @ts-ignore
                        doFindAllClassPathResources(path: java.lang.String | string): Array<org.springframework.core.io.Resource>
                        /**
                         * Convert the given URL as returned from the ClassLoader into a {@link Resource}.
                         * <p>The default implementation simply creates a {@link UrlResource} instance.
                         * @param url a URL as returned from the ClassLoader
                         * @return the corresponding Resource object
                         * @see java.lang.ClassLoader#getResources
                         * @see org.springframework.core.io.Resource
                         */
                        // @ts-ignore
                        convertClassLoaderURL(url: java.net.URL): org.springframework.core.io.Resource
                        /**
                         * Search all {@link URLClassLoader} URLs for jar file references and add them to the
                         * given set of resources in the form of pointers to the root of the jar file content.
                         * @param classLoader the ClassLoader to search (including its ancestors)
                         * @param result the set of resources to add jar roots to
                         * @since 4.1.1
                         */
                        // @ts-ignore
                        addAllClassLoaderJarRoots(classLoader: java.lang.ClassLoader, result: java.util.Set<org.springframework.core.io.Resource> | Array<org.springframework.core.io.Resource>): void
                        /**
                         * Determine jar file references from the "java.class.path." manifest property and add them
                         * to the given set of resources in the form of pointers to the root of the jar file content.
                         * @param result the set of resources to add jar roots to
                         * @since 4.3
                         */
                        // @ts-ignore
                        addClassPathManifestEntries(result: java.util.Set<org.springframework.core.io.Resource> | Array<org.springframework.core.io.Resource>): void
                        /**
                         * Find all resources that match the given location pattern via the
                         * Ant-style PathMatcher. Supports resources in jar files and zip files
                         * and in the file system.
                         * @param locationPattern the location pattern to match
                         * @return the result as Resource array
                         * @throws IOException in case of I/O errors
                         * @see #doFindPathMatchingJarResources
                         * @see #doFindPathMatchingFileResources
                         * @see org.springframework.util.PathMatcher
                         */
                        // @ts-ignore
                        findPathMatchingResources(locationPattern: java.lang.String | string): org.springframework.core.io.Resource[]
                        /**
                         * Determine the root directory for the given location.
                         * <p>Used for determining the starting point for file matching,
                         * resolving the root directory location to a {@code java.io.File}
                         * and passing it into {@code retrieveMatchingFiles}, with the
                         * remainder of the location as pattern.
                         * <p>Will return "/WEB-INF/" for the pattern "/WEB-INF/*.xml",
                         * for example.
                         * @param location the location to check
                         * @return the part of the location that denotes the root directory
                         * @see #retrieveMatchingFiles
                         */
                        // @ts-ignore
                        determineRootDir(location: java.lang.String | string): string
                        /**
                         * Resolve the specified resource for path matching.
                         * <p>By default, Equinox OSGi "bundleresource:" / "bundleentry:" URL will be
                         * resolved into a standard jar file URL that be traversed using Spring's
                         * standard jar file traversal algorithm. For any preceding custom resolution,
                         * override this method and replace the resource handle accordingly.
                         * @param original the resource to resolve
                         * @return the resolved resource (may be identical to the passed-in resource)
                         * @throws IOException in case of resolution failure
                         */
                        // @ts-ignore
                        resolveRootDirResource(original: org.springframework.core.io.Resource): org.springframework.core.io.Resource
                        /**
                         * Return whether the given resource handle indicates a jar resource
                         * that the {@code doFindPathMatchingJarResources} method can handle.
                         * <p>By default, the URL protocols "jar", "zip", "vfszip and "wsjar"
                         * will be treated as jar resources. This template method allows for
                         * detecting further kinds of jar-like resources, e.g. through
                         * {@code instanceof} checks on the resource handle type.
                         * @param resource the resource handle to check
                         *  (usually the root directory to start path matching from)
                         * @see #doFindPathMatchingJarResources
                         * @see org.springframework.util.ResourceUtils#isJarURL
                         */
                        // @ts-ignore
                        isJarResource(resource: org.springframework.core.io.Resource): boolean
                        /**
                         * Find all resources in jar files that match the given location pattern
                         * via the Ant-style PathMatcher.
                         * @param rootDirResource the root directory as Resource
                         * @param rootDirURL the pre-resolved root directory URL
                         * @param subPattern the sub pattern to match (below the root directory)
                         * @return a mutable Set of matching Resource instances
                         * @throws IOException in case of I/O errors
                         * @since 4.3
                         * @see java.net.JarURLConnection
                         * @see org.springframework.util.PathMatcher
                         */
                        // @ts-ignore
                        doFindPathMatchingJarResources(rootDirResource: org.springframework.core.io.Resource, rootDirURL: java.net.URL, subPattern: java.lang.String | string): Array<org.springframework.core.io.Resource>
                        /**
                         * Resolve the given jar file URL into a JarFile object.
                         */
                        // @ts-ignore
                        getJarFile(jarFileUrl: java.lang.String | string): java.util.jar.JarFile
                        /**
                         * Find all resources in the file system that match the given location pattern
                         * via the Ant-style PathMatcher.
                         * @param rootDirResource the root directory as Resource
                         * @param subPattern the sub pattern to match (below the root directory)
                         * @return a mutable Set of matching Resource instances
                         * @throws IOException in case of I/O errors
                         * @see #retrieveMatchingFiles
                         * @see org.springframework.util.PathMatcher
                         */
                        // @ts-ignore
                        doFindPathMatchingFileResources(rootDirResource: org.springframework.core.io.Resource, subPattern: java.lang.String | string): Array<org.springframework.core.io.Resource>
                        /**
                         * Find all resources in the file system that match the given location pattern
                         * via the Ant-style PathMatcher.
                         * @param rootDir the root directory in the file system
                         * @param subPattern the sub pattern to match (below the root directory)
                         * @return a mutable Set of matching Resource instances
                         * @throws IOException in case of I/O errors
                         * @see #retrieveMatchingFiles
                         * @see org.springframework.util.PathMatcher
                         */
                        // @ts-ignore
                        doFindMatchingFileSystemResources(rootDir: java.io.File, subPattern: java.lang.String | string): Array<org.springframework.core.io.Resource>
                        /**
                         * Retrieve files that match the given path pattern,
                         * checking the given directory and its subdirectories.
                         * @param rootDir the directory to start from
                         * @param pattern the pattern to match against,
                         *  relative to the root directory
                         * @return a mutable Set of matching Resource instances
                         * @throws IOException if directory contents could not be retrieved
                         */
                        // @ts-ignore
                        retrieveMatchingFiles(rootDir: java.io.File, pattern: java.lang.String | string): Array<java.io.File>
                        /**
                         * Recursively retrieve files that match the given pattern,
                         * adding them to the given result list.
                         * @param fullPattern the pattern to match against,
                         *  with prepended root directory path
                         * @param dir the current directory
                         * @param result the Set of matching File instances to add to
                         * @throws IOException if directory contents could not be retrieved
                         */
                        // @ts-ignore
                        doRetrieveMatchingFiles(fullPattern: java.lang.String | string, dir: java.io.File, result: java.util.Set<java.io.File> | Array<java.io.File>): void
                        /**
                         * Determine a sorted list of files in the given directory.
                         * @param dir the directory to introspect
                         * @return the sorted list of files (by default in alphabetical order)
                         * @since 5.1
                         * @see File#listFiles()
                         */
                        // @ts-ignore
                        listDirectory(dir: java.io.File): java.io.File[]
                    }
                }
            }
        }
    }
}
