declare namespace javax {
    namespace servlet {
        namespace annotation {
            /**
             * This annotation is used to declare the configuration of an
             * {@link javax.servlet.Servlet}. <br>
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
             * The class on which this annotation is declared MUST extend
             * {@link javax.servlet.http.HttpServlet}. <br>
             * <br>
             * E.g. <code>@WebServlet("/path")}<br>
             * public class TestServlet extends HttpServlet ... {</code><br>
             * E.g.
             * <code>@WebServlet(name="TestServlet", urlPatterns={"/path", "/alt"}) <br>
             * public class TestServlet extends HttpServlet ... {</code><br>
             * @since Servlet 3.0 (Section 8.1.1)
             */
            // @ts-ignore
            abstract class WebServlet implements java.lang.annotation.Annotation {
            }
        }
    }
}
