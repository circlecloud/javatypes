declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Enables default exporting of all standard {@code MBean}s from the Spring context, as
                 * well as well all {@code @ManagedResource} annotated beans.
                 * <p>The resulting {@link org.springframework.jmx.export.MBeanExporter MBeanExporter}
                 * bean is defined under the name "mbeanExporter". Alternatively, consider defining a
                 * custom {@link AnnotationMBeanExporter} bean explicitly.
                 * <p>This annotation is modeled after and functionally equivalent to Spring XML's
                 * {@code <context:mbean-export/>} element.
                 * @author Phillip Webb
                 * @since 3.2
                 * @see MBeanExportConfiguration
                 */
                // @ts-ignore
                abstract class EnableMBeanExport implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
