declare namespace org {
    namespace apache {
        namespace catalina {
            namespace manager {
                // @ts-ignore
                class DummyProxySession extends java.lang.Object implements org.apache.catalina.Session {
                    // @ts-ignore
                    constructor(sessionId: java.lang.String | string)
                    // @ts-ignore
                    public access(): void
                    // @ts-ignore
                    public addSessionListener(listener: org.apache.catalina.SessionListener): void
                    // @ts-ignore
                    public endAccess(): void
                    // @ts-ignore
                    public expire(): void
                    // @ts-ignore
                    public getAuthType(): string
                    // @ts-ignore
                    public getCreationTime(): number /*long*/
                    // @ts-ignore
                    public getCreationTimeInternal(): number /*long*/
                    // @ts-ignore
                    public getId(): string
                    // @ts-ignore
                    public getIdInternal(): string
                    // @ts-ignore
                    public getLastAccessedTime(): number /*long*/
                    // @ts-ignore
                    public getLastAccessedTimeInternal(): number /*long*/
                    // @ts-ignore
                    public getIdleTime(): number /*long*/
                    // @ts-ignore
                    public getIdleTimeInternal(): number /*long*/
                    // @ts-ignore
                    public getManager(): org.apache.catalina.Manager
                    // @ts-ignore
                    public getMaxInactiveInterval(): number /*int*/
                    // @ts-ignore
                    public getNote(name: java.lang.String | string): any
                    // @ts-ignore
                    public getNoteNames(): java.util.Iterator<java.lang.String | string>
                    // @ts-ignore
                    public getPrincipal(): java.security.Principal
                    // @ts-ignore
                    public getSession(): javax.servlet.http.HttpSession
                    // @ts-ignore
                    public getThisAccessedTime(): number /*long*/
                    // @ts-ignore
                    public getThisAccessedTimeInternal(): number /*long*/
                    // @ts-ignore
                    public isValid(): boolean
                    // @ts-ignore
                    public recycle(): void
                    // @ts-ignore
                    public removeNote(name: java.lang.String | string): void
                    // @ts-ignore
                    public removeSessionListener(listener: org.apache.catalina.SessionListener): void
                    // @ts-ignore
                    public setAuthType(authType: java.lang.String | string): void
                    // @ts-ignore
                    public setCreationTime(time: number /*long*/): void
                    // @ts-ignore
                    public setId(id: java.lang.String | string): void
                    // @ts-ignore
                    public setId(id: java.lang.String | string, notify: boolean): void
                    // @ts-ignore
                    public setManager(manager: org.apache.catalina.Manager): void
                    // @ts-ignore
                    public setMaxInactiveInterval(interval: number /*int*/): void
                    // @ts-ignore
                    public setNew(isNew: boolean): void
                    // @ts-ignore
                    public setNote(name: java.lang.String | string, value: java.lang.Object | any): void
                    // @ts-ignore
                    public setPrincipal(principal: java.security.Principal): void
                    // @ts-ignore
                    public setValid(isValid: boolean): void
                    // @ts-ignore
                    public tellChangedSessionId(newId: java.lang.String | string, oldId: java.lang.String | string, notifySessionListeners: boolean, notifyContainerListeners: boolean): void
                    // @ts-ignore
                    public isAttributeDistributable(name: java.lang.String | string, value: java.lang.Object | any): boolean
                }
            }
        }
    }
}
