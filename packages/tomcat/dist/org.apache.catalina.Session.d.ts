declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * A <b>Session</b> is the Catalina-internal facade for an
             * <code>HttpSession</code> that is used to maintain state information
             * between requests for a particular user of a web application.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface Session {
                /**
                 * The SessionEvent event type when a session is created.
                 */
                // @ts-ignore
                readonly SESSION_CREATED_EVENT: java.lang.String | string
                /**
                 * The SessionEvent event type when a session is destroyed.
                 */
                // @ts-ignore
                readonly SESSION_DESTROYED_EVENT: java.lang.String | string
                /**
                 * The SessionEvent event type when a session is activated.
                 */
                // @ts-ignore
                readonly SESSION_ACTIVATED_EVENT: java.lang.String | string
                /**
                 * The SessionEvent event type when a session is passivated.
                 */
                // @ts-ignore
                readonly SESSION_PASSIVATED_EVENT: java.lang.String | string
                /**
                 * @return the authentication type used to authenticate our cached
                 *  Principal, if any.
                 */
                // @ts-ignore
                getAuthType(): string
                /**
                 * Set the authentication type used to authenticate our cached
                 * Principal, if any.
                 * @param authType The new cached authentication type
                 */
                // @ts-ignore
                setAuthType(authType: java.lang.String | string): void
                /**
                 * @return the creation time for this session.
                 */
                // @ts-ignore
                getCreationTime(): number /*long*/
                /**
                 * @return the creation time for this session, bypassing the session validity
                 *  checks.
                 */
                // @ts-ignore
                getCreationTimeInternal(): number /*long*/
                /**
                 * Set the creation time for this session.  This method is called by the
                 * Manager when an existing Session instance is reused.
                 * @param time The new creation time
                 */
                // @ts-ignore
                setCreationTime(time: number /*long*/): void
                /**
                 * @return the session identifier for this session.
                 */
                // @ts-ignore
                getId(): string
                /**
                 * @return the session identifier for this session.
                 */
                // @ts-ignore
                getIdInternal(): string
                /**
                 * Set the session identifier for this session and notifies any associated
                 * listeners that a new session has been created.
                 * @param id The new session identifier
                 */
                // @ts-ignore
                setId(id: java.lang.String | string): void
                /**
                 * Set the session identifier for this session and optionally notifies any
                 * associated listeners that a new session has been created.
                 * @param id        The new session identifier
                 * @param notify    Should any associated listeners be notified that a new
                 *                       session has been created?
                 */
                // @ts-ignore
                setId(id: java.lang.String | string, notify: boolean): void
                /**
                 * @return the last time the client sent a request associated with this
                 *  session, as the number of milliseconds since midnight, January 1, 1970
                 *  GMT.  Actions that your application takes, such as getting or setting
                 *  a value associated with the session, do not affect the access time.
                 *  This one gets updated whenever a request starts.
                 */
                // @ts-ignore
                getThisAccessedTime(): number /*long*/
                /**
                 * @return the last client access time without invalidation check
                 * @see #getThisAccessedTime()
                 */
                // @ts-ignore
                getThisAccessedTimeInternal(): number /*long*/
                /**
                 * @return the last time the client sent a request associated with this
                 *  session, as the number of milliseconds since midnight, January 1, 1970
                 *  GMT.  Actions that your application takes, such as getting or setting
                 *  a value associated with the session, do not affect the access time.
                 *  This one gets updated whenever a request finishes.
                 */
                // @ts-ignore
                getLastAccessedTime(): number /*long*/
                /**
                 * @return the last client access time without invalidation check
                 * @see #getLastAccessedTime()
                 */
                // @ts-ignore
                getLastAccessedTimeInternal(): number /*long*/
                /**
                 * @return the idle time (in milliseconds) from last client access time.
                 */
                // @ts-ignore
                getIdleTime(): number /*long*/
                /**
                 * @return the idle time from last client access time without invalidation check
                 * @see #getIdleTime()
                 */
                // @ts-ignore
                getIdleTimeInternal(): number /*long*/
                /**
                 * @return the Manager within which this Session is valid.
                 */
                // @ts-ignore
                getManager(): org.apache.catalina.Manager
                /**
                 * Set the Manager within which this Session is valid.
                 * @param manager The new Manager
                 */
                // @ts-ignore
                setManager(manager: org.apache.catalina.Manager): void
                /**
                 * @return the maximum time interval, in seconds, between client requests
                 *  before the servlet container will invalidate the session.  A negative
                 *  time indicates that the session should never time out.
                 */
                // @ts-ignore
                getMaxInactiveInterval(): number /*int*/
                /**
                 * Set the maximum time interval, in seconds, between client requests
                 * before the servlet container will invalidate the session.  A negative
                 * time indicates that the session should never time out.
                 * @param interval The new maximum interval
                 */
                // @ts-ignore
                setMaxInactiveInterval(interval: number /*int*/): void
                /**
                 * Set the <code>isNew</code> flag for this session.
                 * @param isNew The new value for the <code>isNew</code> flag
                 */
                // @ts-ignore
                setNew(isNew: boolean): void
                /**
                 * @return the authenticated Principal that is associated with this Session.
                 *  This provides an <code>Authenticator</code> with a means to cache a
                 *  previously authenticated Principal, and avoid potentially expensive
                 *  <code>Realm.authenticate()</code> calls on every request.  If there
                 *  is no current associated Principal, return <code>null</code>.
                 */
                // @ts-ignore
                getPrincipal(): java.security.Principal
                /**
                 * Set the authenticated Principal that is associated with this Session.
                 * This provides an <code>Authenticator</code> with a means to cache a
                 * previously authenticated Principal, and avoid potentially expensive
                 * <code>Realm.authenticate()</code> calls on every request.
                 * @param principal The new Principal, or <code>null</code> if none
                 */
                // @ts-ignore
                setPrincipal(principal: java.security.Principal): void
                /**
                 * @return the <code>HttpSession</code> for which this object
                 *  is the facade.
                 */
                // @ts-ignore
                getSession(): javax.servlet.http.HttpSession
                /**
                 * Set the <code>isValid</code> flag for this session.
                 * @param isValid The new value for the <code>isValid</code> flag
                 */
                // @ts-ignore
                setValid(isValid: boolean): void
                /**
                 * @return <code>true</code> if the session is still valid
                 */
                // @ts-ignore
                isValid(): boolean
                /**
                 * Update the accessed time information for this session.  This method
                 * should be called by the context when a request comes in for a particular
                 * session, even if the application does not reference it.
                 */
                // @ts-ignore
                access(): void
                /**
                 * Add a session event listener to this component.
                 * @param listener the SessionListener instance that should be notified
                 *    for session events
                 */
                // @ts-ignore
                addSessionListener(listener: org.apache.catalina.SessionListener): void
                /**
                 * End access to the session.
                 */
                // @ts-ignore
                endAccess(): void
                /**
                 * Perform the internal processing required to invalidate this session,
                 * without triggering an exception if the session has already expired.
                 */
                // @ts-ignore
                expire(): void
                /**
                 * @return the object bound with the specified name to the internal notes
                 *  for this session, or <code>null</code> if no such binding exists.
                 * @param name Name of the note to be returned
                 */
                // @ts-ignore
                getNote(name: java.lang.String | string): any
                /**
                 * @return an Iterator containing the String names of all notes bindings
                 *  that exist for this session.
                 */
                // @ts-ignore
                getNoteNames(): java.util.Iterator<java.lang.String | string>
                /**
                 * Release all object references, and initialize instance variables, in
                 * preparation for reuse of this object.
                 */
                // @ts-ignore
                recycle(): void
                /**
                 * Remove any object bound to the specified name in the internal notes
                 * for this session.
                 * @param name Name of the note to be removed
                 */
                // @ts-ignore
                removeNote(name: java.lang.String | string): void
                /**
                 * Remove a session event listener from this component.
                 * @param listener remove the session listener, which will no longer be
                 *      notified
                 */
                // @ts-ignore
                removeSessionListener(listener: org.apache.catalina.SessionListener): void
                /**
                 * Bind an object to a specified name in the internal notes associated
                 * with this session, replacing any existing binding for this name.
                 * @param name Name to which the object should be bound
                 * @param value Object to be bound to the specified name
                 */
                // @ts-ignore
                setNote(name: java.lang.String | string, value: java.lang.Object | any): void
                /**
                 * Inform the listeners about the change session ID.
                 * @param newId  new session ID
                 * @param oldId  old session ID
                 * @param notifySessionListeners  Should any associated sessionListeners be
                 *         notified that session ID has been changed?
                 * @param notifyContainerListeners  Should any associated ContainerListeners
                 *         be notified that session ID has been changed?
                 */
                // @ts-ignore
                tellChangedSessionId(newId: java.lang.String | string, oldId: java.lang.String | string, notifySessionListeners: boolean, notifyContainerListeners: boolean): void
                /**
                 * Does the session implementation support the distributing of the given
                 * attribute? If the Manager is marked as distributable, then this method
                 * must be used to check attributes before adding them to a session and
                 * an {@link IllegalArgumentException} thrown if the proposed attribute is
                 * not distributable.
                 * <p>
                 * Note that the {@link Manager} implementation may further restrict which
                 * attributes are distributed but a {@link Manager} level restriction should
                 * not trigger an {@link IllegalArgumentException} in
                 * {@link HttpSession#setAttribute(String, Object)}
                 * @param name  The attribute name
                 * @param value The attribute value
                 * @return {#code true} if distribution is supported, otherwise {@code
                 *          false}
                 */
                // @ts-ignore
                isAttributeDistributable(name: java.lang.String | string, value: java.lang.Object | any): boolean
            }
        }
    }
}
