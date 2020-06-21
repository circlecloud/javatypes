declare namespace java {
    namespace beans {
        namespace beancontext {
            namespace BeanContextServicesSupport {
                // @ts-ignore
                class BCSSProxyServiceProvider extends java.lang.Object implements java.beans.beancontext.BeanContextServiceProvider, java.beans.beancontext.BeanContextServiceRevokedListener {
                    // @ts-ignore
                    public getService(bcs: java.beans.beancontext.BeanContextServices, requestor: java.lang.Object | any, serviceClass: java.lang.Class<any>, serviceSelector: java.lang.Object | any): any
                    // @ts-ignore
                    public releaseService(bcs: java.beans.beancontext.BeanContextServices, requestor: java.lang.Object | any, service: java.lang.Object | any): void
                    // @ts-ignore
                    public getCurrentServiceSelectors(bcs: java.beans.beancontext.BeanContextServices, serviceClass: java.lang.Class<any>): java.util.Iterator<any>
                    // @ts-ignore
                    public serviceRevoked(bcsre: java.beans.beancontext.BeanContextServiceRevokedEvent): void
                }
            }
        }
    }
}
