declare namespace java {
    namespace sql {
        /**
         * An exception  thrown as a <code>DataTruncation</code> exception
         * (on writes) or reported as a
         * <code>DataTruncation</code> warning (on reads)
         * when a data values is unexpectedly truncated for reasons other than its having
         * exceeded <code>MaxFieldSize</code>.
         * <P>The SQLstate for a <code>DataTruncation</code> during read is <code>01004</code>.
         * <P>The SQLstate for a <code>DataTruncation</code> during write is <code>22001</code>.
         */
        // @ts-ignore
        class DataTruncation extends java.sql.SQLWarning {
            /**
             * Creates a <code>DataTruncation</code> object
             * with the SQLState initialized
             * to 01004 when <code>read</code> is set to <code>true</code> and 22001
             * when <code>read</code> is set to <code>false</code>,
             * the reason set to "Data truncation", the
             * vendor code set to 0, and
             * the other fields set to the given values.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * @param index The index of the parameter or column value
             * @param parameter true if a parameter value was truncated
             * @param read true if a read was truncated
             * @param dataSize the original size of the data
             * @param transferSize the size after truncation
             */
            // @ts-ignore
            constructor(index: number /*int*/, parameter: boolean, read: boolean, dataSize: number /*int*/, transferSize: number /*int*/)
            /**
             * Creates a <code>DataTruncation</code> object
             * with the SQLState initialized
             * to 01004 when <code>read</code> is set to <code>true</code> and 22001
             * when <code>read</code> is set to <code>false</code>,
             * the reason set to "Data truncation", the
             * vendor code set to 0, and
             * the other fields set to the given values.
             * <p>
             * @param index The index of the parameter or column value
             * @param parameter true if a parameter value was truncated
             * @param read true if a read was truncated
             * @param dataSize the original size of the data
             * @param transferSize the size after truncation
             * @param cause the underlying reason for this <code>DataTruncation</code>
             *  (which is saved for later retrieval by the <code>getCause()</code> method);
             *  may be null indicating the cause is non-existent or unknown.
             * @since 1.6
             */
            // @ts-ignore
            constructor(index: number /*int*/, parameter: boolean, read: boolean, dataSize: number /*int*/, transferSize: number /*int*/, cause: java.lang.Throwable | Error)
            /**
             * Retrieves the index of the column or parameter that was truncated.
             * <P>This may be -1 if the column or parameter index is unknown, in
             * which case the <code>parameter</code> and <code>read</code> fields should be ignored.
             * @return the index of the truncated parameter or column value
             */
            // @ts-ignore
            getIndex(): number /*int*/
            /**
             * Indicates whether the value truncated was a parameter value or
             * a column value.
             * @return <code>true</code> if the value truncated was a parameter;
             *          <code>false</code> if it was a column value
             */
            // @ts-ignore
            getParameter(): boolean
            /**
             * Indicates whether or not the value was truncated on a read.
             * @return <code>true</code> if the value was truncated when read from
             *          the database; <code>false</code> if the data was truncated on a write
             */
            // @ts-ignore
            getRead(): boolean
            /**
             * Gets the number of bytes of data that should have been transferred.
             * This number may be approximate if data conversions were being
             * performed.  The value may be <code>-1</code> if the size is unknown.
             * @return the number of bytes of data that should have been transferred
             */
            // @ts-ignore
            getDataSize(): number /*int*/
            /**
             * Gets the number of bytes of data actually transferred.
             * The value may be <code>-1</code> if the size is unknown.
             * @return the number of bytes of data actually transferred
             */
            // @ts-ignore
            getTransferSize(): number /*int*/
        }
    }
}
