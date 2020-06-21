declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * A WebServiceFeature is used to represent a feature that can be
             * enabled or disabled for a web service.
             * <p>
             * The JAX-WS specification will define some standard features and
             * JAX-WS implementors are free to define additional features if
             * necessary.  Vendor specific features may not be portable so
             * caution should be used when using them. Each Feature definition
             * MUST define a <code>public static final String ID</code>
             * that can be used in the Feature annotation to refer
             * to the feature. This ID MUST be unique across all features
             * of all vendors.  When defining a vendor specific feature ID,
             * use a vendor specific namespace in the ID string.
             * @see javax.xml.ws.RespectBindingFeature
             * @see javax.xml.ws.soap.AddressingFeature
             * @see javax.xml.ws.soap.MTOMFeature
             * @since 2.1
             */
            // @ts-ignore
            abstract class WebServiceFeature extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Specifies if the feature is enabled or disabled
                 */
                // @ts-ignore
                enabled: boolean
                /**
                 * Get the unique identifier for this WebServiceFeature.
                 * @return the unique identifier for this feature.
                 */
                // @ts-ignore
                public abstract getID(): string
                /**
                 * Returns <code>true</code> if this feature is enabled.
                 * @return <code>true</code> if and only if the feature is enabled .
                 */
                // @ts-ignore
                public isEnabled(): boolean
            }
        }
    }
}
