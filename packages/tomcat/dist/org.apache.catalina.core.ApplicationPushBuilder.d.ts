declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                // @ts-ignore
                class ApplicationPushBuilder extends java.lang.Object implements javax.servlet.http.PushBuilder {
                    // @ts-ignore
                    constructor(catalinaRequest: org.apache.catalina.connector.Request, request: javax.servlet.http.HttpServletRequest)
                    // @ts-ignore
                    public path(path: java.lang.String | string): javax.servlet.http.PushBuilder
                    // @ts-ignore
                    public getPath(): string
                    // @ts-ignore
                    public method(method: java.lang.String | string): javax.servlet.http.PushBuilder
                    // @ts-ignore
                    public getMethod(): string
                    // @ts-ignore
                    public queryString(queryString: java.lang.String | string): javax.servlet.http.PushBuilder
                    // @ts-ignore
                    public getQueryString(): string
                    // @ts-ignore
                    public sessionId(sessionId: java.lang.String | string): javax.servlet.http.PushBuilder
                    // @ts-ignore
                    public getSessionId(): string
                    // @ts-ignore
                    public addHeader(name: java.lang.String | string, value: java.lang.String | string): javax.servlet.http.PushBuilder
                    // @ts-ignore
                    public setHeader(name: java.lang.String | string, value: java.lang.String | string): javax.servlet.http.PushBuilder
                    // @ts-ignore
                    public removeHeader(name: java.lang.String | string): javax.servlet.http.PushBuilder
                    // @ts-ignore
                    public getHeaderNames(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getHeader(name: java.lang.String | string): string
                    // @ts-ignore
                    public push(): void
                }
            }
        }
    }
}
