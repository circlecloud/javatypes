declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a servlet definition for a web application, as represented
                         * in a <code>&lt;servlet&gt;</code> element in the deployment descriptor.
                         */
                        // @ts-ignore
                        class ServletDef extends java.lang.Object implements java.io.Serializable {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getDescription(): string
                            // @ts-ignore
                            public setDescription(description: java.lang.String | string): void
                            // @ts-ignore
                            public getDisplayName(): string
                            // @ts-ignore
                            public setDisplayName(displayName: java.lang.String | string): void
                            // @ts-ignore
                            public getSmallIcon(): string
                            // @ts-ignore
                            public setSmallIcon(smallIcon: java.lang.String | string): void
                            // @ts-ignore
                            public getLargeIcon(): string
                            // @ts-ignore
                            public setLargeIcon(largeIcon: java.lang.String | string): void
                            // @ts-ignore
                            public getServletName(): string
                            // @ts-ignore
                            public setServletName(servletName: java.lang.String | string): void
                            // @ts-ignore
                            public getServletClass(): string
                            // @ts-ignore
                            public setServletClass(servletClass: java.lang.String | string): void
                            // @ts-ignore
                            public getJspFile(): string
                            // @ts-ignore
                            public setJspFile(jspFile: java.lang.String | string): void
                            // @ts-ignore
                            public getParameterMap(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            /**
                             * Add an initialization parameter to the set of parameters associated
                             * with this servlet.
                             * @param name The initialisation parameter name
                             * @param value The initialisation parameter value
                             */
                            // @ts-ignore
                            public addInitParameter(name: java.lang.String | string, value: java.lang.String | string): void
                            // @ts-ignore
                            public getLoadOnStartup(): number
                            // @ts-ignore
                            public setLoadOnStartup(loadOnStartup: java.lang.String | string): void
                            // @ts-ignore
                            public getRunAs(): string
                            // @ts-ignore
                            public setRunAs(runAs: java.lang.String | string): void
                            // @ts-ignore
                            public getSecurityRoleRefs(): Array<org.apache.tomcat.util.descriptor.web.SecurityRoleRef>
                            /**
                             * Add a security-role-ref to the set of security-role-refs associated
                             * with this servlet.
                             * @param securityRoleRef The security role
                             */
                            // @ts-ignore
                            public addSecurityRoleRef(securityRoleRef: org.apache.tomcat.util.descriptor.web.SecurityRoleRef): void
                            // @ts-ignore
                            public getMultipartDef(): org.apache.tomcat.util.descriptor.web.MultipartDef
                            // @ts-ignore
                            public setMultipartDef(multipartDef: org.apache.tomcat.util.descriptor.web.MultipartDef): void
                            // @ts-ignore
                            public getAsyncSupported(): java.lang.Boolean
                            // @ts-ignore
                            public setAsyncSupported(asyncSupported: java.lang.String | string): void
                            // @ts-ignore
                            public getEnabled(): java.lang.Boolean
                            // @ts-ignore
                            public setEnabled(enabled: java.lang.String | string): void
                            // @ts-ignore
                            public isOverridable(): boolean
                            // @ts-ignore
                            public setOverridable(overridable: boolean): void
                        }
                    }
                }
            }
        }
    }
}
