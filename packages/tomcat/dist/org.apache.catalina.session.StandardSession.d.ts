declare namespace org {
    namespace apache {
        namespace catalina {
            namespace session {
                /**
                 * Standard implementation of the <b>Session</b> interface.  This object is
                 * serializable, so that it can be stored in persistent storage or transferred
                 * to a different JVM for distributable session support.
                 * <p>
                 * <b>IMPLEMENTATION NOTE</b>:  An instance of this class represents both the
                 * internal (Session) and application level (HttpSession) view of the session.
                 * However, because the class itself is not declared public, Java logic outside
                 * of the <code>org.apache.catalina.session</code> package cannot cast an
                 * HttpSession view of this instance back to a Session view.
                 * <p>
                 * <b>IMPLEMENTATION NOTE</b>:  If you add fields to this class, you must
                 * make sure that you carry them over in the read/writeObject methods so
                 * that this class is properly serialized.
                 * @author Craig R. McClanahan
                 * @author Sean Legassick
                 * @author <a href="mailto:jon#latchkey.com">Jon S. Stevens</a>
                 */
                // @ts-ignore
                class StandardSession extends java.lang.Object implements javax.servlet.http.HttpSession, org.apache.catalina.Session, java.io.Serializable {
                    /**
                     * Construct a new Session associated with the specified Manager.
                     * @param manager The manager with which this Session is associated
                     */
                    // @ts-ignore
                    constructor(manager: org.apache.catalina.Manager)
                    // @ts-ignore
                    static readonly STRICT_SERVLET_COMPLIANCE: boolean
                    // @ts-ignore
                    static readonly ACTIVITY_CHECK: boolean
                    // @ts-ignore
                    static readonly LAST_ACCESS_AT_START: boolean
                    /**
                     * Type array.
                     */
                    // @ts-ignore
                    static readonly EMPTY_ARRAY: java.lang.String[] | string[]
                    /**
                     * The collection of user data attributes associated with this Session.
                     */
                    // @ts-ignore
                    attributes: java.util.concurrent.ConcurrentMap<java.lang.String | string, java.lang.Object | any>
                    /**
                     * The authentication type used to authenticate our cached Principal,
                     * if any.  NOTE:  This value is not included in the serialized
                     * version of this object.
                     */
                    // @ts-ignore
                    authType: java.lang.String | string
                    /**
                     * The time this session was created, in milliseconds since midnight,
                     * January 1, 1970 GMT.
                     */
                    // @ts-ignore
                    creationTime: number /*long*/
                    /**
                     * We are currently processing a session expiration, so bypass
                     * certain IllegalStateException tests.  NOTE:  This value is not
                     * included in the serialized version of this object.
                     */
                    // @ts-ignore
                    expiring: boolean
                    /**
                     * The facade associated with this session.  NOTE:  This value is not
                     * included in the serialized version of this object.
                     */
                    // @ts-ignore
                    facade: org.apache.catalina.session.StandardSessionFacade
                    /**
                     * The session identifier of this Session.
                     */
                    // @ts-ignore
                    id: java.lang.String | string
                    /**
                     * The last accessed time for this Session.
                     */
                    // @ts-ignore
                    lastAccessedTime: number /*long*/
                    /**
                     * The session event listeners for this Session.
                     */
                    // @ts-ignore
                    listeners: java.util.ArrayList<org.apache.catalina.SessionListener>
                    /**
                     * The Manager with which this Session is associated.
                     */
                    // @ts-ignore
                    manager: org.apache.catalina.Manager
                    /**
                     * The maximum time interval, in seconds, between client requests before
                     * the servlet container may invalidate this session.  A negative time
                     * indicates that the session should never time out.
                     */
                    // @ts-ignore
                    maxInactiveInterval: number /*int*/
                    /**
                     * Internal notes associated with this session by Catalina components
                     * and event listeners.  <b>IMPLEMENTATION NOTE:</b> This object is
                     * <em>not</em> saved and restored across session serializations!
                     */
                    // @ts-ignore
                    notes: java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * The authenticated Principal associated with this session, if any.
                     * <b>IMPLEMENTATION NOTE:</b>  This object is <i>not</i> saved and
                     * restored across session serializations!
                     */
                    // @ts-ignore
                    principal: java.security.Principal
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The HTTP session context associated with this session.
                     */
                    // @ts-ignore
                    static sessionContext: javax.servlet.http.HttpSessionContext
                    /**
                     * The property change support for this component.  NOTE:  This value
                     * is not included in the serialized version of this object.
                     */
                    // @ts-ignore
                    readonly support: java.beans.PropertyChangeSupport
                    /**
                     * The current accessed time for this session.
                     */
                    // @ts-ignore
                    thisAccessedTime: number /*long*/
                    /**
                     * The access count for this session.
                     */
                    // @ts-ignore
                    accessCount: java.util.concurrent.atomic.AtomicInteger
                    /**
                     * Return the authentication type used to authenticate our cached
                     * Principal, if any.
                     */
                    // @ts-ignore
                    public getAuthType(): string
                    /**
                     * Set the authentication type used to authenticate our cached
                     * Principal, if any.
                     * @param authType The new cached authentication type
                     */
                    // @ts-ignore
                    public setAuthType(authType: java.lang.String | string): void
                    /**
                     * Set the creation time for this session.  This method is called by the
                     * Manager when an existing Session instance is reused.
                     * @param time The new creation time
                     */
                    // @ts-ignore
                    public setCreationTime(time: number /*long*/): void
                    /**
                     * Return the session identifier for this session.
                     */
                    // @ts-ignore
                    public getId(): string
                    /**
                     * Return the session identifier for this session.
                     */
                    // @ts-ignore
                    public getIdInternal(): string
                    /**
                     * Set the session identifier for this session.
                     * @param id The new session identifier
                     */
                    // @ts-ignore
                    public setId(id: java.lang.String | string): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public setId(id: java.lang.String | string, notify: boolean): void
                    /**
                     * Inform the listeners about the new session.
                     */
                    // @ts-ignore
                    public tellNew(): void
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
                    public tellChangedSessionId(newId: java.lang.String | string, oldId: java.lang.String | string, notifySessionListeners: boolean, notifyContainerListeners: boolean): void
                    /**
                     * Return the last time the client sent a request associated with this
                     * session, as the number of milliseconds since midnight, January 1, 1970
                     * GMT.  Actions that your application takes, such as getting or setting
                     * a value associated with the session, do not affect the access time.
                     * This one gets updated whenever a request starts.
                     */
                    // @ts-ignore
                    public getThisAccessedTime(): number /*long*/
                    /**
                     * Return the last client access time without invalidation check
                     * @see #getThisAccessedTime()
                     */
                    // @ts-ignore
                    public getThisAccessedTimeInternal(): number /*long*/
                    /**
                     * Return the last time the client sent a request associated with this
                     * session, as the number of milliseconds since midnight, January 1, 1970
                     * GMT.  Actions that your application takes, such as getting or setting
                     * a value associated with the session, do not affect the access time.
                     * This one gets updated whenever a request finishes.
                     */
                    // @ts-ignore
                    public getLastAccessedTime(): number /*long*/
                    /**
                     * Return the last client access time without invalidation check
                     * @see #getLastAccessedTime()
                     */
                    // @ts-ignore
                    public getLastAccessedTimeInternal(): number /*long*/
                    /**
                     * Return the idle time (in milliseconds) from last client access time.
                     */
                    // @ts-ignore
                    public getIdleTime(): number /*long*/
                    /**
                     * Return the idle time from last client access time without invalidation check
                     * @see #getIdleTime()
                     */
                    // @ts-ignore
                    public getIdleTimeInternal(): number /*long*/
                    /**
                     * Return the Manager within which this Session is valid.
                     */
                    // @ts-ignore
                    public getManager(): org.apache.catalina.Manager
                    /**
                     * Set the Manager within which this Session is valid.
                     * @param manager The new Manager
                     */
                    // @ts-ignore
                    public setManager(manager: org.apache.catalina.Manager): void
                    /**
                     * Return the maximum time interval, in seconds, between client requests
                     * before the servlet container will invalidate the session.  A negative
                     * time indicates that the session should never time out.
                     */
                    // @ts-ignore
                    public getMaxInactiveInterval(): number /*int*/
                    /**
                     * Set the maximum time interval, in seconds, between client requests
                     * before the servlet container will invalidate the session.  A zero or
                     * negative time indicates that the session should never time out.
                     * @param interval The new maximum interval
                     */
                    // @ts-ignore
                    public setMaxInactiveInterval(interval: number /*int*/): void
                    /**
                     * Set the <code>isNew</code> flag for this session.
                     * @param isNew The new value for the <code>isNew</code> flag
                     */
                    // @ts-ignore
                    public setNew(isNew: boolean): void
                    /**
                     * Return the authenticated Principal that is associated with this Session.
                     * This provides an <code>Authenticator</code> with a means to cache a
                     * previously authenticated Principal, and avoid potentially expensive
                     * <code>Realm.authenticate()</code> calls on every request.  If there
                     * is no current associated Principal, return <code>null</code>.
                     */
                    // @ts-ignore
                    public getPrincipal(): java.security.Principal
                    /**
                     * Set the authenticated Principal that is associated with this Session.
                     * This provides an <code>Authenticator</code> with a means to cache a
                     * previously authenticated Principal, and avoid potentially expensive
                     * <code>Realm.authenticate()</code> calls on every request.
                     * @param principal The new Principal, or <code>null</code> if none
                     */
                    // @ts-ignore
                    public setPrincipal(principal: java.security.Principal): void
                    /**
                     * Return the <code>HttpSession</code> for which this object
                     * is the facade.
                     */
                    // @ts-ignore
                    public getSession(): javax.servlet.http.HttpSession
                    /**
                     * Return the <code>isValid</code> flag for this session.
                     */
                    // @ts-ignore
                    public isValid(): boolean
                    /**
                     * Set the <code>isValid</code> flag for this session.
                     * @param isValid The new value for the <code>isValid</code> flag
                     */
                    // @ts-ignore
                    public setValid(isValid: boolean): void
                    /**
                     * Update the accessed time information for this session.  This method
                     * should be called by the context when a request comes in for a particular
                     * session, even if the application does not reference it.
                     */
                    // @ts-ignore
                    public access(): void
                    /**
                     * End the access.
                     */
                    // @ts-ignore
                    public endAccess(): void
                    /**
                     * Add a session event listener to this component.
                     */
                    // @ts-ignore
                    public addSessionListener(listener: org.apache.catalina.SessionListener): void
                    /**
                     * Perform the internal processing required to invalidate this session,
                     * without triggering an exception if the session has already expired.
                     */
                    // @ts-ignore
                    public expire(): void
                    /**
                     * Perform the internal processing required to invalidate this session,
                     * without triggering an exception if the session has already expired.
                     * @param notify Should we notify listeners about the demise of
                     *   this session?
                     */
                    // @ts-ignore
                    public expire(notify: boolean): void
                    /**
                     * Perform the internal processing required to passivate
                     * this session.
                     */
                    // @ts-ignore
                    public passivate(): void
                    /**
                     * Perform internal processing required to activate this
                     * session.
                     */
                    // @ts-ignore
                    public activate(): void
                    /**
                     * Return the object bound with the specified name to the internal notes
                     * for this session, or <code>null</code> if no such binding exists.
                     * @param name Name of the note to be returned
                     */
                    // @ts-ignore
                    public getNote(name: java.lang.String | string): any
                    /**
                     * Return an Iterator containing the String names of all notes bindings
                     * that exist for this session.
                     */
                    // @ts-ignore
                    public getNoteNames(): java.util.Iterator<java.lang.String | string>
                    /**
                     * Release all object references, and initialize instance variables, in
                     * preparation for reuse of this object.
                     */
                    // @ts-ignore
                    public recycle(): void
                    /**
                     * Remove any object bound to the specified name in the internal notes
                     * for this session.
                     * @param name Name of the note to be removed
                     */
                    // @ts-ignore
                    public removeNote(name: java.lang.String | string): void
                    /**
                     * Remove a session event listener from this component.
                     */
                    // @ts-ignore
                    public removeSessionListener(listener: org.apache.catalina.SessionListener): void
                    /**
                     * Bind an object to a specified name in the internal notes associated
                     * with this session, replacing any existing binding for this name.
                     * @param name Name to which the object should be bound
                     * @param value Object to be bound to the specified name
                     */
                    // @ts-ignore
                    public setNote(name: java.lang.String | string, value: java.lang.Object | any): void
                    /**
                     * Return a string representation of this object.
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Read a serialized version of the contents of this session object from
                     * the specified object input stream, without requiring that the
                     * StandardSession itself have been serialized.
                     * @param stream The object input stream to read from
                     * @exception ClassNotFoundException if an unknown class is specified
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public readObjectData(stream: java.io.ObjectInputStream): void
                    /**
                     * Write a serialized version of the contents of this session object to
                     * the specified object output stream, without requiring that the
                     * StandardSession itself have been serialized.
                     * @param stream The object output stream to write to
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public writeObjectData(stream: java.io.ObjectOutputStream): void
                    /**
                     * Return the time when this session was created, in milliseconds since
                     * midnight, January 1, 1970 GMT.
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     */
                    // @ts-ignore
                    public getCreationTime(): number /*long*/
                    /**
                     * Return the time when this session was created, in milliseconds since
                     * midnight, January 1, 1970 GMT, bypassing the session validation checks.
                     */
                    // @ts-ignore
                    public getCreationTimeInternal(): number /*long*/
                    /**
                     * Return the ServletContext to which this session belongs.
                     */
                    // @ts-ignore
                    public getServletContext(): javax.servlet.ServletContext
                    /**
                     * Return the session context with which this session is associated.
                     * @deprecated As of Version 2.1, this method is deprecated and has no
                     *   replacement.  It will be removed in a future version of the
                     *   Java Servlet API.
                     */
                    // @ts-ignore
                    public getSessionContext(): javax.servlet.http.HttpSessionContext
                    /**
                     * Return the object bound with the specified name in this session, or
                     * <code>null</code> if no object is bound with that name.
                     * @param name Name of the attribute to be returned
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     */
                    // @ts-ignore
                    public getAttribute(name: java.lang.String | string): any
                    /**
                     * Return an <code>Enumeration</code> of <code>String</code> objects
                     * containing the names of the objects bound to this session.
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     */
                    // @ts-ignore
                    public getAttributeNames(): java.util.Enumeration<java.lang.String | string>
                    /**
                     * Return the object bound with the specified name in this session, or
                     * <code>null</code> if no object is bound with that name.
                     * @param name Name of the value to be returned
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     * @deprecated As of Version 2.2, this method is replaced by
                     *   <code>getAttribute()</code>
                     */
                    // @ts-ignore
                    public getValue(name: java.lang.String | string): any
                    /**
                     * Return the set of names of objects bound to this session.  If there
                     * are no such objects, a zero-length array is returned.
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     * @deprecated As of Version 2.2, this method is replaced by
                     *   <code>getAttributeNames()</code>
                     */
                    // @ts-ignore
                    public getValueNames(): string[]
                    /**
                     * Invalidates this session and unbinds any objects bound to it.
                     * @exception IllegalStateException if this method is called on
                     *   an invalidated session
                     */
                    // @ts-ignore
                    public invalidate(): void
                    /**
                     * Return <code>true</code> if the client does not yet know about the
                     * session, or if the client chooses not to join the session.  For
                     * example, if the server used only cookie-based sessions, and the client
                     * has disabled the use of cookies, then a session would be new on each
                     * request.
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     */
                    // @ts-ignore
                    public isNew(): boolean
                    /**
                     * Bind an object to this session, using the specified name.  If an object
                     * of the same name is already bound to this session, the object is
                     * replaced.
                     * <p>
                     * After this method executes, and if the object implements
                     * <code>HttpSessionBindingListener</code>, the container calls
                     * <code>valueBound()</code> on the object.
                     * @param name Name to which the object is bound, cannot be null
                     * @param value Object to be bound, cannot be null
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     * @deprecated As of Version 2.2, this method is replaced by
                     *   <code>setAttribute()</code>
                     */
                    // @ts-ignore
                    public putValue(name: java.lang.String | string, value: java.lang.Object | any): void
                    /**
                     * Remove the object bound with the specified name from this session.  If
                     * the session does not have an object bound with this name, this method
                     * does nothing.
                     * <p>
                     * After this method executes, and if the object implements
                     * <code>HttpSessionBindingListener</code>, the container calls
                     * <code>valueUnbound()</code> on the object.
                     * @param name Name of the object to remove from this session.
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     */
                    // @ts-ignore
                    public removeAttribute(name: java.lang.String | string): void
                    /**
                     * Remove the object bound with the specified name from this session.  If
                     * the session does not have an object bound with this name, this method
                     * does nothing.
                     * <p>
                     * After this method executes, and if the object implements
                     * <code>HttpSessionBindingListener</code>, the container calls
                     * <code>valueUnbound()</code> on the object.
                     * @param name Name of the object to remove from this session.
                     * @param notify Should we notify interested listeners that this
                     *   attribute is being removed?
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     */
                    // @ts-ignore
                    public removeAttribute(name: java.lang.String | string, notify: boolean): void
                    /**
                     * Remove the object bound with the specified name from this session.  If
                     * the session does not have an object bound with this name, this method
                     * does nothing.
                     * <p>
                     * After this method executes, and if the object implements
                     * <code>HttpSessionBindingListener</code>, the container calls
                     * <code>valueUnbound()</code> on the object.
                     * @param name Name of the object to remove from this session.
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     * @deprecated As of Version 2.2, this method is replaced by
                     *   <code>removeAttribute()</code>
                     */
                    // @ts-ignore
                    public removeValue(name: java.lang.String | string): void
                    /**
                     * Bind an object to this session, using the specified name.  If an object
                     * of the same name is already bound to this session, the object is
                     * replaced.
                     * <p>
                     * After this method executes, and if the object implements
                     * <code>HttpSessionBindingListener</code>, the container calls
                     * <code>valueBound()</code> on the object.
                     * @param name Name to which the object is bound, cannot be null
                     * @param value Object to be bound, cannot be null
                     * @exception IllegalArgumentException if an attempt is made to add a
                     *   non-serializable object in an environment marked distributable.
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     */
                    // @ts-ignore
                    public setAttribute(name: java.lang.String | string, value: java.lang.Object | any): void
                    /**
                     * Bind an object to this session, using the specified name.  If an object
                     * of the same name is already bound to this session, the object is
                     * replaced.
                     * <p>
                     * After this method executes, and if the object implements
                     * <code>HttpSessionBindingListener</code>, the container calls
                     * <code>valueBound()</code> on the object.
                     * @param name Name to which the object is bound, cannot be null
                     * @param value Object to be bound, cannot be null
                     * @param notify whether to notify session listeners
                     * @exception IllegalArgumentException if an attempt is made to add a
                     *   non-serializable object in an environment marked distributable.
                     * @exception IllegalStateException if this method is called on an
                     *   invalidated session
                     */
                    // @ts-ignore
                    public setAttribute(name: java.lang.String | string, value: java.lang.Object | any, notify: boolean): void
                    /**
                     * @return the <code>isValid</code> flag for this session without any expiration
                     *  check.
                     */
                    // @ts-ignore
                    isValidInternal(): boolean
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation simply checks the value for serializability.
                     * Sub-classes might use other distribution technology not based on
                     * serialization and can override this check.
                     */
                    // @ts-ignore
                    public isAttributeDistributable(name: java.lang.String | string, value: java.lang.Object | any): boolean
                    /**
                     * Read a serialized version of this session object from the specified
                     * object input stream.
                     * <p>
                     * <b>IMPLEMENTATION NOTE</b>:  The reference to the owning Manager
                     * is not restored by this method, and must be set explicitly.
                     * @param stream The input stream to read from
                     * @exception ClassNotFoundException if an unknown class is specified
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    doReadObject(stream: java.io.ObjectInputStream): void
                    /**
                     * Write a serialized version of this session object to the specified
                     * object output stream.
                     * <p>
                     * <b>IMPLEMENTATION NOTE</b>:  The owning Manager will not be stored
                     * in the serialized representation of this Session.  After calling
                     * <code>readObject()</code>, you must set the associated Manager
                     * explicitly.
                     * <p>
                     * <b>IMPLEMENTATION NOTE</b>:  Any attribute that is not Serializable
                     * will be unbound from the session, with appropriate actions if it
                     * implements HttpSessionBindingListener.  If you do not want any such
                     * attributes, be sure the <code>distributable</code> property of the
                     * associated Manager is set to <code>true</code>.
                     * @param stream The output stream to write to
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    doWriteObject(stream: java.io.ObjectOutputStream): void
                    /**
                     * Should the given session attribute be excluded? This implementation
                     * checks:
                     * <ul>
                     * <li>{@link Constants#excludedAttributeNames}</li>
                     * <li>{@link Manager#willAttributeDistribute(String, Object)}</li>
                     * </ul>
                     * Note: This method deliberately does not check
                     * {@link #isAttributeDistributable(String, Object)} which is kept
                     * separate to support the checks required in
                     * {@link #setAttribute(String, Object, boolean)}
                     * @param name  The attribute name
                     * @param value The attribute value
                     * @return {#code true} if the attribute should be excluded from
                     *          distribution, otherwise {@code false}
                     */
                    // @ts-ignore
                    exclude(name: java.lang.String | string, value: java.lang.Object | any): boolean
                    /**
                     * Notify all session event listeners that a particular event has
                     * occurred for this Session.  The default implementation performs
                     * this notification synchronously using the calling thread.
                     * @param type Event type
                     * @param data Event data
                     */
                    // @ts-ignore
                    public fireSessionEvent(type: java.lang.String | string, data: java.lang.Object | any): void
                    /**
                     * @return the names of all currently defined session attributes
                     *  as an array of Strings.  If there are no defined attributes, a
                     *  zero-length array is returned.
                     */
                    // @ts-ignore
                    keys(): string[]
                    /**
                     * Remove the object bound with the specified name from this session.  If
                     * the session does not have an object bound with this name, this method
                     * does nothing.
                     * <p>
                     * After this method executes, and if the object implements
                     * <code>HttpSessionBindingListener</code>, the container calls
                     * <code>valueUnbound()</code> on the object.
                     * @param name Name of the object to remove from this session.
                     * @param notify Should we notify interested listeners that this
                     *   attribute is being removed?
                     */
                    // @ts-ignore
                    removeAttributeInternal(name: java.lang.String | string, notify: boolean): void
                }
            }
        }
    }
}
