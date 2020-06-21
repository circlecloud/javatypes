declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * Used to annotate the <code>get<em>PortName</em>()</code>
             * methods of a generated service interface.
             * <p>The information specified in this annotation is sufficient
             * to uniquely identify a <code>wsdl:port</code> element
             * inside a <code>wsdl:service</code>. The latter is
             * determined based on the value of the <code>WebServiceClient</code>
             * annotation on the generated service interface itself.
             * @since JAX-WS 2.0
             * @see javax.xml.ws.WebServiceClient
             */
            // @ts-ignore
            abstract class WebEndpoint implements java.lang.annotation.Annotation {
            }
        }
    }
}
