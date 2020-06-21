declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                // @ts-ignore
                class AsyncListenerWrapper extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public fireOnStartAsync(event: javax.servlet.AsyncEvent): void
                    // @ts-ignore
                    public fireOnComplete(event: javax.servlet.AsyncEvent): void
                    // @ts-ignore
                    public fireOnTimeout(event: javax.servlet.AsyncEvent): void
                    // @ts-ignore
                    public fireOnError(event: javax.servlet.AsyncEvent): void
                    // @ts-ignore
                    public getListener(): javax.servlet.AsyncListener
                    // @ts-ignore
                    public setListener(listener: javax.servlet.AsyncListener): void
                    // @ts-ignore
                    public setServletRequest(servletRequest: javax.servlet.ServletRequest): void
                    // @ts-ignore
                    public setServletResponse(servletResponse: javax.servlet.ServletResponse): void
                }
            }
        }
    }
}
