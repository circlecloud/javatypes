declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * This event indicates that a problem was encountered while converting a
             * string from the XML data into a value of the target Java data type.
             * @author <ul><li>Ryan Shoemaker, Sun Microsystems, Inc.</li><li>Kohsuke Kawaguchi, Sun Microsystems, Inc.</li><li>Joe Fialli, Sun Microsystems, Inc.</li></ul>
             * @see ValidationEvent
             * @see ValidationEventHandler
             * @see Unmarshaller
             * @since JAXB1.0
             */
            // @ts-ignore
            interface ParseConversionEvent extends javax.xml.bind.ValidationEvent {
            }
        }
    }
}
