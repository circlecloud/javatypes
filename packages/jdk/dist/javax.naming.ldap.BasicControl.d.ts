declare namespace javax {
    namespace naming {
        namespace ldap {
            /**
             * This class provides a basic implementation of the <tt>Control</tt>
             * interface. It represents an LDAPv3 Control as defined in
             * <a href="http://www.ietf.org/rfc/rfc2251.txt">RFC 2251</a>.
             * @since 1.5
             * @author Vincent Ryan
             */
            // @ts-ignore
            class BasicControl extends java.lang.Object implements javax.naming.ldap.Control {
                /**
                 * Constructs a non-critical control.
                 * @param id      The control's object identifier string.
                 */
                // @ts-ignore
                constructor(id: string)
                /**
                 * Constructs a control using the supplied arguments.
                 * @param id              The control's object identifier string.
                 * @param criticality     The control's criticality.
                 * @param value           The control's ASN.1 BER encoded value.
                 *                           It is not cloned - any changes to value
                 *                           will affect the contents of the control.
                 *                           It may be null.
                 */
                // @ts-ignore
                constructor(id: string, criticality: boolean, value: number /*byte*/[])
                /**
                 * The control's object identifier string.
                 * @serial 
                 */
                // @ts-ignore
                id: string
                /**
                 * The control's criticality.
                 * @serial 
                 */
                // @ts-ignore
                criticality: boolean
                /**
                 * The control's ASN.1 BER encoded value.
                 * @serial 
                 */
                // @ts-ignore
                value: number /*byte*/[]
                /**
                 * Retrieves the control's object identifier string.
                 * @return The non-null object identifier string.
                 */
                // @ts-ignore
                getID(): java.lang.String
                /**
                 * Determines the control's criticality.
                 * @return true if the control is critical; false otherwise.
                 */
                // @ts-ignore
                isCritical(): boolean
                /**
                 * Retrieves the control's ASN.1 BER encoded value.
                 * The result includes the BER tag and length for the control's value but
                 * does not include the control's object identifier and criticality setting.
                 * @return A possibly null byte array representing the control's
                 *           ASN.1 BER encoded value. It is not cloned - any changes to the
                 *           returned value will affect the contents of the control.
                 */
                // @ts-ignore
                getEncodedValue(): byte[]
            }
        }
    }
}
