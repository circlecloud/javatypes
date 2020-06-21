declare namespace javax {
    namespace servlet {
        namespace ServletRegistration {
            // @ts-ignore
            interface Dynamic extends javax.servlet.ServletRegistration, javax.servlet.Registration.Dynamic {
                // @ts-ignore
                setLoadOnStartup(loadOnStartup: number /*int*/): void
                // @ts-ignore
                setServletSecurity(constraint: javax.servlet.ServletSecurityElement): Array<java.lang.String | string>
                // @ts-ignore
                setMultipartConfig(multipartConfig: javax.servlet.MultipartConfigElement): void
                // @ts-ignore
                setRunAsRole(roleName: java.lang.String | string): void
            }
        }
    }
}
