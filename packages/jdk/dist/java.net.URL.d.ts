declare namespace java {
    namespace net {
        /**
         * Class {@code URL} represents a Uniform Resource
         * Locator, a pointer to a "resource" on the World
         * Wide Web. A resource can be something as simple as a file or a
         * directory, or it can be a reference to a more complicated object,
         * such as a query to a database or to a search engine. More
         * information on the types of URLs and their formats can be found at:
         * <a href=
         * "http://web.archive.org/web/20051219043731/http://archive.ncsa.uiuc.edu/SDG/Software/Mosaic/Demo/url-primer.html">
         * <i>Types of URL</i></a>
         * <p>
         * In general, a URL can be broken into several parts. Consider the
         * following example:
         * <blockquote><pre>
         * http://www.example.com/docs/resource1.html
         * </pre></blockquote>
         * <p>
         * The URL above indicates that the protocol to use is
         * {@code http} (HyperText Transfer Protocol) and that the
         * information resides on a host machine named
         * {@code www.example.com}. The information on that host
         * machine is named {@code /docs/resource1.html}. The exact
         * meaning of this name on the host machine is both protocol
         * dependent and host dependent. The information normally resides in
         * a file, but it could be generated on the fly. This component of
         * the URL is called the <i>path</i> component.
         * <p>
         * A URL can optionally specify a "port", which is the
         * port number to which the TCP connection is made on the remote host
         * machine. If the port is not specified, the default port for
         * the protocol is used instead. For example, the default port for
         * {@code http} is {@code 80}. An alternative port could be
         * specified as:
         * <blockquote><pre>
         * http://www.example.com:1080/docs/resource1.html
         * </pre></blockquote>
         * <p>
         * The syntax of {@code URL} is defined by  <a
         * href="http://www.ietf.org/rfc/rfc2396.txt"><i>RFC&nbsp;2396: Uniform
         * Resource Identifiers (URI): Generic Syntax</i></a>, amended by <a
         * href="http://www.ietf.org/rfc/rfc2732.txt"><i>RFC&nbsp;2732: Format for
         * Literal IPv6 Addresses in URLs</i></a>. The Literal IPv6 address format
         * also supports scope_ids. The syntax and usage of scope_ids is described
         * <a href="Inet6Address.html#scoped">here</a>.
         * <p>
         * A URL may have appended to it a "fragment", also known
         * as a "ref" or a "reference". The fragment is indicated by the sharp
         * sign character "#" followed by more characters. For example,
         * <blockquote><pre>
         * http://java.sun.com/index.html#chapter1
         * </pre></blockquote>
         * <p>
         * This fragment is not technically part of the URL. Rather, it
         * indicates that after the specified resource is retrieved, the
         * application is specifically interested in that part of the
         * document that has the tag {@code chapter1} attached to it. The
         * meaning of a tag is resource specific.
         * <p>
         * An application can also specify a "relative URL",
         * which contains only enough information to reach the resource
         * relative to another URL. Relative URLs are frequently used within
         * HTML pages. For example, if the contents of the URL:
         * <blockquote><pre>
         * http://java.sun.com/index.html
         * </pre></blockquote>
         * contained within it the relative URL:
         * <blockquote><pre>
         * FAQ.html
         * </pre></blockquote>
         * it would be a shorthand for:
         * <blockquote><pre>
         * http://java.sun.com/FAQ.html
         * </pre></blockquote>
         * <p>
         * The relative URL need not specify all the components of a URL. If
         * the protocol, host name, or port number is missing, the value is
         * inherited from the fully specified URL. The file component must be
         * specified. The optional fragment is not inherited.
         * <p>
         * The URL class does not itself encode or decode any URL components
         * according to the escaping mechanism defined in RFC2396. It is the
         * responsibility of the caller to encode any fields, which need to be
         * escaped prior to calling URL, and also to decode any escaped fields,
         * that are returned from URL. Furthermore, because URL has no knowledge
         * of URL escaping, it does not recognise equivalence between the encoded
         * or decoded form of the same URL. For example, the two URLs:<br>
         * <pre>    http://foo.com/hello world/ and http://foo.com/hello%20world</pre>
         * would be considered not equal to each other.
         * <p>
         * Note, the {@link java.net.URI} class does perform escaping of its
         * component fields in certain circumstances. The recommended way
         * to manage the encoding and decoding of URLs is to use {@link java.net.URI},
         * and to convert between these two classes using {@link #toURI()} and
         * {@link URI#toURL()}.
         * <p>
         * The {@link URLEncoder} and {@link URLDecoder} classes can also be
         * used, but only for HTML form encoding, which is not the same
         * as the encoding scheme defined in RFC2396.
         * @author James Gosling
         * @since JDK1.0
         */
        // @ts-ignore
        class URL extends java.lang.Object implements java.io.Serializable {
            /**
             * Creates a {@code URL} object from the specified
             * {@code protocol}, {@code host}, {@code port}
             * number, and {@code file}.<p>
             * {@code host} can be expressed as a host name or a literal
             * IP address. If IPv6 literal address is used, it should be
             * enclosed in square brackets ({@code '['} and {@code ']'}), as
             * specified by <a
             * href="http://www.ietf.org/rfc/rfc2732.txt">RFC&nbsp;2732</a>;
             * However, the literal IPv6 address format defined in <a
             * href="http://www.ietf.org/rfc/rfc2373.txt"><i>RFC&nbsp;2373: IP
             * Version 6 Addressing Architecture</i></a> is also accepted.<p>
             * Specifying a {@code port} number of {@code -1}
             * indicates that the URL should use the default port for the
             * protocol.<p>
             * If this is the first URL object being created with the specified
             * protocol, a <i>stream protocol handler</i> object, an instance of
             * class {@code URLStreamHandler}, is created for that protocol:
             * <ol>
             * <li>If the application has previously set up an instance of
             * {@code URLStreamHandlerFactory} as the stream handler factory,
             * then the {@code createURLStreamHandler} method of that instance
             * is called with the protocol string as an argument to create the
             * stream protocol handler.
             * <li>If no {@code URLStreamHandlerFactory} has yet been set up,
             * or if the factory's {@code createURLStreamHandler} method
             * returns {@code null}, then the constructor finds the
             * value of the system property:
             * <blockquote><pre>
             * java.protocol.handler.pkgs
             * </pre></blockquote>
             * If the value of that system property is not {@code null},
             * it is interpreted as a list of packages separated by a vertical
             * slash character '{@code |}'. The constructor tries to load
             * the class named:
             * <blockquote><pre>
             * &lt;<i>package</i>&gt;.&lt;<i>protocol</i>&gt;.Handler
             * </pre></blockquote>
             * where &lt;<i>package</i>&gt; is replaced by the name of the package
             * and &lt;<i>protocol</i>&gt; is replaced by the name of the protocol.
             * If this class does not exist, or if the class exists but it is not
             * a subclass of {@code URLStreamHandler}, then the next package
             * in the list is tried.
             * <li>If the previous step fails to find a protocol handler, then the
             * constructor tries to load from a system default package.
             * <blockquote><pre>
             * &lt;<i>system default package</i>&gt;.&lt;<i>protocol</i>&gt;.Handler
             * </pre></blockquote>
             * If this class does not exist, or if the class exists but it is not a
             * subclass of {@code URLStreamHandler}, then a
             * {@code MalformedURLException} is thrown.
             * </ol>
             * <p>Protocol handlers for the following protocols are guaranteed
             * to exist on the search path :-
             * <blockquote><pre>
             * http, https, file, and jar
             * </pre></blockquote>
             * Protocol handlers for additional protocols may also be
             * available.
             * <p>No validation of the inputs is performed by this constructor.
             * @param protocol   the name of the protocol to use.
             * @param host       the name of the host.
             * @param port       the port number on the host.
             * @param file       the file on the host
             * @exception MalformedURLException  if an unknown protocol is specified.
             * @see java.lang.System#getProperty(java.lang.String)
             * @see java.net.URL#setURLStreamHandlerFactory(
             *                   java.net.URLStreamHandlerFactory)
             * @see java.net.URLStreamHandler
             * @see java.net.URLStreamHandlerFactory#createURLStreamHandler(
             *                   java.lang.String)
             */
            // @ts-ignore
            constructor(protocol: java.lang.String | string, host: java.lang.String | string, port: number /*int*/, file: java.lang.String | string)
            /**
             * Creates a URL from the specified {@code protocol}
             * name, {@code host} name, and {@code file} name. The
             * default port for the specified protocol is used.
             * <p>
             * This method is equivalent to calling the four-argument
             * constructor with the arguments being {@code protocol},
             * {@code host}, {@code -1}, and {@code file}.
             * No validation of the inputs is performed by this constructor.
             * @param protocol   the name of the protocol to use.
             * @param host       the name of the host.
             * @param file       the file on the host.
             * @exception MalformedURLException  if an unknown protocol is specified.
             * @see java.net.URL#URL(java.lang.String, java.lang.String,
             *                   int, java.lang.String)
             */
            // @ts-ignore
            constructor(protocol: java.lang.String | string, host: java.lang.String | string, file: java.lang.String | string)
            /**
             * Creates a {@code URL} object from the specified
             * {@code protocol}, {@code host}, {@code port}
             * number, {@code file}, and {@code handler}. Specifying
             * a {@code port} number of {@code -1} indicates that
             * the URL should use the default port for the protocol. Specifying
             * a {@code handler} of {@code null} indicates that the URL
             * should use a default stream handler for the protocol, as outlined
             * for:
             * java.net.URL#URL(java.lang.String, java.lang.String, int,
             * java.lang.String)
             * <p>If the handler is not null and there is a security manager,
             * the security manager's {@code checkPermission}
             * method is called with a
             * {@code NetPermission("specifyStreamHandler")} permission.
             * This may result in a SecurityException.
             * No validation of the inputs is performed by this constructor.
             * @param protocol   the name of the protocol to use.
             * @param host       the name of the host.
             * @param port       the port number on the host.
             * @param file       the file on the host
             * @param handler    the stream handler for the URL.
             * @exception MalformedURLException  if an unknown protocol is specified.
             * @exception SecurityException
             *         if a security manager exists and its
             *         {#code checkPermission} method doesn't allow
             *         specifying a stream handler explicitly.
             * @see java.lang.System#getProperty(java.lang.String)
             * @see java.net.URL#setURLStreamHandlerFactory(
             *                   java.net.URLStreamHandlerFactory)
             * @see java.net.URLStreamHandler
             * @see java.net.URLStreamHandlerFactory#createURLStreamHandler(
             *                   java.lang.String)
             * @see SecurityManager#checkPermission
             * @see java.net.NetPermission
             */
            // @ts-ignore
            constructor(protocol: java.lang.String | string, host: java.lang.String | string, port: number /*int*/, file: java.lang.String | string, handler: java.net.URLStreamHandler)
            /**
             * Creates a {@code URL} object from the {@code String}
             * representation.
             * <p>
             * This constructor is equivalent to a call to the two-argument
             * constructor with a {@code null} first argument.
             * @param spec   the {#code String} to parse as a URL.
             * @exception MalformedURLException  if no protocol is specified, or an
             *                unknown protocol is found, or {#code spec} is {@code null}.
             * @see java.net.URL#URL(java.net.URL, java.lang.String)
             */
            // @ts-ignore
            constructor(spec: java.lang.String | string)
            /**
             * Creates a URL by parsing the given spec within a specified context.
             * The new URL is created from the given context URL and the spec
             * argument as described in
             * RFC2396 &quot;Uniform Resource Identifiers : Generic * Syntax&quot; :
             * <blockquote><pre>
             * &lt;scheme&gt;://&lt;authority&gt;&lt;path&gt;?&lt;query&gt;#&lt;fragment&gt;
             * </pre></blockquote>
             * The reference is parsed into the scheme, authority, path, query and
             * fragment parts. If the path component is empty and the scheme,
             * authority, and query components are undefined, then the new URL is a
             * reference to the current document. Otherwise, the fragment and query
             * parts present in the spec are used in the new URL.
             * <p>
             * If the scheme component is defined in the given spec and does not match
             * the scheme of the context, then the new URL is created as an absolute
             * URL based on the spec alone. Otherwise the scheme component is inherited
             * from the context URL.
             * <p>
             * If the authority component is present in the spec then the spec is
             * treated as absolute and the spec authority and path will replace the
             * context authority and path. If the authority component is absent in the
             * spec then the authority of the new URL will be inherited from the
             * context.
             * <p>
             * If the spec's path component begins with a slash character
             * &quot;/&quot; then the
             * path is treated as absolute and the spec path replaces the context path.
             * <p>
             * Otherwise, the path is treated as a relative path and is appended to the
             * context path, as described in RFC2396. Also, in this case,
             * the path is canonicalized through the removal of directory
             * changes made by occurrences of &quot;..&quot; and &quot;.&quot;.
             * <p>
             * For a more detailed description of URL parsing, refer to RFC2396.
             * @param context   the context in which to parse the specification.
             * @param spec      the {#code String} to parse as a URL.
             * @exception MalformedURLException  if no protocol is specified, or an
             *                unknown protocol is found, or {#code spec} is {@code null}.
             * @see java.net.URL#URL(java.lang.String, java.lang.String,
             *                   int, java.lang.String)
             * @see java.net.URLStreamHandler
             * @see java.net.URLStreamHandler#parseURL(java.net.URL,
             *                   java.lang.String, int, int)
             */
            // @ts-ignore
            constructor(context: java.net.URL, spec: java.lang.String | string)
            /**
             * Creates a URL by parsing the given spec with the specified handler
             * within a specified context. If the handler is null, the parsing
             * occurs as with the two argument constructor.
             * @param context   the context in which to parse the specification.
             * @param spec      the {#code String} to parse as a URL.
             * @param handler   the stream handler for the URL.
             * @exception MalformedURLException  if no protocol is specified, or an
             *                unknown protocol is found, or {#code spec} is {@code null}.
             * @exception SecurityException
             *         if a security manager exists and its
             *         {#code checkPermission} method doesn't allow
             *         specifying a stream handler.
             * @see java.net.URL#URL(java.lang.String, java.lang.String,
             *                   int, java.lang.String)
             * @see java.net.URLStreamHandler
             * @see java.net.URLStreamHandler#parseURL(java.net.URL,
             *                   java.lang.String, int, int)
             */
            // @ts-ignore
            constructor(context: java.net.URL, spec: java.lang.String | string, handler: java.net.URLStreamHandler)
            /**
             * Gets the query part of this {@code URL}.
             * @return the query part of this {#code URL},
             *  or <CODE>null</CODE> if one does not exist
             * @since 1.3
             */
            // @ts-ignore
            public getQuery(): string
            /**
             * Gets the path part of this {@code URL}.
             * @return the path part of this {#code URL}, or an
             *  empty string if one does not exist
             * @since 1.3
             */
            // @ts-ignore
            public getPath(): string
            /**
             * Gets the userInfo part of this {@code URL}.
             * @return the userInfo part of this {#code URL}, or
             *  <CODE>null</CODE> if one does not exist
             * @since 1.3
             */
            // @ts-ignore
            public getUserInfo(): string
            /**
             * Gets the authority part of this {@code URL}.
             * @return the authority part of this {#code URL}
             * @since 1.3
             */
            // @ts-ignore
            public getAuthority(): string
            /**
             * Gets the port number of this {@code URL}.
             * @return the port number, or -1 if the port is not set
             */
            // @ts-ignore
            public getPort(): number /*int*/
            /**
             * Gets the default port number of the protocol associated
             * with this {@code URL}. If the URL scheme or the URLStreamHandler
             * for the URL do not define a default port number,
             * then -1 is returned.
             * @return the port number
             * @since 1.4
             */
            // @ts-ignore
            public getDefaultPort(): number /*int*/
            /**
             * Gets the protocol name of this {@code URL}.
             * @return the protocol of this {#code URL}.
             */
            // @ts-ignore
            public getProtocol(): string
            /**
             * Gets the host name of this {@code URL}, if applicable.
             * The format of the host conforms to RFC 2732, i.e. for a
             * literal IPv6 address, this method will return the IPv6 address
             * enclosed in square brackets ({@code '['} and {@code ']'}).
             * @return the host name of this {#code URL}.
             */
            // @ts-ignore
            public getHost(): string
            /**
             * Gets the file name of this {@code URL}.
             * The returned file portion will be
             * the same as <CODE>getPath()</CODE>, plus the concatenation of
             * the value of <CODE>getQuery()</CODE>, if any. If there is
             * no query portion, this method and <CODE>getPath()</CODE> will
             * return identical results.
             * @return the file name of this {#code URL},
             *  or an empty string if one does not exist
             */
            // @ts-ignore
            public getFile(): string
            /**
             * Gets the anchor (also known as the "reference") of this
             * {@code URL}.
             * @return the anchor (also known as the "reference") of this
             *           {#code URL}, or <CODE>null</CODE> if one does not exist
             */
            // @ts-ignore
            public getRef(): string
            /**
             * Compares this URL for equality with another object.<p>
             * If the given object is not a URL then this method immediately returns
             * {@code false}.<p>
             * Two URL objects are equal if they have the same protocol, reference
             * equivalent hosts, have the same port number on the host, and the same
             * file and fragment of the file.<p>
             * Two hosts are considered equivalent if both host names can be resolved
             * into the same IP addresses; else if either host name can't be
             * resolved, the host names must be equal without regard to case; or both
             * host names equal to null.<p>
             * Since hosts comparison requires name resolution, this operation is a
             * blocking operation. <p>
             * Note: The defined behavior for {@code equals} is known to
             * be inconsistent with virtual hosting in HTTP.
             * @param obj   the URL to compare against.
             * @return {#code true} if the objects are the same;
             *           {@code false} otherwise.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Creates an integer suitable for hash table indexing.<p>
             * The hash code is based upon all the URL components relevant for URL
             * comparison. As such, this operation is a blocking operation.<p>
             * @return a hash code for this {#code URL}.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Compares two URLs, excluding the fragment component.<p>
             * Returns {@code true} if this {@code URL} and the
             * {@code other} argument are equal without taking the
             * fragment component into consideration.
             * @param other   the {#code URL} to compare against.
             * @return {#code true} if they reference the same remote object;
             *           {@code false} otherwise.
             */
            // @ts-ignore
            public sameFile(other: java.net.URL): boolean
            /**
             * Constructs a string representation of this {@code URL}. The
             * string is created by calling the {@code toExternalForm}
             * method of the stream protocol handler for this object.
             * @return a string representation of this object.
             * @see java.net.URL#URL(java.lang.String, java.lang.String, int,
             *                   java.lang.String)
             * @see java.net.URLStreamHandler#toExternalForm(java.net.URL)
             */
            // @ts-ignore
            public toString(): string
            /**
             * Constructs a string representation of this {@code URL}. The
             * string is created by calling the {@code toExternalForm}
             * method of the stream protocol handler for this object.
             * @return a string representation of this object.
             * @see java.net.URL#URL(java.lang.String, java.lang.String,
             *                   int, java.lang.String)
             * @see java.net.URLStreamHandler#toExternalForm(java.net.URL)
             */
            // @ts-ignore
            public toExternalForm(): string
            /**
             * Returns a {@link java.net.URI} equivalent to this URL.
             * This method functions in the same way as {@code new URI (this.toString())}.
             * <p>Note, any URL instance that complies with RFC 2396 can be converted
             * to a URI. However, some URLs that are not strictly in compliance
             * can not be converted to a URI.
             * @exception URISyntaxException if this URL is not formatted strictly according to
             *             to RFC2396 and cannot be converted to a URI.
             * @return a URI instance equivalent to this URL.
             * @since 1.5
             */
            // @ts-ignore
            public toURI(): java.net.URI
            /**
             * Returns a {@link java.net.URLConnection URLConnection} instance that
             * represents a connection to the remote object referred to by the
             * {@code URL}.
             * <P>A new instance of {@linkplain java.net.URLConnection URLConnection} is
             * created every time when invoking the
             * {@linkplain java.net.URLStreamHandler#openConnection(URL)
             * URLStreamHandler.openConnection(URL)} method of the protocol handler for
             * this URL.</P>
             * <P>It should be noted that a URLConnection instance does not establish
             * the actual network connection on creation. This will happen only when
             * calling {@linkplain java.net.URLConnection#connect() URLConnection.connect()}.</P>
             * <P>If for the URL's protocol (such as HTTP or JAR), there
             * exists a public, specialized URLConnection subclass belonging
             * to one of the following packages or one of their subpackages:
             * java.lang, java.io, java.util, java.net, the connection
             * returned will be of that subclass. For example, for HTTP an
             * HttpURLConnection will be returned, and for JAR a
             * JarURLConnection will be returned.</P>
             * @return a {#link java.net.URLConnection URLConnection} linking
             *              to the URL.
             * @exception IOException  if an I/O exception occurs.
             * @see java.net.URL#URL(java.lang.String, java.lang.String,
             *              int, java.lang.String)
             */
            // @ts-ignore
            public openConnection(): java.net.URLConnection
            /**
             * Same as {@link #openConnection()}, except that the connection will be
             * made through the specified proxy; Protocol handlers that do not
             * support proxing will ignore the proxy parameter and make a
             * normal connection.
             * Invoking this method preempts the system's default ProxySelector
             * settings.
             * @param proxy the Proxy through which this connection
             *              will be made. If direct connection is desired,
             *              Proxy.NO_PROXY should be specified.
             * @return a {#code URLConnection} to the URL.
             * @exception IOException  if an I/O exception occurs.
             * @exception SecurityException if a security manager is present
             *              and the caller doesn't have permission to connect
             *              to the proxy.
             * @exception IllegalArgumentException will be thrown if proxy is null,
             *              or proxy has the wrong type
             * @exception UnsupportedOperationException if the subclass that
             *              implements the protocol handler doesn't support
             *              this method.
             * @see java.net.URL#URL(java.lang.String, java.lang.String,
             *              int, java.lang.String)
             * @see java.net.URLConnection
             * @see java.net.URLStreamHandler#openConnection(java.net.URL,
             *              java.net.Proxy)
             * @since 1.5
             */
            // @ts-ignore
            public openConnection(proxy: java.net.Proxy): java.net.URLConnection
            /**
             * Opens a connection to this {@code URL} and returns an
             * {@code InputStream} for reading from that connection. This
             * method is a shorthand for:
             * <blockquote><pre>
             * openConnection().getInputStream()
             * </pre></blockquote>
             * @return an input stream for reading from the URL connection.
             * @exception IOException  if an I/O exception occurs.
             * @see java.net.URL#openConnection()
             * @see java.net.URLConnection#getInputStream()
             */
            // @ts-ignore
            public openStream(): java.io.InputStream
            /**
             * Gets the contents of this URL. This method is a shorthand for:
             * <blockquote><pre>
             * openConnection().getContent()
             * </pre></blockquote>
             * @return the contents of this URL.
             * @exception IOException  if an I/O exception occurs.
             * @see java.net.URLConnection#getContent()
             */
            // @ts-ignore
            public getContent(): any
            /**
             * Gets the contents of this URL. This method is a shorthand for:
             * <blockquote><pre>
             * openConnection().getContent(Class[])
             * </pre></blockquote>
             * @param classes an array of Java types
             * @return the content object of this URL that is the first match of
             *                the types specified in the classes array.
             *                null if none of the requested types are supported.
             * @exception IOException  if an I/O exception occurs.
             * @see java.net.URLConnection#getContent(Class[])
             * @since 1.3
             */
            // @ts-ignore
            public getContent(classes: java.lang.Class<any>[]): any
            /**
             * Sets an application's {@code URLStreamHandlerFactory}.
             * This method can be called at most once in a given Java Virtual
             * Machine.
             * <p> The {@code URLStreamHandlerFactory} instance is used to
             * construct a stream protocol handler from a protocol name.
             * <p> If there is a security manager, this method first calls
             * the security manager's {@code checkSetFactory} method
             * to ensure the operation is allowed.
             * This could result in a SecurityException.
             * @param fac   the desired factory.
             * @exception Error  if the application has already set a factory.
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkSetFactory} method doesn't allow
             *              the operation.
             * @see java.net.URL#URL(java.lang.String, java.lang.String,
             *              int, java.lang.String)
             * @see java.net.URLStreamHandlerFactory
             * @see SecurityManager#checkSetFactory
             */
            // @ts-ignore
            public static setURLStreamHandlerFactory(fac: java.net.URLStreamHandlerFactory): void
        }
    }
}
