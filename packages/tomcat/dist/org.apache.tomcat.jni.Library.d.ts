declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Library
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Library extends java.lang.Object {
                    // @ts-ignore
                    public static TCN_MAJOR_VERSION: number /*int*/
                    // @ts-ignore
                    public static TCN_MINOR_VERSION: number /*int*/
                    // @ts-ignore
                    public static TCN_PATCH_VERSION: number /*int*/
                    // @ts-ignore
                    public static TCN_IS_DEV_VERSION: number /*int*/
                    // @ts-ignore
                    public static APR_MAJOR_VERSION: number /*int*/
                    // @ts-ignore
                    public static APR_MINOR_VERSION: number /*int*/
                    // @ts-ignore
                    public static APR_PATCH_VERSION: number /*int*/
                    // @ts-ignore
                    public static APR_IS_DEV_VERSION: number /*int*/
                    // @ts-ignore
                    public static APR_HAVE_IPV6: boolean
                    // @ts-ignore
                    public static APR_HAS_SHARED_MEMORY: boolean
                    // @ts-ignore
                    public static APR_HAS_THREADS: boolean
                    // @ts-ignore
                    public static APR_HAS_SENDFILE: boolean
                    // @ts-ignore
                    public static APR_HAS_MMAP: boolean
                    // @ts-ignore
                    public static APR_HAS_FORK: boolean
                    // @ts-ignore
                    public static APR_HAS_RANDOM: boolean
                    // @ts-ignore
                    public static APR_HAS_OTHER_CHILD: boolean
                    // @ts-ignore
                    public static APR_HAS_DSO: boolean
                    // @ts-ignore
                    public static APR_HAS_SO_ACCEPTFILTER: boolean
                    // @ts-ignore
                    public static APR_HAS_UNICODE_FS: boolean
                    // @ts-ignore
                    public static APR_HAS_PROC_INVOKED: boolean
                    // @ts-ignore
                    public static APR_HAS_USER: boolean
                    // @ts-ignore
                    public static APR_HAS_LARGE_FILES: boolean
                    // @ts-ignore
                    public static APR_HAS_XTHREAD_FILES: boolean
                    // @ts-ignore
                    public static APR_HAS_OS_UUID: boolean
                    // @ts-ignore
                    public static APR_IS_BIGENDIAN: boolean
                    // @ts-ignore
                    public static APR_FILES_AS_SOCKETS: boolean
                    // @ts-ignore
                    public static APR_CHARSET_EBCDIC: boolean
                    // @ts-ignore
                    public static APR_TCP_NODELAY_INHERITED: boolean
                    // @ts-ignore
                    public static APR_O_NONBLOCK_INHERITED: boolean
                    // @ts-ignore
                    public static APR_SIZEOF_VOIDP: number /*int*/
                    // @ts-ignore
                    public static APR_PATH_MAX: number /*int*/
                    // @ts-ignore
                    public static APRMAXHOSTLEN: number /*int*/
                    // @ts-ignore
                    public static APR_MAX_IOVEC_SIZE: number /*int*/
                    // @ts-ignore
                    public static APR_MAX_SECS_TO_LINGER: number /*int*/
                    // @ts-ignore
                    public static APR_MMAP_THRESHOLD: number /*int*/
                    // @ts-ignore
                    public static APR_MMAP_LIMIT: number /*int*/
                    // @ts-ignore
                    public static terminate(): void
                    // @ts-ignore
                    public static versionString(): string
                    // @ts-ignore
                    public static aprVersionString(): string
                    // @ts-ignore
                    public static globalPool(): number /*long*/
                    /**
                     * Setup any APR internal data structures.  This MUST be the first function
                     * called for any APR library.
                     * @param libraryName the name of the library to load
                     * @return {#code true} if the native code was initialized successfully
                     *          otherwise {@code false}
                     * @throws Exception if a problem occurred during initialization
                     */
                    // @ts-ignore
                    public static initialize(libraryName: java.lang.String | string): boolean
                    /**
                     * Calls System.load(filename). System.load() associates the
                     * loaded library with the class loader of the class that called
                     * the System method. A native library may not be loaded by more
                     * than one class loader, so calling the System method from a class that
                     * was loaded by a Webapp class loader will make it impossible for
                     * other Webapps to load it.
                     * Using this method will load the native library via a shared class
                     * loader (typically the Common class loader, but may vary in some
                     * configurations), so that it can be loaded by multiple Webapps.
                     * @param filename - absolute path of the native library
                     */
                    // @ts-ignore
                    public static load(filename: java.lang.String | string): void
                    /**
                     * Calls System.loadLibrary(libname). System.loadLibrary() associates the
                     * loaded library with the class loader of the class that called
                     * the System method. A native library may not be loaded by more
                     * than one class loader, so calling the System method from a class that
                     * was loaded by a Webapp class loader will make it impossible for
                     * other Webapps to load it.
                     * Using this method will load the native library via a shared class
                     * loader (typically the Common class loader, but may vary in some
                     * configurations), so that it can be loaded by multiple Webapps.
                     * @param libname - the name of the native library
                     */
                    // @ts-ignore
                    public static loadLibrary(libname: java.lang.String | string): void
                }
            }
        }
    }
}
