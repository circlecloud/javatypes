declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Expand out a WAR in a Host's appBase.
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 * @author Glenn L. Nielsen
                 */
                // @ts-ignore
                class ExpandWar extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The string resources for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Expand the WAR file found at the specified URL into an unpacked
                     * directory structure.
                     * @param host Host war is being installed for
                     * @param war URL of the web application archive to be expanded
                     *   (must start with "jar:")
                     * @param pathname Context path name for web application
                     * @exception IllegalArgumentException if this is not a "jar:" URL or if the
                     *             WAR file is invalid
                     * @exception IOException if an input/output error was encountered
                     *   during expansion
                     * @return The absolute path to the expanded directory foe the given WAR
                     */
                    // @ts-ignore
                    public static expand(host: org.apache.catalina.Host, war: java.net.URL, pathname: java.lang.String | string): string
                    /**
                     * Validate the WAR file found at the specified URL.
                     * @param host Host war is being installed for
                     * @param war URL of the web application archive to be validated
                     *   (must start with "jar:")
                     * @param pathname Context path name for web application
                     * @exception IllegalArgumentException if this is not a "jar:" URL or if the
                     *             WAR file is invalid
                     * @exception IOException if an input/output error was encountered
                     *             during validation
                     */
                    // @ts-ignore
                    public static validate(host: org.apache.catalina.Host, war: java.net.URL, pathname: java.lang.String | string): void
                    /**
                     * Copy the specified file or directory to the destination.
                     * @param src File object representing the source
                     * @param dest File object representing the destination
                     * @return <code>true</code> if the copy was successful
                     */
                    // @ts-ignore
                    public static copy(src: java.io.File, dest: java.io.File): boolean
                    /**
                     * Delete the specified directory, including all of its contents and
                     * sub-directories recursively. Any failure will be logged.
                     * @param dir File object representing the directory to be deleted
                     * @return <code>true</code> if the deletion was successful
                     */
                    // @ts-ignore
                    public static delete(dir: java.io.File): boolean
                    /**
                     * Delete the specified directory, including all of its contents and
                     * sub-directories recursively.
                     * @param dir File object representing the directory to be deleted
                     * @param logFailure <code>true</code> if failure to delete the resource
                     *                    should be logged
                     * @return <code>true</code> if the deletion was successful
                     */
                    // @ts-ignore
                    public static delete(dir: java.io.File, logFailure: boolean): boolean
                    /**
                     * Delete the specified directory, including all of its contents and
                     * sub-directories recursively. Any failure will be logged.
                     * @param dir File object representing the directory to be deleted
                     * @return <code>true</code> if the deletion was successful
                     */
                    // @ts-ignore
                    public static deleteDir(dir: java.io.File): boolean
                    /**
                     * Delete the specified directory, including all of its contents and
                     * sub-directories recursively.
                     * @param dir File object representing the directory to be deleted
                     * @param logFailure <code>true</code> if failure to delete the resource
                     *                    should be logged
                     * @return <code>true</code> if the deletion was successful
                     */
                    // @ts-ignore
                    public static deleteDir(dir: java.io.File, logFailure: boolean): boolean
                }
            }
        }
    }
}
