declare namespace javax {
    namespace xml {
        namespace ws {
            namespace soap {
                /**
                 * This feature represents the use of MTOM with a
                 * web service.
                 * <p>
                 * This annotation MUST only be used in conjunction the
                 * <code>javax.jws.WebService</code>, {@link WebServiceProvider},
                 * {@link WebServiceRef} annotations.
                 * When used with the <code>javax.jws.WebService</code> annotation this
                 * annotation MUST only be used on the service endpoint implementation
                 * class.
                 * When used with a <code>WebServiceRef</code> annotation, this annotation
                 * MUST only be used when a proxy instance is created. The injected SEI
                 * proxy, and endpoint MUST honor the values of the <code>MTOM</code>
                 * annotation.
                 * <p>
                 * This annotation's behaviour is defined by the corresponding feature
                 * {@link MTOMFeature}.
                 * @since JAX-WS 2.1
                 */
                // @ts-ignore
                abstract class MTOM implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
