declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * Used to annotate methods in the Service Endpoint Interface with the response
             * wrapper bean to be used at runtime. The default value of the <code>localName</code> is
             * the <code>operationName</code> as defined in <code>WebMethod</code> annotation appended with
             * <code>Response</code> and the <code>targetNamespace</code> is the target namespace of the SEI.
             * <p> When starting from Java this annotation is used resolve
             * overloading conflicts in document literal mode. Only the <code>className</code>
             * is required in this case.
             * @since JAX-WS 2.0
             */
            // @ts-ignore
            abstract class ResponseWrapper implements java.lang.annotation.Annotation {
            }
        }
    }
}
