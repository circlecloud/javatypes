declare namespace javax {
    namespace servlet {
        namespace annotation {
            /**
             * The annotation used to declare a Servlet {@link javax.servlet.Filter}. <br>
             * <br>
             * This annotation will be processed by the container during deployment, the
             * Filter class in which it is found will be created as per the configuration
             * and applied to the URL patterns, {@link javax.servlet.Servlet}s and
             * {@link javax.servlet.DispatcherType}s.<br>
             * <br>
             * If the name attribute is not defined, the fully qualified name of the class
             * is used.<br>
             * <br>
             * At least one URL pattern MUST be declared in either the {@code value} or
             * {@code urlPattern} attribute of the annotation, but not both.<br>
             * <br>
             * The {@code value} attribute is recommended for use when the URL pattern is
             * the only attribute being set, otherwise the {@code urlPattern} attribute
             * should be used.<br>
             * <br>
             * The annotated class MUST implement {@link javax.servlet.Filter}.
             * E.g.
             * <code>@WebFilter("/path/*")</code><br>
             * <code>public class AnExampleFilter implements Filter { ... </code><br>
             * @since Servlet 3.0 (Section 8.1.2)
             */
            // @ts-ignore
            abstract class WebFilter implements java.lang.annotation.Annotation {
            }
        }
    }
}
