declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace MessagePolicy {
                    // @ts-ignore
                    interface Target {
                        // @ts-ignore
                        get(messageInfo: javax.security.auth.message.MessageInfo): any
                        // @ts-ignore
                        remove(messageInfo: javax.security.auth.message.MessageInfo): void
                        // @ts-ignore
                        put(messageInfo: javax.security.auth.message.MessageInfo, data: java.lang.Object | any): void
                    }
                }
            }
        }
    }
}
