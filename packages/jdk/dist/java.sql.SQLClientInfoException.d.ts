declare namespace java {
    namespace sql {
        /**
         * The subclass of {@link SQLException} is thrown when one or more client info properties
         * could not be set on a <code>Connection</code>.  In addition to the information provided
         * by <code>SQLException</code>, a <code>SQLClientInfoException</code> provides a list of client info
         * properties that were not set.
         * Some databases do not allow multiple client info properties to be set
         * atomically.  For those databases, it is possible that some of the client
         * info properties had been set even though the <code>Connection.setClientInfo</code>
         * method threw an exception.  An application can use the <code>getFailedProperties </code>
         * method to retrieve a list of client info properties that were not set.  The
         * properties are identified by passing a
         * <code>Map&lt;String,ClientInfoStatus&gt;</code> to
         * the appropriate <code>SQLClientInfoException</code> constructor.
         * <p>
         * @see ClientInfoStatus
         * @see Connection#setClientInfo
         * @since 1.6
         */
        // @ts-ignore
        class SQLClientInfoException extends java.sql.SQLException {
            /**
             * Constructs a <code>SQLClientInfoException</code>  Object.
             * The <code>reason</code>,
             * <code>SQLState</code>, and failedProperties list are initialized to
             * <code> null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * @since 1.6
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given <code>failedProperties</code>.
             * The <code>reason</code> and <code>SQLState</code> are initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * @param failedProperties          A Map containing the property values that could not
             *                                   be set.  The keys in the Map
             *                                   contain the names of the client info
             *                                   properties that could not be set and
             *                                   the values contain one of the reason codes
             *                                   defined in <code>ClientInfoStatus</code>
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            constructor(failedProperties: java.util.Map<java.lang.String | string, java.sql.ClientInfoStatus>)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with
             * a given <code>cause</code> and <code>failedProperties</code>.
             * The <code>reason</code>  is initialized to <code>null</code> if
             * <code>cause==null</code> or to <code>cause.toString()</code> if
             * <code>cause!=null</code> and the vendor code is initialized to 0.
             * <p>
             * @param failedProperties          A Map containing the property values that could not
             *                                   be set.  The keys in the Map
             *                                   contain the names of the client info
             *                                   properties that could not be set and
             *                                   the values contain one of the reason codes
             *                                   defined in <code>ClientInfoStatus</code>
             * @param cause                                     the (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            constructor(failedProperties: java.util.Map<java.lang.String | string, java.sql.ClientInfoStatus>, cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given <code>reason</code> and <code>failedProperties</code>.
             * The <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * @param reason                            a description of the exception
             * @param failedProperties          A Map containing the property values that could not
             *                                   be set.  The keys in the Map
             *                                   contain the names of the client info
             *                                   properties that could not be set and
             *                                   the values contain one of the reason codes
             *                                   defined in <code>ClientInfoStatus</code>
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, failedProperties: java.util.Map<java.lang.String | string, java.sql.ClientInfoStatus>)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given <code>reason</code>, <code>cause</code> and
             * <code>failedProperties</code>.
             * The  <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * <p>
             * @param reason                            a description of the exception
             * @param failedProperties          A Map containing the property values that could not
             *                                   be set.  The keys in the Map
             *                                   contain the names of the client info
             *                                   properties that could not be set and
             *                                   the values contain one of the reason codes
             *                                   defined in <code>ClientInfoStatus</code>
             * @param cause                                     the underlying reason for this <code>SQLException</code> (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, failedProperties: java.util.Map<java.lang.String | string, java.sql.ClientInfoStatus>, cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given  <code>reason</code>, <code>SQLState</code>  and
             * <code>failedProperties</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method. The vendor code
             * is initialized to 0.
             * <p>
             * @param reason                            a description of the exception
             * @param SQLState                          an XOPEN or SQL:2003 code identifying the exception
             * @param failedProperties          A Map containing the property values that could not
             *                                   be set.  The keys in the Map
             *                                   contain the names of the client info
             *                                   properties that could not be set and
             *                                   the values contain one of the reason codes
             *                                   defined in <code>ClientInfoStatus</code>
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, failedProperties: java.util.Map<java.lang.String | string, java.sql.ClientInfoStatus>)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given  <code>reason</code>, <code>SQLState</code>, <code>cause</code>
             * and <code>failedProperties</code>.  The vendor code is initialized to 0.
             * <p>
             * @param reason                            a description of the exception
             * @param SQLState                          an XOPEN or SQL:2003 code identifying the exception
             * @param failedProperties          A Map containing the property values that could not
             *                                   be set.  The keys in the Map
             *                                   contain the names of the client info
             *                                   properties that could not be set and
             *                                   the values contain one of the reason codes
             *                                   defined in <code>ClientInfoStatus</code>
             * @param cause                                     the underlying reason for this <code>SQLException</code> (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, failedProperties: java.util.Map<java.lang.String | string, java.sql.ClientInfoStatus>, cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given  <code>reason</code>, <code>SQLState</code>,
             * <code>vendorCode</code>  and <code>failedProperties</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * @param reason                            a description of the exception
             * @param SQLState                          an XOPEN or SQL:2003 code identifying the exception
             * @param vendorCode                        a database vendor-specific exception code
             * @param failedProperties          A Map containing the property values that could not
             *                                   be set.  The keys in the Map
             *                                   contain the names of the client info
             *                                   properties that could not be set and
             *                                   the values contain one of the reason codes
             *                                   defined in <code>ClientInfoStatus</code>
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, vendorCode: number /*int*/, failedProperties: java.util.Map<java.lang.String | string, java.sql.ClientInfoStatus>)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given  <code>reason</code>, <code>SQLState</code>,
             * <code>cause</code>, <code>vendorCode</code> and
             * <code>failedProperties</code>.
             * <p>
             * @param reason                            a description of the exception
             * @param SQLState                          an XOPEN or SQL:2003 code identifying the exception
             * @param vendorCode                        a database vendor-specific exception code
             * @param failedProperties          A Map containing the property values that could not
             *                                   be set.  The keys in the Map
             *                                   contain the names of the client info
             *                                   properties that could not be set and
             *                                   the values contain one of the reason codes
             *                                   defined in <code>ClientInfoStatus</code>
             * @param cause                     the underlying reason for this <code>SQLException</code> (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, vendorCode: number /*int*/, failedProperties: java.util.Map<java.lang.String | string, java.sql.ClientInfoStatus>, cause: java.lang.Throwable | Error)
            /**
             * Returns the list of client info properties that could not be set.  The
             * keys in the Map  contain the names of the client info
             * properties that could not be set and the values contain one of the
             * reason codes defined in <code>ClientInfoStatus</code>
             * <p>
             * @return Map list containing the client info properties that could
             *  not be set
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            getFailedProperties(): java.util.Map<java.lang.String | string, java.sql.ClientInfoStatus>
        }
    }
}
