declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Registers an auto proxy creator against the current {@link BeanDefinitionRegistry}
                 * as appropriate based on an {@code @Enable*} annotation having {@code mode} and
                 * {@code proxyTargetClass} attributes set to the correct values.
                 * @author Chris Beams
                 * @since 3.1
                 * @see org.springframework.cache.annotation.EnableCaching
                 * @see org.springframework.transaction.annotation.EnableTransactionManagement
                 */
                // @ts-ignore
                class AutoProxyRegistrar extends java.lang.Object implements org.springframework.context.annotation.ImportBeanDefinitionRegistrar {
                    // @ts-ignore
                    constructor()
                    /**
                     * Register, escalate, and configure the standard auto proxy creator (APC) against the
                     * given registry. Works by finding the nearest annotation declared on the importing
                     * {@code @Configuration} class that has both {@code mode} and {@code proxyTargetClass}
                     * attributes. If {@code mode} is set to {@code PROXY}, the APC is registered; if
                     * {@code proxyTargetClass} is set to {@code true}, then the APC is forced to use
                     * subclass (CGLIB) proxying.
                     * <p>Several {@code @Enable*} annotations expose both {@code mode} and
                     * {@code proxyTargetClass} attributes. It is important to note that most of these
                     * capabilities end up sharing a {@linkplain AopConfigUtils#AUTO_PROXY_CREATOR_BEAN_NAME
                     * single APC}. For this reason, this implementation doesn't "care" exactly which
                     * annotation it finds -- as long as it exposes the right {@code mode} and
                     * {@code proxyTargetClass} attributes, the APC can be registered and configured all
                     * the same.
                     */
                    // @ts-ignore
                    registerBeanDefinitions(importingClassMetadata: AnnotationMetadata, registry: BeanDefinitionRegistry): void
                }
            }
        }
    }
}
