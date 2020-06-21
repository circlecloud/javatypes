declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                namespace war {
                    // @ts-ignore
                    class WarURLConnection extends java.net.URLConnection {
                        // @ts-ignore
                        constructor(url: java.net.URL)
                        // @ts-ignore
                        public connect(): void
                        // @ts-ignore
                        public getInputStream(): java.io.InputStream
                        // @ts-ignore
                        public getPermission(): java.security.Permission
                        // @ts-ignore
                        public getLastModified(): number /*long*/
                        // @ts-ignore
                        public getContentLength(): number /*int*/
                        // @ts-ignore
                        public getContentLengthLong(): number /*long*/
                    }
                }
            }
        }
    }
}
