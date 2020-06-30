declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                interface BackgroundProcess {
                    // @ts-ignore
                    backgroundProcess(): void
                    // @ts-ignore
                    setProcessPeriod(period: number /*int*/): void
                    // @ts-ignore
                    getProcessPeriod(): number /*int*/
                }
            }
        }
    }
}
