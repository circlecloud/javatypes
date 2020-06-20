declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * This feature clarifies the use of the <code>wsdl:binding</code>
             * in a JAX-WS runtime.
             * <p>
             * This annotation MUST only be used in conjunction the
             * <code>javax.jws.WebService</code>, {@link WebServiceProvider},
             * {@link WebServiceRef} annotations.
             * When used with the <code>javax.jws.WebService</code> annotation this
             * annotation MUST only be used on the service endpoint implementation
             * class.
             * When used with a <code>WebServiceRef</code> annotation, this annotation
             * MUST only be used when a proxy instance is created. The injected SEI
             * proxy, and endpoint MUST honor the values of the <code>RespectBinding</code>
             * annotation.
             * <p>
             * This annotation's behaviour is defined by the corresponding feature
             * {@link RespectBindingFeature}.
             * @see RespectBindingFeature
             * @since JAX-WS 2.1
             */
            // @ts-ignore
            class RespectBinding implements java.lang.annotation.Annotation {
            }
        }
    }
}
