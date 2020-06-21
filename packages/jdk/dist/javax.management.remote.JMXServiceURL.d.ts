declare namespace javax {
    namespace management {
        namespace remote {
            /**
             * <p>The address of a JMX API connector server.  Instances of this class
             * are immutable.</p>
             * <p>The address is an <em>Abstract Service URL</em> for SLP, as
             * defined in RFC 2609 and amended by RFC 3111.  It must look like
             * this:</p>
             * <blockquote>
             * <code>service:jmx:<em>protocol</em>:<em>sap</em></code>
             * </blockquote>
             * <p>Here, <code><em>protocol</em></code> is the transport
             * protocol to be used to connect to the connector server.  It is
             * a string of one or more ASCII characters, each of which is a
             * letter, a digit, or one of the characters <code>+</code> or
             * <code>-</code>.  The first character must be a letter.
             * Uppercase letters are converted into lowercase ones.</p>
             * <p><code><em>sap</em></code> is the address at which the connector
             * server is found.  This address uses a subset of the syntax defined
             * by RFC 2609 for IP-based protocols.  It is a subset because the
             * <code>user@host</code> syntax is not supported.</p>
             * <p>The other syntaxes defined by RFC 2609 are not currently
             * supported by this class.</p>
             * <p>The supported syntax is:</p>
             * <blockquote>
             * <code>//<em>[host[</em>:<em>port]][url-path]</em></code>
             * </blockquote>
             * <p>Square brackets <code>[]</code> indicate optional parts of
             * the address.  Not all protocols will recognize all optional
             * parts.</p>
             * <p>The <code><em>host</em></code> is a host name, an IPv4 numeric
             * host address, or an IPv6 numeric address enclosed in square
             * brackets.</p>
             * <p>The <code><em>port</em></code> is a decimal port number.  0
             * means a default or anonymous port, depending on the protocol.</p>
             * <p>The <code><em>host</em></code> and <code><em>port</em></code>
             * can be omitted.  The <code><em>port</em></code> cannot be supplied
             * without a <code><em>host</em></code>.</p>
             * <p>The <code><em>url-path</em></code>, if any, begins with a slash
             * (<code>/</code>) or a semicolon (<code>;</code>) and continues to
             * the end of the address.  It can contain attributes using the
             * semicolon syntax specified in RFC 2609.  Those attributes are not
             * parsed by this class and incorrect attribute syntax is not
             * detected.</p>
             * <p>Although it is legal according to RFC 2609 to have a
             * <code><em>url-path</em></code> that begins with a semicolon, not
             * all implementations of SLP allow it, so it is recommended to avoid
             * that syntax.</p>
             * <p>Case is not significant in the initial
             * <code>service:jmx:<em>protocol</em></code> string or in the host
             * part of the address.  Depending on the protocol, case can be
             * significant in the <code><em>url-path</em></code>.</p>
             * @see <a
             *  href="http://www.ietf.org/rfc/rfc2609.txt">RFC 2609,
             *  "Service Templates and <code>Service:</code> Schemes"</a>
             * @see <a
             *  href="http://www.ietf.org/rfc/rfc3111.txt">RFC 3111,
             *  "Service Location Protocol Modifications for IPv6"</a>
             * @since 1.5
             */
            // @ts-ignore
            class JMXServiceURL extends java.lang.Object implements java.io.Serializable {
                /**
                 * <p>Constructs a <code>JMXServiceURL</code> by parsing a Service URL
                 * string.</p>
                 * @param serviceURL the URL string to be parsed.
                 * @exception NullPointerException if <code>serviceURL</code> is
                 *  null.
                 * @exception MalformedURLException if <code>serviceURL</code>
                 *  does not conform to the syntax for an Abstract Service URL or
                 *  if it is not a valid name for a JMX Remote API service.  A
                 *  <code>JMXServiceURL</code> must begin with the string
                 *  <code>"service:jmx:"</code> (case-insensitive).  It must not
                 *  contain any characters that are not printable ASCII characters.
                 */
                // @ts-ignore
                constructor(serviceURL: java.lang.String | string)
                /**
                 * <p>Constructs a <code>JMXServiceURL</code> with the given protocol,
                 * host, and port.  This constructor is equivalent to
                 * {@link #JMXServiceURL(String, String, int, String)
                 * JMXServiceURL(protocol, host, port, null)}.</p>
                 * @param protocol the protocol part of the URL.  If null, defaults
                 *  to <code>jmxmp</code>.
                 * @param host the host part of the URL.  If null, defaults to the
                 *  local host name, as determined by
                 *  <code>InetAddress.getLocalHost().getHostName()</code>.  If it
                 *  is a numeric IPv6 address, it can optionally be enclosed in
                 *  square brackets <code>[]</code>.
                 * @param port the port part of the URL.
                 * @exception MalformedURLException if one of the parts is
                 *  syntactically incorrect, or if <code>host</code> is null and it
                 *  is not possible to find the local host name, or if
                 *  <code>port</code> is negative.
                 */
                // @ts-ignore
                constructor(protocol: java.lang.String | string, host: java.lang.String | string, port: number /*int*/)
                /**
                 * <p>Constructs a <code>JMXServiceURL</code> with the given parts.
                 * @param protocol the protocol part of the URL.  If null, defaults
                 *  to <code>jmxmp</code>.
                 * @param host the host part of the URL.  If null, defaults to the
                 *  local host name, as determined by
                 *  <code>InetAddress.getLocalHost().getHostName()</code>.  If it
                 *  is a numeric IPv6 address, it can optionally be enclosed in
                 *  square brackets <code>[]</code>.
                 * @param port the port part of the URL.
                 * @param urlPath the URL path part of the URL.  If null, defaults to
                 *  the empty string.
                 * @exception MalformedURLException if one of the parts is
                 *  syntactically incorrect, or if <code>host</code> is null and it
                 *  is not possible to find the local host name, or if
                 *  <code>port</code> is negative.
                 */
                // @ts-ignore
                constructor(protocol: java.lang.String | string, host: java.lang.String | string, port: number /*int*/, urlPath: java.lang.String | string)
                /**
                 * <p>The protocol part of the Service URL.
                 * @return the protocol part of the Service URL.  This is never null.
                 */
                // @ts-ignore
                public getProtocol(): string
                /**
                 * <p>The host part of the Service URL.  If the Service URL was
                 * constructed with the constructor that takes a URL string
                 * parameter, the result is the substring specifying the host in
                 * that URL.  If the Service URL was constructed with a
                 * constructor that takes a separate host parameter, the result is
                 * the string that was specified.  If that string was null, the
                 * result is
                 * <code>InetAddress.getLocalHost().getHostName()</code>.</p>
                 * <p>In either case, if the host was specified using the
                 * <code>[...]</code> syntax for numeric IPv6 addresses, the
                 * square brackets are not included in the return value here.</p>
                 * @return the host part of the Service URL.  This is never null.
                 */
                // @ts-ignore
                public getHost(): string
                /**
                 * <p>The port of the Service URL.  If no port was
                 * specified, the returned value is 0.</p>
                 * @return the port of the Service URL, or 0 if none.
                 */
                // @ts-ignore
                public getPort(): number /*int*/
                /**
                 * <p>The URL Path part of the Service URL.  This is an empty
                 * string, or a string beginning with a slash (<code>/</code>), or
                 * a string beginning with a semicolon (<code>;</code>).
                 * @return the URL Path part of the Service URL.  This is never
                 *  null.
                 */
                // @ts-ignore
                public getURLPath(): string
                /**
                 * <p>The string representation of this Service URL.  If the value
                 * returned by this method is supplied to the
                 * <code>JMXServiceURL</code> constructor, the resultant object is
                 * equal to this one.</p>
                 * <p>The <code><em>host</em></code> part of the returned string
                 * is the value returned by {@link #getHost()}.  If that value
                 * specifies a numeric IPv6 address, it is surrounded by square
                 * brackets <code>[]</code>.</p>
                 * <p>The <code><em>port</em></code> part of the returned string
                 * is the value returned by {@link #getPort()} in its shortest
                 * decimal form.  If the value is zero, it is omitted.</p>
                 * @return the string representation of this Service URL.
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * <p>Indicates whether some other object is equal to this one.
                 * This method returns true if and only if <code>obj</code> is an
                 * instance of <code>JMXServiceURL</code> whose {@link
                 * #getProtocol()}, {@link #getHost()}, {@link #getPort()}, and
                 * {@link #getURLPath()} methods return the same values as for
                 * this object.  The values for {@link #getProtocol()} and {@link
                 * #getHost()} can differ in case without affecting equality.
                 * @param obj the reference object with which to compare.
                 * @return <code>true</code> if this object is the same as the
                 *  <code>obj</code> argument; <code>false</code> otherwise.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}
