declare namespace java {
    namespace net {
        /**
         * Represents permission to access a resource or set of resources defined by a
         * given url, and for a given set of user-settable request methods
         * and request headers. The <i>name</i> of the permission is the url string.
         * The <i>actions</i> string is a concatenation of the request methods and headers.
         * The range of method and header names is not restricted by this class.
         * <p><b>The url</b><p>
         * The url string has the following expected structure.
         * <pre>
         * scheme : // authority [ / path ]
         * </pre>
         * <i>scheme</i> will typically be http or https, but is not restricted by this
         * class.
         * <i>authority</i> is specified as:
         * <pre>
         * authority = [ userinfo @ ] hostrange [ : portrange ]
         * portrange = portnumber | -portnumber | portnumber-[portnumber] | *
         * hostrange = ([*.] dnsname) | IPv4address | IPv6address
         * </pre>
         * <i>dnsname</i> is a standard DNS host or domain name, ie. one or more labels
         * separated by ".". <i>IPv4address</i> is a standard literal IPv4 address and
         * <i>IPv6address</i> is as defined in <a href="http://www.ietf.org/rfc/rfc2732.txt">
         * RFC 2732</a>. Literal IPv6 addresses must however, be enclosed in '[]' characters.
         * The <i>dnsname</i> specification can be preceded by "*." which means
         * the name will match any hostname whose right-most domain labels are the same as
         * this name. For example, "*.oracle.com" matches "foo.bar.oracle.com"
         * <p>
         * <i>portrange</i> is used to specify a port number, or a bounded or unbounded range of ports
         * that this permission applies to. If portrange is absent or invalid, then a default
         * port number is assumed if the scheme is {@code http} (default 80) or {@code https}
         * (default 443). No default is assumed for other schemes. A wildcard may be specified
         * which means all ports.
         * <p>
         * <i>userinfo</i> is optional. A userinfo component if present, is ignored when
         * creating a URLPermission, and has no effect on any other methods defined by this class.
         * <p>
         * The <i>path</i> component comprises a sequence of path segments,
         * separated by '/' characters. <i>path</i> may also be empty. The path is specified
         * in a similar way to the path in {@link java.io.FilePermission}. There are
         * three different ways as the following examples show:
         * <table border>
         * <caption>URL Examples</caption>
         * <tr><th>Example url</th><th>Description</th></tr>
         * <tr><td style="white-space:nowrap;">http://www.oracle.com/a/b/c.html</td>
         * <td>A url which identifies a specific (single) resource</td>
         * </tr>
         * <tr><td>http://www.oracle.com/a/b/*</td>
         * <td>The '*' character refers to all resources in the same "directory" - in
         * other words all resources with the same number of path components, and
         * which only differ in the final path component, represented by the '*'.
         * </td>
         * </tr>
         * <tr><td>http://www.oracle.com/a/b/-</td>
         * <td>The '-' character refers to all resources recursively below the
         * preceding path (eg. http://www.oracle.com/a/b/c/d/e.html matches this
         * example).
         * </td>
         * </tr>
         * </table>
         * <p>
         * The '*' and '-' may only be specified in the final segment of a path and must be
         * the only character in that segment. Any query or fragment components of the
         * url are ignored when constructing URLPermissions.
         * <p>
         * As a special case, urls of the form, "scheme:*" are accepted to
         * mean any url of the given scheme.
         * <p>
         * The <i>scheme</i> and <i>authority</i> components of the url string are handled
         * without regard to case. This means {@link #equals(Object)},
         * {@link #hashCode()} and {@link #implies(Permission)} are case insensitive with respect
         * to these components. If the <i>authority</i> contains a literal IP address,
         * then the address is normalized for comparison. The path component is case sensitive.
         * <p><b>The actions string</b><p>
         * The actions string of a URLPermission is a concatenation of the <i>method list</i>
         * and the <i>request headers list</i>. These are lists of the permitted request
         * methods and permitted request headers of the permission (respectively). The two lists
         * are separated by a colon ':' character and elements of each list are comma separated.
         * Some examples are:
         * <pre>
         * "POST,GET,DELETE"
         * "GET:X-Foo-Request,X-Bar-Request"
         * "POST,GET:Header1,Header2"
         * </pre>
         * The first example specifies the methods: POST, GET and DELETE, but no request headers.
         * The second example specifies one request method and two headers. The third
         * example specifies two request methods, and two headers.
         * <p>
         * The colon separator need not be present if the request headers list is empty.
         * No white-space is permitted in the actions string. The action strings supplied to
         * the URLPermission constructors are case-insensitive and are normalized by converting
         * method names to upper-case and header names to the form defines in RFC2616 (lower case
         * with initial letter of each word capitalized). Either list can contain a wild-card '*'
         * character which signifies all request methods or headers respectively.
         * <p>
         * Note. Depending on the context of use, some request methods and headers may be permitted
         * at all times, and others may not be permitted at any time. For example, the
         * HTTP protocol handler might disallow certain headers such as Content-Length
         * from being set by application code, regardless of whether the security policy
         * in force, permits it.
         * @since 1.8
         */
        // @ts-ignore
        class URLPermission extends java.security.Permission {
            /**
             * Creates a new URLPermission from a url string and which permits the given
             * request methods and user-settable request headers.
             * The name of the permission is the url string it was created with. Only the scheme,
             * authority and path components of the url are used internally. Any fragment or query
             * components are ignored. The permissions action string is as specified above.
             * @param url the url string
             * @param actions the actions string
             * @exception IllegalArgumentException if url is invalid or if actions contains white-space.
             */
            // @ts-ignore
            constructor(url: java.lang.String | string, actions: java.lang.String | string)
            /**
             * Creates a URLPermission with the given url string and unrestricted
             * methods and request headers by invoking the two argument
             * constructor as follows: URLPermission(url, "*:*")
             * @param url the url string
             * @throws IllegalArgumentException if url does not result in a valid {#link URI}
             */
            // @ts-ignore
            constructor(url: java.lang.String | string)
            /**
             * Returns the normalized method list and request
             * header list, in the form:
             * <pre>
             * "method-names : header-names"
             * </pre>
             * <p>
             * where method-names is the list of methods separated by commas
             * and header-names is the list of permitted headers separated by commas.
             * There is no white space in the returned String. If header-names is empty
             * then the colon separator will not be present.
             */
            // @ts-ignore
            public getActions(): string
            /**
             * Checks if this URLPermission implies the given permission.
             * Specifically, the following checks are done as if in the
             * following sequence:
             * <ul>
             * <li>if 'p' is not an instance of URLPermission return false</li>
             * <li>if any of p's methods are not in this's method list, and if
             * this's method list is not equal to "*", then return false.</li>
             * <li>if any of p's headers are not in this's request header list, and if
             * this's request header list is not equal to "*", then return false.</li>
             * <li>if this's url scheme is not equal to p's url scheme return false</li>
             * <li>if the scheme specific part of this's url is '*' return true</li>
             * <li>if the set of hosts defined by p's url hostrange is not a subset of
             * this's url hostrange then return false. For example, "*.foo.oracle.com"
             * is a subset of "*.oracle.com". "foo.bar.oracle.com" is not
             * a subset of "*.foo.oracle.com"</li>
             * <li>if the portrange defined by p's url is not a subset of the
             * portrange defined by this's url then return false.
             * <li>if the path or paths specified by p's url are contained in the
             * set of paths specified by this's url, then return true
             * <li>otherwise, return false</li>
             * </ul>
             * <p>Some examples of how paths are matched are shown below:
             * <table border>
             * <caption>Examples of Path Matching</caption>
             * <tr><th>this's path</th><th>p's path</th><th>match</th></tr>
             * <tr><td>/a/b</td><td>/a/b</td><td>yes</td></tr>
             * <tr><td>/a/b/*</td><td>/a/b/c</td><td>yes</td></tr>
             * <tr><td>/a/b/*</td><td>/a/b/c/d</td><td>no</td></tr>
             * <tr><td>/a/b/-</td><td>/a/b/c/d</td><td>yes</td></tr>
             * <tr><td>/a/b/-</td><td>/a/b/c/d/e</td><td>yes</td></tr>
             * <tr><td>/a/b/-</td><td>/a/b/c/*</td><td>yes</td></tr>
             * <tr><td>/a/b/*</td><td>/a/b/c/-</td><td>no</td></tr>
             * </table>
             */
            // @ts-ignore
            public implies(p: java.security.Permission): boolean
            /**
             * Returns true if, this.getActions().equals(p.getActions())
             * and p's url equals this's url.  Returns false otherwise.
             */
            // @ts-ignore
            public equals(p: java.lang.Object | any): boolean
            /**
             * Returns a hashcode calculated from the hashcode of the
             * actions String and the url string.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
        }
    }
}
