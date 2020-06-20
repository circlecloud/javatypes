declare namespace javax {
    namespace xml {
        namespace soap {
            /**
             * A <code>SOAPBodyElement</code> object represents the contents in
             * a <code>SOAPBody</code> object.  The <code>SOAPFault</code> interface
             * is a <code>SOAPBodyElement</code> object that has been defined.
             * <P>
             * A new <code>SOAPBodyElement</code> object can be created and added
             * to a <code>SOAPBody</code> object with the <code>SOAPBody</code>
             * method <code>addBodyElement</code>. In the following line of code,
             * <code>sb</code> is a <code>SOAPBody</code> object, and
             * <code>myName</code> is a <code>Name</code> object.
             * <PRE>
             * SOAPBodyElement sbe = sb.addBodyElement(myName);
             * </PRE>
             */
            // @ts-ignore
            interface SOAPBodyElement extends javax.xml.soap.SOAPElement {
            }
        }
    }
}
