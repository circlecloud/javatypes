declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * SSL
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class SSL extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly UNSET: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ALGO_UNKNOWN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ALGO_RSA: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ALGO_DSA: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ALGO_ALL: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_AIDX_RSA: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_AIDX_DSA: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_AIDX_ECC: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_AIDX_MAX: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_TMP_KEY_RSA_512: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_TMP_KEY_RSA_1024: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_TMP_KEY_RSA_2048: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_TMP_KEY_RSA_4096: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_TMP_KEY_DH_512: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_TMP_KEY_DH_1024: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_TMP_KEY_DH_2048: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_TMP_KEY_DH_4096: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_TMP_KEY_MAX: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OPT_NONE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OPT_RELSET: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OPT_STDENVVARS: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OPT_EXPORTCERTDATA: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OPT_FAKEBASICAUTH: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OPT_STRICTREQUIRE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OPT_OPTRENEGOTIATE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OPT_ALL: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_PROTOCOL_NONE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_PROTOCOL_SSLV2: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_PROTOCOL_SSLV3: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_PROTOCOL_TLSV1: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_PROTOCOL_TLSV1_1: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_PROTOCOL_TLSV1_2: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_PROTOCOL_TLSV1_3: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_PROTOCOL_ALL: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CVERIFY_UNSET: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CVERIFY_NONE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CVERIFY_OPTIONAL: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CVERIFY_REQUIRE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CVERIFY_OPTIONAL_NO_CA: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_VERIFY_NONE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_VERIFY_PEER: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_VERIFY_FAIL_IF_NO_PEER_CERT: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_VERIFY_CLIENT_ONCE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_VERIFY_PEER_STRICT: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_MICROSOFT_SESS_ID_BUG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NETSCAPE_CHALLENGE_BUG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_MSIE_SSLV2_RSA_PADDING: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_TLS_D5_BUG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_TLS_BLOCK_PADDING_BUG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_ALL: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NO_COMPRESSION: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_SINGLE_ECDH_USE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_SINGLE_DH_USE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_EPHEMERAL_RSA: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_CIPHER_SERVER_PREFERENCE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_TLS_ROLLBACK_BUG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NO_SSLv2: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NO_SSLv3: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NO_TLSv1: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NO_TLSv1_2: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NO_TLSv1_1: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NO_TICKET: number /*int*/
                    /**
                     * @deprecated Unsupported in the current version of OpenSSL
                     */
                    // @ts-ignore
                    public static readonly SSL_OP_PKCS1_CHECK_1: number /*int*/
                    /**
                     * @deprecated Unsupported in the current version of OpenSSL
                     */
                    // @ts-ignore
                    public static readonly SSL_OP_PKCS1_CHECK_2: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NETSCAPE_CA_DN_BUG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CRT_FORMAT_UNDEF: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CRT_FORMAT_ASN1: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CRT_FORMAT_TEXT: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CRT_FORMAT_PEM: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CRT_FORMAT_NETSCAPE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CRT_FORMAT_PKCS12: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CRT_FORMAT_SMIME: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CRT_FORMAT_ENGINE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_MODE_CLIENT: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_MODE_SERVER: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_MODE_COMBINED: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CONF_FLAG_CMDLINE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CONF_FLAG_FILE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CONF_FLAG_CLIENT: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CONF_FLAG_SERVER: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CONF_FLAG_SHOW_ERRORS: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CONF_FLAG_CERTIFICATE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CONF_TYPE_UNKNOWN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CONF_TYPE_STRING: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CONF_TYPE_FILE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_CONF_TYPE_DIR: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_SHUTDOWN_TYPE_UNSET: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_SHUTDOWN_TYPE_STANDARD: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_SHUTDOWN_TYPE_UNCLEAN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_SHUTDOWN_TYPE_ACCURATE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_SESSION_ID: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CIPHER: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CIPHER_USEKEYSIZE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CIPHER_ALGKEYSIZE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CIPHER_VERSION: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CIPHER_DESCRIPTION: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_PROTOCOL: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CLIENT_S_DN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CLIENT_I_DN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_SERVER_S_DN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_SERVER_I_DN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_COUNTRYNAME: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_STATEORPROVINCENAME: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_LOCALITYNAME: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_ORGANIZATIONNAME: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_ORGANIZATIONALUNITNAME: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_COMMONNAME: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_TITLE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_INITIALS: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_GIVENNAME: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_SURNAME: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_DESCRIPTION: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_UNIQUEIDENTIFIER: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_DN_EMAILADDRESS: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CLIENT_M_VERSION: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CLIENT_M_SERIAL: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CLIENT_V_START: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CLIENT_V_END: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CLIENT_A_SIG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CLIENT_A_KEY: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CLIENT_CERT: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CLIENT_V_REMAIN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_SERVER_M_VERSION: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_SERVER_M_SERIAL: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_SERVER_V_START: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_SERVER_V_END: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_SERVER_A_SIG: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_SERVER_A_KEY: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_SERVER_CERT: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_INFO_CLIENT_CERT_CHAIN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_SESS_CACHE_OFF: number /*long*/
                    // @ts-ignore
                    public static readonly SSL_SESS_CACHE_SERVER: number /*long*/
                    // @ts-ignore
                    public static readonly SSL_SELECTOR_FAILURE_NO_ADVERTISE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_SELECTOR_FAILURE_CHOOSE_MY_LAST_PROTOCOL: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_SENT_SHUTDOWN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_RECEIVED_SHUTDOWN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ERROR_NONE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ERROR_SSL: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ERROR_WANT_READ: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ERROR_WANT_WRITE: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ERROR_WANT_X509_LOOKUP: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ERROR_SYSCALL: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ERROR_ZERO_RETURN: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ERROR_WANT_CONNECT: number /*int*/
                    // @ts-ignore
                    public static readonly SSL_ERROR_WANT_ACCEPT: number /*int*/
                    // @ts-ignore
                    public static version(): number /*int*/
                    // @ts-ignore
                    public static versionString(): string
                    /**
                     * Initialize OpenSSL support.
                     * This function needs to be called once for the
                     * lifetime of JVM. Library.init() has to be called before.
                     * @param engine Support for external a Crypto Device ("engine"),
                     *                 usually
                     *  a hardware accelerator card for crypto operations.
                     * @return APR status code
                     */
                    // @ts-ignore
                    public static initialize(engine: java.lang.String | string): number /*int*/
                    /**
                     * Get the status of FIPS Mode.
                     * @return FIPS_mode return code. It is <code>0</code> if OpenSSL is not
                     *   in FIPS mode, <code>1</code> if OpenSSL is in FIPS Mode.
                     * @throws Exception If tcnative was not compiled with FIPS Mode available.
                     * @see <a href="http://wiki.openssl.org/index.php/FIPS_mode%28%29">OpenSSL method FIPS_mode()</a>
                     */
                    // @ts-ignore
                    public static fipsModeGet(): number /*int*/
                    /**
                     * Enable/Disable FIPS Mode.
                     * @param mode 1 - enable, 0 - disable
                     * @return FIPS_mode_set return code
                     * @throws Exception If tcnative was not compiled with FIPS Mode available,
                     *   or if {#code FIPS_mode_set()} call returned an error value.
                     * @see <a href="http://wiki.openssl.org/index.php/FIPS_mode_set%28%29">OpenSSL method FIPS_mode_set()</a>
                     */
                    // @ts-ignore
                    public static fipsModeSet(mode: number /*int*/): number /*int*/
                    /**
                     * Add content of the file to the PRNG
                     * @param filename Filename containing random data.
                     *         If null the default file will be tested.
                     *         The seed file is $RANDFILE if that environment variable is
                     *         set, $HOME/.rnd otherwise.
                     *         In case both files are unavailable builtin
                     *         random seed generator is used.
                     * @return <code>true</code> if the operation was successful
                     */
                    // @ts-ignore
                    public static randLoad(filename: java.lang.String | string): boolean
                    /**
                     * Writes a number of random bytes (currently 1024) to
                     * file <code>filename</code> which can be used to initialize the PRNG
                     * by calling randLoad in a later session.
                     * @param filename Filename to save the data
                     * @return <code>true</code> if the operation was successful
                     */
                    // @ts-ignore
                    public static randSave(filename: java.lang.String | string): boolean
                    /**
                     * Creates random data to filename
                     * @param filename Filename to save the data
                     * @param len The length of random sequence in bytes
                     * @param base64 Output the data in Base64 encoded format
                     * @return <code>true</code> if the operation was successful
                     */
                    // @ts-ignore
                    public static randMake(filename: java.lang.String | string, len: number /*int*/, base64: boolean): boolean
                    /**
                     * Sets global random filename.
                     * @param filename Filename to use.
                     *         If set it will be used for SSL initialization
                     *         and all contexts where explicitly not set.
                     */
                    // @ts-ignore
                    public static randSet(filename: java.lang.String | string): void
                    /**
                     * Initialize new BIO
                     * @param pool The pool to use.
                     * @param callback BIOCallback to use
                     * @return New BIO handle
                     * @throws Exception An error occurred
                     */
                    // @ts-ignore
                    public static newBIO(pool: number /*long*/, callback: org.apache.tomcat.jni.BIOCallback): number /*long*/
                    /**
                     * Close BIO and dereference callback object
                     * @param bio BIO to close and destroy.
                     * @return APR Status code
                     */
                    // @ts-ignore
                    public static closeBIO(bio: number /*long*/): number /*int*/
                    /**
                     * Set global Password callback for obtaining passwords.
                     * @param callback PasswordCallback implementation to use.
                     */
                    // @ts-ignore
                    public static setPasswordCallback(callback: org.apache.tomcat.jni.PasswordCallback): void
                    /**
                     * Set global Password for decrypting certificates and keys.
                     * @param password Password to use.
                     */
                    // @ts-ignore
                    public static setPassword(password: java.lang.String | string): void
                    /**
                     * Return last SSL error string
                     * @return the error string
                     */
                    // @ts-ignore
                    public static getLastError(): string
                    /**
                     * Return true if all the requested SSL_OP_* are supported by OpenSSL.
                     * <i>Note that for versions of tcnative &lt; 1.1.25, this method will
                     * return <code>true</code> if and only if <code>op</code>=
                     * {@link #SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION} and tcnative
                     * supports that flag.</i>
                     * @param op Bitwise-OR of all SSL_OP_* to test.
                     * @return true if all SSL_OP_* are supported by OpenSSL library.
                     */
                    // @ts-ignore
                    public static hasOp(op: number /*int*/): boolean
                    /**
                     * Return the handshake completed count.
                     * @param ssl SSL pointer
                     * @return the count
                     */
                    // @ts-ignore
                    public static getHandshakeCount(ssl: number /*long*/): number /*int*/
                    /**
                     * SSL_new
                     * @param ctx Server or Client context to use.
                     * @param server if true configure SSL instance to use accept handshake routines
                     *                if false configure SSL instance to use connect handshake routines
                     * @return pointer to SSL instance (SSL *)
                     */
                    // @ts-ignore
                    public static newSSL(ctx: number /*long*/, server: boolean): number /*long*/
                    /**
                     * SSL_set_bio
                     * @param ssl SSL pointer (SSL *)
                     * @param rbio read BIO pointer (BIO *)
                     * @param wbio write BIO pointer (BIO *)
                     */
                    // @ts-ignore
                    public static setBIO(ssl: number /*long*/, rbio: number /*long*/, wbio: number /*long*/): void
                    /**
                     * SSL_get_error
                     * @param ssl SSL pointer (SSL *)
                     * @param ret TLS/SSL I/O return value
                     * @return the error status
                     */
                    // @ts-ignore
                    public static getError(ssl: number /*long*/, ret: number /*int*/): number /*int*/
                    /**
                     * BIO_ctrl_pending.
                     * @param bio BIO pointer (BIO *)
                     * @return the pending bytes count
                     */
                    // @ts-ignore
                    public static pendingWrittenBytesInBIO(bio: number /*long*/): number /*int*/
                    /**
                     * SSL_pending.
                     * @param ssl SSL pointer (SSL *)
                     * @return the pending bytes count
                     */
                    // @ts-ignore
                    public static pendingReadableBytesInSSL(ssl: number /*long*/): number /*int*/
                    /**
                     * BIO_write.
                     * @param bio BIO pointer
                     * @param wbuf Buffer pointer
                     * @param wlen Write length
                     * @return the bytes count written
                     */
                    // @ts-ignore
                    public static writeToBIO(bio: number /*long*/, wbuf: number /*long*/, wlen: number /*int*/): number /*int*/
                    /**
                     * BIO_read.
                     * @param bio BIO pointer
                     * @param rbuf Buffer pointer
                     * @param rlen Read length
                     * @return the bytes count read
                     */
                    // @ts-ignore
                    public static readFromBIO(bio: number /*long*/, rbuf: number /*long*/, rlen: number /*int*/): number /*int*/
                    /**
                     * SSL_write.
                     * @param ssl the SSL instance (SSL *)
                     * @param wbuf Buffer pointer
                     * @param wlen Write length
                     * @return the bytes count written
                     */
                    // @ts-ignore
                    public static writeToSSL(ssl: number /*long*/, wbuf: number /*long*/, wlen: number /*int*/): number /*int*/
                    /**
                     * SSL_read
                     * @param ssl the SSL instance (SSL *)
                     * @param rbuf Buffer pointer
                     * @param rlen Read length
                     * @return the bytes count read
                     */
                    // @ts-ignore
                    public static readFromSSL(ssl: number /*long*/, rbuf: number /*long*/, rlen: number /*int*/): number /*int*/
                    /**
                     * SSL_get_shutdown
                     * @param ssl the SSL instance (SSL *)
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static getShutdown(ssl: number /*long*/): number /*int*/
                    /**
                     * SSL_set_shutdown
                     * @param ssl the SSL instance (SSL *)
                     * @param mode Shutdown mode
                     */
                    // @ts-ignore
                    public static setShutdown(ssl: number /*long*/, mode: number /*int*/): void
                    /**
                     * SSL_free
                     * @param ssl the SSL instance (SSL *)
                     */
                    // @ts-ignore
                    public static freeSSL(ssl: number /*long*/): void
                    /**
                     * Wire up internal and network BIOs for the given SSL instance.
                     * <b>Warning: you must explicitly free this resource by calling freeBIO</b>
                     * While the SSL's internal/application data BIO will be freed when freeSSL is called on
                     * the provided SSL instance, you must call freeBIO on the returned network BIO.
                     * @param ssl the SSL instance (SSL *)
                     * @return pointer to the Network BIO (BIO *)
                     */
                    // @ts-ignore
                    public static makeNetworkBIO(ssl: number /*long*/): number /*long*/
                    /**
                     * BIO_free
                     * @param bio BIO pointer
                     */
                    // @ts-ignore
                    public static freeBIO(bio: number /*long*/): void
                    /**
                     * SSL_shutdown
                     * @param ssl the SSL instance (SSL *)
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static shutdownSSL(ssl: number /*long*/): number /*int*/
                    /**
                     * Get the error number representing the last error OpenSSL encountered on
                     * this thread.
                     * @return the last error number
                     */
                    // @ts-ignore
                    public static getLastErrorNumber(): number /*int*/
                    /**
                     * SSL_get_cipher.
                     * @param ssl the SSL instance (SSL *)
                     * @return the cipher name
                     */
                    // @ts-ignore
                    public static getCipherForSSL(ssl: number /*long*/): string
                    /**
                     * SSL_get_version
                     * @param ssl the SSL instance (SSL *)
                     * @return the SSL version in use
                     */
                    // @ts-ignore
                    public static getVersion(ssl: number /*long*/): string
                    /**
                     * SSL_do_handshake
                     * @param ssl the SSL instance (SSL *)
                     * @return the handshake status
                     */
                    // @ts-ignore
                    public static doHandshake(ssl: number /*long*/): number /*int*/
                    /**
                     * SSL_renegotiate
                     * @param ssl the SSL instance (SSL *)
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static renegotiate(ssl: number /*long*/): number /*int*/
                    /**
                     * SSL_renegotiate_pending
                     * @param ssl the SSL instance (SSL *)
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static renegotiatePending(ssl: number /*long*/): number /*int*/
                    /**
                     * SSL_verify_client_post_handshake
                     * @param ssl the SSL instance (SSL *)
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static verifyClientPostHandshake(ssl: number /*long*/): number /*int*/
                    /**
                     * Is post handshake authentication in progress on this connection?
                     * @param ssl the SSL instance (SSL *)
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static getPostHandshakeAuthInProgress(ssl: number /*long*/): number /*int*/
                    /**
                     * SSL_in_init.
                     * @param ssl the SSL instance (SSL *)
                     * @return the status
                     */
                    // @ts-ignore
                    public static isInInit(ssl: number /*long*/): number /*int*/
                    /**
                     * SSL_get0_next_proto_negotiated
                     * @param ssl the SSL instance (SSL *)
                     * @return the NPN protocol negotiated
                     */
                    // @ts-ignore
                    public static getNextProtoNegotiated(ssl: number /*long*/): string
                    /**
                     * SSL_get0_alpn_selected
                     * @param ssl the SSL instance (SSL *)
                     * @return the ALPN protocol negotiated
                     */
                    // @ts-ignore
                    public static getAlpnSelected(ssl: number /*long*/): string
                    /**
                     * Get the peer certificate chain or {@code null} if non was send.
                     * @param ssl the SSL instance (SSL *)
                     * @return the certificate chain bytes
                     */
                    // @ts-ignore
                    public static getPeerCertChain(ssl: number /*long*/): number /*byte*/[][]
                    /**
                     * Get the peer certificate or {@code null} if non was send.
                     * @param ssl the SSL instance (SSL *)
                     * @return the certificate bytes
                     */
                    // @ts-ignore
                    public static getPeerCertificate(ssl: number /*long*/): number /*byte*/[]
                    /**
                     * Get the error number representing for the given {@code errorNumber}.
                     * @param errorNumber The error code
                     * @return an error message
                     */
                    // @ts-ignore
                    public static getErrorString(errorNumber: number /*long*/): string
                    /**
                     * SSL_get_time
                     * @param ssl the SSL instance (SSL *)
                     * @return returns the time at which the session ssl was established. The time is given in seconds since the Epoch
                     */
                    // @ts-ignore
                    public static getTime(ssl: number /*long*/): number /*long*/
                    /**
                     * Set Type of Client Certificate verification and Maximum depth of CA Certificates
                     * in Client Certificate verification.
                     * <br>
                     * This directive sets the Certificate verification level for the Client
                     * Authentication. Notice that this directive can be used both in per-server
                     * and per-directory context. In per-server context it applies to the client
                     * authentication process used in the standard SSL handshake when a connection
                     * is established. In per-directory context it forces a SSL renegotiation with
                     * the reconfigured client verification level after the HTTP request was read
                     * but before the HTTP response is sent.
                     * <br>
                     * The following levels are available for level:
                     * <pre>
                     * SSL_CVERIFY_NONE           - No client Certificate is required at all
                     * SSL_CVERIFY_OPTIONAL       - The client may present a valid Certificate
                     * SSL_CVERIFY_REQUIRE        - The client has to present a valid Certificate
                     * SSL_CVERIFY_OPTIONAL_NO_CA - The client may present a valid Certificate
                     * but it need not to be (successfully) verifiable
                     * </pre>
                     * <br>
                     * The depth actually is the maximum number of intermediate certificate issuers,
                     * i.e. the number of CA certificates which are max allowed to be followed while
                     * verifying the client certificate. A depth of 0 means that self-signed client
                     * certificates are accepted only, the default depth of 1 means the client
                     * certificate can be self-signed or has to be signed by a CA which is directly
                     * known to the server (i.e. the CA's certificate is under
                     * {@code setCACertificatePath}, etc.
                     * @param ssl the SSL instance (SSL *)
                     * @param level Type of Client Certificate verification.
                     * @param depth Maximum depth of CA Certificates in Client Certificate
                     *               verification.
                     */
                    // @ts-ignore
                    public static setVerify(ssl: number /*long*/, level: number /*int*/, depth: number /*int*/): void
                    /**
                     * Set OpenSSL Option.
                     * @param ssl the SSL instance (SSL *)
                     * @param options  See SSL.SSL_OP_* for option flags.
                     */
                    // @ts-ignore
                    public static setOptions(ssl: number /*long*/, options: number /*int*/): void
                    /**
                     * Get OpenSSL Option.
                     * @param ssl the SSL instance (SSL *)
                     * @return options  See SSL.SSL_OP_* for option flags.
                     */
                    // @ts-ignore
                    public static getOptions(ssl: number /*long*/): number /*int*/
                    /**
                     * Returns all cipher suites that are enabled for negotiation in an SSL handshake.
                     * @param ssl the SSL instance (SSL *)
                     * @return ciphers
                     */
                    // @ts-ignore
                    public static getCiphers(ssl: number /*long*/): string[]
                    /**
                     * Returns the cipher suites available for negotiation in SSL handshake.
                     * <br>
                     * This complex directive uses a colon-separated cipher-spec string consisting
                     * of OpenSSL cipher specifications to configure the Cipher Suite the client
                     * is permitted to negotiate in the SSL handshake phase. Notice that this
                     * directive can be used both in per-server and per-directory context.
                     * In per-server context it applies to the standard SSL handshake when a
                     * connection is established. In per-directory context it forces a SSL
                     * renegotiation with the reconfigured Cipher Suite after the HTTP request
                     * was read but before the HTTP response is sent.
                     * @param ssl the SSL instance (SSL *)
                     * @param ciphers an SSL cipher specification
                     * @return <code>true</code> if the operation was successful
                     * @throws Exception An error occurred
                     */
                    // @ts-ignore
                    public static setCipherSuites(ssl: number /*long*/, ciphers: java.lang.String | string): boolean
                    /**
                     * Returns the ID of the session as byte array representation.
                     * @param ssl the SSL instance (SSL *)
                     * @return the session as byte array representation obtained via SSL_SESSION_get_id.
                     */
                    // @ts-ignore
                    public static getSessionId(ssl: number /*long*/): number /*byte*/[]
                }
            }
        }
    }
}
