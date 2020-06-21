declare namespace org {
    namespace springframework {
        namespace stereotype {
            /**
             * Indicates that an annotated class is a "component".
             * Such classes are considered as candidates for auto-detection
             * when using annotation-based configuration and classpath scanning.
             * <p>Other class-level annotations may be considered as identifying
             * a component as well, typically a special kind of component:
             * e.g. the {@link Repository @Repository} annotation or AspectJ's
             * {@link org.aspectj.lang.annotation.Aspect @Aspect} annotation.
             * @author Mark Fisher
             * @since 2.5
             * @see Repository
             * @see Service
             * @see Controller
             * @see org.springframework.context.annotation.ClassPathBeanDefinitionScanner
             */
            // @ts-ignore
            abstract class Component implements java.lang.annotation.Annotation {
            }
        }
    }
}
