declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * A <b>ContainerServlet</b> is a servlet that has access to Catalina
             * internal functionality, and is loaded from the Catalina class loader
             * instead of the web application class loader.  The property setter
             * methods must be called by the container whenever a new instance of
             * this servlet is put into service.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface ContainerServlet {
                /**
                 * Obtain the Wrapper with which this Servlet is associated.
                 * @return The Wrapper with which this Servlet is associated.
                 */
                // @ts-ignore
                getWrapper(): org.apache.catalina.Wrapper
                /**
                 * Set the Wrapper with which this Servlet is associated.
                 * @param wrapper The new associated Wrapper
                 */
                // @ts-ignore
                setWrapper(wrapper: org.apache.catalina.Wrapper): void
            }
        }
    }
}
