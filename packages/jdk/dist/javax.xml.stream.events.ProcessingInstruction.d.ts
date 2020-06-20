declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                /**
                 * An interface that describes the data found in processing instructions
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @since 1.6
                 */
                // @ts-ignore
                interface ProcessingInstruction extends javax.xml.stream.events.XMLEvent {
                    /**
                     * The target section of the processing instruction
                     * @return the String value of the PI or null
                     */
                    // @ts-ignore
                    getTarget(): java.lang.String
                    /**
                     * The data section of the processing instruction
                     * @return the String value of the PI's data or null
                     */
                    // @ts-ignore
                    getData(): java.lang.String
                }
            }
        }
    }
}
