declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace AbstractAccessLogValve {
                    /**
                     * write a specific response header - %{xxx}o
                     */
                    // @ts-ignore
                    class ResponseHeaderElement extends java.lang.Object implements org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement {
                        // @ts-ignore
                        constructor(header: java.lang.String | string)
                        // @ts-ignore
                        public addElement(buf: java.io.CharArrayWriter, date: java.util.Date, request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/): void
                    }
                }
            }
        }
    }
}
