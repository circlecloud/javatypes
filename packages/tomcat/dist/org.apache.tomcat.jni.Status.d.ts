declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Status
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Status extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * APR_OS_START_ERROR is where the APR specific error values start.
                     */
                    // @ts-ignore
                    public static readonly APR_OS_START_ERROR: number /*int*/
                    /**
                     * APR_OS_ERRSPACE_SIZE is the maximum number of errors you can fit
                     * into one of the error/status ranges below -- except for
                     * APR_OS_START_USERERR, which see.
                     */
                    // @ts-ignore
                    public static readonly APR_OS_ERRSPACE_SIZE: number /*int*/
                    /**
                     * APR_OS_START_STATUS is where the APR specific status codes start.
                     */
                    // @ts-ignore
                    public static readonly APR_OS_START_STATUS: number /*int*/
                    /**
                     * APR_OS_START_USERERR are reserved for applications that use APR that
                     * layer their own error codes along with APR's.  Note that the
                     * error immediately following this one is set ten times farther
                     * away than usual, so that users of apr have a lot of room in
                     * which to declare custom error codes.
                     */
                    // @ts-ignore
                    public static readonly APR_OS_START_USERERR: number /*int*/
                    /**
                     * APR_OS_START_USEERR is obsolete, defined for compatibility only.
                     * Use APR_OS_START_USERERR instead.
                     */
                    // @ts-ignore
                    public static readonly APR_OS_START_USEERR: number /*int*/
                    /**
                     * APR_OS_START_CANONERR is where APR versions of errno values are defined
                     * on systems which don't have the corresponding errno.
                     */
                    // @ts-ignore
                    public static readonly APR_OS_START_CANONERR: number /*int*/
                    /**
                     * APR_OS_START_EAIERR folds EAI_ error codes from getaddrinfo() into
                     * apr_status_t values.
                     */
                    // @ts-ignore
                    public static readonly APR_OS_START_EAIERR: number /*int*/
                    /**
                     * APR_OS_START_SYSERR folds platform-specific system error values into
                     * apr_status_t values.
                     */
                    // @ts-ignore
                    public static readonly APR_OS_START_SYSERR: number /*int*/
                    /**
                     * no error.
                     */
                    // @ts-ignore
                    public static readonly APR_SUCCESS: number /*int*/
                    /**
                     * APR Error Values
                     * <PRE>
                     * <b>APR ERROR VALUES</b>
                     * APR_ENOSTAT      APR was unable to perform a stat on the file
                     * APR_ENOPOOL      APR was not provided a pool with which to allocate memory
                     * APR_EBADDATE     APR was given an invalid date
                     * APR_EINVALSOCK   APR was given an invalid socket
                     * APR_ENOPROC      APR was not given a process structure
                     * APR_ENOTIME      APR was not given a time structure
                     * APR_ENODIR       APR was not given a directory structure
                     * APR_ENOLOCK      APR was not given a lock structure
                     * APR_ENOPOLL      APR was not given a poll structure
                     * APR_ENOSOCKET    APR was not given a socket
                     * APR_ENOTHREAD    APR was not given a thread structure
                     * APR_ENOTHDKEY    APR was not given a thread key structure
                     * APR_ENOSHMAVAIL  There is no more shared memory available
                     * APR_EDSOOPEN     APR was unable to open the dso object.  For more
                     * information call apr_dso_error().
                     * APR_EGENERAL     General failure (specific information not available)
                     * APR_EBADIP       The specified IP address is invalid
                     * APR_EBADMASK     The specified netmask is invalid
                     * APR_ESYMNOTFOUND Could not find the requested symbol
                     * </PRE>
                     */
                    // @ts-ignore
                    public static readonly APR_ENOSTAT: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENOPOOL: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EBADDATE: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EINVALSOCK: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENOPROC: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENOTIME: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENODIR: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENOLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENOPOLL: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENOSOCKET: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENOTHREAD: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENOTHDKEY: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EGENERAL: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENOSHMAVAIL: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EBADIP: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EBADMASK: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EDSOOPEN: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EABSOLUTE: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ERELATIVE: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EINCOMPLETE: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EABOVEROOT: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EBADPATH: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EPATHWILD: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ESYMNOTFOUND: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EPROC_UNKNOWN: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENOTENOUGHENTROPY: number /*int*/
                    /**
                     * APR Status Values
                     * <PRE>
                     * <b>APR STATUS VALUES</b>
                     * APR_INCHILD        Program is currently executing in the child
                     * APR_INPARENT       Program is currently executing in the parent
                     * APR_DETACH         The thread is detached
                     * APR_NOTDETACH      The thread is not detached
                     * APR_CHILD_DONE     The child has finished executing
                     * APR_CHILD_NOTDONE  The child has not finished executing
                     * APR_TIMEUP         The operation did not finish before the timeout
                     * APR_INCOMPLETE     The operation was incomplete although some processing
                     * was performed and the results are partially valid
                     * APR_BADCH          Getopt found an option not in the option string
                     * APR_BADARG         Getopt found an option that is missing an argument
                     * and an argument was specified in the option string
                     * APR_EOF            APR has encountered the end of the file
                     * APR_NOTFOUND       APR was unable to find the socket in the poll structure
                     * APR_ANONYMOUS      APR is using anonymous shared memory
                     * APR_FILEBASED      APR is using a file name as the key to the shared memory
                     * APR_KEYBASED       APR is using a shared key as the key to the shared memory
                     * APR_EINIT          Initializer value.  If no option has been found, but
                     * the status variable requires a value, this should be used
                     * APR_ENOTIMPL       The APR function has not been implemented on this
                     * platform, either because nobody has gotten to it yet,
                     * or the function is impossible on this platform.
                     * APR_EMISMATCH      Two passwords do not match.
                     * APR_EBUSY          The given lock was busy.
                     * </PRE>
                     */
                    // @ts-ignore
                    public static readonly APR_INCHILD: number /*int*/
                    // @ts-ignore
                    public static readonly APR_INPARENT: number /*int*/
                    // @ts-ignore
                    public static readonly APR_DETACH: number /*int*/
                    // @ts-ignore
                    public static readonly APR_NOTDETACH: number /*int*/
                    // @ts-ignore
                    public static readonly APR_CHILD_DONE: number /*int*/
                    // @ts-ignore
                    public static readonly APR_CHILD_NOTDONE: number /*int*/
                    // @ts-ignore
                    public static readonly APR_TIMEUP: number /*int*/
                    // @ts-ignore
                    public static readonly APR_INCOMPLETE: number /*int*/
                    // @ts-ignore
                    public static readonly APR_BADCH: number /*int*/
                    // @ts-ignore
                    public static readonly APR_BADARG: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EOF: number /*int*/
                    // @ts-ignore
                    public static readonly APR_NOTFOUND: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ANONYMOUS: number /*int*/
                    // @ts-ignore
                    public static readonly APR_FILEBASED: number /*int*/
                    // @ts-ignore
                    public static readonly APR_KEYBASED: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EINIT: number /*int*/
                    // @ts-ignore
                    public static readonly APR_ENOTIMPL: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EMISMATCH: number /*int*/
                    // @ts-ignore
                    public static readonly APR_EBUSY: number /*int*/
                    // @ts-ignore
                    public static readonly TIMEUP: number /*int*/
                    // @ts-ignore
                    public static readonly EAGAIN: number /*int*/
                    // @ts-ignore
                    public static readonly EINTR: number /*int*/
                    // @ts-ignore
                    public static readonly EINPROGRESS: number /*int*/
                    // @ts-ignore
                    public static readonly ETIMEDOUT: number /*int*/
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOSTAT(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOPOOL(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EBADDATE(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EINVALSOCK(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOPROC(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOTIME(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENODIR(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOLOCK(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOPOLL(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOSOCKET(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOTHREAD(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOTHDKEY(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EGENERAL(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOSHMAVAIL(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EBADIP(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EBADMASK(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EDSOPEN(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EABSOLUTE(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ERELATIVE(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EINCOMPLETE(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EABOVEROOT(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EBADPATH(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EPATHWILD(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ESYMNOTFOUND(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EPROC_UNKNOWN(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOTENOUGHENTROPY(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_INCHILD(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_INPARENT(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_DETACH(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_NOTDETACH(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_CHILD_DONE(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_CHILD_NOTDONE(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_TIMEUP(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_INCOMPLETE(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_BADCH(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_BADARG(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EOF(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_NOTFOUND(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ANONYMOUS(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_FILEBASED(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_KEYBASED(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EINIT(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOTIMPL(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EMISMATCH(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EBUSY(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EAGAIN(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ETIMEDOUT(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ECONNABORTED(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ECONNRESET(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EINPROGRESS(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EINTR(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_ENOTSOCK(s: number /*int*/): boolean
                    // @ts-ignore
                    public static APR_STATUS_IS_EINVAL(s: number /*int*/): boolean
                }
            }
        }
    }
}
