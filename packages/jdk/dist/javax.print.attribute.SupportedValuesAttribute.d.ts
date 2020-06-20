declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Interface SupportedValuesAttribute is a tagging interface which a printing
             * attribute class implements to indicate the attribute describes the supported
             * values for another attribute. For example, if a Print Service instance
             * supports the {@link javax.print.attribute.standard.Copies Copies}
             * attribute, the Print Service instance will have a {@link
             * javax.print.attribute.standard.CopiesSupported CopiesSupported} attribute,
             * which is a SupportedValuesAttribute giving the legal values a client may
             * specify for the {@link javax.print.attribute.standard.Copies Copies}
             * attribute.
             * <P>
             * @author Alan Kaminsky
             */
            // @ts-ignore
            interface SupportedValuesAttribute extends javax.print.attribute.Attribute {
            }
        }
    }
}
