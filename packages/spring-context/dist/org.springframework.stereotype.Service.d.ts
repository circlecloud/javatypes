declare namespace org {
    namespace springframework {
        namespace stereotype {
            /**
             * Indicates that an annotated class is a "Service", originally defined by Domain-Driven
             * Design (Evans, 2003) as "an operation offered as an interface that stands alone in the
             * model, with no encapsulated state."
             * <p>May also indicate that a class is a "Business Service Facade" (in the Core J2EE
             * patterns sense), or something similar. This annotation is a general-purpose stereotype
             * and individual teams may narrow their semantics and use as appropriate.
             * <p>This annotation serves as a specialization of {@link Component @Component},
             * allowing for implementation classes to be autodetected through classpath scanning.
             * @author Juergen Hoeller
             * @since 2.5
             * @see Component
             * @see Repository
             */
            // @ts-ignore
            abstract class Service implements java.lang.annotation.Annotation {
            }
        }
    }
}
