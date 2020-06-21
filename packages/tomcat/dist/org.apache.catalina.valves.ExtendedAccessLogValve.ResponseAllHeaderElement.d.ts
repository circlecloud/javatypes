declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace ExtendedAccessLogValve {
                    /**
                     * write a specific response header - x-O(xxx)
                     */
                    // @ts-ignore
                    class ResponseAllHeaderElement extends java.lang.Object implements org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement {
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
