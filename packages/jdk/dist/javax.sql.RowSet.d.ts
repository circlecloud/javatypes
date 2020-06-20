declare namespace javax {
    namespace sql {
        /**
         * The interface that adds support to the JDBC API for the
         * JavaBeans&trade; component model.
         * A rowset, which can be used as a JavaBeans component in
         * a visual Bean development environment, can be created and
         * configured at design time and executed at run time.
         * <P>
         * The <code>RowSet</code>
         * interface provides a set of JavaBeans properties that allow a <code>RowSet</code>
         * instance to be configured to connect to a JDBC data source and read
         * some data from the data source.  A group of setter methods (<code>setInt</code>,
         * <code>setBytes</code>, <code>setString</code>, and so on)
         * provide a way to pass input parameters to a rowset's command property.
         * This command is the SQL query the rowset uses when it gets its data from
         * a relational database, which is generally the case.
         * <P>
         * The <code>RowSet</code>
         * interface supports JavaBeans events, allowing other components in an
         * application to be notified when an event occurs on a rowset,
         * such as a change in its value.
         * <P>The <code>RowSet</code> interface is unique in that it is intended to be
         * implemented using the rest of the JDBC API.  In other words, a
         * <code>RowSet</code> implementation is a layer of software that executes "on top"
         * of a JDBC driver.  Implementations of the <code>RowSet</code> interface can
         * be provided by anyone, including JDBC driver vendors who want to
         * provide a <code>RowSet</code> implementation as part of their JDBC products.
         * <P>
         * A <code>RowSet</code> object may make a connection with a data source and
         * maintain that connection throughout its life cycle, in which case it is
         * called a <i>connected</i> rowset.  A rowset may also make a connection with
         * a data source, get data from it, and then close the connection. Such a rowset
         * is called a <i>disconnected</i> rowset.  A disconnected rowset may make
         * changes to its data while it is disconnected and then send the changes back
         * to the original source of the data, but it must reestablish a connection to do so.
         * <P>
         * A disconnected rowset may have a reader (a <code>RowSetReader</code> object)
         * and a writer (a <code>RowSetWriter</code> object) associated with it.
         * The reader may be implemented in many different ways to populate a rowset
         * with data, including getting data from a non-relational data source. The
         * writer can also be implemented in many different ways to propagate changes
         * made to the rowset's data back to the underlying data source.
         * <P>
         * Rowsets are easy to use.  The <code>RowSet</code> interface extends the standard
         * <code>java.sql.ResultSet</code> interface.  The <code>RowSetMetaData</code>
         * interface extends the <code>java.sql.ResultSetMetaData</code> interface.
         * Thus, developers familiar
         * with the JDBC API will have to learn a minimal number of new APIs to
         * use rowsets.  In addition, third-party software tools that work with
         * JDBC <code>ResultSet</code> objects will also easily be made to work with rowsets.
         * @since 1.4
         */
        // @ts-ignore
        interface RowSet extends java.sql.ResultSet {
            /**
             * Retrieves the url property this <code>RowSet</code> object will use to
             * create a connection if it uses the <code>DriverManager</code>
             * instead of a <code>DataSource</code> object to establish the connection.
             * The default value is <code>null</code>.
             * @return a string url
             * @exception SQLException if a database access error occurs
             * @see #setUrl
             */
            // @ts-ignore
            getUrl(): java.lang.String
            /**
             * Sets the URL this <code>RowSet</code> object will use when it uses the
             * <code>DriverManager</code> to create a connection.
             * Setting this property is optional.  If a URL is used, a JDBC driver
             * that accepts the URL must be loaded before the
             * rowset is used to connect to a database.  The rowset will use the URL
             * internally to create a database connection when reading or writing
             * data.  Either a URL or a data source name is used to create a
             * connection, whichever was set to non null value most recently.
             * @param url a string value; may be <code>null</code>
             * @exception SQLException if a database access error occurs
             * @see #getUrl
             */
            // @ts-ignore
            setUrl(url: string): void
            /**
             * Retrieves the logical name that identifies the data source for this
             * <code>RowSet</code> object.
             * @return a data source name
             * @see #setDataSourceName
             * @see #setUrl
             */
            // @ts-ignore
            getDataSourceName(): java.lang.String
            /**
             * Sets the data source name property for this <code>RowSet</code> object to the
             * given <code>String</code>.
             * <P>
             * The value of the data source name property can be used to do a lookup of
             * a <code>DataSource</code> object that has been registered with a naming
             * service.  After being retrieved, the <code>DataSource</code> object can be
             * used to create a connection to the data source that it represents.
             * @param name the logical name of the data source for this <code>RowSet</code>
             *         object; may be <code>null</code>
             * @exception SQLException if a database access error occurs
             * @see #getDataSourceName
             */
            // @ts-ignore
            setDataSourceName(name: string): void
            /**
             * Retrieves the username used to create a database connection for this
             * <code>RowSet</code> object.
             * The username property is set at run time before calling the method
             * <code>execute</code>.  It is
             * not usually part of the serialized state of a <code>RowSet</code> object.
             * @return the username property
             * @see #setUsername
             */
            // @ts-ignore
            getUsername(): java.lang.String
            /**
             * Sets the username property for this <code>RowSet</code> object to the
             * given <code>String</code>.
             * @param name a user name
             * @exception SQLException if a database access error occurs
             * @see #getUsername
             */
            // @ts-ignore
            setUsername(name: string): void
            /**
             * Retrieves the password used to create a database connection.
             * The password property is set at run time before calling the method
             * <code>execute</code>.  It is not usually part of the serialized state
             * of a <code>RowSet</code> object.
             * @return the password for making a database connection
             * @see #setPassword
             */
            // @ts-ignore
            getPassword(): java.lang.String
            /**
             * Sets the database password for this <code>RowSet</code> object to
             * the given <code>String</code>.
             * @param password the password string
             * @exception SQLException if a database access error occurs
             * @see #getPassword
             */
            // @ts-ignore
            setPassword(password: string): void
            /**
             * Retrieves the transaction isolation level set for this
             * <code>RowSet</code> object.
             * @return the transaction isolation level; one of
             *       <code>Connection.TRANSACTION_READ_UNCOMMITTED</code>,
             *       <code>Connection.TRANSACTION_READ_COMMITTED</code>,
             *       <code>Connection.TRANSACTION_REPEATABLE_READ</code>, or
             *       <code>Connection.TRANSACTION_SERIALIZABLE</code>
             * @see #setTransactionIsolation
             */
            // @ts-ignore
            getTransactionIsolation(): int
            /**
             * Sets the transaction isolation level for this <code>RowSet</code> object.
             * @param level the transaction isolation level; one of
             *       <code>Connection.TRANSACTION_READ_UNCOMMITTED</code>,
             *       <code>Connection.TRANSACTION_READ_COMMITTED</code>,
             *       <code>Connection.TRANSACTION_REPEATABLE_READ</code>, or
             *       <code>Connection.TRANSACTION_SERIALIZABLE</code>
             * @exception SQLException if a database access error occurs
             * @see #getTransactionIsolation
             */
            // @ts-ignore
            setTransactionIsolation(level: number /*int*/): void
            /**
             * Retrieves the <code>Map</code> object associated with this
             * <code>RowSet</code> object, which specifies the custom mapping
             * of SQL user-defined types, if any.  The default is for the
             * type map to be empty.
             * @return a <code>java.util.Map</code> object containing the names of
             *          SQL user-defined types and the Java classes to which they are
             *          to be mapped
             * @exception SQLException if a database access error occurs
             * @see #setTypeMap
             */
            // @ts-ignore
            getTypeMap(): java.util.Map<java.lang.String, java.lang.Class<?>>
            /**
             * Installs the given <code>java.util.Map</code> object as the default
             * type map for this <code>RowSet</code> object. This type map will be
             * used unless another type map is supplied as a method parameter.
             * @param map  a <code>java.util.Map</code> object containing the names of
             *          SQL user-defined types and the Java classes to which they are
             *          to be mapped
             * @exception SQLException if a database access error occurs
             * @see #getTypeMap
             */
            // @ts-ignore
            setTypeMap(map: java.util.Map<java.lang.String, java.lang.Class<any>>): void
            /**
             * Retrieves this <code>RowSet</code> object's command property.
             * The command property contains a command string, which must be an SQL
             * query, that can be executed to fill the rowset with data.
             * The default value is <code>null</code>.
             * @return the command string; may be <code>null</code>
             * @see #setCommand
             */
            // @ts-ignore
            getCommand(): java.lang.String
            /**
             * Sets this <code>RowSet</code> object's command property to the given
             * SQL query.
             * This property is optional
             * when a rowset gets its data from a data source that does not support
             * commands, such as a spreadsheet.
             * @param cmd the SQL query that will be used to get the data for this
             *         <code>RowSet</code> object; may be <code>null</code>
             * @exception SQLException if a database access error occurs
             * @see #getCommand
             */
            // @ts-ignore
            setCommand(cmd: string): void
            /**
             * Retrieves whether this <code>RowSet</code> object is read-only.
             * If updates are possible, the default is for a rowset to be
             * updatable.
             * <P>
             * Attempts to update a read-only rowset will result in an
             * <code>SQLException</code> being thrown.
             * @return <code>true</code> if this <code>RowSet</code> object is
             *          read-only; <code>false</code> if it is updatable
             * @see #setReadOnly
             */
            // @ts-ignore
            isReadOnly(): boolean
            /**
             * Sets whether this <code>RowSet</code> object is read-only to the
             * given <code>boolean</code>.
             * @param value <code>true</code> if read-only; <code>false</code> if
             *         updatable
             * @exception SQLException if a database access error occurs
             * @see #isReadOnly
             */
            // @ts-ignore
            setReadOnly(value: boolean): void
            /**
             * Retrieves the maximum number of bytes that may be returned
             * for certain column values.
             * This limit applies only to <code>BINARY</code>,
             * <code>VARBINARY</code>, <code>LONGVARBINARYBINARY</code>, <code>CHAR</code>,
             * <code>VARCHAR</code>, <code>LONGVARCHAR</code>, <code>NCHAR</code>
             * and <code>NVARCHAR</code> columns.
             * If the limit is exceeded, the excess data is silently discarded.
             * @return the current maximum column size limit; zero means that there
             *           is no limit
             * @exception SQLException if a database access error occurs
             * @see #setMaxFieldSize
             */
            // @ts-ignore
            getMaxFieldSize(): int
            /**
             * Sets the maximum number of bytes that can be returned for a column
             * value to the given number of bytes.
             * This limit applies only to <code>BINARY</code>,
             * <code>VARBINARY</code>, <code>LONGVARBINARYBINARY</code>, <code>CHAR</code>,
             * <code>VARCHAR</code>, <code>LONGVARCHAR</code>, <code>NCHAR</code>
             * and <code>NVARCHAR</code> columns.
             * If the limit is exceeded, the excess data is silently discarded.
             * For maximum portability, use values greater than 256.
             * @param max the new max column size limit in bytes; zero means unlimited
             * @exception SQLException if a database access error occurs
             * @see #getMaxFieldSize
             */
            // @ts-ignore
            setMaxFieldSize(max: number /*int*/): void
            /**
             * Retrieves the maximum number of rows that this <code>RowSet</code>
             * object can contain.
             * If the limit is exceeded, the excess rows are silently dropped.
             * @return the current maximum number of rows that this <code>RowSet</code>
             *          object can contain; zero means unlimited
             * @exception SQLException if a database access error occurs
             * @see #setMaxRows
             */
            // @ts-ignore
            getMaxRows(): int
            /**
             * Sets the maximum number of rows that this <code>RowSet</code>
             * object can contain to the specified number.
             * If the limit is exceeded, the excess rows are silently dropped.
             * @param max the new maximum number of rows; zero means unlimited
             * @exception SQLException if a database access error occurs
             * @see #getMaxRows
             */
            // @ts-ignore
            setMaxRows(max: number /*int*/): void
            /**
             * Retrieves whether escape processing is enabled for this
             * <code>RowSet</code> object.
             * If escape scanning is enabled, which is the default, the driver will do
             * escape substitution before sending an SQL statement to the database.
             * @return <code>true</code> if escape processing is enabled;
             *          <code>false</code> if it is disabled
             * @exception SQLException if a database access error occurs
             * @see #setEscapeProcessing
             */
            // @ts-ignore
            getEscapeProcessing(): boolean
            /**
             * Sets escape processing for this <code>RowSet</code> object on or
             * off. If escape scanning is on (the default), the driver will do
             * escape substitution before sending an SQL statement to the database.
             * @param enable <code>true</code> to enable escape processing;
             *         <code>false</code> to disable it
             * @exception SQLException if a database access error occurs
             * @see #getEscapeProcessing
             */
            // @ts-ignore
            setEscapeProcessing(enable: boolean): void
            /**
             * Retrieves the maximum number of seconds the driver will wait for
             * a statement to execute.
             * If this limit is exceeded, an <code>SQLException</code> is thrown.
             * @return the current query timeout limit in seconds; zero means
             *           unlimited
             * @exception SQLException if a database access error occurs
             * @see #setQueryTimeout
             */
            // @ts-ignore
            getQueryTimeout(): int
            /**
             * Sets the maximum time the driver will wait for
             * a statement to execute to the given number of seconds.
             * If this limit is exceeded, an <code>SQLException</code> is thrown.
             * @param seconds the new query timeout limit in seconds; zero means
             *         that there is no limit
             * @exception SQLException if a database access error occurs
             * @see #getQueryTimeout
             */
            // @ts-ignore
            setQueryTimeout(seconds: number /*int*/): void
            /**
             * Sets the type of this <code>RowSet</code> object to the given type.
             * This method is used to change the type of a rowset, which is by
             * default read-only and non-scrollable.
             * @param type one of the <code>ResultSet</code> constants specifying a type:
             *         <code>ResultSet.TYPE_FORWARD_ONLY</code>,
             *         <code>ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or
             *         <code>ResultSet.TYPE_SCROLL_SENSITIVE</code>
             * @exception SQLException if a database access error occurs
             * @see java.sql.ResultSet#getType
             */
            // @ts-ignore
            setType(type: number /*int*/): void
            /**
             * Sets the concurrency of this <code>RowSet</code> object to the given
             * concurrency level. This method is used to change the concurrency level
             * of a rowset, which is by default <code>ResultSet.CONCUR_READ_ONLY</code>
             * @param concurrency one of the <code>ResultSet</code> constants specifying a
             *         concurrency level:  <code>ResultSet.CONCUR_READ_ONLY</code> or
             *         <code>ResultSet.CONCUR_UPDATABLE</code>
             * @exception SQLException if a database access error occurs
             * @see ResultSet#getConcurrency
             */
            // @ts-ignore
            setConcurrency(concurrency: number /*int*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's SQL
             * command to SQL <code>NULL</code>.
             * <P><B>Note:</B> You must specify the parameter's SQL type.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param sqlType a SQL type code defined by <code>java.sql.Types</code>
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setNull(parameterIndex: number /*int*/, sqlType: number /*int*/): void
            /**
             * Sets the designated parameter to SQL <code>NULL</code>.
             * <P><B>Note:</B> You must specify the parameter's SQL type.
             * @param parameterName the name of the parameter
             * @param sqlType the SQL type code defined in <code>java.sql.Types</code>
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setNull(parameterName: string, sqlType: number /*int*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's SQL
             * command to SQL <code>NULL</code>. This version of the method <code>setNull</code>
             * should  be used for SQL user-defined types (UDTs) and <code>REF</code> type
             * parameters.  Examples of UDTs include: <code>STRUCT</code>, <code>DISTINCT</code>,
             * <code>JAVA_OBJECT</code>, and named array types.
             * <P><B>Note:</B> To be portable, applications must give the
             * SQL type code and the fully qualified SQL type name when specifying
             * a NULL UDT or <code>REF</code> parameter.  In the case of a UDT,
             * the name is the type name of the parameter itself.  For a <code>REF</code>
             * parameter, the name is the type name of the referenced type.  If
             * a JDBC driver does not need the type code or type name information,
             * it may ignore it.
             * Although it is intended for UDT and <code>REF</code> parameters,
             * this method may be used to set a null parameter of any JDBC type.
             * If the parameter does not have a user-defined or <code>REF</code> type,
             * the typeName parameter is ignored.
             * @param paramIndex the first parameter is 1, the second is 2, ...
             * @param sqlType a value from <code>java.sql.Types</code>
             * @param typeName the fully qualified name of an SQL UDT or the type
             *         name of the SQL structured type being referenced by a <code>REF</code>
             *         type; ignored if the parameter is not a UDT or <code>REF</code> type
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setNull(paramIndex: number /*int*/, sqlType: number /*int*/, typeName: string): void
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
             * parameter, the name is the type name of the referenced type.  If
             * a JDBC driver does not need the type code or type name information,
             * it may ignore it.
             * Although it is intended for user-defined and Ref parameters,
             * this method may be used to set a null parameter of any JDBC type.
             * If the parameter does not have a user-defined or REF type, the given
             * typeName is ignored.
             * @param parameterName the name of the parameter
             * @param sqlType a value from <code>java.sql.Types</code>
             * @param typeName the fully-qualified name of an SQL user-defined type;
             *         ignored if the parameter is not a user-defined type or
             *         SQL <code>REF</code> value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setNull(parameterName: string, sqlType: number /*int*/, typeName: string): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given Java <code>boolean</code> value. The driver converts this to
             * an SQL <code>BIT</code> value before sending it to the database.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setBoolean(parameterIndex: number /*int*/, x: boolean): void
            /**
             * Sets the designated parameter to the given Java <code>boolean</code> value.
             * The driver converts this
             * to an SQL <code>BIT</code> or <code>BOOLEAN</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @see #getBoolean
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setBoolean(parameterName: string, x: boolean): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given Java <code>byte</code> value. The driver converts this to
             * an SQL <code>TINYINT</code> value before sending it to the database.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setByte(parameterIndex: number /*int*/, x: number /*byte*/): void
            /**
             * Sets the designated parameter to the given Java <code>byte</code> value.
             * The driver converts this
             * to an SQL <code>TINYINT</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getByte
             * @since 1.4
             */
            // @ts-ignore
            setByte(parameterName: string, x: number /*byte*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given Java <code>short</code> value. The driver converts this to
             * an SQL <code>SMALLINT</code> value before sending it to the database.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setShort(parameterIndex: number /*int*/, x: number /*short*/): void
            /**
             * Sets the designated parameter to the given Java <code>short</code> value.
             * The driver converts this
             * to an SQL <code>SMALLINT</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getShort
             * @since 1.4
             */
            // @ts-ignore
            setShort(parameterName: string, x: number /*short*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given Java <code>int</code> value. The driver converts this to
             * an SQL <code>INTEGER</code> value before sending it to the database.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setInt(parameterIndex: number /*int*/, x: number /*int*/): void
            /**
             * Sets the designated parameter to the given Java <code>int</code> value.
             * The driver converts this
             * to an SQL <code>INTEGER</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getInt
             * @since 1.4
             */
            // @ts-ignore
            setInt(parameterName: string, x: number /*int*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given Java <code>long</code> value. The driver converts this to
             * an SQL <code>BIGINT</code> value before sending it to the database.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setLong(parameterIndex: number /*int*/, x: number /*long*/): void
            /**
             * Sets the designated parameter to the given Java <code>long</code> value.
             * The driver converts this
             * to an SQL <code>BIGINT</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getLong
             * @since 1.4
             */
            // @ts-ignore
            setLong(parameterName: string, x: number /*long*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given Java <code>float</code> value. The driver converts this to
             * an SQL <code>REAL</code> value before sending it to the database.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setFloat(parameterIndex: number /*int*/, x: number /*float*/): void
            /**
             * Sets the designated parameter to the given Java <code>float</code> value.
             * The driver converts this
             * to an SQL <code>FLOAT</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getFloat
             * @since 1.4
             */
            // @ts-ignore
            setFloat(parameterName: string, x: number /*float*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given Java <code>double</code> value. The driver converts this to
             * an SQL <code>DOUBLE</code> value before sending it to the database.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setDouble(parameterIndex: number /*int*/, x: number /*double*/): void
            /**
             * Sets the designated parameter to the given Java <code>double</code> value.
             * The driver converts this
             * to an SQL <code>DOUBLE</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getDouble
             * @since 1.4
             */
            // @ts-ignore
            setDouble(parameterName: string, x: number /*double*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given <code>java.math.BigDeciaml</code> value.
             * The driver converts this to
             * an SQL <code>NUMERIC</code> value before sending it to the database.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setBigDecimal(parameterIndex: number /*int*/, x: java.math.BigDecimal): void
            /**
             * Sets the designated parameter to the given
             * <code>java.math.BigDecimal</code> value.
             * The driver converts this to an SQL <code>NUMERIC</code> value when
             * it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getBigDecimal
             * @since 1.4
             */
            // @ts-ignore
            setBigDecimal(parameterName: string, x: java.math.BigDecimal): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given Java <code>String</code> value. Before sending it to the
             * database, the driver converts this to an SQL <code>VARCHAR</code> or
             * <code>LONGVARCHAR</code> value, depending on the argument's size relative
             * to the driver's limits on <code>VARCHAR</code> values.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setString(parameterIndex: number /*int*/, x: string): void
            /**
             * Sets the designated parameter to the given Java <code>String</code> value.
             * The driver converts this
             * to an SQL <code>VARCHAR</code> or <code>LONGVARCHAR</code> value
             * (depending on the argument's
             * size relative to the driver's limits on <code>VARCHAR</code> values)
             * when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getString
             * @since 1.4
             */
            // @ts-ignore
            setString(parameterName: string, x: string): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given Java array of <code>byte</code> values. Before sending it to the
             * database, the driver converts this to an SQL <code>VARBINARY</code> or
             * <code>LONGVARBINARY</code> value, depending on the argument's size relative
             * to the driver's limits on <code>VARBINARY</code> values.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setBytes(parameterIndex: number /*int*/, x: number /*byte*/[]): void
            /**
             * Sets the designated parameter to the given Java array of bytes.
             * The driver converts this to an SQL <code>VARBINARY</code> or
             * <code>LONGVARBINARY</code> (depending on the argument's size relative
             * to the driver's limits on <code>VARBINARY</code> values) when it sends
             * it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getBytes
             * @since 1.4
             */
            // @ts-ignore
            setBytes(parameterName: string, x: number /*byte*/[]): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given <code>java.sql.Date</code> value. The driver converts this to
             * an SQL <code>DATE</code> value before sending it to the database, using the
             * default <code>java.util.Calendar</code> to calculate the date.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setDate(parameterIndex: number /*int*/, x: java.sql.Date): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given <code>java.sql.Time</code> value. The driver converts this to
             * an SQL <code>TIME</code> value before sending it to the database, using the
             * default <code>java.util.Calendar</code> to calculate it.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setTime(parameterIndex: number /*int*/, x: java.sql.Time): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given <code>java.sql.Timestamp</code> value. The driver converts this to
             * an SQL <code>TIMESTAMP</code> value before sending it to the database, using the
             * default <code>java.util.Calendar</code> to calculate it.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setTimestamp(parameterIndex: number /*int*/, x: java.sql.Timestamp): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Timestamp</code> value.
             * The driver
             * converts this to an SQL <code>TIMESTAMP</code> value when it sends it to the
             * database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getTimestamp
             * @since 1.4
             */
            // @ts-ignore
            setTimestamp(parameterName: string, x: java.sql.Timestamp): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given <code>java.io.InputStream</code> value.
             * It may be more practical to send a very large ASCII value via a
             * <code>java.io.InputStream</code> rather than as a <code>LONGVARCHAR</code>
             * parameter. The driver will read the data from the stream
             * as needed until it reaches end-of-file.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the Java input stream that contains the ASCII parameter value
             * @param length the number of bytes in the stream
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setAsciiStream(parameterIndex: number /*int*/, x: java.io.InputStream, length: number /*int*/): void
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
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setAsciiStream(parameterName: string, x: java.io.InputStream, length: number /*int*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given <code>java.io.InputStream</code> value.
             * It may be more practical to send a very large binary value via a
             * <code>java.io.InputStream</code> rather than as a <code>LONGVARBINARY</code>
             * parameter. The driver will read the data from the stream
             * as needed until it reaches end-of-file.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the java input stream which contains the binary parameter value
             * @param length the number of bytes in the stream
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setBinaryStream(parameterIndex: number /*int*/, x: java.io.InputStream, length: number /*int*/): void
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
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setBinaryStream(parameterName: string, x: java.io.InputStream, length: number /*int*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given <code>java.io.Reader</code> value.
             * It may be more practical to send a very large UNICODE value via a
             * <code>java.io.Reader</code> rather than as a <code>LONGVARCHAR</code>
             * parameter. The driver will read the data from the stream
             * as needed until it reaches end-of-file.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param reader the <code>Reader</code> object that contains the UNICODE data
             *         to be set
             * @param length the number of characters in the stream
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setCharacterStream(parameterIndex: number /*int*/, reader: java.io.Reader, length: number /*int*/): void
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
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            setCharacterStream(parameterName: string, reader: java.io.Reader, length: number /*int*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given input stream.
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
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the Java input stream that contains the ASCII parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>PreparedStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setAsciiStream(parameterIndex: number /*int*/, x: java.io.InputStream): void
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
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setAsciiStream(parameterName: string, x: java.io.InputStream): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given input stream.
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
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the java input stream which contains the binary parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>PreparedStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setBinaryStream(parameterIndex: number /*int*/, x: java.io.InputStream): void
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
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setBinaryStream(parameterName: string, x: java.io.InputStream): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to the given <code>Reader</code>
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
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param reader the <code>java.io.Reader</code> object that contains the
             *         Unicode data
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>PreparedStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setCharacterStream(parameterIndex: number /*int*/, reader: java.io.Reader): void
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
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setCharacterStream(parameterName: string, reader: java.io.Reader): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * to a <code>Reader</code> object. The
             * <code>Reader</code> reads the data till end-of-file is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setNCharacterStream</code> which takes a length parameter.
             * @param parameterIndex of the first parameter is 1, the second is 2, ...
             * @param value the parameter value
             * @throws SQLException if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur ; if a database access error occurs; or
             *  this method is called on a closed <code>PreparedStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setNCharacterStream(parameterIndex: number /*int*/, value: java.io.Reader): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * with the given Java <code>Object</code>.  For integral values, the
             * <code>java.lang</code> equivalent objects should be used (for example,
             * an instance of the class <code>Integer</code> for an <code>int</code>).
             * If the second argument is an <code>InputStream</code> then the stream must contain
             * the number of bytes specified by scaleOrLength.  If the second argument is a
             * <code>Reader</code> then the reader must contain the number of characters specified    * by scaleOrLength. If these conditions are not true the driver will generate a
             * <code>SQLException</code> when the prepared statement is executed.
             * <p>The given Java object will be converted to the targetSqlType
             * before being sent to the database.
             * <P>
             * If the object is of a class implementing <code>SQLData</code>,
             * the rowset should call the method <code>SQLData.writeSQL</code>
             * to write the object to an <code>SQLOutput</code> data stream.
             * If, on the other hand, the object is of a class implementing
             * <code>Ref</code>, <code>Blob</code>, <code>Clob</code>,  <code>NClob</code>,
             * <code>Struct</code>, <code>java.net.URL</code>,
             * or <code>Array</code>, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             * <p>Note that this method may be used to pass datatabase-specific
             * abstract data types.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the object containing the input parameter value
             * @param targetSqlType the SQL type (as defined in <code>java.sql.Types</code>)
             *         to be sent to the database. The scale argument may further qualify this
             *         type.
             * @param scaleOrLength for <code>java.sql.Types.DECIMAL</code>
             *           or <code>java.sql.Types.NUMERIC types</code>,
             *           this is the number of digits after the decimal point. For
             *           Java Object types <code>InputStream</code> and <code>Reader</code>,
             *           this is the length
             *           of the data in the stream or reader.  For all other types,
             *           this value will be ignored.
             * @exception SQLException if a database access error occurs
             * @see java.sql.Types
             */
            // @ts-ignore
            setObject(parameterIndex: number /*int*/, x: any, targetSqlType: number /*int*/, scaleOrLength: number /*int*/): void
            /**
             * Sets the value of the designated parameter with the given object. The second
             * argument must be an object type; for integral values, the
             * <code>java.lang</code> equivalent objects should be used.
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
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if <code>targetSqlType</code> is
             *  a <code>ARRAY</code>, <code>BLOB</code>, <code>CLOB</code>,
             *  <code>DATALINK</code>, <code>JAVA_OBJECT</code>, <code>NCHAR</code>,
             *  <code>NCLOB</code>, <code>NVARCHAR</code>, <code>LONGNVARCHAR</code>,
             *   <code>REF</code>, <code>ROWID</code>, <code>SQLXML</code>
             *  or  <code>STRUCT</code> data type and the JDBC driver does not support
             *  this data type
             * @see Types
             * @see #getObject
             * @since 1.4
             */
            // @ts-ignore
            setObject(parameterName: string, x: any, targetSqlType: number /*int*/, scale: number /*int*/): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * with a Java <code>Object</code>.  For integral values, the
             * <code>java.lang</code> equivalent objects should be used.
             * This method is like <code>setObject</code> above, but the scale used is the scale
             * of the second parameter.  Scalar values have a scale of zero.  Literal
             * values have the scale present in the literal.
             * <P>
             * Even though it is supported, it is not recommended that this method
             * be called with floating point input values.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the object containing the input parameter value
             * @param targetSqlType the SQL type (as defined in <code>java.sql.Types</code>)
             *         to be sent to the database
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setObject(parameterIndex: number /*int*/, x: any, targetSqlType: number /*int*/): void
            /**
             * Sets the value of the designated parameter with the given object.
             * This method is like the method <code>setObject</code>
             * above, except that it assumes a scale of zero.
             * @param parameterName the name of the parameter
             * @param x the object containing the input parameter value
             * @param targetSqlType the SQL type (as defined in java.sql.Types) to be
             *                       sent to the database
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if <code>targetSqlType</code> is
             *  a <code>ARRAY</code>, <code>BLOB</code>, <code>CLOB</code>,
             *  <code>DATALINK</code>, <code>JAVA_OBJECT</code>, <code>NCHAR</code>,
             *  <code>NCLOB</code>, <code>NVARCHAR</code>, <code>LONGNVARCHAR</code>,
             *   <code>REF</code>, <code>ROWID</code>, <code>SQLXML</code>
             *  or  <code>STRUCT</code> data type and the JDBC driver does not support
             *  this data type
             * @see #getObject
             * @since 1.4
             */
            // @ts-ignore
            setObject(parameterName: string, x: any, targetSqlType: number /*int*/): void
            /**
             * Sets the value of the designated parameter with the given object.
             * The second parameter must be of type <code>Object</code>; therefore, the
             * <code>java.lang</code> equivalent objects should be used for built-in types.
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
             * @param parameterName the name of the parameter
             * @param x the object containing the input parameter value
             * @exception SQLException if a database access error occurs,
             *  this method is called on a closed <code>CallableStatement</code> or if the given
             *             <code>Object</code> parameter is ambiguous
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getObject
             * @since 1.4
             */
            // @ts-ignore
            setObject(parameterName: string, x: any): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * with a Java <code>Object</code>.  For integral values, the
             * <code>java.lang</code> equivalent objects should be used.
             * <p>The JDBC specification provides a standard mapping from
             * Java Object types to SQL types.  The driver will convert the
             * given Java object to its standard SQL mapping before sending it
             * to the database.
             * <p>Note that this method may be used to pass datatabase-specific
             * abstract data types by using a driver-specific Java type.
             * If the object is of a class implementing <code>SQLData</code>,
             * the rowset should call the method <code>SQLData.writeSQL</code>
             * to write the object to an <code>SQLOutput</code> data stream.
             * If, on the other hand, the object is of a class implementing
             * <code>Ref</code>, <code>Blob</code>, <code>Clob</code>,  <code>NClob</code>,
             * <code>Struct</code>, <code>java.net.URL</code>,
             * or <code>Array</code>, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             * <P>
             * An exception is thrown if there is an ambiguity, for example, if the
             * object is of a class implementing more than one of these interfaces.
             * @param parameterIndex The first parameter is 1, the second is 2, ...
             * @param x The object containing the input parameter value
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setObject(parameterIndex: number /*int*/, x: any): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * with the given  <code>Ref</code> value.  The driver will convert this
             * to the appropriate <code>REF(&lt;structured-type&gt;)</code> value.
             * @param i the first parameter is 1, the second is 2, ...
             * @param x an object representing data of an SQL <code>REF</code> type
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setRef(i: number /*int*/, x: java.sql.Ref): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * with the given  <code>Blob</code> value.  The driver will convert this
             * to the <code>BLOB</code> value that the <code>Blob</code> object
             * represents before sending it to the database.
             * @param i the first parameter is 1, the second is 2, ...
             * @param x an object representing a BLOB
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setBlob(i: number /*int*/, x: java.sql.Blob): void
            /**
             * Sets the designated parameter to a <code>InputStream</code> object.  The inputstream must contain  the number
             * of characters specified by length otherwise a <code>SQLException</code> will be
             * generated when the <code>PreparedStatement</code> is executed.
             * This method differs from the <code>setBinaryStream (int, InputStream, int)</code>
             * method because it informs the driver that the parameter value should be
             * sent to the server as a <code>BLOB</code>.  When the <code>setBinaryStream</code> method is used,
             * the driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a <code>LONGVARBINARY</code> or a <code>BLOB</code>
             * @param parameterIndex index of the first parameter is 1,
             *  the second is 2, ...
             * @param inputStream An object that contains the data to set the parameter
             *  value to.
             * @param length the number of bytes in the parameter data.
             * @throws SQLException if a database access error occurs,
             *  this method is called on a closed <code>PreparedStatement</code>,
             *  if parameterIndex does not correspond
             *  to a parameter marker in the SQL statement,  if the length specified
             *  is less than zero or if the number of bytes in the inputstream does not match
             *  the specified length.
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setBlob(parameterIndex: number /*int*/, inputStream: java.io.InputStream, length: number /*long*/): void
            /**
             * Sets the designated parameter to a <code>InputStream</code> object.
             * This method differs from the <code>setBinaryStream (int, InputStream)</code>
             * method because it informs the driver that the parameter value should be
             * sent to the server as a <code>BLOB</code>.  When the <code>setBinaryStream</code> method is used,
             * the driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a <code>LONGVARBINARY</code> or a <code>BLOB</code>
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setBlob</code> which takes a length parameter.
             * @param parameterIndex index of the first parameter is 1,
             *  the second is 2, ...
             * @param inputStream An object that contains the data to set the parameter
             *  value to.
             * @throws SQLException if a database access error occurs,
             *  this method is called on a closed <code>PreparedStatement</code> or
             *  if parameterIndex does not correspond
             *  to a parameter marker in the SQL statement,
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setBlob(parameterIndex: number /*int*/, inputStream: java.io.InputStream): void
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
             * @throws SQLException  if parameterIndex does not correspond
             *  to a parameter marker in the SQL statement,  or if the length specified
             *  is less than zero; if the number of bytes in the inputstream does not match
             *  the specified length; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setBlob(parameterName: string, inputStream: java.io.InputStream, length: number /*long*/): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Blob</code> object.
             * The driver converts this to an SQL <code>BLOB</code> value when it
             * sends it to the database.
             * @param parameterName the name of the parameter
             * @param x a <code>Blob</code> object that maps an SQL <code>BLOB</code> value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setBlob(parameterName: string, x: java.sql.Blob): void
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
             * @throws SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setBlob(parameterName: string, inputStream: java.io.InputStream): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * with the given  <code>Clob</code> value.  The driver will convert this
             * to the <code>CLOB</code> value that the <code>Clob</code> object
             * represents before sending it to the database.
             * @param i the first parameter is 1, the second is 2, ...
             * @param x an object representing a CLOB
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setClob(i: number /*int*/, x: java.sql.Clob): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object.  The reader must contain  the number
             * of characters specified by length otherwise a <code>SQLException</code> will be
             * generated when the <code>PreparedStatement</code> is executed.
             * This method differs from the <code>setCharacterStream (int, Reader, int)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>CLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a <code>LONGVARCHAR</code> or a <code>CLOB</code>
             * @param parameterIndex index of the first parameter is 1, the second is 2, ...
             * @param reader An object that contains the data to set the parameter value to.
             * @param length the number of characters in the parameter data.
             * @throws SQLException if a database access error occurs, this method is called on
             *  a closed <code>PreparedStatement</code>, if parameterIndex does not correspond to a parameter
             *  marker in the SQL statement, or if the length specified is less than zero.
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setClob(parameterIndex: number /*int*/, reader: java.io.Reader, length: number /*long*/): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object.
             * This method differs from the <code>setCharacterStream (int, Reader)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>CLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a <code>LONGVARCHAR</code> or a <code>CLOB</code>
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setClob</code> which takes a length parameter.
             * @param parameterIndex index of the first parameter is 1, the second is 2, ...
             * @param reader An object that contains the data to set the parameter value to.
             * @throws SQLException if a database access error occurs, this method is called on
             *  a closed <code>PreparedStatement</code>or if parameterIndex does not correspond to a parameter
             *  marker in the SQL statement
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setClob(parameterIndex: number /*int*/, reader: java.io.Reader): void
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
             * @throws SQLException if parameterIndex does not correspond to a parameter
             *  marker in the SQL statement; if the length specified is less than zero;
             *  a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setClob(parameterName: string, reader: java.io.Reader, length: number /*long*/): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Clob</code> object.
             * The driver converts this to an SQL <code>CLOB</code> value when it
             * sends it to the database.
             * @param parameterName the name of the parameter
             * @param x a <code>Clob</code> object that maps an SQL <code>CLOB</code> value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setClob(parameterName: string, x: java.sql.Clob): void
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
             * @throws SQLException if a database access error occurs or this method is called on
             *  a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setClob(parameterName: string, reader: java.io.Reader): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * with the given  <code>Array</code> value.  The driver will convert this
             * to the <code>ARRAY</code> value that the <code>Array</code> object
             * represents before sending it to the database.
             * @param i the first parameter is 1, the second is 2, ...
             * @param x an object representing an SQL array
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setArray(i: number /*int*/, x: java.sql.Array): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * with the given  <code>java.sql.Date</code> value.  The driver will convert this
             * to an SQL <code>DATE</code> value, using the given <code>java.util.Calendar</code>
             * object to calculate the date.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @param cal the <code>java.util.Calendar</code> object to use for calculating the date
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setDate(parameterIndex: number /*int*/, x: java.sql.Date, cal: java.util.Calendar): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Date</code> value
             * using the default time zone of the virtual machine that is running
             * the application.
             * The driver converts this
             * to an SQL <code>DATE</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getDate
             * @since 1.4
             */
            // @ts-ignore
            setDate(parameterName: string, x: java.sql.Date): void
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
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getDate
             * @since 1.4
             */
            // @ts-ignore
            setDate(parameterName: string, x: java.sql.Date, cal: java.util.Calendar): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * with the given  <code>java.sql.Time</code> value.  The driver will convert this
             * to an SQL <code>TIME</code> value, using the given <code>java.util.Calendar</code>
             * object to calculate it, before sending it to the database.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @param cal the <code>java.util.Calendar</code> object to use for calculating the time
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setTime(parameterIndex: number /*int*/, x: java.sql.Time, cal: java.util.Calendar): void
            /**
             * Sets the designated parameter to the given <code>java.sql.Time</code> value.
             * The driver converts this
             * to an SQL <code>TIME</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getTime
             * @since 1.4
             */
            // @ts-ignore
            setTime(parameterName: string, x: java.sql.Time): void
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
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getTime
             * @since 1.4
             */
            // @ts-ignore
            setTime(parameterName: string, x: java.sql.Time, cal: java.util.Calendar): void
            /**
             * Sets the designated parameter in this <code>RowSet</code> object's command
             * with the given  <code>java.sql.Timestamp</code> value.  The driver will
             * convert this to an SQL <code>TIMESTAMP</code> value, using the given
             * <code>java.util.Calendar</code> object to calculate it, before sending it to the
             * database.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @param cal the <code>java.util.Calendar</code> object to use for calculating the
             *         timestamp
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            setTimestamp(parameterIndex: number /*int*/, x: java.sql.Timestamp, cal: java.util.Calendar): void
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
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @see #getTimestamp
             * @since 1.4
             */
            // @ts-ignore
            setTimestamp(parameterName: string, x: java.sql.Timestamp, cal: java.util.Calendar): void
            /**
             * Clears the parameters set for this <code>RowSet</code> object's command.
             * <P>In general, parameter values remain in force for repeated use of a
             * <code>RowSet</code> object. Setting a parameter value automatically clears its
             * previous value.  However, in some cases it is useful to immediately
             * release the resources used by the current parameter values, which can
             * be done by calling the method <code>clearParameters</code>.
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            clearParameters(): void
            /**
             * Fills this <code>RowSet</code> object with data.
             * <P>
             * The <code>execute</code> method may use the following properties
             * to create a connection for reading data: url, data source name,
             * user name, password, transaction isolation, and type map.
             * The <code>execute</code> method  may use the following properties
             * to create a statement to execute a command:
             * command, read only, maximum field size,
             * maximum rows, escape processing, and query timeout.
             * <P>
             * If the required properties have not been set, an exception is
             * thrown.  If this method is successful, the current contents of the rowset are
             * discarded and the rowset's metadata is also (re)set.  If there are
             * outstanding updates, they are ignored.
             * <P>
             * If this <code>RowSet</code> object does not maintain a continuous connection
             * with its source of data, it may use a reader (a <code>RowSetReader</code>
             * object) to fill itself with data.  In this case, a reader will have been
             * registered with this <code>RowSet</code> object, and the method
             * <code>execute</code> will call on the reader's <code>readData</code>
             * method as part of its implementation.
             * @exception SQLException if a database access error occurs or any of the
             *             properties necessary for making a connection and creating
             *             a statement have not been set
             */
            // @ts-ignore
            execute(): void
            /**
             * Registers the given listener so that it will be notified of events
             * that occur on this <code>RowSet</code> object.
             * @param listener a component that has implemented the <code>RowSetListener</code>
             *         interface and wants to be notified when events occur on this
             *         <code>RowSet</code> object
             * @see #removeRowSetListener
             */
            // @ts-ignore
            addRowSetListener(listener: javax.sql.RowSetListener): void
            /**
             * Removes the specified listener from the list of components that will be
             * notified when an event occurs on this <code>RowSet</code> object.
             * @param listener a component that has been registered as a listener for this
             *         <code>RowSet</code> object
             * @see #addRowSetListener
             */
            // @ts-ignore
            removeRowSetListener(listener: javax.sql.RowSetListener): void
            /**
             * Sets the designated parameter to the given <code>java.sql.SQLXML</code> object. The driver converts this to an
             * SQL <code>XML</code> value when it sends it to the database.
             * @param parameterIndex index of the first parameter is 1, the second is 2, ...
             * @param xmlObject a <code>SQLXML</code> object that maps an SQL <code>XML</code> value
             * @throws SQLException if a database access error occurs, this method
             *   is called on a closed result set,
             *  the <code>java.xml.transform.Result</code>,
             *   <code>Writer</code> or <code>OutputStream</code> has not been closed
             *  for the <code>SQLXML</code> object  or
             *   if there is an error processing the XML value.  The <code>getCause</code> method
             *   of the exception may provide a more detailed exception, for example, if the
             *   stream does not contain valid XML.
             * @since 1.6
             */
            // @ts-ignore
            setSQLXML(parameterIndex: number /*int*/, xmlObject: java.sql.SQLXML): void
            /**
             * Sets the designated parameter to the given <code>java.sql.SQLXML</code> object. The driver converts this to an
             * <code>SQL XML</code> value when it sends it to the database.
             * @param parameterName the name of the parameter
             * @param xmlObject a <code>SQLXML</code> object that maps an <code>SQL XML</code> value
             * @throws SQLException if a database access error occurs, this method
             *   is called on a closed result set,
             *  the <code>java.xml.transform.Result</code>,
             *   <code>Writer</code> or <code>OutputStream</code> has not been closed
             *  for the <code>SQLXML</code> object  or
             *   if there is an error processing the XML value.  The <code>getCause</code> method
             *   of the exception may provide a more detailed exception, for example, if the
             *   stream does not contain valid XML.
             * @since 1.6
             */
            // @ts-ignore
            setSQLXML(parameterName: string, xmlObject: java.sql.SQLXML): void
            /**
             * Sets the designated parameter to the given <code>java.sql.RowId</code> object. The
             * driver converts this to a SQL <code>ROWID</code> value when it sends it
             * to the database
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the parameter value
             * @throws SQLException if a database access error occurs
             * @since 1.6
             */
            // @ts-ignore
            setRowId(parameterIndex: number /*int*/, x: java.sql.RowId): void
            /**
             * Sets the designated parameter to the given <code>java.sql.RowId</code> object. The
             * driver converts this to a SQL <code>ROWID</code> when it sends it to the
             * database.
             * @param parameterName the name of the parameter
             * @param x the parameter value
             * @throws SQLException if a database access error occurs
             * @since 1.6
             */
            // @ts-ignore
            setRowId(parameterName: string, x: java.sql.RowId): void
            /**
             * Sets the designated parameter to the given <code>String</code> object.
             * The driver converts this to a SQL <code>NCHAR</code> or
             * <code>NVARCHAR</code> or <code>LONGNVARCHAR</code> value
             * (depending on the argument's
             * size relative to the driver's limits on <code>NVARCHAR</code> values)
             * when it sends it to the database.
             * @param parameterIndex of the first parameter is 1, the second is 2, ...
             * @param value the parameter value
             * @throws SQLException if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur ; or if a database access error occurs
             * @since 1.6
             */
            // @ts-ignore
            setNString(parameterIndex: number /*int*/, value: string): void
            /**
             * Sets the designated parameter to the given <code>String</code> object.
             * The driver converts this to a SQL <code>NCHAR</code> or
             * <code>NVARCHAR</code> or <code>LONGNVARCHAR</code>
             * @param parameterName the name of the column to be set
             * @param value the parameter value
             * @throws SQLException if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur; or if a database access error occurs
             * @since 1.6
             */
            // @ts-ignore
            setNString(parameterName: string, value: string): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object. The
             * <code>Reader</code> reads the data till end-of-file is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * @param parameterIndex of the first parameter is 1, the second is 2, ...
             * @param value the parameter value
             * @param length the number of characters in the parameter data.
             * @throws SQLException if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur ; or if a database access error occurs
             * @since 1.6
             */
            // @ts-ignore
            setNCharacterStream(parameterIndex: number /*int*/, value: java.io.Reader, length: number /*long*/): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object. The
             * <code>Reader</code> reads the data till end-of-file is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * @param parameterName the name of the column to be set
             * @param value the parameter value
             * @param length the number of characters in the parameter data.
             * @throws SQLException if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur; or if a database access error occurs
             * @since 1.6
             */
            // @ts-ignore
            setNCharacterStream(parameterName: string, value: java.io.Reader, length: number /*long*/): void
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
             * @throws SQLException if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur ; if a database access error occurs; or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setNCharacterStream(parameterName: string, value: java.io.Reader): void
            /**
             * Sets the designated parameter to a <code>java.sql.NClob</code> object. The object
             * implements the <code>java.sql.NClob</code> interface. This <code>NClob</code>
             * object maps to a SQL <code>NCLOB</code>.
             * @param parameterName the name of the column to be set
             * @param value the parameter value
             * @throws SQLException if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur; or if a database access error occurs
             * @since 1.6
             */
            // @ts-ignore
            setNClob(parameterName: string, value: java.sql.NClob): void
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
             * @throws SQLException if parameterIndex does not correspond to a parameter
             *  marker in the SQL statement; if the length specified is less than zero;
             *  if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur; if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            setNClob(parameterName: string, reader: java.io.Reader, length: number /*long*/): void
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
             * @throws SQLException if the driver does not support national character sets;
             *  if the driver can detect that a data conversion
             *   error could occur;  if a database access error occurs or
             *  this method is called on a closed <code>CallableStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setNClob(parameterName: string, reader: java.io.Reader): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object.  The reader must contain  the number
             * of characters specified by length otherwise a <code>SQLException</code> will be
             * generated when the <code>PreparedStatement</code> is executed.
             * This method differs from the <code>setCharacterStream (int, Reader, int)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>NCLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a <code>LONGNVARCHAR</code> or a <code>NCLOB</code>
             * @param parameterIndex index of the first parameter is 1, the second is 2, ...
             * @param reader An object that contains the data to set the parameter value to.
             * @param length the number of characters in the parameter data.
             * @throws SQLException if parameterIndex does not correspond to a parameter
             *  marker in the SQL statement; if the length specified is less than zero;
             *  if the driver does not support national character sets;
             *  if the driver can detect that a data conversion
             *   error could occur;  if a database access error occurs or
             *  this method is called on a closed <code>PreparedStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setNClob(parameterIndex: number /*int*/, reader: java.io.Reader, length: number /*long*/): void
            /**
             * Sets the designated parameter to a <code>java.sql.NClob</code> object. The driver converts this to a
             * SQL <code>NCLOB</code> value when it sends it to the database.
             * @param parameterIndex of the first parameter is 1, the second is 2, ...
             * @param value the parameter value
             * @throws SQLException if the driver does not support national
             *          character sets;  if the driver can detect that a data conversion
             *   error could occur ; or if a database access error occurs
             * @since 1.6
             */
            // @ts-ignore
            setNClob(parameterIndex: number /*int*/, value: java.sql.NClob): void
            /**
             * Sets the designated parameter to a <code>Reader</code> object.
             * This method differs from the <code>setCharacterStream (int, Reader)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>NCLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a <code>LONGNVARCHAR</code> or a <code>NCLOB</code>
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setNClob</code> which takes a length parameter.
             * @param parameterIndex index of the first parameter is 1, the second is 2, ...
             * @param reader An object that contains the data to set the parameter value to.
             * @throws SQLException if parameterIndex does not correspond to a parameter
             *  marker in the SQL statement;
             *  if the driver does not support national character sets;
             *  if the driver can detect that a data conversion
             *   error could occur;  if a database access error occurs or
             *  this method is called on a closed <code>PreparedStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.6
             */
            // @ts-ignore
            setNClob(parameterIndex: number /*int*/, reader: java.io.Reader): void
            /**
             * Sets the designated parameter to the given <code>java.net.URL</code> value.
             * The driver converts this to an SQL <code>DATALINK</code> value
             * when it sends it to the database.
             * @param parameterIndex the first parameter is 1, the second is 2, ...
             * @param x the <code>java.net.URL</code> object to be set
             * @exception SQLException if a database access error occurs or
             *  this method is called on a closed <code>PreparedStatement</code>
             * @throws SQLFeatureNotSupportedException  if the JDBC driver does not support this method
             * @since 1.4
             */
            // @ts-ignore
            setURL(parameterIndex: number /*int*/, x: java.net.URL): void
        }
    }
}
