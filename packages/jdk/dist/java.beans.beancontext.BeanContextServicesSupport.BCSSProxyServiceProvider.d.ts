declare namespace java {
    namespace beans {
        namespace beancontext {
            namespace BeanContextServicesSupport {
                // @ts-ignore
                class BCSSProxyServiceProvider extends java.lang.Object implements java.beans.beancontext.BeanContextServiceProvider, java.beans.beancontext.BeanContextServiceRevokedListener {
                    // @ts-ignore
                    getService(bcs: java.beans.beancontext.BeanContextServices, requestor: any, serviceClass: java.lang.Class, serviceSelector: any): java.lang.Object
                    // @ts-ignore
                    releaseService(bcs: java.beans.beancontext.BeanContextServices, requestor: any, service: any): void
                    // @ts-ignore
                    getCurrentServiceSelectors(bcs: java.beans.beancontext.BeanContextServices, serviceClass: java.lang.Class): java.util.Iterator
                    // @ts-ignore
                    serviceRevoked(bcsre: java.beans.beancontext.BeanContextServiceRevokedEvent): void
                }
            }
        }
    }
}
