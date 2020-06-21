declare namespace org {
    namespace apache {
        namespace catalina {
            namespace session {
                /**
                 * Abstract implementation of the {@link Store} interface to
                 * support most of the functionality required by a {@link Store}.
                 * @author Bip Thelin
                 */
                // @ts-ignore
                abstract class StoreBase extends org.apache.catalina.util.LifecycleBase implements org.apache.catalina.Store {
                    // @ts-ignore
                    constructor()
                    /**
                     * Name to register for this Store, used for logging.
                     */
                    // @ts-ignore
                    static readonly storeName: java.lang.String | string
                    /**
                     * The property change support for this component.
                     */
                    // @ts-ignore
                    readonly support: java.beans.PropertyChangeSupport
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The Manager with which this Store is associated.
                     */
                    // @ts-ignore
                    manager: org.apache.catalina.Manager
                    /**
                     * @return the name for this Store, used for logging.
                     */
                    // @ts-ignore
                    public getStoreName(): string
                    /**
                     * Set the Manager with which this Store is associated.
                     * @param manager The newly associated Manager
                     */
                    // @ts-ignore
                    public setManager(manager: org.apache.catalina.Manager): void
                    /**
                     * @return the Manager with which the Store is associated.
                     */
                    // @ts-ignore
                    public getManager(): org.apache.catalina.Manager
                    /**
                     * Add a property change listener to this component.
                     * @param listener a value of type {#link PropertyChangeListener}
                     */
                    // @ts-ignore
                    public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Remove a property change listener from this component.
                     * @param listener The listener to remove
                     */
                    // @ts-ignore
                    public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Get only those keys of sessions, that are saved in the Store and are to
                     * be expired.
                     * @return list of session keys, that are to be expired
                     * @throws IOException
                     *              if an input-/output error occurred
                     */
                    // @ts-ignore
                    public expiredKeys(): string[]
                    /**
                     * Called by our background reaper thread to check if Sessions
                     * saved in our store are subject of being expired. If so expire
                     * the Session and remove it from the Store.
                     */
                    // @ts-ignore
                    public processExpires(): void
                    /**
                     * Create the object input stream to use to read a session from the store.
                     * Sub-classes <b>must</b> have set the thread context class loader before
                     * calling this method.
                     * @param is The input stream provided by the sub-class that will provide
                     *            the data for a session
                     * @return An appropriately configured ObjectInputStream from which the
                     *          session can be read.
                     * @throws IOException if a problem occurs creating the ObjectInputStream
                     */
                    // @ts-ignore
                    getObjectInputStream(jis: java.io.InputStream): java.io.ObjectInputStream
                    // @ts-ignore
                    initInternal(): void
                    /**
                     * Start this component and implement the requirements
                     * of {@link LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop this component and implement the requirements
                     * of {@link LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    destroyInternal(): void
                    /**
                     * @return a String rendering of this object.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
