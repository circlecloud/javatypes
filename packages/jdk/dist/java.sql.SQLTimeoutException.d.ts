declare namespace java {
    namespace sql {
        /**
         * <P>The subclass of {@link SQLException} thrown when the timeout specified by
         * {@code Statement.setQueryTimeout}, {@code DriverManager.setLoginTimeout},
         * {@code DataSource.setLoginTimeout},{@code XADataSource.setLoginTimeout}
         * has expired.
         * <P> This exception does not correspond to a standard SQLState.
         * @since 1.6
         */
        // @ts-ignore
        class SQLTimeoutException extends java.sql.SQLTransientException {
            /**
             * Constructs a <code>SQLTimeoutException</code> object.
             * The <code>reason</code>, <code>SQLState</code> are initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * @since 1.6
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>SQLTimeoutException</code> object
             * with a given <code>reason</code>. The <code>SQLState</code>
             * is initialized to <code>null</code> and the vendor code is initialized
             * to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * @param reason a description of the exception
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: string)
            /**
             * Constructs a <code>SQLTimeoutException</code> object
             * with a given <code>reason</code> and <code>SQLState</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method. The vendor code
             * is initialized to 0.
             * <p>
             * @param reason a description of the exception
             * @param SQLState an XOPEN or SQL:2003 code identifying the exception
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string)
            /**
             * Constructs a <code>SQLTimeoutException</code> object
             * with a given <code>reason</code>, <code>SQLState</code>  and
             * <code>vendorCode</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * @param reason a description of the exception
             * @param SQLState an XOPEN or SQL:2003 code identifying the exception
             * @param vendorCode a database vendor specific exception code
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, vendorCode: number /*int*/)
            /**
             * Constructs a <code>SQLTimeoutException</code> object
             * with a given  <code>cause</code>.
             * The <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>reason</code>  is initialized to <code>null</code> if
             * <code>cause==null</code> or to <code>cause.toString()</code> if
             * <code>cause!=null</code>.
             * <p>
             * @param cause the underlying reason for this <code>SQLException</code> (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             * @since 1.6
             */
            // @ts-ignore
            constructor(cause: Error)
            /**
             * Constructs a <code>SQLTimeoutException</code> object
             * with a given
             * <code>reason</code> and  <code>cause</code>.
             * The <code>SQLState</code> is  initialized to <code>null</code>
             * and the vendor code is initialized to 0.
             * <p>
             * @param reason a description of the exception.
             * @param cause the underlying reason for this <code>SQLException</code> (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: string, cause: Error)
            /**
             * Constructs a <code>SQLTimeoutException</code> object
             * with a given
             * <code>reason</code>, <code>SQLState</code> and  <code>cause</code>.
             * The vendor code is initialized to 0.
             * <p>
             * @param reason a description of the exception.
             * @param SQLState an XOPEN or SQL:2003 code identifying the exception
             * @param cause the underlying reason for this <code>SQLException</code> (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, cause: Error)
            /**
             * Constructs a <code>SQLTimeoutException</code> object
             * with a given
             * <code>reason</code>, <code>SQLState</code>, <code>vendorCode</code>
             * and  <code>cause</code>.
             * <p>
             * @param reason a description of the exception
             * @param SQLState an XOPEN or SQL:2003 code identifying the exception
             * @param vendorCode a database vendor-specific exception code
             * @param cause the underlying reason for this <code>SQLException</code> (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, vendorCode: number /*int*/, cause: Error)
        }
    }
}
