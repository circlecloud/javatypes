declare namespace java {
    namespace sql {
        /**
         * The subclass of {@link SQLException} thrown when the SQLState class value
         * is '<i>23</i>', or under vendor-specified conditions.
         * This indicates that an integrity
         * constraint (foreign key, primary key or unique key) has been violated.
         * <p>
         * Please consult your driver vendor documentation for the vendor-specified
         * conditions for which this <code>Exception</code> may be thrown.
         * @since 1.6
         */
        // @ts-ignore
        class SQLIntegrityConstraintViolationException extends java.sql.SQLNonTransientException {
            /**
             * Constructs a <code>SQLIntegrityConstraintViolationException</code> object.
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
             * Constructs a <code>SQLIntegrityConstraintViolationException</code>
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
            constructor(reason: java.lang.String | string)
            /**
             * Constructs a <code>SQLIntegrityConstraintViolationException</code>
             * object with a given <code>reason</code> and <code>SQLState</code>.
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
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string)
            /**
             * Constructs a <code>SQLIntegrityConstraintViolationException</code> object
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
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, vendorCode: number /*int*/)
            /**
             * Constructs an <code>SQLIntegrityConstraintViolationException</code> object with
             * a given  <code>cause</code>.
             * The <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>reason</code>  is initialized to <code>null</code> if
             * <code>cause==null</code> or to <code>cause.toString()</code> if
             * <code>cause!=null</code>.
             * <p>
             * @param cause the underlying reason for this <code>SQLException</code> (which is saved for later retrieval by the <code>getCause()</code>  method); may be null indicating
             *      the cause is non-existent or unknown.
             * @since 1.6
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>SQLIntegrityConstraintViolationException</code> object
             * with a given
             * <code>reason</code> and  <code>cause</code>.
             * The <code>SQLState</code> is  initialized to <code>null</code>
             * and the vendor code is initialized to 0.
             * <p>
             * @param reason a description of the exception.
             * @param cause the (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>SQLIntegrityConstraintViolationException</code> object
             * with a given
             * <code>reason</code>, <code>SQLState</code> and  <code>cause</code>.
             * The vendor code is initialized to 0.
             * <p>
             * @param reason a description of the exception.
             * @param SQLState an XOPEN or SQL:2003 code identifying the exception
             * @param cause the underlying reason for this <code>SQLException</code> (which is saved for later retrieval by the <code>getCause()</code>  method); may be null indicating
             *      the cause is non-existent or unknown.
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>SQLIntegrityConstraintViolationException</code> object
             * with a given
             * <code>reason</code>, <code>SQLState</code>, <code>vendorCode</code>
             * and  <code>cause</code>.
             * <p>
             * @param reason a description of the exception
             * @param SQLState an XOPEN or SQL:2003 code identifying the exception
             * @param vendorCode a database vendor-specific exception code
             * @param cause the (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *      the cause is non-existent or unknown.
             * @since 1.6
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, vendorCode: number /*int*/, cause: java.lang.Throwable | Error)
        }
    }
}
