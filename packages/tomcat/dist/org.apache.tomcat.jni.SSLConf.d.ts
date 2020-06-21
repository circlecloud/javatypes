declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * SSL Conf
                 */
                // @ts-ignore
                class SSLConf extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new SSL_CONF context.
                     * @param pool The pool to use.
                     * @param flags The SSL_CONF flags to use. It can be any combination of
                     *  the following:
                     *  <PRE>
                     *  {#link SSL#SSL_CONF_FLAG_CMDLINE}
                     *  {@link SSL#SSL_CONF_FLAG_FILE}
                     *  {@link SSL#SSL_CONF_FLAG_CLIENT}
                     *  {@link SSL#SSL_CONF_FLAG_SERVER}
                     *  {@link SSL#SSL_CONF_FLAG_SHOW_ERRORS}
                     *  {@link SSL#SSL_CONF_FLAG_CERTIFICATE}
                     *  </PRE>
                     * @return The Java representation of a pointer to the newly created
                     *          SSL_CONF Context
                     * @throws Exception If the SSL_CONF context could not be created
                     * @see <a href="https://www.openssl.org/docs/man1.0.2/ssl/SSL_CONF_CTX_new.html">OpenSSL SSL_CONF_CTX_new</a>
                     * @see <a href="https://www.openssl.org/docs/man1.0.2/ssl/SSL_CONF_CTX_set_flags.html">OpenSSL SSL_CONF_CTX_set_flags</a>
                     */
                    // @ts-ignore
                    public static make(pool: number /*long*/, flags: number /*int*/): number /*long*/
                    /**
                     * Free the resources used by the context
                     * @param cctx SSL_CONF context to free.
                     * @see <a href="https://www.openssl.org/docs/man1.0.2/ssl/SSL_CONF_CTX_new.html">OpenSSL SSL_CONF_CTX_free</a>
                     */
                    // @ts-ignore
                    public static free(cctx: number /*long*/): void
                    /**
                     * Check a command with an SSL_CONF context.
                     * @param cctx SSL_CONF context to use.
                     * @param name command name.
                     * @param value command value.
                     * @return The result of the check based on the {#code SSL_CONF_cmd_value_type}
                     *  call. Unknown types will result in an exception, as well as
                     *  file and directory types with invalid file or directory names.
                     * @throws Exception If the check fails.
                     * @see <a href="https://www.openssl.org/docs/man1.0.2/ssl/SSL_CONF_cmd.html">OpenSSL SSL_CONF_cmd_value_type</a>
                     */
                    // @ts-ignore
                    public static check(cctx: number /*long*/, name: java.lang.String | string, value: java.lang.String | string): number /*int*/
                    /**
                     * Assign an SSL context to a SSL_CONF context.
                     * All following calls to {@link #apply(long, String, String)} will be
                     * applied to this SSL context.
                     * @param cctx SSL_CONF context to use.
                     * @param ctx SSL context to assign to the given SSL_CONF context.
                     * @see <a href="https://www.openssl.org/docs/man1.0.2/ssl/SSL_CONF_CTX_set_ssl_ctx.html">OpenSSL SSL_CONF_CTX_set_ssl_ctx</a>
                     */
                    // @ts-ignore
                    public static assign(cctx: number /*long*/, ctx: number /*long*/): void
                    /**
                     * Apply a command to an SSL_CONF context.
                     * @param cctx SSL_CONF context to use.
                     * @param name command name.
                     * @param value command value.
                     * @return The result of the native {#code SSL_CONF_cmd} call
                     * @throws Exception If the SSL_CONF context is {#code 0}
                     * @see <a href="https://www.openssl.org/docs/man1.0.2/ssl/SSL_CONF_cmd.html">OpenSSL SSL_CONF_cmd</a>
                     */
                    // @ts-ignore
                    public static apply(cctx: number /*long*/, name: java.lang.String | string, value: java.lang.String | string): number /*int*/
                    /**
                     * Finish commands for an SSL_CONF context.
                     * @param cctx SSL_CONF context to use.
                     * @return The result of the native {#code SSL_CONF_CTX_finish} call
                     * @see <a href="https://www.openssl.org/docs/man1.0.2/ssl/SSL_CONF_CTX_set_flags.html">OpenSSL SSL_CONF_CTX_finish</a>
                     */
                    // @ts-ignore
                    public static finish(cctx: number /*long*/): number /*int*/
                }
            }
        }
    }
}
