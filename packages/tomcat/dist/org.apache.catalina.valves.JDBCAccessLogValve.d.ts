declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * <p>
                 * This Tomcat extension logs server access directly to a database, and can
                 * be used instead of the regular file-based access log implemented in
                 * AccessLogValve.
                 * To use, copy into the server/classes directory of the Tomcat installation
                 * and configure in server.xml as:
                 * </p>
                 * <pre>
                 * &lt;Valve className="org.apache.catalina.valves.JDBCAccessLogValve"
                 * driverName="<i>your_jdbc_driver</i>"
                 * connectionURL="<i>your_jdbc_url</i>"
                 * pattern="combined" resolveHosts="false"
                 * /&gt;
                 * </pre>
                 * <p>
                 * Many parameters can be configured, such as the database connection (with
                 * <code>driverName</code> and <code>connectionURL</code>),
                 * the table name (<code>tableName</code>)
                 * and the field names (corresponding to the get/set method names).
                 * The same options as AccessLogValve are supported, such as
                 * <code>resolveHosts</code> and <code>pattern</code> ("common" or "combined"
                 * only).
                 * </p>
                 * <p>
                 * When Tomcat is started, a database connection is created and used for all the
                 * log activity. When Tomcat is shutdown, the database connection is closed.
                 * This logger can be used at the level of the Engine context (being shared
                 * by all the defined hosts) or the Host context (one instance of the logger
                 * per host, possibly using different databases).
                 * </p>
                 * <p>
                 * The database table can be created with the following command:
                 * </p>
                 * <pre>
                 * CREATE TABLE access (
                 * id INT UNSIGNED AUTO_INCREMENT NOT NULL,
                 * remoteHost CHAR(15) NOT NULL,
                 * userName CHAR(15),
                 * timestamp TIMESTAMP NOT NULL,
                 * virtualHost VARCHAR(64) NOT NULL,
                 * method VARCHAR(8) NOT NULL,
                 * query VARCHAR(255) NOT NULL,
                 * status SMALLINT UNSIGNED NOT NULL,
                 * bytes INT UNSIGNED NOT NULL,
                 * referer VARCHAR(128),
                 * userAgent VARCHAR(128),
                 * PRIMARY KEY (id),
                 * INDEX (timestamp),
                 * INDEX (remoteHost),
                 * INDEX (virtualHost),
                 * INDEX (query),
                 * INDEX (userAgent)
                 * );
                 * </pre>
                 * <p>Set JDBCAccessLogValve attribute useLongContentLength="true" as you have more then 4GB outputs.
                 * Please, use long SQL datatype at access.bytes attribute.
                 * The datatype of bytes at oracle is <i>number</i> and other databases use <i>bytes BIGINT NOT NULL</i>.
                 * </p>
                 * <p>
                 * If the table is created as above, its name and the field names don't need
                 * to be defined.
                 * </p>
                 * <p>
                 * If the request method is "common", only these fields are used:
                 * <code>remoteHost, user, timeStamp, query, status, bytes</code>
                 * </p>
                 * <p>
                 * <i>TO DO: provide option for excluding logging of certain MIME types.</i>
                 * </p>
                 * @author Andre de Jesus
                 * @author Peter Rossbach
                 */
                // @ts-ignore
                class JDBCAccessLogValve extends org.apache.catalina.valves.ValveBase implements org.apache.catalina.AccessLog {
                    /**
                     * Class constructor. Initializes the fields with the default values.
                     * The defaults are:
                     * <pre>
                     * driverName = null;
                     * connectionURL = null;
                     * tableName = "access";
                     * remoteHostField = "remoteHost";
                     * userField = "userName";
                     * timestampField = "timestamp";
                     * virtualHostField = "virtualHost";
                     * methodField = "method";
                     * queryField = "query";
                     * statusField = "status";
                     * bytesField = "bytes";
                     * refererField = "referer";
                     * userAgentField = "userAgent";
                     * pattern = "common";
                     * resolveHosts = false;
                     * </pre>
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * {@inheritDoc}
                     * Default is <code>true</code>.
                     */
                    // @ts-ignore
                    public setRequestAttributesEnabled(requestAttributesEnabled: boolean): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getRequestAttributesEnabled(): boolean
                    /**
                     * @return the username to use to connect to the database.
                     */
                    // @ts-ignore
                    public getConnectionName(): string
                    /**
                     * Set the username to use to connect to the database.
                     * @param connectionName Username
                     */
                    // @ts-ignore
                    public setConnectionName(connectionName: java.lang.String | string): void
                    /**
                     * Sets the database driver name.
                     * @param driverName The complete name of the database driver class.
                     */
                    // @ts-ignore
                    public setDriverName(driverName: java.lang.String | string): void
                    /**
                     * @return the password to use to connect to the database.
                     */
                    // @ts-ignore
                    public getConnectionPassword(): string
                    /**
                     * Set the password to use to connect to the database.
                     * @param connectionPassword User password
                     */
                    // @ts-ignore
                    public setConnectionPassword(connectionPassword: java.lang.String | string): void
                    /**
                     * Sets the JDBC URL for the database where the log is stored.
                     * @param connectionURL The JDBC URL of the database.
                     */
                    // @ts-ignore
                    public setConnectionURL(connectionURL: java.lang.String | string): void
                    /**
                     * Sets the name of the table where the logs are stored.
                     * @param tableName The name of the table.
                     */
                    // @ts-ignore
                    public setTableName(tableName: java.lang.String | string): void
                    /**
                     * Sets the name of the field containing the remote host.
                     * @param remoteHostField The name of the remote host field.
                     */
                    // @ts-ignore
                    public setRemoteHostField(remoteHostField: java.lang.String | string): void
                    /**
                     * Sets the name of the field containing the remote user name.
                     * @param userField The name of the remote user field.
                     */
                    // @ts-ignore
                    public setUserField(userField: java.lang.String | string): void
                    /**
                     * Sets the name of the field containing the server-determined timestamp.
                     * @param timestampField The name of the server-determined timestamp field.
                     */
                    // @ts-ignore
                    public setTimestampField(timestampField: java.lang.String | string): void
                    /**
                     * Sets the name of the field containing the virtual host information
                     * (this is in fact the server name).
                     * @param virtualHostField The name of the virtual host field.
                     */
                    // @ts-ignore
                    public setVirtualHostField(virtualHostField: java.lang.String | string): void
                    /**
                     * Sets the name of the field containing the HTTP request method.
                     * @param methodField The name of the HTTP request method field.
                     */
                    // @ts-ignore
                    public setMethodField(methodField: java.lang.String | string): void
                    /**
                     * Sets the name of the field containing the URL part of the HTTP query.
                     * @param queryField The name of the field containing the URL part of
                     *  the HTTP query.
                     */
                    // @ts-ignore
                    public setQueryField(queryField: java.lang.String | string): void
                    /**
                     * Sets the name of the field containing the HTTP response status code.
                     * @param statusField The name of the HTTP response status code field.
                     */
                    // @ts-ignore
                    public setStatusField(statusField: java.lang.String | string): void
                    /**
                     * Sets the name of the field containing the number of bytes returned.
                     * @param bytesField The name of the returned bytes field.
                     */
                    // @ts-ignore
                    public setBytesField(bytesField: java.lang.String | string): void
                    /**
                     * Sets the name of the field containing the referer.
                     * @param refererField The referer field name.
                     */
                    // @ts-ignore
                    public setRefererField(refererField: java.lang.String | string): void
                    /**
                     * Sets the name of the field containing the user agent.
                     * @param userAgentField The name of the user agent field.
                     */
                    // @ts-ignore
                    public setUserAgentField(userAgentField: java.lang.String | string): void
                    /**
                     * Sets the logging pattern. The patterns supported correspond to the
                     * file-based "common" and "combined". These are translated into the use
                     * of tables containing either set of fields.
                     * <P><I>TO DO: more flexible field choices.</I></P>
                     * @param pattern The name of the logging pattern.
                     */
                    // @ts-ignore
                    public setPattern(pattern: java.lang.String | string): void
                    /**
                     * Determines whether IP host name resolution is done.
                     * @param resolveHosts "true" or "false", if host IP resolution
                     *  is desired or not.
                     */
                    // @ts-ignore
                    public setResolveHosts(resolveHosts: java.lang.String | string): void
                    /**
                     * @return <code>true</code> if content length should be considered a long
                     *   rather than an int, defaults to <code>false</code>
                     */
                    // @ts-ignore
                    public getUseLongContentLength(): boolean
                    /**
                     * @param useLongContentLength the useLongContentLength to set
                     */
                    // @ts-ignore
                    public setUseLongContentLength(useLongContentLength: boolean): void
                    /**
                     * This method is invoked by Tomcat on each query.
                     * @param request The Request object.
                     * @param response The Response object.
                     * @exception IOException Should not be thrown.
                     * @exception ServletException Database SQLException is wrapped
                     *  in a ServletException.
                     */
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    // @ts-ignore
                    public log(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/): void
                    /**
                     * Open (if necessary) and return a database connection for use by
                     * this AccessLogValve.
                     * @exception SQLException if a database error occurs
                     */
                    // @ts-ignore
                    open(): void
                    /**
                     * Close the specified database connection.
                     */
                    // @ts-ignore
                    close(): void
                    /**
                     * Start this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    public getCurrentTimeMillis(): number /*long*/
                }
            }
        }
    }
}
