declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * User
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class User extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Get the userid (and groupid) of the calling process
                     * This function is available only if APR_HAS_USER is defined.
                     * @param p The pool from which to allocate working space
                     * @return Returns the user id
                     * @throws Error If an error occurred
                     */
                    // @ts-ignore
                    public static uidCurrent(p: number /*long*/): number /*long*/
                    /**
                     * Get the groupid of the calling process
                     * This function is available only if APR_HAS_USER is defined.
                     * @param p The pool from which to allocate working space
                     * @return Returns the group id
                     * @throws Error If an error occurred
                     */
                    // @ts-ignore
                    public static gidCurrent(p: number /*long*/): number /*long*/
                    /**
                     * Get the userid for the specified username
                     * This function is available only if APR_HAS_USER is defined.
                     * @param username The username to lookup
                     * @param p The pool from which to allocate working space
                     * @return Returns the user id
                     * @throws Error If an error occurred
                     */
                    // @ts-ignore
                    public static uid(username: java.lang.String | string, p: number /*long*/): number /*long*/
                    /**
                     * Get the groupid for the specified username
                     * This function is available only if APR_HAS_USER is defined.
                     * @param username The username to lookup
                     * @param p The pool from which to allocate working space
                     * @return Returns the user's group id
                     * @throws Error If an error occurred
                     */
                    // @ts-ignore
                    public static usergid(username: java.lang.String | string, p: number /*long*/): number /*long*/
                    /**
                     * Get the groupid for a specified group name
                     * This function is available only if APR_HAS_USER is defined.
                     * @param groupname The group name to look up
                     * @param p The pool from which to allocate working space
                     * @return Returns the user's group id
                     * @throws Error If an error occurred
                     */
                    // @ts-ignore
                    public static gid(groupname: java.lang.String | string, p: number /*long*/): number /*long*/
                    /**
                     * Get the user name for a specified userid
                     * This function is available only if APR_HAS_USER is defined.
                     * @param userid The userid
                     * @param p The pool from which to allocate the string
                     * @return New string containing user name
                     * @throws Error If an error occurred
                     */
                    // @ts-ignore
                    public static username(userid: number /*long*/, p: number /*long*/): string
                    /**
                     * Get the group name for a specified groupid
                     * This function is available only if APR_HAS_USER is defined.
                     * @param groupid The groupid
                     * @param p The pool from which to allocate the string
                     * @return New string containing group name
                     * @throws Error If an error occurred
                     */
                    // @ts-ignore
                    public static groupname(groupid: number /*long*/, p: number /*long*/): string
                    /**
                     * Compare two user identifiers for equality.
                     * This function is available only if APR_HAS_USER is defined.
                     * @param left One uid to test
                     * @param right Another uid to test
                     * @return APR_SUCCESS if the apr_uid_t structures identify the same user,
                     *  APR_EMISMATCH if not, APR_BADARG if an apr_uid_t is invalid.
                     */
                    // @ts-ignore
                    public static uidcompare(left: number /*long*/, right: number /*long*/): number /*int*/
                    /**
                     * Compare two group identifiers for equality.
                     * This function is available only if APR_HAS_USER is defined.
                     * @param left One gid to test
                     * @param right Another gid to test
                     * @return APR_SUCCESS if the apr_gid_t structures identify the same group,
                     *  APR_EMISMATCH if not, APR_BADARG if an apr_gid_t is invalid.
                     */
                    // @ts-ignore
                    public static gidcompare(left: number /*long*/, right: number /*long*/): number /*int*/
                    /**
                     * Get the home directory for the named user
                     * This function is available only if APR_HAS_USER is defined.
                     * @param username The named user
                     * @param p The pool from which to allocate the string
                     * @return New string containing directory name
                     * @throws Error If an error occurred
                     */
                    // @ts-ignore
                    public static homepath(username: java.lang.String | string, p: number /*long*/): string
                }
            }
        }
    }
}
