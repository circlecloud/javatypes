declare namespace javax {
    namespace xml {
        namespace soap {
            /**
             * A container for <code>DetailEntry</code> objects. <code>DetailEntry</code>
             * objects give detailed error information that is application-specific and
             * related to the <code>SOAPBody</code> object that contains it.
             * <P>
             * A <code>Detail</code> object, which is part of a <code>SOAPFault</code>
             * object, can be retrieved using the method <code>SOAPFault.getDetail</code>.
             * The <code>Detail</code> interface provides two methods. One creates a new
             * <code>DetailEntry</code> object and also automatically adds it to
             * the <code>Detail</code> object. The second method gets a list of the
             * <code>DetailEntry</code> objects contained in a <code>Detail</code>
             * object.
             * <P>
             * The following code fragment, in which <i>sf</i> is a <code>SOAPFault</code>
             * object, gets its <code>Detail</code> object (<i>d</i>), adds a new
             * <code>DetailEntry</code> object to <i>d</i>, and then gets a list of all the
             * <code>DetailEntry</code> objects in <i>d</i>. The code also creates a
             * <code>Name</code> object to pass to the method <code>addDetailEntry</code>.
             * The variable <i>se</i>, used to create the <code>Name</code> object,
             * is a <code>SOAPEnvelope</code> object.
             * <PRE>
             * Detail d = sf.getDetail();
             * Name name = se.createName("GetLastTradePrice", "WOMBAT",
             * "http://www.wombat.org/trader");
             * d.addDetailEntry(name);
             * Iterator it = d.getDetailEntries();
             * </PRE>
             */
            // @ts-ignore
            interface Detail extends javax.xml.soap.SOAPFaultElement {
                /**
                 * Creates a new <code>DetailEntry</code> object with the given
                 * name and adds it to this <code>Detail</code> object.
                 * @param name a <code>Name</code> object identifying the
                 *          new <code>DetailEntry</code> object
                 * @exception SOAPException thrown when there is a problem in adding a
                 *  DetailEntry object to this Detail object.
                 * @see Detail#addDetailEntry(QName qname)
                 */
                // @ts-ignore
                addDetailEntry(name: javax.xml.soap.Name): javax.xml.soap.DetailEntry
                /**
                 * Creates a new <code>DetailEntry</code> object with the given
                 * QName and adds it to this <code>Detail</code> object. This method
                 * is the preferred over the one using Name.
                 * @param qname a <code>QName</code> object identifying the
                 *          new <code>DetailEntry</code> object
                 * @exception SOAPException thrown when there is a problem in adding a
                 *  DetailEntry object to this Detail object.
                 * @see Detail#addDetailEntry(Name name)
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                addDetailEntry(qname: javax.xml.namespace.QName): javax.xml.soap.DetailEntry
                /**
                 * Gets an Iterator over all of the <code>DetailEntry</code>s in this <code>Detail</code> object.
                 * @return an <code>Iterator</code> object over the <code>DetailEntry</code>
                 *              objects in this <code>Detail</code> object
                 */
                // @ts-ignore
                getDetailEntries(): java.util.Iterator<any>
            }
        }
    }
}
