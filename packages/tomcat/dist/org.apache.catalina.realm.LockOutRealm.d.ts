declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * This class extends the CombinedRealm (hence it can wrap other Realms) to
                 * provide a user lock out mechanism if there are too many failed
                 * authentication attempts in a given period of time. To ensure correct
                 * operation, there is a reasonable degree of synchronisation in this Realm.
                 * This Realm does not require modification to the underlying Realms or the
                 * associated user storage mechanisms. It achieves this by recording all failed
                 * logins, including those for users that do not exist. To prevent a DOS by
                 * deliberating making requests with invalid users (and hence causing this cache
                 * to grow) the size of the list of users that have failed authentication is
                 * limited.
                 */
                // @ts-ignore
                class LockOutRealm extends org.apache.catalina.realm.CombinedRealm {
                    // @ts-ignore
                    constructor()
                    /**
                     * The number of times in a row a user has to fail authentication to be
                     * locked out. Defaults to 5.
                     */
                    // @ts-ignore
                    failureCount: number /*int*/
                    /**
                     * The time (in seconds) a user is locked out for after too many
                     * authentication failures. Defaults to 300 (5 minutes).
                     */
                    // @ts-ignore
                    lockOutTime: number /*int*/
                    /**
                     * Number of users that have failed authentication to keep in cache. Over
                     * time the cache will grow to this size and may not shrink. Defaults to
                     * 1000.
                     */
                    // @ts-ignore
                    cacheSize: number /*int*/
                    /**
                     * If a failed user is removed from the cache because the cache is too big
                     * before it has been in the cache for at least this period of time (in
                     * seconds) a warning message will be logged. Defaults to 3600 (1 hour).
                     */
                    // @ts-ignore
                    cacheRemovalWarningTime: number /*int*/
                    /**
                     * Users whose last authentication attempt failed. Entries will be ordered
                     * in access order from least recent to most recent.
                     */
                    // @ts-ignore
                    failedUsers: java.util.Map<java.lang.String | string, org.apache.catalina.realm.LockOutRealm.LockRecord>
                    /**
                     * Prepare for the beginning of active use of the public methods of this
                     * component and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Return the Principal associated with the specified username, which
                     * matches the digest calculated using the given parameters using the
                     * method described in RFC 2069; otherwise return <code>null</code>.
                     * @param username Username of the Principal to look up
                     * @param clientDigest Digest which has been submitted by the client
                     * @param nonce Unique (or supposedly unique) token which has been used
                     *  for this request
                     * @param realmName Realm name
                     * @param md5a2 Second MD5 digest used to calculate the digest :
                     *  MD5(Method + ":" + uri)
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string, clientDigest: java.lang.String | string, nonce: java.lang.String | string, nc: java.lang.String | string, cnonce: java.lang.String | string, qop: java.lang.String | string, realmName: java.lang.String | string, md5a2: java.lang.String | string): java.security.Principal
                    /**
                     * Return the Principal associated with the specified username and
                     * credentials, if there is one; otherwise return <code>null</code>.
                     * @param username Username of the Principal to look up
                     * @param credentials Password or other credentials to use in
                     *   authenticating this username
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string, credentials: java.lang.String | string): java.security.Principal
                    /**
                     * Return the Principal associated with the specified chain of X509
                     * client certificates.  If there is none, return <code>null</code>.
                     * @param certs Array of client certificates, with the first one in
                     *   the array being the certificate of the client itself.
                     */
                    // @ts-ignore
                    public authenticate(certs: java.security.cert.X509Certificate[]): java.security.Principal
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public authenticate(gssContext: org.ietf.jgss.GSSContext, storeCreds: boolean): java.security.Principal
                    /**
                     * Unlock the specified username. This will remove all records of
                     * authentication failures for this user.
                     * @param username The user to unlock
                     */
                    // @ts-ignore
                    public unlock(username: java.lang.String | string): void
                    // @ts-ignore
                    public isLocked(username: java.lang.String | string): boolean
                    /**
                     * Get the number of failed authentication attempts required to lock the
                     * user account.
                     * @return the failureCount
                     */
                    // @ts-ignore
                    public getFailureCount(): number /*int*/
                    /**
                     * Set the number of failed authentication attempts required to lock the
                     * user account.
                     * @param failureCount the failureCount to set
                     */
                    // @ts-ignore
                    public setFailureCount(failureCount: number /*int*/): void
                    /**
                     * Get the period for which an account will be locked.
                     * @return the lockOutTime
                     */
                    // @ts-ignore
                    public getLockOutTime(): number /*int*/
                    /**
                     * Set the period for which an account will be locked.
                     * @param lockOutTime the lockOutTime to set
                     */
                    // @ts-ignore
                    public setLockOutTime(lockOutTime: number /*int*/): void
                    /**
                     * Get the maximum number of users for which authentication failure will be
                     * kept in the cache.
                     * @return the cacheSize
                     */
                    // @ts-ignore
                    public getCacheSize(): number /*int*/
                    /**
                     * Set the maximum number of users for which authentication failure will be
                     * kept in the cache.
                     * @param cacheSize the cacheSize to set
                     */
                    // @ts-ignore
                    public setCacheSize(cacheSize: number /*int*/): void
                    /**
                     * Get the minimum period a failed authentication must remain in the cache
                     * to avoid generating a warning if it is removed from the cache to make
                     * space for a new entry.
                     * @return the cacheRemovalWarningTime
                     */
                    // @ts-ignore
                    public getCacheRemovalWarningTime(): number /*int*/
                    /**
                     * Set the minimum period a failed authentication must remain in the cache
                     * to avoid generating a warning if it is removed from the cache to make
                     * space for a new entry.
                     * @param cacheRemovalWarningTime the cacheRemovalWarningTime to set
                     */
                    // @ts-ignore
                    public setCacheRemovalWarningTime(cacheRemovalWarningTime: number /*int*/): void
                }
            }
        }
    }
}
