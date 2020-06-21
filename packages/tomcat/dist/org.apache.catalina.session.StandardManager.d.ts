declare namespace org {
    namespace apache {
        namespace catalina {
            namespace session {
                /**
                 * Standard implementation of the <b>Manager</b> interface that provides
                 * simple session persistence across restarts of this component (such as
                 * when the entire server is shut down and restarted, or when a particular
                 * web application is reloaded.
                 * <p>
                 * <b>IMPLEMENTATION NOTE</b>:  Correct behavior of session storing and
                 * reloading depends upon external calls to the <code>start()</code> and
                 * <code>stop()</code> methods of this class at the correct times.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class StandardManager extends org.apache.catalina.session.ManagerBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * The descriptive name of this Manager implementation (for logging).
                     */
                    // @ts-ignore
                    static readonly name: java.lang.String | string
                    /**
                     * Path name of the disk file in which active sessions are saved
                     * when we stop, and from which these sessions are loaded when we start.
                     * A <code>null</code> value indicates that no persistence is desired.
                     * If this pathname is relative, it will be resolved against the
                     * temporary working directory provided by our context, available via
                     * the <code>javax.servlet.context.tempdir</code> context attribute.
                     */
                    // @ts-ignore
                    pathname: java.lang.String | string
                    // @ts-ignore
                    public getName(): string
                    /**
                     * @return The session persistence pathname, if any.
                     */
                    // @ts-ignore
                    public getPathname(): string
                    /**
                     * Set the session persistence pathname to the specified value.  If no
                     * persistence support is desired, set the pathname to <code>null</code>.
                     * @param pathname New session persistence pathname
                     */
                    // @ts-ignore
                    public setPathname(pathname: java.lang.String | string): void
                    // @ts-ignore
                    public load(): void
                    /**
                     * Load any currently active sessions that were previously unloaded
                     * to the appropriate persistence mechanism, if any.  If persistence is not
                     * supported, this method returns without doing anything.
                     * @exception ClassNotFoundException if a serialized class cannot be
                     *   found during the reload
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    doLoad(): void
                    // @ts-ignore
                    public unload(): void
                    /**
                     * Save any currently active sessions in the appropriate persistence
                     * mechanism, if any.  If persistence is not supported, this method
                     * returns without doing anything.
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    doUnload(): void
                    /**
                     * Start this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    stopInternal(): void
                    /**
                     * Return a File object representing the pathname to our
                     * persistence file, if any.
                     * @return the file
                     */
                    // @ts-ignore
                    file(): java.io.File
                }
            }
        }
    }
}
