declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Proc
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Proc extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly APR_SHELLCM: number /*int*/
                    /**
                     * use the shell to invoke the program
                     */
                    // @ts-ignore
                    public static readonly APR_PROGRAM: number /*int*/
                    /**
                     * invoke the program directly, no copied env
                     */
                    // @ts-ignore
                    public static readonly APR_PROGRAM_ENV: number /*int*/
                    /**
                     * invoke the program, replicating our environment
                     */
                    // @ts-ignore
                    public static readonly APR_PROGRAM_PATH: number /*int*/
                    /**
                     * find program on PATH, use our environment
                     */
                    // @ts-ignore
                    public static readonly APR_SHELLCMD_ENV: number /*int*/
                    /**
                     * use the shell to invoke the program,
                     * replicating our environment
                     */
                    // @ts-ignore
                    public static readonly APR_WAIT: number /*int*/
                    /**
                     * wait for the specified process to finish
                     */
                    // @ts-ignore
                    public static readonly APR_NOWAIT: number /*int*/
                    /**
                     * do not wait -- just see if it has finished
                     */
                    // @ts-ignore
                    public static readonly APR_PROC_EXIT: number /*int*/
                    /**
                     * process exited normally
                     */
                    // @ts-ignore
                    public static readonly APR_PROC_SIGNAL: number /*int*/
                    /**
                     * process exited due to a signal
                     */
                    // @ts-ignore
                    public static readonly APR_PROC_SIGNAL_CORE: number /*int*/
                    /**
                     * process exited and dumped a core file
                     */
                    // @ts-ignore
                    public static readonly APR_NO_PIPE: number /*int*/
                    // @ts-ignore
                    public static readonly APR_FULL_BLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly APR_FULL_NONBLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly APR_PARENT_BLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly APR_CHILD_BLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly APR_LIMIT_CPU: number /*int*/
                    // @ts-ignore
                    public static readonly APR_LIMIT_MEM: number /*int*/
                    // @ts-ignore
                    public static readonly APR_LIMIT_NPROC: number /*int*/
                    // @ts-ignore
                    public static readonly APR_LIMIT_NOFILE: number /*int*/
                    /**
                     * child has died, caller must call unregister still
                     */
                    // @ts-ignore
                    public static readonly APR_OC_REASON_DEATH: number /*int*/
                    /**
                     * write_fd is unwritable
                     */
                    // @ts-ignore
                    public static readonly APR_OC_REASON_UNWRITABLE: number /*int*/
                    /**
                     * a restart is occurring, perform any necessary cleanup (including
                     * sending a special signal to child)
                     */
                    // @ts-ignore
                    public static readonly APR_OC_REASON_RESTART: number /*int*/
                    /**
                     * unregister has been called, do whatever is necessary (including
                     * kill the child)
                     */
                    // @ts-ignore
                    public static readonly APR_OC_REASON_UNREGISTER: number /*int*/
                    /**
                     * somehow the child exited without us knowing ... buggy os?
                     */
                    // @ts-ignore
                    public static readonly APR_OC_REASON_LOST: number /*int*/
                    /**
                     * a health check is occurring, for most maintenance functions
                     * this is a no-op.
                     */
                    // @ts-ignore
                    public static readonly APR_OC_REASON_RUNNING: number /*int*/
                    /**
                     * process is never sent any signals
                     */
                    // @ts-ignore
                    public static readonly APR_KILL_NEVER: number /*int*/
                    /**
                     * process is sent SIGKILL on apr_pool_t cleanup
                     */
                    // @ts-ignore
                    public static readonly APR_KILL_ALWAYS: number /*int*/
                    /**
                     * SIGTERM, wait 3 seconds, SIGKILL
                     */
                    // @ts-ignore
                    public static readonly APR_KILL_AFTER_TIMEOUT: number /*int*/
                    /**
                     * wait forever for the process to complete
                     */
                    // @ts-ignore
                    public static readonly APR_JUST_WAIT: number /*int*/
                    /**
                     * send SIGTERM and then wait
                     */
                    // @ts-ignore
                    public static readonly APR_KILL_ONLY_ONCE: number /*int*/
                    // @ts-ignore
                    public static readonly APR_PROC_DETACH_FOREGROUND: number /*int*/
                    /**
                     * Do not detach
                     */
                    // @ts-ignore
                    public static readonly APR_PROC_DETACH_DAEMONIZE: number /*int*/
                    /**
                     * Detach
                     */
                    // @ts-ignore
                    public static readonly MAX_ARGS_SIZE: number /*int*/
                    // @ts-ignore
                    public static readonly MAX_ENV_SIZE: number /*int*/
                    /**
                     * Allocate apr_proc_t structure from pool
                     * This is not an apr function.
                     * @param cont The pool to use.
                     * @return the pointer
                     */
                    // @ts-ignore
                    public static alloc(cont: number /*long*/): number /*long*/
                    /**
                     * This is currently the only non-portable call in APR.  This executes
                     * a standard unix fork.
                     * @param proc The resulting process handle.
                     * @param cont The pool to use.
                     * @return APR_INCHILD for the child, and APR_INPARENT for the parent
                     *  or an error.
                     */
                    // @ts-ignore
                    public static fork(proc: number /*long*/[], cont: number /*long*/): number /*int*/
                    /**
                     * Create a new process and execute a new program within that process.
                     * This function returns without waiting for the new process to terminate;
                     * use apr_proc_wait for that.
                     * @param proc The process handle
                     * @param progname The program to run
                     * @param args The arguments to pass to the new program.  The first
                     *              one should be the program name.
                     * @param env The new environment table for the new process.  This
                     *             should be a list of NULL-terminated strings. This argument
                     *             is ignored for APR_PROGRAM_ENV, APR_PROGRAM_PATH, and
                     *             APR_SHELLCMD_ENV types of commands.
                     * @param attr The procattr we should use to determine how to create the new
                     *  process
                     * @param pool The pool to use.
                     * @return The resulting process handle.
                     */
                    // @ts-ignore
                    public static create(proc: number /*long*/, progname: java.lang.String | string, args: java.lang.String[] | string[], env: java.lang.String[] | string[], attr: number /*long*/, pool: number /*long*/): number /*int*/
                    /**
                     * Wait for a child process to die
                     * @param proc The process handle that corresponds to the desired child process
                     * @param exit exit[0] The returned exit status of the child, if a child process
                     *                 dies, or the signal that caused the child to die.
                     *                 On platforms that don't support obtaining this information,
                     *                 the status parameter will be returned as APR_ENOTIMPL.
                     *  exit[1] Why the child died, the bitwise or of:
                     *  <PRE>
                     *  APR_PROC_EXIT         -- process terminated normally
                     *  APR_PROC_SIGNAL       -- process was killed by a signal
                     *  APR_PROC_SIGNAL_CORE  -- process was killed by a signal, and
                     *                           generated a core dump.
                     *  </PRE>
                     * @param waithow How should we wait.  One of:
                     *  <PRE>
                     *  APR_WAIT   -- block until the child process dies.
                     *  APR_NOWAIT -- return immediately regardless of if the
                     *                child is dead or not.
                     *  </PRE>
                     * @return The childs status is in the return code to this process.  It is one of:
                     *  <PRE>
                     *  APR_CHILD_DONE     -- child is no longer running.
                     *  APR_CHILD_NOTDONE  -- child is still running.
                     *  </PRE>
                     */
                    // @ts-ignore
                    public static wait(proc: number /*long*/, exit: number /*int*/[], waithow: number /*int*/): number /*int*/
                    /**
                     * Wait for any current child process to die and return information
                     * about that child.
                     * @param proc Pointer to NULL on entry, will be filled out with child's
                     *              information
                     * @param exit exit[0] The returned exit status of the child, if a child process
                     *                 dies, or the signal that caused the child to die.
                     *                 On platforms that don't support obtaining this information,
                     *                 the status parameter will be returned as APR_ENOTIMPL.
                     *  exit[1] Why the child died, the bitwise or of:
                     *  <PRE>
                     *  APR_PROC_EXIT         -- process terminated normally
                     *  APR_PROC_SIGNAL       -- process was killed by a signal
                     *  APR_PROC_SIGNAL_CORE  -- process was killed by a signal, and
                     *                           generated a core dump.
                     *  </PRE>
                     * @param waithow How should we wait.  One of:
                     *  <PRE>
                     *  APR_WAIT   -- block until the child process dies.
                     *  APR_NOWAIT -- return immediately regardless of if the
                     *                child is dead or not.
                     *  </PRE>
                     * @param pool Pool to allocate child information out of.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static waitAllProcs(proc: number /*long*/, exit: number /*int*/[], waithow: number /*int*/, pool: number /*long*/): number /*int*/
                    /**
                     * Detach the process from the controlling terminal.
                     * @param daemonize set to non-zero if the process should daemonize
                     *                   and become a background process, else it will
                     *                   stay in the foreground.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static detach(daemonize: number /*int*/): number /*int*/
                    /**
                     * Terminate a process.
                     * @param proc The process to terminate.
                     * @param sig How to kill the process.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static kill(proc: number /*long*/, sig: number /*int*/): number /*int*/
                }
            }
        }
    }
}
