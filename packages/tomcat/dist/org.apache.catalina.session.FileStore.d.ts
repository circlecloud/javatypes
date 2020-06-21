declare namespace org {
    namespace apache {
        namespace catalina {
            namespace session {
                /**
                 * Concrete implementation of the <b>Store</b> interface that utilizes
                 * a file per saved Session in a configured directory.  Sessions that are
                 * saved are still subject to being expired based on inactivity.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class FileStore extends org.apache.catalina.session.StoreBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * @return The directory path for this Store.
                     */
                    // @ts-ignore
                    public getDirectory(): string
                    /**
                     * Set the directory path for this Store.
                     * @param path The new directory path
                     */
                    // @ts-ignore
                    public setDirectory(path: java.lang.String | string): void
                    /**
                     * @return The thread name for this Store.
                     */
                    // @ts-ignore
                    public getThreadName(): string
                    /**
                     * Return the name for this Store, used for logging.
                     */
                    // @ts-ignore
                    public getStoreName(): string
                    /**
                     * Return the number of Sessions present in this Store.
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public getSize(): number /*int*/
                    /**
                     * Remove all of the Sessions in this Store.
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public clear(): void
                    /**
                     * Return an array containing the session identifiers of all Sessions
                     * currently saved in this Store.  If there are no such Sessions, a
                     * zero-length array is returned.
                     * @exception IOException if an input/output error occurred
                     */
                    // @ts-ignore
                    public keys(): string[]
                    /**
                     * Load and return the Session associated with the specified session
                     * identifier from this Store, without removing it.  If there is no
                     * such stored Session, return <code>null</code>.
                     * @param id Session identifier of the session to load
                     * @exception ClassNotFoundException if a deserialization error occurs
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public load(id: java.lang.String | string): org.apache.catalina.Session
                    /**
                     * Remove the Session with the specified session identifier from
                     * this Store, if present.  If no such Session is present, this method
                     * takes no action.
                     * @param id Session identifier of the Session to be removed
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public remove(id: java.lang.String | string): void
                    /**
                     * Save the specified Session into this Store.  Any previously saved
                     * information for the associated session identifier is replaced.
                     * @param session Session to be saved
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public save(session: org.apache.catalina.Session): void
                }
            }
        }
    }
}
