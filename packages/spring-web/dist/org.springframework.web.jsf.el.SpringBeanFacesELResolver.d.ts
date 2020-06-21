declare namespace org {
    namespace springframework {
        namespace web {
            namespace jsf {
                namespace el {
                    /**
                     * JSF {@code ELResolver} that delegates to the Spring root {@code WebApplicationContext},
                     * resolving name references to Spring-defined beans.
                     * <p>Configure this resolver in your {@code faces-config.xml} file as follows:
                     * <pre class="code">
                     * &lt;application>
                     * ...
                     * &lt;el-resolver>org.springframework.web.jsf.el.SpringBeanFacesELResolver&lt;/el-resolver>
                     * &lt;/application></pre>
                     * All your JSF expressions can then implicitly refer to the names of
                     * Spring-managed service layer beans, for example in property values of
                     * JSF-managed beans:
                     * <pre class="code">
                     * &lt;managed-bean>
                     * &lt;managed-bean-name>myJsfManagedBean&lt;/managed-bean-name>
                     * &lt;managed-bean-class>example.MyJsfManagedBean&lt;/managed-bean-class>
                     * &lt;managed-bean-scope>session&lt;/managed-bean-scope>
                     * &lt;managed-property>
                     * &lt;property-name>mySpringManagedBusinessObject&lt;/property-name>
                     * &lt;value>#{mySpringManagedBusinessObject}&lt;/value>
                     * &lt;/managed-property>
                     * &lt;/managed-bean></pre>
                     * with "mySpringManagedBusinessObject" defined as Spring bean in
                     * applicationContext.xml:
                     * <pre class="code">
                     * &lt;bean id="mySpringManagedBusinessObject" class="example.MySpringManagedBusinessObject">
                     * ...
                     * &lt;/bean></pre>
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see WebApplicationContextFacesELResolver
                     * @see org.springframework.web.jsf.FacesContextUtils#getRequiredWebApplicationContext
                     */
                    // @ts-ignore
                    class SpringBeanFacesELResolver extends ELResolver {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getValue(elContext: ELContext, base: java.lang.Object | any, property: java.lang.Object | any): any
                        // @ts-ignore
                        public getType(elContext: ELContext, base: java.lang.Object | any, property: java.lang.Object | any): java.lang.Class<any>
                        // @ts-ignore
                        public setValue(elContext: ELContext, base: java.lang.Object | any, property: java.lang.Object | any, value: java.lang.Object | any): void
                        // @ts-ignore
                        public isReadOnly(elContext: ELContext, base: java.lang.Object | any, property: java.lang.Object | any): boolean
                        // @ts-ignore
                        public getFeatureDescriptors(elContext: ELContext, base: java.lang.Object | any): java.util.Iterator<java.beans.FeatureDescriptor>
                        // @ts-ignore
                        public getCommonPropertyType(elContext: ELContext, base: java.lang.Object | any): java.lang.Class<any>
                        /**
                         * Retrieve the web application context to delegate bean name resolution to.
                         * <p>The default implementation delegates to FacesContextUtils.
                         * @param elContext the current JSF ELContext
                         * @return the Spring web application context (never {#code null})
                         * @see org.springframework.web.jsf.FacesContextUtils#getRequiredWebApplicationContext
                         */
                        // @ts-ignore
                        getWebApplicationContext(elContext: ELContext): org.springframework.web.context.WebApplicationContext
                    }
                }
            }
        }
    }
}
