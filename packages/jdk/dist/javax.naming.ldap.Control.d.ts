declare namespace javax {
    namespace naming {
        namespace ldap {
            /**
             * This interface represents an LDAPv3 control as defined in
             * <A HREF="http://www.ietf.org/rfc/rfc2251.txt">RFC 2251</A>.
             * <p>
             * The LDAPv3 protocol uses controls to send and receive additional data
             * to affect the behavior of predefined operations.
             * Controls can be sent along with any LDAP operation to the server.
             * These are referred to as <em>request controls</em>. For example, a
             * "sort" control can be sent with an LDAP search operation to
             * request that the results be returned in a particular order.
             * Solicited and unsolicited controls can also be returned with
             * responses from the server. Such controls are referred to as
             * <em>response controls</em>. For example, an LDAP server might
             * define a special control to return change notifications.
             * <p>
             * This interface is used to represent both request and response controls.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @author Vincent Ryan
             * @see ControlFactory
             * @since 1.3
             */
            // @ts-ignore
            interface Control extends java.io.Serializable {
                /**
                 * Indicates a critical control.
                 * The value of this constant is <tt>true</tt>.
                 */
                // @ts-ignore
                
                /**
                 * Indicates a non-critical control.
                 * The value of this constant is <tt>false</tt>.
                 */
                // @ts-ignore
                
                /**
                 * Retrieves the object identifier assigned for the LDAP control.
                 * @return The non-null object identifier string.
                 */
                // @ts-ignore
                getID(): java.lang.String
                /**
                 * Determines the criticality of the LDAP control.
                 * A critical control must not be ignored by the server.
                 * In other words, if the server receives a critical control
                 * that it does not support, regardless of whether the control
                 * makes sense for the operation, the operation will not be performed
                 * and an <tt>OperationNotSupportedException</tt> will be thrown.
                 * @return true if this control is critical; false otherwise.
                 */
                // @ts-ignore
                isCritical(): boolean
                /**
                 * Retrieves the ASN.1 BER encoded value of the LDAP control.
                 * The result is the raw BER bytes including the tag and length of
                 * the control's value. It does not include the controls OID or criticality.
                 * Null is returned if the value is absent.
                 * @return A possibly null byte array representing the ASN.1 BER encoded
                 *          value of the LDAP control.
                 */
                // @ts-ignore
                getEncodedValue(): byte[]
            }
        }
    }
}
