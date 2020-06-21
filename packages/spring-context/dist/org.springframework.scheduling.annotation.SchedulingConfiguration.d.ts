declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * {@code @Configuration} class that registers a {@link ScheduledAnnotationBeanPostProcessor}
                 * bean capable of processing Spring's @{@link Scheduled} annotation.
                 * <p>This configuration class is automatically imported when using the
                 * {@link EnableScheduling @EnableScheduling} annotation. See
                 * {@code @EnableScheduling}'s javadoc for complete usage details.
                 * @author Chris Beams
                 * @since 3.1
                 * @see EnableScheduling
                 * @see ScheduledAnnotationBeanPostProcessor
                 */
                // @ts-ignore
                class SchedulingConfiguration extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public scheduledAnnotationProcessor(): org.springframework.scheduling.annotation.ScheduledAnnotationBeanPostProcessor
                }
            }
        }
    }
}
