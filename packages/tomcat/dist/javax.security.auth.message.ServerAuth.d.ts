declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                // @ts-ignore
                interface ServerAuth {
                    // @ts-ignore
                    validateRequest(messageInfo: javax.security.auth.message.MessageInfo, clientSubject: javax.security.auth.Subject, serviceSubject: javax.security.auth.Subject): javax.security.auth.message.AuthStatus
                    // @ts-ignore
                    secureResponse(messageInfo: javax.security.auth.message.MessageInfo, serviceSubject: javax.security.auth.Subject): javax.security.auth.message.AuthStatus
                    // @ts-ignore
                    cleanSubject(messageInfo: javax.security.auth.message.MessageInfo, subject: javax.security.auth.Subject): void
                }
            }
        }
    }
}
