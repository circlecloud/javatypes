declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                // @ts-ignore
                class AsyncContextImpl extends java.lang.Object implements javax.servlet.AsyncContext, org.apache.coyote.AsyncContextCallback {
                    // @ts-ignore
                    constructor(request: org.apache.catalina.connector.Request)
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public complete(): void
                    // @ts-ignore
                    public fireOnComplete(): void
                    // @ts-ignore
                    public timeout(): boolean
                    // @ts-ignore
                    public dispatch(): void
                    // @ts-ignore
                    public dispatch(path: java.lang.String | string): void
                    // @ts-ignore
                    public dispatch(context: javax.servlet.ServletContext, path: java.lang.String | string): void
                    // @ts-ignore
                    public getRequest(): javax.servlet.ServletRequest
                    // @ts-ignore
                    public getResponse(): javax.servlet.ServletResponse
                    // @ts-ignore
                    public start(run: java.lang.Runnable): void
                    // @ts-ignore
                    public addListener(listener: javax.servlet.AsyncListener): void
                    // @ts-ignore
                    public addListener(listener: javax.servlet.AsyncListener, servletRequest: javax.servlet.ServletRequest, servletResponse: javax.servlet.ServletResponse): void
                    // @ts-ignore
                    public createListener<T extends javax.servlet.AsyncListener>(clazz: java.lang.Class<T>): T
                    // @ts-ignore
                    public recycle(): void
                    // @ts-ignore
                    public isStarted(): boolean
                    // @ts-ignore
                    public setStarted(context: org.apache.catalina.Context, request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, originalRequestResponse: boolean): void
                    // @ts-ignore
                    public hasOriginalRequestAndResponse(): boolean
                    // @ts-ignore
                    doInternalDispatch(): void
                    // @ts-ignore
                    public getTimeout(): number /*long*/
                    // @ts-ignore
                    public setTimeout(timeout: number /*long*/): void
                    // @ts-ignore
                    public isAvailable(): boolean
                    // @ts-ignore
                    public setErrorState(t: java.lang.Throwable | Error, fireOnError: boolean): void
                }
            }
        }
    }
}
