declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    /**
                     * The legacy (up to early Tomcat 8 releases) cookie parser based on RFC6265,
                     * RFC2109 and RFC2616.
                     * This class is not thread-safe.
                     * @author Costin Manolache
                     * @author kevin seguin
                     */
                    // @ts-ignore
                    class LegacyCookieProcessor extends org.apache.tomcat.util.http.CookieProcessorBase {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getAllowEqualsInValue(): boolean
                        // @ts-ignore
                        public setAllowEqualsInValue(allowEqualsInValue: boolean): void
                        // @ts-ignore
                        public getAllowNameOnly(): boolean
                        // @ts-ignore
                        public setAllowNameOnly(allowNameOnly: boolean): void
                        // @ts-ignore
                        public getAllowHttpSepsInV0(): boolean
                        // @ts-ignore
                        public setAllowHttpSepsInV0(allowHttpSepsInV0: boolean): void
                        // @ts-ignore
                        public getForwardSlashIsSeparator(): boolean
                        // @ts-ignore
                        public setForwardSlashIsSeparator(forwardSlashIsSeparator: boolean): void
                        // @ts-ignore
                        public getAlwaysAddExpires(): boolean
                        // @ts-ignore
                        public setAlwaysAddExpires(alwaysAddExpires: boolean): void
                        // @ts-ignore
                        public getCharset(): java.nio.charset.Charset
                        // @ts-ignore
                        public parseCookieHeader(headers: org.apache.tomcat.util.http.MimeHeaders, serverCookies: org.apache.tomcat.util.http.ServerCookies): void
                        // @ts-ignore
                        public generateHeader(cookie: javax.servlet.http.Cookie): string
                    }
                }
            }
        }
    }
}
