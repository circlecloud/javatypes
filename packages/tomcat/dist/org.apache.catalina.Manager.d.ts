declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * A <b>Manager</b> manages the pool of Sessions that are associated with a
             * particular Context. Different Manager implementations may support
             * value-added features such as the persistent storage of session data,
             * as well as migrating sessions for distributable web applications.
             * <p>
             * In order for a <code>Manager</code> implementation to successfully operate
             * with a <code>Context</code> implementation that implements reloading, it
             * must obey the following constraints:
             * <ul>
             * <li>Must implement <code>Lifecycle</code> so that the Context can indicate
             * that a restart is required.
             * <li>Must allow a call to <code>stop()</code> to be followed by a call to
             * <code>start()</code> on the same <code>Manager</code> instance.
             * </ul>
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface Manager {
                /**
                 * Get the Context with which this Manager is associated.
                 * @return The associated Context
                 */
                // @ts-ignore
                getContext(): org.apache.catalina.Context
                /**
                 * Set the Context with which this Manager is associated. The Context must
                 * be set to a non-null value before the Manager is first used. Multiple
                 * calls to this method before first use are permitted. Once the Manager has
                 * been used, this method may not be used to change the Context (including
                 * setting a {@code null} value) that the Manager is associated with.
                 * @param context The newly associated Context
                 */
                // @ts-ignore
                setContext(context: org.apache.catalina.Context): void
                /**
                 * @return the session id generator
                 */
                // @ts-ignore
                getSessionIdGenerator(): org.apache.catalina.SessionIdGenerator
                /**
                 * Sets the session id generator
                 * @param sessionIdGenerator The session id generator
                 */
                // @ts-ignore
                setSessionIdGenerator(sessionIdGenerator: org.apache.catalina.SessionIdGenerator): void
                /**
                 * Returns the total number of sessions created by this manager.
                 * @return Total number of sessions created by this manager.
                 */
                // @ts-ignore
                getSessionCounter(): number /*long*/
                /**
                 * Sets the total number of sessions created by this manager.
                 * @param sessionCounter Total number of sessions created by this manager.
                 */
                // @ts-ignore
                setSessionCounter(sessionCounter: number /*long*/): void
                /**
                 * Gets the maximum number of sessions that have been active at the same
                 * time.
                 * @return Maximum number of sessions that have been active at the same
                 *  time
                 */
                // @ts-ignore
                getMaxActive(): number /*int*/
                /**
                 * (Re)sets the maximum number of sessions that have been active at the
                 * same time.
                 * @param maxActive Maximum number of sessions that have been active at
                 *  the same time.
                 */
                // @ts-ignore
                setMaxActive(maxActive: number /*int*/): void
                /**
                 * Gets the number of currently active sessions.
                 * @return Number of currently active sessions
                 */
                // @ts-ignore
                getActiveSessions(): number /*int*/
                /**
                 * Gets the number of sessions that have expired.
                 * @return Number of sessions that have expired
                 */
                // @ts-ignore
                getExpiredSessions(): number /*long*/
                /**
                 * Sets the number of sessions that have expired.
                 * @param expiredSessions Number of sessions that have expired
                 */
                // @ts-ignore
                setExpiredSessions(expiredSessions: number /*long*/): void
                /**
                 * Gets the number of sessions that were not created because the maximum
                 * number of active sessions was reached.
                 * @return Number of rejected sessions
                 */
                // @ts-ignore
                getRejectedSessions(): number /*int*/
                /**
                 * Gets the longest time (in seconds) that an expired session had been
                 * alive.
                 * @return Longest time (in seconds) that an expired session had been
                 *  alive.
                 */
                // @ts-ignore
                getSessionMaxAliveTime(): number /*int*/
                /**
                 * Sets the longest time (in seconds) that an expired session had been
                 * alive.
                 * @param sessionMaxAliveTime Longest time (in seconds) that an expired
                 *  session had been alive.
                 */
                // @ts-ignore
                setSessionMaxAliveTime(sessionMaxAliveTime: number /*int*/): void
                /**
                 * Gets the average time (in seconds) that expired sessions had been
                 * alive. This may be based on sample data.
                 * @return Average time (in seconds) that expired sessions had been
                 *  alive.
                 */
                // @ts-ignore
                getSessionAverageAliveTime(): number /*int*/
                /**
                 * Gets the current rate of session creation (in session per minute). This
                 * may be based on sample data.
                 * @return The current rate (in sessions per minute) of session creation
                 */
                // @ts-ignore
                getSessionCreateRate(): number /*int*/
                /**
                 * Gets the current rate of session expiration (in session per minute). This
                 * may be based on sample data
                 * @return The current rate (in sessions per minute) of session expiration
                 */
                // @ts-ignore
                getSessionExpireRate(): number /*int*/
                /**
                 * Add this Session to the set of active Sessions for this Manager.
                 * @param session Session to be added
                 */
                // @ts-ignore
                add(session: org.apache.catalina.Session): void
                /**
                 * Add a property change listener to this component.
                 * @param listener The listener to add
                 */
                // @ts-ignore
                addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * Change the session ID of the current session to a new randomly generated
                 * session ID.
                 * @param session   The session to change the session ID for
                 */
                // @ts-ignore
                changeSessionId(session: org.apache.catalina.Session): void
                /**
                 * Change the session ID of the current session to a specified session ID.
                 * @param session   The session to change the session ID for
                 * @param newId   new session ID
                 */
                // @ts-ignore
                changeSessionId(session: org.apache.catalina.Session, newId: java.lang.String | string): void
                /**
                 * Get a session from the recycled ones or create a new empty one.
                 * The PersistentManager manager does not need to create session data
                 * because it reads it from the Store.
                 * @return An empty Session object
                 */
                // @ts-ignore
                createEmptySession(): org.apache.catalina.Session
                /**
                 * Construct and return a new session object, based on the default
                 * settings specified by this Manager's properties.  The session
                 * id specified will be used as the session id.
                 * If a new session cannot be created for any reason, return
                 * <code>null</code>.
                 * @param sessionId The session id which should be used to create the
                 *   new session; if <code>null</code>, the session
                 *   id will be assigned by this method, and available via the getId()
                 *   method of the returned session.
                 * @exception IllegalStateException if a new session cannot be
                 *   instantiated for any reason
                 * @return An empty Session object with the given ID or a newly created
                 *          session ID if none was specified
                 */
                // @ts-ignore
                createSession(sessionId: java.lang.String | string): org.apache.catalina.Session
                /**
                 * Return the active Session, associated with this Manager, with the
                 * specified session id (if any); otherwise return <code>null</code>.
                 * @param id The session id for the session to be returned
                 * @exception IllegalStateException if a new session cannot be
                 *   instantiated for any reason
                 * @exception IOException if an input/output error occurs while
                 *   processing this request
                 * @return the request session or {#code null} if a session with the
                 *          requested ID could not be found
                 */
                // @ts-ignore
                findSession(id: java.lang.String | string): org.apache.catalina.Session
                /**
                 * Return the set of active Sessions associated with this Manager.
                 * If this Manager has no active Sessions, a zero-length array is returned.
                 * @return All the currently active sessions managed by this manager
                 */
                // @ts-ignore
                findSessions(): org.apache.catalina.Session[]
                /**
                 * Load any currently active sessions that were previously unloaded
                 * to the appropriate persistence mechanism, if any.  If persistence is not
                 * supported, this method returns without doing anything.
                 * @exception ClassNotFoundException if a serialized class cannot be
                 *   found during the reload
                 * @exception IOException if an input/output error occurs
                 */
                // @ts-ignore
                load(): void
                /**
                 * Remove this Session from the active Sessions for this Manager.
                 * @param session Session to be removed
                 */
                // @ts-ignore
                remove(session: org.apache.catalina.Session): void
                /**
                 * Remove this Session from the active Sessions for this Manager.
                 * @param session   Session to be removed
                 * @param update    Should the expiration statistics be updated
                 */
                // @ts-ignore
                remove(session: org.apache.catalina.Session, update: boolean): void
                /**
                 * Remove a property change listener from this component.
                 * @param listener The listener to remove
                 */
                // @ts-ignore
                removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * Save any currently active sessions in the appropriate persistence
                 * mechanism, if any.  If persistence is not supported, this method
                 * returns without doing anything.
                 * @exception IOException if an input/output error occurs
                 */
                // @ts-ignore
                unload(): void
                /**
                 * This method will be invoked by the context/container on a periodic
                 * basis and allows the manager to implement
                 * a method that executes periodic tasks, such as expiring sessions etc.
                 */
                // @ts-ignore
                backgroundProcess(): void
                /**
                 * Would the Manager distribute the given session attribute? Manager
                 * implementations may provide additional configuration options to control
                 * which attributes are distributable.
                 * @param name  The attribute name
                 * @param value The attribute value
                 * @return {#code true} if the Manager would distribute the given attribute
                 *          otherwise {@code false}
                 */
                // @ts-ignore
                willAttributeDistribute(name: java.lang.String | string, value: java.lang.Object | any): boolean
                /**
                 * When an attribute that is already present in the session is added again
                 * under the same name and the attribute implements {@link
                 * javax.servlet.http.HttpSessionBindingListener}, should
                 * {@link javax.servlet.http.HttpSessionBindingListener#valueUnbound(javax.servlet.http.HttpSessionBindingEvent)}
                 * be called followed by
                 * {@link javax.servlet.http.HttpSessionBindingListener#valueBound(javax.servlet.http.HttpSessionBindingEvent)}?
                 * <p>
                 * The default value is {@code false}.
                 * @return {#code true} if the listener will be notified, {@code false} if
                 *          it will not
                 */
                // @ts-ignore
                getNotifyBindingListenerOnUnchangedValue(): boolean
                /**
                 * Configure if
                 * {@link javax.servlet.http.HttpSessionBindingListener#valueUnbound(javax.servlet.http.HttpSessionBindingEvent)}
                 * be called followed by
                 * {@link javax.servlet.http.HttpSessionBindingListener#valueBound(javax.servlet.http.HttpSessionBindingEvent)}
                 * when an attribute that is already present in the session is added again
                 * under the same name and the attribute implements {@link
                 * javax.servlet.http.HttpSessionBindingListener}.
                 * @param notifyBindingListenerOnUnchangedValue {#code true} the listener
                 *                                               will be called, {@code
                 *                                               false} it will not
                 */
                // @ts-ignore
                setNotifyBindingListenerOnUnchangedValue(notifyBindingListenerOnUnchangedValue: boolean): void
                /**
                 * When an attribute that is already present in the session is added again
                 * under the same name and a {@link
                 * javax.servlet.http.HttpSessionAttributeListener} is configured for the
                 * session should
                 * {@link javax.servlet.http.HttpSessionAttributeListener#attributeReplaced(javax.servlet.http.HttpSessionBindingEvent)}
                 * be called?
                 * <p>
                 * The default value is {@code true}.
                 * @return {#code true} if the listener will be notified, {@code false} if
                 *          it will not
                 */
                // @ts-ignore
                getNotifyAttributeListenerOnUnchangedValue(): boolean
                /**
                 * Configure if
                 * {@link javax.servlet.http.HttpSessionAttributeListener#attributeReplaced(javax.servlet.http.HttpSessionBindingEvent)}
                 * when an attribute that is already present in the session is added again
                 * under the same name and a {@link
                 * javax.servlet.http.HttpSessionAttributeListener} is configured for the
                 * session.
                 * @param notifyAttributeListenerOnUnchangedValue {#code true} the listener
                 *                                                 will be called, {@code
                 *                                                 false} it will not
                 */
                // @ts-ignore
                setNotifyAttributeListenerOnUnchangedValue(notifyAttributeListenerOnUnchangedValue: boolean): void
            }
        }
    }
}
