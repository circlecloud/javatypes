declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * A helper class that wraps several AccessLog instances.
                 */
                // @ts-ignore
                class AccessLogAdapter extends java.lang.Object implements org.apache.catalina.AccessLog {
                    // @ts-ignore
                    constructor(log: org.apache.catalina.AccessLog)
                    // @ts-ignore
                    public add(log: org.apache.catalina.AccessLog): void
                    // @ts-ignore
                    public log(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/): void
                    // @ts-ignore
                    public setRequestAttributesEnabled(requestAttributesEnabled: boolean): void
                    // @ts-ignore
                    public getRequestAttributesEnabled(): boolean
                }
            }
        }
    }
}
