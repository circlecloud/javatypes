declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class JobStateReason is a printing attribute class, an enumeration, that
                 * provides additional information about the job's current state, i.e.,
                 * information that augments the value of the job's {@link JobState JobState}
                 * attribute. Class JobStateReason defines standard job state reason values. A
                 * Print Service implementation only needs to report those job state
                 * reasons which are appropriate for the particular implementation; it does not
                 * have to report every defined job state reason.
                 * <P>
                 * Instances of JobStateReason do not appear in a Print Job's attribute set
                 * directly. Rather, a {@link JobStateReasons JobStateReasons} attribute appears
                 * in the Print Job's attribute set. The {@link JobStateReasons JobStateReasons}
                 * attribute contains zero, one, or more than one JobStateReason objects which
                 * pertain to the Print Job's status. The printer adds a JobStateReason object
                 * to the Print Job's {@link JobStateReasons JobStateReasons} attribute when the
                 * corresponding condition becomes true of the Print Job, and the printer
                 * removes the JobStateReason object again when the corresponding condition
                 * becomes false, regardless of whether the Print Job's overall {@link JobState
                 * JobState} also changed.
                 * <P>
                 * <B>IPP Compatibility:</B> The category name returned by
                 * <CODE>getName()</CODE> is the IPP attribute name.  The enumeration's
                 * integer value is the IPP enum value.  The <code>toString()</code> method
                 * returns the IPP string representation of the attribute value.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class JobStateReason extends javax.print.attribute.EnumSyntax implements javax.print.attribute.Attribute {
                    /**
                     * Construct a new job state reason enumeration value with the given
                     * integer  value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * The printer has created the Print Job, but the printer has not finished
                     * accessing or accepting all the print data yet.
                     */
                    // @ts-ignore
                    public static readonly JOB_INCOMING: javax.print.attribute.standard.JobStateReason
                    /**
                     * The printer has created the Print Job, but the printer is expecting
                     * additional print data before it can move the job into the PROCESSING
                     * state. If a printer starts processing before it has received all data,
                     * the printer removes the JOB_DATA_INSUFFICIENT reason, but the
                     * JOB_INCOMING reason remains. If a printer starts processing after it
                     * has received all data, the printer removes the JOB_DATA_INSUFFICIENT
                     * and JOB_INCOMING reasons at the same time.
                     */
                    // @ts-ignore
                    public static readonly JOB_DATA_INSUFFICIENT: javax.print.attribute.standard.JobStateReason
                    /**
                     * The Printer could not access one or more documents passed by reference
                     * (i.e., the print data representation object is a URL). This reason is
                     * intended to cover any file access problem,including file does not exist
                     * and access denied because of an access control problem. Whether the
                     * printer aborts the job and moves the job to the ABORTED job state or
                     * prints all documents that are accessible and moves the job to the
                     * COMPLETED job state and adds the COMPLETED_WITH_ERRORS reason to the
                     * job's {@link JobStateReasons JobStateReasons} attribute depends on
                     * implementation and/or site policy. This value should be supported if
                     * the printer supports doc flavors with URL print data representation
                     * objects.
                     */
                    // @ts-ignore
                    public static readonly DOCUMENT_ACCESS_ERROR: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job was not completely submitted for some unforeseen reason.
                     * Possibilities include (1) the printer has crashed before the job was
                     * fully submitted by the client, (2) the printer or the document transfer
                     * method has crashed in some non-recoverable way before the document data
                     * was entirely transferred to the printer, (3) the client crashed before
                     * the job was fully submitted.
                     */
                    // @ts-ignore
                    public static readonly SUBMISSION_INTERRUPTED: javax.print.attribute.standard.JobStateReason
                    /**
                     * The printer is transmitting the job to the output device.
                     */
                    // @ts-ignore
                    public static readonly JOB_OUTGOING: javax.print.attribute.standard.JobStateReason
                    /**
                     * The value of the job's {@link JobHoldUntil JobHoldUntil} attribute was
                     * specified with a date-time that is still in the future. The job must
                     * not be a candidate for processing until this reason is removed and
                     * there are
                     * no other reasons to hold the job. This value should be supported if the
                     * {@link JobHoldUntil JobHoldUntil} job template attribute is supported.
                     */
                    // @ts-ignore
                    public static readonly JOB_HOLD_UNTIL_SPECIFIED: javax.print.attribute.standard.JobStateReason
                    /**
                     * At least one of the resources needed by the job, such as media, fonts,
                     * resource objects, etc., is not ready on any of the physical printers
                     * for which the job is a candidate. This condition may be detected
                     * when the job is accepted, or subsequently while the job is pending
                     * or processing, depending on implementation.
                     * The job may remain in its current state or
                     * be moved to the PENDING_HELD state, depending on implementation and/or
                     * job scheduling policy.
                     */
                    // @ts-ignore
                    public static readonly RESOURCES_ARE_NOT_READY: javax.print.attribute.standard.JobStateReason
                    /**
                     * The value of the printer's {@link PrinterStateReasons
                     * PrinterStateReasons} attribute contains a {@link PrinterStateReason
                     * PrinterStateReason} value of STOPPED_PARTLY.
                     */
                    // @ts-ignore
                    public static readonly PRINTER_STOPPED_PARTLY: javax.print.attribute.standard.JobStateReason
                    /**
                     * The value of the printer's {@link PrinterState PrinterState} attribute
                     * ia STOPPED.
                     */
                    // @ts-ignore
                    public static readonly PRINTER_STOPPED: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job is in the PROCESSING state, but more specifically, the printer
                     * ia interpreting the document data.
                     */
                    // @ts-ignore
                    public static readonly JOB_INTERPRETING: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job is in the PROCESSING state, but more specifically, the printer
                     * has queued the document data.
                     */
                    // @ts-ignore
                    public static readonly JOB_QUEUED: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job is in the PROCESSING state, but more specifically, the printer
                     * is interpreting document data and producing another electronic
                     * representation.
                     */
                    // @ts-ignore
                    public static readonly JOB_TRANSFORMING: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job is in the PENDING_HELD, PENDING, or PROCESSING state, but more
                     * specifically, the printer has completed enough processing of the document
                     * to be able to start marking and the job is waiting for the marker.
                     * Systems that require human intervention to release jobs put the job into
                     * the PENDING_HELD job state. Systems that automatically select a job to
                     * use the marker put the job into the PENDING job state or keep the job
                     * in the PROCESSING job state while waiting for the marker, depending on
                     * implementation. All implementations put the job into (or back into) the
                     * PROCESSING state when marking does begin.
                     */
                    // @ts-ignore
                    public static readonly JOB_QUEUED_FOR_MARKER: javax.print.attribute.standard.JobStateReason
                    /**
                     * The output device is marking media. This value is useful for printers
                     * which spend a great deal of time processing (1) when no marking is
                     * happening and then want to show that marking is now happening or (2) when
                     * the job is in the process of being canceled or aborted while the job
                     * remains in the PROCESSING state, but the marking has not yet stopped so
                     * that impression or sheet counts are still increasing for the job.
                     */
                    // @ts-ignore
                    public static readonly JOB_PRINTING: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job was canceled by the owner of the job, i.e., by a user whose
                     * authenticated identity is the same as the value of the originating user
                     * that created the Print Job, or by some other authorized end-user, such as
                     * a member of the job owner's security group. This value should be
                     * supported.
                     */
                    // @ts-ignore
                    public static readonly JOB_CANCELED_BY_USER: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job was canceled by the operator, i.e., by a user who has been
                     * authenticated as having operator privileges (whether local or remote). If
                     * the security policy is to allow anyone to cancel anyone's job, then this
                     * value may be used when the job is canceled by someone other than the
                     * owner of the job. For such a security policy, in effect, everyone is an
                     * operator as far as canceling jobs is concerned. This value should be
                     * supported if the implementation permits canceling by someone other than
                     * the owner of the job.
                     */
                    // @ts-ignore
                    public static readonly JOB_CANCELED_BY_OPERATOR: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job was canceled by an unidentified local user, i.e., a user at a
                     * console at the device. This value should be supported if the
                     * implementation supports canceling jobs at the console.
                     */
                    // @ts-ignore
                    public static readonly JOB_CANCELED_AT_DEVICE: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job was aborted by the system. Either the job (1) is in the process
                     * of being aborted, (2) has been aborted by the system and placed in the
                     * ABORTED state, or (3) has been aborted by the system and placed in the
                     * PENDING_HELD state, so that a user or operator can manually try the job
                     * again. This value should be supported.
                     */
                    // @ts-ignore
                    public static readonly ABORTED_BY_SYSTEM: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job was aborted by the system because the printer determined while
                     * attempting to decompress the document's data that the compression is
                     * actually not among those supported by the printer. This value must be
                     * supported, since {@link Compression Compression} is a required doc
                     * description attribute.
                     */
                    // @ts-ignore
                    public static readonly UNSUPPORTED_COMPRESSION: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job was aborted by the system because the printer encountered an
                     * error in the document data while decompressing it. If the printer posts
                     * this reason, the document data has already passed any tests that would
                     * have led to the UNSUPPORTED_COMPRESSION job state reason.
                     */
                    // @ts-ignore
                    public static readonly COMPRESSION_ERROR: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job was aborted by the system because the document data's document
                     * format (doc flavor) is not among those supported by the printer. If the
                     * client specifies a doc flavor with a MIME type of
                     * <CODE>"application/octet-stream"</CODE>, the printer may abort the job if
                     * the printer cannot determine the document data's actual format through
                     * auto-sensing (even if the printer supports the document format if
                     * specified explicitly). This value must be supported, since a doc flavor
                     * is required to be specified for each doc.
                     */
                    // @ts-ignore
                    public static readonly UNSUPPORTED_DOCUMENT_FORMAT: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job was aborted by the system because the printer encountered an
                     * error in the document data while processing it. If the printer posts this
                     * reason, the document data has already passed any tests that would have
                     * led to the UNSUPPORTED_DOCUMENT_FORMAT job state reason.
                     */
                    // @ts-ignore
                    public static readonly DOCUMENT_FORMAT_ERROR: javax.print.attribute.standard.JobStateReason
                    /**
                     * The requester has canceled the job or the printer has aborted the job,
                     * but the printer is still performing some actions on the job until a
                     * specified stop point occurs or job termination/cleanup is completed.
                     * <P>
                     * If the implementation requires some measurable time to cancel the job in
                     * the PROCESSING or PROCESSING_STOPPED job states, the printer must use
                     * this reason to indicate that the printer is still performing some actions
                     * on the job while the job remains in the PROCESSING or PROCESSING_STOPPED
                     * state. After all the job's job description attributes have stopped
                     * incrementing, the printer moves the job from the PROCESSING state to the
                     * CANCELED or ABORTED job states.
                     */
                    // @ts-ignore
                    public static readonly PROCESSING_TO_STOP_POINT: javax.print.attribute.standard.JobStateReason
                    /**
                     * The printer is off-line and accepting no jobs. All PENDING jobs are put
                     * into the PENDING_HELD state. This situation could be true if the
                     * service's or document transform's input is impaired or broken.
                     */
                    // @ts-ignore
                    public static readonly SERVICE_OFF_LINE: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job completed successfully. This value should be supported.
                     */
                    // @ts-ignore
                    public static readonly JOB_COMPLETED_SUCCESSFULLY: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job completed with warnings. This value should be supported if the
                     * implementation detects warnings.
                     */
                    // @ts-ignore
                    public static readonly JOB_COMPLETED_WITH_WARNINGS: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job completed with errors (and possibly warnings too). This value
                     * should be supported if the implementation detects errors.
                     */
                    // @ts-ignore
                    public static readonly JOB_COMPLETED_WITH_ERRORS: javax.print.attribute.standard.JobStateReason
                    /**
                     * This job is retained and is currently able to be restarted. If
                     * JOB_RESTARTABLE is contained in the job's {@link JobStateReasons
                     * JobStateReasons} attribute, then the printer must accept a request to
                     * restart that job. This value should be supported if restarting jobs is
                     * supported. <I>[The capability for restarting jobs is not in the Java
                     * Print Service API at present.]</I>
                     */
                    // @ts-ignore
                    public static readonly JOB_RESTARTABLE: javax.print.attribute.standard.JobStateReason
                    /**
                     * The job has been forwarded to a device or print system that is unable to
                     * send back status. The printer sets the job's {@link JobState JobState}
                     * attribute to COMPLETED and adds the QUEUED_IN_DEVICE reason to the job's
                     * {@link JobStateReasons JobStateReasons} attribute to indicate that the
                     * printer has no additional information about the job and never will have
                     * any better information.
                     */
                    // @ts-ignore
                    public static readonly QUEUED_IN_DEVICE: javax.print.attribute.standard.JobStateReason
                    /**
                     * Returns the string table for class JobStateReason.
                     */
                    // @ts-ignore
                    getStringTable(): string[]
                    /**
                     * Returns the enumeration value table for class JobStateReason.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class JobStateReason and any vendor-defined subclasses, the
                     * category  is class JobStateReason itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class JobStateReason and any vendor-defined subclasses, the
                     * category name is <CODE>"job-state-reason"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
