declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                /**
                 * Object that saves the critical information from a request so that
                 * form-based authentication can reproduce it once the user has been
                 * authenticated.
                 * <p>
                 * <b>IMPLEMENTATION NOTE</b> - It is assumed that this object is accessed
                 * only from the context of a single thread, so no synchronization around
                 * internal collection classes is performed.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class SavedRequest extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public addCookie(cookie: javax.servlet.http.Cookie): void
                    // @ts-ignore
                    public getCookies(): java.util.Iterator<javax.servlet.http.Cookie>
                    // @ts-ignore
                    public addHeader(name: java.lang.String | string, value: java.lang.String | string): void
                    // @ts-ignore
                    public getHeaderNames(): java.util.Iterator<java.lang.String | string>
                    // @ts-ignore
                    public getHeaderValues(name: java.lang.String | string): java.util.Iterator<java.lang.String | string>
                    // @ts-ignore
                    public addLocale(locale: java.util.Locale): void
                    // @ts-ignore
                    public getLocales(): java.util.Iterator<java.util.Locale>
                    // @ts-ignore
                    public getMethod(): string
                    // @ts-ignore
                    public setMethod(method: java.lang.String | string): void
                    // @ts-ignore
                    public getQueryString(): string
                    // @ts-ignore
                    public setQueryString(queryString: java.lang.String | string): void
                    // @ts-ignore
                    public getRequestURI(): string
                    // @ts-ignore
                    public setRequestURI(requestURI: java.lang.String | string): void
                    // @ts-ignore
                    public getDecodedRequestURI(): string
                    // @ts-ignore
                    public setDecodedRequestURI(decodedRequestURI: java.lang.String | string): void
                    // @ts-ignore
                    public getBody(): org.apache.tomcat.util.buf.ByteChunk
                    // @ts-ignore
                    public setBody(body: org.apache.tomcat.util.buf.ByteChunk): void
                    // @ts-ignore
                    public getContentType(): string
                    // @ts-ignore
                    public setContentType(contentType: java.lang.String | string): void
                }
            }
        }
    }
}
