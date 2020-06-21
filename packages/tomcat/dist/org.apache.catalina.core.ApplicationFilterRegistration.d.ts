declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                // @ts-ignore
                class ApplicationFilterRegistration extends java.lang.Object implements javax.servlet.FilterRegistration.Dynamic {
                    // @ts-ignore
                    constructor(filterDef: org.apache.tomcat.util.descriptor.web.FilterDef, context: org.apache.catalina.Context)
                    // @ts-ignore
                    public addMappingForServletNames(dispatcherTypes: java.util.EnumSet<javax.servlet.DispatcherType>, isMatchAfter: boolean, ...servletNames: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public addMappingForUrlPatterns(dispatcherTypes: java.util.EnumSet<javax.servlet.DispatcherType>, isMatchAfter: boolean, ...urlPatterns: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getServletNameMappings(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getUrlPatternMappings(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getClassName(): string
                    // @ts-ignore
                    public getInitParameter(name: java.lang.String | string): string
                    // @ts-ignore
                    public getInitParameters(): java.util.Map<java.lang.String | string, java.lang.String | string>
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public setInitParameter(name: java.lang.String | string, value: java.lang.String | string): boolean
                    // @ts-ignore
                    public setInitParameters(initParameters: java.util.Map<java.lang.String | string, java.lang.String | string>): Array<java.lang.String | string>
                    // @ts-ignore
                    public setAsyncSupported(asyncSupported: boolean): void
                }
            }
        }
    }
}
