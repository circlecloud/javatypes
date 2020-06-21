declare namespace javax {
    namespace xml {
        namespace stream {
            /**
             * This interface is used to report non-fatal errors.
             * Only warnings should be echoed through this interface.
             * @version 1.0
             * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
             * @since 1.6
             */
            // @ts-ignore
            interface XMLReporter {
                /**
                 * Report the desired message in an application specific format.
                 * Only warnings and non-fatal errors should be reported through
                 * this interface.
                 * Fatal errors should be thrown as XMLStreamException.
                 * @param message the error message
                 * @param errorType an implementation defined error type
                 * @param relatedInformation information related to the error, if available
                 * @param location the location of the error, if available
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                report(message: java.lang.String | string, errorType: java.lang.String | string, relatedInformation: java.lang.Object | any, location: javax.xml.stream.Location): void
            }
        }
    }
}
