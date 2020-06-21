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
                public static readonly ACCEPT: java.lang.String | string
                /**
                 * The HTTP {@code Accept-Charset} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.3">Section 5.3.3 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly ACCEPT_CHARSET: java.lang.String | string
                /**
                 * The HTTP {@code Accept-Encoding} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.4">Section 5.3.4 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly ACCEPT_ENCODING: java.lang.String | string
                /**
                 * The HTTP {@code Accept-Language} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.5">Section 5.3.5 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly ACCEPT_LANGUAGE: java.lang.String | string
                /**
                 * The HTTP {@code Accept-Ranges} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-2.3">Section 5.3.5 of RFC 7233</a>
                 */
                // @ts-ignore
                public static readonly ACCEPT_RANGES: java.lang.String | string
                /**
                 * The CORS {@code Access-Control-Allow-Credentials} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                public static readonly ACCESS_CONTROL_ALLOW_CREDENTIALS: java.lang.String | string
                /**
                 * The CORS {@code Access-Control-Allow-Headers} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                public static readonly ACCESS_CONTROL_ALLOW_HEADERS: java.lang.String | string
                /**
                 * The CORS {@code Access-Control-Allow-Methods} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                public static readonly ACCESS_CONTROL_ALLOW_METHODS: java.lang.String | string
                /**
                 * The CORS {@code Access-Control-Allow-Origin} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                public static readonly ACCESS_CONTROL_ALLOW_ORIGIN: java.lang.String | string
                /**
                 * The CORS {@code Access-Control-Expose-Headers} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                public static readonly ACCESS_CONTROL_EXPOSE_HEADERS: java.lang.String | string
                /**
                 * The CORS {@code Access-Control-Max-Age} response header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                public static readonly ACCESS_CONTROL_MAX_AGE: java.lang.String | string
                /**
                 * The CORS {@code Access-Control-Request-Headers} request header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                public static readonly ACCESS_CONTROL_REQUEST_HEADERS: java.lang.String | string
                /**
                 * The CORS {@code Access-Control-Request-Method} request header field name.
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                public static readonly ACCESS_CONTROL_REQUEST_METHOD: java.lang.String | string
                /**
                 * The HTTP {@code Age} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.1">Section 5.1 of RFC 7234</a>
                 */
                // @ts-ignore
                public static readonly AGE: java.lang.String | string
                /**
                 * The HTTP {@code Allow} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.1">Section 7.4.1 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly ALLOW: java.lang.String | string
                /**
                 * The HTTP {@code Authorization} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.2">Section 4.2 of RFC 7235</a>
                 */
                // @ts-ignore
                public static readonly AUTHORIZATION: java.lang.String | string
                /**
                 * The HTTP {@code Cache-Control} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2">Section 5.2 of RFC 7234</a>
                 */
                // @ts-ignore
                public static readonly CACHE_CONTROL: java.lang.String | string
                /**
                 * The HTTP {@code Connection} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.1">Section 6.1 of RFC 7230</a>
                 */
                // @ts-ignore
                public static readonly CONNECTION: java.lang.String | string
                /**
                 * The HTTP {@code Content-Encoding} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.2.2">Section 3.1.2.2 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly CONTENT_ENCODING: java.lang.String | string
                /**
                 * The HTTP {@code Content-Disposition} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc6266">RFC 6266</a>
                 */
                // @ts-ignore
                public static readonly CONTENT_DISPOSITION: java.lang.String | string
                /**
                 * The HTTP {@code Content-Language} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.3.2">Section 3.1.3.2 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly CONTENT_LANGUAGE: java.lang.String | string
                /**
                 * The HTTP {@code Content-Length} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.2">Section 3.3.2 of RFC 7230</a>
                 */
                // @ts-ignore
                public static readonly CONTENT_LENGTH: java.lang.String | string
                /**
                 * The HTTP {@code Content-Location} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.4.2">Section 3.1.4.2 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly CONTENT_LOCATION: java.lang.String | string
                /**
                 * The HTTP {@code Content-Range} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-4.2">Section 4.2 of RFC 7233</a>
                 */
                // @ts-ignore
                public static readonly CONTENT_RANGE: java.lang.String | string
                /**
                 * The HTTP {@code Content-Type} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.1.5">Section 3.1.1.5 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly CONTENT_TYPE: java.lang.String | string
                /**
                 * The HTTP {@code Cookie} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.3.4">Section 4.3.4 of RFC 2109</a>
                 */
                // @ts-ignore
                public static readonly COOKIE: java.lang.String | string
                /**
                 * The HTTP {@code Date} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.1.2">Section 7.1.1.2 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly DATE: java.lang.String | string
                /**
                 * The HTTP {@code ETag} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.3">Section 2.3 of RFC 7232</a>
                 */
                // @ts-ignore
                public static readonly ETAG: java.lang.String | string
                /**
                 * The HTTP {@code Expect} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.1">Section 5.1.1 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly EXPECT: java.lang.String | string
                /**
                 * The HTTP {@code Expires} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.3">Section 5.3 of RFC 7234</a>
                 */
                // @ts-ignore
                public static readonly EXPIRES: java.lang.String | string
                /**
                 * The HTTP {@code From} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.1">Section 5.5.1 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly FROM: java.lang.String | string
                /**
                 * The HTTP {@code Host} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.4">Section 5.4 of RFC 7230</a>
                 */
                // @ts-ignore
                public static readonly HOST: java.lang.String | string
                /**
                 * The HTTP {@code If-Match} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.1">Section 3.1 of RFC 7232</a>
                 */
                // @ts-ignore
                public static readonly IF_MATCH: java.lang.String | string
                /**
                 * The HTTP {@code If-Modified-Since} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.3">Section 3.3 of RFC 7232</a>
                 */
                // @ts-ignore
                public static readonly IF_MODIFIED_SINCE: java.lang.String | string
                /**
                 * The HTTP {@code If-None-Match} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.2">Section 3.2 of RFC 7232</a>
                 */
                // @ts-ignore
                public static readonly IF_NONE_MATCH: java.lang.String | string
                /**
                 * The HTTP {@code If-Range} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.2">Section 3.2 of RFC 7233</a>
                 */
                // @ts-ignore
                public static readonly IF_RANGE: java.lang.String | string
                /**
                 * The HTTP {@code If-Unmodified-Since} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.4">Section 3.4 of RFC 7232</a>
                 */
                // @ts-ignore
                public static readonly IF_UNMODIFIED_SINCE: java.lang.String | string
                /**
                 * The HTTP {@code Last-Modified} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.2">Section 2.2 of RFC 7232</a>
                 */
                // @ts-ignore
                public static readonly LAST_MODIFIED: java.lang.String | string
                /**
                 * The HTTP {@code Link} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc5988">RFC 5988</a>
                 */
                // @ts-ignore
                public static readonly LINK: java.lang.String | string
                /**
                 * The HTTP {@code Location} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.2">Section 7.1.2 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly LOCATION: java.lang.String | string
                /**
                 * The HTTP {@code Max-Forwards} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.2">Section 5.1.2 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly MAX_FORWARDS: java.lang.String | string
                /**
                 * The HTTP {@code Origin} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc6454">RFC 6454</a>
                 */
                // @ts-ignore
                public static readonly ORIGIN: java.lang.String | string
                /**
                 * The HTTP {@code Pragma} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.4">Section 5.4 of RFC 7234</a>
                 */
                // @ts-ignore
                public static readonly PRAGMA: java.lang.String | string
                /**
                 * The HTTP {@code Proxy-Authenticate} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.3">Section 4.3 of RFC 7235</a>
                 */
                // @ts-ignore
                public static readonly PROXY_AUTHENTICATE: java.lang.String | string
                /**
                 * The HTTP {@code Proxy-Authorization} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.4">Section 4.4 of RFC 7235</a>
                 */
                // @ts-ignore
                public static readonly PROXY_AUTHORIZATION: java.lang.String | string
                /**
                 * The HTTP {@code Range} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.1">Section 3.1 of RFC 7233</a>
                 */
                // @ts-ignore
                public static readonly RANGE: java.lang.String | string
                /**
                 * The HTTP {@code Referer} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.2">Section 5.5.2 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly REFERER: java.lang.String | string
                /**
                 * The HTTP {@code Retry-After} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.3">Section 7.1.3 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly RETRY_AFTER: java.lang.String | string
                /**
                 * The HTTP {@code Server} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.2">Section 7.4.2 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly SERVER: java.lang.String | string
                /**
                 * The HTTP {@code Set-Cookie} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.2.2">Section 4.2.2 of RFC 2109</a>
                 */
                // @ts-ignore
                public static readonly SET_COOKIE: java.lang.String | string
                /**
                 * The HTTP {@code Set-Cookie2} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc2965">RFC 2965</a>
                 */
                // @ts-ignore
                public static readonly SET_COOKIE2: java.lang.String | string
                /**
                 * The HTTP {@code TE} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.3">Section 4.3 of RFC 7230</a>
                 */
                // @ts-ignore
                public static readonly TE: java.lang.String | string
                /**
                 * The HTTP {@code Trailer} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.4">Section 4.4 of RFC 7230</a>
                 */
                // @ts-ignore
                public static readonly TRAILER: java.lang.String | string
                /**
                 * The HTTP {@code Transfer-Encoding} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.1">Section 3.3.1 of RFC 7230</a>
                 */
                // @ts-ignore
                public static readonly TRANSFER_ENCODING: java.lang.String | string
                /**
                 * The HTTP {@code Upgrade} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.7">Section 6.7 of RFC 7230</a>
                 */
                // @ts-ignore
                public static readonly UPGRADE: java.lang.String | string
                /**
                 * The HTTP {@code User-Agent} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.3">Section 5.5.3 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly USER_AGENT: java.lang.String | string
                /**
                 * The HTTP {@code Vary} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.4">Section 7.1.4 of RFC 7231</a>
                 */
                // @ts-ignore
                public static readonly VARY: java.lang.String | string
                /**
                 * The HTTP {@code Via} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.7.1">Section 5.7.1 of RFC 7230</a>
                 */
                // @ts-ignore
                public static readonly VIA: java.lang.String | string
                /**
                 * The HTTP {@code Warning} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.5">Section 5.5 of RFC 7234</a>
                 */
                // @ts-ignore
                public static readonly WARNING: java.lang.String | string
                /**
                 * The HTTP {@code WWW-Authenticate} header field name.
                 * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.1">Section 4.1 of RFC 7235</a>
                 */
                // @ts-ignore
                public static readonly WWW_AUTHENTICATE: java.lang.String | string
                /**
                 * An empty {@code HttpHeaders} instance (immutable).
                 * @since 5.0
                 */
                // @ts-ignore
                public static readonly EMPTY: org.springframework.http.HttpHeaders
                /**
                 * Get the list of header values for the given header name, if any.
                 * @param headerName the header name
                 * @return the list of header values, or an empty list
                 * @since 5.2
                 */
                // @ts-ignore
                public getOrEmpty(headerName: java.lang.Object | any): Array<java.lang.String | string>
                /**
                 * Set the list of acceptable {@linkplain MediaType media types},
                 * as specified by the {@code Accept} header.
                 */
                // @ts-ignore
                public setAccept(acceptableMediaTypes: java.util.List<org.springframework.http.MediaType> | Array<org.springframework.http.MediaType>): void
                /**
                 * Return the list of acceptable {@linkplain MediaType media types},
                 * as specified by the {@code Accept} header.
                 * <p>Returns an empty list when the acceptable media types are unspecified.
                 */
                // @ts-ignore
                public getAccept(): Array<org.springframework.http.MediaType>
                /**
                 * Set the acceptable language ranges, as specified by the
                 * {@literal Accept-Language} header.
                 * @since 5.0
                 */
                // @ts-ignore
                public setAcceptLanguage(languages: java.util.List<java.util.Locale.LanguageRange> | Array<java.util.Locale.LanguageRange>): void
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
                public getAcceptLanguage(): Array<java.util.Locale.LanguageRange>
                /**
                 * Variant of {@link #setAcceptLanguage(List)} using {@link Locale}'s.
                 * @since 5.0
                 */
                // @ts-ignore
                public setAcceptLanguageAsLocales(locales: java.util.List<java.util.Locale> | Array<java.util.Locale>): void
                /**
                 * A variant of {@link #getAcceptLanguage()} that converts each
                 * {@link java.util.Locale.LanguageRange} to a {@link Locale}.
                 * @return the locales or an empty list
                 * @throws IllegalArgumentException if the value cannot be converted to a locale
                 * @since 5.0
                 */
                // @ts-ignore
                public getAcceptLanguageAsLocales(): Array<java.util.Locale>
                /**
                 * Set the (new) value of the {@code Access-Control-Allow-Credentials} response header.
                 */
                // @ts-ignore
                public setAccessControlAllowCredentials(allowCredentials: boolean): void
                /**
                 * Return the value of the {@code Access-Control-Allow-Credentials} response header.
                 */
                // @ts-ignore
                public getAccessControlAllowCredentials(): boolean
                /**
                 * Set the (new) value of the {@code Access-Control-Allow-Headers} response header.
                 */
                // @ts-ignore
                public setAccessControlAllowHeaders(allowedHeaders: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                /**
                 * Return the value of the {@code Access-Control-Allow-Headers} response header.
                 */
                // @ts-ignore
                public getAccessControlAllowHeaders(): Array<java.lang.String | string>
                /**
                 * Set the (new) value of the {@code Access-Control-Allow-Methods} response header.
                 */
                // @ts-ignore
                public setAccessControlAllowMethods(allowedMethods: java.util.List<org.springframework.http.HttpMethod> | Array<org.springframework.http.HttpMethod>): void
                /**
                 * Return the value of the {@code Access-Control-Allow-Methods} response header.
                 */
                // @ts-ignore
                public getAccessControlAllowMethods(): Array<org.springframework.http.HttpMethod>
                /**
                 * Set the (new) value of the {@code Access-Control-Allow-Origin} response header.
                 */
                // @ts-ignore
                public setAccessControlAllowOrigin(allowedOrigin: java.lang.String | string): void
                /**
                 * Return the value of the {@code Access-Control-Allow-Origin} response header.
                 */
                // @ts-ignore
                public getAccessControlAllowOrigin(): string
                /**
                 * Set the (new) value of the {@code Access-Control-Expose-Headers} response header.
                 */
                // @ts-ignore
                public setAccessControlExposeHeaders(exposedHeaders: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                /**
                 * Return the value of the {@code Access-Control-Expose-Headers} response header.
                 */
                // @ts-ignore
                public getAccessControlExposeHeaders(): Array<java.lang.String | string>
                /**
                 * Set the (new) value of the {@code Access-Control-Max-Age} response header.
                 * @since 5.2
                 */
                // @ts-ignore
                public setAccessControlMaxAge(maxAge: java.time.Duration): void
                /**
                 * Set the (new) value of the {@code Access-Control-Max-Age} response header.
                 */
                // @ts-ignore
                public setAccessControlMaxAge(maxAge: number /*long*/): void
                /**
                 * Return the value of the {@code Access-Control-Max-Age} response header.
                 * <p>Returns -1 when the max age is unknown.
                 */
                // @ts-ignore
                public getAccessControlMaxAge(): number /*long*/
                /**
                 * Set the (new) value of the {@code Access-Control-Request-Headers} request header.
                 */
                // @ts-ignore
                public setAccessControlRequestHeaders(requestHeaders: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                /**
                 * Return the value of the {@code Access-Control-Request-Headers} request header.
                 */
                // @ts-ignore
                public getAccessControlRequestHeaders(): Array<java.lang.String | string>
                /**
                 * Set the (new) value of the {@code Access-Control-Request-Method} request header.
                 */
                // @ts-ignore
                public setAccessControlRequestMethod(requestMethod: org.springframework.http.HttpMethod): void
                /**
                 * Return the value of the {@code Access-Control-Request-Method} request header.
                 */
                // @ts-ignore
                public getAccessControlRequestMethod(): org.springframework.http.HttpMethod
                /**
                 * Set the list of acceptable {@linkplain Charset charsets},
                 * as specified by the {@code Accept-Charset} header.
                 */
                // @ts-ignore
                public setAcceptCharset(acceptableCharsets: java.util.List<java.nio.charset.Charset> | Array<java.nio.charset.Charset>): void
                /**
                 * Return the list of acceptable {@linkplain Charset charsets},
                 * as specified by the {@code Accept-Charset} header.
                 */
                // @ts-ignore
                public getAcceptCharset(): Array<java.nio.charset.Charset>
                /**
                 * Set the set of allowed {@link HttpMethod HTTP methods},
                 * as specified by the {@code Allow} header.
                 */
                // @ts-ignore
                public setAllow(allowedMethods: java.util.Set<org.springframework.http.HttpMethod> | Array<org.springframework.http.HttpMethod>): void
                /**
                 * Return the set of allowed {@link HttpMethod HTTP methods},
                 * as specified by the {@code Allow} header.
                 * <p>Returns an empty set when the allowed methods are unspecified.
                 */
                // @ts-ignore
                public getAllow(): Array<org.springframework.http.HttpMethod>
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
                public setBasicAuth(username: java.lang.String | string, password: java.lang.String | string): void
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
                public setBasicAuth(username: java.lang.String | string, password: java.lang.String | string, charset: java.nio.charset.Charset): void
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
                public setBasicAuth(encodedCredentials: java.lang.String | string): void
                /**
                 * Set the value of the {@linkplain #AUTHORIZATION Authorization} header to
                 * the given Bearer token.
                 * @param token the Base64 encoded token
                 * @since 5.1
                 * @see <a href="https://tools.ietf.org/html/rfc6750">RFC 6750</a>
                 */
                // @ts-ignore
                public setBearerAuth(token: java.lang.String | string): void
                /**
                 * Set a configured {@link CacheControl} instance as the
                 * new value of the {@code Cache-Control} header.
                 * @since 5.0.5
                 */
                // @ts-ignore
                public setCacheControl(cacheControl: org.springframework.http.CacheControl): void
                /**
                 * Set the (new) value of the {@code Cache-Control} header.
                 */
                // @ts-ignore
                public setCacheControl(cacheControl: java.lang.String | string): void
                /**
                 * Return the value of the {@code Cache-Control} header.
                 */
                // @ts-ignore
                public getCacheControl(): string
                /**
                 * Set the (new) value of the {@code Connection} header.
                 */
                // @ts-ignore
                public setConnection(connection: java.lang.String | string): void
                /**
                 * Set the (new) value of the {@code Connection} header.
                 */
                // @ts-ignore
                public setConnection(connection: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                /**
                 * Return the value of the {@code Connection} header.
                 */
                // @ts-ignore
                public getConnection(): Array<java.lang.String | string>
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
                public setContentDispositionFormData(name: java.lang.String | string, filename: java.lang.String | string): void
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
                public setContentDisposition(contentDisposition: org.springframework.http.ContentDisposition): void
                /**
                 * Return a parsed representation of the {@literal Content-Disposition} header.
                 * @since 5.0
                 * @see #setContentDisposition(ContentDisposition)
                 */
                // @ts-ignore
                public getContentDisposition(): org.springframework.http.ContentDisposition
                /**
                 * Set the {@link Locale} of the content language,
                 * as specified by the {@literal Content-Language} header.
                 * <p>Use {@code put(CONTENT_LANGUAGE, list)} if you need
                 * to set multiple content languages.</p>
                 * @since 5.0
                 */
                // @ts-ignore
                public setContentLanguage(locale: java.util.Locale): void
                /**
                 * Return the first {@link Locale} of the content languages,
                 * as specified by the {@literal Content-Language} header.
                 * <p>Returns {@code null} when the content language is unknown.
                 * <p>Use {@code getValuesAsList(CONTENT_LANGUAGE)} if you need
                 * to get multiple content languages.</p>
                 * @since 5.0
                 */
                // @ts-ignore
                public getContentLanguage(): java.util.Locale
                /**
                 * Set the length of the body in bytes, as specified by the
                 * {@code Content-Length} header.
                 */
                // @ts-ignore
                public setContentLength(contentLength: number /*long*/): void
                /**
                 * Return the length of the body in bytes, as specified by the
                 * {@code Content-Length} header.
                 * <p>Returns -1 when the content-length is unknown.
                 */
                // @ts-ignore
                public getContentLength(): number /*long*/
                /**
                 * Set the {@linkplain MediaType media type} of the body,
                 * as specified by the {@code Content-Type} header.
                 */
                // @ts-ignore
                public setContentType(mediaType: org.springframework.http.MediaType): void
                /**
                 * Return the {@linkplain MediaType media type} of the body, as specified
                 * by the {@code Content-Type} header.
                 * <p>Returns {@code null} when the content-type is unknown.
                 */
                // @ts-ignore
                public getContentType(): org.springframework.http.MediaType
                /**
                 * Set the date and time at which the message was created, as specified
                 * by the {@code Date} header.
                 * @since 5.2
                 */
                // @ts-ignore
                public setDate(date: java.time.ZonedDateTime): void
                /**
                 * Set the date and time at which the message was created, as specified
                 * by the {@code Date} header.
                 * @since 5.2
                 */
                // @ts-ignore
                public setDate(date: java.time.Instant): void
                /**
                 * Set the date and time at which the message was created, as specified
                 * by the {@code Date} header.
                 * <p>The date should be specified as the number of milliseconds since
                 * January 1, 1970 GMT.
                 */
                // @ts-ignore
                public setDate(date: number /*long*/): void
                /**
                 * Return the date and time at which the message was created, as specified
                 * by the {@code Date} header.
                 * <p>The date is returned as the number of milliseconds since
                 * January 1, 1970 GMT. Returns -1 when the date is unknown.
                 * @throws IllegalArgumentException if the value cannot be converted to a date
                 */
                // @ts-ignore
                public getDate(): number /*long*/
                /**
                 * Set the (new) entity tag of the body, as specified by the {@code ETag} header.
                 */
                // @ts-ignore
                public setETag(etag: java.lang.String | string): void
                /**
                 * Return the entity tag of the body, as specified by the {@code ETag} header.
                 */
                // @ts-ignore
                public getETag(): string
                /**
                 * Set the duration after which the message is no longer valid,
                 * as specified by the {@code Expires} header.
                 * @since 5.0.5
                 */
                // @ts-ignore
                public setExpires(expires: java.time.ZonedDateTime): void
                /**
                 * Set the date and time at which the message is no longer valid,
                 * as specified by the {@code Expires} header.
                 * @since 5.2
                 */
                // @ts-ignore
                public setExpires(expires: java.time.Instant): void
                /**
                 * Set the date and time at which the message is no longer valid,
                 * as specified by the {@code Expires} header.
                 * <p>The date should be specified as the number of milliseconds since
                 * January 1, 1970 GMT.
                 */
                // @ts-ignore
                public setExpires(expires: number /*long*/): void
                /**
                 * Return the date and time at which the message is no longer valid,
                 * as specified by the {@code Expires} header.
                 * <p>The date is returned as the number of milliseconds since
                 * January 1, 1970 GMT. Returns -1 when the date is unknown.
                 * @see #getFirstZonedDateTime(String)
                 */
                // @ts-ignore
                public getExpires(): number /*long*/
                /**
                 * Set the (new) value of the {@code Host} header.
                 * <p>If the given {@linkplain InetSocketAddress#getPort() port} is {@code 0},
                 * the host header will only contain the
                 * {@linkplain InetSocketAddress#getHostString() host name}.
                 * @since 5.0
                 */
                // @ts-ignore
                public setHost(host: java.net.InetSocketAddress): void
                /**
                 * Return the value of the {@code Host} header, if available.
                 * <p>If the header value does not contain a port, the
                 * {@linkplain InetSocketAddress#getPort() port} in the returned address will
                 * be {@code 0}.
                 * @since 5.0
                 */
                // @ts-ignore
                public getHost(): java.net.InetSocketAddress
                /**
                 * Set the (new) value of the {@code If-Match} header.
                 * @since 4.3
                 */
                // @ts-ignore
                public setIfMatch(ifMatch: java.lang.String | string): void
                /**
                 * Set the (new) value of the {@code If-Match} header.
                 * @since 4.3
                 */
                // @ts-ignore
                public setIfMatch(ifMatchList: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                /**
                 * Return the value of the {@code If-Match} header.
                 * @throws IllegalArgumentException if parsing fails
                 * @since 4.3
                 */
                // @ts-ignore
                public getIfMatch(): Array<java.lang.String | string>
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                public setIfModifiedSince(ifModifiedSince: java.time.ZonedDateTime): void
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                public setIfModifiedSince(ifModifiedSince: java.time.Instant): void
                /**
                 * Set the (new) value of the {@code If-Modified-Since} header.
                 * <p>The date should be specified as the number of milliseconds since
                 * January 1, 1970 GMT.
                 */
                // @ts-ignore
                public setIfModifiedSince(ifModifiedSince: number /*long*/): void
                /**
                 * Return the value of the {@code If-Modified-Since} header.
                 * <p>The date is returned as the number of milliseconds since
                 * January 1, 1970 GMT. Returns -1 when the date is unknown.
                 * @see #getFirstZonedDateTime(String)
                 */
                // @ts-ignore
                public getIfModifiedSince(): number /*long*/
                /**
                 * Set the (new) value of the {@code If-None-Match} header.
                 */
                // @ts-ignore
                public setIfNoneMatch(ifNoneMatch: java.lang.String | string): void
                /**
                 * Set the (new) values of the {@code If-None-Match} header.
                 */
                // @ts-ignore
                public setIfNoneMatch(ifNoneMatchList: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                /**
                 * Return the value of the {@code If-None-Match} header.
                 * @throws IllegalArgumentException if parsing fails
                 */
                // @ts-ignore
                public getIfNoneMatch(): Array<java.lang.String | string>
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                public setIfUnmodifiedSince(ifUnmodifiedSince: java.time.ZonedDateTime): void
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                public setIfUnmodifiedSince(ifUnmodifiedSince: java.time.Instant): void
                /**
                 * Set the (new) value of the {@code If-Unmodified-Since} header.
                 * <p>The date should be specified as the number of milliseconds since
                 * January 1, 1970 GMT.
                 * @since 4.3
                 */
                // @ts-ignore
                public setIfUnmodifiedSince(ifUnmodifiedSince: number /*long*/): void
                /**
                 * Return the value of the {@code If-Unmodified-Since} header.
                 * <p>The date is returned as the number of milliseconds since
                 * January 1, 1970 GMT. Returns -1 when the date is unknown.
                 * @since 4.3
                 * @see #getFirstZonedDateTime(String)
                 */
                // @ts-ignore
                public getIfUnmodifiedSince(): number /*long*/
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                public setLastModified(lastModified: java.time.ZonedDateTime): void
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * @since 5.1.4
                 */
                // @ts-ignore
                public setLastModified(lastModified: java.time.Instant): void
                /**
                 * Set the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * <p>The date should be specified as the number of milliseconds since
                 * January 1, 1970 GMT.
                 */
                // @ts-ignore
                public setLastModified(lastModified: number /*long*/): void
                /**
                 * Return the time the resource was last changed, as specified by the
                 * {@code Last-Modified} header.
                 * <p>The date is returned as the number of milliseconds since
                 * January 1, 1970 GMT. Returns -1 when the date is unknown.
                 * @see #getFirstZonedDateTime(String)
                 */
                // @ts-ignore
                public getLastModified(): number /*long*/
                /**
                 * Set the (new) location of a resource,
                 * as specified by the {@code Location} header.
                 */
                // @ts-ignore
                public setLocation(location: java.net.URI): void
                /**
                 * Return the (new) location of a resource
                 * as specified by the {@code Location} header.
                 * <p>Returns {@code null} when the location is unknown.
                 */
                // @ts-ignore
                public getLocation(): java.net.URI
                /**
                 * Set the (new) value of the {@code Origin} header.
                 */
                // @ts-ignore
                public setOrigin(origin: java.lang.String | string): void
                /**
                 * Return the value of the {@code Origin} header.
                 */
                // @ts-ignore
                public getOrigin(): string
                /**
                 * Set the (new) value of the {@code Pragma} header.
                 */
                // @ts-ignore
                public setPragma(pragma: java.lang.String | string): void
                /**
                 * Return the value of the {@code Pragma} header.
                 */
                // @ts-ignore
                public getPragma(): string
                /**
                 * Sets the (new) value of the {@code Range} header.
                 */
                // @ts-ignore
                public setRange(ranges: java.util.List<org.springframework.http.HttpRange> | Array<org.springframework.http.HttpRange>): void
                /**
                 * Return the value of the {@code Range} header.
                 * <p>Returns an empty list when the range is unknown.
                 */
                // @ts-ignore
                public getRange(): Array<org.springframework.http.HttpRange>
                /**
                 * Set the (new) value of the {@code Upgrade} header.
                 */
                // @ts-ignore
                public setUpgrade(upgrade: java.lang.String | string): void
                /**
                 * Return the value of the {@code Upgrade} header.
                 */
                // @ts-ignore
                public getUpgrade(): string
                /**
                 * Set the request header names (e.g. "Accept-Language") for which the
                 * response is subject to content negotiation and variances based on the
                 * value of those request headers.
                 * @param requestHeaders the request header names
                 * @since 4.3
                 */
                // @ts-ignore
                public setVary(requestHeaders: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                /**
                 * Return the request header names subject to content negotiation.
                 * @since 4.3
                 */
                // @ts-ignore
                public getVary(): Array<java.lang.String | string>
                /**
                 * Set the given date under the given header name after formatting it as a string
                 * using the RFC-1123 date-time formatter. The equivalent of
                 * {@link #set(String, String)} but for date headers.
                 * @since 5.0
                 */
                // @ts-ignore
                public setZonedDateTime(headerName: java.lang.String | string, date: java.time.ZonedDateTime): void
                /**
                 * Set the given date under the given header name after formatting it as a string
                 * using the RFC-1123 date-time formatter. The equivalent of
                 * {@link #set(String, String)} but for date headers.
                 * @since 5.1.4
                 */
                // @ts-ignore
                public setInstant(headerName: java.lang.String | string, date: java.time.Instant): void
                /**
                 * Set the given date under the given header name after formatting it as a string
                 * using the RFC-1123 date-time formatter. The equivalent of
                 * {@link #set(String, String)} but for date headers.
                 * @since 3.2.4
                 * @see #setZonedDateTime(String, ZonedDateTime)
                 */
                // @ts-ignore
                public setDate(headerName: java.lang.String | string, date: number /*long*/): void
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
                public getFirstDate(headerName: java.lang.String | string): number /*long*/
                /**
                 * Parse the first header value for the given header name as a date,
                 * return {@code null} if there is no value, or raise {@link IllegalArgumentException}
                 * if the value cannot be parsed as a date.
                 * @param headerName the header name
                 * @return the parsed date header, or {#code null} if none
                 * @since 5.0
                 */
                // @ts-ignore
                public getFirstZonedDateTime(headerName: java.lang.String | string): java.time.ZonedDateTime
                /**
                 * Return all values of a given header name,
                 * even if this header is set multiple times.
                 * @param headerName the header name
                 * @return all associated values
                 * @since 4.3
                 */
                // @ts-ignore
                public getValuesAsList(headerName: java.lang.String | string): Array<java.lang.String | string>
                /**
                 * Remove the well-known {@code "Content-*"} HTTP headers.
                 * <p>Such headers should be cleared from the response if the intended
                 * body can't be written due to errors.
                 * @since 5.2.3
                 */
                // @ts-ignore
                public clearContentHeaders(): void
                /**
                 * Retrieve a combined result from the field values of the ETag header.
                 * @param headerName the header name
                 * @return the combined result
                 * @throws IllegalArgumentException if parsing fails
                 * @since 4.3
                 */
                // @ts-ignore
                getETagValuesAsList(headerName: java.lang.String | string): Array<java.lang.String | string>
                /**
                 * Retrieve a combined result from the field values of multi-valued headers.
                 * @param headerName the header name
                 * @return the combined result
                 * @since 4.3
                 */
                // @ts-ignore
                getFieldValues(headerName: java.lang.String | string): string
                /**
                 * Turn the given list of header values into a comma-delimited result.
                 * @param headerValues the list of header values
                 * @return a combined result with comma delimitation
                 */
                // @ts-ignore
                toCommaDelimitedString(headerValues: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): string
                /**
                 * Return the first header value for the given header name, if any.
                 * @param headerName the header name
                 * @return the first header value, or {#code null} if none
                 */
                // @ts-ignore
                public getFirst(headerName: java.lang.String | string): string
                /**
                 * Add the given, single header value under the given name.
                 * @param headerName the header name
                 * @param headerValue the header value
                 * @throws UnsupportedOperationException if adding headers is not supported
                 * @see #put(String, List)
                 * @see #set(String, String)
                 */
                // @ts-ignore
                public add(headerName: java.lang.String | string, headerValue: java.lang.String | string): void
                // @ts-ignore
                public addAll(key: java.lang.String | string, values: java.util.List<any> | Array<any>): void
                // @ts-ignore
                public addAll(values: object): void
                /**
                 * Set the given, single header value under the given name.
                 * @param headerName the header name
                 * @param headerValue the header value
                 * @throws UnsupportedOperationException if adding headers is not supported
                 * @see #put(String, List)
                 * @see #add(String, String)
                 */
                // @ts-ignore
                public set(headerName: java.lang.String | string, headerValue: java.lang.String | string): void
                // @ts-ignore
                public setAll(values: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                // @ts-ignore
                public toSingleValueMap(): java.util.Map<java.lang.String | string, java.lang.String | string>
                // @ts-ignore
                public size(): number /*int*/
                // @ts-ignore
                public isEmpty(): boolean
                // @ts-ignore
                public containsKey(key: java.lang.Object | any): boolean
                // @ts-ignore
                public containsValue(value: java.lang.Object | any): boolean
                // @ts-ignore
                public get(key: java.lang.Object | any): Array<java.lang.String | string>
                // @ts-ignore
                public put(key: java.lang.String | string, value: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): Array<java.lang.String | string>
                // @ts-ignore
                public remove(key: java.lang.Object | any): Array<java.lang.String | string>
                // @ts-ignore
                public putAll(map: java.util.Map<any, any>): void
                // @ts-ignore
                public clear(): void
                // @ts-ignore
                public keySet(): Array<java.lang.String | string>
                // @ts-ignore
                public values(): Array<java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                // @ts-ignore
                public entrySet(): Array<object>
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
                /**
                 * Return an {@code HttpHeaders} object that can only be read, not written to.
                 */
                // @ts-ignore
                public static readOnlyHttpHeaders(headers: org.springframework.http.HttpHeaders): org.springframework.http.HttpHeaders
                /**
                 * Return an {@code HttpHeaders} object that can be read and written to.
                 * @since 5.1.1
                 */
                // @ts-ignore
                public static writableHttpHeaders(headers: org.springframework.http.HttpHeaders): org.springframework.http.HttpHeaders
                /**
                 * Helps to format HTTP header values, as HTTP header values themselves can
                 * contain comma-separated values, can become confusing with regular
                 * {@link Map} formatting that also uses commas between entries.
                 * @param headers the headers to format
                 * @return the headers to a String
                 * @since 5.1.4
                 */
                // @ts-ignore
                public static formatHeaders(headers: object): string
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
                public static encodeBasicAuth(username: java.lang.String | string, password: java.lang.String | string, charset: java.nio.charset.Charset): string
            }
        }
    }
}
