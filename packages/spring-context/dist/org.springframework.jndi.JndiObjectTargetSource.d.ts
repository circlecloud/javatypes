declare namespace org {
    namespace springframework {
        namespace jndi {
            /**
             * AOP {@link org.springframework.aop.TargetSource} that provides
             * configurable JNDI lookups for {@code getTarget()} calls.
             * <p>Can be used as alternative to {@link JndiObjectFactoryBean}, to allow for
             * relocating a JNDI object lazily or for each operation (see "lookupOnStartup"
             * and "cache" properties). This is particularly useful during development, as it
             * allows for hot restarting of the JNDI server (for example, a remote JMS server).
             * <p>Example:
             * <pre class="code">
             * &lt;bean id="queueConnectionFactoryTarget" class="org.springframework.jndi.JndiObjectTargetSource"&gt;
             * &lt;property name="jndiName" value="JmsQueueConnectionFactory"/&gt;
             * &lt;property name="lookupOnStartup" value="false"/&gt;
             * &lt;/bean&gt;
             * &lt;bean id="queueConnectionFactory" class="org.springframework.aop.framework.ProxyFactoryBean"&gt;
             * &lt;property name="proxyInterfaces" value="javax.jms.QueueConnectionFactory"/&gt;
             * &lt;property name="targetSource" ref="queueConnectionFactoryTarget"/&gt;
             * &lt;/bean&gt;</pre>
             * A {@code createQueueConnection} call on the "queueConnectionFactory" proxy will
             * cause a lazy JNDI lookup for "JmsQueueConnectionFactory" and a subsequent delegating
             * call to the retrieved QueueConnectionFactory's {@code createQueueConnection}.
             * <p><b>Alternatively, use a {@link JndiObjectFactoryBean} with a "proxyInterface".</b>
             * "lookupOnStartup" and "cache" can then be specified on the JndiObjectFactoryBean,
             * creating a JndiObjectTargetSource underneath (instead of defining separate
             * ProxyFactoryBean and JndiObjectTargetSource beans).
             * @author Juergen Hoeller
             * @since 1.1
             * @see #setLookupOnStartup
             * @see #setCache
             * @see org.springframework.aop.framework.ProxyFactoryBean#setTargetSource
             * @see JndiObjectFactoryBean#setProxyInterface
             */
            // @ts-ignore
            class JndiObjectTargetSource extends org.springframework.jndi.JndiObjectLocator {
                // @ts-ignore
                constructor()
                /**
                 * Set whether to look up the JNDI object on startup. Default is "true".
                 * <p>Can be turned off to allow for late availability of the JNDI object.
                 * In this case, the JNDI object will be fetched on first access.
                 * @see #setCache
                 */
                // @ts-ignore
                public setLookupOnStartup(lookupOnStartup: boolean): void
                /**
                 * Set whether to cache the JNDI object once it has been located.
                 * Default is "true".
                 * <p>Can be turned off to allow for hot redeployment of JNDI objects.
                 * In this case, the JNDI object will be fetched for each invocation.
                 * @see #setLookupOnStartup
                 */
                // @ts-ignore
                public setCache(cache: boolean): void
                // @ts-ignore
                public afterPropertiesSet(): void
                // @ts-ignore
                public getTargetClass(): java.lang.Class<any>
                // @ts-ignore
                public isStatic(): boolean
                // @ts-ignore
                public getTarget(): any
                // @ts-ignore
                public releaseTarget(target: java.lang.Object | any): void
            }
        }
    }
}
