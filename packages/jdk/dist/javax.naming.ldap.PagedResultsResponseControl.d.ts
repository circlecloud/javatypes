declare namespace javax {
    namespace naming {
        namespace ldap {
            /**
             * Indicates the end of a batch of search results.
             * Contains an estimate of the total number of entries in the result set
             * and an opaque cookie. The cookie must be supplied to the next search
             * operation in order to get the next batch of results.
             * <p>
             * The code sample in {@link PagedResultsControl} shows how this class may
             * be used.
             * <p>
             * This class implements the LDAPv3 Response Control for
             * paged-results as defined in
             * <a href="http://www.ietf.org/rfc/rfc2696">RFC 2696</a>.
             * The control's value has the following ASN.1 definition:
             * <pre>
             * realSearchControlValue ::= SEQUENCE {
             * size      INTEGER (0..maxInt),
             * -- requested page size from client
             * -- result set size estimate from server
             * cookie    OCTET STRING
             * }
             * </pre>
             * @since 1.5
             * @see PagedResultsControl
             * @author Vincent Ryan
             */
            // @ts-ignore
            class PagedResultsResponseControl extends javax.naming.ldap.BasicControl {
                /**
                 * Constructs a paged-results response control.
                 * @param id              The control's object identifier string.
                 * @param criticality     The control's criticality.
                 * @param value           The control's ASN.1 BER encoded value.
                 *                           It is not cloned - any changes to value
                 *                           will affect the contents of the control.
                 * @exception IOException   If an error was encountered while decoding
                 *                           the control's value.
                 */
                // @ts-ignore
                constructor(id: java.lang.String | string, criticality: boolean, value: number /*byte*/[])
                /**
                 * The paged-results response control's assigned object identifier
                 * is 1.2.840.113556.1.4.319.
                 */
                // @ts-ignore
                public static readonly OID: java.lang.String | string
                /**
                 * Retrieves (an estimate of) the number of entries in the search result.
                 * @return The number of entries in the search result, or zero if unknown.
                 */
                // @ts-ignore
                public getResultSize(): number /*int*/
                /**
                 * Retrieves the server-generated cookie. Null is returned when there are
                 * no more entries for the server to return.
                 * @return A possibly null server-generated cookie. It is not cloned - any
                 *          changes to the cookie will update the control's state and thus
                 *          are not recommended.
                 */
                // @ts-ignore
                public getCookie(): number /*byte*/[]
            }
        }
    }
}
