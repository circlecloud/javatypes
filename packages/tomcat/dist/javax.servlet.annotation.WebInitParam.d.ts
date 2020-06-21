declare namespace javax {
    namespace servlet {
        namespace annotation {
            /**
             * The annotation used to declare an initialization parameter on a
             * {@link javax.servlet.Servlet} or {@link javax.servlet.Filter}, within a
             * {@link javax.servlet.annotation.WebFilter} or
             * {@link javax.servlet.annotation.WebServlet} annotation.<br>
             * <br>
             * E.g.
             * <code>&amp;#064;WebServlet(name="TestServlet", urlPatterns={"/test"},initParams={&amp;#064;WebInitParam(name="test", value="true")})
             * public class TestServlet extends HttpServlet { ... </code><br>
             * @since Servlet 3.0
             */
            // @ts-ignore
            abstract class WebInitParam implements java.lang.annotation.Annotation {
            }
        }
    }
}
