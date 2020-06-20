declare namespace javax {
    namespace print {
        namespace event {
            /**
             * Implementations of this listener interface should be attached to a
             * {@link javax.print.DocPrintJob DocPrintJob} to monitor the status of
             * the printer job.
             * These callback methods may be invoked on the thread processing the
             * print job, or a service created notification thread. In either case
             * the client should not perform lengthy processing in these callbacks.
             */
            // @ts-ignore
            interface PrintJobListener {
                /**
                 * Called to notify the client that data has been successfully
                 * transferred to the print service, and the client may free
                 * local resources allocated for that data.  The client should
                 * not assume that the data has been completely printed after
                 * receiving this event.
                 * If this event is not received the client should wait for a terminal
                 * event (completed/canceled/failed) before freeing the resources.
                 * @param pje the job generating this event
                 */
                // @ts-ignore
                printDataTransferCompleted(pje: javax.print.event.PrintJobEvent): void
                /**
                 * Called to notify the client that the job completed successfully.
                 * @param pje the job generating this event
                 */
                // @ts-ignore
                printJobCompleted(pje: javax.print.event.PrintJobEvent): void
                /**
                 * Called to notify the client that the job failed to complete
                 * successfully and will have to be resubmitted.
                 * @param pje the job generating this event
                 */
                // @ts-ignore
                printJobFailed(pje: javax.print.event.PrintJobEvent): void
                /**
                 * Called to notify the client that the job was canceled
                 * by a user or a program.
                 * @param pje the job generating this event
                 */
                // @ts-ignore
                printJobCanceled(pje: javax.print.event.PrintJobEvent): void
                /**
                 * Called to notify the client that no more events will be delivered.
                 * One cause of this event being generated is if the job
                 * has successfully completed, but the printing system
                 * is limited in capability and cannot verify this.
                 * This event is required to be delivered if none of the other
                 * terminal events (completed/failed/canceled) are delivered.
                 * @param pje the job generating this event
                 */
                // @ts-ignore
                printJobNoMoreEvents(pje: javax.print.event.PrintJobEvent): void
                /**
                 * Called to notify the client that an error has occurred that the
                 * user might be able to fix.  One example of an error that can
                 * generate this event is when the printer runs out of paper.
                 * @param pje the job generating this event
                 */
                // @ts-ignore
                printJobRequiresAttention(pje: javax.print.event.PrintJobEvent): void
            }
        }
    }
}
