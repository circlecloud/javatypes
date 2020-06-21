declare namespace java {
    namespace net {
        /**
         * An HttpCookie object represents an HTTP cookie, which carries state
         * information between server and user agent. Cookie is widely adopted
         * to create stateful sessions.
         * <p> There are 3 HTTP cookie specifications:
         * <blockquote>
         * Netscape draft<br>
         * RFC 2109 - <a href="http://www.ietf.org/rfc/rfc2109.txt">
         * <i>http://www.ietf.org/rfc/rfc2109.txt</i></a><br>
         * RFC 2965 - <a href="http://www.ietf.org/rfc/rfc2965.txt">
         * <i>http://www.ietf.org/rfc/rfc2965.txt</i></a>
         * </blockquote>
         * <p> HttpCookie class can accept all these 3 forms of syntax.
         * @author Edward Wang
         * @since 1.6
         */
        // @ts-ignore
        class HttpCookie extends java.lang.Object implements java.lang.Cloneable {
            /**
             * Constructs a cookie with a specified name and value.
             * <p> The name must conform to RFC 2965. That means it can contain
             * only ASCII alphanumeric characters and cannot contain commas,
             * semicolons, or white space or begin with a $ character. The cookie's
             * name cannot be changed after creation.
             * <p> The value can be anything the server chooses to send. Its
             * value is probably of interest only to the server. The cookie's
             * value can be changed after creation with the
             * {@code setValue} method.
             * <p> By default, cookies are created according to the RFC 2965
             * cookie specification. The version can be changed with the
             * {@code setVersion} method.
             * @param name
             *          a {#code String} specifying the name of the cookie
             * @param value
             *          a {#code String} specifying the value of the cookie
             * @throws IllegalArgumentException
             *           if the cookie name contains illegal characters
             * @throws NullPointerException
             *           if {#code name} is {@code null}
             * @see #setValue
             * @see #setVersion
             */
            // @ts-ignore
            constructor(name: java.lang.String | string, value: java.lang.String | string)
            /**
             * Constructs cookies from set-cookie or set-cookie2 header string.
             * RFC 2965 section 3.2.2 set-cookie2 syntax indicates that one header line
             * may contain more than one cookie definitions, so this is a static
             * utility method instead of another constructor.
             * @param header
             *          a {#code String} specifying the set-cookie header. The header
             *          should start with "set-cookie", or "set-cookie2" token; or it
             *          should have no leading token at all.
             * @return a List of cookie parsed from header line string
             * @throws IllegalArgumentException
             *           if header string violates the cookie specification's syntax or
             *           the cookie name contains illegal characters.
             * @throws NullPointerException
             *           if the header string is {#code null}
             */
            // @ts-ignore
            public static parse(header: java.lang.String | string): Array<java.net.HttpCookie>
            /**
             * Reports whether this HTTP cookie has expired or not.
             * @return {#code true} to indicate this HTTP cookie has expired;
             *           otherwise, {@code false}
             */
            // @ts-ignore
            public hasExpired(): boolean
            /**
             * Specifies a comment that describes a cookie's purpose.
             * The comment is useful if the browser presents the cookie
             * to the user. Comments are not supported by Netscape Version 0 cookies.
             * @param purpose
             *          a {#code String} specifying the comment to display to the user
             * @see #getComment
             */
            // @ts-ignore
            public setComment(purpose: java.lang.String | string): void
            /**
             * Returns the comment describing the purpose of this cookie, or
             * {@code null} if the cookie has no comment.
             * @return a {#code String} containing the comment, or {@code null} if none
             * @see #setComment
             */
            // @ts-ignore
            public getComment(): string
            /**
             * Specifies a comment URL that describes a cookie's purpose.
             * The comment URL is useful if the browser presents the cookie
             * to the user. Comment URL is RFC 2965 only.
             * @param purpose
             *          a {#code String} specifying the comment URL to display to the user
             * @see #getCommentURL
             */
            // @ts-ignore
            public setCommentURL(purpose: java.lang.String | string): void
            /**
             * Returns the comment URL describing the purpose of this cookie, or
             * {@code null} if the cookie has no comment URL.
             * @return a {#code String} containing the comment URL, or {@code null}
             *           if none
             * @see #setCommentURL
             */
            // @ts-ignore
            public getCommentURL(): string
            /**
             * Specify whether user agent should discard the cookie unconditionally.
             * This is RFC 2965 only attribute.
             * @param discard
             *          {#code true} indicates to discard cookie unconditionally
             * @see #getDiscard
             */
            // @ts-ignore
            public setDiscard(discard: boolean): void
            /**
             * Returns the discard attribute of the cookie
             * @return a {#code boolean} to represent this cookie's discard attribute
             * @see #setDiscard
             */
            // @ts-ignore
            public getDiscard(): boolean
            /**
             * Specify the portlist of the cookie, which restricts the port(s)
             * to which a cookie may be sent back in a Cookie header.
             * @param ports
             *          a {#code String} specify the port list, which is comma separated
             *          series of digits
             * @see #getPortlist
             */
            // @ts-ignore
            public setPortlist(ports: java.lang.String | string): void
            /**
             * Returns the port list attribute of the cookie
             * @return a {#code String} contains the port list or {@code null} if none
             * @see #setPortlist
             */
            // @ts-ignore
            public getPortlist(): string
            /**
             * Specifies the domain within which this cookie should be presented.
             * <p> The form of the domain name is specified by RFC 2965. A domain
             * name begins with a dot ({@code .foo.com}) and means that
             * the cookie is visible to servers in a specified Domain Name System
             * (DNS) zone (for example, {@code www.foo.com}, but not
             * {@code a.b.foo.com}). By default, cookies are only returned
             * to the server that sent them.
             * @param pattern
             *          a {#code String} containing the domain name within which this
             *          cookie is visible; form is according to RFC 2965
             * @see #getDomain
             */
            // @ts-ignore
            public setDomain(pattern: java.lang.String | string): void
            /**
             * Returns the domain name set for this cookie. The form of the domain name
             * is set by RFC 2965.
             * @return a {#code String} containing the domain name
             * @see #setDomain
             */
            // @ts-ignore
            public getDomain(): string
            /**
             * Sets the maximum age of the cookie in seconds.
             * <p> A positive value indicates that the cookie will expire
             * after that many seconds have passed. Note that the value is
             * the <i>maximum</i> age when the cookie will expire, not the cookie's
             * current age.
             * <p> A negative value means that the cookie is not stored persistently
             * and will be deleted when the Web browser exits. A zero value causes the
             * cookie to be deleted.
             * @param expiry
             *          an integer specifying the maximum age of the cookie in seconds;
             *          if zero, the cookie should be discarded immediately; otherwise,
             *          the cookie's max age is unspecified.
             * @see #getMaxAge
             */
            // @ts-ignore
            public setMaxAge(expiry: number /*long*/): void
            /**
             * Returns the maximum age of the cookie, specified in seconds. By default,
             * {@code -1} indicating the cookie will persist until browser shutdown.
             * @return an integer specifying the maximum age of the cookie in seconds
             * @see #setMaxAge
             */
            // @ts-ignore
            public getMaxAge(): number /*long*/
            /**
             * Specifies a path for the cookie to which the client should return
             * the cookie.
             * <p> The cookie is visible to all the pages in the directory
             * you specify, and all the pages in that directory's subdirectories.
             * A cookie's path must include the servlet that set the cookie,
             * for example, <i>/catalog</i>, which makes the cookie
             * visible to all directories on the server under <i>/catalog</i>.
             * <p> Consult RFC 2965 (available on the Internet) for more
             * information on setting path names for cookies.
             * @param uri
             *          a {#code String} specifying a path
             * @see #getPath
             */
            // @ts-ignore
            public setPath(uri: java.lang.String | string): void
            /**
             * Returns the path on the server to which the browser returns this cookie.
             * The cookie is visible to all subpaths on the server.
             * @return a {#code String} specifying a path that contains a servlet name,
             *           for example, <i>/catalog</i>
             * @see #setPath
             */
            // @ts-ignore
            public getPath(): string
            /**
             * Indicates whether the cookie should only be sent using a secure protocol,
             * such as HTTPS or SSL.
             * <p> The default value is {@code false}.
             * @param flag
             *          If {#code true}, the cookie can only be sent over a secure
             *          protocol like HTTPS. If {@code false}, it can be sent over
             *          any protocol.
             * @see #getSecure
             */
            // @ts-ignore
            public setSecure(flag: boolean): void
            /**
             * Returns {@code true} if sending this cookie should be restricted to a
             * secure protocol, or {@code false} if the it can be sent using any
             * protocol.
             * @return {#code false} if the cookie can be sent over any standard
             *           protocol; otherwise, {@code true}
             * @see #setSecure
             */
            // @ts-ignore
            public getSecure(): boolean
            /**
             * Returns the name of the cookie. The name cannot be changed after
             * creation.
             * @return a {#code String} specifying the cookie's name
             */
            // @ts-ignore
            public getName(): string
            /**
             * Assigns a new value to a cookie after the cookie is created.
             * If you use a binary value, you may want to use BASE64 encoding.
             * <p> With Version 0 cookies, values should not contain white space,
             * brackets, parentheses, equals signs, commas, double quotes, slashes,
             * question marks, at signs, colons, and semicolons. Empty values may not
             * behave the same way on all browsers.
             * @param newValue
             *          a {#code String} specifying the new value
             * @see #getValue
             */
            // @ts-ignore
            public setValue(newValue: java.lang.String | string): void
            /**
             * Returns the value of the cookie.
             * @return a {#code String} containing the cookie's present value
             * @see #setValue
             */
            // @ts-ignore
            public getValue(): string
            /**
             * Returns the version of the protocol this cookie complies with. Version 1
             * complies with RFC 2965/2109, and version 0 complies with the original
             * cookie specification drafted by Netscape. Cookies provided by a browser
             * use and identify the browser's cookie version.
             * @return 0 if the cookie complies with the original Netscape
             *           specification; 1 if the cookie complies with RFC 2965/2109
             * @see #setVersion
             */
            // @ts-ignore
            public getVersion(): number /*int*/
            /**
             * Sets the version of the cookie protocol this cookie complies
             * with. Version 0 complies with the original Netscape cookie
             * specification. Version 1 complies with RFC 2965/2109.
             * @param v
             *          0 if the cookie should comply with the original Netscape
             *          specification; 1 if the cookie should comply with RFC 2965/2109
             * @throws IllegalArgumentException
             *           if {#code v} is neither 0 nor 1
             * @see #getVersion
             */
            // @ts-ignore
            public setVersion(v: number /*int*/): void
            /**
             * Returns {@code true} if this cookie contains the <i>HttpOnly</i>
             * attribute. This means that the cookie should not be accessible to
             * scripting engines, like javascript.
             * @return {#code true} if this cookie should be considered HTTPOnly
             * @see #setHttpOnly(boolean)
             */
            // @ts-ignore
            public isHttpOnly(): boolean
            /**
             * Indicates whether the cookie should be considered HTTP Only. If set to
             * {@code true} it means the cookie should not be accessible to scripting
             * engines like javascript.
             * @param httpOnly
             *          if {#code true} make the cookie HTTP only, i.e. only visible as
             *          part of an HTTP request.
             * @see #isHttpOnly()
             */
            // @ts-ignore
            public setHttpOnly(httpOnly: boolean): void
            /**
             * The utility method to check whether a host name is in a domain or not.
             * <p> This concept is described in the cookie specification.
             * To understand the concept, some terminologies need to be defined first:
             * <blockquote>
             * effective host name = hostname if host name contains dot<br>
             * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or = hostname.local if not
             * </blockquote>
             * <p>Host A's name domain-matches host B's if:
             * <blockquote><ul>
             * <li>their host name strings string-compare equal; or</li>
             * <li>A is a HDN string and has the form NB, where N is a non-empty
             * name string, B has the form .B', and B' is a HDN string.  (So,
             * x.y.com domain-matches .Y.com but not Y.com.)</li>
             * </ul></blockquote>
             * <p>A host isn't in a domain (RFC 2965 sec. 3.3.2) if:
             * <blockquote><ul>
             * <li>The value for the Domain attribute contains no embedded dots,
             * and the value is not .local.</li>
             * <li>The effective host name that derives from the request-host does
             * not domain-match the Domain attribute.</li>
             * <li>The request-host is a HDN (not IP address) and has the form HD,
             * where D is the value of the Domain attribute, and H is a string
             * that contains one or more dots.</li>
             * </ul></blockquote>
             * <p>Examples:
             * <blockquote><ul>
             * <li>A Set-Cookie2 from request-host y.x.foo.com for Domain=.foo.com
             * would be rejected, because H is y.x and contains a dot.</li>
             * <li>A Set-Cookie2 from request-host x.foo.com for Domain=.foo.com
             * would be accepted.</li>
             * <li>A Set-Cookie2 with Domain=.com or Domain=.com., will always be
             * rejected, because there is no embedded dot.</li>
             * <li>A Set-Cookie2 from request-host example for Domain=.local will
             * be accepted, because the effective host name for the request-
             * host is example.local, and example.local domain-matches .local.</li>
             * </ul></blockquote>
             * @param domain
             *          the domain name to check host name with
             * @param host
             *          the host name in question
             * @return {#code true} if they domain-matches; {@code false} if not
             */
            // @ts-ignore
            public static domainMatches(domain: java.lang.String | string, host: java.lang.String | string): boolean
            /**
             * Constructs a cookie header string representation of this cookie,
             * which is in the format defined by corresponding cookie specification,
             * but without the leading "Cookie:" token.
             * @return a string form of the cookie. The string has the defined format
             */
            // @ts-ignore
            public toString(): string
            /**
             * Test the equality of two HTTP cookies.
             * <p> The result is {@code true} only if two cookies come from same domain
             * (case-insensitive), have same name (case-insensitive), and have same path
             * (case-sensitive).
             * @return {#code true} if two HTTP cookies equal to each other;
             *           otherwise, {@code false}
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns the hash code of this HTTP cookie. The result is the sum of
             * hash code value of three significant components of this cookie: name,
             * domain, and path. That is, the hash code is the value of the expression:
             * <blockquote>
             * getName().toLowerCase().hashCode()<br>
             * + getDomain().toLowerCase().hashCode()<br>
             * + getPath().hashCode()
             * </blockquote>
             * @return this HTTP cookie's hash code
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Create and return a copy of this object.
             * @return a clone of this HTTP cookie
             */
            // @ts-ignore
            public clone(): any
        }
    }
}
