declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                namespace RemoteIpFilter {
                    // @ts-ignore
                    class XForwardedRequest extends javax.servlet.http.HttpServletRequestWrapper {
                        // @ts-ignore
                        constructor(request: javax.servlet.http.HttpServletRequest)
                        // @ts-ignore
                        readonly headers: java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                        // @ts-ignore
                        localPort: number /*int*/
                        // @ts-ignore
                        remoteAddr: java.lang.String | string
                        // @ts-ignore
                        remoteHost: java.lang.String | string
                        // @ts-ignore
                        scheme: java.lang.String | string
                        // @ts-ignore
                        secure: boolean
                        // @ts-ignore
                        serverPort: number /*int*/
                        // @ts-ignore
                        public getDateHeader(name: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        public getHeader(name: java.lang.String | string): string
                        // @ts-ignore
                        getHeaderEntry(name: java.lang.String | string): java.util.Map.Entry<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                        // @ts-ignore
                        public getHeaderNames(): java.util.Enumeration<java.lang.String | string>
                        // @ts-ignore
                        public getHeaders(name: java.lang.String | string): java.util.Enumeration<java.lang.String | string>
                        // @ts-ignore
                        public getIntHeader(name: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        public getLocalPort(): number /*int*/
                        // @ts-ignore
                        public getRemoteAddr(): string
                        // @ts-ignore
                        public getRemoteHost(): string
                        // @ts-ignore
                        public getScheme(): string
                        // @ts-ignore
                        public getServerPort(): number /*int*/
                        // @ts-ignore
                        public isSecure(): boolean
                        // @ts-ignore
                        public removeHeader(name: java.lang.String | string): void
                        // @ts-ignore
                        public setHeader(name: java.lang.String | string, value: java.lang.String | string): void
                        // @ts-ignore
                        public setLocalPort(localPort: number /*int*/): void
                        // @ts-ignore
                        public setRemoteAddr(remoteAddr: java.lang.String | string): void
                        // @ts-ignore
                        public setRemoteHost(remoteHost: java.lang.String | string): void
                        // @ts-ignore
                        public setScheme(scheme: java.lang.String | string): void
                        // @ts-ignore
                        public setSecure(secure: boolean): void
                        // @ts-ignore
                        public setServerPort(serverPort: number /*int*/): void
                        // @ts-ignore
                        public getRequestURL(): java.lang.StringBuffer
                        // @ts-ignore
                        public newPushBuilder(): javax.servlet.http.PushBuilder
                    }
                }
            }
        }
    }
}
