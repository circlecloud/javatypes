declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace AbstractAccessLogValve {
                    /**
                     * write time taken to process the request - %D, %T
                     */
                    // @ts-ignore
                    class ElapsedTimeElement extends java.lang.Object implements org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement {
                        /**
                         * @param millis <code>true</code>, write time in millis - %D,
                         *  if <code>false</code>, write time in seconds - %T
                         */
                        // @ts-ignore
                        constructor(millis: boolean)
                        // @ts-ignore
                        public addElement(buf: java.io.CharArrayWriter, date: java.util.Date, request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/): void
                    }
                }
            }
        }
    }
}
