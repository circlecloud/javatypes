declare namespace javax {
    namespace print {
        namespace event {
            /**
             * An abstract adapter class for receiving print job events.
             * The methods in this class are empty.
             * This class exists as a convenience for creating listener objects.
             * Extend this class to create a {@link PrintJobEvent} listener and override
             * the methods for the events of interest.  Unlike the
             * {@link java.awt.event.ComponentListener ComponentListener}
             * interface, this abstract interface provides null methods so that you
             * only need to define the methods you need, rather than all of the methods.
             */
            // @ts-ignore
            abstract class PrintJobAdapter extends java.lang.Object implements javax.print.event.PrintJobListener {
                // @ts-ignore
                constructor()
                /**
                 * Called to notify the client that data has been successfully
                 * transferred to the print service, and the client may free
                 * local resources allocated for that data.  The client should
                 * not assume that the data has been completely printed after
                 * receiving this event.
                 * @param pje the event being notified
                 */
                // @ts-ignore
                public printDataTransferCompleted(pje: javax.print.event.PrintJobEvent): void
                /**
                 * Called to notify the client that the job completed successfully.
                 * @param pje the event being notified
                 */
                // @ts-ignore
                public printJobCompleted(pje: javax.print.event.PrintJobEvent): void
                /**
                 * Called to notify the client that the job failed to complete
                 * successfully and will have to be resubmitted.
                 * @param pje the event being notified
                 */
                // @ts-ignore
                public printJobFailed(pje: javax.print.event.PrintJobEvent): void
                /**
                 * Called to notify the client that the job was canceled
                 * by user or program.
                 * @param pje the event being notified
                 */
                // @ts-ignore
                public printJobCanceled(pje: javax.print.event.PrintJobEvent): void
                /**
                 * Called to notify the client that no more events will be delivered.
                 * One cause of this event being generated is if the job
                 * has successfully completed, but the printing system
                 * is limited in capability and cannot verify this.
                 * This event is required to be delivered if none of the other
                 * terminal events (completed/failed/canceled) are delivered.
                 * @param pje the event being notified
                 */
                // @ts-ignore
                public printJobNoMoreEvents(pje: javax.print.event.PrintJobEvent): void
                /**
                 * Called to notify the client that some possibly user rectifiable
                 * problem occurs (eg printer out of paper).
                 * @param pje the event being notified
                 */
                // @ts-ignore
                public printJobRequiresAttention(pje: javax.print.event.PrintJobEvent): void
            }
        }
    }
}
