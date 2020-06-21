declare namespace java {
    namespace net {
        /**
         * The abstract class {@code URLConnection} is the superclass
         * of all classes that represent a communications link between the
         * application and a URL. Instances of this class can be used both to
         * read from and to write to the resource referenced by the URL. In
         * general, creating a connection to a URL is a multistep process:
         * <center><table border=2 summary="Describes the process of creating a connection to a URL: openConnection() and connect() over time.">
         * <tr><th>{@code openConnection()}</th>
         * <th>{@code connect()}</th></tr>
         * <tr><td>Manipulate parameters that affect the connection to the remote
         * resource.</td>
         * <td>Interact with the resource; query header fields and
         * contents.</td></tr>
         * </table>
         * ----------------------------&gt;
         * <br>time</center>
         * <ol>
         * <li>The connection object is created by invoking the
         * {@code openConnection} method on a URL.
         * <li>The setup parameters and general request properties are manipulated.
         * <li>The actual connection to the remote object is made, using the
         * {@code connect} method.
         * <li>The remote object becomes available. The header fields and the contents
         * of the remote object can be accessed.
         * </ol>
         * <p>
         * The setup parameters are modified using the following methods:
         * <ul>
         * <li>{@code setAllowUserInteraction}
         * <li>{@code setDoInput}
         * <li>{@code setDoOutput}
         * <li>{@code setIfModifiedSince}
         * <li>{@code setUseCaches}
         * </ul>
         * <p>
         * and the general request properties are modified using the method:
         * <ul>
         * <li>{@code setRequestProperty}
         * </ul>
         * <p>
         * Default values for the {@code AllowUserInteraction} and
         * {@code UseCaches} parameters can be set using the methods
         * {@code setDefaultAllowUserInteraction} and
         * {@code setDefaultUseCaches}.
         * <p>
         * Each of the above {@code set} methods has a corresponding
         * {@code get} method to retrieve the value of the parameter or
         * general request property. The specific parameters and general
         * request properties that are applicable are protocol specific.
         * <p>
         * The following methods are used to access the header fields and
         * the contents after the connection is made to the remote object:
         * <ul>
         * <li>{@code getContent}
         * <li>{@code getHeaderField}
         * <li>{@code getInputStream}
         * <li>{@code getOutputStream}
         * </ul>
         * <p>
         * Certain header fields are accessed frequently. The methods:
         * <ul>
         * <li>{@code getContentEncoding}
         * <li>{@code getContentLength}
         * <li>{@code getContentType}
         * <li>{@code getDate}
         * <li>{@code getExpiration}
         * <li>{@code getLastModifed}
         * </ul>
         * <p>
         * provide convenient access to these fields. The
         * {@code getContentType} method is used by the
         * {@code getContent} method to determine the type of the remote
         * object; subclasses may find it convenient to override the
         * {@code getContentType} method.
         * <p>
         * In the common case, all of the pre-connection parameters and
         * general request properties can be ignored: the pre-connection
         * parameters and request properties default to sensible values. For
         * most clients of this interface, there are only two interesting
         * methods: {@code getInputStream} and {@code getContent},
         * which are mirrored in the {@code URL} class by convenience methods.
         * <p>
         * More information on the request properties and header fields of
         * an {@code http} connection can be found at:
         * <blockquote><pre>
         * <a href="http://www.ietf.org/rfc/rfc2616.txt">http://www.ietf.org/rfc/rfc2616.txt</a>
         * </pre></blockquote>
         * Invoking the {@code close()} methods on the {@code InputStream} or {@code OutputStream} of an
         * {@code URLConnection} after a request may free network resources associated with this
         * instance, unless particular protocol specifications specify different behaviours
         * for it.
         * @author James Gosling
         * @see java.net.URL#openConnection()
         * @see java.net.URLConnection#connect()
         * @see java.net.URLConnection#getContent()
         * @see java.net.URLConnection#getContentEncoding()
         * @see java.net.URLConnection#getContentLength()
         * @see java.net.URLConnection#getContentType()
         * @see java.net.URLConnection#getDate()
         * @see java.net.URLConnection#getExpiration()
         * @see java.net.URLConnection#getHeaderField(int)
         * @see java.net.URLConnection#getHeaderField(java.lang.String)
         * @see java.net.URLConnection#getInputStream()
         * @see java.net.URLConnection#getLastModified()
         * @see java.net.URLConnection#getOutputStream()
         * @see java.net.URLConnection#setAllowUserInteraction(boolean)
         * @see java.net.URLConnection#setDefaultUseCaches(boolean)
         * @see java.net.URLConnection#setDoInput(boolean)
         * @see java.net.URLConnection#setDoOutput(boolean)
         * @see java.net.URLConnection#setIfModifiedSince(long)
         * @see java.net.URLConnection#setRequestProperty(java.lang.String, java.lang.String)
         * @see java.net.URLConnection#setUseCaches(boolean)
         * @since JDK1.0
         */
        // @ts-ignore
        abstract class URLConnection extends java.lang.Object {
            /**
             * Constructs a URL connection to the specified URL. A connection to
             * the object referenced by the URL is not created.
             * @param url   the specified URL.
             */
            // @ts-ignore
            constructor(url: java.net.URL)
            /**
             * The URL represents the remote object on the World Wide Web to
             * which this connection is opened.
             * <p>
             * The value of this field can be accessed by the
             * {@code getURL} method.
             * <p>
             * The default value of this variable is the value of the URL
             * argument in the {@code URLConnection} constructor.
             * @see java.net.URLConnection#getURL()
             * @see java.net.URLConnection#url
             */
            // @ts-ignore
            url: java.net.URL
            /**
             * This variable is set by the {@code setDoInput} method. Its
             * value is returned by the {@code getDoInput} method.
             * <p>
             * A URL connection can be used for input and/or output. Setting the
             * {@code doInput} flag to {@code true} indicates that
             * the application intends to read data from the URL connection.
             * <p>
             * The default value of this field is {@code true}.
             * @see java.net.URLConnection#getDoInput()
             * @see java.net.URLConnection#setDoInput(boolean)
             */
            // @ts-ignore
            doInput: boolean
            /**
             * This variable is set by the {@code setDoOutput} method. Its
             * value is returned by the {@code getDoOutput} method.
             * <p>
             * A URL connection can be used for input and/or output. Setting the
             * {@code doOutput} flag to {@code true} indicates
             * that the application intends to write data to the URL connection.
             * <p>
             * The default value of this field is {@code false}.
             * @see java.net.URLConnection#getDoOutput()
             * @see java.net.URLConnection#setDoOutput(boolean)
             */
            // @ts-ignore
            doOutput: boolean
            /**
             * If {@code true}, this {@code URL} is being examined in
             * a context in which it makes sense to allow user interactions such
             * as popping up an authentication dialog. If {@code false},
             * then no user interaction is allowed.
             * <p>
             * The value of this field can be set by the
             * {@code setAllowUserInteraction} method.
             * Its value is returned by the
             * {@code getAllowUserInteraction} method.
             * Its default value is the value of the argument in the last invocation
             * of the {@code setDefaultAllowUserInteraction} method.
             * @see java.net.URLConnection#getAllowUserInteraction()
             * @see java.net.URLConnection#setAllowUserInteraction(boolean)
             * @see java.net.URLConnection#setDefaultAllowUserInteraction(boolean)
             */
            // @ts-ignore
            allowUserInteraction: boolean
            /**
             * If {@code true}, the protocol is allowed to use caching
             * whenever it can. If {@code false}, the protocol must always
             * try to get a fresh copy of the object.
             * <p>
             * This field is set by the {@code setUseCaches} method. Its
             * value is returned by the {@code getUseCaches} method.
             * <p>
             * Its default value is the value given in the last invocation of the
             * {@code setDefaultUseCaches} method.
             * @see java.net.URLConnection#setUseCaches(boolean)
             * @see java.net.URLConnection#getUseCaches()
             * @see java.net.URLConnection#setDefaultUseCaches(boolean)
             */
            // @ts-ignore
            useCaches: boolean
            /**
             * Some protocols support skipping the fetching of the object unless
             * the object has been modified more recently than a certain time.
             * <p>
             * A nonzero value gives a time as the number of milliseconds since
             * January 1, 1970, GMT. The object is fetched only if it has been
             * modified more recently than that time.
             * <p>
             * This variable is set by the {@code setIfModifiedSince}
             * method. Its value is returned by the
             * {@code getIfModifiedSince} method.
             * <p>
             * The default value of this field is {@code 0}, indicating
             * that the fetching must always occur.
             * @see java.net.URLConnection#getIfModifiedSince()
             * @see java.net.URLConnection#setIfModifiedSince(long)
             */
            // @ts-ignore
            ifModifiedSince: number /*long*/
            /**
             * If {@code false}, this connection object has not created a
             * communications link to the specified URL. If {@code true},
             * the communications link has been established.
             */
            // @ts-ignore
            connected: boolean
            /**
             * Loads filename map (a mimetable) from a data file. It will
             * first try to load the user-specific table, defined
             * by &quot;content.types.user.table&quot; property. If that fails,
             * it tries to load the default built-in table.
             * @return the FileNameMap
             * @since 1.2
             * @see #setFileNameMap(java.net.FileNameMap)
             */
            // @ts-ignore
            public static getFileNameMap(): java.net.FileNameMap
            /**
             * Sets the FileNameMap.
             * <p>
             * If there is a security manager, this method first calls
             * the security manager's {@code checkSetFactory} method
             * to ensure the operation is allowed.
             * This could result in a SecurityException.
             * @param map the FileNameMap to be set
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkSetFactory} method doesn't allow the operation.
             * @see SecurityManager#checkSetFactory
             * @see #getFileNameMap()
             * @since 1.2
             */
            // @ts-ignore
            public static setFileNameMap(map: java.net.FileNameMap): void
            /**
             * Opens a communications link to the resource referenced by this
             * URL, if such a connection has not already been established.
             * <p>
             * If the {@code connect} method is called when the connection
             * has already been opened (indicated by the {@code connected}
             * field having the value {@code true}), the call is ignored.
             * <p>
             * URLConnection objects go through two phases: first they are
             * created, then they are connected.  After being created, and
             * before being connected, various options can be specified
             * (e.g., doInput and UseCaches).  After connecting, it is an
             * error to try to set them.  Operations that depend on being
             * connected, like getContentLength, will implicitly perform the
             * connection, if necessary.
             * @throws SocketTimeoutException if the timeout expires before
             *                the connection can be established
             * @exception IOException  if an I/O error occurs while opening the
             *                connection.
             * @see java.net.URLConnection#connected
             * @see #getConnectTimeout()
             * @see #setConnectTimeout(int)
             */
            // @ts-ignore
            public abstract connect(): void
            /**
             * Sets a specified timeout value, in milliseconds, to be used
             * when opening a communications link to the resource referenced
             * by this URLConnection.  If the timeout expires before the
             * connection can be established, a
             * java.net.SocketTimeoutException is raised. A timeout of zero is
             * interpreted as an infinite timeout.
             * <p> Some non-standard implementation of this method may ignore
             * the specified timeout. To see the connect timeout set, please
             * call getConnectTimeout().
             * @param timeout an {#code int} that specifies the connect
             *                timeout value in milliseconds
             * @throws IllegalArgumentException if the timeout parameter is negative
             * @see #getConnectTimeout()
             * @see #connect()
             * @since 1.5
             */
            // @ts-ignore
            public setConnectTimeout(timeout: number /*int*/): void
            /**
             * Returns setting for connect timeout.
             * <p>
             * 0 return implies that the option is disabled
             * (i.e., timeout of infinity).
             * @return an {#code int} that indicates the connect timeout
             *          value in milliseconds
             * @see #setConnectTimeout(int)
             * @see #connect()
             * @since 1.5
             */
            // @ts-ignore
            public getConnectTimeout(): number /*int*/
            /**
             * Sets the read timeout to a specified timeout, in
             * milliseconds. A non-zero value specifies the timeout when
             * reading from Input stream when a connection is established to a
             * resource. If the timeout expires before there is data available
             * for read, a java.net.SocketTimeoutException is raised. A
             * timeout of zero is interpreted as an infinite timeout.
             * <p> Some non-standard implementation of this method ignores the
             * specified timeout. To see the read timeout set, please call
             * getReadTimeout().
             * @param timeout an {#code int} that specifies the timeout
             *  value to be used in milliseconds
             * @throws IllegalArgumentException if the timeout parameter is negative
             * @see #getReadTimeout()
             * @see InputStream#read()
             * @since 1.5
             */
            // @ts-ignore
            public setReadTimeout(timeout: number /*int*/): void
            /**
             * Returns setting for read timeout. 0 return implies that the
             * option is disabled (i.e., timeout of infinity).
             * @return an {#code int} that indicates the read timeout
             *          value in milliseconds
             * @see #setReadTimeout(int)
             * @see InputStream#read()
             * @since 1.5
             */
            // @ts-ignore
            public getReadTimeout(): number /*int*/
            /**
             * Returns the value of this {@code URLConnection}'s {@code URL}
             * field.
             * @return the value of this {#code URLConnection}'s {@code URL}
             *           field.
             * @see java.net.URLConnection#url
             */
            // @ts-ignore
            public getURL(): java.net.URL
            /**
             * Returns the value of the {@code content-length} header field.
             * <P>
             * <B>Note</B>: {@link #getContentLengthLong() getContentLengthLong()}
             * should be preferred over this method, since it returns a {@code long}
             * instead and is therefore more portable.</P>
             * @return the content length of the resource that this connection's URL
             *           references, {#code -1} if the content length is not known,
             *           or if the content length is greater than Integer.MAX_VALUE.
             */
            // @ts-ignore
            public getContentLength(): number /*int*/
            /**
             * Returns the value of the {@code content-length} header field as a
             * long.
             * @return the content length of the resource that this connection's URL
             *           references, or {#code -1} if the content length is
             *           not known.
             * @since 7.0
             */
            // @ts-ignore
            public getContentLengthLong(): number /*long*/
            /**
             * Returns the value of the {@code content-type} header field.
             * @return the content type of the resource that the URL references,
             *           or {#code null} if not known.
             * @see java.net.URLConnection#getHeaderField(java.lang.String)
             */
            // @ts-ignore
            public getContentType(): string
            /**
             * Returns the value of the {@code content-encoding} header field.
             * @return the content encoding of the resource that the URL references,
             *           or {#code null} if not known.
             * @see java.net.URLConnection#getHeaderField(java.lang.String)
             */
            // @ts-ignore
            public getContentEncoding(): string
            /**
             * Returns the value of the {@code expires} header field.
             * @return the expiration date of the resource that this URL references,
             *           or 0 if not known. The value is the number of milliseconds since
             *           January 1, 1970 GMT.
             * @see java.net.URLConnection#getHeaderField(java.lang.String)
             */
            // @ts-ignore
            public getExpiration(): number /*long*/
            /**
             * Returns the value of the {@code date} header field.
             * @return the sending date of the resource that the URL references,
             *           or {#code 0} if not known. The value returned is the
             *           number of milliseconds since January 1, 1970 GMT.
             * @see java.net.URLConnection#getHeaderField(java.lang.String)
             */
            // @ts-ignore
            public getDate(): number /*long*/
            /**
             * Returns the value of the {@code last-modified} header field.
             * The result is the number of milliseconds since January 1, 1970 GMT.
             * @return the date the resource referenced by this
             *           {#code URLConnection} was last modified, or 0 if not known.
             * @see java.net.URLConnection#getHeaderField(java.lang.String)
             */
            // @ts-ignore
            public getLastModified(): number /*long*/
            /**
             * Returns the value of the named header field.
             * <p>
             * If called on a connection that sets the same header multiple times
             * with possibly different values, only the last value is returned.
             * @param name   the name of a header field.
             * @return the value of the named header field, or {#code null}
             *           if there is no such field in the header.
             */
            // @ts-ignore
            public getHeaderField(name: java.lang.String | string): string
            /**
             * Returns an unmodifiable Map of the header fields.
             * The Map keys are Strings that represent the
             * response-header field names. Each Map value is an
             * unmodifiable List of Strings that represents
             * the corresponding field values.
             * @return a Map of header fields
             * @since 1.4
             */
            // @ts-ignore
            public getHeaderFields(): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
            /**
             * Returns the value of the named field parsed as a number.
             * <p>
             * This form of {@code getHeaderField} exists because some
             * connection types (e.g., {@code http-ng}) have pre-parsed
             * headers. Classes for that connection type can override this method
             * and short-circuit the parsing.
             * @param name      the name of the header field.
             * @param Default   the default value.
             * @return the value of the named field, parsed as an integer. The
             *           {#code Default} value is returned if the field is
             *           missing or malformed.
             */
            // @ts-ignore
            public getHeaderFieldInt(name: java.lang.String | string, Default: number /*int*/): number /*int*/
            /**
             * Returns the value of the named field parsed as a number.
             * <p>
             * This form of {@code getHeaderField} exists because some
             * connection types (e.g., {@code http-ng}) have pre-parsed
             * headers. Classes for that connection type can override this method
             * and short-circuit the parsing.
             * @param name      the name of the header field.
             * @param Default   the default value.
             * @return the value of the named field, parsed as a long. The
             *           {#code Default} value is returned if the field is
             *           missing or malformed.
             * @since 7.0
             */
            // @ts-ignore
            public getHeaderFieldLong(name: java.lang.String | string, Default: number /*long*/): number /*long*/
            /**
             * Returns the value of the named field parsed as date.
             * The result is the number of milliseconds since January 1, 1970 GMT
             * represented by the named field.
             * <p>
             * This form of {@code getHeaderField} exists because some
             * connection types (e.g., {@code http-ng}) have pre-parsed
             * headers. Classes for that connection type can override this method
             * and short-circuit the parsing.
             * @param name     the name of the header field.
             * @param Default   a default value.
             * @return the value of the field, parsed as a date. The value of the
             *           {#code Default} argument is returned if the field is
             *           missing or malformed.
             */
            // @ts-ignore
            public getHeaderFieldDate(name: java.lang.String | string, Default: number /*long*/): number /*long*/
            /**
             * Returns the key for the {@code n}<sup>th</sup> header field.
             * It returns {@code null} if there are fewer than {@code n+1} fields.
             * @param n   an index, where {#code n>=0}
             * @return the key for the {#code n}<sup>th</sup> header field,
             *           or {@code null} if there are fewer than {@code n+1}
             *           fields.
             */
            // @ts-ignore
            public getHeaderFieldKey(n: number /*int*/): string
            /**
             * Returns the value for the {@code n}<sup>th</sup> header field.
             * It returns {@code null} if there are fewer than
             * {@code n+1}fields.
             * <p>
             * This method can be used in conjunction with the
             * {@link #getHeaderFieldKey(int) getHeaderFieldKey} method to iterate through all
             * the headers in the message.
             * @param n   an index, where {#code n>=0}
             * @return the value of the {#code n}<sup>th</sup> header field
             *           or {@code null} if there are fewer than {@code n+1} fields
             * @see java.net.URLConnection#getHeaderFieldKey(int)
             */
            // @ts-ignore
            public getHeaderField(n: number /*int*/): string
            /**
             * Retrieves the contents of this URL connection.
             * <p>
             * This method first determines the content type of the object by
             * calling the {@code getContentType} method. If this is
             * the first time that the application has seen that specific content
             * type, a content handler for that content type is created:
             * <ol>
             * <li>If the application has set up a content handler factory instance
             * using the {@code setContentHandlerFactory} method, the
             * {@code createContentHandler} method of that instance is called
             * with the content type as an argument; the result is a content
             * handler for that content type.
             * <li>If no content handler factory has yet been set up, or if the
             * factory's {@code createContentHandler} method returns
             * {@code null}, then the application loads the class named:
             * <blockquote><pre>
             * sun.net.www.content.&lt;<i>contentType</i>&gt;
             * </pre></blockquote>
             * where &lt;<i>contentType</i>&gt; is formed by taking the
             * content-type string, replacing all slash characters with a
             * {@code period} ('.'), and all other non-alphanumeric characters
             * with the underscore character '{@code _}'. The alphanumeric
             * characters are specifically the 26 uppercase ASCII letters
             * '{@code A}' through '{@code Z}', the 26 lowercase ASCII
             * letters '{@code a}' through '{@code z}', and the 10 ASCII
             * digits '{@code 0}' through '{@code 9}'. If the specified
             * class does not exist, or is not a subclass of
             * {@code ContentHandler}, then an
             * {@code UnknownServiceException} is thrown.
             * </ol>
             * @return the object fetched. The {#code instanceof} operator
             *                should be used to determine the specific kind of object
             *                returned.
             * @exception IOException              if an I/O error occurs while
             *                getting the content.
             * @exception UnknownServiceException  if the protocol does not support
             *                the content type.
             * @see java.net.ContentHandlerFactory#createContentHandler(java.lang.String)
             * @see java.net.URLConnection#getContentType()
             * @see java.net.URLConnection#setContentHandlerFactory(java.net.ContentHandlerFactory)
             */
            // @ts-ignore
            public getContent(): any
            /**
             * Retrieves the contents of this URL connection.
             * @param classes the {#code Class} array
             *  indicating the requested types
             * @return the object fetched that is the first match of the type
             *                specified in the classes array. null if none of
             *                the requested types are supported.
             *                The {#code instanceof} operator should be used to
             *                determine the specific kind of object returned.
             * @exception IOException              if an I/O error occurs while
             *                getting the content.
             * @exception UnknownServiceException  if the protocol does not support
             *                the content type.
             * @see java.net.URLConnection#getContent()
             * @see java.net.ContentHandlerFactory#createContentHandler(java.lang.String)
             * @see java.net.URLConnection#getContent(java.lang.Class[])
             * @see java.net.URLConnection#setContentHandlerFactory(java.net.ContentHandlerFactory)
             * @since 1.3
             */
            // @ts-ignore
            public getContent(classes: java.lang.Class<any>[]): any
            /**
             * Returns a permission object representing the permission
             * necessary to make the connection represented by this
             * object. This method returns null if no permission is
             * required to make the connection. By default, this method
             * returns {@code java.security.AllPermission}. Subclasses
             * should override this method and return the permission
             * that best represents the permission required to make a
             * a connection to the URL. For example, a {@code URLConnection}
             * representing a {@code file:} URL would return a
             * {@code java.io.FilePermission} object.
             * <p>The permission returned may dependent upon the state of the
             * connection. For example, the permission before connecting may be
             * different from that after connecting. For example, an HTTP
             * sever, say foo.com, may redirect the connection to a different
             * host, say bar.com. Before connecting the permission returned by
             * the connection will represent the permission needed to connect
             * to foo.com, while the permission returned after connecting will
             * be to bar.com.
             * <p>Permissions are generally used for two purposes: to protect
             * caches of objects obtained through URLConnections, and to check
             * the right of a recipient to learn about a particular URL. In
             * the first case, the permission should be obtained
             * <em>after</em> the object has been obtained. For example, in an
             * HTTP connection, this will represent the permission to connect
             * to the host from which the data was ultimately fetched. In the
             * second case, the permission should be obtained and tested
             * <em>before</em> connecting.
             * @return the permission object representing the permission
             *  necessary to make the connection represented by this
             *  URLConnection.
             * @exception IOException if the computation of the permission
             *  requires network or file I/O and an exception occurs while
             *  computing it.
             */
            // @ts-ignore
            public getPermission(): java.security.Permission
            /**
             * Returns an input stream that reads from this open connection.
             * A SocketTimeoutException can be thrown when reading from the
             * returned input stream if the read timeout expires before data
             * is available for read.
             * @return an input stream that reads from this open connection.
             * @exception IOException              if an I/O error occurs while
             *                creating the input stream.
             * @exception UnknownServiceException  if the protocol does not support
             *                input.
             * @see #setReadTimeout(int)
             * @see #getReadTimeout()
             */
            // @ts-ignore
            public getInputStream(): java.io.InputStream
            /**
             * Returns an output stream that writes to this connection.
             * @return an output stream that writes to this connection.
             * @exception IOException              if an I/O error occurs while
             *                creating the output stream.
             * @exception UnknownServiceException  if the protocol does not support
             *                output.
             */
            // @ts-ignore
            public getOutputStream(): java.io.OutputStream
            /**
             * Returns a {@code String} representation of this URL connection.
             * @return a string representation of this {#code URLConnection}.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Sets the value of the {@code doInput} field for this
             * {@code URLConnection} to the specified value.
             * <p>
             * A URL connection can be used for input and/or output.  Set the DoInput
             * flag to true if you intend to use the URL connection for input,
             * false if not.  The default is true.
             * @param doinput   the new value.
             * @throws IllegalStateException if already connected
             * @see java.net.URLConnection#doInput
             * @see #getDoInput()
             */
            // @ts-ignore
            public setDoInput(doinput: boolean): void
            /**
             * Returns the value of this {@code URLConnection}'s
             * {@code doInput} flag.
             * @return the value of this {#code URLConnection}'s
             *           {@code doInput} flag.
             * @see #setDoInput(boolean)
             */
            // @ts-ignore
            public getDoInput(): boolean
            /**
             * Sets the value of the {@code doOutput} field for this
             * {@code URLConnection} to the specified value.
             * <p>
             * A URL connection can be used for input and/or output.  Set the DoOutput
             * flag to true if you intend to use the URL connection for output,
             * false if not.  The default is false.
             * @param dooutput   the new value.
             * @throws IllegalStateException if already connected
             * @see #getDoOutput()
             */
            // @ts-ignore
            public setDoOutput(dooutput: boolean): void
            /**
             * Returns the value of this {@code URLConnection}'s
             * {@code doOutput} flag.
             * @return the value of this {#code URLConnection}'s
             *           {@code doOutput} flag.
             * @see #setDoOutput(boolean)
             */
            // @ts-ignore
            public getDoOutput(): boolean
            /**
             * Set the value of the {@code allowUserInteraction} field of
             * this {@code URLConnection}.
             * @param allowuserinteraction   the new value.
             * @throws IllegalStateException if already connected
             * @see #getAllowUserInteraction()
             */
            // @ts-ignore
            public setAllowUserInteraction(allowuserinteraction: boolean): void
            /**
             * Returns the value of the {@code allowUserInteraction} field for
             * this object.
             * @return the value of the {#code allowUserInteraction} field for
             *           this object.
             * @see #setAllowUserInteraction(boolean)
             */
            // @ts-ignore
            public getAllowUserInteraction(): boolean
            /**
             * Sets the default value of the
             * {@code allowUserInteraction} field for all future
             * {@code URLConnection} objects to the specified value.
             * @param defaultallowuserinteraction   the new value.
             * @see #getDefaultAllowUserInteraction()
             */
            // @ts-ignore
            public static setDefaultAllowUserInteraction(defaultallowuserinteraction: boolean): void
            /**
             * Returns the default value of the {@code allowUserInteraction}
             * field.
             * <p>
             * Ths default is "sticky", being a part of the static state of all
             * URLConnections.  This flag applies to the next, and all following
             * URLConnections that are created.
             * @return the default value of the {#code allowUserInteraction}
             *           field.
             * @see #setDefaultAllowUserInteraction(boolean)
             */
            // @ts-ignore
            public static getDefaultAllowUserInteraction(): boolean
            /**
             * Sets the value of the {@code useCaches} field of this
             * {@code URLConnection} to the specified value.
             * <p>
             * Some protocols do caching of documents.  Occasionally, it is important
             * to be able to "tunnel through" and ignore the caches (e.g., the
             * "reload" button in a browser).  If the UseCaches flag on a connection
             * is true, the connection is allowed to use whatever caches it can.
             * If false, caches are to be ignored.
             * The default value comes from DefaultUseCaches, which defaults to
             * true.
             * @param usecaches a {#code boolean} indicating whether
             *  or not to allow caching
             * @throws IllegalStateException if already connected
             * @see #getUseCaches()
             */
            // @ts-ignore
            public setUseCaches(usecaches: boolean): void
            /**
             * Returns the value of this {@code URLConnection}'s
             * {@code useCaches} field.
             * @return the value of this {#code URLConnection}'s
             *           {@code useCaches} field.
             * @see #setUseCaches(boolean)
             */
            // @ts-ignore
            public getUseCaches(): boolean
            /**
             * Sets the value of the {@code ifModifiedSince} field of
             * this {@code URLConnection} to the specified value.
             * @param ifmodifiedsince   the new value.
             * @throws IllegalStateException if already connected
             * @see #getIfModifiedSince()
             */
            // @ts-ignore
            public setIfModifiedSince(ifmodifiedsince: number /*long*/): void
            /**
             * Returns the value of this object's {@code ifModifiedSince} field.
             * @return the value of this object's {#code ifModifiedSince} field.
             * @see #setIfModifiedSince(long)
             */
            // @ts-ignore
            public getIfModifiedSince(): number /*long*/
            /**
             * Returns the default value of a {@code URLConnection}'s
             * {@code useCaches} flag.
             * <p>
             * Ths default is "sticky", being a part of the static state of all
             * URLConnections.  This flag applies to the next, and all following
             * URLConnections that are created.
             * @return the default value of a {#code URLConnection}'s
             *           {@code useCaches} flag.
             * @see #setDefaultUseCaches(boolean)
             */
            // @ts-ignore
            public getDefaultUseCaches(): boolean
            /**
             * Sets the default value of the {@code useCaches} field to the
             * specified value.
             * @param defaultusecaches   the new value.
             * @see #getDefaultUseCaches()
             */
            // @ts-ignore
            public setDefaultUseCaches(defaultusecaches: boolean): void
            /**
             * Sets the general request property. If a property with the key already
             * exists, overwrite its value with the new value.
             * <p> NOTE: HTTP requires all request properties which can
             * legally have multiple instances with the same key
             * to use a comma-separated list syntax which enables multiple
             * properties to be appended into a single property.
             * @param key     the keyword by which the request is known
             *                   (e.g., "{#code Accept}").
             * @param value   the value associated with it.
             * @throws IllegalStateException if already connected
             * @throws NullPointerException if key is <CODE>null</CODE>
             * @see #getRequestProperty(java.lang.String)
             */
            // @ts-ignore
            public setRequestProperty(key: java.lang.String | string, value: java.lang.String | string): void
            /**
             * Adds a general request property specified by a
             * key-value pair.  This method will not overwrite
             * existing values associated with the same key.
             * @param key     the keyword by which the request is known
             *                   (e.g., "{#code Accept}").
             * @param value  the value associated with it.
             * @throws IllegalStateException if already connected
             * @throws NullPointerException if key is null
             * @see #getRequestProperties()
             * @since 1.4
             */
            // @ts-ignore
            public addRequestProperty(key: java.lang.String | string, value: java.lang.String | string): void
            /**
             * Returns the value of the named general request property for this
             * connection.
             * @param key the keyword by which the request is known (e.g., "Accept").
             * @return the value of the named general request property for this
             *            connection. If key is null, then null is returned.
             * @throws IllegalStateException if already connected
             * @see #setRequestProperty(java.lang.String, java.lang.String)
             */
            // @ts-ignore
            public getRequestProperty(key: java.lang.String | string): string
            /**
             * Returns an unmodifiable Map of general request
             * properties for this connection. The Map keys
             * are Strings that represent the request-header
             * field names. Each Map value is a unmodifiable List
             * of Strings that represents the corresponding
             * field values.
             * @return a Map of the general request properties for this connection.
             * @throws IllegalStateException if already connected
             * @since 1.4
             */
            // @ts-ignore
            public getRequestProperties(): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
            /**
             * Sets the default value of a general request property. When a
             * {@code URLConnection} is created, it is initialized with
             * these properties.
             * @param key     the keyword by which the request is known
             *                   (e.g., "{#code Accept}").
             * @param value   the value associated with the key.
             * @see java.net.URLConnection#setRequestProperty(java.lang.String,java.lang.String)
             * @deprecated The instance specific setRequestProperty method
             *  should be used after an appropriate instance of URLConnection
             *  is obtained. Invoking this method will have no effect.
             * @see #getDefaultRequestProperty(java.lang.String)
             */
            // @ts-ignore
            public static setDefaultRequestProperty(key: java.lang.String | string, value: java.lang.String | string): void
            /**
             * Returns the value of the default request property. Default request
             * properties are set for every connection.
             * @param key the keyword by which the request is known (e.g., "Accept").
             * @return the value of the default request property
             *  for the specified key.
             * @see java.net.URLConnection#getRequestProperty(java.lang.String)
             * @deprecated The instance specific getRequestProperty method
             *  should be used after an appropriate instance of URLConnection
             *  is obtained.
             * @see #setDefaultRequestProperty(java.lang.String, java.lang.String)
             */
            // @ts-ignore
            public static getDefaultRequestProperty(key: java.lang.String | string): string
            /**
             * Sets the {@code ContentHandlerFactory} of an
             * application. It can be called at most once by an application.
             * <p>
             * The {@code ContentHandlerFactory} instance is used to
             * construct a content handler from a content type
             * <p>
             * If there is a security manager, this method first calls
             * the security manager's {@code checkSetFactory} method
             * to ensure the operation is allowed.
             * This could result in a SecurityException.
             * @param fac   the desired factory.
             * @exception Error  if the factory has already been defined.
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkSetFactory} method doesn't allow the operation.
             * @see java.net.ContentHandlerFactory
             * @see java.net.URLConnection#getContent()
             * @see SecurityManager#checkSetFactory
             */
            // @ts-ignore
            public static setContentHandlerFactory(fac: java.net.ContentHandlerFactory): void
            /**
             * Tries to determine the content type of an object, based
             * on the specified "file" component of a URL.
             * This is a convenience method that can be used by
             * subclasses that override the {@code getContentType} method.
             * @param fname   a filename.
             * @return a guess as to what the content type of the object is,
             *           based upon its file name.
             * @see java.net.URLConnection#getContentType()
             */
            // @ts-ignore
            public static guessContentTypeFromName(fname: java.lang.String | string): string
            /**
             * Tries to determine the type of an input stream based on the
             * characters at the beginning of the input stream. This method can
             * be used by subclasses that override the
             * {@code getContentType} method.
             * <p>
             * Ideally, this routine would not be needed. But many
             * {@code http} servers return the incorrect content type; in
             * addition, there are many nonstandard extensions. Direct inspection
             * of the bytes to determine the content type is often more accurate
             * than believing the content type claimed by the {@code http} server.
             * @param is   an input stream that supports marks.
             * @return a guess at the content type, or {#code null} if none
             *              can be determined.
             * @exception IOException  if an I/O error occurs while reading the
             *                input stream.
             * @see java.io.InputStream#mark(int)
             * @see java.io.InputStream#markSupported()
             * @see java.net.URLConnection#getContentType()
             */
            // @ts-ignore
            public static guessContentTypeFromStream(jis: java.io.InputStream): string
        }
    }
}
