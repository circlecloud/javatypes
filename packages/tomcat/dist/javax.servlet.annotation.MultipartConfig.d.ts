declare namespace javax {
    namespace servlet {
        namespace annotation {
            /**
             * This annotation is used to indicate that the {@link javax.servlet.Servlet} on
             * which it is declared expects requests to made using the {@code
             * multipart/form-data} MIME type. <br>
             * <br>
             * {@link javax.servlet.http.Part} components of a given {@code
             * multipart/form-data} request are retrieved by a Servlet annotated with
             * {@code MultipartConfig} by calling
             * {@link javax.servlet.http.HttpServletRequest#getPart} or
             * {@link javax.servlet.http.HttpServletRequest#getParts}.<br>
             * <br>
             * E.g. <code>@WebServlet("/upload")}</code><br>
             * <code>@MultipartConfig()</code> <code>public class UploadServlet extends
             * HttpServlet ... } </code><br>
             * @since Servlet 3.0
             */
            // @ts-ignore
            abstract class MultipartConfig implements java.lang.annotation.Annotation {
            }
        }
    }
}
