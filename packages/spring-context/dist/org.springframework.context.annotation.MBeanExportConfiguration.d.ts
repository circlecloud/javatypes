declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * {@code @Configuration} class that registers a {@link AnnotationMBeanExporter} bean.
                 * <p>This configuration class is automatically imported when using the
                 * {@link EnableMBeanExport} annotation. See its javadoc for complete usage details.
                 * @author Phillip Webb
                 * @author Chris Beams
                 * @since 3.2
                 * @see EnableMBeanExport
                 */
                // @ts-ignore
                class MBeanExportConfiguration extends java.lang.Object implements org.springframework.context.annotation.ImportAware, org.springframework.context.EnvironmentAware {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public setImportMetadata(importMetadata: AnnotationMetadata): void
                    // @ts-ignore
                    public setEnvironment(environment: Environment): void
                    // @ts-ignore
                    public setBeanFactory(beanFactory: BeanFactory): void
                    // @ts-ignore
                    public mbeanExporter(): org.springframework.jmx.export.annotation.AnnotationMBeanExporter
                }
            }
        }
    }
}
