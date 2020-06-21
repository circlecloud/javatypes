declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of common elements of web.xml and web-fragment.xml. Provides
                         * a repository for parsed data before the elements are merged.
                         * Validation is spread between multiple classes:
                         * The digester checks for structural correctness (eg single login-config)
                         * This class checks for invalid duplicates (eg filter/servlet names)
                         * StandardContext will check validity of values (eg URL formats etc)
                         */
                        // @ts-ignore
                        class WebXml extends org.apache.tomcat.util.descriptor.web.XmlEncodingBase implements org.apache.tomcat.util.digester.DocumentProperties.Charset {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            static readonly ORDER_OTHERS: java.lang.String | string
                            // @ts-ignore
                            public isOverridable(): boolean
                            // @ts-ignore
                            public setOverridable(overridable: boolean): void
                            // @ts-ignore
                            public isDuplicated(): boolean
                            // @ts-ignore
                            public setDuplicated(duplicated: boolean): void
                            // @ts-ignore
                            public createAbsoluteOrdering(): void
                            // @ts-ignore
                            public addAbsoluteOrdering(fragmentName: java.lang.String | string): void
                            // @ts-ignore
                            public addAbsoluteOrderingOthers(): void
                            // @ts-ignore
                            public getAbsoluteOrdering(): Array<java.lang.String | string>
                            // @ts-ignore
                            public addAfterOrdering(fragmentName: java.lang.String | string): void
                            // @ts-ignore
                            public addAfterOrderingOthers(): void
                            // @ts-ignore
                            public getAfterOrdering(): Array<java.lang.String | string>
                            // @ts-ignore
                            public addBeforeOrdering(fragmentName: java.lang.String | string): void
                            // @ts-ignore
                            public addBeforeOrderingOthers(): void
                            // @ts-ignore
                            public getBeforeOrdering(): Array<java.lang.String | string>
                            // @ts-ignore
                            public getVersion(): string
                            /**
                             * Set the version for this web.xml file
                             * @param version   Values of <code>null</code> will be ignored
                             */
                            // @ts-ignore
                            public setVersion(version: java.lang.String | string): void
                            // @ts-ignore
                            public getPublicId(): string
                            // @ts-ignore
                            public setPublicId(publicId: java.lang.String | string): void
                            // @ts-ignore
                            public isMetadataComplete(): boolean
                            // @ts-ignore
                            public setMetadataComplete(metadataComplete: boolean): void
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public setName(name: java.lang.String | string): void
                            // @ts-ignore
                            public getMajorVersion(): number /*int*/
                            // @ts-ignore
                            public getMinorVersion(): number /*int*/
                            // @ts-ignore
                            public getDisplayName(): string
                            // @ts-ignore
                            public setDisplayName(displayName: java.lang.String | string): void
                            // @ts-ignore
                            public isDistributable(): boolean
                            // @ts-ignore
                            public setDistributable(distributable: boolean): void
                            // @ts-ignore
                            public getDenyUncoveredHttpMethods(): boolean
                            // @ts-ignore
                            public setDenyUncoveredHttpMethods(denyUncoveredHttpMethods: boolean): void
                            // @ts-ignore
                            public addContextParam(param: java.lang.String | string, value: java.lang.String | string): void
                            // @ts-ignore
                            public getContextParams(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            // @ts-ignore
                            public addFilter(filter: org.apache.tomcat.util.descriptor.web.FilterDef): void
                            // @ts-ignore
                            public getFilters(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.FilterDef>
                            // @ts-ignore
                            public addFilterMapping(filterMap: org.apache.tomcat.util.descriptor.web.FilterMap): void
                            // @ts-ignore
                            public getFilterMappings(): Array<org.apache.tomcat.util.descriptor.web.FilterMap>
                            // @ts-ignore
                            public addListener(className: java.lang.String | string): void
                            // @ts-ignore
                            public getListeners(): Array<java.lang.String | string>
                            // @ts-ignore
                            public addServlet(servletDef: org.apache.tomcat.util.descriptor.web.ServletDef): void
                            // @ts-ignore
                            public getServlets(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.ServletDef>
                            // @ts-ignore
                            public addServletMapping(urlPattern: java.lang.String | string, servletName: java.lang.String | string): void
                            // @ts-ignore
                            public addServletMappingDecoded(urlPattern: java.lang.String | string, servletName: java.lang.String | string): void
                            // @ts-ignore
                            public getServletMappings(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            // @ts-ignore
                            public setSessionConfig(sessionConfig: org.apache.tomcat.util.descriptor.web.SessionConfig): void
                            // @ts-ignore
                            public getSessionConfig(): org.apache.tomcat.util.descriptor.web.SessionConfig
                            // @ts-ignore
                            public addMimeMapping(extension: java.lang.String | string, mimeType: java.lang.String | string): void
                            // @ts-ignore
                            public getMimeMappings(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            /**
                             * When merging/parsing web.xml files into this web.xml should the current
                             * set be completely replaced?
                             * @param replaceWelcomeFiles <code>true</code> to replace welcome files
                             *   rather than add to the list
                             */
                            // @ts-ignore
                            public setReplaceWelcomeFiles(replaceWelcomeFiles: boolean): void
                            /**
                             * When merging from this web.xml, should the welcome files be added to the
                             * target web.xml even if it already contains welcome file definitions.
                             * @param alwaysAddWelcomeFiles <code>true</code> to add welcome files
                             */
                            // @ts-ignore
                            public setAlwaysAddWelcomeFiles(alwaysAddWelcomeFiles: boolean): void
                            // @ts-ignore
                            public addWelcomeFile(welcomeFile: java.lang.String | string): void
                            // @ts-ignore
                            public getWelcomeFiles(): Array<java.lang.String | string>
                            // @ts-ignore
                            public addErrorPage(errorPage: org.apache.tomcat.util.descriptor.web.ErrorPage): void
                            // @ts-ignore
                            public getErrorPages(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.ErrorPage>
                            // @ts-ignore
                            public addTaglib(uri: java.lang.String | string, location: java.lang.String | string): void
                            // @ts-ignore
                            public getTaglibs(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            // @ts-ignore
                            public addJspPropertyGroup(propertyGroup: org.apache.tomcat.util.descriptor.web.JspPropertyGroup): void
                            // @ts-ignore
                            public getJspPropertyGroups(): Array<org.apache.tomcat.util.descriptor.web.JspPropertyGroup>
                            // @ts-ignore
                            public addSecurityConstraint(securityConstraint: org.apache.tomcat.util.descriptor.web.SecurityConstraint): void
                            // @ts-ignore
                            public getSecurityConstraints(): Array<org.apache.tomcat.util.descriptor.web.SecurityConstraint>
                            // @ts-ignore
                            public setLoginConfig(loginConfig: org.apache.tomcat.util.descriptor.web.LoginConfig): void
                            // @ts-ignore
                            public getLoginConfig(): org.apache.tomcat.util.descriptor.web.LoginConfig
                            // @ts-ignore
                            public addSecurityRole(securityRole: java.lang.String | string): void
                            // @ts-ignore
                            public getSecurityRoles(): Array<java.lang.String | string>
                            // @ts-ignore
                            public addEnvEntry(envEntry: org.apache.tomcat.util.descriptor.web.ContextEnvironment): void
                            // @ts-ignore
                            public getEnvEntries(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.ContextEnvironment>
                            // @ts-ignore
                            public addEjbRef(ejbRef: org.apache.tomcat.util.descriptor.web.ContextEjb): void
                            // @ts-ignore
                            public getEjbRefs(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.ContextEjb>
                            // @ts-ignore
                            public addEjbLocalRef(ejbLocalRef: org.apache.tomcat.util.descriptor.web.ContextLocalEjb): void
                            // @ts-ignore
                            public getEjbLocalRefs(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.ContextLocalEjb>
                            // @ts-ignore
                            public addServiceRef(serviceRef: org.apache.tomcat.util.descriptor.web.ContextService): void
                            // @ts-ignore
                            public getServiceRefs(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.ContextService>
                            // @ts-ignore
                            public addResourceRef(resourceRef: org.apache.tomcat.util.descriptor.web.ContextResource): void
                            // @ts-ignore
                            public getResourceRefs(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.ContextResource>
                            // @ts-ignore
                            public addResourceEnvRef(resourceEnvRef: org.apache.tomcat.util.descriptor.web.ContextResourceEnvRef): void
                            // @ts-ignore
                            public getResourceEnvRefs(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.ContextResourceEnvRef>
                            // @ts-ignore
                            public addMessageDestinationRef(messageDestinationRef: org.apache.tomcat.util.descriptor.web.MessageDestinationRef): void
                            // @ts-ignore
                            public getMessageDestinationRefs(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.MessageDestinationRef>
                            // @ts-ignore
                            public addMessageDestination(messageDestination: org.apache.tomcat.util.descriptor.web.MessageDestination): void
                            // @ts-ignore
                            public getMessageDestinations(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.MessageDestination>
                            // @ts-ignore
                            public addLocaleEncodingMapping(locale: java.lang.String | string, encoding: java.lang.String | string): void
                            // @ts-ignore
                            public getLocaleEncodingMappings(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            // @ts-ignore
                            public addPostConstructMethods(clazz: java.lang.String | string, method: java.lang.String | string): void
                            // @ts-ignore
                            public getPostConstructMethods(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            // @ts-ignore
                            public addPreDestroyMethods(clazz: java.lang.String | string, method: java.lang.String | string): void
                            // @ts-ignore
                            public getPreDestroyMethods(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            // @ts-ignore
                            public getJspConfigDescriptor(): javax.servlet.descriptor.JspConfigDescriptor
                            // @ts-ignore
                            public getRequestCharacterEncoding(): string
                            // @ts-ignore
                            public setRequestCharacterEncoding(requestCharacterEncoding: java.lang.String | string): void
                            // @ts-ignore
                            public getResponseCharacterEncoding(): string
                            // @ts-ignore
                            public setResponseCharacterEncoding(responseCharacterEncoding: java.lang.String | string): void
                            // @ts-ignore
                            public setURL(url: java.net.URL): void
                            // @ts-ignore
                            public getURL(): java.net.URL
                            // @ts-ignore
                            public setJarName(jarName: java.lang.String | string): void
                            // @ts-ignore
                            public getJarName(): string
                            // @ts-ignore
                            public setWebappJar(webappJar: boolean): void
                            // @ts-ignore
                            public getWebappJar(): boolean
                            // @ts-ignore
                            public getDelegate(): boolean
                            // @ts-ignore
                            public setDelegate(delegate: boolean): void
                            // @ts-ignore
                            public toString(): string
                            /**
                             * Generate a web.xml in String form that matches the representation stored
                             * in this object.
                             * @return The complete contents of web.xml as a String
                             */
                            // @ts-ignore
                            public toXml(): string
                            /**
                             * Merge the supplied web fragments into this main web.xml.
                             * @param fragments     The fragments to merge in
                             * @return <code>true</code> if merge is successful, else
                             *          <code>false</code>
                             */
                            // @ts-ignore
                            public merge(fragments: java.util.Set<org.apache.tomcat.util.descriptor.web.WebXml> | Array<org.apache.tomcat.util.descriptor.web.WebXml>): boolean
                            /**
                             * Generates the sub-set of the web-fragment.xml files to be processed in
                             * the order that the fragments must be processed as per the rules in the
                             * Servlet spec.
                             * @param application    The application web.xml file
                             * @param fragments      The map of fragment names to web fragments
                             * @param servletContext The servlet context the fragments are associated
                             *                        with
                             * @return Ordered list of web-fragment.xml files to process
                             */
                            // @ts-ignore
                            public static orderWebFragments(application: org.apache.tomcat.util.descriptor.web.WebXml, fragments: java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.WebXml>, servletContext: javax.servlet.ServletContext): Array<org.apache.tomcat.util.descriptor.web.WebXml>
                        }
                    }
                }
            }
        }
    }
}
