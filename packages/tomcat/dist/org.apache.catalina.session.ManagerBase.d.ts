declare namespace org {
    namespace apache {
        namespace catalina {
            namespace session {
                /**
                 * Minimal implementation of the <b>Manager</b> interface that supports
                 * no session persistence or distributable capabilities.  This class may
                 * be subclassed to create more sophisticated Manager implementations.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                abstract class ManagerBase extends org.apache.catalina.util.LifecycleMBeanBase implements org.apache.catalina.Manager {
                    // @ts-ignore
                    constructor()
                    /**
                     * The Java class name of the secure random number generator class to be
                     * used when generating session identifiers. The random number generator
                     * class must be self-seeding and have a zero-argument constructor. If not
                     * specified, an instance of {@link java.security.SecureRandom} will be
                     * generated.
                     */
                    // @ts-ignore
                    secureRandomClass: java.lang.String | string
                    /**
                     * The name of the algorithm to use to create instances of
                     * {@link java.security.SecureRandom} which are used to generate session IDs.
                     * If no algorithm is specified, SHA1PRNG is used. To use the platform
                     * default (which may be SHA1PRNG), specify the empty string. If an invalid
                     * algorithm and/or provider is specified the SecureRandom instances will be
                     * created using the defaults. If that fails, the SecureRandom instances
                     * will be created using platform defaults.
                     */
                    // @ts-ignore
                    secureRandomAlgorithm: java.lang.String | string
                    /**
                     * The name of the provider to use to create instances of
                     * {@link java.security.SecureRandom} which are used to generate session IDs.
                     * If no algorithm is specified the of SHA1PRNG default is used. If an
                     * invalid algorithm and/or provider is specified the SecureRandom instances
                     * will be created using the defaults. If that fails, the SecureRandom
                     * instances will be created using platform defaults.
                     */
                    // @ts-ignore
                    secureRandomProvider: java.lang.String | string
                    // @ts-ignore
                    sessionIdGenerator: org.apache.catalina.SessionIdGenerator
                    // @ts-ignore
                    sessionIdGeneratorClass: java.lang.Class<any>
                    /**
                     * The longest time (in seconds) that an expired session had been alive.
                     */
                    // @ts-ignore
                    sessionMaxAliveTime: number /*int*/
                    // @ts-ignore
                    static readonly TIMING_STATS_CACHE_SIZE: number /*int*/
                    // @ts-ignore
                    readonly sessionCreationTiming: java.util.Deque<org.apache.catalina.session.ManagerBase.SessionTiming>
                    // @ts-ignore
                    readonly sessionExpirationTiming: java.util.Deque<org.apache.catalina.session.ManagerBase.SessionTiming>
                    /**
                     * Number of sessions that have expired.
                     */
                    // @ts-ignore
                    readonly expiredSessions: java.util.concurrent.atomic.AtomicLong
                    /**
                     * The set of currently active Sessions for this Manager, keyed by
                     * session identifier.
                     */
                    // @ts-ignore
                    sessions: java.util.Map<java.lang.String | string, org.apache.catalina.Session>
                    // @ts-ignore
                    sessionCounter: number /*long*/
                    // @ts-ignore
                    maxActive: number /*int*/
                    /**
                     * The maximum number of active Sessions allowed, or -1 for no limit.
                     */
                    // @ts-ignore
                    maxActiveSessions: number /*int*/
                    /**
                     * Number of session creations that failed due to maxActiveSessions.
                     */
                    // @ts-ignore
                    rejectedSessions: number /*int*/
                    // @ts-ignore
                    duplicates: number /*int*/
                    /**
                     * Processing time during session expiration.
                     */
                    // @ts-ignore
                    processingTime: number /*long*/
                    /**
                     * Frequency of the session expiration, and related manager operations.
                     * Manager operations will be done once for the specified amount of
                     * backgroundProcess calls (ie, the lower the amount, the most often the
                     * checks will occur).
                     */
                    // @ts-ignore
                    processExpiresFrequency: number /*int*/
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The property change support for this component.
                     */
                    // @ts-ignore
                    readonly support: java.beans.PropertyChangeSupport
                    // @ts-ignore
                    public getNotifyAttributeListenerOnUnchangedValue(): boolean
                    // @ts-ignore
                    public setNotifyAttributeListenerOnUnchangedValue(notifyAttributeListenerOnUnchangedValue: boolean): void
                    // @ts-ignore
                    public getNotifyBindingListenerOnUnchangedValue(): boolean
                    // @ts-ignore
                    public setNotifyBindingListenerOnUnchangedValue(notifyBindingListenerOnUnchangedValue: boolean): void
                    /**
                     * Obtain the regular expression used to filter session attribute based on
                     * attribute name. The regular expression is anchored so it must match the
                     * entire name
                     * @return The regular expression currently used to filter attribute names.
                     *          {#code null} means no filter is applied. If an empty string is
                     *          specified then no names will match the filter and all attributes
                     *          will be blocked.
                     */
                    // @ts-ignore
                    public getSessionAttributeNameFilter(): string
                    /**
                     * Set the regular expression to use to filter session attributes based on
                     * attribute name. The regular expression is anchored so it must match the
                     * entire name.
                     * @param sessionAttributeNameFilter The regular expression to use to filter
                     *         session attributes based on attribute name. Use {#code null} if no
                     *         filtering is required. If an empty string is specified then no
                     *         names will match the filter and all attributes will be blocked.
                     * @throws PatternSyntaxException If the expression is not valid
                     */
                    // @ts-ignore
                    public setSessionAttributeNameFilter(sessionAttributeNameFilter: java.lang.String | string): void
                    /**
                     * Provides {@link #getSessionAttributeNameFilter()} as a pre-compiled
                     * regular expression pattern.
                     * @return The pre-compiled pattern used to filter session attributes based
                     *          on attribute name. {#code null} means no filter is applied.
                     */
                    // @ts-ignore
                    getSessionAttributeNamePattern(): java.util.regex.Pattern
                    /**
                     * Obtain the regular expression used to filter session attribute based on
                     * the implementation class of the value. The regular expression is anchored
                     * and must match the fully qualified class name.
                     * @return The regular expression currently used to filter class names.
                     *          {#code null} means no filter is applied. If an empty string is
                     *          specified then no names will match the filter and all attributes
                     *          will be blocked.
                     */
                    // @ts-ignore
                    public getSessionAttributeValueClassNameFilter(): string
                    /**
                     * Provides {@link #getSessionAttributeValueClassNameFilter()} as a
                     * pre-compiled regular expression pattern.
                     * @return The pre-compiled pattern used to filter session attributes based
                     *          on the implementation class name of the value. {#code null} means
                     *          no filter is applied.
                     */
                    // @ts-ignore
                    getSessionAttributeValueClassNamePattern(): java.util.regex.Pattern
                    /**
                     * Set the regular expression to use to filter classes used for session
                     * attributes. The regular expression is anchored and must match the fully
                     * qualified class name.
                     * @param sessionAttributeValueClassNameFilter The regular expression to use
                     *             to filter session attributes based on class name. Use {#code
                     *             null} if no filtering is required. If an empty string is
                     *            specified then no names will match the filter and all
                     *            attributes will be blocked.
                     * @throws PatternSyntaxException If the expression is not valid
                     */
                    // @ts-ignore
                    public setSessionAttributeValueClassNameFilter(sessionAttributeValueClassNameFilter: java.lang.String | string): void
                    /**
                     * Should a warn level log message be generated if a session attribute is
                     * not persisted / replicated / restored.
                     * @return {#code true} if a warn level log message should be generated
                     */
                    // @ts-ignore
                    public getWarnOnSessionAttributeFilterFailure(): boolean
                    /**
                     * Configure whether or not a warn level log message should be generated if
                     * a session attribute is not persisted / replicated / restored.
                     * @param warnOnSessionAttributeFilterFailure {#code true} if the
                     *             warn level message should be generated
                     */
                    // @ts-ignore
                    public setWarnOnSessionAttributeFilterFailure(warnOnSessionAttributeFilterFailure: boolean): void
                    // @ts-ignore
                    public getContext(): org.apache.catalina.Context
                    // @ts-ignore
                    public setContext(context: org.apache.catalina.Context): void
                    /**
                     * @return The name of the implementation class.
                     */
                    // @ts-ignore
                    public getClassName(): string
                    // @ts-ignore
                    public getSessionIdGenerator(): org.apache.catalina.SessionIdGenerator
                    // @ts-ignore
                    public setSessionIdGenerator(sessionIdGenerator: org.apache.catalina.SessionIdGenerator): void
                    /**
                     * @return The descriptive short name of this Manager implementation.
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * @return The secure random number generator class name.
                     */
                    // @ts-ignore
                    public getSecureRandomClass(): string
                    /**
                     * Set the secure random number generator class name.
                     * @param secureRandomClass The new secure random number generator class
                     *                           name
                     */
                    // @ts-ignore
                    public setSecureRandomClass(secureRandomClass: java.lang.String | string): void
                    /**
                     * @return The secure random number generator algorithm name.
                     */
                    // @ts-ignore
                    public getSecureRandomAlgorithm(): string
                    /**
                     * Set the secure random number generator algorithm name.
                     * @param secureRandomAlgorithm The new secure random number generator
                     *                               algorithm name
                     */
                    // @ts-ignore
                    public setSecureRandomAlgorithm(secureRandomAlgorithm: java.lang.String | string): void
                    /**
                     * @return The secure random number generator provider name.
                     */
                    // @ts-ignore
                    public getSecureRandomProvider(): string
                    /**
                     * Set the secure random number generator provider name.
                     * @param secureRandomProvider The new secure random number generator
                     *                              provider name
                     */
                    // @ts-ignore
                    public setSecureRandomProvider(secureRandomProvider: java.lang.String | string): void
                    // @ts-ignore
                    public getRejectedSessions(): number /*int*/
                    // @ts-ignore
                    public getExpiredSessions(): number /*long*/
                    // @ts-ignore
                    public setExpiredSessions(expiredSessions: number /*long*/): void
                    // @ts-ignore
                    public getProcessingTime(): number /*long*/
                    // @ts-ignore
                    public setProcessingTime(processingTime: number /*long*/): void
                    /**
                     * @return The frequency of manager checks.
                     */
                    // @ts-ignore
                    public getProcessExpiresFrequency(): number /*int*/
                    /**
                     * Set the manager checks frequency.
                     * @param processExpiresFrequency the new manager checks frequency
                     */
                    // @ts-ignore
                    public setProcessExpiresFrequency(processExpiresFrequency: number /*int*/): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Direct call to {@link #processExpires()}
                     */
                    // @ts-ignore
                    public backgroundProcess(): void
                    /**
                     * Invalidate all sessions that have expired.
                     */
                    // @ts-ignore
                    public processExpires(): void
                    // @ts-ignore
                    initInternal(): void
                    // @ts-ignore
                    startInternal(): void
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    public add(session: org.apache.catalina.Session): void
                    // @ts-ignore
                    public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    // @ts-ignore
                    public createSession(sessionId: java.lang.String | string): org.apache.catalina.Session
                    // @ts-ignore
                    public createEmptySession(): org.apache.catalina.Session
                    // @ts-ignore
                    public findSession(id: java.lang.String | string): org.apache.catalina.Session
                    // @ts-ignore
                    public findSessions(): org.apache.catalina.Session[]
                    // @ts-ignore
                    public remove(session: org.apache.catalina.Session): void
                    // @ts-ignore
                    public remove(session: org.apache.catalina.Session, update: boolean): void
                    // @ts-ignore
                    public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    // @ts-ignore
                    public changeSessionId(session: org.apache.catalina.Session): void
                    // @ts-ignore
                    public changeSessionId(session: org.apache.catalina.Session, newId: java.lang.String | string): void
                    // @ts-ignore
                    changeSessionId(session: org.apache.catalina.Session, newId: java.lang.String | string, notifySessionListeners: boolean, notifyContainerListeners: boolean): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation excludes session attributes from distribution if the:
                     * <ul>
                     * <li>attribute name matches {@link #getSessionAttributeNameFilter()}</li>
                     * </ul>
                     */
                    // @ts-ignore
                    public willAttributeDistribute(name: java.lang.String | string, value: java.lang.Object | any): boolean
                    /**
                     * Get new session class to be used in the doLoad() method.
                     * @return a new session for use with this manager
                     */
                    // @ts-ignore
                    getNewSession(): org.apache.catalina.session.StandardSession
                    /**
                     * Generate and return a new session identifier.
                     * @return a new session id
                     */
                    // @ts-ignore
                    generateSessionId(): string
                    /**
                     * Retrieve the enclosing Engine for this Manager.
                     * @return an Engine object (or null).
                     */
                    // @ts-ignore
                    public getEngine(): org.apache.catalina.Engine
                    /**
                     * Retrieve the JvmRoute for the enclosing Engine.
                     * @return the JvmRoute or null.
                     */
                    // @ts-ignore
                    public getJvmRoute(): string
                    // @ts-ignore
                    public setSessionCounter(sessionCounter: number /*long*/): void
                    // @ts-ignore
                    public getSessionCounter(): number /*long*/
                    /**
                     * Number of duplicated session IDs generated by the random source.
                     * Anything bigger than 0 means problems.
                     * @return The count of duplicates
                     */
                    // @ts-ignore
                    public getDuplicates(): number /*int*/
                    // @ts-ignore
                    public setDuplicates(duplicates: number /*int*/): void
                    // @ts-ignore
                    public getActiveSessions(): number /*int*/
                    // @ts-ignore
                    public getMaxActive(): number /*int*/
                    // @ts-ignore
                    public setMaxActive(maxActive: number /*int*/): void
                    /**
                     * @return The maximum number of active Sessions allowed, or -1 for no
                     *          limit.
                     */
                    // @ts-ignore
                    public getMaxActiveSessions(): number /*int*/
                    /**
                     * Set the maximum number of active Sessions allowed, or -1 for
                     * no limit.
                     * @param max The new maximum number of sessions
                     */
                    // @ts-ignore
                    public setMaxActiveSessions(max: number /*int*/): void
                    // @ts-ignore
                    public getSessionMaxAliveTime(): number /*int*/
                    // @ts-ignore
                    public setSessionMaxAliveTime(sessionMaxAliveTime: number /*int*/): void
                    /**
                     * Updates the sessionMaxAliveTime attribute if the candidate value is
                     * larger than the current value.
                     * @param sessionAliveTime  The candidate value (in seconds) for the new
                     *                           sessionMaxAliveTime value.
                     */
                    // @ts-ignore
                    public updateSessionMaxAliveTime(sessionAliveTime: number /*int*/): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Based on the last 100 sessions to expire. If less than 100 sessions have
                     * expired then all available data is used.
                     */
                    // @ts-ignore
                    public getSessionAverageAliveTime(): number /*int*/
                    /**
                     * {@inheritDoc}<p>
                     * Based on the creation time of the previous 100 sessions created. If less
                     * than 100 sessions have been created then all available data is used.
                     */
                    // @ts-ignore
                    public getSessionCreateRate(): number /*int*/
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Based on the expiry time of the previous 100 sessions expired. If less
                     * than 100 sessions have expired then all available data is used.
                     * @return The current rate (in sessions per minute) of session expiration
                     */
                    // @ts-ignore
                    public getSessionExpireRate(): number /*int*/
                    /**
                     * For debugging.
                     * @return A space separated list of all session IDs currently active
                     */
                    // @ts-ignore
                    public listSessionIds(): string
                    /**
                     * For debugging.
                     * @param sessionId The ID for the session of interest
                     * @param key       The key for the attribute to obtain
                     * @return The attribute value for the specified session, if found, null
                     *          otherwise
                     */
                    // @ts-ignore
                    public getSessionAttribute(sessionId: java.lang.String | string, key: java.lang.String | string): string
                    /**
                     * Returns information about the session with the given session id.
                     * <p>The session information is organized as a HashMap, mapping
                     * session attribute names to the String representation of their values.
                     * @param sessionId Session id
                     * @return HashMap mapping session attribute names to the String
                     *  representation of their values, or null if no session with the
                     *  specified id exists, or if the session does not have any attributes
                     */
                    // @ts-ignore
                    public getSession(sessionId: java.lang.String | string): java.util.HashMap<java.lang.String | string, java.lang.String | string>
                    // @ts-ignore
                    public expireSession(sessionId: java.lang.String | string): void
                    // @ts-ignore
                    public getThisAccessedTimestamp(sessionId: java.lang.String | string): number /*long*/
                    // @ts-ignore
                    public getThisAccessedTime(sessionId: java.lang.String | string): string
                    // @ts-ignore
                    public getLastAccessedTimestamp(sessionId: java.lang.String | string): number /*long*/
                    // @ts-ignore
                    public getLastAccessedTime(sessionId: java.lang.String | string): string
                    // @ts-ignore
                    public getCreationTime(sessionId: java.lang.String | string): string
                    // @ts-ignore
                    public getCreationTimestamp(sessionId: java.lang.String | string): number /*long*/
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public getObjectNameKeyProperties(): string
                    // @ts-ignore
                    public getDomainInternal(): string
                }
            }
        }
    }
}
