declare namespace javax {
    namespace swing {
        /**
         * A class to monitor the progress of some operation. If it looks
         * like the operation will take a while, a progress dialog will be popped up.
         * When the ProgressMonitor is created it is given a numeric range and a
         * descriptive string. As the operation progresses, call the setProgress method
         * to indicate how far along the [min,max] range the operation is.
         * Initially, there is no ProgressDialog. After the first millisToDecideToPopup
         * milliseconds (default 500) the progress monitor will predict how long
         * the operation will take.  If it is longer than millisToPopup (default 2000,
         * 2 seconds) a ProgressDialog will be popped up.
         * <p>
         * From time to time, when the Dialog box is visible, the progress bar will
         * be updated when setProgress is called.  setProgress won't always update
         * the progress bar, it will only be done if the amount of progress is
         * visibly significant.
         * <p>
         * For further documentation and examples see
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/progress.html">How to Monitor Progress</a>,
         * a section in <em>The Java Tutorial.</em>
         * @see ProgressMonitorInputStream
         * @author James Gosling
         * @author Lynn Monsanto (accessibility)
         */
        // @ts-ignore
        class ProgressMonitor extends java.lang.Object implements javax.accessibility.Accessible {
            /**
             * Constructs a graphic object that shows progress, typically by filling
             * in a rectangular bar as the process nears completion.
             * @param parentComponent the parent component for the dialog box
             * @param message a descriptive message that will be shown
             *         to the user to indicate what operation is being monitored.
             *         This does not change as the operation progresses.
             *         See the message parameters to methods in
             *         {#link JOptionPane#message}
             *         for the range of values.
             * @param note a short note describing the state of the
             *         operation.  As the operation progresses, you can call
             *         setNote to change the note displayed.  This is used,
             *         for example, in operations that iterate through a
             *         list of files to show the name of the file being processes.
             *         If note is initially null, there will be no note line
             *         in the dialog box and setNote will be ineffective
             * @param min the lower bound of the range
             * @param max the upper bound of the range
             * @see JDialog
             * @see JOptionPane
             */
            // @ts-ignore
            constructor(parentComponent: java.awt.Component, message: java.lang.Object | any, note: java.lang.String | string, min: number /*int*/, max: number /*int*/)
            /**
             * The <code>AccessibleContext</code> for the <code>ProgressMonitor</code>
             * @since 1.5
             */
            // @ts-ignore
            accessibleContext: javax.accessibility.AccessibleContext
            /**
             * Indicate the progress of the operation being monitored.
             * If the specified value is &gt;= the maximum, the progress
             * monitor is closed.
             * @param nv an int specifying the current value, between the
             *         maximum and minimum specified for this component
             * @see #setMinimum
             * @see #setMaximum
             * @see #close
             */
            // @ts-ignore
            public setProgress(nv: number /*int*/): void
            /**
             * Indicate that the operation is complete.  This happens automatically
             * when the value set by setProgress is &gt;= max, but it may be called
             * earlier if the operation ends early.
             */
            // @ts-ignore
            public close(): void
            /**
             * Returns the minimum value -- the lower end of the progress value.
             * @return an int representing the minimum value
             * @see #setMinimum
             */
            // @ts-ignore
            public getMinimum(): number /*int*/
            /**
             * Specifies the minimum value.
             * @param m  an int specifying the minimum value
             * @see #getMinimum
             */
            // @ts-ignore
            public setMinimum(m: number /*int*/): void
            /**
             * Returns the maximum value -- the higher end of the progress value.
             * @return an int representing the maximum value
             * @see #setMaximum
             */
            // @ts-ignore
            public getMaximum(): number /*int*/
            /**
             * Specifies the maximum value.
             * @param m  an int specifying the maximum value
             * @see #getMaximum
             */
            // @ts-ignore
            public setMaximum(m: number /*int*/): void
            /**
             * Returns true if the user hits the Cancel button in the progress dialog.
             */
            // @ts-ignore
            public isCanceled(): boolean
            /**
             * Specifies the amount of time to wait before deciding whether or
             * not to popup a progress monitor.
             * @param millisToDecideToPopup  an int specifying the time to wait,
             *         in milliseconds
             * @see #getMillisToDecideToPopup
             */
            // @ts-ignore
            public setMillisToDecideToPopup(millisToDecideToPopup: number /*int*/): void
            /**
             * Returns the amount of time this object waits before deciding whether
             * or not to popup a progress monitor.
             * @see #setMillisToDecideToPopup
             */
            // @ts-ignore
            public getMillisToDecideToPopup(): number /*int*/
            /**
             * Specifies the amount of time it will take for the popup to appear.
             * (If the predicted time remaining is less than this time, the popup
             * won't be displayed.)
             * @param millisToPopup  an int specifying the time in milliseconds
             * @see #getMillisToPopup
             */
            // @ts-ignore
            public setMillisToPopup(millisToPopup: number /*int*/): void
            /**
             * Returns the amount of time it will take for the popup to appear.
             * @see #setMillisToPopup
             */
            // @ts-ignore
            public getMillisToPopup(): number /*int*/
            /**
             * Specifies the additional note that is displayed along with the
             * progress message. Used, for example, to show which file the
             * is currently being copied during a multiple-file copy.
             * @param note  a String specifying the note to display
             * @see #getNote
             */
            // @ts-ignore
            public setNote(note: java.lang.String | string): void
            /**
             * Specifies the additional note that is displayed along with the
             * progress message.
             * @return a String specifying the note to display
             * @see #setNote
             */
            // @ts-ignore
            public getNote(): string
            /**
             * Gets the <code>AccessibleContext</code> for the
             * <code>ProgressMonitor</code>
             * @return the <code>AccessibleContext</code> for the
             *  <code>ProgressMonitor</code>
             * @since 1.5
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
