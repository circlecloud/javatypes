declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace support {
                /**
                 * {@link FactoryBean} that obtains a WebSphere {@link javax.management.MBeanServer}
                 * reference through WebSphere's proprietary {@code AdminServiceFactory} API,
                 * available on WebSphere 5.1 and higher.
                 * <p>Exposes the {@code MBeanServer} for bean references.
                 * <p>This {@code FactoryBean} is a direct alternative to {@link MBeanServerFactoryBean},
                 * which uses standard JMX 1.2 API to access the platform's {@link MBeanServer}.
                 * <p>See the javadocs for WebSphere's
                 * <a href="https://www.ibm.com/support/knowledgecenter/SSEQTJ_9.0.0/com.ibm.websphere.javadoc.doc/web/apidocs/com/ibm/websphere/management/AdminServiceFactory.html">{@code AdminServiceFactory}</a>
                 * and
                 * <a href="https://www.ibm.com/support/knowledgecenter/SSEQTJ_9.0.0/com.ibm.websphere.javadoc.doc/web/apidocs/com/ibm/websphere/management/MBeanFactory.html">{@code MBeanFactory}</a>.
                 * @author Juergen Hoeller
                 * @author Rob Harrop
                 * @since 2.0.3
                 * @see javax.management.MBeanServer
                 * @see MBeanServerFactoryBean
                 */
                // @ts-ignore
                class WebSphereMBeanServerFactoryBean extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public getObject(): javax.management.MBeanServer
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                }
            }
        }
    }
}
