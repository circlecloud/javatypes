declare namespace javax {
    namespace print {
        namespace event {
            /**
             * Class PrintServiceAttributeEvent encapsulates an event a
             * Print Service instance reports to let the client know of
             * changes in the print service state.
             */
            // @ts-ignore
            class PrintServiceAttributeEvent extends javax.print.event.PrintEvent {
                /**
                 * Constructs a PrintServiceAttributeEvent object.
                 * @param source the print job generating  this event
                 * @param attributes the attribute changes being reported
                 * @throws IllegalArgumentException if <code>source</code> is
                 *          <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: javax.print.PrintService, attributes: javax.print.attribute.PrintServiceAttributeSet)
                /**
                 * Returns the print service.
                 * @return Print Service object.
                 */
                // @ts-ignore
                public getPrintService(): javax.print.PrintService
                /**
                 * Determine the printing service attributes that changed and their new
                 * values.
                 * @return Attributes containing the new values for the service
                 *  attributes that changed. The returned set may be unmodifiable.
                 */
                // @ts-ignore
                public getAttributes(): javax.print.attribute.PrintServiceAttributeSet
            }
        }
    }
}
