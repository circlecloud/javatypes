declare namespace javax {
    namespace print {
        /**
         * This class is a collection of UI convenience methods which provide a
         * graphical user dialog for browsing print services looked up through the Java
         * Print Service API.
         * <p>
         * The dialogs follow a standard pattern of acting as a continue/cancel option
         * for a user as well as allowing the user to select the print service to use
         * and specify choices such as paper size and number of copies.
         * <p>
         * <p>
         * The dialogs are designed to work with pluggable print services though the
         * public APIs of those print services.
         * <p>
         * If a print service provides any vendor extensions these may be made
         * accessible to the user through a vendor supplied tab panel Component.
         * Such a vendor extension is encouraged to use Swing! and to support its
         * accessibility APIs.
         * The vendor extensions should return the settings as part of the
         * AttributeSet.
         * Applications which want to preserve the user settings should use those
         * settings to specify the print job.
         * Note that this class is not referenced by any other part of the Java
         * Print Service and may not be included in profiles which cannot depend
         * on the presence of the AWT packages.
         */
        // @ts-ignore
        class ServiceUI extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Presents a dialog to the user for selecting a print service (printer).
             * It is displayed at the location specified by the application and
             * is modal.
             * If the specification is invalid or would make the dialog not visible it
             * will be displayed at a location determined by the implementation.
             * The dialog blocks its calling thread and is application modal.
             * <p>
             * The dialog may include a tab panel with custom UI lazily obtained from
             * the PrintService's ServiceUIFactory when the PrintService is browsed.
             * The dialog will attempt to locate a MAIN_UIROLE first as a JComponent,
             * then as a Panel. If there is no ServiceUIFactory or no matching role
             * the custom tab will be empty or not visible.
             * <p>
             * The dialog returns the print service selected by the user if the user
             * OK's the dialog and null if the user cancels the dialog.
             * <p>
             * An application must pass in an array of print services to browse.
             * The array must be non-null and non-empty.
             * Typically an application will pass in only PrintServices capable
             * of printing a particular document flavor.
             * <p>
             * An application may pass in a PrintService to be initially displayed.
             * A non-null parameter must be included in the array of browsable
             * services.
             * If this parameter is null a service is chosen by the implementation.
             * <p>
             * An application may optionally pass in the flavor to be printed.
             * If this is non-null choices presented to the user can be better
             * validated against those supported by the services.
             * An application must pass in a PrintRequestAttributeSet for returning
             * user choices.
             * On calling the PrintRequestAttributeSet may be empty, or may contain
             * application-specified values.
             * <p>
             * These are used to set the initial settings for the initially
             * displayed print service. Values which are not supported by the print
             * service are ignored. As the user browses print services, attributes
             * and values are copied to the new display. If a user browses a
             * print service which does not support a particular attribute-value, the
             * default for that service is used as the new value to be copied.
             * <p>
             * If the user cancels the dialog, the returned attributes will not reflect
             * any changes made by the user.
             * A typical basic usage of this method may be :
             * <pre>{@code
             * PrintService[] services = PrintServiceLookup.lookupPrintServices(
             * DocFlavor.INPUT_STREAM.JPEG, null);
             * PrintRequestAttributeSet attributes = new HashPrintRequestAttributeSet();
             * if (services.length > 0) {
             * PrintService service =  ServiceUI.printDialog(null, 50, 50,
             * services, services[0],
             * null,
             * attributes);
             * if (service != null) {
             * ... print ...
             * }
             * }
             * }</pre>
             * <p>
             * @param gc used to select screen. null means primary or default screen.
             * @param x location of dialog including border in screen coordinates
             * @param y location of dialog including border in screen coordinates
             * @param services to be browsable, must be non-null.
             * @param defaultService - initial PrintService to display.
             * @param flavor - the flavor to be printed, or null.
             * @param attributes on input is the initial application supplied
             *  preferences. This cannot be null but may be empty.
             *  On output the attributes reflect changes made by the user.
             * @return print service selected by the user, or null if the user
             *  cancelled the dialog.
             * @throws HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @throws IllegalArgumentException if services is null or empty,
             *  or attributes is null, or the initial PrintService is not in the
             *  list of browsable services.
             */
            // @ts-ignore
            printDialog(gc: java.awt.GraphicsConfiguration, x: number /*int*/, y: number /*int*/, services: javax.print.PrintService[], defaultService: javax.print.PrintService, flavor: javax.print.DocFlavor, attributes: javax.print.attribute.PrintRequestAttributeSet): javax.print.PrintService
        }
    }
}
