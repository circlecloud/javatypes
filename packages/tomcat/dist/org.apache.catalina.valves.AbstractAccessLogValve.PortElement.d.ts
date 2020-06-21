declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace AbstractAccessLogValve {
                    /**
                     * write local or remote port for request connection - %p and %{xxx}p
                     */
                    // @ts-ignore
                    class PortElement extends java.lang.Object implements org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(type: java.lang.String | string)
                        // @ts-ignore
                        public addElement(buf: java.io.CharArrayWriter, date: java.util.Date, request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/): void
                    }
                }
            }
        }
    }
}
