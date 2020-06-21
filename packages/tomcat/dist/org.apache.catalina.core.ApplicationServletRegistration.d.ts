declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                // @ts-ignore
                class ApplicationServletRegistration extends java.lang.Object implements javax.servlet.ServletRegistration.Dynamic {
                    // @ts-ignore
                    constructor(wrapper: org.apache.catalina.Wrapper, context: org.apache.catalina.Context)
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
                    // @ts-ignore
                    public setLoadOnStartup(loadOnStartup: number /*int*/): void
                    // @ts-ignore
                    public setMultipartConfig(multipartConfig: javax.servlet.MultipartConfigElement): void
                    // @ts-ignore
                    public setRunAsRole(roleName: java.lang.String | string): void
                    // @ts-ignore
                    public setServletSecurity(constraint: javax.servlet.ServletSecurityElement): Array<java.lang.String | string>
                    // @ts-ignore
                    public addMapping(...urlPatterns: java.lang.String[] | string[]): Array<java.lang.String | string>
                    // @ts-ignore
                    public getMappings(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getRunAsRole(): string
                }
            }
        }
    }
}
