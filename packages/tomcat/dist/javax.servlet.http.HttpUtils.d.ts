declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * @deprecated As of Java(tm) Servlet API 2.3.
             *                         These methods were only useful
             *                         with the default encoding and have been moved
             *                         to the request interfaces.
             */
            // @ts-ignore
            class HttpUtils extends java.lang.Object {
                /**
                 * Constructs an empty <code>HttpUtils</code> object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Parses a query string passed from the client to the
                 * server and builds a <code>HashTable</code> object
                 * with key-value pairs.
                 * The query string should be in the form of a string
                 * packaged by the GET or POST method, that is, it
                 * should have key-value pairs in the form <i>key=value</i>,
                 * with each pair separated from the next by a &amp; character.
                 * <p>A key can appear more than once in the query string
                 * with different values. However, the key appears only once in
                 * the hashtable, with its value being
                 * an array of strings containing the multiple values sent
                 * by the query string.
                 * <p>The keys and values in the hashtable are stored in their
                 * decoded form, so
                 * any + characters are converted to spaces, and characters
                 * sent in hexadecimal notation (like <i>%xx</i>) are
                 * converted to ASCII characters.
                 * @param s                a string containing the query to be parsed
                 * @return a <code>HashTable</code> object built
                 *                          from the parsed key-value pairs
                 * @exception IllegalArgumentException        if the query string
                 *                                                 is invalid
                 */
                // @ts-ignore
                public static parseQueryString(s: java.lang.String | string): java.util.Hashtable<java.lang.String | string, java.lang.String[] | string[]>
                /**
                 * Parses data from an HTML form that the client sends to
                 * the server using the HTTP POST method and the
                 * <i>application/x-www-form-urlencoded</i> MIME type.
                 * <p>The data sent by the POST method contains key-value
                 * pairs. A key can appear more than once in the POST data
                 * with different values. However, the key appears only once in
                 * the hashtable, with its value being
                 * an array of strings containing the multiple values sent
                 * by the POST method.
                 * <p>The keys and values in the hashtable are stored in their
                 * decoded form, so
                 * any + characters are converted to spaces, and characters
                 * sent in hexadecimal notation (like <i>%xx</i>) are
                 * converted to ASCII characters.
                 * @param len        an integer specifying the length,
                 *                         in characters, of the
                 *                         <code>ServletInputStream</code>
                 *                         object that is also passed to this
                 *                         method
                 * @param in        the <code>ServletInputStream</code>
                 *                         object that contains the data sent
                 *                         from the client
                 * @return a <code>HashTable</code> object built
                 *                         from the parsed key-value pairs
                 * @exception IllegalArgumentException        if the data
                 *                         sent by the POST method is invalid
                 */
                // @ts-ignore
                public static parsePostData(len: number /*int*/, input: javax.servlet.ServletInputStream): java.util.Hashtable<java.lang.String | string, java.lang.String[] | string[]>
                /**
                 * Reconstructs the URL the client used to make the request,
                 * using information in the <code>HttpServletRequest</code> object.
                 * The returned URL contains a protocol, server name, port
                 * number, and server path, but it does not include query
                 * string parameters.
                 * <p>Because this method returns a <code>StringBuffer</code>,
                 * not a string, you can modify the URL easily, for example,
                 * to append query parameters.
                 * <p>This method is useful for creating redirect messages
                 * and for reporting errors.
                 * @param req        a <code>HttpServletRequest</code> object
                 *                         containing the client's request
                 * @return a <code>StringBuffer</code> object containing
                 *                         the reconstructed URL
                 */
                // @ts-ignore
                public static getRequestURL(req: javax.servlet.http.HttpServletRequest): java.lang.StringBuffer
            }
        }
    }
}
