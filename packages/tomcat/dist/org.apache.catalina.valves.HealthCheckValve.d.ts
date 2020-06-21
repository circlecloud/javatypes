declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * Simple Valve that responds to cloud orchestrators health checks.
                 */
                // @ts-ignore
                class HealthCheckValve extends org.apache.catalina.valves.ValveBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getPath(): string
                    // @ts-ignore
                    public setPath(path: java.lang.String | string): void
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                }
            }
        }
    }
}
