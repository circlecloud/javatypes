declare namespace javax {
    namespace print {
        namespace event {
            /**
             * Class <code>PrintJobEvent</code> encapsulates common events a print job
             * reports to let a listener know of progress in the processing of the
             * {@link DocPrintJob}.
             */
            // @ts-ignore
            class PrintJobEvent extends javax.print.event.PrintEvent {
                /**
                 * Constructs a <code>PrintJobEvent</code> object.
                 * @param source  a <code>DocPrintJob</code> object
                 * @param reason  an int specifying the reason.
                 * @throws IllegalArgumentException if <code>source</code> is
                 *          <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: javax.print.DocPrintJob, reason: number /*int*/)
                /**
                 * The job was canceled by the {@link javax.print.PrintService PrintService}.
                 */
                // @ts-ignore
                public static readonly JOB_CANCELED: number /*int*/
                /**
                 * The document cis completely printed.
                 */
                // @ts-ignore
                public static readonly JOB_COMPLETE: number /*int*/
                /**
                 * The print service reports that the job cannot be completed.
                 * The application must resubmit the job.
                 */
                // @ts-ignore
                public static readonly JOB_FAILED: number /*int*/
                /**
                 * The print service indicates that a - possibly transient - problem
                 * may require external intervention before the print service can
                 * continue.  One example of an event that can
                 * generate this message is when the printer runs out of paper.
                 */
                // @ts-ignore
                public static readonly REQUIRES_ATTENTION: number /*int*/
                /**
                 * Not all print services may be capable of delivering interesting
                 * events, or even telling when a job is complete. This message indicates
                 * the print job has no further information or communication
                 * with the print service. This message should always be delivered
                 * if a terminal event (completed/failed/canceled) is not delivered.
                 * For example, if messages such as JOB_COMPLETE have NOT been received
                 * before receiving this message, the only inference that should be drawn
                 * is that the print service does not support delivering such an event.
                 */
                // @ts-ignore
                public static readonly NO_MORE_EVENTS: number /*int*/
                /**
                 * The job is not necessarily printed yet, but the data has been transferred
                 * successfully from the client to the print service. The client may
                 * free data resources.
                 */
                // @ts-ignore
                public static readonly DATA_TRANSFER_COMPLETE: number /*int*/
                /**
                 * Gets the reason for this event.
                 * @return reason int.
                 */
                // @ts-ignore
                public getPrintEventType(): number /*int*/
                /**
                 * Determines the <code>DocPrintJob</code> to which this print job
                 * event pertains.
                 * @return the <code>DocPrintJob</code> object that represents the
                 *           print job that reports the events encapsulated by this
                 *           <code>PrintJobEvent</code>.
                 */
                // @ts-ignore
                public getPrintJob(): javax.print.DocPrintJob
            }
        }
    }
}
