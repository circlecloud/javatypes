declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                // @ts-ignore
                interface MessageInfo {
                    // @ts-ignore
                    getRequestMessage(): any
                    // @ts-ignore
                    getResponseMessage(): any
                    // @ts-ignore
                    setRequestMessage(request: java.lang.Object | any): void
                    // @ts-ignore
                    setResponseMessage(response: java.lang.Object | any): void
                    // @ts-ignore
                    getMap(): java.util.Map<any>
                }
            }
        }
    }
}
