declare namespace javax {
    namespace print {
        namespace event {
            /**
             * Class PrintJobAttributeEvent encapsulates an event a PrintService
             * reports to let the client know that one or more printing attributes for a
             * PrintJob have changed.
             */
            // @ts-ignore
            class PrintJobAttributeEvent extends javax.print.event.PrintEvent {
                /**
                 * Constructs a PrintJobAttributeEvent object.
                 * @param source the print job generating  this event
                 * @param attributes the attribute changes being reported
                 * @throws IllegalArgumentException if <code>source</code> is
                 *          <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: javax.print.DocPrintJob, attributes: javax.print.attribute.PrintJobAttributeSet)
                /**
                 * Determine the Print Job to which this print job event pertains.
                 * @return Print Job object.
                 */
                // @ts-ignore
                getPrintJob(): javax.print.DocPrintJob
                /**
                 * Determine the printing attributes that changed and their new values.
                 * @return Attributes containing the new values for the print job
                 *  attributes that changed. The returned set may not be modifiable.
                 */
                // @ts-ignore
                getAttributes(): javax.print.attribute.PrintJobAttributeSet
            }
        }
    }
}
