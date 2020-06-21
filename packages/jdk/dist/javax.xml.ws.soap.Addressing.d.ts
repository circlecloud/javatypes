declare namespace javax {
    namespace xml {
        namespace ws {
            namespace soap {
                /**
                 * This annotation represents the use of WS-Addressing with either
                 * the SOAP 1.1/HTTP or SOAP 1.2/HTTP binding. Using this annotation
                 * with any other binding is undefined.
                 * <p>
                 * This annotation MUST only be used in conjunction with the
                 * {@link javax.jws.WebService}, {@link WebServiceProvider},
                 * and {@link WebServiceRef} annotations.
                 * When used with a <code>javax.jws.WebService</code> annotation, this
                 * annotation MUST only be used on the service endpoint implementation
                 * class.
                 * When used with a <code>WebServiceRef</code> annotation, this annotation
                 * MUST only be used when a proxy instance is created. The injected SEI
                 * proxy, and endpoint MUST honor the values of the <code>Addressing</code>
                 * annotation.
                 * <p>
                 * This annotation's behaviour is defined by the corresponding feature
                 * {@link AddressingFeature}.
                 * @since JAX-WS 2.1
                 */
                // @ts-ignore
                abstract class Addressing implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
