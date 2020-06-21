declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace AbstractAccessLogValve {
                    /**
                     * AccessLogElement writes the partial message into the buffer.
                     */
                    // @ts-ignore
                    interface AccessLogElement {
                        // @ts-ignore
                        addElement(buf: java.io.CharArrayWriter, date: java.util.Date, request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/): void
                    }
                }
            }
        }
    }
}
