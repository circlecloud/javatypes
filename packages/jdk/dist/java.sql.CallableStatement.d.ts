declare namespace java {
    namespace sql {
        /**
         * The interface used to execute SQL stored procedures.  The JDBC API
         * provides a stored procedure SQL escape syntax that allows stored procedures
         * to be called in a standard way for all RDBMSs. This escape syntax has one
         * form that includes a result parameter and one that does not. If used, the result
         * parameter must be registered as an OUT parameter. The other parameters
         * can be used for input, output or both. Parameters are referred to
         * sequentially, by number, with the first parameter being 1.
         * <PRE>
         * {?= call &lt;procedure-name&gt;[(&lt;arg1&gt;,&lt;arg2&gt;, ...)]}
         * {call &lt;procedure-name&gt;[(&lt;arg1&gt;,&lt;arg2&gt;, ...)]}
         * </PRE>
         * <P>
         * IN parameter values are set using the <code>set</code> methods inherited from
         * {@link PreparedStatement}.  The type of all OUT parameters must be
         * registered prior to executing the stored procedure; their values
         * are retrieved after execution via the <code>get</code> methods provided here.
         * <P>
         * A <code>CallableStatement</code> can return one {@link ResultSet} object or
         * multiple <code>ResultSet</code> objects.  Multiple
         * <code>ResultSet</code> objects are handled using operations
         * inherited from {@link Statement}.
         * <P>
         * For maximum portability, a call's <code>ResultSet</code> objects and
         * update counts should be processed prior to getting the values of output
         * parameters.
         * @see Connection#prepareCall
         * @see ResultSet
         */
        // @ts-ignore
        interface CallableStatement extends java.sql.PreparedStatement {
            /**
             * Registers the OUT parameter in ordinal position
             * <code>parameterIndex</code> to the JDBC type
             * <code>sqlType</code>.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by <code>sqlType</code> for an OUT
             * parameter determines the Java type that must be used
             * in the <code>get</code> method to read the value of that parameter.
             * <p>
             * If the JDBC type expected to be returned to this output parameter
             * is specific to this particular database, <code>sqlType</code>
             * should be <code>java.sql.Types.OTHER</code>.  The method
             * {@link #getObject} retrieves the value.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *         and so on
             * @param sqlType the JDBC type code defined by <code>java.sql.Types</code>.
             *         If the parameter is of JDBC type <code>NUMERIC</code>
             *         or <code>DECIMAL</code>, the version of
             *         <code>registerOutParameter</code> that accepts a scale value
             *         should be used.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if <code>sqlType</code> is
             *  a <code>ARRAY</code>, <code>BLOB</code>, <code>CLOB</code>,
             *  <code>DATALINK</code>, <code>JAVA_OBJECT</code>, <code>NCHAR</code>,
             *  <code>NCLOB</code>, <code>NVARCHAR</code>, <code>LONGNVARCHAR</code>,
             *   <code>REF</code>, <code>ROWID</code>, <code>SQLXML</code>
             *  or  <code>STRUCT</code> data type and the JDBC driver does not support
             *  this data type
             * @see Types
             */
            // @ts-ignore
            registerOutParameter(parameterIndex: number /*int*/, sqlType: number /*int*/): void
            /**
             * Registers the parameter in ordinal position
             * <code>parameterIndex</code> to be of JDBC type
             * <code>sqlType</code>. All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by <code>sqlType</code> for an OUT
             * parameter determines the Java type that must be used
             * in the <code>get</code> method to read the value of that parameter.
             * <p>
             * This version of <code>registerOutParameter</code> should be
             * used when the parameter is of JDBC type <code>NUMERIC</code>
             * or <code>DECIMAL</code>.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @param sqlType the SQL type code defined by <code>java.sql.Types</code>.
             * @param scale the desired number of digits to the right of the
             *  decimal point.  It must be greater than or equal to zero.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if <code>sqlType</code> is
             *  a <code>ARRAY</code>, <code>BLOB</code>, <code>CLOB</code>,
             *  <code>DATALINK</code>, <code>JAVA_OBJECT</code>, <code>NCHAR</code>,
             *  <code>NCLOB</code>, <code>NVARCHAR</code>, <code>LONGNVARCHAR</code>,
             *   <code>REF</code>, <code>ROWID</code>, <code>SQLXML</code>
             *  or  <code>STRUCT</code> data type and the JDBC driver does not support
             *  this data type
             * @see Types
             */
            // @ts-ignore
            registerOutParameter(parameterIndex: number /*int*/, sqlType: number /*int*/, scale: number /*int*/): void
            /**
             * Retrieves whether the last OUT parameter read had the value of
             * SQL <code>NULL</code>.  Note that this method should be called only after
             * calling a getter method; otherwise, there is no value to use in
             * determining whether it is <code>null</code> or not.
             * @return <code>true</code> if the last parameter read was SQL
             *  <code>NULL</code>; <code>false</code> otherwise
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             */
            // @ts-ignore
            wasNull(): boolean
            /**
             * Retrieves the value of the designated JDBC <code>CHAR</code>,
             * <code>VARCHAR</code>, or <code>LONGVARCHAR</code> parameter as a
             * <code>String</code> in the Java programming language.
             * <p>
             * For the fixed-length type JDBC <code>CHAR</code>,
             * the <code>String</code> object
             * returned has exactly the same value the SQL
             * <code>CHAR</code> value had in the
             * database, including any padding added by the database.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @return the parameter value. If the value is SQL <code>NULL</code>,
             *          the result
             *          is <code>null</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setString
             */
            // @ts-ignore
            getString(parameterIndex: number /*int*/): string
            /**
             * Retrieves the value of the designated JDBC <code>BIT</code>
             * or <code>BOOLEAN</code> parameter as a
             * <code>boolean</code> in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *         and so on
             * @return the parameter value.  If the value is SQL <code>NULL</code>,
             *          the result is <code>false</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setBoolean
             */
            // @ts-ignore
            getBoolean(parameterIndex: number /*int*/): boolean
            /**
             * Retrieves the value of the designated JDBC <code>TINYINT</code> parameter
             * as a <code>byte</code> in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *  is <code>0</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setByte
             */
            // @ts-ignore
            getByte(parameterIndex: number /*int*/): number /*byte*/
            /**
             * Retrieves the value of the designated JDBC <code>SMALLINT</code> parameter
             * as a <code>short</code> in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *  is <code>0</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setShort
             */
            // @ts-ignore
            getShort(parameterIndex: number /*int*/): number /*short*/
            /**
             * Retrieves the value of the designated JDBC <code>INTEGER</code> parameter
             * as an <code>int</code> in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *  is <code>0</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setInt
             */
            // @ts-ignore
            getInt(parameterIndex: number /*int*/): number /*int*/
            /**
             * Retrieves the value of the designated JDBC <code>BIGINT</code> parameter
             * as a <code>long</code> in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *  is <code>0</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setLong
             */
            // @ts-ignore
            getLong(parameterIndex: number /*int*/): number /*long*/
            /**
             * Retrieves the value of the designated JDBC <code>FLOAT</code> parameter
             * as a <code>float</code> in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *         and so on
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *          is <code>0</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setFloat
             */
            // @ts-ignore
            getFloat(parameterIndex: number /*int*/): number /*float*/
            /**
             * Retrieves the value of the designated JDBC <code>DOUBLE</code> parameter as a <code>double</code>
             * in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *         and so on
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *          is <code>0</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setDouble
             */
            // @ts-ignore
            getDouble(parameterIndex: number /*int*/): number /*double*/
            /**
             * Retrieves the value of the designated JDBC <code>NUMERIC</code> parameter as a
             * <code>java.math.BigDecimal</code> object with <i>scale</i> digits to
             * the right of the decimal point.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *         and so on
             * @param scale the number of digits to the right of the decimal point
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *          is <code>null</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @deprecated use <code>getBigDecimal(int parameterIndex)</code>
             *              or <code>getBigDecimal(String parameterName)</code>
             * @see #setBigDecimal
             */
            // @ts-ignore
            getBigDecimal(parameterIndex: number /*int*/, scale: number /*int*/): java.math.BigDecimal
            /**
             * Retrieves the value of the designated JDBC <code>BINARY</code> or
             * <code>VARBINARY</code> parameter as an array of <code>byte</code>
             * values in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *         and so on
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *          is <code>null</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setBytes
             */
            // @ts-ignore
            getBytes(parameterIndex: number /*int*/): number /*byte*/[]
            /**
             * Retrieves the value of the designated JDBC <code>DATE</code> parameter as a
             * <code>java.sql.Date</code> object.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *         and so on
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *          is <code>null</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setDate
             */
            // @ts-ignore
            getDate(parameterIndex: number /*int*/): java.sql.Date
            /**
             * Retrieves the value of the designated JDBC <code>TIME</code> parameter as a
             * <code>java.sql.Time</code> object.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *         and so on
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *          is <code>null</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setTime
             */
            // @ts-ignore
            getTime(parameterIndex: number /*int*/): java.sql.Time
            /**
             * Retrieves the value of the designated JDBC <code>TIMESTAMP</code> parameter as a
             * <code>java.sql.Timestamp</code> object.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *         and so on
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *          is <code>null</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setTimestamp
             */
            // @ts-ignore
            getTimestamp(parameterIndex: number /*int*/): java.sql.Timestamp
            /**
             * Retrieves the value of the designated parameter as an <code>Object</code>
             * in the Java programming language. If the value is an SQL <code>NULL</code>,
             * the driver returns a Java <code>null</code>.
             * <p>
             * This method returns a Java object whose type corresponds to the JDBC
             * type that was registered for this parameter using the method
             * <code>registerOutParameter</code>.  By registering the target JDBC
             * type as <code>java.sql.Types.OTHER</code>, this method can be used
             * to read database-specific abstract data types.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *         and so on
             * @return A <code>java.lang.Object</code> holding the OUT parameter value
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see Types
             * @see #setObject
             */
            // @ts-ignore
            getObject(parameterIndex: number /*int*/): any
            /**
             * Retrieves the value of the designated JDBC <code>NUMERIC</code> parameter as a
             * <code>java.math.BigDecimal</code> object with as many digits to the
             * right of the decimal point as the value contains.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @return the parameter value in full precision.  If the value is
             *  SQL <code>NULL</code>, the result is <code>null</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setBigDecimal
             * @since 1.2
             */
            // @ts-ignore
            getBigDecimal(parameterIndex: number /*int*/): java.math.BigDecimal
            /**
             * Returns an object representing the value of OUT parameter
             * <code>parameterIndex</code> and uses <code>map</code> for the custom
             * mapping of the parameter value.
             * <p>
             * This method returns a Java object whose type corresponds to the
             * JDBC type that was registered for this parameter using the method
             * <code>registerOutParameter</code>.  By registering the target
             * JDBC type as <code>java.sql.Types.OTHER</code>, this method can
             * be used to read database-specific abstract data types.
             * @param parameterIndex the first parameter is 1, the second is 2, and so on
             * @param map the mapping from SQL type names to Java classes
             * @return a <code>java.lang.Object</code> holding the OUT parameter value
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setObject
             * @since 1.2
             */
            // @ts-ignore
            getObject(parameterIndex: number /*int*/, map: java.util.Map<java.lang.String | string, java.lang.Class<any>>): any
            /**
             * Retrieves the value of the designated JDBC <code>REF(&lt;structured-type&gt;)</code>
             * parameter as a {@link java.sql.Ref} object in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @return the parameter value as a <code>Ref</code> object in the
             *  Java programming language.  If the value was SQL <code>NULL</code>, the value
             *  <code>null</code> is returned.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            getRef(parameterIndex: number /*int*/): java.sql.Ref
            /**
             * Retrieves the value of the designated JDBC <code>BLOB</code> parameter as a
             * {@link java.sql.Blob} object in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2, and so on
             * @return the parameter value as a <code>Blob</code> object in the
             *  Java programming language.  If the value was SQL <code>NULL</code>, the value
             *  <code>null</code> is returned.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            getBlob(parameterIndex: number /*int*/): java.sql.Blob
            /**
             * Retrieves the value of the designated JDBC <code>CLOB</code> parameter as a
             * <code>java.sql.Clob</code> object in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2, and
             *  so on
             * @return the parameter value as a <code>Clob</code> object in the
             *  Java programming language.  If the value was SQL <code>NULL</code>, the
             *  value <code>null</code> is returned.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            getClob(parameterIndex: number /*int*/): java.sql.Clob
            /**
             * Retrieves the value of the designated JDBC <code>ARRAY</code> parameter as an
             * {@link java.sql.Array} object in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2, and
             *  so on
             * @return the parameter value as an <code>Array</code> object in
             *  the Java programming language.  If the value was SQL <code>NULL</code>, the
             *  value <code>null</code> is returned.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            getArray(parameterIndex: number /*int*/): java.sql.Array
            /**
             * Retrieves the value of the designated JDBC <code>DATE</code> parameter as a
             * <code>java.sql.Date</code> object, using
             * the given <code>Calendar</code> object
             * to construct the date.
             * With a <code>Calendar</code> object, the driver
             * can calculate the date taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @param cal the <code>Calendar</code> object the driver will use
             *             to construct the date
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *          is <code>null</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setDate
             * @since 1.2
             */
            // @ts-ignore
            getDate(parameterIndex: number /*int*/, cal: java.util.Calendar): java.sql.Date
            /**
             * Retrieves the value of the designated JDBC <code>TIME</code> parameter as a
             * <code>java.sql.Time</code> object, using
             * the given <code>Calendar</code> object
             * to construct the time.
             * With a <code>Calendar</code> object, the driver
             * can calculate the time taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @param cal the <code>Calendar</code> object the driver will use
             *             to construct the time
             * @return the parameter value; if the value is SQL <code>NULL</code>, the result
             *          is <code>null</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setTime
             * @since 1.2
             */
            // @ts-ignore
            getTime(parameterIndex: number /*int*/, cal: java.util.Calendar): java.sql.Time
            /**
             * Retrieves the value of the designated JDBC <code>TIMESTAMP</code> parameter as a
             * <code>java.sql.Timestamp</code> object, using
             * the given <code>Calendar</code> object to construct
             * the <code>Timestamp</code> object.
             * With a <code>Calendar</code> object, the driver
             * can calculate the timestamp taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @param cal the <code>Calendar</code> object the driver will use
             *             to construct the timestamp
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *          is <code>null</code>.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #setTimestamp
             * @since 1.2
             */
            // @ts-ignore
            getTimestamp(parameterIndex: number /*int*/, cal: java.util.Calendar): java.sql.Timestamp
            /**
             * Registers the designated output parameter.
             * This version of
             * the method <code>registerOutParameter</code>
             * should be used for a user-defined or <code>REF</code> output parameter.  Examples
             * of user-defined types include: <code>STRUCT</code>, <code>DISTINCT</code>,
             * <code>JAVA_OBJECT</code>, and named array types.
             * <p>
             * All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>  For a user-defined parameter, the fully-qualified SQL
             * type name of the parameter should also be given, while a <code>REF</code>
             * parameter requires that the fully-qualified type name of the
             * referenced type be given.  A JDBC driver that does not need the
             * type code and type name information may ignore it.   To be portable,
             * however, applications should always provide these values for
             * user-defined and <code>REF</code> parameters.
             * Although it is intended for user-defined and <code>REF</code> parameters,
             * this method may be used to register a parameter of any JDBC type.
             * If the parameter does not have a user-defined or <code>REF</code> type, the
             * <i>typeName</i> parameter is ignored.
             * <P><B>Note:</B> When reading the value of an out parameter, you
             * must use the getter method whose Java type corresponds to the
             * parameter's registered SQL type.
             * @param parameterIndex the first parameter is 1, the second is 2,...
             * @param sqlType a value from {#link java.sql.Types}
             * @param typeName the fully-qualified name of an SQL structured type
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if <code>sqlType</code> is
             *  a <code>ARRAY</code>, <code>BLOB</code>, <code>CLOB</code>,
             *  <code>DATALINK</code>, <code>JAVA_OBJECT</code>, <code>NCHAR</code>,
             *  <code>NCLOB</code>, <code>NVARCHAR</code>, <code>LONGNVARCHAR</code>,
             *   <code>REF</code>, <code>ROWID</code>, <code>SQLXML</code>
             *  or  <code>STRUCT</code> data type and the JDBC driver does not support
             *  this data type
             * @see Types
             * @since 1.2
             */
            // @ts-ignore
            registerOutParameter(parameterIndex: number /*int*/, sqlType: number /*int*/, typeName: java.lang.String | string): void
            /**
             * Registers the OUT parameter named
             * <code>parameterName</code> to the JDBC type
             * <code>sqlType</code>.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by <code>sqlType</code> for an OUT
             * parameter determines the Java type that must be used
             * in the <code>get</code> method to read the value of that parameter.
             * <p>
             * If the JDBC type expected to be returned to this output parameter
             * is specific to this particular database, <code>sqlType</code>
             * should be <code>java.sql.Types.OTHER</code>.  The method
             * {@link #getObject} retrieves the value.
             * @param parameterName the name of the parameter
             * @param sqlType the JDBC type code defined by <code>java.sql.Types</code>.
             *  If the parameter is of JDBC type <code>NUMERIC</code>
             *  or <code>DECIMAL</code>, the version of
             *  <code>registerOutParameter</code> that accepts a scale value
             *  should be used.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if <code>sqlType</code> is
             *  a <code>ARRAY</code>, <code>BLOB</code>, <code>CLOB</code>,
             *  <code>DATALINK</code>, <code>JAVA_OBJECT</code>, <code>NCHAR</code>,
             *  <code>NCLOB</code>, <code>NVARCHAR</code>, <code>LONGNVARCHAR</code>,
             *   <code>REF</code>, <code>ROWID</code>, <code>SQLXML</code>
             *  or  <code>STRUCT</code> data type and the JDBC driver does not support
             *  this data type or if the JDBC driver does not support
             *  this method
             * @since 1.4
             * @see Types
             */
            // @ts-ignore
            registerOutParameter(parameterName: java.lang.String | string, sqlType: number /*int*/): void
            /**
             * Registers the parameter named
             * <code>parameterName</code> to be of JDBC type
             * <code>sqlType</code>.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by <code>sqlType</code> for an OUT
             * parameter determines the Java type that must be used
             * in the <code>get</code> method to read the value of that parameter.
             * <p>
             * This version of <code>registerOutParameter</code> should be
             * used when the parameter is of JDBC type <code>NUMERIC</code>
             * or <code>DECIMAL</code>.
             * @param parameterName the name of the parameter
             * @param sqlType SQL type code defined by <code>java.sql.Types</code>.
             * @param scale the desired number of digits to the right of the
             *  decimal point.  It must be greater than or equal to zero.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if <code>sqlType</code> is
             *  a <code>ARRAY</code>, <code>BLOB</code>, <code>CLOB</code>,
             *  <code>DATALINK</code>, <code>JAVA_OBJECT</code>, <code>NCHAR</code>,
             *  <code>NCLOB</code>, <code>NVARCHAR</code>, <code>LONGNVARCHAR</code>,
             *   <code>REF</code>, <code>ROWID</code>, <code>SQLXML</code>
             *  or  <code>STRUCT</code> data type and the JDBC driver does not support
             *  this data type or if the JDBC driver does not support
             *  this method
             * @since 1.4
             * @see Types
             */
            // @ts-ignore
            registerOutParameter(parameterName: java.lang.String | string, sqlType: number /*int*/, scale: number /*int*/): void
            /**
             * Registers the designated output parameter.  This version of
             * the method <code>registerOutParameter</code>
             * should be used for a user-named or REF output parameter.  Examples
             * of user-named types include: STRUCT, DISTINCT, JAVA_OBJECT, and
             * named array types.
             * <p>
             * All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * For a user-named parameter the fully-qualified SQL
             * type name of the parameter should also be given, while a REF
             * parameter requires that the fully-qualified type name of the
             * referenced type be given.  A JDBC driver that does not need the
             * type code and type name information may ignore it.   To be portable,
             * however, applications should always provide these values for
             * user-named and REF parameters.
             * Although it is intended for user-named and REF parameters,
             * this method may be used to register a parameter of any JDBC type.
             * If the parameter does not have a user-named or REF type, the
             * typeName parameter is ignored.
             * <P><B>Note:</B> When reading the value of an out parameter, you
             * must use the <code>getXXX</code> method whose Java type XXX corresponds to the
             * parameter's registered SQL type.
             * @param parameterName the name of the parameter
             * @param sqlType a value from {#link java.sql.Types}
             * @param typeName the fully-qualified name of an SQL structured type
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if <code>sqlType</code> is
             *  a <code>ARRAY</code>, <code>BLOB</code>, <code>CLOB</code>,
             *  <code>DATALINK</code>, <code>JAVA_OBJECT</code>, <code>NCHAR</code>,
             *  <code>NCLOB</code>, <code>NVARCHAR</code>, <code>LONGNVARCHAR</code>,
             *   <code>REF</code>, <code>ROWID</code>, <code>SQLXML</code>
             *  or  <code>STRUCT</code> data type and the JDBC driver does not support
             *  this data type or if the JDBC driver does not support
             *  this method
             * @see Types
             * @since 1.4
             */
            // @ts-ignore
            registerOutParameter(parameterName: java.lang.String | string, sqlType: number /*int*/, typeName: java.lang.String | string): void
            /**
             * Retrieves the value of the designated JDBC <code>DATALINK</code> parameter as a
             * <code>java.net.URL</code> object.
             * @param parameterIndex the first parameter is 1, the second is 2,...
             * @return a <code>java.net.URL</code> object that represents the
             *          JDBC <code>DATALINK</code> value used as the designated
             *          parameter
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs,
             *  this method is called on a closed <code>CallableStatement</code>,
             *             or if the URL being returned is
             *             not a valid URL on the Java platform
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setURL
             * @since 1.4
             */
            // @ts-ignore
            getURL(parameterIndex: number /*int*/): java.net.URL
            /**
             * Sets the designated parameter to the given <code>java.net.URL</code> object.
             * The driver converts this to an SQL <code>DATALINK</code> value when
             * it sends it to the database.
             * @param parameterName the name of the parameter
             * @param val the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs;
             *  this method is called on a closed <code>CallableStatement</code>
             *             or if a URL is malformed
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getURL
             * @since 1.4
             */
            // @ts-ignore
            setURL(parameterName: java.lang.String | string, val: java.net.URL): void
            /**
             * Sets the designated parameter to SQL <code>NULL</code>.
             * <P><B>Note:</B> You must specify the parameter's SQL type.
             * @param parameterName the name of the parameter
             * @param sqlType the SQL type code defined in <code>java.sql.Types</code>
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setNull(parameterName: java.lang.String | string, sqlType: number /*int*/): void
            /**
             * Sets the designated parameter to the given Java <code>boolean</code> value.
             * The driver converts this
             * to an SQL <code>BIT</code> or <code>BOOLEAN</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #getBoolean
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setBoolean(parameterName: java.lang.String | string, x: boolean): void
            /**
             * Sets the designated parameter to the given Java <code>byte</code> value.
             * The driver converts this
             * to an SQL <code>TINYINT</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getByte
             * @since 1.4
             */
            // @ts-ignore
            setByte(parameterName: java.lang.String | string, x: number /*byte*/): void
            /**
             * Sets the designated parameter to the given Java <code>short</code> value.
             * The driver converts this
             * to an SQL <code>SMALLINT</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getShort
             * @since 1.4
             */
            // @ts-ignore
            setShort(parameterName: java.lang.String | string, x: number /*short*/): void
            /**
             * Sets the designated parameter to the given Java <code>int</code> value.
             * The driver converts this
             * to an SQL <code>INTEGER</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getInt
             * @since 1.4
             */
            // @ts-ignore
            setInt(parameterName: java.lang.String | string, x: number /*int*/): void
            /**
             * Sets the designated parameter to the given Java <code>long</code> value.
             * The driver converts this
             * to an SQL <code>BIGINT</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getLong
             * @since 1.4
             */
            // @ts-ignore
            setLong(parameterName: java.lang.String | string, x: number /*long*/): void
            /**
             * Sets the designated parameter to the given Java <code>float</code> value.
             * The driver converts this
             * to an SQL <code>FLOAT</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getFloat
             * @since 1.4
             */
            // @ts-ignore
            setFloat(parameterName: java.lang.String | string, x: number /*float*/): void
            /**
             * Sets the designated parameter to the given Java <code>double</code> value.
             * The driver converts this
             * to an SQL <code>DOUBLE</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getDouble
             * @since 1.4
             */
            // @ts-ignore
            setDouble(parameterName: java.lang.String | string, x: number /*double*/): void
            /**
             * Sets the designated parameter to the given
             * <code>java.math.BigDecimal</code> value.
             * The driver converts this to an SQL <code>NUMERIC</code> value when
             * it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getBigDecimal
             * @since 1.4
             */
            // @ts-ignore
            setBigDecimal(parameterName: java.lang.String | string, x: java.math.BigDecimal): void
            /**
             * Sets the designated parameter to the given Java <code>String</code> value.
             * The driver converts this
             * to an SQL <code>VARCHAR</code> or <code>LONGVARCHAR</code> value
             * (depending on the argument's
             * size relative to the driver's limits on <code>VARCHAR</code> values)
             * when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getString
             * @since 1.4
             */
            // @ts-ignore
            setString(parameterName: java.lang.String | string, x: java.lang.String | string): void
            /**
             * Sets the designated parameter to the given Java array of bytes.
             * The driver converts this to an SQL <code>VARBINARY</code> or
             * <code>LONGVARBINARY</code> (depending on the argument's size relative
             * to the driver's limits on <code>VARBINARY</code> values) when it sends
             * it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getBytes
             * @since 1.4
             */
            // @ts-ignore
            setBytes(parameterName: java.lang.String | string, x: number /*byte*/[]): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Date</code> value
             * using the default time zone of the virtual machine that is running
             * the application.
             * The driver converts this
             * to an SQL <code>DATE</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getDate
             * @since 1.4
             */
            // @ts-ignore
            setDate(parameterName: java.lang.String | string, x: java.sql.Date): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Time</code> value.
             * The driver converts this
             * to an SQL <code>TIME</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getTime
             * @since 1.4
             */
            // @ts-ignore
            setTime(parameterName: java.lang.String | string, x: java.sql.Time): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Timestamp</code> value.
             * The driver
             * converts this to an SQL <code>TIMESTAMP</code> value when it sends it to the
             * database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getTimestamp
             * @since 1.4
             */
            // @ts-ignore
            setTimestamp(parameterName: java.lang.String | string, x: java.sql.Timestamp): void
            /**
             * Sets the designated parameter to the given input stream, which will have
             * the specified number of bytes.
             * When a very large ASCII value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code>. Data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from ASCII to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * @param parameterName the name of the parameter
             * @param x the Java input stream that contains the ASCII parameter value
             * @param length the number of bytes in the stream
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setAsciiStream(parameterName: java.lang.String | string, x: java.io.InputStream, length: number /*int*/): void
            /**
             * Sets the designated parameter to the given input stream, which will have
             * the specified number of bytes.
             * When a very large binary value is input to a <code>LONGVARBINARY</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code> object. The data will be read from the stream
             * as needed until end-of-file is reached.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * @param parameterName the name of the parameter
             * @param x the java input stream which contains the binary parameter value
             * @param length the number of bytes in the stream
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setBinaryStream(parameterName: java.lang.String | string, x: java.io.InputStream, length: number /*int*/): void
            /**
             * Sets the value of the designated parameter with the given object.
             * <p>The given Java object will be converted to the given targetSqlType
             * before being sent to the database.
             * If the object has a custom mapping (is of a class implementing the
             * interface <code>SQLData</code>),
             * the JDBC driver should call the method <code>SQLData.writeSQL</code> to write it
             * to the SQL data stream.
             * If, on the other hand, the object is of a class implementing
             * <code>Ref</code>, <code>Blob</code>, <code>Clob</code>,  <code>NClob</code>,
             * <code>Struct</code>, <code>java.net.URL</code>,
             * or <code>Array</code>, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             * <P>
             * Note that this method may be used to pass datatabase-
             * specific abstract data types.
             * @param parameterName the name of the parameter
             * @param x the object containing the input parameter value
             * @param targetSqlType the SQL type (as defined in java.sql.Types) to be
             *  sent to the database. The scale argument may further qualify this type.
             * @param scale for java.sql.Types.DECIMAL or java.sql.Types.NUMERIC types,
             *           this is the number of digits after the decimal point.  For all other
             *           types, this value will be ignored.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if
             *  the JDBC driver does not support the specified targetSqlType
             * @see Types
             * @see #getObject
             * @since 1.4
             */
            // @ts-ignore
            setObject(parameterName: java.lang.String | string, x: java.lang.Object | any, targetSqlType: number /*int*/, scale: number /*int*/): void
            /**
             * Sets the value of the designated parameter with the given object.
             * This method is similar to {@link #setObject(String parameterName,
             * Object x, int targetSqlType, int scaleOrLength)},
             * except that it assumes a scale of zero.
             * @param parameterName the name of the parameter
             * @param x the object containing the input parameter value
             * @param targetSqlType the SQL type (as defined in java.sql.Types) to be
             *                       sent to the database
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if
             *  the JDBC driver does not support the specified targetSqlType
             * @see #getObject
             * @since 1.4
             */
            // @ts-ignore
            setObject(parameterName: java.lang.String | string, x: java.lang.Object | any, targetSqlType: number /*int*/): void
            /**
             * Sets the value of the designated parameter with the given object.
             * <p>The JDBC specification specifies a standard mapping from
             * Java <code>Object</code> types to SQL types.  The given argument
             * will be converted to the corresponding SQL type before being
             * sent to the database.
             * <p>Note that this method may be used to pass datatabase-
             * specific abstract data types, by using a driver-specific Java
             * type.
             * If the object is of a class implementing the interface <code>SQLData</code>,
             * the JDBC driver should call the method <code>SQLData.writeSQL</code>
             * to write it to the SQL data stream.
             * If, on the other hand, the object is of a class implementing
             * <code>Ref</code>, <code>Blob</code>, <code>Clob</code>,  <code>NClob</code>,
             * <code>Struct</code>, <code>java.net.URL</code>,
             * or <code>Array</code>, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             * <P>
             * This method throws an exception if there is an ambiguity, for example, if the
             * object is of a class implementing more than one of the interfaces named above.
             * <p>
             * <b>Note:</b> Not all databases allow for a non-typed Null to be sent to
             * the backend. For maximum portability, the <code>setNull</code> or the
             * <code>setObject(String parameterName, Object x, int sqlType)</code>
             * method should be used
             * instead of <code>setObject(String parameterName, Object x)</code>.
             * <p>
             * @param parameterName the name of the parameter
             * @param x the object containing the input parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs,
             *  this method is called on a closed <code>CallableStatement</code> or if the given
             *             <code>Object</code> parameter is ambiguous
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getObject
             * @since 1.4
             */
            // @ts-ignore
            setObject(parameterName: java.lang.String | string, x: java.lang.Object | any): void
            /**
             * Sets the designated parameter to the given <code>Reader</code>
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.Reader</code> object. The data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * @param parameterName the name of the parameter
             * @param reader the <code>java.io.Reader</code> object that
             *         contains the UNICODE data used as the designated parameter
             * @param length the number of characters in the stream
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setCharacterStream(parameterName: java.lang.String | string, reader: java.io.Reader, length: number /*int*/): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Date</code> value,
             * using the given <code>Calendar</code> object.  The driver uses
             * the <code>Calendar</code> object to construct an SQL <code>DATE</code> value,
             * which the driver then sends to the database.  With a
             * a <code>Calendar</code> object, the driver can calculate the date
             * taking into account a custom timezone.  If no
             * <code>Calendar</code> object is specified, the driver uses the default
             * timezone, which is that of the virtual machine running the application.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @param cal the <code>Calendar</code> object the driver will use
             *             to construct the date
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getDate
             * @since 1.4
             */
            // @ts-ignore
            setDate(parameterName: java.lang.String | string, x: java.sql.Date, cal: java.util.Calendar): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Time</code> value,
             * using the given <code>Calendar</code> object.  The driver uses
             * the <code>Calendar</code> object to construct an SQL <code>TIME</code> value,
             * which the driver then sends to the database.  With a
             * a <code>Calendar</code> object, the driver can calculate the time
             * taking into account a custom timezone.  If no
             * <code>Calendar</code> object is specified, the driver uses the default
             * timezone, which is that of the virtual machine running the application.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @param cal the <code>Calendar</code> object the driver will use
             *             to construct the time
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getTime
             * @since 1.4
             */
            // @ts-ignore
            setTime(parameterName: java.lang.String | string, x: java.sql.Time, cal: java.util.Calendar): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Timestamp</code> value,
             * using the given <code>Calendar</code> object.  The driver uses
             * the <code>Calendar</code> object to construct an SQL <code>TIMESTAMP</code> value,
             * which the driver then sends to the database.  With a
             * a <code>Calendar</code> object, the driver can calculate the timestamp
             * taking into account a custom timezone.  If no
             * <code>Calendar</code> object is specified, the driver uses the default
             * timezone, which is that of the virtual machine running the application.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @param cal the <code>Calendar</code> object the driver will use
             *             to construct the timestamp
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getTimestamp
             * @since 1.4
             */
            // @ts-ignore
            setTimestamp(parameterName: java.lang.String | string, x: java.sql.Timestamp, cal: java.util.Calendar): void
            /**
             * Sets the designated parameter to SQL <code>NULL</code>.
             * This version of the method <code>setNull</code> should
             * be used for user-defined types and REF type parameters.  Examples
             * of user-defined types include: STRUCT, DISTINCT, JAVA_OBJECT, and
             * named array types.
             * <P><B>Note:</B> To be portable, applications must give the
             * SQL type code and the fully-qualified SQL type name when specifying
             * a NULL user-defined or REF parameter.  In the case of a user-defined type
             * the name is the type name of the parameter itself.  For a REF
             * parameter, the name is the type name of the referenced type.
             * <p>
             * Although it is intended for user-defined and Ref parameters,
             * this method may be used to set a null parameter of any JDBC type.
             * If the parameter does not have a user-defined or REF type, the given
             * typeName is ignored.
             * @param parameterName the name of the parameter
             * @param sqlType a value from <code>java.sql.Types</code>
             * @param typeName the fully-qualified name of an SQL user-defined type;
             *         ignored if the parameter is not a user-defined type or
             *         SQL <code>REF</code> value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setNull(parameterName: java.lang.String | string, sqlType: number /*int*/, typeName: java.lang.String | string): void
            /**
             * Retrieves the value of a JDBC <code>CHAR</code>, <code>VARCHAR</code>,
             * or <code>LONGVARCHAR</code> parameter as a <code>String</code> in
             * the Java programming language.
             * <p>
             * For the fixed-length type JDBC <code>CHAR</code>,
             * the <code>String</code> object
             * returned has exactly the same value the SQL
             * <code>CHAR</code> value had in the
             * database, including any padding added by the database.
             * @param parameterName the name of the parameter
             * @return the parameter value. If the value is SQL <code>NULL</code>, the result
             *  is <code>null</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setString
             * @since 1.4
             */
            // @ts-ignore
            getString(parameterName: java.lang.String | string): string
            /**
             * Retrieves the value of a JDBC <code>BIT</code> or <code>BOOLEAN</code>
             * parameter as a
             * <code>boolean</code> in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *  is <code>false</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setBoolean
             * @since 1.4
             */
            // @ts-ignore
            getBoolean(parameterName: java.lang.String | string): boolean
            /**
             * Retrieves the value of a JDBC <code>TINYINT</code> parameter as a <code>byte</code>
             * in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *  is <code>0</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setByte
             * @since 1.4
             */
            // @ts-ignore
            getByte(parameterName: java.lang.String | string): number /*byte*/
            /**
             * Retrieves the value of a JDBC <code>SMALLINT</code> parameter as a <code>short</code>
             * in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *  is <code>0</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setShort
             * @since 1.4
             */
            // @ts-ignore
            getShort(parameterName: java.lang.String | string): number /*short*/
            /**
             * Retrieves the value of a JDBC <code>INTEGER</code> parameter as an <code>int</code>
             * in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value.  If the value is SQL <code>NULL</code>,
             *          the result is <code>0</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setInt
             * @since 1.4
             */
            // @ts-ignore
            getInt(parameterName: java.lang.String | string): number /*int*/
            /**
             * Retrieves the value of a JDBC <code>BIGINT</code> parameter as a <code>long</code>
             * in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value.  If the value is SQL <code>NULL</code>,
             *          the result is <code>0</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setLong
             * @since 1.4
             */
            // @ts-ignore
            getLong(parameterName: java.lang.String | string): number /*long*/
            /**
             * Retrieves the value of a JDBC <code>FLOAT</code> parameter as a <code>float</code>
             * in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value.  If the value is SQL <code>NULL</code>,
             *          the result is <code>0</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setFloat
             * @since 1.4
             */
            // @ts-ignore
            getFloat(parameterName: java.lang.String | string): number /*float*/
            /**
             * Retrieves the value of a JDBC <code>DOUBLE</code> parameter as a <code>double</code>
             * in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value.  If the value is SQL <code>NULL</code>,
             *          the result is <code>0</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setDouble
             * @since 1.4
             */
            // @ts-ignore
            getDouble(parameterName: java.lang.String | string): number /*double*/
            /**
             * Retrieves the value of a JDBC <code>BINARY</code> or <code>VARBINARY</code>
             * parameter as an array of <code>byte</code> values in the Java
             * programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result is
             *   <code>null</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setBytes
             * @since 1.4
             */
            // @ts-ignore
            getBytes(parameterName: java.lang.String | string): number /*byte*/[]
            /**
             * Retrieves the value of a JDBC <code>DATE</code> parameter as a
             * <code>java.sql.Date</code> object.
             * @param parameterName the name of the parameter
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *  is <code>null</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setDate
             * @since 1.4
             */
            // @ts-ignore
            getDate(parameterName: java.lang.String | string): java.sql.Date
            /**
             * Retrieves the value of a JDBC <code>TIME</code> parameter as a
             * <code>java.sql.Time</code> object.
             * @param parameterName the name of the parameter
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *  is <code>null</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setTime
             * @since 1.4
             */
            // @ts-ignore
            getTime(parameterName: java.lang.String | string): java.sql.Time
            /**
             * Retrieves the value of a JDBC <code>TIMESTAMP</code> parameter as a
             * <code>java.sql.Timestamp</code> object.
             * @param parameterName the name of the parameter
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result
             *  is <code>null</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setTimestamp
             * @since 1.4
             */
            // @ts-ignore
            getTimestamp(parameterName: java.lang.String | string): java.sql.Timestamp
            /**
             * Retrieves the value of a parameter as an <code>Object</code> in the Java
             * programming language. If the value is an SQL <code>NULL</code>, the
             * driver returns a Java <code>null</code>.
             * <p>
             * This method returns a Java object whose type corresponds to the JDBC
             * type that was registered for this parameter using the method
             * <code>registerOutParameter</code>.  By registering the target JDBC
             * type as <code>java.sql.Types.OTHER</code>, this method can be used
             * to read database-specific abstract data types.
             * @param parameterName the name of the parameter
             * @return A <code>java.lang.Object</code> holding the OUT parameter value.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see Types
             * @see #setObject
             * @since 1.4
             */
            // @ts-ignore
            getObject(parameterName: java.lang.String | string): any
            /**
             * Retrieves the value of a JDBC <code>NUMERIC</code> parameter as a
             * <code>java.math.BigDecimal</code> object with as many digits to the
             * right of the decimal point as the value contains.
             * @param parameterName the name of the parameter
             * @return the parameter value in full precision.  If the value is
             *  SQL <code>NULL</code>, the result is <code>null</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter;  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setBigDecimal
             * @since 1.4
             */
            // @ts-ignore
            getBigDecimal(parameterName: java.lang.String | string): java.math.BigDecimal
            /**
             * Returns an object representing the value of OUT parameter
             * <code>parameterName</code> and uses <code>map</code> for the custom
             * mapping of the parameter value.
             * <p>
             * This method returns a Java object whose type corresponds to the
             * JDBC type that was registered for this parameter using the method
             * <code>registerOutParameter</code>.  By registering the target
             * JDBC type as <code>java.sql.Types.OTHER</code>, this method can
             * be used to read database-specific abstract data types.
             * @param parameterName the name of the parameter
             * @param map the mapping from SQL type names to Java classes
             * @return a <code>java.lang.Object</code> holding the OUT parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setObject
             * @since 1.4
             */
            // @ts-ignore
            getObject(parameterName: java.lang.String | string, map: java.util.Map<java.lang.String | string, java.lang.Class<any>>): any
            /**
             * Retrieves the value of a JDBC <code>REF(&lt;structured-type&gt;)</code>
             * parameter as a {@link java.sql.Ref} object in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value as a <code>Ref</code> object in the
             *          Java programming language.  If the value was SQL <code>NULL</code>,
             *          the value <code>null</code> is returned.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            getRef(parameterName: java.lang.String | string): java.sql.Ref
            /**
             * Retrieves the value of a JDBC <code>BLOB</code> parameter as a
             * {@link java.sql.Blob} object in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value as a <code>Blob</code> object in the
             *          Java programming language.  If the value was SQL <code>NULL</code>,
             *          the value <code>null</code> is returned.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            getBlob(parameterName: java.lang.String | string): java.sql.Blob
            /**
             * Retrieves the value of a JDBC <code>CLOB</code> parameter as a
             * <code>java.sql.Clob</code> object in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value as a <code>Clob</code> object in the
             *          Java programming language.  If the value was SQL <code>NULL</code>,
             *          the value <code>null</code> is returned.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            getClob(parameterName: java.lang.String | string): java.sql.Clob
            /**
             * Retrieves the value of a JDBC <code>ARRAY</code> parameter as an
             * {@link java.sql.Array} object in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value as an <code>Array</code> object in
             *          Java programming language.  If the value was SQL <code>NULL</code>,
             *          the value <code>null</code> is returned.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            getArray(parameterName: java.lang.String | string): java.sql.Array
            /**
             * Retrieves the value of a JDBC <code>DATE</code> parameter as a
             * <code>java.sql.Date</code> object, using
             * the given <code>Calendar</code> object
             * to construct the date.
             * With a <code>Calendar</code> object, the driver
             * can calculate the date taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             * @param parameterName the name of the parameter
             * @param cal the <code>Calendar</code> object the driver will use
             *             to construct the date
             * @return the parameter value.  If the value is SQL <code>NULL</code>,
             *  the result is <code>null</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setDate
             * @since 1.4
             */
            // @ts-ignore
            getDate(parameterName: java.lang.String | string, cal: java.util.Calendar): java.sql.Date
            /**
             * Retrieves the value of a JDBC <code>TIME</code> parameter as a
             * <code>java.sql.Time</code> object, using
             * the given <code>Calendar</code> object
             * to construct the time.
             * With a <code>Calendar</code> object, the driver
             * can calculate the time taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             * @param parameterName the name of the parameter
             * @param cal the <code>Calendar</code> object the driver will use
             *             to construct the time
             * @return the parameter value; if the value is SQL <code>NULL</code>, the result is
             *  <code>null</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setTime
             * @since 1.4
             */
            // @ts-ignore
            getTime(parameterName: java.lang.String | string, cal: java.util.Calendar): java.sql.Time
            /**
             * Retrieves the value of a JDBC <code>TIMESTAMP</code> parameter as a
             * <code>java.sql.Timestamp</code> object, using
             * the given <code>Calendar</code> object to construct
             * the <code>Timestamp</code> object.
             * With a <code>Calendar</code> object, the driver
             * can calculate the timestamp taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             * @param parameterName the name of the parameter
             * @param cal the <code>Calendar</code> object the driver will use
             *             to construct the timestamp
             * @return the parameter value.  If the value is SQL <code>NULL</code>, the result is
             *  <code>null</code>.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setTimestamp
             * @since 1.4
             */
            // @ts-ignore
            getTimestamp(parameterName: java.lang.String | string, cal: java.util.Calendar): java.sql.Timestamp
            /**
             * Retrieves the value of a JDBC <code>DATALINK</code> parameter as a
             * <code>java.net.URL</code> object.
             * @param parameterName the name of the parameter
             * @return the parameter value as a <code>java.net.URL</code> object in the
             *  Java programming language.  If the value was SQL <code>NULL</code>, the
             *  value <code>null</code> is returned.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs,
             *  this method is called on a closed <code>CallableStatement</code>,
             *             or if there is a problem with the URL
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #setURL
             * @since 1.4
             */
            // @ts-ignore
            getURL(parameterName: java.lang.String | string): java.net.URL
            /**
             * Retrieves the value of the designated JDBC <code>ROWID</code> parameter as a
             * <code>java.sql.RowId</code> object.
             * @param parameterIndex the first parameter is 1, the second is 2,...
             * @return a <code>RowId</code> object that represents the JDBC <code>ROWID</code>
             *      value is used as the designated parameter. If the parameter contains
             *  a SQL <code>NULL</code>, then a <code>null</code> value is returned.
             * @throws SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            getRowId(parameterIndex: number /*int*/): java.sql.RowId
            /**
             * Retrieves the value of the designated JDBC <code>ROWID</code> parameter as a
             * <code>java.sql.RowId</code> object.
             * @param parameterName the name of the parameter
             * @return a <code>RowId</code> object that represents the JDBC <code>ROWID</code>
             *      value is used as the designated parameter. If the parameter contains
             *  a SQL <code>NULL</code>, then a <code>null</code> value is returned.
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            getRowId(parameterName: java.lang.String | string): java.sql.RowId
            /**
             * Sets the designated parameter to the given <code>java.sql.RowId</code> object. The
             * driver converts this to a SQL <code>ROWID</code> when it sends it to the
             * database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setRowId(parameterName: java.lang.String | string, x: java.sql.RowId): void
            /**
             * Sets the designated parameter to the given <code>String</code> object.
             * The driver converts this to a SQL <code>NCHAR</code> or
             * <code>NVARCHAR</code> or <code>LONGNVARCHAR</code>
             * @param parameterName the name of the parameter to be set
             * @param value the parameter value
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setNString(parameterName: java.lang.String | string, value: java.lang.String | string): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object. The
             * <code>Reader</code> reads the data till end-of-file is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * @param parameterName the name of the parameter to be set
             * @param value the parameter value
             * @param length the number of characters in the parameter data.
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setNCharacterStream(parameterName: java.lang.String | string, value: java.io.Reader, length: number /*long*/): void
            /**
             * Sets the designated parameter to a <code>java.sql.NClob</code> object. The object
             * implements the <code>java.sql.NClob</code> interface. This <code>NClob</code>
             * object maps to a SQL <code>NCLOB</code>.
             * @param parameterName the name of the parameter to be set
             * @param value the parameter value
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setNClob(parameterName: java.lang.String | string, value: java.sql.NClob): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object.  The <code>reader</code> must contain  the number
             * of characters specified by length otherwise a <code>SQLException</code> will be
             * generated when the <code>CallableStatement</code> is executed.
             * This method differs from the <code>setCharacterStream (int, Reader, int)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>CLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a <code>LONGVARCHAR</code> or a <code>CLOB</code>
             * @param parameterName the name of the parameter to be set
             * @param reader An object that contains the data to set the parameter value to.
             * @param length the number of characters in the parameter data.
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if the length specified is less than zero;
             *  a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setClob(parameterName: java.lang.String | string, reader: java.io.Reader, length: number /*long*/): void
            /**
             * Sets the designated parameter to a <code>InputStream</code> object.  The <code>inputstream</code> must contain  the number
             * of characters specified by length, otherwise a <code>SQLException</code> will be
             * generated when the <code>CallableStatement</code> is executed.
             * This method differs from the <code>setBinaryStream (int, InputStream, int)</code>
             * method because it informs the driver that the parameter value should be
             * sent to the server as a <code>BLOB</code>.  When the <code>setBinaryStream</code> method is used,
             * the driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a <code>LONGVARBINARY</code> or a <code>BLOB</code>
             * @param parameterName the name of the parameter to be set
             *  the second is 2, ...
             * @param inputStream An object that contains the data to set the parameter
             *  value to.
             * @param length the number of bytes in the parameter data.
             * @throws SQLException  if parameterName does not correspond to a named
             *  parameter; if the length specified
             *  is less than zero; if the number of bytes in the inputstream does not match
             *  the specified length; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setBlob(parameterName: java.lang.String | string, inputStream: java.io.InputStream, length: number /*long*/): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object.  The <code>reader</code> must contain  the number
             * of characters specified by length otherwise a <code>SQLException</code> will be
             * generated when the <code>CallableStatement</code> is executed.
             * This method differs from the <code>setCharacterStream (int, Reader, int)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>NCLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a <code>LONGNVARCHAR</code> or a <code>NCLOB</code>
             * @param parameterName the name of the parameter to be set
             * @param reader An object that contains the data to set the parameter value to.
             * @param length the number of characters in the parameter data.
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if the length specified is less than zero;
             *  if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setNClob(parameterName: java.lang.String | string, reader: java.io.Reader, length: number /*long*/): void
            /**
             * Retrieves the value of the designated JDBC <code>NCLOB</code> parameter as a
             * <code>java.sql.NClob</code> object in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2, and
             *  so on
             * @return the parameter value as a <code>NClob</code> object in the
             *  Java programming language.  If the value was SQL <code>NULL</code>, the
             *  value <code>null</code> is returned.
             * @exception SQLException if the parameterIndex is not valid;
             *  if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            getNClob(parameterIndex: number /*int*/): java.sql.NClob
            /**
             * Retrieves the value of a JDBC <code>NCLOB</code> parameter as a
             * <code>java.sql.NClob</code> object in the Java programming language.
             * @param parameterName the name of the parameter
             * @return the parameter value as a <code>NClob</code> object in the
             *          Java programming language.  If the value was SQL <code>NULL</code>,
             *          the value <code>null</code> is returned.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            getNClob(parameterName: java.lang.String | string): java.sql.NClob
            /**
             * Sets the designated parameter to the given <code>java.sql.SQLXML</code> object. The driver converts this to an
             * <code>SQL XML</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param xmlObject a <code>SQLXML</code> object that maps an <code>SQL XML</code> value
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs;
             *  this method is called on a closed <code>CallableStatement</code> or
             *  the <code>java.xml.transform.Result</code>,
             *   <code>Writer</code> or <code>OutputStream</code> has not been closed for the <code>SQLXML</code> object
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setSQLXML(parameterName: java.lang.String | string, xmlObject: java.sql.SQLXML): void
            /**
             * Retrieves the value of the designated <code>SQL XML</code> parameter as a
             * <code>java.sql.SQLXML</code> object in the Java programming language.
             * @param parameterIndex index of the first parameter is 1, the second is 2, ...
             * @return a <code>SQLXML</code> object that maps an <code>SQL XML</code> value
             * @throws SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            getSQLXML(parameterIndex: number /*int*/): java.sql.SQLXML
            /**
             * Retrieves the value of the designated <code>SQL XML</code> parameter as a
             * <code>java.sql.SQLXML</code> object in the Java programming language.
             * @param parameterName the name of the parameter
             * @return a <code>SQLXML</code> object that maps an <code>SQL XML</code> value
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            getSQLXML(parameterName: java.lang.String | string): java.sql.SQLXML
            /**
             * Retrieves the value of the designated <code>NCHAR</code>,
             * <code>NVARCHAR</code>
             * or <code>LONGNVARCHAR</code> parameter as
             * a <code>String</code> in the Java programming language.
             * <p>
             * For the fixed-length type JDBC <code>NCHAR</code>,
             * the <code>String</code> object
             * returned has exactly the same value the SQL
             * <code>NCHAR</code> value had in the
             * database, including any padding added by the database.
             * @param parameterIndex index of the first parameter is 1, the second is 2, ...
             * @return a <code>String</code> object that maps an
             *  <code>NCHAR</code>, <code>NVARCHAR</code> or <code>LONGNVARCHAR</code> value
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             * @see #setNString
             */
            // @ts-ignore
            getNString(parameterIndex: number /*int*/): string
            /**
             * Retrieves the value of the designated <code>NCHAR</code>,
             * <code>NVARCHAR</code>
             * or <code>LONGNVARCHAR</code> parameter as
             * a <code>String</code> in the Java programming language.
             * <p>
             * For the fixed-length type JDBC <code>NCHAR</code>,
             * the <code>String</code> object
             * returned has exactly the same value the SQL
             * <code>NCHAR</code> value had in the
             * database, including any padding added by the database.
             * @param parameterName the name of the parameter
             * @return a <code>String</code> object that maps an
             *  <code>NCHAR</code>, <code>NVARCHAR</code> or <code>LONGNVARCHAR</code> value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             * @see #setNString
             */
            // @ts-ignore
            getNString(parameterName: java.lang.String | string): string
            /**
             * Retrieves the value of the designated parameter as a
             * <code>java.io.Reader</code> object in the Java programming language.
             * It is intended for use when
             * accessing  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> parameters.
             * @return a <code>java.io.Reader</code> object that contains the parameter
             *  value; if the value is SQL <code>NULL</code>, the value returned is
             *  <code>null</code> in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            getNCharacterStream(parameterIndex: number /*int*/): java.io.Reader
            /**
             * Retrieves the value of the designated parameter as a
             * <code>java.io.Reader</code> object in the Java programming language.
             * It is intended for use when
             * accessing  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> parameters.
             * @param parameterName the name of the parameter
             * @return a <code>java.io.Reader</code> object that contains the parameter
             *  value; if the value is SQL <code>NULL</code>, the value returned is
             *  <code>null</code> in the Java programming language
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            getNCharacterStream(parameterName: java.lang.String | string): java.io.Reader
            /**
             * Retrieves the value of the designated parameter as a
             * <code>java.io.Reader</code> object in the Java programming language.
             * @return a <code>java.io.Reader</code> object that contains the parameter
             *  value; if the value is SQL <code>NULL</code>, the value returned is
             *  <code>null</code> in the Java programming language.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @exception SQLException if the parameterIndex is not valid; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @since 1.6
             */
            // @ts-ignore
            getCharacterStream(parameterIndex: number /*int*/): java.io.Reader
            /**
             * Retrieves the value of the designated parameter as a
             * <code>java.io.Reader</code> object in the Java programming language.
             * @param parameterName the name of the parameter
             * @return a <code>java.io.Reader</code> object that contains the parameter
             *  value; if the value is SQL <code>NULL</code>, the value returned is
             *  <code>null</code> in the Java programming language
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            getCharacterStream(parameterName: java.lang.String | string): java.io.Reader
            /**
             * Sets the designated parameter to the given <code>java.sql.Blob</code> object.
             * The driver converts this to an SQL <code>BLOB</code> value when it
             * sends it to the database.
             * @param parameterName the name of the parameter
             * @param x a <code>Blob</code> object that maps an SQL <code>BLOB</code> value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setBlob(parameterName: java.lang.String | string, x: java.sql.Blob): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Clob</code> object.
             * The driver converts this to an SQL <code>CLOB</code> value when it
             * sends it to the database.
             * @param parameterName the name of the parameter
             * @param x a <code>Clob</code> object that maps an SQL <code>CLOB</code> value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setClob(parameterName: java.lang.String | string, x: java.sql.Clob): void
            /**
             * Sets the designated parameter to the given input stream, which will have
             * the specified number of bytes.
             * When a very large ASCII value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code>. Data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from ASCII to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * @param parameterName the name of the parameter
             * @param x the Java input stream that contains the ASCII parameter value
             * @param length the number of bytes in the stream
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setAsciiStream(parameterName: java.lang.String | string, x: java.io.InputStream, length: number /*long*/): void
            /**
             * Sets the designated parameter to the given input stream, which will have
             * the specified number of bytes.
             * When a very large binary value is input to a <code>LONGVARBINARY</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code> object. The data will be read from the stream
             * as needed until end-of-file is reached.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * @param parameterName the name of the parameter
             * @param x the java input stream which contains the binary parameter value
             * @param length the number of bytes in the stream
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setBinaryStream(parameterName: java.lang.String | string, x: java.io.InputStream, length: number /*long*/): void
            /**
             * Sets the designated parameter to the given <code>Reader</code>
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.Reader</code> object. The data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * @param parameterName the name of the parameter
             * @param reader the <code>java.io.Reader</code> object that
             *         contains the UNICODE data used as the designated parameter
             * @param length the number of characters in the stream
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setCharacterStream(parameterName: java.lang.String | string, reader: java.io.Reader, length: number /*long*/): void
            /**
             * Sets the designated parameter to the given input stream.
             * When a very large ASCII value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code>. Data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from ASCII to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setAsciiStream</code> which takes a length parameter.
             * @param parameterName the name of the parameter
             * @param x the Java input stream that contains the ASCII parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setAsciiStream(parameterName: java.lang.String | string, x: java.io.InputStream): void
            /**
             * Sets the designated parameter to the given input stream.
             * When a very large binary value is input to a <code>LONGVARBINARY</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code> object. The data will be read from the
             * stream as needed until end-of-file is reached.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setBinaryStream</code> which takes a length parameter.
             * @param parameterName the name of the parameter
             * @param x the java input stream which contains the binary parameter value
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setBinaryStream(parameterName: java.lang.String | string, x: java.io.InputStream): void
            /**
             * Sets the designated parameter to the given <code>Reader</code>
             * object.
             * When a very large UNICODE value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.Reader</code> object. The data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setCharacterStream</code> which takes a length parameter.
             * @param parameterName the name of the parameter
             * @param reader the <code>java.io.Reader</code> object that contains the
             *         Unicode data
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setCharacterStream(parameterName: java.lang.String | string, reader: java.io.Reader): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object. The
             * <code>Reader</code> reads the data till end-of-file is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setNCharacterStream</code> which takes a length parameter.
             * @param parameterName the name of the parameter
             * @param value the parameter value
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur; if a database access error occurs; or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setNCharacterStream(parameterName: java.lang.String | string, value: java.io.Reader): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object.
             * This method differs from the <code>setCharacterStream (int, Reader)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>CLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a <code>LONGVARCHAR</code> or a <code>CLOB</code>
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setClob</code> which takes a length parameter.
             * @param parameterName the name of the parameter
             * @param reader An object that contains the data to set the parameter value to.
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or this method is called on
             *  a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setClob(parameterName: java.lang.String | string, reader: java.io.Reader): void
            /**
             * Sets the designated parameter to a <code>InputStream</code> object.
             * This method differs from the <code>setBinaryStream (int, InputStream)</code>
             * method because it informs the driver that the parameter value should be
             * sent to the server as a <code>BLOB</code>.  When the <code>setBinaryStream</code> method is used,
             * the driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a <code>LONGVARBINARY</code> or a <code>BLOB</code>
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setBlob</code> which takes a length parameter.
             * @param parameterName the name of the parameter
             * @param inputStream An object that contains the data to set the parameter
             *  value to.
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setBlob(parameterName: java.lang.String | string, inputStream: java.io.InputStream): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object.
             * This method differs from the <code>setCharacterStream (int, Reader)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>NCLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a <code>LONGNVARCHAR</code> or a <code>NCLOB</code>
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setNClob</code> which takes a length parameter.
             * @param parameterName the name of the parameter
             * @param reader An object that contains the data to set the parameter value to.
             * @throws SQLException if parameterName does not correspond to a named
             *  parameter; if the driver does not support national character sets;
             *  if the driver can detect that a data conversion
             *   error could occur;  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setNClob(parameterName: java.lang.String | string, reader: java.io.Reader): void
            /**
             * <p>Returns an object representing the value of OUT parameter
             * {@code parameterIndex} and will convert from the
             * SQL type of the parameter to the requested Java data type, if the
             * conversion is supported. If the conversion is not
             * supported or null is specified for the type, a
             * <code>SQLException</code> is thrown.
             * <p>
             * At a minimum, an implementation must support the conversions defined in
             * Appendix B, Table B-3 and conversion of appropriate user defined SQL
             * types to a Java type which implements {@code SQLData}, or {@code Struct}.
             * Additional conversions may be supported and are vendor defined.
             * @param parameterIndex the first parameter is 1, the second is 2, and so on
             * @param type Class representing the Java data type to convert the
             *  designated parameter to.
             * @param <T> the type of the class modeled by this Class object
             * @return an instance of {#code type} holding the OUT parameter value
             * @throws SQLException if conversion is not supported, type is null or
             *          another error occurs. The getCause() method of the
             *  exception may provide a more detailed exception, for example, if
             *  a conversion error occurs
             * @throws SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.7
             */
            // @ts-ignore
            getObject<T>(parameterIndex: number /*int*/, type: java.lang.Class<T>): T
            /**
             * <p>Returns an object representing the value of OUT parameter
             * {@code parameterName} and will convert from the
             * SQL type of the parameter to the requested Java data type, if the
             * conversion is supported. If the conversion is not
             * supported  or null is specified for the type, a
             * <code>SQLException</code> is thrown.
             * <p>
             * At a minimum, an implementation must support the conversions defined in
             * Appendix B, Table B-3 and conversion of appropriate user defined SQL
             * types to a Java type which implements {@code SQLData}, or {@code Struct}.
             * Additional conversions may be supported and are vendor defined.
             * @param parameterName the name of the parameter
             * @param type Class representing the Java data type to convert
             *  the designated parameter to.
             * @param <T> the type of the class modeled by this Class object
             * @return an instance of {#code type} holding the OUT parameter
             *  value
             * @throws SQLException if conversion is not supported, type is null or
             *          another error occurs. The getCause() method of the
             *  exception may provide a more detailed exception, for example, if
             *  a conversion error occurs
             * @throws SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.7
             */
            // @ts-ignore
            getObject<T>(parameterName: java.lang.String | string, type: java.lang.Class<T>): T
            /**
             * <p>Sets the value of the designated parameter with the given object.
             * If the second argument is an {@code InputStream} then the stream
             * must contain the number of bytes specified by scaleOrLength.
             * If the second argument is a {@code Reader} then the reader must
             * contain the number of characters specified
             * by scaleOrLength. If these conditions are not true the driver
             * will generate a
             * {@code SQLException} when the prepared statement is executed.
             * <p>The given Java object will be converted to the given targetSqlType
             * before being sent to the database.
             * If the object has a custom mapping (is of a class implementing the
             * interface {@code SQLData}),
             * the JDBC driver should call the method {@code SQLData.writeSQL} to
             * write it to the SQL data stream.
             * If, on the other hand, the object is of a class implementing
             * {@code Ref}, {@code Blob}, {@code Clob},  {@code NClob},
             * {@code Struct}, {@code java.net.URL},
             * or {@code Array}, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             * <p>Note that this method may be used to pass database-specific
             * abstract data types.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             * @param parameterName the name of the parameter
             * @param x the object containing the input parameter value
             * @param targetSqlType the SQL type to be
             *  sent to the database. The scale argument may further qualify this type.
             * @param scaleOrLength for {#code java.sql.JDBCType.DECIMAL}
             *           or {@code java.sql.JDBCType.NUMERIC types},
             *           this is the number of digits after the decimal point. For
             *           Java Object types {@code InputStream} and {@code Reader},
             *           this is the length
             *           of the data in the stream or reader.  For all other types,
             *           this value will be ignored.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs
             *  or this method is called on a closed {#code CallableStatement}  or
             *             if the Java Object specified by x is an InputStream
             *             or Reader object and the value of the scale parameter is less
             *             than zero
             * @exception SQLFeatureNotSupportedException if
             *  the JDBC driver does not support the specified targetSqlType
             * @see JDBCType
             * @see SQLType
             * @since 1.8
             */
            // @ts-ignore
            setObject(parameterName: java.lang.String | string, x: java.lang.Object | any, targetSqlType: java.sql.SQLType, scaleOrLength: number /*int*/): void
            /**
             * Sets the value of the designated parameter with the given object.
             * This method is similar to {@link #setObject(String parameterName,
             * Object x, SQLType targetSqlType, int scaleOrLength)},
             * except that it assumes a scale of zero.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             * @param parameterName the name of the parameter
             * @param x the object containing the input parameter value
             * @param targetSqlType the SQL type to be sent to the database
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs
             *  or this method is called on a closed {#code CallableStatement}
             * @exception SQLFeatureNotSupportedException if
             *  the JDBC driver does not support the specified targetSqlType
             * @see JDBCType
             * @see SQLType
             * @since 1.8
             */
            // @ts-ignore
            setObject(parameterName: java.lang.String | string, x: java.lang.Object | any, targetSqlType: java.sql.SQLType): void
            /**
             * Registers the OUT parameter in ordinal position
             * {@code parameterIndex} to the JDBC type
             * {@code sqlType}.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by {@code sqlType} for an OUT
             * parameter determines the Java type that must be used
             * in the {@code get} method to read the value of that parameter.
             * <p>
             * If the JDBC type expected to be returned to this output parameter
             * is specific to this particular database, {@code sqlType}
             * may be {@code JDBCType.OTHER} or a {@code SQLType} that is supported by
             * the JDBC driver.  The method
             * {@link #getObject} retrieves the value.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             * @param parameterIndex the first parameter is 1, the second is 2,
             *         and so on
             * @param sqlType the JDBC type code defined by {#code SQLType} to use to
             *  register the OUT Parameter.
             *         If the parameter is of JDBC type {@code JDBCType.NUMERIC}
             *         or {@code JDBCType.DECIMAL}, the version of
             *         {@code registerOutParameter} that accepts a scale value
             *         should be used.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed {#code CallableStatement}
             * @exception SQLFeatureNotSupportedException if
             *  the JDBC driver does not support the specified sqlType
             * @see JDBCType
             * @see SQLType
             * @since 1.8
             */
            // @ts-ignore
            registerOutParameter(parameterIndex: number /*int*/, sqlType: java.sql.SQLType): void
            /**
             * Registers the parameter in ordinal position
             * {@code parameterIndex} to be of JDBC type
             * {@code sqlType}. All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by {@code sqlType} for an OUT
             * parameter determines the Java type that must be used
             * in the {@code get} method to read the value of that parameter.
             * <p>
             * This version of {@code  registerOutParameter} should be
             * used when the parameter is of JDBC type {@code JDBCType.NUMERIC}
             * or {@code JDBCType.DECIMAL}.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             * @param parameterIndex the first parameter is 1, the second is 2,
             *  and so on
             * @param sqlType the JDBC type code defined by {#code SQLType} to use to
             *  register the OUT Parameter.
             * @param scale the desired number of digits to the right of the
             *  decimal point.  It must be greater than or equal to zero.
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed {#code CallableStatement}
             * @exception SQLFeatureNotSupportedException if
             *  the JDBC driver does not support the specified sqlType
             * @see JDBCType
             * @see SQLType
             * @since 1.8
             */
            // @ts-ignore
            registerOutParameter(parameterIndex: number /*int*/, sqlType: java.sql.SQLType, scale: number /*int*/): void
            /**
             * Registers the designated output parameter.
             * This version of
             * the method {@code  registerOutParameter}
             * should be used for a user-defined or {@code REF} output parameter.
             * Examples
             * of user-defined types include: {@code STRUCT}, {@code DISTINCT},
             * {@code JAVA_OBJECT}, and named array types.
             * <p>
             * All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>  For a user-defined parameter, the fully-qualified SQL
             * type name of the parameter should also be given, while a {@code REF}
             * parameter requires that the fully-qualified type name of the
             * referenced type be given.  A JDBC driver that does not need the
             * type code and type name information may ignore it.   To be portable,
             * however, applications should always provide these values for
             * user-defined and {@code REF} parameters.
             * Although it is intended for user-defined and {@code REF} parameters,
             * this method may be used to register a parameter of any JDBC type.
             * If the parameter does not have a user-defined or {@code REF} type, the
             * <i>typeName</i> parameter is ignored.
             * <P><B>Note:</B> When reading the value of an out parameter, you
             * must use the getter method whose Java type corresponds to the
             * parameter's registered SQL type.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             * @param parameterIndex the first parameter is 1, the second is 2,...
             * @param sqlType the JDBC type code defined by {#code SQLType} to use to
             *  register the OUT Parameter.
             * @param typeName the fully-qualified name of an SQL structured type
             * @exception SQLException if the parameterIndex is not valid;
             *  if a database access error occurs or
             *  this method is called on a closed {#code CallableStatement}
             * @exception SQLFeatureNotSupportedException if
             *  the JDBC driver does not support the specified sqlType
             * @see JDBCType
             * @see SQLType
             * @since 1.8
             */
            // @ts-ignore
            registerOutParameter(parameterIndex: number /*int*/, sqlType: java.sql.SQLType, typeName: java.lang.String | string): void
            /**
             * Registers the OUT parameter named
             * <code>parameterName</code> to the JDBC type
             * {@code sqlType}.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by {@code sqlType} for an OUT
             * parameter determines the Java type that must be used
             * in the {@code get} method to read the value of that parameter.
             * <p>
             * If the JDBC type expected to be returned to this output parameter
             * is specific to this particular database, {@code sqlType}
             * should be {@code JDBCType.OTHER} or a {@code SQLType} that is supported
             * by the JDBC driver..  The method
             * {@link #getObject} retrieves the value.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             * @param parameterName the name of the parameter
             * @param sqlType the JDBC type code defined by {#code SQLType} to use to
             *  register the OUT Parameter.
             *  If the parameter is of JDBC type {@code JDBCType.NUMERIC}
             *  or {@code JDBCType.DECIMAL}, the version of
             *  {@code  registerOutParameter} that accepts a scale value
             *  should be used.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed {#code CallableStatement}
             * @exception SQLFeatureNotSupportedException if
             *  the JDBC driver does not support the specified sqlType
             *  or if the JDBC driver does not support
             *  this method
             * @since 1.8
             * @see JDBCType
             * @see SQLType
             */
            // @ts-ignore
            registerOutParameter(parameterName: java.lang.String | string, sqlType: java.sql.SQLType): void
            /**
             * Registers the parameter named
             * <code>parameterName</code> to be of JDBC type
             * {@code sqlType}.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by {@code sqlType} for an OUT
             * parameter determines the Java type that must be used
             * in the {@code get} method to read the value of that parameter.
             * <p>
             * This version of {@code  registerOutParameter} should be
             * used when the parameter is of JDBC type {@code JDBCType.NUMERIC}
             * or {@code JDBCType.DECIMAL}.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             * @param parameterName the name of the parameter
             * @param sqlType the JDBC type code defined by {#code SQLType} to use to
             *  register the OUT Parameter.
             * @param scale the desired number of digits to the right of the
             *  decimal point.  It must be greater than or equal to zero.
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed {#code CallableStatement}
             * @exception SQLFeatureNotSupportedException if
             *  the JDBC driver does not support the specified sqlType
             *  or if the JDBC driver does not support
             *  this method
             * @since 1.8
             * @see JDBCType
             * @see SQLType
             */
            // @ts-ignore
            registerOutParameter(parameterName: java.lang.String | string, sqlType: java.sql.SQLType, scale: number /*int*/): void
            /**
             * Registers the designated output parameter.  This version of
             * the method {@code  registerOutParameter}
             * should be used for a user-named or REF output parameter.  Examples
             * of user-named types include: STRUCT, DISTINCT, JAVA_OBJECT, and
             * named array types.
             * <p>
             * All OUT parameters must be registered
             * before a stored procedure is executed.
             * </p>
             * For a user-named parameter the fully-qualified SQL
             * type name of the parameter should also be given, while a REF
             * parameter requires that the fully-qualified type name of the
             * referenced type be given.  A JDBC driver that does not need the
             * type code and type name information may ignore it.   To be portable,
             * however, applications should always provide these values for
             * user-named and REF parameters.
             * Although it is intended for user-named and REF parameters,
             * this method may be used to register a parameter of any JDBC type.
             * If the parameter does not have a user-named or REF type, the
             * typeName parameter is ignored.
             * <P><B>Note:</B> When reading the value of an out parameter, you
             * must use the {@code getXXX} method whose Java type XXX corresponds to the
             * parameter's registered SQL type.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             * @param parameterName the name of the parameter
             * @param sqlType the JDBC type code defined by {#code SQLType} to use to
             *  register the OUT Parameter.
             * @param typeName the fully-qualified name of an SQL structured type
             * @exception SQLException if parameterName does not correspond to a named
             *  parameter; if a database access error occurs or
             *  this method is called on a closed {#code CallableStatement}
             * @exception SQLFeatureNotSupportedException if
             *  the JDBC driver does not support the specified sqlType
             *  or if the JDBC driver does not support this method
             * @see JDBCType
             * @see SQLType
             * @since 1.8
             */
            // @ts-ignore
            registerOutParameter(parameterName: java.lang.String | string, sqlType: java.sql.SQLType, typeName: java.lang.String | string): void
        }
    }
}
