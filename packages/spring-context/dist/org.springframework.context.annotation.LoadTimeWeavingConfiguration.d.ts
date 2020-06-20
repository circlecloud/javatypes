declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * {@code @Configuration} class that registers a {@link LoadTimeWeaver} bean.
                 * <p>This configuration class is automatically imported when using the
                 * {@link EnableLoadTimeWeaving} annotation. See {@code @EnableLoadTimeWeaving}
                 * javadoc for complete usage details.
                 * @author Chris Beams
                 * @since 3.1
                 * @see LoadTimeWeavingConfigurer
                 * @see ConfigurableApplicationContext#LOAD_TIME_WEAVER_BEAN_NAME
                 */
                // @ts-ignore
                class LoadTimeWeavingConfiguration extends java.lang.Object implements org.springframework.context.annotation.ImportAware {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    setImportMetadata(importMetadata: AnnotationMetadata): void
                    // @ts-ignore
                    setLoadTimeWeavingConfigurer(ltwConfigurer: org.springframework.context.annotation.LoadTimeWeavingConfigurer): void
                    // @ts-ignore
                    setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    loadTimeWeaver(): org.springframework.instrument.classloading.LoadTimeWeaver
                }
            }
        }
    }
}
