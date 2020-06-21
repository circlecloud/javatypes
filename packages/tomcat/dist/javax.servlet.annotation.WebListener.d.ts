declare namespace javax {
    namespace servlet {
        namespace annotation {
            /**
             * The annotation used to declare a listener for various types of event, in a
             * given web application context.<br>
             * <br>
             * The class annotated MUST implement one, (or more), of the following
             * interfaces: {@link javax.servlet.http.HttpSessionAttributeListener},
             * {@link javax.servlet.http.HttpSessionListener},
             * {@link javax.servlet.ServletContextAttributeListener},
             * {@link javax.servlet.ServletContextListener},
             * {@link javax.servlet.ServletRequestAttributeListener},
             * {@link javax.servlet.ServletRequestListener} or
             * {@link javax.servlet.http.HttpSessionIdListener}
             * <br>
             * E.g. <code>@WebListener</code><br>
             * <code>public TestListener implements ServletContextListener {</code><br>
             * @since Servlet 3.0
             */
            // @ts-ignore
            abstract class WebListener implements java.lang.annotation.Annotation {
            }
        }
    }
}
