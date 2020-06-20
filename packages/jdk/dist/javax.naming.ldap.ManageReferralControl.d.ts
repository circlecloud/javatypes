declare namespace javax {
    namespace naming {
        namespace ldap {
            /**
             * Requests that referral and other special LDAP objects be manipulated
             * as normal LDAP objects. It enables the requestor to interrogate or
             * update such objects.
             * <p>
             * This class implements the LDAPv3 Request Control for ManageDsaIT
             * as defined in
             * <a href="http://www.ietf.org/rfc/rfc3296.txt">RFC 3296</a>.
             * The control has no control value.
             * @since 1.5
             * @author Vincent Ryan
             */
            // @ts-ignore
            class ManageReferralControl extends javax.naming.ldap.BasicControl {
                /**
                 * Constructs a critical ManageReferral control.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a ManageReferral control.
                 * @param criticality The control's criticality setting.
                 */
                // @ts-ignore
                constructor(criticality: boolean)
                /**
                 * The ManageReferral control's assigned object identifier
                 * is 2.16.840.1.113730.3.4.2.
                 */
                // @ts-ignore
                readonly OID: string
            }
        }
    }
}
