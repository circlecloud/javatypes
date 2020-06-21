declare namespace org {
    namespace apache {
        namespace catalina {
            namespace session {
                /**
                 * Extends the {@link ManagerBase} class to implement most of the
                 * functionality required by a Manager which supports any kind of
                 * persistence, even if only for  restarts.
                 * <p>
                 * <b>IMPLEMENTATION NOTE</b>:  Correct behavior of session storing and
                 * reloading depends upon external calls to the {@link Lifecycle#start()}
                 * and {@link Lifecycle#stop()} methods of this class
                 * at the correct times.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                abstract class PersistentManagerBase extends org.apache.catalina.session.ManagerBase implements org.apache.catalina.StoreManager {
                    // @ts-ignore
                    constructor()
                    /**
                     * Store object which will manage the Session store.
                     */
                    // @ts-ignore
                    store: org.apache.catalina.Store
                    /**
                     * Whether to save and reload sessions when the Manager <code>unload</code>
                     * and <code>load</code> methods are called.
                     */
                    // @ts-ignore
                    saveOnRestart: boolean
                    /**
                     * How long a session must be idle before it should be backed up.
                     * {@code -1} means sessions won't be backed up.
                     */
                    // @ts-ignore
                    maxIdleBackup: number /*int*/
                    /**
                     * The minimum time in seconds a session must be idle before it is eligible
                     * to be swapped to disk to keep the active session count below
                     * maxActiveSessions. Setting to {@code -1} means sessions will not be
                     * swapped out to keep the active session count down.
                     */
                    // @ts-ignore
                    minIdleSwap: number /*int*/
                    /**
                     * The maximum time in seconds a session may be idle before it is eligible
                     * to be swapped to disk due to inactivity. Setting this to {@code -1} means
                     * sessions should not be swapped out just because of inactivity.
                     */
                    // @ts-ignore
                    maxIdleSwap: number /*int*/
                    /**
                     * Indicates how many seconds old a session can get, after its last use in a
                     * request, before it should be backed up to the store. {@code -1} means sessions
                     * are not backed up.
                     * @return the timeout after which sessions are ripe for back up
                     */
                    // @ts-ignore
                    public getMaxIdleBackup(): number /*int*/
                    /**
                     * Sets the option to back sessions up to the Store after they
                     * are used in a request. Sessions remain available in memory
                     * after being backed up, so they are not passivated as they are
                     * when swapped out. The value set indicates how old a session
                     * may get (since its last use) before it must be backed up: {@code -1}
                     * means sessions are not backed up.
                     * <p>
                     * Note that this is not a hard limit: sessions are checked
                     * against this age limit periodically according to {@code processExpiresFrequency}.
                     * This value should be considered to indicate when a session is
                     * ripe for backing up.
                     * <p>
                     * So it is possible that a session may be idle for {@code maxIdleBackup +
                     * processExpiresFrequency * engine.backgroundProcessorDelay} seconds, plus the time it takes to handle other
                     * session expiration, swapping, etc. tasks.
                     * @param backup The number of seconds after their last accessed
                     *  time when they should be written to the Store.
                     */
                    // @ts-ignore
                    public setMaxIdleBackup(backup: number /*int*/): void
                    /**
                     * @return The maximum time in seconds a session may be idle before it is
                     *  eligible to be swapped to disk due to inactivity. A value of {#code -1}
                     *  means sessions should not be swapped out just because of inactivity.
                     */
                    // @ts-ignore
                    public getMaxIdleSwap(): number /*int*/
                    /**
                     * Sets the maximum time in seconds a session may be idle before it is
                     * eligible to be swapped to disk due to inactivity. Setting this to
                     * {@code -1} means sessions should not be swapped out just because of
                     * inactivity.
                     * @param max time in seconds to wait for possible swap out
                     */
                    // @ts-ignore
                    public setMaxIdleSwap(max: number /*int*/): void
                    /**
                     * @return The minimum time in seconds a session must be idle before it is
                     *  eligible to be swapped to disk to keep the active session count below
                     *  maxActiveSessions. A value of {#code -1} means sessions will not be
                     *  swapped out to keep the active session count down.
                     */
                    // @ts-ignore
                    public getMinIdleSwap(): number /*int*/
                    /**
                     * Sets the minimum time in seconds a session must be idle before it is
                     * eligible to be swapped to disk to keep the active session count below
                     * maxActiveSessions. Setting to {@code -1} means sessions will not be
                     * swapped out to keep the active session count down.
                     * @param min time in seconds before a possible swap out
                     */
                    // @ts-ignore
                    public setMinIdleSwap(min: number /*int*/): void
                    /**
                     * Check, whether a session is loaded in memory
                     * @param id The session id for the session to be searched for
                     * @return {#code true}, if the session id is loaded in memory
                     *   otherwise {@code false} is returned
                     */
                    // @ts-ignore
                    public isLoaded(id: java.lang.String | string): boolean
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Set the Store object which will manage persistent Session
                     * storage for this Manager.
                     * @param store the associated Store
                     */
                    // @ts-ignore
                    public setStore(store: org.apache.catalina.Store): void
                    /**
                     * @return the Store object which manages persistent Session
                     *  storage for this Manager.
                     */
                    // @ts-ignore
                    public getStore(): org.apache.catalina.Store
                    /**
                     * Indicates whether sessions are saved when the Manager is shut down
                     * properly. This requires the {@link #unload()} method to be called.
                     * @return {#code true}, when sessions should be saved on restart,
                     *  {code false} otherwise
                     */
                    // @ts-ignore
                    public getSaveOnRestart(): boolean
                    /**
                     * Set the option to save sessions to the Store when the Manager is
                     * shut down, then loaded when the Manager starts again. If set to
                     * false, any sessions found in the Store may still be picked up when
                     * the Manager is started again.
                     * @param saveOnRestart {#code true} if sessions should be saved on restart, {@code false} if
                     *      they should be ignored.
                     */
                    // @ts-ignore
                    public setSaveOnRestart(saveOnRestart: boolean): void
                    /**
                     * Clear all sessions from the Store.
                     */
                    // @ts-ignore
                    public clearStore(): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Direct call to processExpires and processPersistenceChecks
                     */
                    // @ts-ignore
                    public processExpires(): void
                    /**
                     * Called by the background thread after active sessions have been checked
                     * for expiration, to allow sessions to be swapped out, backed up, etc.
                     */
                    // @ts-ignore
                    public processPersistenceChecks(): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This method checks the persistence store if persistence is enabled,
                     * otherwise just uses the functionality from ManagerBase.
                     */
                    // @ts-ignore
                    public findSession(id: java.lang.String | string): org.apache.catalina.Session
                    /**
                     * Remove this Session from the active Sessions for this Manager,
                     * but not from the Store. (Used by the PersistentValve)
                     * @param session Session to be removed
                     */
                    // @ts-ignore
                    public removeSuper(session: org.apache.catalina.Session): void
                    /**
                     * Load all sessions found in the persistence mechanism, assuming
                     * they are marked as valid and have not passed their expiration
                     * limit. If persistence is not supported, this method returns
                     * without doing anything.
                     * <p>
                     * Note that by default, this method is not called by the MiddleManager
                     * class. In order to use it, a subclass must specifically call it,
                     * for example in the start() and/or processPersistenceChecks() methods.
                     */
                    // @ts-ignore
                    public load(): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Remove this Session from the Store.
                     */
                    // @ts-ignore
                    public remove(session: org.apache.catalina.Session, update: boolean): void
                    /**
                     * Remove this Session from the active Sessions for this Manager,
                     * and from the Store.
                     * @param id Session's id to be removed
                     */
                    // @ts-ignore
                    removeSession(id: java.lang.String | string): void
                    /**
                     * Save all currently active sessions in the appropriate persistence
                     * mechanism, if any.  If persistence is not supported, this method
                     * returns without doing anything.
                     * <p>
                     * Note that by default, this method is not called by the MiddleManager
                     * class. In order to use it, a subclass must specifically call it,
                     * for example in the stop() and/or processPersistenceChecks() methods.
                     */
                    // @ts-ignore
                    public unload(): void
                    // @ts-ignore
                    public getActiveSessionsFull(): number /*int*/
                    // @ts-ignore
                    public getSessionIdsFull(): Array<java.lang.String | string>
                    /**
                     * Look for a session in the Store and, if found, restore
                     * it in the Manager's list of active sessions if appropriate.
                     * The session will be removed from the Store after swapping
                     * in, but will not be added to the active session list if it
                     * is invalid or past its expiration.
                     * @param id The id of the session that should be swapped in
                     * @return restored session, or {#code null}, if none is found
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    swapIn(id: java.lang.String | string): org.apache.catalina.Session
                    /**
                     * Remove the session from the Manager's list of active
                     * sessions and write it out to the Store. If the session
                     * is past its expiration or invalid, this method does
                     * nothing.
                     * @param session The Session to write out
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    swapOut(session: org.apache.catalina.Session): void
                    /**
                     * Write the provided session to the Store without modifying
                     * the copy in memory or triggering passivation events. Does
                     * nothing if the session is invalid or past its expiration.
                     * @param session The session that should be written
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    writeSession(session: org.apache.catalina.Session): void
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
                     * Swap idle sessions out to Store if they are idle too long.
                     */
                    // @ts-ignore
                    processMaxIdleSwaps(): void
                    /**
                     * Swap idle sessions out to Store if too many are active
                     */
                    // @ts-ignore
                    processMaxActiveSwaps(): void
                    /**
                     * Back up idle sessions.
                     */
                    // @ts-ignore
                    processMaxIdleBackups(): void
                }
            }
        }
    }
}
