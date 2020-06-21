declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Error
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Error extends java.lang.Exception {
                    /**
                     * Get the APR error code of the exception.
                     * @return error of the Exception
                     */
                    // @ts-ignore
                    getError(): number /*int*/
                    /**
                     * Get the APR description of the exception.
                     * @return description of the Exception
                     */
                    // @ts-ignore
                    getDescription(): string
                    /**
                     * Get the last platform error.
                     * @return apr_status_t the last platform error, folded into apr_status_t, on most platforms
                     *  This retrieves errno, or calls a GetLastError() style function, and
                     *       folds it with APR_FROM_OS_ERROR.  Some platforms (such as OS2) have no
                     *       such mechanism, so this call may be unsupported.  Do NOT use this
                     *       call for socket errors from socket, send, recv etc!
                     */
                    // @ts-ignore
                    osError(): number /*int*/
                    /**
                     * Get the last platform socket error.
                     * @return the last socket error, folded into apr_status_t, on all platforms
                     *  This retrieves errno or calls a GetLastSocketError() style function,
                     *       and folds it with APR_FROM_OS_ERROR.
                     */
                    // @ts-ignore
                    netosError(): number /*int*/
                    /**
                     * Return a human readable string describing the specified error.
                     * @param statcode The error code the get a string for.
                     * @return The error string.
                     */
                    // @ts-ignore
                    strerror(statcode: number /*int*/): string
                }
            }
        }
    }
}
