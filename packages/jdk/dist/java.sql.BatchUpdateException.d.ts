declare namespace java {
    namespace sql {
        /**
         * The subclass of {@link SQLException} thrown when an error
         * occurs during a batch update operation.  In addition to the
         * information provided by {@link SQLException}, a
         * <code>BatchUpdateException</code> provides the update
         * counts for all commands that were executed successfully during the
         * batch update, that is, all commands that were executed before the error
         * occurred.  The order of elements in an array of update counts
         * corresponds to the order in which commands were added to the batch.
         * <P>
         * After a command in a batch update fails to execute properly
         * and a <code>BatchUpdateException</code> is thrown, the driver
         * may or may not continue to process the remaining commands in
         * the batch.  If the driver continues processing after a failure,
         * the array returned by the method
         * <code>BatchUpdateException.getUpdateCounts</code> will have
         * an element for every command in the batch rather than only
         * elements for the commands that executed successfully before
         * the error.  In the case where the driver continues processing
         * commands, the array element for any command
         * that failed is <code>Statement.EXECUTE_FAILED</code>.
         * <P>
         * A JDBC driver implementation should use
         * the constructor {@code BatchUpdateException(String reason, String SQLState,
         * int vendorCode, long []updateCounts,Throwable cause) } instead of
         * constructors that take {@code int[]} for the update counts to avoid the
         * possibility of overflow.
         * <p>
         * If {@code Statement.executeLargeBatch} method is invoked it is recommended that
         * {@code getLargeUpdateCounts} be called instead of {@code getUpdateCounts}
         * in order to avoid a possible overflow of the integer update count.
         * @since 1.2
         */
        // @ts-ignore
        class BatchUpdateException extends java.sql.SQLException {
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with a given
             * <code>reason</code>, <code>SQLState</code>, <code>vendorCode</code> and
             * <code>updateCounts</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             * @param reason a description of the error
             * @param SQLState an XOPEN or SQL:2003 code identifying the exception
             * @param vendorCode an exception code used by a particular
             *  database vendor
             * @param updateCounts an array of <code>int</code>, with each element
             *  indicating the update count, <code>Statement.SUCCESS_NO_INFO</code> or
             *  <code>Statement.EXECUTE_FAILED</code> for each SQL command in
             *  the batch for JDBC drivers that continue processing
             *  after a command failure; an update count or
             *  <code>Statement.SUCCESS_NO_INFO</code> for each SQL command in the batch
             *  prior to the failure for JDBC drivers that stop processing after a command
             *  failure
             * @since 1.2
             * @see #BatchUpdateException(java.lang.String, java.lang.String, int, long[],
             *  java.lang.Throwable)
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, vendorCode: number /*int*/, updateCounts: number /*int*/[])
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with a given
             * <code>reason</code>, <code>SQLState</code> and
             * <code>updateCounts</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method. The vendor code
             * is initialized to 0.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             * @param reason a description of the exception
             * @param SQLState an XOPEN or SQL:2003 code identifying the exception
             * @param updateCounts an array of <code>int</code>, with each element
             *  indicating the update count, <code>Statement.SUCCESS_NO_INFO</code> or
             *  <code>Statement.EXECUTE_FAILED</code> for each SQL command in
             *  the batch for JDBC drivers that continue processing
             *  after a command failure; an update count or
             *  <code>Statement.SUCCESS_NO_INFO</code> for each SQL command in the batch
             *  prior to the failure for JDBC drivers that stop processing after a command
             *  failure
             * @since 1.2
             * @see #BatchUpdateException(java.lang.String, java.lang.String, int, long[],
             *  java.lang.Throwable)
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, updateCounts: number /*int*/[])
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with a given
             * <code>reason</code> and <code>updateCounts</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.  The
             * <code>SQLState</code> is initialized to <code>null</code>
             * and the vendor code is initialized to 0.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             * @param reason a description of the exception
             * @param updateCounts an array of <code>int</code>, with each element
             *  indicating the update count, <code>Statement.SUCCESS_NO_INFO</code> or
             *  <code>Statement.EXECUTE_FAILED</code> for each SQL command in
             *  the batch for JDBC drivers that continue processing
             *  after a command failure; an update count or
             *  <code>Statement.SUCCESS_NO_INFO</code> for each SQL command in the batch
             *  prior to the failure for JDBC drivers that stop processing after a command
             *  failure
             * @since 1.2
             * @see #BatchUpdateException(java.lang.String, java.lang.String, int, long[],
             *  java.lang.Throwable)
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, updateCounts: number /*int*/[])
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with a given
             * <code>updateCounts</code>.
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method. The  <code>reason</code>
             * and <code>SQLState</code> are initialized to null and the vendor code
             * is initialized to 0.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             * @param updateCounts an array of <code>int</code>, with each element
             *  indicating the update count, <code>Statement.SUCCESS_NO_INFO</code> or
             *  <code>Statement.EXECUTE_FAILED</code> for each SQL command in
             *  the batch for JDBC drivers that continue processing
             *  after a command failure; an update count or
             *  <code>Statement.SUCCESS_NO_INFO</code> for each SQL command in the batch
             *  prior to the failure for JDBC drivers that stop processing after a command
             *  failure
             * @since 1.2
             * @see #BatchUpdateException(java.lang.String, java.lang.String, int, long[],
             *  java.lang.Throwable)
             */
            // @ts-ignore
            constructor(updateCounts: number /*int*/[])
            /**
             * Constructs a <code>BatchUpdateException</code> object.
             * The <code>reason</code>, <code>SQLState</code> and <code>updateCounts</code>
             * are initialized to <code>null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * @since 1.2
             * @see #BatchUpdateException(java.lang.String, java.lang.String, int, long[],
             *  java.lang.Throwable)
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with
             * a given <code>cause</code>.
             * The <code>SQLState</code> and <code>updateCounts</code>
             * are initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>reason</code>  is initialized to <code>null</code> if
             * <code>cause==null</code> or to <code>cause.toString()</code> if
             * <code>cause!=null</code>.
             * @param cause the underlying reason for this <code>SQLException</code>
             *  (which is saved for later retrieval by the <code>getCause()</code> method);
             *  may be null indicating the cause is non-existent or unknown.
             * @since 1.6
             * @see #BatchUpdateException(java.lang.String, java.lang.String, int, long[],
             *  java.lang.Throwable)
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with a
             * given <code>cause</code> and <code>updateCounts</code>.
             * The <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>reason</code>  is initialized to <code>null</code> if
             * <code>cause==null</code> or to <code>cause.toString()</code> if
             * <code>cause!=null</code>.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             * @param updateCounts an array of <code>int</code>, with each element
             *  indicating the update count, <code>Statement.SUCCESS_NO_INFO</code> or
             *  <code>Statement.EXECUTE_FAILED</code> for each SQL command in
             *  the batch for JDBC drivers that continue processing
             *  after a command failure; an update count or
             *  <code>Statement.SUCCESS_NO_INFO</code> for each SQL command in the batch
             *  prior to the failure for JDBC drivers that stop processing after a command
             *  failure
             * @param cause the underlying reason for this <code>SQLException</code>
             *  (which is saved for later retrieval by the <code>getCause()</code> method); may be null indicating
             *  the cause is non-existent or unknown.
             * @since 1.6
             * @see #BatchUpdateException(java.lang.String, java.lang.String, int, long[],
             *  java.lang.Throwable)
             */
            // @ts-ignore
            constructor(updateCounts: number /*int*/[], cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with
             * a given <code>reason</code>, <code>cause</code>
             * and <code>updateCounts</code>. The <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             * @param reason a description of the exception
             * @param updateCounts an array of <code>int</code>, with each element
             * indicating the update count, <code>Statement.SUCCESS_NO_INFO</code> or
             *  <code>Statement.EXECUTE_FAILED</code> for each SQL command in
             *  the batch for JDBC drivers that continue processing
             *  after a command failure; an update count or
             *  <code>Statement.SUCCESS_NO_INFO</code> for each SQL command in the batch
             *  prior to the failure for JDBC drivers that stop processing after a command
             *  failure
             * @param cause the underlying reason for this <code>SQLException</code> (which is saved for later retrieval by the <code>getCause()</code> method);
             *  may be null indicating
             *  the cause is non-existent or unknown.
             * @since 1.6
             * @see #BatchUpdateException(java.lang.String, java.lang.String, int, long[],
             *  java.lang.Throwable)
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, updateCounts: number /*int*/[], cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with
             * a given <code>reason</code>, <code>SQLState</code>,<code>cause</code>, and
             * <code>updateCounts</code>. The vendor code is initialized to 0.
             * @param reason a description of the exception
             * @param SQLState an XOPEN or SQL:2003 code identifying the exception
             * @param updateCounts an array of <code>int</code>, with each element
             *  indicating the update count, <code>Statement.SUCCESS_NO_INFO</code> or
             *  <code>Statement.EXECUTE_FAILED</code> for each SQL command in
             *  the batch for JDBC drivers that continue processing
             *  after a command failure; an update count or
             *  <code>Statement.SUCCESS_NO_INFO</code> for each SQL command in the batch
             *  prior to the failure for JDBC drivers that stop processing after a command
             *  failure
             *  <p>
             *  <strong>Note:</strong> There is no validation of {#code updateCounts} for
             *  overflow and because of this it is recommended that you use the constructor
             *  {@code BatchUpdateException(String reason, String SQLState,
             *  int vendorCode, long []updateCounts,Throwable cause) }.
             *  </p>
             * @param cause the underlying reason for this <code>SQLException</code>
             *  (which is saved for later retrieval by the <code>getCause()</code> method);
             *  may be null indicating
             *  the cause is non-existent or unknown.
             * @since 1.6
             * @see #BatchUpdateException(java.lang.String, java.lang.String, int, long[],
             *  java.lang.Throwable)
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, updateCounts: number /*int*/[], cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with
             * a given <code>reason</code>, <code>SQLState</code>, <code>vendorCode</code>
             * <code>cause</code> and <code>updateCounts</code>.
             * @param reason a description of the error
             * @param SQLState an XOPEN or SQL:2003 code identifying the exception
             * @param vendorCode an exception code used by a particular
             *  database vendor
             * @param updateCounts an array of <code>int</code>, with each element
             * indicating the update count, <code>Statement.SUCCESS_NO_INFO</code> or
             *  <code>Statement.EXECUTE_FAILED</code> for each SQL command in
             *  the batch for JDBC drivers that continue processing
             *  after a command failure; an update count or
             *  <code>Statement.SUCCESS_NO_INFO</code> for each SQL command in the batch
             *  prior to the failure for JDBC drivers that stop processing after a command
             *  failure
             *  <p>
             *  <strong>Note:</strong> There is no validation of {#code updateCounts} for
             *  overflow and because of this it is recommended that you use the constructor
             *  {@code BatchUpdateException(String reason, String SQLState,
             *  int vendorCode, long []updateCounts,Throwable cause) }.
             *  </p>
             * @param cause the underlying reason for this <code>SQLException</code> (which is saved for later retrieval by the <code>getCause()</code> method);
             *  may be null indicating
             *  the cause is non-existent or unknown.
             * @since 1.6
             * @see #BatchUpdateException(java.lang.String, java.lang.String, int, long[],
             *  java.lang.Throwable)
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, vendorCode: number /*int*/, updateCounts: number /*int*/[], cause: java.lang.Throwable | Error)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with
             * a given <code>reason</code>, <code>SQLState</code>, <code>vendorCode</code>
             * <code>cause</code> and <code>updateCounts</code>.
             * <p>
             * This constructor should be used when the returned update count may exceed
             * {@link Integer#MAX_VALUE}.
             * <p>
             * @param reason a description of the error
             * @param SQLState an XOPEN or SQL:2003 code identifying the exception
             * @param vendorCode an exception code used by a particular
             *  database vendor
             * @param updateCounts an array of <code>long</code>, with each element
             * indicating the update count, <code>Statement.SUCCESS_NO_INFO</code> or
             *  <code>Statement.EXECUTE_FAILED</code> for each SQL command in
             *  the batch for JDBC drivers that continue processing
             *  after a command failure; an update count or
             *  <code>Statement.SUCCESS_NO_INFO</code> for each SQL command in the batch
             *  prior to the failure for JDBC drivers that stop processing after a command
             *  failure
             * @param cause the underlying reason for this <code>SQLException</code>
             *  (which is saved for later retrieval by the <code>getCause()</code> method);
             *  may be null indicating the cause is non-existent or unknown.
             * @since 1.8
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string, SQLState: java.lang.String | string, vendorCode: number /*int*/, updateCounts: number /*long*/[], cause: java.lang.Throwable | Error)
            /**
             * Retrieves the update count for each update statement in the batch
             * update that executed successfully before this exception occurred.
             * A driver that implements batch updates may or may not continue to
             * process the remaining commands in a batch when one of the commands
             * fails to execute properly. If the driver continues processing commands,
             * the array returned by this method will have as many elements as
             * there are commands in the batch; otherwise, it will contain an
             * update count for each command that executed successfully before
             * the <code>BatchUpdateException</code> was thrown.
             * <P>
             * The possible return values for this method were modified for
             * the Java 2 SDK, Standard Edition, version 1.3.  This was done to
             * accommodate the new option of continuing to process commands
             * in a batch update after a <code>BatchUpdateException</code> object
             * has been thrown.
             * @return an array of <code>int</code> containing the update counts
             *  for the updates that were executed successfully before this error
             *  occurred.  Or, if the driver continues to process commands after an
             *  error, one of the following for every command in the batch:
             *  <OL>
             *  <LI>an update count
             *   <LI><code>Statement.SUCCESS_NO_INFO</code> to indicate that the command
             *      executed successfully but the number of rows affected is unknown
             *   <LI><code>Statement.EXECUTE_FAILED</code> to indicate that the command
             *      failed to execute successfully
             *  </OL>
             * @since 1.3
             * @see #getLargeUpdateCounts()
             */
            // @ts-ignore
            getUpdateCounts(): number /*int*/[]
            /**
             * Retrieves the update count for each update statement in the batch
             * update that executed successfully before this exception occurred.
             * A driver that implements batch updates may or may not continue to
             * process the remaining commands in a batch when one of the commands
             * fails to execute properly. If the driver continues processing commands,
             * the array returned by this method will have as many elements as
             * there are commands in the batch; otherwise, it will contain an
             * update count for each command that executed successfully before
             * the <code>BatchUpdateException</code> was thrown.
             * <p>
             * This method should be used when {@code Statement.executeLargeBatch} is
             * invoked and the returned update count may exceed {@link Integer#MAX_VALUE}.
             * <p>
             * @return an array of <code>long</code> containing the update counts
             *  for the updates that were executed successfully before this error
             *  occurred.  Or, if the driver continues to process commands after an
             *  error, one of the following for every command in the batch:
             *  <OL>
             *  <LI>an update count
             *   <LI><code>Statement.SUCCESS_NO_INFO</code> to indicate that the command
             *      executed successfully but the number of rows affected is unknown
             *   <LI><code>Statement.EXECUTE_FAILED</code> to indicate that the command
             *      failed to execute successfully
             *  </OL>
             * @since 1.8
             */
            // @ts-ignore
            getLargeUpdateCounts(): number /*long*/[]
        }
    }
}
