declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Enumeration of HTTP status codes.
             * <p>The HTTP status code series can be retrieved via {@link #series()}.
             * @author Arjen Poutsma
             * @author Sebastien Deleuze
             * @author Brian Clozel
             * @since 3.0
             * @see HttpStatus.Series
             * @see <a href="https://www.iana.org/assignments/http-status-codes">HTTP Status Code Registry</a>
             * @see <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">List of HTTP status codes - Wikipedia</a>
             */
            // @ts-ignore
            class HttpStatus extends java.lang.Enum<org.springframework.http.HttpStatus> {
                /**
                 * {@code 100 Continue}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.2.1">HTTP/1.1: Semantics and Content, section 6.2.1</a>
                 */
                // @ts-ignore
                public static readonly CONTINUE: org.springframework.http.HttpStatus
                /**
                 * {@code 101 Switching Protocols}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.2.2">HTTP/1.1: Semantics and Content, section 6.2.2</a>
                 */
                // @ts-ignore
                public static readonly SWITCHING_PROTOCOLS: org.springframework.http.HttpStatus
                /**
                 * {@code 102 Processing}.
                 * @see <a href="https://tools.ietf.org/html/rfc2518#section-10.1">WebDAV</a>
                 */
                // @ts-ignore
                public static readonly PROCESSING: org.springframework.http.HttpStatus
                /**
                 * {@code 103 Checkpoint}.
                 * @see <a href="https://code.google.com/p/gears/wiki/ResumableHttpRequestsProposal">A proposal for supporting
                 *  resumable POST/PUT HTTP requests in HTTP/1.0</a>
                 */
                // @ts-ignore
                public static readonly CHECKPOINT: org.springframework.http.HttpStatus
                /**
                 * {@code 200 OK}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.3.1">HTTP/1.1: Semantics and Content, section 6.3.1</a>
                 */
                // @ts-ignore
                public static readonly OK: org.springframework.http.HttpStatus
                /**
                 * {@code 201 Created}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.3.2">HTTP/1.1: Semantics and Content, section 6.3.2</a>
                 */
                // @ts-ignore
                public static readonly CREATED: org.springframework.http.HttpStatus
                /**
                 * {@code 202 Accepted}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.3.3">HTTP/1.1: Semantics and Content, section 6.3.3</a>
                 */
                // @ts-ignore
                public static readonly ACCEPTED: org.springframework.http.HttpStatus
                /**
                 * {@code 203 Non-Authoritative Information}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.3.4">HTTP/1.1: Semantics and Content, section 6.3.4</a>
                 */
                // @ts-ignore
                public static readonly NON_AUTHORITATIVE_INFORMATION: org.springframework.http.HttpStatus
                /**
                 * {@code 204 No Content}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.3.5">HTTP/1.1: Semantics and Content, section 6.3.5</a>
                 */
                // @ts-ignore
                public static readonly NO_CONTENT: org.springframework.http.HttpStatus
                /**
                 * {@code 205 Reset Content}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.3.6">HTTP/1.1: Semantics and Content, section 6.3.6</a>
                 */
                // @ts-ignore
                public static readonly RESET_CONTENT: org.springframework.http.HttpStatus
                /**
                 * {@code 206 Partial Content}.
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-4.1">HTTP/1.1: Range Requests, section 4.1</a>
                 */
                // @ts-ignore
                public static readonly PARTIAL_CONTENT: org.springframework.http.HttpStatus
                /**
                 * {@code 207 Multi-Status}.
                 * @see <a href="https://tools.ietf.org/html/rfc4918#section-13">WebDAV</a>
                 */
                // @ts-ignore
                public static readonly MULTI_STATUS: org.springframework.http.HttpStatus
                /**
                 * {@code 208 Already Reported}.
                 * @see <a href="https://tools.ietf.org/html/rfc5842#section-7.1">WebDAV Binding Extensions</a>
                 */
                // @ts-ignore
                public static readonly ALREADY_REPORTED: org.springframework.http.HttpStatus
                /**
                 * {@code 226 IM Used}.
                 * @see <a href="https://tools.ietf.org/html/rfc3229#section-10.4.1">Delta encoding in HTTP</a>
                 */
                // @ts-ignore
                public static readonly IM_USED: org.springframework.http.HttpStatus
                /**
                 * {@code 300 Multiple Choices}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.4.1">HTTP/1.1: Semantics and Content, section 6.4.1</a>
                 */
                // @ts-ignore
                public static readonly MULTIPLE_CHOICES: org.springframework.http.HttpStatus
                /**
                 * {@code 301 Moved Permanently}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.4.2">HTTP/1.1: Semantics and Content, section 6.4.2</a>
                 */
                // @ts-ignore
                public static readonly MOVED_PERMANENTLY: org.springframework.http.HttpStatus
                /**
                 * {@code 302 Found}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.4.3">HTTP/1.1: Semantics and Content, section 6.4.3</a>
                 */
                // @ts-ignore
                public static readonly FOUND: org.springframework.http.HttpStatus
                /**
                 * {@code 302 Moved Temporarily}.
                 * @see <a href="https://tools.ietf.org/html/rfc1945#section-9.3">HTTP/1.0, section 9.3</a>
                 * @deprecated in favor of {#link #FOUND} which will be returned from {@code HttpStatus.valueOf(302)}
                 */
                // @ts-ignore
                public static readonly MOVED_TEMPORARILY: org.springframework.http.HttpStatus
                /**
                 * {@code 303 See Other}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.4.4">HTTP/1.1: Semantics and Content, section 6.4.4</a>
                 */
                // @ts-ignore
                public static readonly SEE_OTHER: org.springframework.http.HttpStatus
                /**
                 * {@code 304 Not Modified}.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-4.1">HTTP/1.1: Conditional Requests, section 4.1</a>
                 */
                // @ts-ignore
                public static readonly NOT_MODIFIED: org.springframework.http.HttpStatus
                /**
                 * {@code 305 Use Proxy}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.4.5">HTTP/1.1: Semantics and Content, section 6.4.5</a>
                 * @deprecated due to security concerns regarding in-band configuration of a proxy
                 */
                // @ts-ignore
                public static readonly USE_PROXY: org.springframework.http.HttpStatus
                /**
                 * {@code 307 Temporary Redirect}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.4.7">HTTP/1.1: Semantics and Content, section 6.4.7</a>
                 */
                // @ts-ignore
                public static readonly TEMPORARY_REDIRECT: org.springframework.http.HttpStatus
                /**
                 * {@code 308 Permanent Redirect}.
                 * @see <a href="https://tools.ietf.org/html/rfc7238">RFC 7238</a>
                 */
                // @ts-ignore
                public static readonly PERMANENT_REDIRECT: org.springframework.http.HttpStatus
                /**
                 * {@code 400 Bad Request}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.1">HTTP/1.1: Semantics and Content, section 6.5.1</a>
                 */
                // @ts-ignore
                public static readonly BAD_REQUEST: org.springframework.http.HttpStatus
                /**
                 * {@code 401 Unauthorized}.
                 * @see <a href="https://tools.ietf.org/html/rfc7235#section-3.1">HTTP/1.1: Authentication, section 3.1</a>
                 */
                // @ts-ignore
                public static readonly UNAUTHORIZED: org.springframework.http.HttpStatus
                /**
                 * {@code 402 Payment Required}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.2">HTTP/1.1: Semantics and Content, section 6.5.2</a>
                 */
                // @ts-ignore
                public static readonly PAYMENT_REQUIRED: org.springframework.http.HttpStatus
                /**
                 * {@code 403 Forbidden}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.3">HTTP/1.1: Semantics and Content, section 6.5.3</a>
                 */
                // @ts-ignore
                public static readonly FORBIDDEN: org.springframework.http.HttpStatus
                /**
                 * {@code 404 Not Found}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.4">HTTP/1.1: Semantics and Content, section 6.5.4</a>
                 */
                // @ts-ignore
                public static readonly NOT_FOUND: org.springframework.http.HttpStatus
                /**
                 * {@code 405 Method Not Allowed}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.5">HTTP/1.1: Semantics and Content, section 6.5.5</a>
                 */
                // @ts-ignore
                public static readonly METHOD_NOT_ALLOWED: org.springframework.http.HttpStatus
                /**
                 * {@code 406 Not Acceptable}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.6">HTTP/1.1: Semantics and Content, section 6.5.6</a>
                 */
                // @ts-ignore
                public static readonly NOT_ACCEPTABLE: org.springframework.http.HttpStatus
                /**
                 * {@code 407 Proxy Authentication Required}.
                 * @see <a href="https://tools.ietf.org/html/rfc7235#section-3.2">HTTP/1.1: Authentication, section 3.2</a>
                 */
                // @ts-ignore
                public static readonly PROXY_AUTHENTICATION_REQUIRED: org.springframework.http.HttpStatus
                /**
                 * {@code 408 Request Timeout}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.7">HTTP/1.1: Semantics and Content, section 6.5.7</a>
                 */
                // @ts-ignore
                public static readonly REQUEST_TIMEOUT: org.springframework.http.HttpStatus
                /**
                 * {@code 409 Conflict}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.8">HTTP/1.1: Semantics and Content, section 6.5.8</a>
                 */
                // @ts-ignore
                public static readonly CONFLICT: org.springframework.http.HttpStatus
                /**
                 * {@code 410 Gone}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.9">
                 *      HTTP/1.1: Semantics and Content, section 6.5.9</a>
                 */
                // @ts-ignore
                public static readonly GONE: org.springframework.http.HttpStatus
                /**
                 * {@code 411 Length Required}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.10">
                 *      HTTP/1.1: Semantics and Content, section 6.5.10</a>
                 */
                // @ts-ignore
                public static readonly LENGTH_REQUIRED: org.springframework.http.HttpStatus
                /**
                 * {@code 412 Precondition failed}.
                 * @see <a href="https://tools.ietf.org/html/rfc7232#section-4.2">
                 *      HTTP/1.1: Conditional Requests, section 4.2</a>
                 */
                // @ts-ignore
                public static readonly PRECONDITION_FAILED: org.springframework.http.HttpStatus
                /**
                 * {@code 413 Payload Too Large}.
                 * @since 4.1
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.11">
                 *      HTTP/1.1: Semantics and Content, section 6.5.11</a>
                 */
                // @ts-ignore
                public static readonly PAYLOAD_TOO_LARGE: org.springframework.http.HttpStatus
                /**
                 * {@code 413 Request Entity Too Large}.
                 * @see <a href="https://tools.ietf.org/html/rfc2616#section-10.4.14">HTTP/1.1, section 10.4.14</a>
                 * @deprecated in favor of {#link #PAYLOAD_TOO_LARGE} which will be
                 *  returned from {@code HttpStatus.valueOf(413)}
                 */
                // @ts-ignore
                public static readonly REQUEST_ENTITY_TOO_LARGE: org.springframework.http.HttpStatus
                /**
                 * {@code 414 URI Too Long}.
                 * @since 4.1
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.12">
                 *      HTTP/1.1: Semantics and Content, section 6.5.12</a>
                 */
                // @ts-ignore
                public static readonly URI_TOO_LONG: org.springframework.http.HttpStatus
                /**
                 * {@code 414 Request-URI Too Long}.
                 * @see <a href="https://tools.ietf.org/html/rfc2616#section-10.4.15">HTTP/1.1, section 10.4.15</a>
                 * @deprecated in favor of {#link #URI_TOO_LONG} which will be returned from {@code HttpStatus.valueOf(414)}
                 */
                // @ts-ignore
                public static readonly REQUEST_URI_TOO_LONG: org.springframework.http.HttpStatus
                /**
                 * {@code 415 Unsupported Media Type}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.13">
                 *      HTTP/1.1: Semantics and Content, section 6.5.13</a>
                 */
                // @ts-ignore
                public static readonly UNSUPPORTED_MEDIA_TYPE: org.springframework.http.HttpStatus
                /**
                 * {@code 416 Requested Range Not Satisfiable}.
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-4.4">HTTP/1.1: Range Requests, section 4.4</a>
                 */
                // @ts-ignore
                public static readonly REQUESTED_RANGE_NOT_SATISFIABLE: org.springframework.http.HttpStatus
                /**
                 * {@code 417 Expectation Failed}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.5.14">
                 *      HTTP/1.1: Semantics and Content, section 6.5.14</a>
                 */
                // @ts-ignore
                public static readonly EXPECTATION_FAILED: org.springframework.http.HttpStatus
                /**
                 * {@code 418 I'm a teapot}.
                 * @see <a href="https://tools.ietf.org/html/rfc2324#section-2.3.2">HTCPCP/1.0</a>
                 */
                // @ts-ignore
                public static readonly I_AM_A_TEAPOT: org.springframework.http.HttpStatus
                /**
                 * @deprecated See
                 *  <a href="https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt">
                 *      WebDAV Draft Changes</a>
                 */
                // @ts-ignore
                public static readonly INSUFFICIENT_SPACE_ON_RESOURCE: org.springframework.http.HttpStatus
                /**
                 * @deprecated See
                 *  <a href="https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt">
                 *      WebDAV Draft Changes</a>
                 */
                // @ts-ignore
                public static readonly METHOD_FAILURE: org.springframework.http.HttpStatus
                /**
                 * @deprecated See <a href="https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt">
                 *      WebDAV Draft Changes</a>
                 */
                // @ts-ignore
                public static readonly DESTINATION_LOCKED: org.springframework.http.HttpStatus
                /**
                 * {@code 422 Unprocessable Entity}.
                 * @see <a href="https://tools.ietf.org/html/rfc4918#section-11.2">WebDAV</a>
                 */
                // @ts-ignore
                public static readonly UNPROCESSABLE_ENTITY: org.springframework.http.HttpStatus
                /**
                 * {@code 423 Locked}.
                 * @see <a href="https://tools.ietf.org/html/rfc4918#section-11.3">WebDAV</a>
                 */
                // @ts-ignore
                public static readonly LOCKED: org.springframework.http.HttpStatus
                /**
                 * {@code 424 Failed Dependency}.
                 * @see <a href="https://tools.ietf.org/html/rfc4918#section-11.4">WebDAV</a>
                 */
                // @ts-ignore
                public static readonly FAILED_DEPENDENCY: org.springframework.http.HttpStatus
                /**
                 * {@code 425 Too Early}.
                 * @since 5.2
                 * @see <a href="https://tools.ietf.org/html/rfc8470">RFC 8470</a>
                 */
                // @ts-ignore
                public static readonly TOO_EARLY: org.springframework.http.HttpStatus
                /**
                 * {@code 426 Upgrade Required}.
                 * @see <a href="https://tools.ietf.org/html/rfc2817#section-6">Upgrading to TLS Within HTTP/1.1</a>
                 */
                // @ts-ignore
                public static readonly UPGRADE_REQUIRED: org.springframework.http.HttpStatus
                /**
                 * {@code 428 Precondition Required}.
                 * @see <a href="https://tools.ietf.org/html/rfc6585#section-3">Additional HTTP Status Codes</a>
                 */
                // @ts-ignore
                public static readonly PRECONDITION_REQUIRED: org.springframework.http.HttpStatus
                /**
                 * {@code 429 Too Many Requests}.
                 * @see <a href="https://tools.ietf.org/html/rfc6585#section-4">Additional HTTP Status Codes</a>
                 */
                // @ts-ignore
                public static readonly TOO_MANY_REQUESTS: org.springframework.http.HttpStatus
                /**
                 * {@code 431 Request Header Fields Too Large}.
                 * @see <a href="https://tools.ietf.org/html/rfc6585#section-5">Additional HTTP Status Codes</a>
                 */
                // @ts-ignore
                public static readonly REQUEST_HEADER_FIELDS_TOO_LARGE: org.springframework.http.HttpStatus
                /**
                 * {@code 451 Unavailable For Legal Reasons}.
                 * @see <a href="https://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status-04">
                 *  An HTTP Status Code to Report Legal Obstacles</a>
                 * @since 4.3
                 */
                // @ts-ignore
                public static readonly UNAVAILABLE_FOR_LEGAL_REASONS: org.springframework.http.HttpStatus
                /**
                 * {@code 500 Internal Server Error}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.6.1">HTTP/1.1: Semantics and Content, section 6.6.1</a>
                 */
                // @ts-ignore
                public static readonly INTERNAL_SERVER_ERROR: org.springframework.http.HttpStatus
                /**
                 * {@code 501 Not Implemented}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.6.2">HTTP/1.1: Semantics and Content, section 6.6.2</a>
                 */
                // @ts-ignore
                public static readonly NOT_IMPLEMENTED: org.springframework.http.HttpStatus
                /**
                 * {@code 502 Bad Gateway}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.6.3">HTTP/1.1: Semantics and Content, section 6.6.3</a>
                 */
                // @ts-ignore
                public static readonly BAD_GATEWAY: org.springframework.http.HttpStatus
                /**
                 * {@code 503 Service Unavailable}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.6.4">HTTP/1.1: Semantics and Content, section 6.6.4</a>
                 */
                // @ts-ignore
                public static readonly SERVICE_UNAVAILABLE: org.springframework.http.HttpStatus
                /**
                 * {@code 504 Gateway Timeout}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.6.5">HTTP/1.1: Semantics and Content, section 6.6.5</a>
                 */
                // @ts-ignore
                public static readonly GATEWAY_TIMEOUT: org.springframework.http.HttpStatus
                /**
                 * {@code 505 HTTP Version Not Supported}.
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-6.6.6">HTTP/1.1: Semantics and Content, section 6.6.6</a>
                 */
                // @ts-ignore
                public static readonly HTTP_VERSION_NOT_SUPPORTED: org.springframework.http.HttpStatus
                /**
                 * {@code 506 Variant Also Negotiates}
                 * @see <a href="https://tools.ietf.org/html/rfc2295#section-8.1">Transparent Content Negotiation</a>
                 */
                // @ts-ignore
                public static readonly VARIANT_ALSO_NEGOTIATES: org.springframework.http.HttpStatus
                /**
                 * {@code 507 Insufficient Storage}
                 * @see <a href="https://tools.ietf.org/html/rfc4918#section-11.5">WebDAV</a>
                 */
                // @ts-ignore
                public static readonly INSUFFICIENT_STORAGE: org.springframework.http.HttpStatus
                /**
                 * {@code 508 Loop Detected}
                 * @see <a href="https://tools.ietf.org/html/rfc5842#section-7.2">WebDAV Binding Extensions</a>
                 */
                // @ts-ignore
                public static readonly LOOP_DETECTED: org.springframework.http.HttpStatus
                /**
                 * {@code 509 Bandwidth Limit Exceeded}
                 */
                // @ts-ignore
                public static readonly BANDWIDTH_LIMIT_EXCEEDED: org.springframework.http.HttpStatus
                /**
                 * {@code 510 Not Extended}
                 * @see <a href="https://tools.ietf.org/html/rfc2774#section-7">HTTP Extension Framework</a>
                 */
                // @ts-ignore
                public static readonly NOT_EXTENDED: org.springframework.http.HttpStatus
                /**
                 * {@code 511 Network Authentication Required}.
                 * @see <a href="https://tools.ietf.org/html/rfc6585#section-6">Additional HTTP Status Codes</a>
                 */
                // @ts-ignore
                public static readonly NETWORK_AUTHENTICATION_REQUIRED: org.springframework.http.HttpStatus
                // @ts-ignore
                public static values(): org.springframework.http.HttpStatus[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.springframework.http.HttpStatus
                /**
                 * Return the integer value of this status code.
                 */
                // @ts-ignore
                public value(): number /*int*/
                /**
                 * Return the reason phrase of this status code.
                 */
                // @ts-ignore
                public getReasonPhrase(): string
                /**
                 * Return the HTTP status series of this status code.
                 * @see HttpStatus.Series
                 */
                // @ts-ignore
                public series(): org.springframework.http.HttpStatus.Series
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#INFORMATIONAL}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 4.0
                 * @see #series()
                 */
                // @ts-ignore
                public is1xxInformational(): boolean
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#SUCCESSFUL}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 4.0
                 * @see #series()
                 */
                // @ts-ignore
                public is2xxSuccessful(): boolean
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#REDIRECTION}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 4.0
                 * @see #series()
                 */
                // @ts-ignore
                public is3xxRedirection(): boolean
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#CLIENT_ERROR}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 4.0
                 * @see #series()
                 */
                // @ts-ignore
                public is4xxClientError(): boolean
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#SERVER_ERROR}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 4.0
                 * @see #series()
                 */
                // @ts-ignore
                public is5xxServerError(): boolean
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#CLIENT_ERROR} or
                 * {@link org.springframework.http.HttpStatus.Series#SERVER_ERROR}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 5.0
                 * @see #is4xxClientError()
                 * @see #is5xxServerError()
                 */
                // @ts-ignore
                public isError(): boolean
                /**
                 * Return a string representation of this status code.
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Return the enum constant of this type with the specified numeric value.
                 * @param statusCode the numeric value of the enum to be returned
                 * @return the enum constant with the specified numeric value
                 * @throws IllegalArgumentException if this enum has no constant for the specified numeric value
                 */
                // @ts-ignore
                public static valueOf(statusCode: number /*int*/): org.springframework.http.HttpStatus
                /**
                 * Resolve the given status code to an {@code HttpStatus}, if possible.
                 * @param statusCode the HTTP status code (potentially non-standard)
                 * @return the corresponding {#code HttpStatus}, or {@code null} if not found
                 * @since 5.0
                 */
                // @ts-ignore
                public static resolve(statusCode: number /*int*/): org.springframework.http.HttpStatus
            }
        }
    }
}
