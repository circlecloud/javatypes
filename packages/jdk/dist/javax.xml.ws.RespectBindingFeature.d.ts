declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * This feature clarifies the use of the <code>wsdl:binding</code>
             * in a JAX-WS runtime.
             * This feature can be used during the creation of SEI proxy, and
             * {@link Dispatch} instances on the client side and {@link Endpoint}
             * instances on the server side. This feature cannot be used for {@link Service}
             * instance creation on the client side.
             * <p>
             * This feature is only useful with web services that have an
             * associated WSDL. Enabling this feature requires that a JAX-WS
             * implementation inspect the <code>wsdl:binding</code> for an
             * endpoint at runtime to make sure that all <code>wsdl:extensions</code>
             * that have the <code>required</code> attribute set to <code>true</code>
             * are understood and are being used.
             * <p>
             * The following describes the affects of this feature with respect
             * to be enabled or disabled:
             * <ul>
             * <li> ENABLED: In this Mode, a JAX-WS runtime MUST assure that all
             * required <code>wsdl:binding</code> extensions(including policies) are
             * either understood and used by the runtime, or explicitly disabled by the
             * web service application. A web service can disable a particular
             * extension if there is a corresponding {@link WebServiceFeature} or annotation.
             * Similarly, a web service client can disable
             * particular extension using the corresponding <code>WebServiceFeature</code> while
             * creating a proxy or Dispatch instance.
             * The runtime MUST also make sure that binding of
             * SEI parameters/return values respect the <code>wsdl:binding</code>.
             * With this feature enabled, if a required (<code>wsdl:required="true"</code>)
             * <code>wsdl:binding</code> extension is in the WSDL and it is not
             * supported by a JAX-WS runtime and it has not
             * been explicitly turned off by the web service developer, then
             * that JAX-WS runtime MUST behave appropriately based on whether it is
             * on the client or server:
             * <UL>
             * <li>Client: runtime MUST throw a
             * {@link WebServiceException} no sooner than when one of the methods
             * above is invoked but no later than the first invocation of an endpoint
             * operation.
             * <li>Server: throw a {@link WebServiceException} and the endpoint MUST fail to deploy
             * </ul>
             * <li> DISABLED: In this Mode, an implementation may choose whether
             * to inspect the <code>wsdl:binding</code> or not and to what degree
             * the <code>wsdl:binding</code> will be inspected.  For example,
             * one implementation may choose to behave as if this feature is enabled,
             * another implementation may only choose to verify the SEI's
             * parameter/return type bindings.
             * </ul>
             * @see AddressingFeature
             * @since JAX-WS 2.1
             */
            // @ts-ignore
            class RespectBindingFeature extends javax.xml.ws.WebServiceFeature {
                /**
                 * Creates an <code>RespectBindingFeature</code>.
                 * The instance created will be enabled.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates an RespectBindingFeature
                 * @param enabled specifies whether this feature should
                 *  be enabled or not.
                 */
                // @ts-ignore
                constructor(enabled: boolean)
                /**
                 * Constant value identifying the RespectBindingFeature
                 */
                // @ts-ignore
                public static readonly ID: java.lang.String | string
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getID(): string
            }
        }
    }
}
