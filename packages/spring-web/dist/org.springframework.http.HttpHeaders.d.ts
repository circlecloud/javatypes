declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * A data structure representing HTTP request or response headers, mapping String header names
             * to a list of String values, also offering accessors for common application-level data types.
             * <p>In addition to the regular methods defined by {@link Map}, this class offers many common
             * convenience methods, for example:
             * <ul>
             * <li>{@link #getFirst(String)} returns the first value associated with a given header name</li>
             * <li>{@link #add(String, String)} adds a header value to the list of values for a header name</li>
             * <li>{@link #set(String, String)} sets the header value to a single string value</li>
             * </ul>
             * <p>Note that {@code HttpHeaders} generally treats header names in a case-insensitive manner.
             * @author Arjen Poutsma
             * @author Sebastien Deleuze
             * @author Brian Clozel
             * @author Juergen Hoeller
             * @author Josh Long
             * @author Sam Brannen
             * @since 3.0
             */
            // @ts-ignore
            class HttpHeaders extends java.lang.Object implements java.io.Serializable {
                /**
                 * Construct a new, empty instance of the {@code HttpHeaders} object.
                 * <p>This is the common constructor, using a case-insensitive map structure.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct a new {@code HttpHeaders} instance backed by an existing map.
                 * <p>This constructor is available as an optimization for adapting to existing
                 * headers map structures, primarily for internal use within the framework.
                 * @param headers the headers map (expected to operate with case-insensitive keys)
                 * @since 5.1
                 */
                // @ts-ignore
                constructor(headers: object)
                /**
                 * The HTTP {@code Accept} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.2">Section 5.3.2 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly ACCEPT: string
                /**
                 * The HTTP {@code Accept-Charset} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.3">Section 5.3.3 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly ACCEPT_CHARSET: string
                /**
                 * The HTTP {@code Accept-Encoding} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.4">Section 5.3.4 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly ACCEPT_ENCODING: string
                /**
                 * The HTTP {@code Accept-Language} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.5">Section 5.3.5 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly ACCEPT_LANGUAGE: string
                /**
                 * The HTTP {@code Accept-Ranges} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-2.3">Section 5.3.5 of RFC 7233</a>
                 */
                // @ts-ignore
                readonly ACCEPT_RANGES: string
                /**
                 * The CORS {@code Access-Control-Allow-Credentials} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                readonly ACCESS_CONTROL_ALLOW_CREDENTIALS: string
                /**
                 * The CORS {@code Access-Control-Allow-Headers} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                readonly ACCESS_CONTROL_ALLOW_HEADERS: string
                /**
                 * The CORS {@code Access-Control-Allow-Methods} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                readonly ACCESS_CONTROL_ALLOW_METHODS: string
                /**
                 * The CORS {@code Access-Control-Allow-Origin} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                readonly ACCESS_CONTROL_ALLOW_ORIGIN: string
                /**
                 * The CORS {@code Access-Control-Expose-Headers} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                readonly ACCESS_CONTROL_EXPOSE_HEADERS: string
                /**
                 * The CORS {@code Access-Control-Max-Age} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                readonly ACCESS_CONTROL_MAX_AGE: string
                /**
                 * The CORS {@code Access-Control-Request-Headers} request header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                readonly ACCESS_CONTROL_REQUEST_HEADERS: string
                /**
                 * The CORS {@code Access-Control-Request-Method} request header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                readonly ACCESS_CONTROL_REQUEST_METHOD: string
                /**
                 * The HTTP {@code Age} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.1">Section 5.1 of RFC 7234</a>
                 */
                // @ts-ignore
                readonly AGE: string
                /**
                 * The HTTP {@code Allow} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.1">Section 7.4.1 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly ALLOW: string
                /**
                 * The HTTP {@code Authorization} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.2">Section 4.2 of RFC 7235</a>
                 */
                // @ts-ignore
                readonly AUTHORIZATION: string
                /**
                 * The HTTP {@code Cache-Control} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2">Section 5.2 of RFC 7234</a>
                 */
                // @ts-ignore
                readonly CACHE_CONTROL: string
                /**
                 * The HTTP {@code Connection} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.1">Section 6.1 of RFC 7230</a>
                 */
                // @ts-ignore
                readonly CONNECTION: string
                /**
                 * The HTTP {@code Content-Encoding} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.2.2">Section 3.1.2.2 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly CONTENT_ENCODING: string
                /**
                 * The HTTP {@code Content-Disposition} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc6266">RFC 6266</a>
                 */
                // @ts-ignore
                readonly CONTENT_DISPOSITION: string
                /**
                 * The HTTP {@code Content-Language} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.3.2">Section 3.1.3.2 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly CONTENT_LANGUAGE: string
                /**
                 * The HTTP {@code Content-Length} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.2">Section 3.3.2 of RFC 7230</a>
                 */
                // @ts-ignore
                readonly CONTENT_LENGTH: string
                /**
                 * The HTTP {@code Content-Location} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.4.2">Section 3.1.4.2 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly CONTENT_LOCATION: string
                /**
                 * The HTTP {@code Content-Range} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-4.2">Section 4.2 of RFC 7233</a>
                 */
                // @ts-ignore
                readonly CONTENT_RANGE: string
                /**
                 * The HTTP {@code Content-Type} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.1.5">Section 3.1.1.5 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly CONTENT_TYPE: string
                /**
                 * The HTTP {@code Cookie} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.3.4">Section 4.3.4 of RFC 2109</a>
                 */
                // @ts-ignore
                readonly COOKIE: string
                /**
                 * The HTTP {@code Date} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.1.2">Section 7.1.1.2 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly DATE: string
                /**
                 * The HTTP {@code ETag} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.3">Section 2.3 of RFC 7232</a>
                 */
                // @ts-ignore
                readonly ETAG: string
                /**
                 * The HTTP {@code Expect} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.1">Section 5.1.1 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly EXPECT: string
                /**
                 * The HTTP {@code Expires} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.3">Section 5.3 of RFC 7234</a>
                 */
                // @ts-ignore
                readonly EXPIRES: string
                /**
                 * The HTTP {@code From} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.1">Section 5.5.1 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly FROM: string
                /**
                 * The HTTP {@code Host} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.4">Section 5.4 of RFC 7230</a>
                 */
                // @ts-ignore
                readonly HOST: string
                /**
                 * The HTTP {@code If-Match} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.1">Section 3.1 of RFC 7232</a>
                 */
                // @ts-ignore
                readonly IF_MATCH: string
                /**
                 * The HTTP {@code If-Modified-Since} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.3">Section 3.3 of RFC 7232</a>
                 */
                // @ts-ignore
                readonly IF_MODIFIED_SINCE: string
                /**
                 * The HTTP {@code If-None-Match} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.2">Section 3.2 of RFC 7232</a>
                 */
                // @ts-ignore
                readonly IF_NONE_MATCH: string
                /**
                 * The HTTP {@code If-Range} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.2">Section 3.2 of RFC 7233</a>
                 */
                // @ts-ignore
                readonly IF_RANGE: string
                /**
                 * The HTTP {@code If-Unmodified-Since} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.4">Section 3.4 of RFC 7232</a>
                 */
                // @ts-ignore
                readonly IF_UNMODIFIED_SINCE: string
                /**
                 * The HTTP {@code Last-Modified} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.2">Section 2.2 of RFC 7232</a>
                 */
                // @ts-ignore
                readonly LAST_MODIFIED: string
                /**
                 * The HTTP {@code Link} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc5988">RFC 5988</a>
                 */
                // @ts-ignore
                readonly LINK: string
                /**
                 * The HTTP {@code Location} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.2">Section 7.1.2 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly LOCATION: string
                /**
                 * The HTTP {@code Max-Forwards} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.2">Section 5.1.2 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly MAX_FORWARDS: string
                /**
                 * The HTTP {@code Origin} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc6454">RFC 6454</a>
                 */
                // @ts-ignore
                readonly ORIGIN: string
                /**
                 * The HTTP {@code Pragma} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.4">Section 5.4 of RFC 7234</a>
                 */
                // @ts-ignore
                readonly PRAGMA: string
                /**
                 * The HTTP {@code Proxy-Authenticate} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.3">Section 4.3 of RFC 7235</a>
                 */
                // @ts-ignore
                readonly PROXY_AUTHENTICATE: string
                /**
                 * The HTTP {@code Proxy-Authorization} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.4">Section 4.4 of RFC 7235</a>
                 */
                // @ts-ignore
                readonly PROXY_AUTHORIZATION: string
                /**
                 * The HTTP {@code Range} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.1">Section 3.1 of RFC 7233</a>
                 */
                // @ts-ignore
                readonly RANGE: string
                /**
                 * The HTTP {@code Referer} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.2">Section 5.5.2 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly REFERER: string
                /**
                 * The HTTP {@code Retry-After} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.3">Section 7.1.3 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly RETRY_AFTER: string
                /**
                 * The HTTP {@code Server} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.2">Section 7.4.2 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly SERVER: string
                /**
                 * The HTTP {@code Set-Cookie} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.2.2">Section 4.2.2 of RFC 2109</a>
                 */
                // @ts-ignore
                readonly SET_COOKIE: string
                /**
                 * The HTTP {@code Set-Cookie2} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc2965">RFC 2965</a>
                 */
                // @ts-ignore
                readonly SET_COOKIE2: string
                /**
                 * The HTTP {@code TE} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.3">Section 4.3 of RFC 7230</a>
                 */
                // @ts-ignore
                readonly TE: string
                /**
                 * The HTTP {@code Trailer} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.4">Section 4.4 of RFC 7230</a>
                 */
                // @ts-ignore
                readonly TRAILER: string
                /**
                 * The HTTP {@code Transfer-Encoding} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.1">Section 3.3.1 of RFC 7230</a>
                 */
                // @ts-ignore
                readonly TRANSFER_ENCODING: string
                /**
                 * The HTTP {@code Upgrade} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.7">Section 6.7 of RFC 7230</a>
                 */
                // @ts-ignore
                readonly UPGRADE: string
                /**
                 * The HTTP {@code User-Agent} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.3">Section 5.5.3 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly USER_AGENT: string
                /**
                 * The HTTP {@code Vary} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.4">Section 7.1.4 of RFC 7231</a>
                 */
                // @ts-ignore
                readonly VARY: string
                /**
                 * The HTTP {@code Via} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.7.1">Section 5.7.1 of RFC 7230</a>
                 */
                // @ts-ignore
                readonly VIA: string
                /**
                 * The HTTP {@code Warning} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.5">Section 5.5 of RFC 7234</a>
                 */
                // @ts-ignore
                readonly WARNING: string
                /**
                 * The HTTP {@code WWW-Authenticate} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.1">Section 4.1 of RFC 7235</a>
                 */
                // @ts-ignore
                readonly WWW_AUTHENTICATE: string
                /**
                 * An empty {@code HttpHeaders} instance (immutable).
                 * @since 5.0
                 */
                // @ts-ignore
                readonly EMPTY: org.springframework.http.HttpHeaders
                /**
                 * Get the list of header values for the given header name, if any.
                 * @param headerName the header name
                 * @return the list of header values, or an empty list
                 * @since 5.2
                 */
                // @ts-ignore
                getOrEmpty(headerName: any): java.util.List<java.lang.String>
                /**
                 * Set the list of acceptable {@linkplain MediaType media types},
                 * as specified by the {@code Accept} header.
                 */
                // @ts-ignore
                setAccept(acceptableMediaTypes: Array<org.springframework.http.MediaType>): void
                /**
                 * Return the list of acceptable {@linkplain MediaType media types},
                 * as specified by the {@code Accept} header.
                 * <p>Returns an empty list when the acceptable media types are unspecified.
                 */
                // @ts-ignore
                getAccept(): java.util.List<org.springframework.http.MediaType>
                /**
                 * Set the acceptable language ranges, as specified by the
                 * {@literal Accept-Language} header.
                 * @since 5.0
                 */
                // @ts-ignore
                setAcceptLanguage(languages: Array<java.util.Locale.LanguageRange>): void
                /**
                 * Return the language ranges from the {@literal "Accept-Language"} header.
                 * <p>If you only need sorted, preferred locales only use
                 * {@link #getAcceptLanguageAsLocales()} or if you need to filter based on
                 * a list of supported locales you can pass the returned list to
                 * {@link Locale#filter(List, Collection)}.
                 * @throws IllegalArgumentException if the value cannot be converted to a language range
                 * @since 5.0
                 */
                // @ts-ignore
                getAcceptLanguage(): java.util.List<java.util.Locale.LanguageRange>
                /**
                 * Variant of {@link #setAcceptLanguage(List)} using {@link Locale}'s.
                 * @since 5.0
                 */
                // @ts-ignore
                setAcceptLanguageAsLocales(locales: Array<java.util.Locale>): void
                /**
                 * A variant of {@link #getAcceptLanguage()} that converts each
                 * {@link java.util.Locale.LanguageRange} to a {@link Locale}.
                 * @return the locales or an empty list
                 * @throws IllegalArgumentException if the value cannot be converted to a locale
                 * @since 5.0
                 */
                // @ts-ignore
                getAcceptLanguageAsLocales(): java.util.List<java.util.Locale>
                /**
                 * Set the (new) value of the {@code Access-Control-Allow-Credentials} response header.
                 */
                // @ts-ignore
                setAccessControlAllowCredentials(allowCredentials: boolean): void
                /**
                 * Return the value of the {@code Access-Control-Allow-Credentials} response header.
                 */
                // @ts-ignore
                getAccessControlAllowCredentials(): boolean
                /**
                 * Set the (new) value of the {@code Access-Control-Allow-Headers} response header.
                 */
                // @ts-ignore
                setAccessControlAllowHeaders(allowedHeaders: Array<java.lang.String>): void
                /**
                 * Return the value of the {@code Access-Control-Allow-Headers} response header.
                 */
                // @ts-ignore
                getAccessControlAllowHeaders(): java.util.List<java.lang.String>
                /**
                 * Set the (new) value of the {@code Access-Control-Allow-Methods} response header.
                 */
                // @ts-ignore
                setAccessControlAllowMethods(allowedMethods: Array<org.springframework.http.HttpMethod>): void
                /**
                 * Return the value of the {@code Access-Control-Allow-Methods} response header.
                 */
                // @ts-ignore
                getAccessControlAllowMethods(): java.util.List<org.springframework.http.HttpMethod>
                /**
                 * Set the (new) value of the {@code Access-Control-Allow-Origin} response header.
                 */
                // @ts-ignore
                setAccessControlAllowOrigin(allowedOrigin: string): void
                /**
                 * Return the value of the {@code Access-Control-Allow-Origin} response header.
                 */
                // @ts-ignore
                getAccessControlAllowOrigin(): java.lang.String
                /**
                 * Set the (new) value of the {@code Access-Control-Expose-Headers} response header.
                 */
                // @ts-ignore
                setAccessControlExposeHeaders(exposedHeaders: Array<java.lang.String>): void
                /**
                 * Return the value of the {@code Access-Control-Expose-Headers} response header.
                 */
                // @ts-ignore
                getAccessControlExposeHeaders(): java.util.List<java.lang.String>
                /**
                 * Set the (new) value of the {@code Access-Control-Max-Age} response header.
                 * @since 5.2
                 */
                // @ts-ignore
                setAccessControlMaxAge(maxAge: java.time.Duration): void
                /**
                 * Set the (new) value of the {@code Access-Control-Max-Age} response header.
                 */
                // @ts-ignore
                setAccessControlMaxAge(maxAge: number /*long*/): void
                /**
                 * Return the value of the {@code Access-Control-Max-Age} response header.
                 * <p>Returns -1 when the max age is unknown.
                 */
                // @ts-ignore
                getAccessControlMaxAge(): long
                /**
                 * Set the (new) value of the {@code Access-Control-Request-Headers} request header.
                 */
                // @ts-ignore
                setAccessControlRequestHeaders(requestHeaders: Array<java.lang.String>): void
                /**
                 * Return the value of the {@code Access-Control-Request-Headers} request header.
                 */
                // @ts-ignore
                getAccessControlRequestHeaders(): java.util.List<java.lang.String>
                /**
                 * Set the (new) value of the {@code Access-Control-Request-Method} request header.
                 */
                // @ts-ignore
                setAccessControlRequestMethod(requestMethod: org.springframework.http.HttpMethod): void
                /**
                 * Return the value of the {@code Access-Control-Request-Method} request header.
                 */
                // @ts-ignore
                getAccessControlRequestMethod(): org.springframework.http.HttpMethod
                /**
                 * Set the list of acceptable {@linkplain Charset charsets},
                 * as specified by the {@code Accept-Charset} header.
                 */
                // @ts-ignore
                setAcceptCharset(acceptableCharsets: Array<java.nio.charset.Charset>): void
                /**
                 * Return the list of acceptable {@linkplain Charset charsets},
                 * as specified by the {@code Accept-Charset} header.
                 */
                // @ts-ignore
                getAcceptCharset(): java.util.List<java.nio.charset.Charset>
                /**
                 * Set the set of allowed {@link HttpMethod HTTP methods},
                 * as specified by the {@code Allow} header.
                 */
                // @ts-ignore
                setAllow(allowedMethods: Array<org.springframework.http.HttpMethod>): void
                /**
                 * Return the set of allowed {@link HttpMethod HTTP methods},
                 * as specified by the {@code Allow} header.
                 * <p>Returns an empty set when the allowed methods are unspecified.
                 */
                // @ts-ignore
                getAllow(): java.util.Set<org.springframework.http.HttpMethod>
                /**
                 * Set the value of the {@linkplain #AUTHORIZATION Authorization} header to
                 * Basic Authentication based on the given username and password.
                 * <p>Note that this method only supports characters in the
                 * {@link StandardCharsets#ISO_8859_1 ISO-8859-1} character set.
                 * @param username the username
                 * @param password the password
                 * @throws IllegalArgumentException if either {#code user} or
                 *  {@code password} contain characters that cannot be encoded to ISO-8859-1
                 * @since 5.1
                 * @see #setBasicAuth(String)
                 * @see #setBasicAuth(String, String, Charset)
                 * @see #encodeBasicAuth(String, String, Charset)
                 * @see <a href="https://tools.ietf.org/html/rfc7617">RFC 7617</a>
                 */
                // @ts-ignore
                setBasicAuth(username: string, password: string): void
                /**
                 * Set the value of the {@linkplain #AUTHORIZATION Authorization} header to
                 * Basic Authentication based on the given username and password.
                 * @param username the username
                 * @param password the password
                 * @param charset the charset to use to convert the credentials into an octet
                 *  sequence. Defaults to {#linkplain StandardCharsets#ISO_8859_1 ISO-8859-1}.
                 * @throws IllegalArgumentException if {#code username} or {@code password}
                 *  contains characters that cannot be encoded to the given charset
                 * @since 5.1
                 * @see #setBasicAuth(String)
                 * @see #setBasicAuth(String, String)
                 * @see #encodeBasicAuth(String, String, Charset)
                 * @see <a href="https://tools.ietf.org/html/rfc7617">RFC 7617</a>
                 */
                // @ts-ignore
                setBasicAuth(username: string, password: string, charset: java.nio.charset.Charset): void
                /**
                 * Set the value of the {@linkplain #AUTHORIZATION Authorization} header to
                 * Basic Authentication based on the given {@linkplain #encodeBasicAuth
                 * encoded credentials}.
                 * <p>Favor this method over {@link #setBasicAuth(String, String)} and
                 * {@link #setBasicAuth(String, String, Charset)} if you wish to cache the
                 * encoded credentials.
                 * @param encodedCredentials the encoded credentials
                 * @throws IllegalArgumentException if supplied credentials string is
                 *  {#code null} or blank
                 * @since 5.2
                 * @see #setBasicAuth(String, String)
                 * @see #setBasicAuth(String, String, Charset)
                 * @see #encodeBasicAuth(String, String, Charset)
                 * @see <a href="https://tools.ietf.org/html/rfc7617">RFC 7617</a>
                 */
                // @ts-ignore
                setBasicAuth(encodedCredentials: string): void
                /**
                 * Set the value of the {@linkplain #AUTHORIZATION Authorization} header to
                 * the given Bearer token.
                 * @param token the Base64 encoded token
                 * @since 5.1
                 * @see <a href="https://tools.ietf.org/html/rfc6750">RFC 6750</a>
                 */
                // @ts-ignore
                setBearerAuth(token: string): void
                /**
                 * Set a configured {@link CacheControl} instance as the
                 * new value of the {@code Cache-Control} header.
                 * @since 5.0.5
                 */
                // @ts-ignore
                setCacheControl(cacheControl: org.springframework.http.CacheControl): void
                /**
                 * Set the (new) value of the {@code Cache-Control} header.
                 */
                // @ts-ignore
                setCacheControl(cacheControl: string): void
                /**
                 * Return the value of the {@code Cache-Control} header.
                 */
                // @ts-ignore
                getCacheControl(): java.lang.String
                /**
                 * Set the (new) value of the {@code Connection} header.
                 */
                // @ts-ignore
                setConnection(connection: string): void
                /**
                 * Set the (new) value of the {@code Connection} header.
                 */
                // @ts-ignore
                setConnection(connection: Array<java.lang.String>): void
                /**
                 * Return the value of the {@code Connection} header.
                 */
                // @ts-ignore
                getConnection(): java.util.List<java.lang.String>
                /**
                 * Set the {@code Content-Disposition} header when creating a
                 * {@code "multipart/form-data"} request.
                 * <p>Applications typically would not set this header directly but
                 * rather prepare a {@code MultiValueMap<String, Object>}, containing an
                 * Object or a {@link org.springframework.core.io.Resource} for each part,
                 * and then pass that to the {@code RestTemplate} or {@code WebClient}.
                 * @param name the control name
                 * @param filename the filename (may be {#code null})
                 * @see #getContentDisposition()
                 */
                // @ts-ignore
                setContentDispositionFormData(name: string, filename: string): void
                /**
                 * Set the {@literal Content-Disposition} header.
                 * <p>This could be used on a response to indicate if the content is
                 * expected to be displayed inline in the browser or as an attachment to be
                 * saved locally.
                 * <p>It can also be used for a {@code "multipart/form-data"} request.
                 * For more details see notes on {@link #setContentDispositionFormData}.
                 * @since 5.0
                 * @see #getContentDisposition()
                 */
                // @ts-ignore
                setContentDisposition(contentDisposition: org.springframework.http.ContentDisposition): void
                /**
                 * Return a parsed representation of the {@literal Content-Disposition} header.
                 * @since 5.0
                 * @see #setContentDisposition(ContentDisposition)
                 */
                // @ts-ignore
                getContentDisposition(): org.springframework.http.ContentDisposition
                /**
                 * Set the {@link Locale} of the content language,
                 * as specified by the {@literal Content-Language} header.
                 * <p>Use {@code put(CONTENT_LANGUAGE, list)} if you need
                 * to set multiple content languages.</p>
                 * @since 5.0
                 */
                // @ts-ignore
                setContentLanguage(locale: java.util.Locale): void
                /**
                 * Return the first {@link Locale} of the content languages,
                 * as specified by the {@literal Content-Language} header.
                 * <p>Returns {@code null} when the content language is unknown.
                 * <p>Use {@code getValuesAsList(CONTENT_LANGUAGE)} if you need
                 * to get multiple content languages.</p>
                 * @since 5.0
                 */
                // @ts-ignore
                getContentLanguage(): java.util.Locale
                /**
                 * Set the length of the body in bytes, as specified by the
                 * {@code Content-Length} header.
                 */
                // @ts-ignore
                setContentLength(contentLength: number /*long*/): void
                /**
                 * Return the length of the body in bytes, as specified by the
                 * {@code Content-Length} header.
                 * <p>Returns -1 when the content-length is unknown.
                 */
                // @ts-ignore
                getContentLength(): long
                /**
                 * Set the {@linkplain MediaType media type} of the body,
                 * as specified by the {@code Content-Type} header.
                 */
                // @ts-ignore
                setContentType(mediaType: org.springframework.http.MediaType): void
                /**
                 * Return the {@linkplain MediaType media type} of the body, as specified
                 * by the {@code Content-Type} header.
                 * <p>Returns {@code null} when the content-type is unknown.
                 */
                // @ts-ignore
                getContentType(): org.springframework.http.MediaType
                /**
                 * Set the date and time at which the message was created, as specified
                 * by the {@code Date} header.
                 * @since 5.2
                 */
                // @ts-ignore
                setDate(date: java.time.ZonedDateTime): void
                /**
                 * Set the date and time at which the message was created, as specified
                 * by the {@code Date} header.
                 * @since 5.2
                 */
                // @ts-ignore
                setDate(date: java.time.Instant): void
                /**
                 * Set the date and time at which the message was created, as specified
                 * by the {@code Date} header.
                 * <p>The date should be specified as the number of milliseconds since
                 * January 1, 1970 GMT.
                 */
                // @ts-ignore
                setDate(date: number /*long*/): void
                /**
                 * Return the date and time at which the message was created, as specified
                 * by the {@code Date} header.
                 * <p>The date is returned as the number of milliseconds since
                 * January 1, 1970 GMT. Returns -1 when the date is unknown.
                 * @throws IllegalArgumentException if the value cannot be converted to a date
                 */
                // @ts-ignore
                getDate(): long
                /**
                 * Set the (new) entity tag of the body, as specified by the {@code ETag} header.
                 */
                // @ts-ignore
                setETag(etag: string): void
                /**
                 * Return the entity tag of the body, as specified by the {@code ETag} header.
                 */
                // @ts-ignore
                getETag(): java.lang.String
                /**
                 * Set the duration after which the message is no longer valid,
                 * as specified by the {@code Expires} header.
                 * @since 5.0.5
                 */
                // @ts-ignore
                setExpires(expires: java.time.ZonedDateTime): void
                /**
                 * Set the date and time at which the message is no longer valid,
                 * as specified by the {@code Expires} header.
                 * @since 5.2
                 */
                // @ts-ignore
                setExpires(expires: java.time.Instant): void
                /**
                 * Set the date and time at which the message is no longer valid,
                 * as specified by the {@code Expires} header.
                 * <p>The date should be specified as the number of milliseconds since
                 * January 1, 1970 GMT.
                 */
                // @ts-ignore
                setExpires(expires: number /*long*/): void
                /**
                 * Return the date and time at which the message is no longer valid,
                 * as specified by the {@code Expires} header.
                 * <p>The date is returned as the number of milliseconds since
                 * January 1, 1970 GMT. Returns -1 when the date is unknown.
                 * @see #getFirstZonedDateTime(String)
                 */
                // @ts-ignore
                getExpires(): long
                /**
                 * Set the (new) value of the {@code Host} header.
                 * <p>If the given {@linkplain InetSocketAddress#getPort() port} is {@code 0},
                 * the host header will only contain the
                 * {@linkplain InetSocketAddress#getHostString() host name}.
                 * @since 5.0
                 */
                // @ts-ignore
                setHost(host: java.net.InetSocketAddress): void
                /**
                 * Return the value of the {@code Host} header, if available.
                 * <p>If the header value does not contain a port, the
                 * {@linkplain InetSocketAddress#getPort() port} in the returned address will
                 * be {@code 0}.
                 * @since 5.0
                 */
                // @ts-ignore
                getHost(): java.net.InetSocketAddress
                /**
                 * Set the (new) value of the {@code If-Match} header.
                 * @since 4.3
                 */
                // @ts-ignore
                setIfMatch(ifMatch: string): void
                /**
                 * Set the (new) value of the {@code If-Match} header.
                 * @since 4.3
                 */
                // @ts-ignore
                setIfMatch(ifMatchList: Array<java.lang.String>): void
                /**
                 * Return the value of the {@code If-Match} header.
                 * @throws IllegalArgumentException if parsing fails
                 * @since 4.3
                 */
                // @ts-ignore
                getIfMatch(): java.util.List<java.lang.String>
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                setIfModifiedSince(ifModifiedSince: java.time.ZonedDateTime): void
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                setIfModifiedSince(ifModifiedSince: java.time.Instant): void
                /**
                 * Set the (new) value of the {@code If-Modified-Since} header.
                 * <p>The date should be specified as the number of milliseconds since
                 * January 1, 1970 GMT.
                 */
                // @ts-ignore
                setIfModifiedSince(ifModifiedSince: number /*long*/): void
                /**
                 * Return the value of the {@code If-Modified-Since} header.
                 * <p>The date is returned as the number of milliseconds since
                 * January 1, 1970 GMT. Returns -1 when the date is unknown.
                 * @see #getFirstZonedDateTime(String)
                 */
                // @ts-ignore
                getIfModifiedSince(): long
                /**
                 * Set the (new) value of the {@code If-None-Match} header.
                 */
                // @ts-ignore
                setIfNoneMatch(ifNoneMatch: string): void
                /**
                 * Set the (new) values of the {@code If-None-Match} header.
                 */
                // @ts-ignore
                setIfNoneMatch(ifNoneMatchList: Array<java.lang.String>): void
                /**
                 * Return the value of the {@code If-None-Match} header.
                 * @throws IllegalArgumentException if parsing fails
                 */
                // @ts-ignore
                getIfNoneMatch(): java.util.List<java.lang.String>
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                setIfUnmodifiedSince(ifUnmodifiedSince: java.time.ZonedDateTime): void
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                setIfUnmodifiedSince(ifUnmodifiedSince: java.time.Instant): void
                /**
                 * Set the (new) value of the {@code If-Unmodified-Since} header.
                 * <p>The date should be specified as the number of milliseconds since
                 * January 1, 1970 GMT.
                 * @since 4.3
                 */
                // @ts-ignore
                setIfUnmodifiedSince(ifUnmodifiedSince: number /*long*/): void
                /**
                 * Return the value of the {@code If-Unmodified-Since} header.
                 * <p>The date is returned as the number of milliseconds since
                 * January 1, 1970 GMT. Returns -1 when the date is unknown.
                 * @since 4.3
                 * @see #getFirstZonedDateTime(String)
                 */
                // @ts-ignore
                getIfUnmodifiedSince(): long
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                setLastModified(lastModified: java.time.ZonedDateTime): void
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                setLastModified(lastModified: java.time.Instant): void
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * <p>The date should be specified as the number of milliseconds since
                 * January 1, 1970 GMT.
                 */
                // @ts-ignore
                setLastModified(lastModified: number /*long*/): void
                /**
                 * Return the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * <p>The date is returned as the number of milliseconds since
                 * January 1, 1970 GMT. Returns -1 when the date is unknown.
                 * @see #getFirstZonedDateTime(String)
                 */
                // @ts-ignore
                getLastModified(): long
                /**
                 * Set the (new) location of a resource,
                 * as specified by the {@code Location} header.
                 */
                // @ts-ignore
                setLocation(location: java.net.URI): void
                /**
                 * Return the (new) location of a resource
                 * as specified by the {@code Location} header.
                 * <p>Returns {@code null} when the location is unknown.
                 */
                // @ts-ignore
                getLocation(): java.net.URI
                /**
                 * Set the (new) value of the {@code Origin} header.
                 */
                // @ts-ignore
                setOrigin(origin: string): void
                /**
                 * Return the value of the {@code Origin} header.
                 */
                // @ts-ignore
                getOrigin(): java.lang.String
                /**
                 * Set the (new) value of the {@code Pragma} header.
                 */
                // @ts-ignore
                setPragma(pragma: string): void
                /**
                 * Return the value of the {@code Pragma} header.
                 */
                // @ts-ignore
                getPragma(): java.lang.String
                /**
                 * Sets the (new) value of the {@code Range} header.
                 */
                // @ts-ignore
                setRange(ranges: Array<org.springframework.http.HttpRange>): void
                /**
                 * Return the value of the {@code Range} header.
                 * <p>Returns an empty list when the range is unknown.
                 */
                // @ts-ignore
                getRange(): java.util.List<org.springframework.http.HttpRange>
                /**
                 * Set the (new) value of the {@code Upgrade} header.
                 */
                // @ts-ignore
                setUpgrade(upgrade: string): void
                /**
                 * Return the value of the {@code Upgrade} header.
                 */
                // @ts-ignore
                getUpgrade(): java.lang.String
                /**
                 * Set the request header names (e.g. "Accept-Language") for which the
                 * response is subject to content negotiation and variances based on the
                 * value of those request headers.
                 * @param requestHeaders the request header names
                 * @since 4.3
                 */
                // @ts-ignore
                setVary(requestHeaders: Array<java.lang.String>): void
                /**
                 * Return the request header names subject to content negotiation.
                 * @since 4.3
                 */
                // @ts-ignore
                getVary(): java.util.List<java.lang.String>
                /**
                 * Set the given date under the given header name after formatting it as a string
                 * using the RFC-1123 date-time formatter. The equivalent of
                 * {@link #set(String, String)} but for date headers.
                 * @since 5.0
                 */
                // @ts-ignore
                setZonedDateTime(headerName: string, date: java.time.ZonedDateTime): void
                /**
                 * Set the given date under the given header name after formatting it as a string
                 * using the RFC-1123 date-time formatter. The equivalent of
                 * {@link #set(String, String)} but for date headers.
                 * @since 5.1.4
                 */
                // @ts-ignore
                setInstant(headerName: string, date: java.time.Instant): void
                /**
                 * Set the given date under the given header name after formatting it as a string
                 * using the RFC-1123 date-time formatter. The equivalent of
                 * {@link #set(String, String)} but for date headers.
                 * @since 3.2.4
                 * @see #setZonedDateTime(String, ZonedDateTime)
                 */
                // @ts-ignore
                setDate(headerName: string, date: number /*long*/): void
                /**
                 * Parse the first header value for the given header name as a date,
                 * return -1 if there is no value, or raise {@link IllegalArgumentException}
                 * if the value cannot be parsed as a date.
                 * @param headerName the header name
                 * @return the parsed date header, or -1 if none
                 * @since 3.2.4
                 * @see #getFirstZonedDateTime(String)
                 */
                // @ts-ignore
                getFirstDate(headerName: string): long
                /**
                 * Parse the first header value for the given header name as a date,
                 * return {@code null} if there is no value, or raise {@link IllegalArgumentException}
                 * if the value cannot be parsed as a date.
                 * @param headerName the header name
                 * @return the parsed date header, or {#code null} if none
                 * @since 5.0
                 */
                // @ts-ignore
                getFirstZonedDateTime(headerName: string): java.time.ZonedDateTime
                /**
                 * Return all values of a given header name,
                 * even if this header is set multiple times.
                 * @param headerName the header name
                 * @return all associated values
                 * @since 4.3
                 */
                // @ts-ignore
                getValuesAsList(headerName: string): java.util.List<java.lang.String>
                /**
                 * Remove the well-known {@code "Content-*"} HTTP headers.
                 * <p>Such headers should be cleared from the response if the intended
                 * body can't be written due to errors.
                 * @since 5.2.3
                 */
                // @ts-ignore
                clearContentHeaders(): void
                /**
                 * Retrieve a combined result from the field values of the ETag header.
                 * @param headerName the header name
                 * @return the combined result
                 * @throws IllegalArgumentException if parsing fails
                 * @since 4.3
                 */
                // @ts-ignore
                getETagValuesAsList(headerName: string): java.util.List<java.lang.String>
                /**
                 * Retrieve a combined result from the field values of multi-valued headers.
                 * @param headerName the header name
                 * @return the combined result
                 * @since 4.3
                 */
                // @ts-ignore
                getFieldValues(headerName: string): java.lang.String
                /**
                 * Turn the given list of header values into a comma-delimited result.
                 * @param headerValues the list of header values
                 * @return a combined result with comma delimitation
                 */
                // @ts-ignore
                toCommaDelimitedString(headerValues: Array<java.lang.String>): java.lang.String
                /**
                 * Return the first header value for the given header name, if any.
                 * @param headerName the header name
                 * @return the first header value, or {#code null} if none
                 */
                // @ts-ignore
                getFirst(headerName: string): java.lang.String
                /**
                 * Add the given, single header value under the given name.
                 * @param headerName the header name
                 * @param headerValue the header value
                 * @throws UnsupportedOperationException if adding headers is not supported
                 * @see #put(String, List)
                 * @see #set(String, String)
                 */
                // @ts-ignore
                add(headerName: string, headerValue: string): void
                // @ts-ignore
                addAll(key: string, values: Array<java.lang.String>): void
                // @ts-ignore
                addAll(values: object): void
                /**
                 * Set the given, single header value under the given name.
                 * @param headerName the header name
                 * @param headerValue the header value
                 * @throws UnsupportedOperationException if adding headers is not supported
                 * @see #put(String, List)
                 * @see #add(String, String)
                 */
                // @ts-ignore
                set(headerName: string, headerValue: string): void
                // @ts-ignore
                setAll(values: java.util.Map<java.lang.String, java.lang.String>): void
                // @ts-ignore
                toSingleValueMap(): java.util.Map<java.lang.String, java.lang.String>
                // @ts-ignore
                size(): int
                // @ts-ignore
                isEmpty(): boolean
                // @ts-ignore
                containsKey(key: any): boolean
                // @ts-ignore
                containsValue(value: any): boolean
                // @ts-ignore
                get(key: any): java.util.List<java.lang.String>
                // @ts-ignore
                put(key: string, value: Array<java.lang.String>): java.util.List<java.lang.String>
                // @ts-ignore
                remove(key: any): java.util.List<java.lang.String>
                // @ts-ignore
                putAll(map: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): void
                // @ts-ignore
                clear(): void
                // @ts-ignore
                keySet(): java.util.Set<java.lang.String>
                // @ts-ignore
                values(): java.util.Collection<java.util.List<java.lang.String>>
                // @ts-ignore
                entrySet(): java.util.Set<<any>>
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Return an {@code HttpHeaders} object that can only be read, not written to.
                 */
                // @ts-ignore
                readOnlyHttpHeaders(headers: org.springframework.http.HttpHeaders): org.springframework.http.HttpHeaders
                /**
                 * Return an {@code HttpHeaders} object that can be read and written to.
                 * @since 5.1.1
                 */
                // @ts-ignore
                writableHttpHeaders(headers: org.springframework.http.HttpHeaders): org.springframework.http.HttpHeaders
                /**
                 * Helps to format HTTP header values, as HTTP header values themselves can
                 * contain comma-separated values, can become confusing with regular
                 * {@link Map} formatting that also uses commas between entries.
                 * @param headers the headers to format
                 * @return the headers to a String
                 * @since 5.1.4
                 */
                // @ts-ignore
                formatHeaders(headers: object): java.lang.String
                /**
                 * Encode the given username and password into Basic Authentication credentials.
                 * <p>The encoded credentials returned by this method can be supplied to
                 * {@link #setBasicAuth(String)} to set the Basic Authentication header.
                 * @param username the username
                 * @param password the password
                 * @param charset the charset to use to convert the credentials into an octet
                 *  sequence. Defaults to {#linkplain StandardCharsets#ISO_8859_1 ISO-8859-1}.
                 * @throws IllegalArgumentException if {#code username} or {@code password}
                 *  contains characters that cannot be encoded to the given charset
                 * @since 5.2
                 * @see #setBasicAuth(String)
                 * @see #setBasicAuth(String, String)
                 * @see #setBasicAuth(String, String, Charset)
                 * @see <a href="https://tools.ietf.org/html/rfc7617">RFC 7617</a>
                 */
                // @ts-ignore
                encodeBasicAuth(username: string, password: string, charset: java.nio.charset.Charset): java.lang.String
            }
        }
    }
}
