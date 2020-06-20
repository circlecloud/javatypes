declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class PrinterStateReason is a printing attribute class, an enumeration,
                 * that provides additional information about the printer's current state,
                 * i.e., information that augments the value of the printer's
                 * {@link PrinterState PrinterState} attribute.
                 * Class PrinterStateReason defines standard printer
                 * state reason values. A Print Service implementation only needs to report
                 * those printer state reasons which are appropriate for the particular
                 * implementation; it does not have to report every defined printer state
                 * reason.
                 * <P>
                 * Instances of PrinterStateReason do not appear in a Print Service's
                 * attribute set directly.
                 * Rather, a {@link PrinterStateReasons PrinterStateReasons}
                 * attribute appears in the Print Service's attribute set. The {@link
                 * PrinterStateReasons PrinterStateReasons} attribute contains zero, one, or
                 * more than one PrinterStateReason objects which pertain to the
                 * Print Service's status, and each PrinterStateReason object is
                 * associated with a {@link Severity Severity} level of REPORT (least severe),
                 * WARNING, or ERROR (most severe). The printer adds a PrinterStateReason
                 * object to the Print Service's
                 * {@link PrinterStateReasons PrinterStateReasons} attribute when the
                 * corresponding condition becomes true of the printer, and the printer
                 * removes the PrinterStateReason object again when the corresponding
                 * condition becomes false, regardless of whether the Print Service's overall
                 * {@link PrinterState PrinterState} also changed.
                 * <P>
                 * <B>IPP Compatibility:</B>
                 * The string values returned by each individual {@link PrinterStateReason} and
                 * associated {@link Severity} object's <CODE>toString()</CODE>
                 * methods, concatenated together with a hyphen (<CODE>"-"</CODE>) in
                 * between, gives the IPP keyword value for a {@link PrinterStateReasons}.
                 * The category name returned by <CODE>getName()</CODE> gives the IPP
                 * attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class PrinterStateReason extends javax.print.attribute.EnumSyntax implements javax.print.attribute.Attribute {
                    /**
                     * Construct a new printer state reason enumeration value with
                     * the given integer value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * The printer has detected an error other than ones listed below.
                     */
                    // @ts-ignore
                    readonly OTHER: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * A tray has run out of media.
                     */
                    // @ts-ignore
                    readonly MEDIA_NEEDED: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The device has a media jam.
                     */
                    // @ts-ignore
                    readonly MEDIA_JAM: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * Someone has paused the printer, but the device(s) are taking an
                     * appreciable time to stop. Later, when all output has stopped,
                     * the {@link  PrinterState PrinterState} becomes STOPPED,
                     * and the PAUSED value replaces
                     * the MOVING_TO_PAUSED value in the {@link PrinterStateReasons
                     * PrinterStateReasons} attribute. This value must be supported if the
                     * printer can be paused and the implementation takes significant time to
                     * pause a device in certain circumstances.
                     */
                    // @ts-ignore
                    readonly MOVING_TO_PAUSED: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * Someone has paused the printer and the printer's {@link PrinterState
                     * PrinterState} is STOPPED. In this state, a printer must not produce
                     * printed output, but it must perform other operations requested by a
                     * client. If a printer had been printing a job when the printer was
                     * paused,
                     * the Printer must resume printing that job when the printer is no longer
                     * paused and leave no evidence in the printed output of such a pause.
                     * This value must be supported if the printer can be paused.
                     */
                    // @ts-ignore
                    readonly PAUSED: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * Someone has removed a printer from service, and the device may be
                     * powered down or physically removed.
                     * In this state, a printer must not produce
                     * printed output, and unless the printer is realized by a print server
                     * that is still active, the printer must perform no other operations
                     * requested by a client.
                     * If a printer had been printing a job when it was shut down,
                     * the printer need not resume printing that job when the printer is no
                     * longer shut down. If the printer resumes printing such a job, it may
                     * leave evidence in the printed output of such a shutdown, e.g. the part
                     * printed before the shutdown may be printed a second time after the
                     * shutdown.
                     */
                    // @ts-ignore
                    readonly SHUTDOWN: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The printer has scheduled a job on the output device and is in the
                     * process of connecting to a shared network output device (and might not
                     * be able to actually start printing the job for an arbitrarily long time
                     * depending on the usage of the output device by other servers on the
                     * network).
                     */
                    // @ts-ignore
                    readonly CONNECTING_TO_DEVICE: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The server was able to connect to the output device (or is always
                     * connected), but was unable to get a response from the output device.
                     */
                    // @ts-ignore
                    readonly TIMED_OUT: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The printer is in the process of stopping the device and will be
                     * stopped in a while.
                     * When the device is stopped, the printer will change the
                     * {@link PrinterState PrinterState} to STOPPED. The STOPPING reason is
                     * never an error, even for a printer with a single output device. When an
                     * output device ceases accepting jobs, the printer's {@link
                     * PrinterStateReasons PrinterStateReasons} will have this reason while
                     * the output device completes printing.
                     */
                    // @ts-ignore
                    readonly STOPPING: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * When a printer controls more than one output device, this reason
                     * indicates that one or more output devices are stopped. If the reason's
                     * severity is a report, fewer than half of the output devices are
                     * stopped.
                     * If the reason's severity is a warning, half or more but fewer than
                     * all of the output devices are stopped.
                     */
                    // @ts-ignore
                    readonly STOPPED_PARTLY: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The device is low on toner.
                     */
                    // @ts-ignore
                    readonly TONER_LOW: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The device is out of toner.
                     */
                    // @ts-ignore
                    readonly TONER_EMPTY: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The limit of persistent storage allocated for spooling has been
                     * reached.
                     * The printer is temporarily unable to accept more jobs. The printer will
                     * remove this reason when it is able to accept more jobs.
                     * This value should  be used by a non-spooling printer that only
                     * accepts one or a small number
                     * jobs at a time or a spooling printer that has filled the spool space.
                     */
                    // @ts-ignore
                    readonly SPOOL_AREA_FULL: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * One or more covers on the device are open.
                     */
                    // @ts-ignore
                    readonly COVER_OPEN: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * One or more interlock devices on the printer are unlocked.
                     */
                    // @ts-ignore
                    readonly INTERLOCK_OPEN: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * One or more doors on the device are open.
                     */
                    // @ts-ignore
                    readonly DOOR_OPEN: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * One or more input trays are not in the device.
                     */
                    // @ts-ignore
                    readonly INPUT_TRAY_MISSING: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * At least one input tray is low on media.
                     */
                    // @ts-ignore
                    readonly MEDIA_LOW: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * At least one input tray is empty.
                     */
                    // @ts-ignore
                    readonly MEDIA_EMPTY: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * One or more output trays are not in the device.
                     */
                    // @ts-ignore
                    readonly OUTPUT_TRAY_MISSING: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * One or more output areas are almost full
                     * (e.g. tray, stacker, collator).
                     */
                    // @ts-ignore
                    readonly OUTPUT_AREA_ALMOST_FULL: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * One or more output areas are full (e.g. tray, stacker, collator).
                     */
                    // @ts-ignore
                    readonly OUTPUT_AREA_FULL: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The device is low on at least one marker supply (e.g. toner, ink,
                     * ribbon).
                     */
                    // @ts-ignore
                    readonly MARKER_SUPPLY_LOW: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The device is out of at least one marker supply (e.g. toner, ink,
                     * ribbon).
                     */
                    // @ts-ignore
                    readonly MARKER_SUPPLY_EMPTY: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The device marker supply waste receptacle is almost full.
                     */
                    // @ts-ignore
                    readonly MARKER_WASTE_ALMOST_FULL: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The device marker supply waste receptacle is full.
                     */
                    // @ts-ignore
                    readonly MARKER_WASTE_FULL: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The fuser temperature is above normal.
                     */
                    // @ts-ignore
                    readonly FUSER_OVER_TEMP: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The fuser temperature is below normal.
                     */
                    // @ts-ignore
                    readonly FUSER_UNDER_TEMP: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The optical photo conductor is near end of life.
                     */
                    // @ts-ignore
                    readonly OPC_NEAR_EOL: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The optical photo conductor is no longer functioning.
                     */
                    // @ts-ignore
                    readonly OPC_LIFE_OVER: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The device is low on developer.
                     */
                    // @ts-ignore
                    readonly DEVELOPER_LOW: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * The device is out of developer.
                     */
                    // @ts-ignore
                    readonly DEVELOPER_EMPTY: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * An interpreter resource is unavailable (e.g., font, form).
                     */
                    // @ts-ignore
                    readonly INTERPRETER_RESOURCE_UNAVAILABLE: javax.print.attribute.standard.PrinterStateReason
                    /**
                     * Returns the string table for class PrinterStateReason.
                     */
                    // @ts-ignore
                    getStringTable(): java.lang.String[]
                    /**
                     * Returns the enumeration value table for class PrinterStateReason.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class PrinterStateReason and any vendor-defined subclasses, the
                     * category is class PrinterStateReason itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class PrinterStateReason and any vendor-defined subclasses, the
                     * category name is <CODE>"printer-state-reason"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
