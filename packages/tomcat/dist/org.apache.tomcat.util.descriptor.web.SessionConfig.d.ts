declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a session configuration element for a web application,
                         * as represented in a <code>&lt;session-config&gt;</code> element in the
                         * deployment descriptor.
                         */
                        // @ts-ignore
                        class SessionConfig extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getSessionTimeout(): number
                            // @ts-ignore
                            public setSessionTimeout(sessionTimeout: java.lang.String | string): void
                            // @ts-ignore
                            public getCookieName(): string
                            // @ts-ignore
                            public setCookieName(cookieName: java.lang.String | string): void
                            // @ts-ignore
                            public getCookieDomain(): string
                            // @ts-ignore
                            public setCookieDomain(cookieDomain: java.lang.String | string): void
                            // @ts-ignore
                            public getCookiePath(): string
                            // @ts-ignore
                            public setCookiePath(cookiePath: java.lang.String | string): void
                            // @ts-ignore
                            public getCookieComment(): string
                            // @ts-ignore
                            public setCookieComment(cookieComment: java.lang.String | string): void
                            // @ts-ignore
                            public getCookieHttpOnly(): java.lang.Boolean
                            // @ts-ignore
                            public setCookieHttpOnly(cookieHttpOnly: java.lang.String | string): void
                            // @ts-ignore
                            public getCookieSecure(): java.lang.Boolean
                            // @ts-ignore
                            public setCookieSecure(cookieSecure: java.lang.String | string): void
                            // @ts-ignore
                            public getCookieMaxAge(): number
                            // @ts-ignore
                            public setCookieMaxAge(cookieMaxAge: java.lang.String | string): void
                            // @ts-ignore
                            public getSessionTrackingModes(): java.util.EnumSet<javax.servlet.SessionTrackingMode>
                            // @ts-ignore
                            public addSessionTrackingMode(sessionTrackingMode: java.lang.String | string): void
                        }
                    }
                }
            }
        }
    }
}
