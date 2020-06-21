declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Procattr
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Procattr extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Create and initialize a new procattr variable
                     * @param cont The pool to use
                     * @return The newly created procattr.
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static create(cont: number /*long*/): number /*long*/
                    /**
                     * Determine if any of stdin, stdout, or stderr should be linked to pipes
                     * when starting a child process.
                     * @param attr The procattr we care about.
                     * @param in Should stdin be a pipe back to the parent?
                     * @param out Should stdout be a pipe back to the parent?
                     * @param err Should stderr be a pipe back to the parent?
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static ioSet(attr: number /*long*/, input: number /*int*/, out: number /*int*/, err: number /*int*/): number /*int*/
                    /**
                     * Set the child_in and/or parent_in values to existing apr_file_t values.
                     * <br>
                     * This is NOT a required initializer function. This is
                     * useful if you have already opened a pipe (or multiple files)
                     * that you wish to use, perhaps persistently across multiple
                     * process invocations - such as a log file. You can save some
                     * extra function calls by not creating your own pipe since this
                     * creates one in the process space for you.
                     * @param attr The procattr we care about.
                     * @param in apr_file_t value to use as child_in. Must be a valid file.
                     * @param parent apr_file_t value to use as parent_in. Must be a valid file.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static childInSet(attr: number /*long*/, input: number /*long*/, parent: number /*long*/): number /*int*/
                    /**
                     * Set the child_out and parent_out values to existing apr_file_t values.
                     * <br>
                     * This is NOT a required initializer function. This is
                     * useful if you have already opened a pipe (or multiple files)
                     * that you wish to use, perhaps persistently across multiple
                     * process invocations - such as a log file.
                     * @param attr The procattr we care about.
                     * @param out apr_file_t value to use as child_out. Must be a valid file.
                     * @param parent apr_file_t value to use as parent_out. Must be a valid file.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static childOutSet(attr: number /*long*/, out: number /*long*/, parent: number /*long*/): number /*int*/
                    /**
                     * Set the child_err and parent_err values to existing apr_file_t values.
                     * <br>
                     * This is NOT a required initializer function. This is
                     * useful if you have already opened a pipe (or multiple files)
                     * that you wish to use, perhaps persistently across multiple
                     * process invocations - such as a log file.
                     * @param attr The procattr we care about.
                     * @param err apr_file_t value to use as child_err. Must be a valid file.
                     * @param parent apr_file_t value to use as parent_err. Must be a valid file.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static childErrSet(attr: number /*long*/, err: number /*long*/, parent: number /*long*/): number /*int*/
                    /**
                     * Set which directory the child process should start executing in.
                     * @param attr The procattr we care about.
                     * @param dir Which dir to start in.  By default, this is the same dir as
                     *             the parent currently resides in, when the createprocess call
                     *             is made.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static dirSet(attr: number /*long*/, dir: java.lang.String | string): number /*int*/
                    /**
                     * Set what type of command the child process will call.
                     * @param attr The procattr we care about.
                     * @param cmd The type of command.  One of:
                     *  <PRE>
                     *  APR_SHELLCMD     --  Anything that the shell can handle
                     *  APR_PROGRAM      --  Executable program   (default)
                     *  APR_PROGRAM_ENV  --  Executable program, copy environment
                     *  APR_PROGRAM_PATH --  Executable program on PATH, copy env
                     *  </PRE>
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static cmdtypeSet(attr: number /*long*/, cmd: number /*int*/): number /*int*/
                    /**
                     * Determine if the child should start in detached state.
                     * @param attr The procattr we care about.
                     * @param detach Should the child start in detached state?  Default is no.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static detachSet(attr: number /*long*/, detach: number /*int*/): number /*int*/
                    /**
                     * Specify that apr_proc_create() should do whatever it can to report
                     * failures to the caller of apr_proc_create(), rather than find out in
                     * the child.
                     * @param attr The procattr describing the child process to be created.
                     * @param chk Flag to indicate whether or not extra work should be done
                     *             to try to report failures to the caller.
                     *  <br>
                     *  This flag only affects apr_proc_create() on platforms where
                     *  fork() is used.  This leads to extra overhead in the calling
                     *  process, but that may help the application handle such
                     *  errors more gracefully.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static errorCheckSet(attr: number /*long*/, chk: number /*int*/): number /*int*/
                    /**
                     * Determine if the child should start in its own address space or using the
                     * current one from its parent
                     * @param attr The procattr we care about.
                     * @param addrspace Should the child start in its own address space?
                     *                   Default is yes.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static addrspaceSet(attr: number /*long*/, addrspace: number /*int*/): number /*int*/
                    /**
                     * Specify an error function to be called in the child process if APR
                     * encounters an error in the child prior to running the specified program.
                     * @param attr The procattr describing the child process to be created.
                     * @param pool The the pool to use.
                     * @param o The Object to call in the child process.
                     *  <br>
                     *  At the present time, it will only be called from apr_proc_create()
                     *  on platforms where fork() is used.  It will never be called on other
                     *  platforms, on those platforms apr_proc_create() will return the error
                     *  in the parent process rather than invoke the callback in the now-forked
                     *  child process.
                     */
                    // @ts-ignore
                    public static errfnSet(attr: number /*long*/, pool: number /*long*/, o: java.lang.Object | any): void
                    /**
                     * Set the username used for running process
                     * @param attr The procattr we care about.
                     * @param username The username used
                     * @param password User password if needed. Password is needed on WIN32
                     *                  or any other platform having
                     *                  APR_PROCATTR_USER_SET_REQUIRES_PASSWORD set.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static userSet(attr: number /*long*/, username: java.lang.String | string, password: java.lang.String | string): number /*int*/
                    /**
                     * Set the group used for running process
                     * @param attr The procattr we care about.
                     * @param groupname The group name  used
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static groupSet(attr: number /*long*/, groupname: java.lang.String | string): number /*int*/
                }
            }
        }
    }
}
