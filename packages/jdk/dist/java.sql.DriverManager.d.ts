declare namespace java {
    namespace sql {
        /**
         * <P>The basic service for managing a set of JDBC drivers.<br>
         * <B>NOTE:</B> The {@link javax.sql.DataSource} interface, new in the
         * JDBC 2.0 API, provides another way to connect to a data source.
         * The use of a <code>DataSource</code> object is the preferred means of
         * connecting to a data source.
         * <P>As part of its initialization, the <code>DriverManager</code> class will
         * attempt to load the driver classes referenced in the "jdbc.drivers"
         * system property. This allows a user to customize the JDBC Drivers
         * used by their applications. For example in your
         * ~/.hotjava/properties file you might specify:
         * <pre>
         * <CODE>jdbc.drivers=foo.bah.Driver:wombat.sql.Driver:bad.taste.ourDriver</CODE>
         * </pre>
         * <P> The <code>DriverManager</code> methods <code>getConnection</code> and
         * <code>getDrivers</code> have been enhanced to support the Java Standard Edition
         * <a href="../../../technotes/guides/jar/jar.html#Service%20Provider">Service Provider</a> mechanism. JDBC 4.0 Drivers must
         * include the file <code>META-INF/services/java.sql.Driver</code>. This file contains the name of the JDBC drivers
         * implementation of <code>java.sql.Driver</code>.  For example, to load the <code>my.sql.Driver</code> class,
         * the <code>META-INF/services/java.sql.Driver</code> file would contain the entry:
         * <pre>
         * <code>my.sql.Driver</code>
         * </pre>
         * <P>Applications no longer need to explicitly load JDBC drivers using <code>Class.forName()</code>. Existing programs
         * which currently load JDBC drivers using <code>Class.forName()</code> will continue to work without
         * modification.
         * <P>When the method <code>getConnection</code> is called,
         * the <code>DriverManager</code> will attempt to
         * locate a suitable driver from amongst those loaded at
         * initialization and those loaded explicitly using the same classloader
         * as the current applet or application.
         * <P>
         * Starting with the Java 2 SDK, Standard Edition, version 1.3, a
         * logging stream can be set only if the proper
         * permission has been granted.  Normally this will be done with
         * the tool PolicyTool, which can be used to grant <code>permission
         * java.sql.SQLPermission "setLog"</code>.
         * @see Driver
         * @see Connection
         */
        // @ts-ignore
        class DriverManager extends java.lang.Object {
            /**
             * Retrieves the log writer.
             * The <code>getLogWriter</code> and <code>setLogWriter</code>
             * methods should be used instead
             * of the <code>get/setlogStream</code> methods, which are deprecated.
             * @return a <code>java.io.PrintWriter</code> object
             * @see #setLogWriter
             * @since 1.2
             */
            // @ts-ignore
            public static getLogWriter(): java.io.PrintWriter
            /**
             * Sets the logging/tracing <code>PrintWriter</code> object
             * that is used by the <code>DriverManager</code> and all drivers.
             * <P>
             * There is a minor versioning problem created by the introduction
             * of the method <code>setLogWriter</code>.  The
             * method <code>setLogWriter</code> cannot create a <code>PrintStream</code> object
             * that will be returned by <code>getLogStream</code>---the Java platform does
             * not provide a backward conversion.  As a result, a new application
             * that uses <code>setLogWriter</code> and also uses a JDBC 1.0 driver that uses
             * <code>getLogStream</code> will likely not see debugging information written
             * by that driver.
             * <P>
             * Starting with the Java 2 SDK, Standard Edition, version 1.3 release, this method checks
             * to see that there is an <code>SQLPermission</code> object before setting
             * the logging stream.  If a <code>SecurityManager</code> exists and its
             * <code>checkPermission</code> method denies setting the log writer, this
             * method throws a <code>java.lang.SecurityException</code>.
             * @param out the new logging/tracing <code>PrintStream</code> object;
             *       <code>null</code> to disable logging and tracing
             * @throws SecurityException
             *     if a security manager exists and its
             *     <code>checkPermission</code> method denies
             *     setting the log writer
             * @see SecurityManager#checkPermission
             * @see #getLogWriter
             * @since 1.2
             */
            // @ts-ignore
            public static setLogWriter(out: java.io.PrintWriter): void
            /**
             * Attempts to establish a connection to the given database URL.
             * The <code>DriverManager</code> attempts to select an appropriate driver from
             * the set of registered JDBC drivers.
             * <p>
             * <B>Note:</B> If a property is specified as part of the {@code url} and
             * is also specified in the {@code Properties} object, it is
             * implementation-defined as to which value will take precedence.
             * For maximum portability, an application should only specify a
             * property once.
             * @param url a database url of the form
             *  <code> jdbc:<em>subprotocol</em>:<em>subname</em></code>
             * @param info a list of arbitrary string tag/value pairs as
             *  connection arguments; normally at least a "user" and
             *  "password" property should be included
             * @return a Connection to the URL
             * @exception SQLException if a database access error occurs or the url is
             *  {#code null}
             * @throws SQLTimeoutException  when the driver has determined that the
             *  timeout value specified by the {#code setLoginTimeout} method
             *  has been exceeded and has at least tried to cancel the
             *  current database connection attempt
             */
            // @ts-ignore
            public static getConnection(url: java.lang.String | string, info: java.util.Properties): java.sql.Connection
            /**
             * Attempts to establish a connection to the given database URL.
             * The <code>DriverManager</code> attempts to select an appropriate driver from
             * the set of registered JDBC drivers.
             * <p>
             * <B>Note:</B> If the {@code user} or {@code password} property are
             * also specified as part of the {@code url}, it is
             * implementation-defined as to which value will take precedence.
             * For maximum portability, an application should only specify a
             * property once.
             * @param url a database url of the form
             *  <code>jdbc:<em>subprotocol</em>:<em>subname</em></code>
             * @param user the database user on whose behalf the connection is being
             *    made
             * @param password the user's password
             * @return a connection to the URL
             * @exception SQLException if a database access error occurs or the url is
             *  {#code null}
             * @throws SQLTimeoutException  when the driver has determined that the
             *  timeout value specified by the {#code setLoginTimeout} method
             *  has been exceeded and has at least tried to cancel the
             *  current database connection attempt
             */
            // @ts-ignore
            public static getConnection(url: java.lang.String | string, user: java.lang.String | string, password: java.lang.String | string): java.sql.Connection
            /**
             * Attempts to establish a connection to the given database URL.
             * The <code>DriverManager</code> attempts to select an appropriate driver from
             * the set of registered JDBC drivers.
             * @param url a database url of the form
             *   <code> jdbc:<em>subprotocol</em>:<em>subname</em></code>
             * @return a connection to the URL
             * @exception SQLException if a database access error occurs or the url is
             *  {#code null}
             * @throws SQLTimeoutException  when the driver has determined that the
             *  timeout value specified by the {#code setLoginTimeout} method
             *  has been exceeded and has at least tried to cancel the
             *  current database connection attempt
             */
            // @ts-ignore
            public static getConnection(url: java.lang.String | string): java.sql.Connection
            /**
             * Attempts to locate a driver that understands the given URL.
             * The <code>DriverManager</code> attempts to select an appropriate driver from
             * the set of registered JDBC drivers.
             * @param url a database URL of the form
             *      <code>jdbc:<em>subprotocol</em>:<em>subname</em></code>
             * @return a <code>Driver</code> object representing a driver
             *  that can connect to the given URL
             * @exception SQLException if a database access error occurs
             */
            // @ts-ignore
            public static getDriver(url: java.lang.String | string): java.sql.Driver
            /**
             * Registers the given driver with the {@code DriverManager}.
             * A newly-loaded driver class should call
             * the method {@code registerDriver} to make itself
             * known to the {@code DriverManager}. If the driver is currently
             * registered, no action is taken.
             * @param driver the new JDBC Driver that is to be registered with the
             *                {#code DriverManager}
             * @exception SQLException if a database access error occurs
             * @exception NullPointerException if {#code driver} is null
             */
            // @ts-ignore
            public static registerDriver(driver: java.sql.Driver): void
            /**
             * Registers the given driver with the {@code DriverManager}.
             * A newly-loaded driver class should call
             * the method {@code registerDriver} to make itself
             * known to the {@code DriverManager}. If the driver is currently
             * registered, no action is taken.
             * @param driver the new JDBC Driver that is to be registered with the
             *                {#code DriverManager}
             * @param da     the {#code DriverAction} implementation to be used when
             *                {@code DriverManager#deregisterDriver} is called
             * @exception SQLException if a database access error occurs
             * @exception NullPointerException if {#code driver} is null
             * @since 1.8
             */
            // @ts-ignore
            public static registerDriver(driver: java.sql.Driver, da: java.sql.DriverAction): void
            /**
             * Removes the specified driver from the {@code DriverManager}'s list of
             * registered drivers.
             * <p>
             * If a {@code null} value is specified for the driver to be removed, then no
             * action is taken.
             * <p>
             * If a security manager exists and its {@code checkPermission} denies
             * permission, then a {@code SecurityException} will be thrown.
             * <p>
             * If the specified driver is not found in the list of registered drivers,
             * then no action is taken.  If the driver was found, it will be removed
             * from the list of registered drivers.
             * <p>
             * If a {@code DriverAction} instance was specified when the JDBC driver was
             * registered, its deregister method will be called
             * prior to the driver being removed from the list of registered drivers.
             * @param driver the JDBC Driver to remove
             * @exception SQLException if a database access error occurs
             * @throws SecurityException if a security manager exists and its
             *  {#code checkPermission} method denies permission to deregister a driver.
             * @see SecurityManager#checkPermission
             */
            // @ts-ignore
            public static deregisterDriver(driver: java.sql.Driver): void
            /**
             * Retrieves an Enumeration with all of the currently loaded JDBC drivers
             * to which the current caller has access.
             * <P><B>Note:</B> The classname of a driver can be found using
             * <CODE>d.getClass().getName()</CODE>
             * @return the list of JDBC Drivers loaded by the caller's class loader
             */
            // @ts-ignore
            public static getDrivers(): java.util.Enumeration<java.sql.Driver>
            /**
             * Sets the maximum time in seconds that a driver will wait
             * while attempting to connect to a database once the driver has
             * been identified.
             * @param seconds the login time limit in seconds; zero means there is no limit
             * @see #getLoginTimeout
             */
            // @ts-ignore
            public static setLoginTimeout(seconds: number /*int*/): void
            /**
             * Gets the maximum time in seconds that a driver can wait
             * when attempting to log in to a database.
             * @return the driver login time limit in seconds
             * @see #setLoginTimeout
             */
            // @ts-ignore
            public static getLoginTimeout(): number /*int*/
            /**
             * Sets the logging/tracing PrintStream that is used
             * by the <code>DriverManager</code>
             * and all drivers.
             * <P>
             * In the Java 2 SDK, Standard Edition, version 1.3 release, this method checks
             * to see that there is an <code>SQLPermission</code> object before setting
             * the logging stream.  If a <code>SecurityManager</code> exists and its
             * <code>checkPermission</code> method denies setting the log writer, this
             * method throws a <code>java.lang.SecurityException</code>.
             * @param out the new logging/tracing PrintStream; to disable, set to <code>null</code>
             * @deprecated Use {#code setLogWriter}
             * @throws SecurityException if a security manager exists and its
             *     <code>checkPermission</code> method denies setting the log stream
             * @see SecurityManager#checkPermission
             * @see #getLogStream
             */
            // @ts-ignore
            public static setLogStream(out: java.io.PrintStream): void
            /**
             * Retrieves the logging/tracing PrintStream that is used by the <code>DriverManager</code>
             * and all drivers.
             * @return the logging/tracing PrintStream; if disabled, is <code>null</code>
             * @deprecated Use {#code getLogWriter}
             * @see #setLogStream
             */
            // @ts-ignore
            public static getLogStream(): java.io.PrintStream
            /**
             * Prints a message to the current JDBC log stream.
             * @param message a log or tracing message
             */
            // @ts-ignore
            public static println(message: java.lang.String | string): void
        }
    }
}
