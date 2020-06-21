declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace AbstractAccessLogValve {
                    /**
                     * write bytes sent, excluding HTTP headers - %b, %B
                     */
                    // @ts-ignore
                    class ByteSentElement extends java.lang.Object implements org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement {
                        /**
                         * @param conversion <code>true</code> to write '-' instead of 0 - %b.
                         */
                        // @ts-ignore
                        constructor(conversion: boolean)
                        // @ts-ignore
                        public addElement(buf: java.io.CharArrayWriter, date: java.util.Date, request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/): void
                    }
                }
            }
        }
    }
}
