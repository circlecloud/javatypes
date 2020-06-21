declare namespace java {
    namespace sql {
        /**
         * <P>An exception that provides information on  database access
         * warnings. Warnings are silently chained to the object whose method
         * caused it to be reported.
         * <P>
         * Warnings may be retrieved from <code>Connection</code>, <code>Statement</code>,
         * and <code>ResultSet</code> objects.  Trying to retrieve a warning on a
         * connection after it has been closed will cause an exception to be thrown.
         * Similarly, trying to retrieve a warning on a statement after it has been
         * closed or on a result set after it has been closed will cause
         * an exception to be thrown. Note that closing a statement also
         * closes a result set that it might have produced.
         * @see Connection#getWarnings
         * @see Statement#getWarnings
         * @see ResultSet#getWarnings
         */
        // @ts-ignore
        class SQLWarning extends java.sql.SQLException {
            /**
             * Constructs a  <code>SQLWarning</code> object
             * with a given <code>reason</code>, <code>SQLState</code>  and
             * <code>vendorCode</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * @param reason a description of the warning
             * @param SQLState an XOPEN or SQL:2003 code identifying the warning
             * @param vendorCode a database vendor-specific warning code
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, vendorCode: number /*int*/)
            /**
             * Constructs a <code>SQLWarning</code> object
             * with a given <code>reason</code> and <code>SQLState</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method. The vendor code
             * is initialized to 0.
             * <p>
             * @param reason a description of the warning
             * @param SQLState an XOPEN or SQL:2003 code identifying the warning
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string)
            /**
             * Constructs a <code>SQLWarning</code> object
             * with a given <code>reason</code>. The <code>SQLState</code>
             * is initialized to <code>null</code> and the vendor code is initialized
             * to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * @param reason a description of the warning
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string)
            /**
             * Constructs a  <code>SQLWarning</code> object.
             * The <code>reason</code>, <code>SQLState</code> are initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>SQLWarning</code> object
             * with a given  <code>cause</code>.
             * The <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>reason</code>  is initialized to <code>null</code> if
             * <code>cause==null</code> or to <code>cause.toString()</code> if
             * <code>cause!=null</code>.
             * <p>
             * @param cause the underlying reason for this <code>SQLWarning</code> (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>SQLWarning</code> object
             * with a given
             * <code>reason</code> and  <code>cause</code>.
             * The <code>SQLState</code> is  initialized to <code>null</code>
             * and the vendor code is initialized to 0.
             * <p>
             * @param reason a description of the warning
             * @param cause  the underlying reason for this <code>SQLWarning</code>
             *  (which is saved for later retrieval by the <code>getCause()</code> method);
             *  may be null indicating the cause is non-existent or unknown.
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>SQLWarning</code> object
             * with a given
             * <code>reason</code>, <code>SQLState</code> and  <code>cause</code>.
             * The vendor code is initialized to 0.
             * <p>
             * @param reason a description of the warning
             * @param SQLState an XOPEN or SQL:2003 code identifying the warning
             * @param cause the underlying reason for this <code>SQLWarning</code> (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, cause: java.lang.Throwable | Error)
            /**
             * Constructs a<code>SQLWarning</code> object
             * with a given
             * <code>reason</code>, <code>SQLState</code>, <code>vendorCode</code>
             * and  <code>cause</code>.
             * <p>
             * @param reason a description of the warning
             * @param SQLState an XOPEN or SQL:2003 code identifying the warning
             * @param vendorCode a database vendor-specific warning code
             * @param cause the underlying reason for this <code>SQLWarning</code> (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, vendorCode: number /*int*/, cause: java.lang.Throwable | Error)
            /**
             * Retrieves the warning chained to this <code>SQLWarning</code> object by
             * <code>setNextWarning</code>.
             * @return the next <code>SQLException</code> in the chain; <code>null</code> if none
             * @see #setNextWarning
             */
            // @ts-ignore
            getNextWarning(): java.sql.SQLWarning
            /**
             * Adds a <code>SQLWarning</code> object to the end of the chain.
             * @param w the new end of the <code>SQLException</code> chain
             * @see #getNextWarning
             */
            // @ts-ignore
            setNextWarning(w: java.sql.SQLWarning): void
        }
    }
}
